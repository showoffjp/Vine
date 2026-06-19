"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Jonah1Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "CE8QbkUCNK4", title: "Jonah Chapter 1 - The Flight from God" },
    { id: "WZ0bB-GXFQU", title: "The Book of Jonah: Sovereignty and Mercy" },
    { id: "tszFhiOPgPk", title: "Jonah and the Great Storm" },
    { id: "fNk_zzaMoSs", title: "Jonah: Running from God's Call" },
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
      id: "disobedience",
      color: ROSE,
      title: "The Surprising Disobedience of a Prophet",
      body: "Jonah 1 opens with a scandal. The word of the LORD comes to a prophet of Israel, and the prophet flees. This is not the disobedience of an ordinary Israelite struggling with sin; this is the commissioned servant of the LORD, a man who knows the word of God and has spoken it faithfully before (2 Kings 14:25 records Jonah as a prophet whose words the LORD honored), now rising and going in the exact opposite direction of the divine command. The sheer audacity of the flight arrests the reader from the first verse. What would make a prophet do this? The answer Jonah himself gives in chapter 4 is theologically sophisticated and deeply uncomfortable: he fled not because he disbelieved God&rsquo;s power but because he believed in God&rsquo;s character. He knew that God was &ldquo;a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster&rdquo; (4:2), and he did not want that grace extended to Nineveh. The disobedience of Jonah 1 is not the stumbling of a weak believer; it is the willful act of a man who has reduced God&rsquo;s mercy to a tribal possession. This makes the chapter&rsquo;s indictment sharper and more searching than any simple tale of cowardice could be. Jonah is not afraid of Nineveh; he is afraid that God will be kind to them. And so he runs &mdash; not from divine power but from divine love.",
    },
    {
      id: "pursuit",
      color: TEAL,
      title: "God&rsquo;s Sovereign Pursuit of the Fleeing Prophet",
      body: "The narrator&rsquo;s technique in Jonah 1 is to show the sovereignty of God through a cascade of divine actions, each one expressed with the same active Hebrew verb: the LORD &ldquo;hurled&rdquo; a great wind on the sea (v. 4). Later the sailors &ldquo;hurled&rdquo; the cargo (v. 5). Finally they &ldquo;hurled&rdquo; Jonah into the sea (v. 15) &mdash; and the LORD &ldquo;appointed&rdquo; a great fish to swallow him (v. 17). The entire cosmos is enrolled in the pursuit of one fleeing prophet. The wind is God&rsquo;s wind; the storm is God&rsquo;s storm; the fish is God&rsquo;s fish. Jonah thought he could buy a fare and sail away from the presence of the LORD. The text answers that presumption with almost comic swiftness: the LORD threw a storm at the very ship. You cannot outrun the one who controls the weather, the sea, and the creatures of the deep. What is remarkable is the gentleness beneath the sovereignty. God could have simply ended Jonah&rsquo;s life in the storm. Instead he appointed a fish to preserve it. The pursuit of the fleeing prophet is not punishment designed to destroy; it is providence designed to restore. God chases Jonah not to crush him but to recommission him. The sovereign pursuit of the fleeing prophet is, in the end, an act of grace.",
    },
    {
      id: "sailors",
      color: GOLD,
      title: "The Spiritual Irony: Pagan Sailors Pray While the Prophet Sleeps",
      body: "One of the sharpest ironies of Jonah 1 is the spiritual contrast between the prophet and the sailors. When the storm strikes, each sailor cries out to his own god (v. 5). They are pagans, worshippers of multiple deities, and yet they do the most natural and appropriate thing a human being can do in a crisis: they pray. Meanwhile, Jonah &mdash; the prophet of the LORD, the man who knows the one true God, the servant of the creator of heaven and earth and sea &mdash; is below decks, asleep. The captain has to come and wake him: &ldquo;What do you mean, you sleeper? Arise, call out to your God!&rdquo; (v. 6). The words &ldquo;arise&rdquo; and &ldquo;call out&rdquo; are the same words God had used in his commission to Jonah: &ldquo;Arise, go to Nineveh, that great city, and call out against it&rdquo; (v. 2). The pagan captain is, in effect, repeating God&rsquo;s commission to the sleeping prophet. The one who was supposed to call out the word of the LORD must now be exhorted to call out at all by a man who doesn&rsquo;t even know his name. The irony is relentless and devastating. Throughout the chapter, the sailors grow in moral stature: they pray, they labor to save the ship, they reluctantly throw Jonah, and they end by fearing the LORD and offering vows. Jonah, by contrast, sinks steadily lower: he flees, he sleeps, he is finally thrown into the deep. The pagan sailors outperform the Hebrew prophet at every point of spiritual responsiveness.",
    },
    {
      id: "confession",
      color: PURPLE,
      title: "The Great Irony of Jonah&rsquo;s Confession",
      body: "When the lot falls on Jonah and the sailors demand to know who he is and what he has done, Jonah answers with one of the most irony-laden confessions in the Bible: &ldquo;I am a Hebrew, and I fear the LORD, the God of heaven, who made the sea and the dry land&rdquo; (v. 9). Every word of this confession is true. Jonah is indeed a Hebrew. And he does indeed fear the LORD &mdash; that is, he acknowledges the LORD as God, not in the weak sense of intellectual assent but in the sense of genuine covenant allegiance. He identifies the LORD as the God of heaven, the creator of sea and dry land &mdash; the very sea that is raging around them and the dry land Jonah fled from. The irony is that Jonah confesses the sovereignty of the LORD over the sea at the exact moment he is in the sea trying to escape the LORD. He declares God the creator of the dry land while he is running away from the commission God gave him on that dry land. His theology is perfectly correct; his life is perfectly contradicted by that theology. He knows exactly who God is. He has staked his life on the attributes of God &mdash; and he is fleeing from those very attributes. The confession convicts him more thoroughly than any accusation could. The sailors understand immediately: &ldquo;What is this that you have done!&rdquo; (v. 10). The man who fears the LORD has run from the LORD. This is the anatomy of every human act of deliberate spiritual flight.",
    },
    {
      id: "sailors-fear",
      color: GREEN,
      title: "The Sailors&rsquo; Fear of the LORD: Conversion in the Storm",
      body: "Jonah 1 ends with a quiet theological triumph that is easy to miss because the reader&rsquo;s attention is on the prophet. After Jonah is thrown into the sea and the storm immediately ceases, the text records: &ldquo;Then the men feared the LORD exceedingly, and they offered a sacrifice to the LORD and made vows&rdquo; (v. 16). The phrase &ldquo;feared the LORD exceedingly&rdquo; uses the same word that appeared in verse 5 when they feared a great fear during the storm &mdash; but now the object of fear is different. In verse 5 they feared the storm. In verse 16 they fear the LORD. They have undergone a theological reorientation: the power they encountered in the storm they now identify as the power of the God of heaven. They offer a sacrifice &mdash; the proper Israelite response to deliverance &mdash; and make vows, the typical form of grateful commitment to God. These pagan sailors, by the end of chapter 1, have done what Israel was perpetually called to do and perpetually failed to do: they have come to fear the LORD and commit themselves to him. Jonah was sent to call Nineveh to repentance, but in fleeing the commission he became the instrument of the sailors&rsquo; conversion instead. The God who sent Jonah to Nineveh used Jonah&rsquo;s flight to convert an entire ship&rsquo;s crew. The divine purpose cannot be frustrated; it simply takes a different path when the appointed prophet runs the other way.",
    },
    {
      id: "fish",
      color: TEAL,
      title: "The Great Fish: Divine Rescue, Not Divine Punishment",
      body: "The final verse of Jonah 1 is brief and programmatic: &ldquo;And the LORD appointed a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights&rdquo; (v. 17). The temptation is to read the fish as Jonah&rsquo;s punishment &mdash; the divine equivalent of a time-out in a very unpleasant cell. But the grammar and narrative logic of the text resist this reading. The fish is not a trap; it is a vehicle. Jonah has been thrown into the open sea in a storm. Without divine intervention he would drown. The great fish is God&rsquo;s appointed means of keeping Jonah alive &mdash; of rescuing him from the consequences of his own choices. This reading is confirmed by Jonah&rsquo;s prayer in chapter 2, which is a psalm of thanksgiving for deliverance, not a cry of distress from a man being punished. Jonah prays from the belly of the fish as from a place of rescue: &ldquo;out of the belly of Sheol I cried, and you heard my voice&rdquo; (2:2). The fish is the belly of Sheol insofar as it is dark and strange and deep, but it is also the womb of new life for a prophet who chose death over obedience. God did not send the fish to afflict Jonah; he sent it to preserve him for a renewed commission. Jesus&rsquo; own use of the fish image in Matthew 12:40 &mdash; three days and three nights in the heart of the earth &mdash; confirms that the fish is a sign of death-and-resurrection, not merely punishment. Jonah goes down into the deep and comes back. That is the pattern: descent followed by restoration, death followed by new life.",
    },
    {
      id: "going-down",
      color: GOLD,
      title: "The Going-Down Motif: The Trajectory of Flight",
      body: "The Hebrew verb meaning to go down &mdash; to descend &mdash; is one of the structuring patterns of Jonah 1, and it continues through chapter 2 before the reversal comes. The narrator records the word with almost obsessive repetition: Jonah went down to Joppa (v. 3). He went down into the ship (v. 3). He had gone down into the inner part of the ship (v. 5) and was lying there asleep. When the great fish swallows him, Jonah will describe going down to the roots of the mountains (2:6), and the bars of the earth closing upon him forever. The trajectory of flight from God is always downward. Every step away from the divine commission is a step down, a descent, a settling into lower and lower levels of the world&rsquo;s geography and, correspondingly, into lower and lower spiritual states. Joppa is geographically lower than the hill country where God would most naturally be encountered. The ship&rsquo;s hold is lower than the deck. The sea is lower than the ship. The fish&rsquo;s belly is lower than the sea. The roots of the mountains are the lowest point imaginable. Jonah&rsquo;s flight is a sustained descent, a literal going-down that enacts spiritually what every act of disobedience accomplishes: a movement away from the heights of covenant fellowship with God into the depths of self-imposed exile. The reversal in chapter 2 &mdash; &ldquo;Yet you brought up my life from the pit&rdquo; (2:6) &mdash; uses the opposite of going-down: God lifts what Jonah descended. The entire arc of the book is a movement from the downward spiral of flight to the upward pull of divine rescue.",
    },
    {
      id: "sign-of-jonah",
      color: ROSE,
      title: "The Sign of Jonah: Matthew 12 and the Death-Resurrection Pattern",
      body: "Jesus draws directly on Jonah 1:17 when the Pharisees demand a sign from him: &ldquo;An evil and adulterous generation seeks for a sign, but no sign will be given to it except the sign of the prophet Jonah. For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth&rdquo; (Matthew 12:39&ndash;40). The sign Jesus offers is not a miracle of power or a demonstration of authority; it is a pattern of death and resurrection. Jonah went down into a place that by every human reckoning should have been final and came back out. Jesus will do the same, but at an infinitely greater depth: not the belly of a fish but the heart of the earth itself, not three days of uncomfortable preservation but three days of genuine death, not restoration of a fleeing prophet but the resurrection of the Son of God. The parallel is typological, not merely illustrative. Jonah&rsquo;s experience in Jonah 1:17 is a divinely designed foreshadowing of the central event of human history. The great fish is not an embarrassing detail in a children&rsquo;s story; it is a signpost pointing forward to the tomb in the garden outside Jerusalem. And just as Jonah&rsquo;s return from the deep preceded the repentance of Nineveh, the resurrection of Jesus precedes and makes possible the repentance of all nations. The something greater than Jonah (Matthew 12:41) is the one who went to a depth that no fish could reach and came back with life for all who believe.",
    },
  ];

  const verseItems = [
    {
      id: "v1-3",
      ref: "Jonah 1:1&ndash;3",
      title: "The Commission and the Flight &mdash; Jonah Goes Down to Joppa",
      body: "The book opens with its central crisis before the reader has time to settle in: &ldquo;Now the word of the LORD came to Jonah the son of Amittai: &lsquo;Arise, go to Nineveh, that great city, and call out against it, for their evil has come up before me.&rsquo;&rdquo; The commission is clear, direct, and urgent. Nineveh was the capital of the Assyrian empire, the most feared military power of the ancient Near East, a city synonymous with violence and cruelty. Its evil has &ldquo;come up&rdquo; before God &mdash; the same idiom used in Genesis 18:21 when God comes down to see the cry of Sodom that has &ldquo;come up&rdquo; to him. The moral gravity of the city has risen to the point of divine attention. What Jonah is supposed to do with this commission &mdash; &ldquo;call out against it&rdquo; &mdash; is the classic prophetic task of announcing divine judgment. But instead of arising and going as God commanded, Jonah &ldquo;arose to flee to Tarshish from the presence of the LORD.&rdquo; The contrast between God&rsquo;s &ldquo;arise and go&rdquo; and Jonah&rsquo;s &ldquo;arose to flee&rdquo; is the opening irony of the book. Jonah obeyed the grammar of the commission (he arose) but inverted its geography entirely. Tarshish was the farthest western point of the known world, possibly in southern Spain or Sardinia &mdash; roughly the opposite direction from Nineveh. The narrator underlines the descent with three repetitions: Jonah went down to Joppa, found a ship going to Tarshish, went down into it, to go with them to Tarshish, &ldquo;away from the presence of the LORD.&rdquo; The repetition of &ldquo;away from the presence of the LORD&rdquo; twice in verse 3 is the narrator&rsquo;s commentary on what Jonah is really doing. He is not merely changing geography; he is attempting to leave the sphere of the LORD&rsquo;s presence. The theological absurdity of this attempt will be demonstrated in the verses that follow, but the narrator lets Jonah&rsquo;s own intention speak first.",
    },
    {
      id: "v4-6",
      ref: "Jonah 1:4&ndash;6",
      title: "The LORD Hurls a Great Wind; the Sailors Pray; Jonah Sleeps",
      body: "The LORD&rsquo;s response to Jonah&rsquo;s flight is immediate and overwhelming: &ldquo;But the LORD hurled a great wind upon the sea, and there was a mighty tempest on the sea, so that the ship threatened to break up.&rdquo; The verb &ldquo;hurled&rdquo; conveys force and divine intentionality. This is not a naturally occurring storm; it is appointed weather. The ship is threatened with breaking up, and the sailors respond with everything they know: each cries to his own god, they throw the cargo overboard, they labor. Above deck: chaos and prayer. Below deck: a sleeping prophet. The captain must go below and rouse Jonah, and in doing so he unknowingly echoes God&rsquo;s own commission: &ldquo;Arise, call out to your God!&rdquo; The same Hebrew words God used (&ldquo;arise&rdquo; and &ldquo;call out&rdquo;) are now on the lips of a pagan captain who doesn&rsquo;t know them as the language of divine commission. The irony is withering: Jonah fled to avoid calling out to Nineveh; now he must be told to call out at all by someone who doesn&rsquo;t even know his name. The captain adds, &ldquo;Perhaps the God will give a thought to us, that we may not perish&rdquo; &mdash; an expression of hopeful, humble uncertainty that contrasts sharply with Jonah&rsquo;s willful, certain flight. The sailors are grasping for divine help in the dark. Jonah knows exactly where to find it and is lying down in the hold running from it.",
    },
    {
      id: "v7-10",
      ref: "Jonah 1:7&ndash;10",
      title: "The Lot Falls on Jonah; His Confession of the God He Flees",
      body: "Unable to identify the cause of the storm through prayer alone, the sailors cast lots &mdash; a standard ancient Near Eastern method for determining divine will. The lot falls on Jonah. The text presents the outcome matter-of-factly: divine justice is at work, and it has no intention of hiding. The sailors then interrogate Jonah: &ldquo;Tell us on whose account this evil has come upon us. What is your occupation? And where do you come from? What is your country? And of what people are you?&rdquo; (v. 8). The questions move from immediate situation to identity, from what to who. Jonah&rsquo;s answer is startling in its theological precision: &ldquo;I am a Hebrew, and I fear the LORD, the God of heaven, who made the sea and the dry land&rdquo; (v. 9). Every claim is true. He is a Hebrew &mdash; a member of the covenant people. He fears the LORD &mdash; that is, he acknowledges and reveres the LORD as God. The LORD is the God of heaven &mdash; the universal sovereign. The LORD made the sea and the dry land &mdash; the very sea through which Jonah is sailing and the dry land from which he fled. The irony is immense: Jonah confesses the sovereignty of God over the sea while being in the sea trying to escape that sovereignty. He declares God creator of sea and dry land while running from the commission given to him on that dry land. The sailors understand immediately the significance of what Jonah is telling them: &ldquo;Then the men were exceedingly afraid and said to him, &lsquo;What is this that you have done!&rsquo;&rdquo; (v. 10). They have already been told that Jonah was fleeing from the LORD. Now they understand who that LORD is &mdash; the God of heaven, creator of sea and land &mdash; and the implications are terrifying. A man who knows this God has run from him. No wonder the sea is raging.",
    },
    {
      id: "v11-16",
      ref: "Jonah 1:11&ndash;16",
      title: "Throw Me into the Sea; the Sailors Row Hard; the Sea Calms; the Sailors Fear the LORD",
      body: "With the storm worsening, the sailors ask Jonah what they should do. His answer is extraordinary: &ldquo;Pick me up and hurl me into the sea; then the sea will quiet down for you, for I know it is because of me that this great tempest has come upon you&rdquo; (v. 12). Jonah&rsquo;s willingness to be thrown overboard is not a moment of heroic self-sacrifice &mdash; it is notable that he does not offer to pray or repent or turn back toward Nineveh. He offers death rather than obedience. He would rather go into the sea than go to Nineveh. This tells us everything about the depth of Jonah&rsquo;s resistance. He is not merely uncomfortable with the commission; he prefers death to carrying it out. The sailors, remarkably, do not immediately comply. They row hard to try to bring the ship back to land, unwilling to cause the death of an innocent man even to save themselves. They call out to the LORD: &ldquo;O LORD, let us not perish for this man&rsquo;s life, and lay not on us innocent blood, for you, O LORD, have done as it pleased you&rdquo; (v. 14). These pagan sailors are demonstrating a moral sensitivity that is striking: they acknowledge divine sovereignty, they appeal to the LORD by name, and they express concern about shedding innocent blood. Finally, when they can row no further, they throw Jonah into the sea, and immediately the sea ceases from its raging. The result is the theological climax of the chapter: &ldquo;Then the men feared the LORD exceedingly, and they offered a sacrifice to the LORD and made vows&rdquo; (v. 16). The fear of the storm becomes the fear of the LORD. The pagan sailors have come to know and worship the God of Israel &mdash; through the storm that was meant for a prophet.",
    },
    {
      id: "v17",
      ref: "Jonah 1:17",
      title: "The LORD Appointed a Great Fish: Three Days and Three Nights",
      body: "The final verse of chapter 1 is short but theologically dense: &ldquo;And the LORD appointed a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights.&rdquo; Two elements demand attention. First, the word &ldquo;appointed.&rdquo; God does not merely permit the fish to come; he appoints it. The same verb will be used in chapters 4:6, 4:7, and 4:8 for the plant, the worm, and the scorching east wind &mdash; God is appointing creation itself as his instruments throughout the book. The fish is not a chance occurrence of nature; it is a divinely commissioned rescue vessel. Second, the number three days and three nights. In the ancient Near East, three days was the conventional period of transition between life and death. After three days in the grave, a person was considered definitively dead. To remain three days and then emerge alive was a resurrection. Jonah enters the fish from the sea &mdash; from what the ancient Israelites understood as the realm of chaos and death &mdash; and will emerge onto dry land. He descends into the depths and will ascend. He is, in the fish, at the threshold of death; he will be given back his life. Jesus identifies this pattern explicitly in Matthew 12:40: just as Jonah was three days and three nights in the belly of the great fish, so the Son of Man will be three days and three nights in the heart of the earth. The first chapter of Jonah ends not with punishment but with preservation &mdash; the fleeing prophet held alive in the deep, waiting for the divine word that will send him to the surface and, eventually, to Nineveh.",
    },
  ];

  const appItems = [
    {
      id: "app-flight",
      color: ROSE,
      title: "When We Run from God&rsquo;s Call",
      body: "Jonah&rsquo;s flight raises a searching question for every believer: in what direction am I running? Jonah&rsquo;s disobedience was not aimless; it had a destination, a ticket, and a paid fare. He was systematic about his evasion. Most of our evasions of God&rsquo;s call are similarly organized. We don&rsquo;t simply refuse; we find a substitute direction, a Tarshish &mdash; something that looks like a legitimate alternative, something that costs us something (Jonah paid the fare) and therefore feels like real commitment. We mistake the energy of our evasion for the energy of genuine calling. The frightening thing about Jonah&rsquo;s flight is not that he was a bad person. He was a genuine prophet of the LORD who had served faithfully before. The flight came not from apostasy but from a misapplication of theology: he knew what God was like and didn&rsquo;t want God to be that way to his enemies. Every believer has a Nineveh &mdash; a person, a group, a community &mdash; toward whom we would rather not be sent, whom we would rather not see receive the mercy of God. The chapter calls us to examine our hearts: are we, like Jonah, organizing our lives away from the people God has called us toward? Are we paying fares to Tarshish while God is pointing at Nineveh?",
    },
    {
      id: "app-sovereignty",
      color: TEAL,
      title: "The God Who Pursues",
      body: "One of the most comforting and challenging realities of Jonah 1 is that God does not simply let Jonah go. He could have replaced Jonah with another prophet. He could have sent Nineveh a different messenger. Instead he sent a storm. The pursuit of the fleeing prophet is relentless, creative, and ultimately gentle: the storm is terrifying, but the fish is protective. God&rsquo;s pursuit of Jonah mirrors his pursuit of every person he has called and every soul he intends to save. The means may vary &mdash; storm, fish, circumstance, illness, loss, the unexpected kindness of a stranger, the word of Scripture heard at the wrong moment and lodged in the heart &mdash; but the intention is always restoration. This should both comfort and unsettle us. Comforting: if you are running from God, the storm you are in may be the gentlest possible version of divine pursuit, aimed not at your destruction but at your return. Unsettling: you cannot ultimately outrun the God who appointed the fish. The question is not whether God will catch up with the fleeing believer, but how many storms will be necessary before the believer stops running. Jonah needed one storm and three days in a fish. Others have needed decades. But the God who pursues does not give up.",
    },
    {
      id: "app-irony",
      color: GOLD,
      title: "The Sleeping Prophet and the Praying Pagans",
      body: "The image of the captain rousing Jonah from sleep is an icon of the church in every age. The world around us is often in genuine spiritual crisis &mdash; crying out, searching, asking questions that our tradition has the answers to &mdash; and we are below decks, asleep. The sailors of Jonah 1 were not spiritually indifferent; they were actively seeking answers. They prayed to their gods. They cast lots. They asked the right questions when they found Jonah. They demonstrated moral courage in their reluctance to throw an innocent man overboard. And they recognized the LORD when the sea calmed. They had every spiritual instinct right except they didn&rsquo;t know who to direct those instincts toward. They needed someone to tell them about the LORD, the God of heaven who made the sea and the dry land. And the man who had that knowledge was asleep. The application is not subtle. There are people in your life who are praying to something, asking the right questions, demonstrating genuine moral seriousness &mdash; and what they lack is not more spiritual hunger but a clear introduction to the God who answers. The prophet who has that knowledge must wake up.",
    },
    {
      id: "app-confession",
      color: PURPLE,
      title: "The Convicting Power of True Confession",
      body: "Jonah&rsquo;s confession in verse 9 &mdash; &ldquo;I fear the LORD, the God of heaven, who made the sea and the dry land&rdquo; &mdash; is one of the most self-convicting moments in Scripture. He does not lie about who he is or who his God is. He tells the truth, and the truth convicts him. This is the pattern of every honest encounter with our own theology: when we actually say out loud what we believe about God, the gap between what we confess and how we live becomes visible. Jonah confesses a God of universal sovereignty over sea and land while sailing on that sea in flight from that land. The sailors see the contradiction immediately. How often do our confessions of faith stand in similar tension with our choices? We confess that God is sovereign and then live as though our circumstances are accidents. We confess that God is good and then treat suffering as evidence against him. We confess that he commands us to love our enemies and then organize our lives to avoid them. True confession, when we actually mean it, is always an indictment of any area of life that doesn&rsquo;t align with what we&rsquo;re confessing. Jonah&rsquo;s confession before the sailors is not hypocrisy; it is honesty that exposes hypocrisy. And sometimes the most spiritually productive thing we can do is speak our theology aloud and let it show us where we&rsquo;re living against it.",
    },
    {
      id: "app-fish",
      color: GREEN,
      title: "The Mercy Inside the Judgment",
      body: "The great fish is easy to read as punishment. It is dark, it is enclosed, it is three days in a place no one would choose. But Jonah&rsquo;s own prayer in chapter 2 identifies it as rescue: &ldquo;Yet you brought up my life from the pit&rdquo; (2:6). God did not send the fish to punish Jonah; he sent it to keep Jonah alive when Jonah had chosen to go into the sea. This reframes how we should read difficult providences in our own lives. The season that feels like confinement, the door that slammed shut, the plans that dissolved, the crisis that seemed like pure loss &mdash; may be the appointed fish, the means by which God is keeping alive what would otherwise be destroyed by our own choices. The fish is uncomfortable precisely because it is a place of waiting rather than doing, of being held rather than moving. But waiting in the fish is better than drowning in the sea. And the fish is always temporary: the LORD appointed it to swallow Jonah, and he will appoint it to release him. If you are in the belly of the fish, the question is not how to escape but how to pray &mdash; as Jonah will discover in chapter 2.",
    },
  ];

  const reflectionQuestions = [
    "What is the Nineveh in your own life &mdash; the person, community, or situation God seems to be calling you toward that you have been systematically avoiding? What fare have you been paying to sail in the other direction?",
    "Jonah&rsquo;s flight was theologically motivated: he knew God&rsquo;s character and didn&rsquo;t want God to apply it to Nineveh. Are there people or groups in your world where you hope God&rsquo;s grace has limits? What does that hope reveal about your own theology?",
    "The pagan sailors prayed while the prophet slept. Who in your life or community is demonstrating spiritual hunger without yet knowing the God of heaven? What would it look like to introduce them to the LORD?",
    "The going-down motif in Jonah 1 traces a path of progressive spiritual descent. In what ways do you recognize a downward trajectory in your own life &mdash; choices that move you further from the LORD&rsquo;s commission rather than toward it?",
    "Jonah preferred death to obedience to the Nineveh commission. What areas of your obedience to God feel similarly costly? What would it mean to say &lsquo;I would rather not, and yet not my will but yours&rsquo;?",
    "The great fish was divine rescue disguised as divine judgment. Can you identify a difficult providence in your own life that, in retrospect, was the appointed fish &mdash; uncomfortable but ultimately protective?",
  ];

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
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg, ${CARD} 0%, #0a0a18 100%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "3.5rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: TEAL,
            fontWeight: 700,
            letterSpacing: "0.12em",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            margin: "0 0 0.75rem",
          }}
        >
          Jonah 1
        </p>
        <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 900, margin: "0 0 1rem", lineHeight: 1.15 }}>
          The Flight from God and the Great Storm
        </h1>
        <p
          style={{ color: MUTED, fontSize: "1.1rem", maxWidth: 680, margin: "0 auto 1.5rem", lineHeight: 1.75 }}
          dangerouslySetInnerHTML={{
            __html:
              "A prophet flees from the presence of the LORD. A storm pursues him across the sea. Pagan sailors pray while the prophet sleeps. And a great fish waits in the deep &mdash; not as punishment but as rescue.",
          }}
        />
        <div
          style={{
            display: "inline-block",
            background: `${TEAL}18`,
            border: `1px solid ${TEAL}44`,
            borderRadius: 10,
            padding: "0.9rem 1.4rem",
            maxWidth: 700,
            textAlign: "left",
          }}
        >
          <p
            style={{
              color: TEAL,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 0.4rem",
            }}
          >
            Key Verse &mdash; Jonah 1:3
          </p>
          <p
            style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;But Jonah rose to flee to Tarshish from the presence of the LORD. He went down to Joppa and found a ship going to Tarshish. So he paid the fare and went down into it, to go with them to Tarshish, away from the presence of the LORD.&rdquo;",
            }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          borderBottom: `1px solid ${BORDER}`,
          background: CARD,
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", overflowX: "auto", maxWidth: 900, margin: "0 auto", padding: "0 1rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "1rem 1.4rem",
                background: "none",
                border: "none",
                borderBottom: tab === t ? `2px solid ${TEAL}` : "2px solid transparent",
                color: tab === t ? TEXT : MUTED,
                fontWeight: tab === t ? 700 : 400,
                fontSize: "0.95rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jonah 1 is one of the most economically told stories in all of Scripture. In seventeen verses it moves from a divine commission to a prophet&rsquo;s flight, from a raging storm to pagan prayers, from a confession of faith to the belly of a great fish. At every point the text subverts expectation: the prophet behaves like a pagan, the pagans behave like the devout, and the wild creation &mdash; wind, sea, fish &mdash; obeys God while God&rsquo;s own servant runs. The chapter is not primarily a story about Jonah&rsquo;s character flaws; it is a meditation on the sovereignty of God over every created thing, and on the grace that pursues even those who flee it.",
              }}
            />

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: TEAL,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.3rem",
                }}
              >
                Jonah 1:1&ndash;3
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem" }}>The Commission and the Flight</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The book opens with the standard formula of prophetic commissioning: &ldquo;Now the word of the LORD came to Jonah the son of Amittai.&rdquo; We know from 2 Kings 14:25 that Jonah was a historical prophet from Gath-hepher who prophesied during the reign of Jeroboam II (c. 793&ndash;753 BC), and whose word the LORD honored. He is not a fictional character but a real prophet placed in an extraordinary narrative. The commission is unambiguous: arise, go to Nineveh, that great city, call out against it. The divine motivation is given: &ldquo;their evil has come up before me.&rdquo;",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Instead of arising and going northeast toward Nineveh, Jonah arises and goes west to Joppa, finds a ship bound for Tarshish &mdash; the furthest western reach of the known world &mdash; pays the fare, and goes down into it. The narrator inserts the phrase &ldquo;away from the presence of the LORD&rdquo; twice in verse 3, making explicit what Jonah&rsquo;s actions make implicit: this is not a change of travel plans but a deliberate theological act, an attempt to exit the sphere of divine commission. The repetition of &ldquo;going down&rdquo; &mdash; down to Joppa, down into the ship &mdash; introduces the motif that will structure the entire first movement of the book.",
                }}
              />
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.3rem",
                }}
              >
                Jonah 1:4&ndash;6
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem" }}>The LORD Hurls a Wind; the Prophet Sleeps</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "God&rsquo;s first response to Jonah&rsquo;s flight is a storm. The LORD &ldquo;hurled a great wind upon the sea&rdquo; &mdash; the verb conveys force and divine intentionality. This is not a naturally occurring storm; it is appointed weather. The ship is threatened with breaking up, and the sailors respond with everything they know: each cries to his own god, they throw the cargo overboard, they labor. Above deck: chaos and prayer. Below deck: a sleeping prophet.",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The captain must go below and rouse Jonah, and in doing so he unknowingly echoes God&rsquo;s own commission: &ldquo;Arise, call out to your God!&rdquo; The same Hebrew words God used (&ldquo;arise&rdquo; and &ldquo;call out&rdquo;) are now on the lips of a pagan captain who doesn&rsquo;t know them as the language of divine commission. The irony is withering: Jonah fled to avoid calling out to Nineveh; now he must be told to call out at all by someone who doesn&rsquo;t even know his name.",
                }}
              />
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: PURPLE,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.3rem",
                }}
              >
                Jonah 1:7&ndash;10
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem" }}>The Lot, the Confession, and the Terror</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The casting of lots identifies Jonah as the cause of the storm. The sailors interrogate him, and he answers with a theologically accurate but existentially damning confession: he is a Hebrew who fears the LORD, the God of heaven, who made the sea and the dry land. The sailors, who have been crying to their own gods throughout the storm, immediately grasp the implications. The man who fears the God of sea and sky is in their ship running from that God. Their response &mdash; &ldquo;What is this that you have done!&rdquo; &mdash; is not a theological argument but a stunned recognition of the situation they are in.",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The text notes that the sailors &ldquo;knew that he was fleeing from the presence of the LORD, because he had told them.&rdquo; Jonah has been transparent about his situation. He is not pretending to be a passenger with normal business in Tarshish. He has told them what he is doing. And they are terrified &mdash; not at Jonah but at the God whose pursuit has reached all the way to their ship in the middle of the sea.",
                }}
              />
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: ROSE,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.3rem",
                }}
              >
                Jonah 1:11&ndash;17
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem" }}>Overboard, the Calm, the Fish, and the Sailors&rsquo; Worship</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jonah&rsquo;s solution is to be thrown into the sea. The sailors resist, row hard, pray to the LORD by name, and only then throw him overboard. The sea immediately calms. The sailors, confronted with unmistakable divine action, fear the LORD exceedingly, offer sacrifice, and make vows. These pagan sailors have had a genuine encounter with the God of Israel and responded with worship &mdash; the proper response Jonah himself should have been making. The chapter ends with Jonah in the belly of the great fish for three days and three nights &mdash; not as a prisoner of divine punishment but as the preserved object of divine rescue.",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The closing verse of chapter 1 thus holds two things in tension: Jonah is in as confined and dark and strange a place as he has ever been, and Jonah is alive because God appointed the fish to keep him so. The darkness of the fish and the sovereignty of the God who sent it are not contradictory. They are the paradox at the heart of divine providence: what looks like the end is often the beginning of something God is preserving you for.",
                }}
              />
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jonah 1 is a theologically concentrated chapter whose surface narrative of flight and storm conceals a web of interconnected themes: divine sovereignty over creation, the irony of prophet versus pagan, the going-down motif of spiritual flight, the convicting power of true confession, and the sign of Jonah that points all the way forward to the death and resurrection of Christ.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {themeItems.map((item) => (
                <div
                  key={item.id}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "1.1rem 1.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      gap: "1rem",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: item.color,
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{item.title}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", flexShrink: 0 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, lineHeight: 1.85, margin: "1rem 0 0", fontSize: "1rem" }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Walking through Jonah 1 section by section reveals a narrative that moves with relentless downward momentum &mdash; Jonah descending from the presence of the LORD into the depths &mdash; until the LORD arrests that descent with the appointment of a great fish. Each section adds a layer to our understanding of both the prophet&rsquo;s flight and the God who pursues him.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {verseItems.map((item) => (
                <div
                  key={item.id}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "1.1rem 1.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      gap: "1rem",
                    }}
                  >
                    <span>
                      <span
                        style={{
                          color: TEAL,
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: 2,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                      <span
                        style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", flexShrink: 0 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, lineHeight: 1.85, margin: "1rem 0 0", fontSize: "1rem" }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jonah 1 is not ancient history; it is a mirror. Its themes of flight, sovereign pursuit, sleeping faith, convicting confession, and mercy inside judgment speak directly into the daily reality of every believer who has ever found a reason not to go where God has sent them.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              {appItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}44`,
                    borderRadius: 12,
                    padding: "1.6rem 1.75rem",
                  }}
                >
                  <h3
                    style={{ color: item.color, fontWeight: 700, fontSize: "1.1rem", margin: "0 0 0.85rem" }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1rem" }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "2.5rem",
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <section style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem", marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
              <p
                style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Go deeper into Jonah 1 with these video teachings on the flight from God, the sovereign storm, the irony of pagan prayer versus prophet sleep, and the great fish as divine rescue.",
                }}
              />
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}
              >
                {videoItems.map((v) => (
                  <div
                    key={v.id}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
                  >
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>
                      {v.title}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div
              style={{
                background: CARD,
                border: `1px solid ${ROSE}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
              }}
            >
              <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
                A Prayer from Jonah 1
              </h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "LORD, you are the God of heaven who made the sea and the dry land. You pursue those who flee you with storms and with fish and with the unwanted kindness of strangers. Forgive us for the fares we have paid to sail toward Tarshish. Wake us from the sleep of indifference. Show us the Nineveh you have commissioned us toward. And when we find ourselves in the darkness of the fish &mdash; held, confined, unable to move &mdash; teach us to recognize your rescue inside what feels like your judgment, and to pray from that place until you speak again.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
