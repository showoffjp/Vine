"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { useState, useEffect, useCallback } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

// ── Color palette ────────────────────────────────────────────────────────────
const BG      = "#07070F";
const CARD    = "#12121F";
const BORDER  = "#1E1E32";
const TEXT    = "#F2F2F8";
const MUTED   = "#9898B3";
const GOLD    = "#D97706";
const PURPLE  = "#6B4FBB";
const GREEN   = "#3a7d56";
const TEAL    = "#0D9488";

// ── Types ────────────────────────────────────────────────────────────────────
type HofTab = "overview" | "prepatriarchs" | "patriarchs" | "exodus" | "conquest" | "prophets" | "faith" | "journal" | "videos";

interface JEntry {
  id: string;
  date: string;
  verse: string;
  reflection: string;
  prayer: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const TABS: { id: HofTab; label: string }[] = [
  { id: "overview",      label: "Overview" },
  { id: "prepatriarchs", label: "Pre-Patriarchs" },
  { id: "patriarchs",    label: "Patriarchs" },
  { id: "exodus",        label: "The Exodus" },
  { id: "conquest",      label: "Conquest & Judges" },
  { id: "prophets",      label: "Prophets" },
  { id: "faith",         label: "Theology of Faith" },
  { id: "journal",       label: "Journal" },
  { id: "videos",        label: "Videos" },
];

interface Hero {
  name: string;
  ref: string;
  color: string;
  subtitle: string;
  verseKey: string;
  body: string;
  takeaway: string;
}

const PRE_PATRIARCHS: Hero[] = [
  {
    name: "Abel",
    ref: "Hebrews 11:4 | Genesis 4:1-12",
    color: GOLD,
    subtitle: "He offered — and he still speaks",
    verseKey: '"By faith Abel brought God a better offering than Cain did. By faith he was commended as righteous, when God spoke well of his offerings. And by faith Abel still speaks, even though he is dead." — Hebrews 11:4 (NIV)',
    body: `Abel is the first person in Hebrews 11's gallery and, remarkably, the first person in Scripture to die. He is the original martyr — the man whose obedient worship cost him his life. Genesis tells us only that his offering was "fat portions from some of the firstborn of his flock" and that God looked on it with favor, while Cain's was rejected. The text does not explain why. Hebrews tells us: it was by faith. The distinction between Cain and Abel was not the material of the offering but the posture behind it.

What makes this theologically startling is the final clause: "he still speaks, even though he is dead." Abel did not write a book. He left no children, no school, no tradition. He was murdered before he could do anything. Yet his voice echoes across all of Scripture. In Hebrews 12:24, Jesus's blood is said to speak "a better word than the blood of Abel" — which means Abel's blood has been speaking since the foundation of the world, crying out from the ground (Genesis 4:10), testifying that innocent blood matters to God.

Abel's entry establishes the pattern of the entire chapter: faith is expressed in worship, and worship can be dangerous. The person who brings their genuine best to God — not a calculated gift designed to manage God or keep peace with siblings — may find that authentic faith provokes hostility from those whose offering is strategic or performative. Faith-as-worship invites the same friction Abel experienced.`,
    takeaway: "Faith expressed in genuine worship can provoke violence. Abel's voice still speaks precisely because he was silenced. What we offer in faith outlasts us.",
  },
  {
    name: "Enoch",
    ref: "Hebrews 11:5-6 | Genesis 5:21-24",
    color: TEAL,
    subtitle: "He walked with God and was no more",
    verseKey: '"By faith Enoch was taken from this life, so that he did not experience death: He could not be found, because God had taken him away. For before he was taken, he was commended as one who pleased God." — Hebrews 11:5 (NIV)',
    body: `In the genealogy of Genesis 5 — one of the most relentlessly repetitive passages in the Bible — the phrase "and then he died" appears for every figure listed. Except one. "Enoch walked faithfully with God; then he was no more, because God took him away." In a chapter structured around death, Enoch is the anomaly. His 365-year life ends without dying.

Genesis uses the phrase "walked with God" twice about Enoch (5:22, 24), a phrase otherwise reserved in Genesis for Noah (6:9). To "walk with" someone in Hebrew idiom means habitual companionship — the same movement, the same pace, the same direction over time. It is the language of friendship. Enoch did not have a dramatic encounter with God. He did not part the Red Sea or conquer kingdoms. He simply walked with God, persistently, for centuries.

Hebrews draws a crucial theological principle from Enoch: "Without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him" (11:6). This is the foundation of the entire hall. Faith is not primarily intellectual assent to doctrines but the relational orientation of earnest seeking — orienting your life toward a God you cannot see, with the conviction that he is there and that he is good.

Enoch's translation without death is a foretaste of resurrection — the first crack in the wall of Genesis 3's curse. God would not let the body of his friend see decay. The intimacy of their centuries-long walk ended not in a grave but in an assumption, a taking-home.`,
    takeaway: "Enoch did nothing dramatic. He walked. Faith that pleases God is often less a single crisis decision than a habitual, daily orientation toward the presence of an unseen God.",
  },
  {
    name: "Noah",
    ref: "Hebrews 11:7 | Genesis 6-9",
    color: PURPLE,
    subtitle: "He built an ark for things not yet seen",
    verseKey: '"By faith Noah, when warned about things not yet seen, in holy fear built an ark to save his family. By his faith he condemned the world and became heir of the righteousness that is in keeping with faith." — Hebrews 11:7 (NIV)',
    body: `The word translated "holy fear" here (eulabētheis) is significant. Noah did not build the ark because he understood how floods work or because the meteorological evidence pointed toward rain. He had never seen rain in the antediluvian world, if the ancient tradition is correct. He built because he took God's word seriously enough to act on it in the absence of any visible evidence — and the action was enormous, expensive, socially ridiculous, and consumed over a century of his life.

Hebrews makes an unexpected claim: Noah's faith "condemned the world." This is not moral condemnation through judgment but the condemnation that comes by contrast. The fact that one man in his generation responded to God's warning with obedience implicitly judged every person who had heard the same warning and dismissed it. Faith always carries this double edge — it saves the one who exercises it and exposes the failure of faith in those who do not.

"Heir of the righteousness that is in keeping with faith" echoes Paul's language in Romans and Galatians, but the priority here is pre-Mosaic. Noah received righteousness not by circumcision, not by Torah, but by faith — a pattern Hebrews will develop through Abraham and which Paul treats as the foundation of the gospel. Righteousness by faith is not a Reformation innovation; it is the oldest storyline in Scripture.

Noah also introduces the theme of suffering-in-faithfulness. He was righteous in a corrupt generation and spent over a century building a structure that made him an object of ridicule. When the flood came, he lost everyone he knew outside his immediate family. Faithfulness did not insulate him from loss.`,
    takeaway: "Noah obeyed before there was evidence. Faith is not acting on what you can see — it is acting on what God has said when the evidence is zero and the cost is massive.",
  },
];

const PATRIARCHS: Hero[] = [
  {
    name: "Abraham",
    ref: "Hebrews 11:8-19 | Genesis 12-22",
    color: GOLD,
    subtitle: "Father of faith — left without knowing where he was going",
    verseKey: '"By faith Abraham, when called to go to a place he would later receive as his inheritance, obeyed and went, even though he did not know where he was going." — Hebrews 11:8 (NIV)',
    body: `Abraham receives more attention in Hebrews 11 than anyone else — seven verses, covering four distinct acts of faith across the arc of his life. This is not coincidental. Abraham is the paradigmatic figure of the entire New Testament's argument about faith, featured in John 8, Romans 4, Galatians 3, and James 2 as well.

The first act: he left. Genesis 12 records the call but not Abraham's response in detail. Hebrews fills in what mattered: he "obeyed and went, even though he did not know where he was going." This is the purest form of faith — movement without a map. He had a caller and a command but no coordinates.

The second act: he sojourned. He lived in the land of promise as a foreigner, never owning it, dwelling in tents. Hebrews says this was intentional — he was "looking forward to the city with foundations, whose architect and builder is God" (11:10). The earthly Canaan was never the real destination; it was a symbol pointing toward something greater. Abraham read his own life typologically.

The third act: he believed for a child when every biological indicator said otherwise. Sarah's womb was "as good as dead." Abraham did not waver. He considered God faithful enough to do what he had promised.

The fourth act — the summit of the entire chapter — is the binding of Isaac (the Akedah). Abraham was asked to sacrifice the son through whom the promises were to be fulfilled. His reasoning, as Hebrews reconstructs it, is remarkable: "Abraham reasoned that God could even raise the dead" (11:19). He had never seen a resurrection. But he knew what God had promised, and he knew that the promise could not be broken, so if Isaac died, God would raise him. This is faith as theological reasoning under extreme pressure — not the absence of thought but thought anchored in the character of God.

"And figuratively speaking," Hebrews adds, "he did receive Isaac back from death" — making the Akedah a foreshadowing of the resurrection, the most explicit typological reading in the chapter.`,
    takeaway: "Abraham's faith was not blind — it was reasoned trust in the character and promises of God, exercised across decades of waiting, displacement, and impossible demands.",
  },
  {
    name: "Sarah",
    ref: "Hebrews 11:11-12 | Genesis 18:1-15; 21:1-7",
    color: TEAL,
    subtitle: "She considered him faithful who had promised",
    verseKey: '"And by faith even Sarah, who was past childbearing age, was enabled to bear children because she considered him faithful who had made the promise." — Hebrews 11:11 (NIV)',
    body: `Sarah's inclusion in the hall is generous. Genesis records her laughing at the announcement of her pregnancy — not a laugh of joy but of incredulity, and she denied it when confronted (Genesis 18:12-15). The God who sees asked Abraham: "Why did Sarah laugh?" Hebrews honors her not for her initial response but for the faith she ultimately exercised. She "considered him faithful who had made the promise." The journey from laughter to faith is itself a gift.

The phrase "even Sarah" in the Greek carries weight: she was the least likely candidate in the natural order. Past menopause, having waited decades, having tried her own workaround through Hagar, having laughed when told the promise was still on the table — and yet. The "even" honors the distance she traveled.

Her offspring came "as numerous as the stars in the sky and as countless as the sand on the seashore" (11:12) — a fulfillment she did not see in her lifetime. She died before the descendants multiplied. She too received the promise only from a distance.

Theologically, Sarah's faith matters because it reframes the question of gender in the hall. This is not a list of male heroes of faith with a woman added for balance. Sarah is a co-heir of the promises — her faith is as constitutive of the covenant line as Abraham's. The child they were given was the product of two people's faith, not one.`,
    takeaway: "Faith begins not where we've always been faithful but where we eventually trust. Sarah's laughter became her son's name — Isaac means 'he laughs.' God redeems even our doubts.",
  },
  {
    name: "Isaac",
    ref: "Hebrews 11:20 | Genesis 27",
    color: PURPLE,
    subtitle: "He blessed regarding things to come",
    verseKey: '"By faith Isaac blessed Jacob and Esau in regard to their future." — Hebrews 11:20 (NIV)',
    body: `Isaac's entry is the briefest in the chapter — a single verse — and it refers to one of the most morally complicated moments in Genesis. Isaac blesses Jacob, who has come to him in disguise, impersonating his twin brother Esau. Isaac was deceived. The blessing was obtained through deception. And yet Hebrews counts this as faith.

The point is not the mechanism of the blessing but the orientation of it: Isaac was pronouncing over his sons things that would not occur for generations. He was acting as a prophet, speaking God's future into being over his children. He "blessed Jacob and Esau in regard to their future" — forward-looking, faith-shaped speech. Even when Genesis records that Isaac tried to reverse the blessing once he discovered the deception ("I blessed him — and indeed he will be blessed!"), it is the irreversibility of spoken faith-words that stands.

Isaac models something quiet and easily overlooked: the blessing of the next generation as an act of faith. Parents who bless their children, who speak identity and destiny over them, who declare God's promise over future they will not live to see — are participating in a lineage of faith that Hebrews enshrines.`,
    takeaway: "Blessing the next generation about things not yet seen is an act of faith. Isaac's forward-looking words, spoken over children who would inherit promises he would not see, are themselves counted as faith.",
  },
  {
    name: "Jacob",
    ref: "Hebrews 11:21 | Genesis 47:29-48:22",
    color: GREEN,
    subtitle: "He worshiped, leaning on his staff",
    verseKey: '"By faith Jacob, when he was dying, blessed each of Joseph\'s sons, and worshiped as he leaned on the top of his staff." — Hebrews 11:21 (NIV)',
    body: `Jacob's entry, like Isaac's, is a single verse capturing a deathbed moment. The image is precise and poignant: an old man, frail enough to require a staff to stand, bending in worship. The reference is to Genesis 47:31, where after securing Joseph's promise not to bury him in Egypt, "Israel bowed down at the head of his bed" — or in the Septuagint tradition that Hebrews follows, "worshiped, leaning on his staff."

The posture matters enormously. Jacob's life had been defined by wrestling — with Esau, with Laban, with the angel at Peniel, with his own scheming nature. He had spent most of his life manipulating outcomes. At the end of his life, he stands — or leans — in an act of surrender and worship. The wrestler has become the worshiper.

He then crosses his hands to bless Ephraim and Manasseh (Genesis 48), deliberately placing his right hand on the younger Ephraim against Joseph's protest. This inversion of birth order had been the story of Jacob's own life — the younger son who received the elder's blessing. He was passing on the theological pattern he had embodied: God's choices do not follow human conventions of priority.

Faith at the end of life looks like this: trusting enough to worship even when you're dying, declaring God's future even when you can barely stand, blessing the next generation even when you'll never see the outcome.`,
    takeaway: "Jacob worshiped in weakness, at the end of a difficult life, leaning on his staff. Faith is not reserved for the strong and certain. Sometimes it looks like an old man choosing to bow.",
  },
  {
    name: "Joseph",
    ref: "Hebrews 11:22 | Genesis 50:24-25",
    color: GOLD,
    subtitle: "His bones were a prophecy",
    verseKey: '"By faith Joseph, when his end was near, spoke about the exodus of the Israelites from Egypt and gave instructions concerning the burial of his bones." — Hebrews 11:22 (NIV)',
    body: `Joseph's entry in Hebrews 11 is striking for what it does not mention. It does not mention his coat of many colors, his brothers' betrayal, his slavery in Egypt, Potiphar's wife, the prison, the dreams, his rise to become Pharaoh's second-in-command, or his reunion with his brothers. These are the dramatic episodes we remember from Genesis 37-50.

What Hebrews remembers is his dying speech. "By faith Joseph, when his end was near, spoke about the exodus of the Israelites from Egypt." Joseph died in Egypt, 400 years before Moses. He had never seen Sinai. He had no evidence that the enslaved descendants of Jacob would ever leave. But he spoke of it as certain because God had said it would happen.

Then he gave instructions about his bones: "You must carry my bones up from this place" (Genesis 50:25). Exodus 13:19 records that Moses fulfilled this request: "Moses took the bones of Joseph with him because Joseph had made the Israelites swear an oath. He had said, 'God will surely come to your aid, and then you must carry my bones up with you from this place.'" The bones traveled through the wilderness for 40 years and were buried at Shechem in Joshua 24:32.

Joseph's faith outlived him by 400 years. The instructions about his bones were an act of trust that the exodus would happen, that the land would be given, that the promises to Abraham were not myths. His bones were his testimony, carried across the desert as a physical declaration that the God who made promises keeps them.`,
    takeaway: "Joseph believed in an exodus that would not happen for 400 years. His bones were his sermon. Faith can outlive the one who holds it, speaking across centuries.",
  },
];

const EXODUS_HEROES: Hero[] = [
  {
    name: "Moses's Parents",
    ref: "Hebrews 11:23 | Exodus 2:1-10",
    color: TEAL,
    subtitle: "They were not afraid of the king's edict",
    verseKey: '"By faith Moses\' parents hid him for three months after he was born, because they saw he was no ordinary child, and they were not afraid of the king\'s edict." — Hebrews 11:23 (NIV)',
    body: `Pharaoh had ordered the execution of every Hebrew male infant. Amram and Jochebed looked at their son and decided the king's edict was less authoritative than what they could see in this child. Hebrews says they "were not afraid of the king's edict" — the passive in the Greek emphasizes their active non-compliance. Civil disobedience rooted not in ideology but in faith.

The phrase "no ordinary child" translates asteios, which in the Septuagint (Exodus 2:2) is rendered "beautiful" or "fair." Hebrews 11:23 emphasizes this beauty, suggesting that the parents saw something in Moses that moved them to act. Whether this was prophetic intuition or simply the instinct of parents who couldn't execute their own child, Hebrews counts it as faith.

Their faith took a specific form: three months of hiding, then an ark of papyrus and a river and a sister who watched. The strategy was faith-shaped improvisation — they could not save Moses indefinitely, but they created the conditions for God to act. The same logic appears throughout the hall: faith does not always know the outcome; it does the next thing and trusts.

That their plan resulted in Moses being raised by Pharaoh's daughter — educated in all the wisdom of Egypt, positioned for leadership — was something they could not have planned. Faith made the papyrus ark. God arranged the rest.`,
    takeaway: "Moses's parents obeyed God rather than the state. Their act was small — a basket, a river, a sister's watch — and God turned it into the preparation of a deliverer.",
  },
  {
    name: "Moses",
    ref: "Hebrews 11:24-28 | Exodus 2-14",
    color: GOLD,
    subtitle: "He chose disgrace over pleasure",
    verseKey: '"He chose to be mistreated along with the people of God rather than to enjoy the fleeting pleasures of sin. He regarded disgrace for the sake of Christ as of greater value than the treasures of Egypt." — Hebrews 11:25-26 (NIV)',
    body: `Moses receives three verses in Hebrews 11 — more than any figure except Abraham. The author focuses on a series of refusals: Moses "refused to be known as the son of Pharaoh's daughter." He refused the identity that Egypt offered. He was educated in all the wisdom of Egypt, positioned in the highest family in the empire, with wealth, status, and power that were his by adoption. He chose otherwise.

Hebrews frames this choice in remarkable terms: he "chose to be mistreated along with the people of God rather than to enjoy the fleeting pleasures of sin" and "regarded disgrace for the sake of Christ as of greater value than the treasures of Egypt." The phrase "for the sake of Christ" is theologically loaded — Moses lived 1,500 years before the incarnation. Hebrews is making a claim about the Messiah's pre-existence: the disgrace Moses chose was participating in the suffering of the covenant people, which is the pattern of the Messiah himself. Moses's solidarity with enslaved Israel was a participation in the suffering that the Christ would fully embody.

"He persevered because he saw him who is invisible" (11:27). This is the interpretive key. Moses's choices were not masochistic self-denial; they were the rational response of someone who could see what others could not. The treasures of Egypt were real, but temporary. The disgrace of solidarity with God's people was also real, but aligned with an eternal weight of glory.

The Passover (11:28) is included as an act of faith: Moses kept the feast and sprinkled the blood "so that the destroyer of the firstborn would not touch the firstborn of Israel." There was no visible angel. There was no empirical evidence that blood on a doorpost would do anything. Moses acted on instruction, not observation.`,
    takeaway: "Moses made a calculation: the invisible rewards of faithfulness outweigh the visible rewards of compromise. 'He saw him who is invisible' — faith is a kind of sight.",
  },
  {
    name: "The Red Sea Crossing",
    ref: "Hebrews 11:29 | Exodus 14",
    color: PURPLE,
    subtitle: "They passed through on dry ground — the Egyptians drowned",
    verseKey: '"By faith the people passed through the Red Sea as on dry land; but when the Egyptians tried to do so, they were drowned." — Hebrews 11:29 (NIV)',
    body: `One verse, two outcomes, identical actions. The Israelites walked into the sea — and walked out the other side. The Egyptians walked into the sea — and drowned. Hebrews attributes the difference entirely to faith.

This is a remarkable theological claim. The Egyptians had watched the same plagues, observed the same God, seen the same pillar of fire. They made the same physical movement into the same water. But they did so without faith — without the posture of trust in the God of Israel — and the same sea that was salvation for one people was execution for another.

The pattern appears throughout Hebrews 11 and the whole of Scripture: the same divine action is salvation or judgment depending on the response of faith. The same cross that is life to those who receive it is foolishness to those who reject it (1 Corinthians 1:18). The same Gospel preached is a fragrance of life to some and of death to others (2 Corinthians 2:15-16).

The corporate nature of this entry is also significant: "the people" passed through. It was not Moses alone who crossed; the entire community participated in the act of faith. Faith is not only individual but communal, embodied in the movement of a people together.`,
    takeaway: "The same sea, the same action, two outcomes determined by faith. Faith is not merely belief — it is the posture of trust that determines on whose side of the water you stand.",
  },
];

const CONQUEST_HEROES: Hero[] = [
  {
    name: "Rahab",
    ref: "Hebrews 11:31 | Joshua 2; 6:17-25",
    color: GOLD,
    subtitle: "The most scandalous entry in the hall",
    verseKey: '"By faith the prostitute Rahab, because she welcomed the spies, was not killed with those who were disobedient." — Hebrews 11:31 (NIV)',
    body: `Hebrews does not soften the description. She is "the prostitute Rahab" — the same epithet she carries in Joshua, in Matthew 1:5 (where she appears in Jesus's genealogy), and in James 2:25. The author of Hebrews, having just listed Joshua's circumcision, keeps the blunt identification.

This is the most unexpected entry in the entire hall. The previous figures — Abel, Enoch, Noah, Abraham, Sarah, Isaac, Jacob, Joseph, Moses — are all identified with the covenant people. Rahab is a Canaanite. She worships other gods. She earns her living in a profession that even the most generous reading of Scripture treats as contrary to God's design for sexuality. She is, by every measure of the chapter's other heroes, an outsider.

And she is in the hall. "By faith the prostitute Rahab" — her profession did not disqualify her and her past did not preclude her. What mattered was that when the spies came, she made a decision about who God was. "I know that the LORD has given you this land" (Joshua 2:9). She had heard about the Exodus 40 years earlier and drawn a theological conclusion: this God is real, this God is powerful, and I want to be on his side.

Her faith was expressed practically — she sheltered the spies, which was treason against Jericho. She tied a scarlet cord in her window (a detail that has fascinated readers across the centuries — a Passover-like mark of protection). She brought her family into her house and trusted that the God of Israel would keep his word.

In Matthew 1, she is listed in the genealogy of Jesus. A Canaanite prostitute who made one act of faith is grandmother many-times-removed to the Messiah. Hebrews 11 is not recording moral exemplars. It is recording people who trusted God.`,
    takeaway: "Rahab demonstrates that faith transforms anyone, regardless of past, profession, or ethnicity. The hall of faith is not a hall of the morally impressive; it is a hall of the trusting.",
  },
  {
    name: "Gideon, Barak, Samson, Jephthah",
    ref: "Hebrews 11:32 | Judges 4-16",
    color: PURPLE,
    subtitle: "Heroes without halos",
    verseKey: '"And what more shall I say? I do not have time to tell about Gideon, Barak, Samson and Jephthah..." — Hebrews 11:32 (NIV)',
    body: `These four are listed without commentary, and the restraint is intentional — or perhaps merciful. To expand on their stories would be to catalog their profound failures.

Gideon, the man God called "mighty warrior" who was hiding in a winepress from the Midianites, who demanded signs from God repeatedly, who led a victorious military campaign and then made an ephod that "all Israel prostituted themselves to" (Judges 8:27), who killed 70 of his own sons, who had 71 sons by many wives — listed without comment.

Barak, who refused to go into battle unless the prophetess Deborah came with him (Judges 4:8) — an act Deborah treated as a failure of leadership that would cost him the honor of the victory.

Samson, whose entire narrative is a catastrophic series of compromises with the Philistine women he was meant to oppose, who used his God-given gifts for personal vengeance, who told Delilah the secret of his strength after she had already betrayed him three times — somehow, still in the hall.

Jephthah, who made a rash vow that may have led to the sacrifice of his daughter, who was the son of a prostitute rejected by his brothers, who slaughtered 42,000 Ephraimites because they pronounced "Shibboleth" wrong.

The listing of all four in the same breath, with no explanation, is itself a theological statement: God worked through all of them. Their faith was real despite their catastrophic failures. Hebrews does not ask us to imitate their character — it records that they trusted God at decisive moments, and that trust was the instrument of remarkable outcomes. The hall is full of people we would not hire.`,
    takeaway: "God used Gideon, Barak, Samson, and Jephthah in spite of their profound moral failures, not because of their moral perfection. Faith mixed with failure is still faith.",
  },
  {
    name: "David",
    ref: "Hebrews 11:32 | 1 Samuel 13-2 Samuel 24; Acts 13:22",
    color: GREEN,
    subtitle: "A man after God's own heart — who committed murder and adultery",
    verseKey: '"...David... who through faith conquered kingdoms, administered justice, and gained what was promised..." — Hebrews 11:32-33 (NIV)',
    body: `David is the most famous name in the list and the one whose gap between faith-commendation and moral record is most stark. He is "a man after God's own heart" — the phrase that defines him in the New Testament (Acts 13:22). He also committed adultery with Bathsheba, had her husband Uriah killed to cover it up, was confronted by the prophet Nathan, wept and repented, and then watched as the child born of the adultery died.

He appears in Hebrews 11 with no commentary on the affair, no asterisk, no caveat. He is in the hall — as someone "who through faith conquered kingdoms, administered justice, and gained what was promised."

What the New Testament consistently sees in David is not a sinless hero but a man who, when confronted with his sin, did not run from God but toward him. The psalms of lament and confession — Psalm 51 especially ("Against you, you only, have I sinned") — are the record of a man who knew what God required and knew he had failed, and who brought his failure back to God rather than defending it.

David is in the hall because he believed God's promises about his dynasty, about the covenant, about the coming king. He lived in the forward-looking posture that Hebrews 11 identifies as faith. His moral failures did not disqualify him from the hall — they became, in God's hands, the raw material for some of the most honest prayers in the Bible.`,
    takeaway: "David's presence in the hall dismantles any notion that it is a hall of moral perfection. God saw in David a man after his own heart — a man who, despite catastrophic sin, kept coming back.",
  },
  {
    name: "Samuel and the Prophets",
    ref: "Hebrews 11:32-38",
    color: TEAL,
    subtitle: "Those who conquered and those who suffered",
    verseKey: '"...who through faith conquered kingdoms, administered justice, and gained what was promised; who shut the mouths of lions, quenched the fury of the flames... others were tortured, refusing to be released to gain an even better resurrection." — Hebrews 11:33-35 (NIV)',
    body: `The climax of Hebrews 11 breaks into two categories, and the break is theologically decisive. In verses 33-35a, the author lists figures whose faith was accompanied by dramatic deliverance: conquered kingdoms, shut lions' mouths (Daniel), quenched flames (Shadrach, Meshach, and Abednego), escaped the sword, women received back their dead.

Then: "but" (Greek: de). The hinge word. "Others were tortured and refused to be released, so that they might gain an even better resurrection" (11:35).

The "others" who follow are unnamed: they were put to death by stoning, they were sawed in two (a fate tradition associates with Isaiah), they were killed by the sword. "They went about in sheepskins and goatskins, destitute, persecuted and mistreated — the world was not worthy of them. They wandered in deserts and mountains, living in caves and in holes in the ground."

"The world was not worthy of them" — one of the most stunning reversals in the chapter. The world dismissed them, killed them, drove them into hiding. And Hebrews declares: the world was not worthy of them. The social and political verdict was wrong. The real accounting is inverted.

Crucially, both groups — the delivered and the tortured — are in the hall. Faith does not come with a guarantee of deliverance. God parted the Red Sea and also let his servants be sawed in two. Both outcomes are within the scope of trusting God. This is the hardest and most important theological claim in the chapter.`,
    takeaway: "Hebrews 11 does not promise that faith brings deliverance. Some faithful people were miraculously rescued; others were killed. Both are commended for the same faith. The hall has two wings.",
  },
];

const THEOLOGY_SECTIONS = [
  {
    title: "Faith is the substance of things hoped for",
    color: GOLD,
    ref: "Hebrews 11:1",
    content: `The KJV's "substance" translates hypostasis — a Greek philosophical term for "underlying reality" or "essential nature." Faith is not wishful thinking; it is the actual present possession of future realities. When Hebrews says faith is the "substance" (NIV: "confidence") of things hoped for, it means that the object of hope — the new creation, the city with foundations, the resurrection — is genuinely present to the person of faith now, not as sentiment but as a kind of reality that affects present action.

The evidence clause is equally important: faith is "the evidence of things not seen." In Greek courts, evidence (elenchos) was what a prosecutor uses to prove a case. Faith is the courtroom evidence for the invisible world. The person of faith is not ignoring evidence but responding to a different kind of evidence — the testimony of God, the logic of the resurrection, the pattern of faithfulness demonstrated through the centuries.

This definition reframes the popular misunderstanding of faith as "believing things without evidence." Hebrews 11:1 presents faith as the appropriate response to evidence that the visible world cannot contain.`,
  },
  {
    title: "They did not receive the things promised",
    color: TEAL,
    ref: "Hebrews 11:13, 39-40",
    content: `Hebrews makes a staggering claim midway through the chapter: "All these people were still living by faith when they died. They did not receive the things promised; they only saw them and welcomed them from a distance" (11:13). Not one of the pre-Christian figures in the hall received what God had promised them. Abraham died owning only a burial plot in Canaan. Moses saw the promised land but did not enter it. The prophets announced a Messiah who would not come for centuries.

The implications are profound: these figures trusted God for centuries in the absence of fulfillment. Their faith was not validated by visible outcomes in their lifetimes. They "admitted that they were foreigners and strangers on earth" (11:13) — they lived without the expectation that this world would deliver what God had promised, because the promise was larger than any earthly outcome.

Then comes the most extraordinary statement in the chapter (11:39-40): "These were all commended for their faith, yet none of them received what had been promised, since God had planned something better for us so that only together with us would they be made perfect." The heroes of faith could not be "made perfect" — completed, brought to consummation — without us. We are part of the fulfillment they were waiting for. Their faith was forward-looking to a fulfillment that required the whole arc of redemptive history, culminating in Christ.`,
  },
  {
    title: "The pioneer and perfecter of faith",
    color: PURPLE,
    ref: "Hebrews 12:1-2",
    content: `The transition from Hebrews 11 to 12 is one of the most powerful moves in the New Testament. Having presented the cloud of witnesses — the hundreds of years of faith-evidence — the author now says: "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us" (12:1).

The witnesses are not passive spectators; they are participants in a relay race who have already run their legs and are now watching us complete the course. Their faith is not only an example to imitate but an encouragement — they ran difficult legs and finished. The course is possible.

And then: "fixing our eyes on Jesus, the pioneer and perfecter of faith" (12:2). The word "pioneer" (archēgon) is the same word used in Hebrews 2:10 ("the pioneer of salvation") — it means the one who goes first and blazes the trail, making it possible for others to follow. Jesus is the ultimate hero of faith — the one who "for the joy set before him he endured the cross, scorning its shame, and sat down at the right hand of the throne of God."

Jesus himself exercised faith — not faith in another but the perfect trust in the Father that was the template all of Hebrews 11 was approximating. He is not just the object of faith but its subject and completion. The hall of faith finds its reason for existence in him.`,
  },
  {
    title: "Faith without moral perfection",
    color: GREEN,
    ref: "Hebrews 11 collectively",
    content: `One of the most clarifying features of Hebrews 11 is the company it keeps. The hall includes:
• Abel, who was murdered
• Noah, who got drunk after the flood (Genesis 9:21)
• Abraham, who twice passed off his wife as his sister out of fear
• Sarah, who laughed at God's promise and denied it when confronted
• Jacob, who spent his life as a deceiver
• Moses, who killed an Egyptian in a fit of anger
• Rahab, explicitly called "the prostitute"
• Gideon, who made an idolatrous ephod
• Samson, whose story is a sustained narrative of lust and revenge
• David, who committed adultery and murder

This is not a catalog of the morally impressive. It is a catalog of the trusting. The theological point is precise: God's assessment of a life is not based on the absence of failure but on the presence of faith. The sin that "so easily entangles" (12:1) is not simply moral sin but the failure of trust — unbelief — that abandons the race.

This does not mean that moral character is irrelevant to Hebrews. The exhortations of the letter are dense with ethics. But the grounds of commendation — what makes these figures worth imitating — is their trust in God's promises, not their moral record.`,
  },
  {
    title: "The great cloud of witnesses",
    color: GOLD,
    ref: "Hebrews 12:1",
    content: `The "great cloud of witnesses" surrounding the current generation of believers is more than a literary device. Hebrews is making a claim about the communion of saints — that the faithful of every generation are in some real sense present to us as we run our leg of the race.

This does not imply that the departed pray for us in the Catholic sense (a disputed doctrine). It implies something more basic: that faith is not a private transaction between an individual and God, conducted in isolation from the community of believers across time. We are embedded in a story that is much larger than our own generation, and the figures of Hebrews 11 are our witnesses in the sense that their testimonies speak to us — "he still speaks, even though he is dead" (11:4, of Abel).

The image of a race (agōna — from which we get "agony") is significant: running requires not leisure but effort, not comfort but endurance. The sin that entangles is anything that slows the runner — not only moral failure but attachment to things that are not wrong in themselves but that cannot come along on the course. The witnesses cheer not for our comfort but for our completion.`,
  },
];

const HOF_VIDEOS = [
  { videoId: "FiUWsBOD4jo", title: "Hebrews 11 — The Hall of Faith", channel: "Bible Teaching", description: "A walk through the hall of faith itself: who is included, why these figures were chosen, and what their stories collectively teach about the nature of trusting God across a lifetime." },
  { videoId: "1fNWTZZwgbs", title: "The Book of Hebrews — BibleProject Overview", channel: "BibleProject", description: "BibleProject's animated overview of Hebrews — the letter's argument that Jesus is greater than angels, Moses, and the priesthood, culminating in the call to persevering faith of chapters 11-12." },
  { videoId: "JLDSXwbJRaA", title: "Hebrews Part 1 — BibleProject", channel: "BibleProject", description: "The first half of Hebrews: the Son greater than the angels and Moses, the warning passages, and the rest that remains for the people of God — the foundation on which the hall of faith stands." },
  { videoId: "kE6SZ1ogOVU", title: "Hebrews Part 2 — BibleProject", channel: "BibleProject", description: "The second half of Hebrews: the great high priest, the new covenant, the once-for-all sacrifice — and the hall of faith of chapter 11 leading into the race of chapter 12." },
];

const JOURNAL_PROMPTS = [
  "Which hero of faith do you most identify with, and why?",
  "Hebrews says Moses chose 'disgrace for the sake of Christ over the pleasures of sin.' What might that choice look like in your life today?",
  "The heroes of Hebrews 11 'did not receive what was promised' but trusted anyway. What are you hoping for that hasn't come yet?",
  "What 'sin that easily entangles' is Hebrews 12:1 inviting you to throw off so you can run the race marked out for you?",
];

// ── Main component ───────────────────────────────────────────────────────────
export default function HeroesOfFaithPage() {
  const [activeTab, setActiveTab] = usePersistedState<HofTab>("vine_hof_tab", "overview");
  const [accordion, setAccordion] = useState<string | null>(null);

  // Journal state
  const [entries, setEntries] = useState<JEntry[]>(() => {
    try {
      const raw = localStorage.getItem("vine_hof_journal");
      return raw ? (JSON.parse(raw) as JEntry[]) : [];
    } catch {
      return [];
    }
  });
  const [jVerse, setJVerse] = useState("");
  const [jReflection, setJReflection] = useState("");
  const [jPrayer, setJPrayer] = useState("");
  const [jPromptIdx, setJPromptIdx] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem("vine_hof_journal", JSON.stringify(entries));
    } catch {}
  }, [entries]);

  const saveEntry = useCallback(() => {
    if (!jReflection.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verse: jVerse.trim(),
      reflection: jReflection.trim(),
      prayer: jPrayer.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setJVerse("");
    setJReflection("");
    setJPrayer("");
  }, [jVerse, jReflection, jPrayer]);

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const toggleAccordion = (key: string) => {
    setAccordion((prev) => (prev === key ? null : key));
  };

  // ── Shared styles ──────────────────────────────────────────────────────────
  const tabBtnStyle = (id: HofTab): React.CSSProperties => ({
    padding: "8px 16px",
    borderRadius: 8,
    border: activeTab === id ? `1px solid ${GOLD}` : `1px solid ${BORDER}`,
    background: activeTab === id ? GOLD + "22" : CARD,
    color: activeTab === id ? GOLD : MUTED,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: activeTab === id ? 700 : 400,
    transition: "all 0.15s",
    whiteSpace: "nowrap",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
  };

  const heroAccordionStyle = (open: boolean, color: string): React.CSSProperties => ({
    background: open ? color + "14" : CARD,
    border: `1px solid ${open ? color : BORDER}`,
    borderRadius: 12,
    marginBottom: 14,
    overflow: "hidden",
    transition: "border-color 0.15s",
  });

  const theologyCardStyle = (color: string): React.CSSProperties => ({
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderLeft: `4px solid ${color}`,
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
  });

  // ── Render helpers ─────────────────────────────────────────────────────────

  function HeroAccordion({ heroes }: { heroes: Hero[] }) {
    return (
      <div>
        {heroes.map((hero) => {
          const open = accordion === hero.name;
          return (
            <div key={hero.name} style={heroAccordionStyle(open, hero.color)}>
              <button
                onClick={() => toggleAccordion(hero.name)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, textAlign: "left" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: hero.color + "33",
                      border: `2px solid ${hero.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 18,
                    }}
                  >
                    ✦
                  </div>
                  <div>
                    <div style={{ color: hero.color, fontWeight: 700, fontSize: 17 }}>{hero.name}</div>
                    <div style={{ color: MUTED, fontSize: 13, marginTop: 2 }}>{hero.subtitle}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2, fontStyle: "italic" }}>{hero.ref}</div>
                  </div>
                </div>
                <div style={{ color: hero.color, fontSize: 20, flexShrink: 0 }}>{open ? "▲" : "▼"}</div>
              </button>
              {open && (
                <div style={{ padding: "0 24px 24px" }}>
                  <blockquote
                    style={{
                      borderLeft: `3px solid ${hero.color}`,
                      paddingLeft: 16,
                      marginBottom: 20,
                      color: TEXT,
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      fontSize: 14,
                    }}
                  >
                    {hero.verseKey}
                  </blockquote>
                  {hero.body.split("\n\n").map((paragraph, i) => (
                    <p key={i} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
                      {paragraph.trim()}
                    </p>
                  ))}
                  <div
                    style={{
                      background: hero.color + "18",
                      border: `1px solid ${hero.color}55`,
                      borderRadius: 8,
                      padding: "12px 16px",
                      marginTop: 8,
                    }}
                  >
                    <span style={{ color: hero.color, fontWeight: 700, fontSize: 13 }}>TAKEAWAY — </span>
                    <span style={{ color: TEXT, fontSize: 14, lineHeight: 1.7 }}>{hero.takeaway}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // ── Tab content ────────────────────────────────────────────────────────────

  function OverviewTab() {
    return (
      <div>
        <div style={cardStyle}>
          <h2 style={{ color: GOLD, fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
            The Hall of Faith, Not the Hall of Fame
          </h2>
          <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 0 }}>
            Hebrews 11 — the most sustained treatment of faith in the New Testament — is commonly called "the Hall of Faith." But it is not a hall of fame. The figures gathered here are not notable for moral perfection, consistent obedience, or impressive outcomes. They are notable for one thing: they trusted God&apos;s promises when they could not see the outcome.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginBottom: 24 }}>
          {[
            {
              label: "The Definition",
              ref: "Hebrews 11:1",
              color: GOLD,
              content: "\"Now faith is confidence in what we hope for and assurance about what we do not see\" (NIV) / \"the substance of things hoped for, the evidence of things not seen\" (KJV). Faith is not mere optimism — it is the present reality of future promises and the courtroom evidence for the invisible world.",
            },
            {
              label: "The Pattern",
              ref: "Hebrews 11:13",
              color: TEAL,
              content: "The heroes of faith \"did not receive the things promised; they only saw them and welcomed them from a distance, and admitted that they were foreigners and strangers on earth.\" Faith is forward-looking trust — oriented toward a fulfillment that may not come in one's lifetime.",
            },
            {
              label: "The Purpose",
              ref: "Hebrews 11:39-12:2",
              color: PURPLE,
              content: "They were \"commended for their faith, yet none of them received what had been promised, since God had planned something better for us so that only together with us would they be made perfect.\" The cloud of witnesses surrounds us as we run the race, fixing our eyes on Jesus — the pioneer and perfecter of faith.",
            },
          ].map((item) => (
            <div key={item.label} style={theologyCardStyle(item.color)}>
              <div style={{ color: item.color, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{item.label}</div>
              <div style={{ color: MUTED, fontSize: 12, marginBottom: 10, fontStyle: "italic" }}>{item.ref}</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.content}</p>
            </div>
          ))}
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: 16 }}>The Structure of Hebrews 11</h3>
          {[
            { period: "Pre-Patriarchs (vv. 4-7)", names: "Abel · Enoch · Noah", color: GOLD, note: "Faith expressed in worship, intimacy, and obedience before the covenant" },
            { period: "The Patriarchs (vv. 8-22)", names: "Abraham · Sarah · Isaac · Jacob · Joseph", color: TEAL, note: "Faith expressed in displacement, waiting, and forward-looking blessing" },
            { period: "The Exodus (vv. 23-29)", names: "Moses's parents · Moses · The Red Sea", color: PURPLE, note: "Faith expressed as costly solidarity with God's people over comfort" },
            { period: "The Conquest & Judges (vv. 30-34)", names: "Rahab · Jericho · Gideon · Barak · Samson · Jephthah · David · Samuel", color: GREEN, note: "Faith expressed in scandalous, morally complicated lives" },
            { period: "The Sufferers (vv. 35-38)", names: "Unnamed prophets, martyrs, wanderers", color: GOLD, note: "Faith expressed in refusal to renounce under torture and exile" },
          ].map((row) => (
            <div
              key={row.period}
              style={{
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                padding: "12px 0",
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: row.color,
                  flexShrink: 0,
                  marginTop: 6,
                }}
              />
              <div>
                <div style={{ color: row.color, fontWeight: 700, fontSize: 14 }}>{row.period}</div>
                <div style={{ color: TEXT, fontSize: 13, marginTop: 2 }}>{row.names}</div>
                <div style={{ color: MUTED, fontSize: 12, marginTop: 3, fontStyle: "italic" }}>{row.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...cardStyle, borderColor: GOLD + "55", background: GOLD + "0A" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 12 }}>How to Use This Guide</h3>
          <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 0 }}>
            Each tab above takes you deeper into one section of the hall. The figures are presented in accordion panels with the relevant Scripture, historical context, and theological significance. The <strong style={{ color: GOLD }}>Theology of Faith</strong> tab draws together what the chapter teaches collectively — including the hardest truth, that faith does not guarantee deliverance. The <strong style={{ color: GOLD }}>Journal</strong> tab offers prompts drawn from Hebrews 11-12 for personal reflection.
          </p>
        </div>
      </div>
    );
  }

  function TheologyTab() {
    return (
      <div>
        <div style={cardStyle}>
          <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>The Theology of Faith in Hebrews 11</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
            Taken together, the 38 verses of Hebrews 11 constitute the most sustained meditation on the nature of faith in Scripture. These are the theological principles the chapter teaches collectively — not extracted from individual heroes but from the pattern of the entire hall.
          </p>
        </div>

        {THEOLOGY_SECTIONS.map((section) => (
          <div key={section.title} style={theologyCardStyle(section.color)}>
            <div style={{ color: section.color, fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{section.title}</div>
            <div style={{ color: MUTED, fontSize: 12, marginBottom: 14, fontStyle: "italic" }}>{section.ref}</div>
            {section.content.split("\n\n").map((para, i) => (
              <p key={i} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>
                {para}
              </p>
            ))}
          </div>
        ))}

        <div style={{ ...cardStyle, borderColor: TEAL + "55" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, marginBottom: 16 }}>The Two Wings of the Hall</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: GREEN + "15", border: `1px solid ${GREEN}44`, borderRadius: 10, padding: 20 }}>
              <div style={{ color: GREEN, fontWeight: 700, marginBottom: 8 }}>Wing One: The Delivered</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                "Conquered kingdoms, administered justice, gained what was promised, shut the mouths of lions, quenched the fury of the flames, escaped the edge of the sword, became powerful in battle..." (11:33-34). These are the stories we remember, preach, and put on motivational posters.
              </p>
            </div>
            <div style={{ background: PURPLE + "15", border: `1px solid ${PURPLE}44`, borderRadius: 10, padding: 20 }}>
              <div style={{ color: PURPLE, fontWeight: 700, marginBottom: 8 }}>Wing Two: The Tortured</div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                "Others were tortured... others were sawed in two... they were destitute, persecuted, mistreated — the world was not worthy of them" (11:35-38). These are in the same hall. Faith commended; deliverance not given. The hall has two wings.
              </p>
            </div>
          </div>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginTop: 16, marginBottom: 0 }}>
            The theological claim of placing both groups in the same hall is radical: God is not obligated by faith to deliver. He sometimes delivers and sometimes does not, and the faith in both cases is equally commended. The "better resurrection" that the tortured refused to renounce to avoid their fate (11:35) is the telos of the whole chapter — the fulfillment that none of them saw, that we are now living toward.
          </p>
        </div>
      </div>
    );
  }

  function ProphetsSectionTab() {
    return (
      <div>
        <div style={cardStyle}>
          <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>The Prophets</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>
            While Hebrews 11 does not provide individual entries for the writing prophets by name (beyond Samuel and David), the broader Old Testament tradition of prophetic faith — trust in God&apos;s word spoken into hostile circumstances — is essential context for the hall.
          </p>
        </div>

        {[
          {
            name: "Isaiah",
            color: GOLD,
            period: "c. 740–700 BC",
            ref: "Isaiah 1–66; Hebrews 11:37 (tradition)",
            desc: `Isaiah prophesied during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah — a period of Assyrian expansion that would destroy the northern kingdom of Israel. He announced the coming Servant of the LORD (Isaiah 52:13–53:12) centuries before the incarnation, describing a figure who would be "pierced for our transgressions" and "by whose wounds we are healed."

Ancient tradition records that Isaiah was martyred under King Manasseh, sawed in half — the detail referenced in Hebrews 11:37. Whether or not the tradition is accurate, Isaiah's life was spent speaking God's word in the face of royal indifference and hostility. He "still speaks" through the most-quoted Old Testament book in the New Testament.`,
            verse: '"He was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." — Isaiah 53:5',
          },
          {
            name: "Jeremiah",
            color: TEAL,
            period: "c. 627–587 BC",
            ref: "Jeremiah 1–52; Lamentations",
            desc: `Jeremiah is the prophet whose faith was most visibly costly. Called as a young man and told immediately that his ministry would be one of rejection (Jeremiah 1:17-19), he preached through the reigns of Josiah, Jehoiakim, and Zedekiah — warning of Babylon's judgment, being imprisoned, thrown into a cistern, mocked as a traitor, forbidden to marry, and finally watching Jerusalem fall exactly as he had announced.

His "confessions" (Jeremiah 11:18–20:18) are the most raw expressions of prophetic anguish in the Bible: "Why is my pain unending and my wound grievous and incurable? You are to me like a deceptive brook, like a spring that fails" (15:18). He accused God of deception (20:7 — "you deceived me, LORD, and I was deceived"). He cursed the day of his birth. And he kept preaching.

Hebrews 8:8-12 quotes Jeremiah 31:31-34 — the New Covenant promise — more extensively than any other Old Testament passage in the New Testament. Jeremiah is the prophet whose suffering gives him the credibility to announce the covenant that would replace the one Israel had broken.`,
            verse: '"But if I say, \"I will not mention his word or speak anymore in his name,\" his word is in my heart like a fire, a fire shut up in my bones." — Jeremiah 20:9',
          },
          {
            name: "Daniel",
            color: PURPLE,
            period: "c. 605–535 BC",
            ref: "Daniel 1–12; Hebrews 11:33",
            desc: `Daniel is the "shut the mouths of lions" entry in Hebrews 11:33. Taken to Babylon as a teenager, he served in the court of Nebuchadnezzar, Belshazzar, and Darius the Mede for over 70 years — maintaining his dietary practices, his prayer life, and his refusal to worship anyone other than the God of Israel, through successive imperial regimes.

The lions' den episode (Daniel 6) is the most famous: Daniel continued praying three times a day after the decree forbidding it, was thrown to the lions, and was found unharmed. The king declared: "He is the living God and he endures forever... He rescues and he saves; he performs signs and wonders in the heavens and on the earth."

Daniel's faith was not only miraculous deliverance — it was also the sustained, unspectacular faithfulness of decades of court service, maintaining integrity under sustained cultural pressure. The lions' den was the visible crisis; the decades of daily prayer were the invisible ground of it.`,
            verse: '"My God sent his angel, and he shut the mouths of the lions. They have not hurt me, because I was found innocent in his sight." — Daniel 6:22',
          },
          {
            name: "Elijah",
            color: GREEN,
            period: "c. 875–850 BC",
            ref: "1 Kings 17–2 Kings 2; James 5:17",
            desc: `Elijah appears in James 5:17 as the premier example of effective prayer — "Elijah was a human being, even as we are. He prayed earnestly that it would not rain, and it did not rain on the land for three and a half years." His humanity is the point: he was not a superhuman but a person with a nature like ours who prayed with faith.

His story includes the summit of Mount Carmel, where he challenged 450 prophets of Baal to a contest that ended with fire from heaven and the slaughter of the false prophets. And immediately after — the lowest point: Jezebel's threat sent him fleeing into the desert, asking to die. "I have had enough, LORD. Take my life; I am no better than my ancestors" (1 Kings 19:4).

God's response to Elijah's depression under the juniper tree is one of the most tender passages in the Old Testament: an angel touched him twice with food and water and said, "Get up and eat, for the journey is too much for you." Faith did not prevent Elijah's collapse. God's faithfulness met him in it.`,
            verse: '"The prayer of a righteous person is powerful and effective. Elijah was a human being, even as we are." — James 5:16-17',
          },
        ].map((prophet) => {
          const open = accordion === prophet.name;
          return (
            <div key={prophet.name} style={heroAccordionStyle(open, prophet.color)}>
              <button
                onClick={() => toggleAccordion(prophet.name)}
                style={{ width: "100%", background: "none", border: "none", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", gap: 12 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, textAlign: "left" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: prophet.color + "33", border: `2px solid ${prophet.color}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18 }}>✦</div>
                  <div>
                    <div style={{ color: prophet.color, fontWeight: 700, fontSize: 17 }}>{prophet.name}</div>
                    <div style={{ color: MUTED, fontSize: 13, marginTop: 2 }}>{prophet.period}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2, fontStyle: "italic" }}>{prophet.ref}</div>
                  </div>
                </div>
                <div style={{ color: prophet.color, fontSize: 20, flexShrink: 0 }}>{open ? "▲" : "▼"}</div>
              </button>
              {open && (
                <div style={{ padding: "0 24px 24px" }}>
                  <blockquote style={{ borderLeft: `3px solid ${prophet.color}`, paddingLeft: 16, marginBottom: 20, color: TEXT, fontStyle: "italic", lineHeight: 1.7, fontSize: 14 }}>
                    {prophet.verse}
                  </blockquote>
                  {prophet.desc.split("\n\n").map((para, i) => (
                    <p key={i} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>{para.trim()}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function JournalTab() {
    return (
      <div>
        <div style={cardStyle}>
          <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Hebrews 11 Journal</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
            "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us." — Hebrews 12:1
          </p>
        </div>

        <div style={{ ...cardStyle, borderColor: GOLD + "44" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 16, fontSize: 16 }}>Reflection Prompts</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {JOURNAL_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => setJPromptIdx(i)}
                style={{
                  background: jPromptIdx === i ? GOLD + "22" : BG,
                  border: `1px solid ${jPromptIdx === i ? GOLD : BORDER}`,
                  borderRadius: 8,
                  padding: "10px 14px",
                  textAlign: "left",
                  color: jPromptIdx === i ? GOLD : MUTED,
                  cursor: "pointer",
                  fontSize: 13,
                  lineHeight: 1.6,
                  transition: "all 0.15s",
                }}
              >
                {i + 1}. {prompt}
              </button>
            ))}
          </div>

          <div
            style={{
              background: GOLD + "10",
              border: `1px solid ${GOLD}44`,
              borderRadius: 8,
              padding: "12px 16px",
              marginBottom: 20,
              color: TEXT,
              fontSize: 14,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            {JOURNAL_PROMPTS[jPromptIdx]}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>
                Verse that speaks to you (optional)
              </label>
              <input
                value={jVerse}
                onChange={(e) => setJVerse(e.target.value)}
                placeholder="e.g. Hebrews 11:1 — 'faith is confidence in what we hope for...'"
                style={{
                  width: "100%",
                  background: BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: "10px 14px",
                  color: TEXT,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>
                Reflection *
              </label>
              <textarea
                value={jReflection}
                onChange={(e) => setJReflection(e.target.value)}
                rows={5}
                placeholder="Write your response to the prompt..."
                style={{
                  width: "100%",
                  background: BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: "10px 14px",
                  color: TEXT,
                  fontSize: 14,
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label style={{ color: MUTED, fontSize: 13, display: "block", marginBottom: 6 }}>
                Prayer (optional)
              </label>
              <textarea
                value={jPrayer}
                onChange={(e) => setJPrayer(e.target.value)}
                rows={3}
                placeholder="A prayer in response to what you've read or reflected on..."
                style={{
                  width: "100%",
                  background: BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  padding: "10px 14px",
                  color: TEXT,
                  fontSize: 14,
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <button
              onClick={saveEntry}
              disabled={!jReflection.trim()}
              style={{
                background: jReflection.trim() ? GOLD : BORDER,
                border: "none",
                borderRadius: 8,
                padding: "12px 24px",
                color: jReflection.trim() ? "#07070F" : MUTED,
                fontWeight: 700,
                fontSize: 14,
                cursor: jReflection.trim() ? "pointer" : "not-allowed",
                alignSelf: "flex-start",
                transition: "background 0.15s",
              }}
            >
              Save Entry
            </button>
          </div>
        </div>

        {entries.length > 0 && (
          <div>
            <h3 style={{ color: TEXT, fontWeight: 700, marginBottom: 16 }}>
              Your Entries ({entries.length})
            </h3>
            {entries.map((entry) => (
              <div key={entry.id} style={{ ...cardStyle, borderColor: GOLD + "33" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ color: MUTED, fontSize: 13 }}>{entry.date}</div>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: 18, lineHeight: 1 }}
                    aria-label="Delete entry"
                  >
                    ×
                  </button>
                </div>
                {entry.verse && (
                  <p style={{ color: GOLD, fontSize: 13, fontStyle: "italic", marginBottom: 10 }}>{entry.verse}</p>
                )}
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, marginBottom: 10, whiteSpace: "pre-wrap" }}>
                  {entry.reflection}
                </p>
                {entry.prayer && (
                  <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                    <span style={{ color: MUTED, fontSize: 12, fontWeight: 700 }}>PRAYER — </span>
                    <span style={{ color: MUTED, fontSize: 13, lineHeight: 1.7 }}>{entry.prayer}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {entries.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "48px 24px",
              color: MUTED,
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
            No entries yet. Choose a prompt above, write your reflection, and save it here.
            <br />
            Your journal is stored privately in your browser.
          </div>
        )}
      </div>
    );
  }

  function VideosTab() {
    return (
      <div>
        <div style={cardStyle}>
          <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Hebrews 11 — Video Resources</h2>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
            Recommended video teachings on faith, the heroes of Hebrews 11, suffering, and the Old Testament background that makes the hall comprehensible.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {HOF_VIDEOS.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <div style={{ padding: "14px 16px" }}>
                <div style={{ color: TEXT, fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{v.title}</div>
                <div style={{ color: GOLD, fontSize: 12, marginBottom: 8 }}>{v.channel}</div>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Layout ─────────────────────────────────────────────────────────────────
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh" }}>
        {/* Hero header */}
        <div
          style={{
            background: `linear-gradient(180deg, ${GOLD}18 0%, transparent 100%)`,
            borderBottom: `1px solid ${BORDER}`,
            padding: "48px 24px 36px",
            textAlign: "center",
          }}
        >
          <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 3, marginBottom: 12, textTransform: "uppercase" }}>
            Hebrews 11–12
          </div>
          <h1
            style={{
              color: TEXT,
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 900,
              marginBottom: 14,
              lineHeight: 1.15,
            }}
          >
            Heroes of Faith
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: "clamp(14px, 2vw, 17px)",
              maxWidth: 600,
              margin: "0 auto 24px",
              lineHeight: 1.7,
            }}
          >
            &quot;Now faith is confidence in what we hope for and assurance about what we do not see.&quot; — Hebrews 11:1
          </p>
          <div
            style={{
              display: "inline-flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { label: "17 named figures", color: GOLD },
              { label: "38 verses of faith", color: TEAL },
              { label: "Centuries of witness", color: PURPLE },
            ].map((badge) => (
              <span
                key={badge.label}
                style={{
                  background: badge.color + "22",
                  border: `1px solid ${badge.color}55`,
                  color: badge.color,
                  borderRadius: 20,
                  padding: "5px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Tab bar */}
        <div
          style={{
            overflowX: "auto",
            padding: "16px 24px",
            borderBottom: `1px solid ${BORDER}`,
            background: CARD,
          }}
        >
          <div style={{ display: "flex", gap: 8, minWidth: "max-content" }}>
            {TABS.map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={tabBtnStyle(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 20px 60px" }}>
          {activeTab === "overview"      && <OverviewTab />}
          {activeTab === "prepatriarchs" && (
            <div>
              <div style={cardStyle}>
                <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Pre-Patriarchs</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
                  Abel, Enoch, and Noah — three figures who lived before the covenant with Abraham, before circumcision, before the Law. Their faith had no Torah to structure it and no community of practice to sustain it. They trusted a God who had not yet made his promises explicit, and they are the foundation of the hall.
                </p>
              </div>
              <HeroAccordion heroes={PRE_PATRIARCHS} />
            </div>
          )}
          {activeTab === "patriarchs"    && (
            <div>
              <div style={cardStyle}>
                <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>The Patriarchs</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
                  Abraham, Sarah, Isaac, Jacob, and Joseph — the covenant family. Hebrews devotes more verses to Abraham (seven) than to any other figure. Their faith is expressed primarily in displacement, waiting, and forward-looking blessing over descendants who will inherit promises they themselves will not see fulfilled.
                </p>
              </div>
              <HeroAccordion heroes={PATRIARCHS} />
            </div>
          )}
          {activeTab === "exodus"        && (
            <div>
              <div style={cardStyle}>
                <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>The Exodus Generation</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
                  Moses receives three verses — more than any figure after Abraham. But the hall includes not just Moses but his parents, and the corporate act of the whole people passing through the Red Sea. Faith in the Exodus is expressed as costly solidarity with God&apos;s enslaved people over the pleasures and safety of empire.
                </p>
              </div>
              <HeroAccordion heroes={EXODUS_HEROES} />
            </div>
          )}
          {activeTab === "conquest"      && (
            <div>
              <div style={cardStyle}>
                <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>The Conquest and the Judges</h2>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
                  The most morally complicated section of the hall. Rahab the prostitute. Gideon the idolater. Samson the womanizer. Jephthah the son of a prostitute who may have sacrificed his daughter. David the adulterer and murderer. The hall of faith is not a hall of moral achievement. It is a hall of trust.
                </p>
              </div>
              <HeroAccordion heroes={CONQUEST_HEROES} />
            </div>
          )}
          {activeTab === "prophets"      && <ProphetsSectionTab />}
          {activeTab === "faith"         && <TheologyTab />}
          {activeTab === "journal"       && <JournalTab />}
          {activeTab === "videos"        && <VideosTab />}
        </div>
        <Footer />
      </div>
    </>
  );
}
