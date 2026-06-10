"use client";

import { useState, useCallback, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ACCENT = "#3a7d56"; // green — reconciliation
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";

type PhmTab =
  | "overview"
  | "story"
  | "appeal"
  | "slavery"
  | "gospel"
  | "reconciliation"
  | "themes"
  | "journal"
  | "videos";

const TABS: { id: PhmTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "story", label: "The Story" },
  { id: "appeal", label: "The Appeal" },
  { id: "slavery", label: "Slavery & Scripture" },
  { id: "gospel", label: "Gospel in Miniature" },
  { id: "reconciliation", label: "Reconciliation" },
  { id: "themes", label: "Themes" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

// ---------------------------------------------------------------------------
// OVERVIEW DATA
// ---------------------------------------------------------------------------

const FACT_CARDS = [
  { label: "Author", value: "Paul (with Timothy, v.1)" },
  { label: "Date", value: "~AD 60–62, Roman imprisonment" },
  { label: "Length", value: "25 verses · 335 Greek words" },
  { label: "Recipient", value: "Philemon of Colossae" },
  { label: "Companion Letter", value: "Colossians (Col 4:7–9)" },
  { label: "Key Verse", value: "v.16 — “no longer as a slave… a dear brother”" },
];

const CAST = [
  {
    name: "Paul",
    role: "The Mediator",
    color: GOLD,
    desc: "An aging apostle (“Paul, an old man,” v.9) under house arrest in Rome, chained to a Roman guard, still leading people to Christ from custody. He calls himself not “apostle” here — his only letter opening without a claim to authority — but “a prisoner of Christ Jesus.” He has every right to command Philemon, and deliberately lays that right down. The whole letter is Paul spending his own relational capital to purchase someone else's reconciliation.",
  },
  {
    name: "Philemon",
    role: "The Offended Party",
    color: ACCENT,
    desc: "A wealthy believer in Colossae whose home is large enough to host the church (“the church that meets in your home,” v.2) and who owns at least one slave. He was converted through Paul's ministry — likely during Paul's years in Ephesus, a hundred miles away (v.19: “you owe me your very self”). Paul's reports describe a man known for love and for “refreshing the hearts of the Lord's people” (v.7). Now his faith is about to be tested where faith is always tested: at home, with money, with someone who wronged him.",
  },
  {
    name: "Onesimus",
    role: "The Runaway",
    color: PURPLE,
    desc: "Philemon's slave, who fled — possibly taking money or goods with him (v.18) — and somehow ended up with Paul in Roman custody, perhaps seeking out his master's famous friend as an intercessor (a recognized Roman practice: a runaway could seek an amicus domini, a “friend of the master,” to plead his case). Under Paul's ministry he became a Christian: “my son… who became my son while I was in chains” (v.10). His name means “useful” — a common, almost generic slave name, the ancient equivalent of naming a tool. Paul will turn that name into theology.",
  },
  {
    name: "Apphia & Archippus",
    role: "The Household & The Church",
    color: ACCENT,
    desc: "Apphia (likely Philemon's wife, who would have managed household slaves day to day) and Archippus (possibly their son, called “our fellow soldier,” also addressed in Col 4:17) are named in the greeting — along with the whole house church. This is crucial: the letter is private in tone but public in audience. Paul ensures the entire congregation will hear it read. Philemon's response to Onesimus will happen in front of his church family. Grace is being asked for in public.",
  },
  {
    name: "Tychicus",
    role: "The Escort",
    color: GOLD,
    desc: "Paul's trusted courier, carrying the letter to the Colossians on the same journey (Col 4:7–9: “He is coming with Onesimus, our faithful and dear brother, who is one of you”). Onesimus does not walk back to his master alone and unprotected; he returns accompanied, vouched for, already publicly named “faithful and dear brother” in a letter the whole Colossian church will hear. Paul has stacked every possible safeguard around this reunion.",
  },
];

const STRUCTURE = [
  { ref: "vv. 1–3", title: "Greeting", desc: "Paul the prisoner — not the apostle — to Philemon, Apphia, Archippus, and the church in their house." },
  { ref: "vv. 4–7", title: "Thanksgiving & Groundwork", desc: "Paul celebrates Philemon's love and faith, and prays his partnership (koinonia) in the faith would become effective. Every word prepares for the request." },
  { ref: "vv. 8–16", title: "The Appeal", desc: "Paul declines to command and appeals on the basis of love: receive Onesimus back — no longer as a slave, but as a dear brother." },
  { ref: "vv. 17–22", title: "The Guarantee", desc: "“Welcome him as you would welcome me. Charge anything he owes to me. I will repay.” Then the gentle pressure: you owe me yourself — and prepare a guest room, because I'm coming." },
  { ref: "vv. 23–25", title: "Greetings & Grace", desc: "Epaphras, Mark, Aristarchus, Demas, Luke — the same circle as Colossians 4 — and the closing benediction." },
];

// ---------------------------------------------------------------------------
// STORY DATA
// ---------------------------------------------------------------------------

const STORY_BEATS = [
  {
    id: "flight",
    title: "1. The Flight",
    color: PURPLE,
    body: "Somewhere around AD 60, Onesimus ran. Verse 18 hints he may have left with stolen money or goods (“if he has done you any wrong or owes you anything”) — or that his flight itself constituted financial loss, since a slave's absence cost his owner labor and the price of recovery. Either way, under Roman law he was now a fugitivus, a runaway, and the empire was organized to catch men like him. Professional slave-catchers (fugitivarii) hunted runaways for bounties. Recovered slaves could be branded on the forehead with the letter F, fitted with iron collars (archaeologists have found them, inscribed “I have run away; return me to my master for a reward”), beaten, or worse. Onesimus ran anyway. Whatever life he had in Philemon's house, he judged this risk worth taking.",
  },
  {
    id: "meeting",
    title: "2. The Meeting",
    color: GOLD,
    body: "How does a runaway slave from a small city in the Lycus Valley end up beside the most famous Christian prisoner in Rome? Scholars propose two main routes. He may have fled to Rome deliberately — big cities were where runaways disappeared — and sought out Paul, his master's friend, as an amicus domini: Roman custom allowed a slave in trouble to flee to a friend of his master to intercede for him, which was legally distinct from running away for good. Or he may have been arrested for something and providentially landed in proximity to Paul. The letter doesn't say. What it does say is that the meeting happened “in chains” (v.10): the apostle under guard and the fugitive with nowhere left to run, in the same room. Verse 15 will dare to call this arrangement providence.",
  },
  {
    id: "conversion",
    title: "3. The Conversion",
    color: ACCENT,
    body: "“I appeal to you for my son Onesimus, who became my son while I was in chains” (v.10). In the Greek, Paul holds the name back to the very end of the sentence — Philemon hears “I appeal to you for my child, whom I fathered in my imprisonment…” before the name lands: Onesimus. The runaway became a believer under Paul's ministry, and more than a believer — family. Paul calls him “my very heart” (v.12, literally “my splanchna,” my inward parts), “faithful and dear brother” (Col 4:9), and a genuinely useful partner in ministry (v.11, 13). The man whose name meant “useful” and whose life had been valued only in denarii is now described in the language of fatherhood, heart, and brotherhood. Conversion has already begun rewriting the categories the whole letter will challenge.",
  },
  {
    id: "decision",
    title: "4. The Costly Decision",
    color: PURPLE,
    body: "Then Paul did something that must have been agonizing for everyone: he sent Onesimus back. “I am sending him — who is my very heart — back to you” (v.12). Paul wanted to keep him (v.13: “I would have liked to keep him with me so that he could take your place in helping me”), and he almost certainly could have justified it. But he refused to do good by coercion: “I did not want to do anything without your consent, so that any favor you do would not seem forced but would be voluntary” (v.14). For Onesimus, the road back to Colossae was a road toward a man who held the legal power to brand, beat, or sell him. The letter in Tychicus's satchel was, quite literally, his life. That Onesimus went at all is its own act of faith — the new brother trusting the gospel to do in Philemon's heart what it had done in his.",
  },
  {
    id: "wordplay",
    title: "5. The Wordplay",
    color: GOLD,
    body: "Verse 11 is one of the most affectionate puns in Scripture: “Formerly he was useless (achrēstos) to you, but now he has become useful (euchrēstos) both to you and to me.” Onesimus means “useful, profitable” — so Paul is saying: Useful was useless, but now Useful is finally useful. There may be a second layer: achrēstos (useless) and Christos (Christ) sounded nearly identical in first-century pronunciation. “He was a-christos — without Christ — but now, in Christ, he has become who his name always said he was.” Paul repeats the theme in v.20 with the verb onaimēn (“may I have profit/benefit from you in the Lord”) — from the same root as Onesimus's name. The whole letter winks: let me find you as useful as the man I'm sending you.",
  },
  {
    id: "return",
    title: "6. The Return",
    color: ACCENT,
    body: "Onesimus traveled the thousand-plus miles from Rome to Colossae with Tychicus, carrying both this letter and the epistle to the Colossians (Col 4:7–9). Picture the scene the letter was written for: the church gathered in Philemon's house, the letter read aloud, Onesimus standing in the doorway of the home he fled. Apphia, who managed the household he abandoned. The other slaves, watching what happens to a runaway. The congregation Philemon hosts, hearing Paul publicly bet on their patron's character: “Confident of your obedience, I write to you, knowing that you will do even more than I ask” (v.21). We never hear Philemon's answer. But the very existence of the letter is the answer — see the next panel.",
  },
  {
    id: "afterlife",
    title: "7. The Afterlife of the Letter",
    color: PURPLE,
    body: "Why would anyone preserve a 25-verse private note about a domestic dispute — unless the request was granted? If Philemon had refused and punished Onesimus, this letter would have been an embarrassment to be burned, not Scripture to be copied. Its survival is the strongest evidence that grace won. And there may be more: around AD 110, Ignatius of Antioch, traveling under guard to his martyrdom, wrote to the church at Ephesus praising their bishop — a man named Onesimus, whom Ignatius calls “a man of inexpressible love” and then, remarkably, echoes Paul's exact pun about “usefulness.” Many scholars (following John Knox and others) suspect this is the same man, decades later: the runaway slave become bishop of one of the great churches — and possibly the very person who ensured Paul's letters were collected and preserved, including the little one that saved his life. It cannot be proven. But it would explain why the smallest letter made it into the canon.",
  },
];

// ---------------------------------------------------------------------------
// APPEAL DATA (close reading vv. 8-22)
// ---------------------------------------------------------------------------

const APPEAL_ITEMS = [
  {
    id: "ap1",
    title: "vv. 8–9 — Authority Laid Down: “I appeal to you on the basis of love”",
    content:
      "“Therefore, although in Christ I could be bold and order you to do what you ought to do, yet I prefer to appeal to you on the basis of love.” Paul opens by naming the power he refuses to use. He could command (epitassein — the word for an authoritative directive); he chooses to appeal (parakalō — to call alongside, entreat). And he does it as “Paul — an old man and now also a prisoner of Christ Jesus,” deliberately presenting himself at his weakest. This is the letter's method in miniature: real authority that declines coercion because it wants something coercion cannot produce. Forced forgiveness is not forgiveness. Commanded love is not love. Paul wants Philemon's heart, not just his compliance — so he approaches the way God approaches us: with appeal, not force. Augustine and later interpreters saw here the divine pedagogy itself: God, who could command everything, persuades.",
  },
  {
    id: "ap2",
    title: "vv. 10–11 — The Reveal: “My son… Onesimus”",
    content:
      "“I appeal to you for my son, who became my son while I was in chains — Onesimus.” The Greek word order delays the name until Philemon has already heard the relationship: my child, born in my imprisonment. Before Philemon can react to the name of his runaway, Paul has reframed who is being discussed — not “your slave” but “my son.” Then the pun: “Formerly useless to you, now useful both to you and to me.” Notice Paul doesn't sanitize the past. He concedes Onesimus was achrēstos — no good to you. The appeal is not built on minimizing the offense but on announcing a transformation. This is how the gospel talks about sinners: honest about what was, insistent about what now is. “Such were some of you. But you were washed” (1 Cor 6:11).",
  },
  {
    id: "ap3",
    title: "vv. 12–14 — Consent Over Coercion: “not… forced but voluntary”",
    content:
      "“I am sending him — who is my very heart — back to you. I would have liked to keep him with me… but I did not want to do anything without your consent, so that any favor you do would not seem forced but would be voluntary.” Paul surrenders two things here: Onesimus (“my very heart” — splanchna, the seat of deepest affection) and the outcome. He will not engineer the result, even for a good cause. Verse 14 is a one-sentence theology of Christian ethics: goodness extracted under pressure is not goodness (“not under compulsion, but willingly,” cf. 1 Pet 5:2; 2 Cor 9:7 — “not reluctantly or under compulsion, for God loves a cheerful giver”). It is also a theology of how God deals with us: he does not bypass the will he intends to transform.",
  },
  {
    id: "ap4",
    title: "vv. 15–16 — The Providence Reframe: “no longer as a slave, but… a dear brother”",
    content:
      "“Perhaps the reason he was separated from you for a little while was that you might have him back forever — no longer as a slave, but better than a slave, as a dear brother.” Two astonishing moves. First, providence: Paul gently reads the whole painful episode through Joseph's lens (“you meant it for evil; God meant it for good,” Gen 50:20) — note the careful “perhaps” (tacha) and the divine passive “he was separated” (echōristhē): Paul doesn't excuse the running away, but he dares to suggest God was at work in it. The temporary loss (pros hōran, “for an hour”) purchased an eternal gain (aiōnion, “forever”). Second, the bombshell: “no longer as a slave (ouketi hōs doulon), but better than a slave, a beloved brother (adelphon agapēton)… both as a fellow man and as a brother in the Lord.” The phrase “in the flesh and in the Lord” means the brotherhood is not merely “spiritual” — it must change their actual, embodied, household relationship. Whatever legal category Rome maintained, Paul has dissolved the relational one. You cannot own your brother.",
  },
  {
    id: "ap5",
    title: "v. 17 — Imputation in Miniature: “welcome him as you would welcome me”",
    content:
      "“So if you consider me a partner (koinōnon), welcome him as you would welcome me.” This is the letter's hinge, and it is the doctrine of imputation in a single sentence. Paul asks Philemon to receive Onesimus not according to Onesimus's record (runaway, thief, “useless”) but according to Paul's standing (beloved friend, spiritual father, partner). Onesimus walks through the door wearing Paul's welcome. This is precisely what happens in justification: “God made him who had no sin to be sin for us, so that in him we might become the righteousness of God” (2 Cor 5:21). The Father receives us “in the Beloved” (Eph 1:6) — as he would receive Christ, because we come in Christ. Every time Philemon looked at Onesimus, he was to see Paul. Every time the Father looks at the believer, he sees the Son.",
  },
  {
    id: "ap6",
    title: "vv. 18–19a — Substitution in Miniature: “charge it to me”",
    content:
      "“If he has done you any wrong or owes you anything, charge it to me (touto emoi elloga). I, Paul, am writing this with my own hand. I will repay it.” Elloga is a commercial bookkeeping term: put it on my account. Paul does not ask Philemon to pretend there is no debt — that would be denial, not forgiveness. The debt is real, it is named, and it must land somewhere. Paul's solution is transfer: move it from Onesimus's ledger to mine. Then he makes it legally binding — “I, Paul, write this with my own hand” is the form of an ancient promissory note (cheirographon), a signed IOU. Compare Colossians 2:14, written at the same desk: God “canceled the charge of our legal indebtedness (cheirographon)… nailing it to the cross.” Paul is enacting toward Onesimus exactly what he says Christ did for us. Forgiveness is never free; it is always paid for by the forgiver. The cross is “charge it to me” written in blood.",
  },
  {
    id: "ap7",
    title: "v. 19b — The Gentle Pressure: “you owe me your very self”",
    content:
      "“— not to mention that you owe me your very self.” A rhetorical move the ancients called paraleipsis: mentioning something by saying you won't mention it. Just as Philemon is calculating what Onesimus owes him, Paul flips the ledger: and what do you owe me? Philemon's conversion — his eternal life — came through Paul. The debt Onesimus owes Philemon is denarii; the debt Philemon owes Paul is his soul. This is Jesus' math in the parable of the unmerciful servant (Matt 18:21–35): the servant forgiven ten thousand talents who chokes a man over a hundred denarii. Paul is not guilt-tripping for its own sake; he is doing proportion therapy. No one who has been forgiven an infinite debt can coherently refuse to forgive a finite one. “Forgive us our debts, as we also have forgiven our debtors.”",
  },
  {
    id: "ap8",
    title: "vv. 20–21 — The Expectation: “you will do even more than I ask”",
    content:
      "“I do wish, brother, that I may have some benefit (onaimēn — the pun on Onesimus's name again) from you in the Lord; refresh my heart in Christ. Confident of your obedience, I write to you, knowing that you will do even more than I ask.” Two notes. First, Paul uses Philemon's own reputation as leverage of love: you are famous for refreshing the hearts of the saints (v.7) — now refresh mine (v.20, same word, same “heart”/splanchna he used for Onesimus in v.12: refreshing Paul's heart means receiving Onesimus, who IS Paul's heart). Second, “even more than I ask” (v.21) has tantalized readers for two millennia. More than welcome-as-a-brother — what's more? Most interpreters, ancient and modern, hear a delicate hint at manumission: set him free. Possibly also: send him back to me for the work of the gospel (v.13). Paul names neither, because the whole letter's strategy is to let love draw the conclusion authority refuses to dictate.",
  },
  {
    id: "ap9",
    title: "v. 22 — The Accountability Clause: “prepare a guest room”",
    content:
      "“And one thing more: prepare a guest room for me, because I hope to be restored to you in answer to your prayers.” On the surface, travel logistics. Underneath, the most charming application of pressure in the New Testament: I'm coming to see how this turned out. Paul expects release (cf. Phil 1:25; 2:24) and plans to visit the Lycus Valley — which means Philemon's response to Onesimus will eventually be reviewed in person, over dinner, in the guest room Philemon himself prepared. Accountability is part of love, not a contradiction of it. Paul has refused to command, but he has not walked away; he has appealed, guaranteed the debt, raised the expectation, and now promised follow-up. This is what costly mediation looks like: the mediator stays in the story.",
  },
];

// ---------------------------------------------------------------------------
// SLAVERY DATA
// ---------------------------------------------------------------------------

const SLAVERY_ITEMS = [
  {
    id: "sl1",
    title: "Slavery in the Roman World",
    content:
      "Slavery was not a feature of the Roman economy; it was the foundation. Estimates suggest a third or more of the population of Italy were slaves — perhaps 10–20% across the empire's cities, including places like Colossae. People became slaves through war, piracy, kidnapping, debt, birth to an enslaved mother, or the exposure of unwanted infants. Slaves ranged from chained laborers in mines and fields (whose lives were short and brutal) to educated household managers, tutors, physicians, and accountants who could earn money (the peculium), conduct business, and realistically hope for manumission — freed slaves (liberti) were a large and visible class, and their children were full citizens. None of this softens the core fact: a slave was legally property (res), without rights to marriage, family integrity, bodily safety, or legal personhood. The owner's power was near-absolute. Aristotle had called the slave “a living tool.” Onesimus's name — “Useful” — captures the entire ideology in one word.",
  },
  {
    id: "sl2",
    title: "Roman Slavery and Race-Based Chattel Slavery: Differences and a Warning",
    content:
      "When modern readers hear “slavery,” they rightly think of the transatlantic trade — the race-based, hereditary, chattel slavery of the Americas. Roman slavery differed in important ways: it was not racial (slaves and owners were often ethnically indistinguishable; you could not tell a slave by sight), manumission was common and socially expected for urban household slaves, freed slaves could rise to wealth and influence, and slavery was not justified by a doctrine of the inherent inferiority of a people. These differences matter for reading Philemon honestly. But they must not become an excuse. Roman slavery still meant owned human beings, sexual availability of slaves to masters (widely assumed in Roman sources), torture of slaves as legal procedure for testimony, crucifixion of rebels, and the iron collars in our museums. The similarities — human beings as property, violence as the system's enforcement, the destruction of family bonds — are profound. The honest position is: Roman slavery was a different evil in significant respects, and it was still an evil. Scripture's engagement with it must be read against that real, ugly background — neither flattened into Alabama in 1850 nor airbrushed into benign “employment.”",
  },
  {
    id: "sl3",
    title: "Why Didn't Paul Demand Abolition?",
    content:
      "It is the question every honest reader asks. Several factors belong in the answer, none of which require pretending the question is illegitimate. (1) Powerlessness: the church was a tiny, legally suspect movement of perhaps a few thousand people in an empire of 60 million whose entire economy ran on slavery; a call for abolition would have been heard as a call for servile war — Rome had crushed three of those, ending the last by crucifying six thousand followers of Spartacus along the Appian Way. (2) Paul's actual posture: he tells slaves to gain freedom if they can (1 Cor 7:21), ranks “enslavers” (andrapodistais — slave traders/kidnappers) with murderers in 1 Tim 1:10, and declares that in Christ “there is neither slave nor free” (Gal 3:28; Col 3:11). (3) Method: Paul attacks the root rather than the branch. Rather than petitioning Caesar (who wasn't listening) to change a law, he commands a Christian master to receive his slave as a beloved brother, as Paul himself, forever — and lets the church watch. He doesn't reform the institution; he detonates its premise inside the one community he can actually address. As many scholars have put it: Paul doesn't call for slavery's abolition; he makes it unthinkable. Whether that was enough, and whether the church acted on it quickly enough, is the next painful panel.",
  },
  {
    id: "sl4",
    title: "The Seed That Destroyed Slavery: “You Cannot Enslave a Brother”",
    content:
      "Verse 16 — “no longer as a slave, but better than a slave, a dear brother… both in the flesh and in the Lord” — contains slavery's death sentence, even though the execution took centuries. The logic is simple and lethal: slavery requires that the slave be other — a tool, an inferior, a different kind of being. Brotherhood denies the otherness. If Onesimus is Philemon's brother “in the flesh” (in ordinary human relations, not just at church), then the master-property relation has lost its foundation; whatever legal fiction Rome maintains, in God's accounting there are only brothers, and you cannot own your brother. The early church felt the pull of this logic unevenly: it welcomed slaves as full members and clergy (Callistus, bishop of Rome in the third century, was a former slave), and some Christians freed slaves in striking numbers, while many others — to the church's lasting shame — kept the institution for centuries. Gregory of Nyssa (4th century) drew the full conclusion in his homily on Ecclesiastes: “You condemn a person to slavery whose nature is free… What price did you put on the image of God?” — the ancient world's first known absolute attack on the institution itself, and its premises are Philemon's premises.",
  },
  {
    id: "sl5",
    title: "How Abolitionists Used This Letter",
    content:
      "Eighteen centuries later, the seed germinated in public. British and American abolitionists — Wilberforce and the Clapham Sect, Quakers like John Woolman, evangelicals like Charles Finney, Black preachers and writers like Frederick Douglass and Absalom Jones — built their case on exactly the logic of Philemon and its companion texts: all people bear God's image (Gen 1:27); God “made from one man every nation” (Acts 17:26); slave-trading is condemned outright (1 Tim 1:10; Exod 21:16 makes man-stealing a capital crime); and in Christ the slave is a brother (Phlm 16) — therefore a Christian civilization that buys and sells brothers is at war with its own gospel. The seal of the British abolition movement put it in Philemon's exact register: a kneeling enslaved man asking, “Am I not a man and a brother?” The answer Paul gave Philemon — yes, forever — became the answer that, pressed by relentless campaigning, ended the British slave trade (1807) and slavery in the empire (1833). It mattered that the argument could be made from inside the culture's own sacred text: the abolitionists did not have to import a new morality; they had to make Christians read their own mail.",
  },
  {
    id: "sl6",
    title: "How Pro-Slavery Readers Misused Scripture",
    content:
      "Honesty requires the other half of the story. In the American South, Philemon was a favorite pro-slavery text: Paul returned a runaway, did he not? Therefore, the argument ran, Scripture endorses fugitive slave laws — this exact reasoning was preached from pulpits and cited in defense of the Fugitive Slave Act of 1850. The misuse depended on systematic distortion: ignoring that Paul sent Onesimus back as a brother and not as property, with the debt transferred and freedom hinted; ignoring that the return was voluntary and mediated, not enforced by slave-catchers; ignoring 1 Tim 1:10's condemnation of the man-stealing on which the entire transatlantic trade was built; and ignoring that American slavery's racial, hereditary, family-destroying form violated even the Old Testament's own slavery regulations. Theologians like Charles Hodge and James Henley Thornwell constructed sophisticated biblical defenses of slavery; Frederick Douglass answered that “between the Christianity of this land, and the Christianity of Christ, I recognize the widest possible difference.” The lesson is permanent: any text can be weaponized by readers who profit from misreading it. The corrective is not to abandon the text but to read all of it — and to notice whose interests our interpretations serve.",
  },
  {
    id: "sl7",
    title: "Transformation From Within: The Gospel's Method and Its Critics",
    content:
      "Philemon models a method: change hearts, redefine relationships, build a contrast-community, and let the institution rot from the inside — transformation from within rather than revolution from without. The case for it: it was the only method actually available to a powerless church; it avoids the body count of violent revolution; it produces change that outlasts regimes because it changes what people believe; and it eventually worked — slavery became indefensible precisely in the civilization most saturated with these texts. The case against it deserves a fair hearing: it is agonizingly slow, and the enslaved paid for that slowness in whole lifetimes — “justice too long delayed is justice denied” (King, Letter from Birmingham Jail, itself a text aimed at Christians counseling patience); it is vulnerable to co-option, letting comfortable believers baptize gradualism that costs them nothing; and the church often failed to follow its own logic, requiring pressure from outside agitation, enslaved people's own resistance, and eventually law and war to do what v.16 implied all along. A mature reading holds both: the gospel's inside-out method really did plant the seed that no other ancient system planted — and Christians who used that method as an alibi for inaction stand condemned by the very letter they cited. Personal transformation and public justice are not rivals; Philemon shows the first igniting, and history shows the second was still required.",
  },
];

// ---------------------------------------------------------------------------
// GOSPEL IN MINIATURE DATA
// ---------------------------------------------------------------------------

const GOSPEL_PARALLELS = [
  {
    role: "Onesimus is us",
    figure: "The Runaway",
    color: PURPLE,
    body: "Every element of Onesimus's condition maps onto the human condition before God. He ran from his master's house — “we all, like sheep, have gone astray; each of us has turned to our own way” (Isa 53:6). He carries a debt he cannot pay (v.18) — “forgive us our debts” (Matt 6:12). He is, by his own name's bitter irony, useless — “All have turned away… there is no one who does good” (Rom 3:12, where the Greek ēchreōthēsan, “become worthless,” shares its root with achrēstos in Phlm 11). And he can be saved only by reaching the one person with standing to plead for him. Luther saw it instantly, and said it for all of us: “We are all God's Onesimi.” The letter only reads correctly from inside Onesimus's sandals — which is to say, it only reads correctly to people who know they are the runaway, not the offended householder.",
  },
  {
    role: "Paul plays the part of Christ",
    figure: "The Mediator",
    color: GOLD,
    body: "Watch what the mediator does, and you are watching the gospel. He identifies with the offender completely — “my son,” “my very heart” — the way Christ “is not ashamed to call them brothers” (Heb 2:11). He intercedes from chains, in weakness, laying aside the authority that is rightfully his (vv.8–9) — “who, being in very nature God… made himself nothing” (Phil 2:6–7). He absorbs the debt in his own name, in his own handwriting: “charge it to me; I will repay” (vv.18–19) — “the Son of Man came… to give his life as a ransom for many” (Mark 10:45). And he stakes his own relationship with the offended party as the runaway's only standing: “if you consider me a partner, welcome him as me” (v.17) — “Christ Jesus… is at the right hand of God and is also interceding for us” (Rom 8:34). Luther again: “What Christ has done for us with God the Father, that St. Paul does also for Onesimus with Philemon… For we are all his Onesimi, if we believe.”",
  },
  {
    role: "Philemon stands where the Father stands",
    figure: "The One Who Welcomes",
    color: ACCENT,
    body: "Philemon holds the ledger and the legal rights. Everything depends on whether he will receive the runaway according to the runaway's record or according to the mediator's standing. The gospel's claim is that the Father has already answered that question about us: “God was reconciling the world to himself in Christ, not counting people's sins against them” (2 Cor 5:19); he has “blessed us… in the Beloved” (Eph 1:6); the father in Luke 15 sees the returning runaway “while he was still a long way off” and runs. But there is a sting in the analogy: in the parable Philemon enacts, he is cast as the Father — and every reader who has been wronged is cast there too. The question the letter asks Philemon is the question Jesus' parables ask us: having been welcomed as Christ, will you welcome your Onesimus as yourself was welcomed? “Accept one another, then, just as Christ accepted you” (Rom 15:7).",
  },
];

const GOSPEL_MECHANICS = [
  {
    title: "v. 18 and Substitution: The Debt Transferred",
    color: GOLD,
    body: "“If he has done you any wrong or owes you anything, charge it to me.” Forgiveness does not make debts vanish; it relocates them. When you forgive a real wrong, you absorb its cost — the money never repaid, the years never restored, the apology never offered. Paul makes the relocation explicit and contractual: the wrong moves from Onesimus's account to Paul's, under Paul's signature. This is the logic of the atonement in commercial dress: “He himself bore our sins in his body on the cross” (1 Pet 2:24); “the LORD has laid on him the iniquity of us all” (Isa 53:6); and — written in the same season, possibly the same week — God “canceled the charge of our legal indebtedness (cheirographon)… nailing it to the cross” (Col 2:14). The cross is God's own handwriting at the bottom of our IOU: I will repay. The debt was real; that is why the payment had to be.",
  },
  {
    title: "v. 17 and Imputation: The Standing Conferred",
    color: ACCENT,
    body: "“Welcome him as you would welcome me.” Substitution deals with what we owe; imputation deals with how we are received. Paul asks for more than Onesimus's acquittal — he asks that Onesimus be given Paul's own welcome: the embrace, the seat at the table, the honor due the apostle himself. This is the doctrine the Reformers called the “great exchange”: our sin reckoned to Christ, his righteousness reckoned to us, so that we are received “not having a righteousness of my own… but that which is through faith in Christ” (Phil 3:9). Union with Christ is the mechanism: the believer is “in Christ” as Onesimus arrives “in Paul” — inside the mediator's relationship, wearing the mediator's standing. The Father does not merely tolerate the forgiven; he welcomes them with the welcome reserved for his Son. That is why assurance is possible: your reception does not rest on your record.",
  },
  {
    title: "v. 15 and Providence: The Felix Culpa",
    color: PURPLE,
    body: "“Perhaps the reason he was separated from you for a little while was that you might have him back forever.” Paul looks at a story containing real sin — flight, probably theft — and dares to see God's hand weaving even the wrong into a greater good: Onesimus ran from a master and was found by a Father; he left a household and came back to a family; the temporary loss purchased an eternal relationship. This is the pattern theologians call felix culpa — the fault that, under grace, occasions a greater blessing — supremely true of the cross itself, where “you, with the help of wicked men, put him to death… but God raised him” (Acts 2:23–24; cf. Gen 50:20). Pastoral care: this truth is for retrospect and hope, not for excusing sin in prospect (Rom 6:1). But for anyone surveying the wreckage of their own running, v.15 whispers what the whole Bible shouts: God writes straight with crooked lines, and the way back can end further in than where you started — “back forever.”",
  },
  {
    title: "The Whole Letter and Sanctification: Becoming Your Name",
    color: GOLD,
    body: "“Formerly useless, now useful” (v.11) is also a miniature of sanctification. Onesimus's name declared a purpose — useful — that his life didn't match until grace intervened. So with us: made in God's image for good works “prepared in advance for us to do” (Eph 2:10), we live as walking contradictions of our own design until Christ makes us what we were named to be. Notice that grace does not erase Onesimus's history (Paul names the uselessness) and does not leave him in it (now useful to you and to me). And notice where usefulness leads: back into the hardest room, to face the person he wronged, accompanied and vouched for. New life in Christ is not a witness-protection program that relocates us away from our past; it is a transformation sturdy enough to walk back through the old front door.",
  },
];

// ---------------------------------------------------------------------------
// RECONCILIATION DATA
// ---------------------------------------------------------------------------

const RECON_PRINCIPLES = [
  {
    id: "rc1",
    title: "Truth-Telling Without Minimizing",
    content:
      "Paul never pretends Onesimus didn't run or didn't owe. He says “useless” out loud (v.11) and puts the debt on the table (v.18: “if he has done you any wrong or owes you anything”). Real reconciliation begins with an accurate account of the damage, because forgiveness that hasn't counted the cost isn't forgiveness — it's denial wearing forgiveness's clothes. Cheap peace (“it was nothing,” “let's just move on”) leaves the wound unclean and the relationship fake. Practice: when seeking reconciliation, name what happened specifically — as the offender, confess without the words “if,” “but,” or “you” doing the heavy lifting; as the wronged party, you are allowed to state the real size of the debt before you release it. Jesus' process in Matthew 18:15 starts with truth: “go and point out their fault” — the showing of the wrong precedes the winning of the brother.",
  },
  {
    id: "rc2",
    title: "Costly Mediation: Someone Has to Pay the Toll",
    content:
      "Reconciliation between Philemon and Onesimus happened because a third party spent himself to broker it: Paul invested his relational capital (v.17), his money (vv.18–19), his comfort (giving up Onesimus's help, v.13), and his apostolic dignity (begging instead of commanding, vv.8–9). Most fractured relationships stay fractured because no one will pay the toll — every party waits for the other to move first. Sometimes you are Paul in someone else's conflict: the trusted friend who could vouch for the offender, absorb some cost, arrange the meeting, write the letter. “Blessed are the peacemakers” (Matt 5:9) is not about people who like calm; it is about people who spend something to manufacture peace. Practice: is there a conflict adjacent to you where you hold capital with both sides? Mediation is a ministry — “God… gave us the ministry of reconciliation” (2 Cor 5:18) — and it will cost you. Pay it.",
  },
  {
    id: "rc3",
    title: "Voluntary Love Over Coerced Compliance",
    content:
      "“I did not want to do anything without your consent, so that any favor you do would not seem forced but would be voluntary” (v.14). You cannot strong-arm reconciliation into existence. Guilt-trips, ultimatums, public shaming, and recruited allies can extract an apology or a handshake, but they cannot produce the thing itself — a heart that wills the other's good. Paul models the alternative: make the appeal compelling, make the path easy, absorb the obstacles, raise the expectation — and then leave the choice genuinely free. This also liberates you from outcomes you cannot control: “If it is possible, as far as it depends on you, live at peace with everyone” (Rom 12:18) — your responsibility is your side of the bridge. Practice: in pursuing reconciliation, ask whether your methods are persuasion or pressure. If the other person could not say no without punishment, you are not seeking their love; you are seeking their surrender.",
  },
  {
    id: "rc4",
    title: "Receive the Offender as Family, Not as Parolee",
    content:
      "Paul does not ask Philemon to take Onesimus back on probation — tolerated, watched, reminded. He asks for “no longer as a slave… a dear brother” (v.16), welcomed “as you would welcome me” (v.17), “back forever” (v.15). Many of us “forgive” people into a lower status: still in the house, but never again at the table; technically restored, permanently suspect. The gospel's pattern is status elevation, not perpetual parole — the prodigal gets the robe and the ring, not the servants' quarters he proposed for himself (Luke 15:19–22). This is the difference between restoration and mere readmission. Practice: if you have said “I forgive you” to someone, ask what status you have actually assigned them. Do you retell their offense? Hold it in reserve for arguments? Treat them to a permanent deficit they can never repay? “Love keeps no record of wrongs” (1 Cor 13:5) — the ledger was the thing forgiveness was supposed to burn.",
  },
  {
    id: "rc5",
    title: "Restoration Over Punishment",
    content:
      "Roman law offered Philemon a menu of punishments, and honor culture expected him to use them — an unpunished runaway invited the next escape. Paul asks him to absorb the loss and aim at a different target: not the satisfaction of seeing Onesimus pay, but the joy of having a brother forever. This is the deep choice in every serious wrong done to us: the punitive aim (they must feel what I felt) versus the restorative aim (I want what was broken made whole, and even my enemy made new). Scripture consistently relocates vengeance to God (“Do not take revenge… ‘It is mine to avenge,’” Rom 12:19) precisely to free us for restoration. Note carefully: this is about the personal thirst for payback, not about consequences — restitution, accountability, and lawful justice can all serve restoration (Zacchaeus repaid fourfold, Luke 19:8). The question is the goal: are you trying to win the war or end it? Practice: name, in writing, what outcome you actually want with the person who hurt you. If the honest answer is “their suffering,” start praying for a different want — that prayer is where forgiveness usually begins.",
  },
  {
    id: "rc6",
    title: "When Reconciliation Requires More Than a Letter",
    content:
      "Philemon must not be weaponized. Note what the letter does NOT do: it does not send Onesimus back alone (Tychicus escorts him), unannounced (the letter precedes judgment), without advocacy (Paul's full weight is engaged), without the community watching (the whole house church hears it), or without follow-up (v.22: Paul is coming). Even this most hopeful of letters is engineered with safeguards. So: where there has been abuse or violence, reconciliation does not mean returning to danger — forgiveness can be done from a safe distance, and reunion is a separate question from release of bitterness. Where the offender is unrepentant or actively harmful, Scripture itself counsels boundaries (Matt 18:17; Titus 3:10; 1 Cor 5). Where crimes were committed, legal justice is not unforgiveness — God ordains authorities for protection (Rom 13:1–4), and a victim can forgive while testifying. Where trust was destroyed, forgiveness can be granted in a moment, but trust is rebuilt in increments and on evidence; reconciliation is a process with stages, not a single dramatic hug. And where the other party refuses, you can still do your side — release the debt before God — and grieve the rest. “As far as it depends on you” (Rom 12:18) is both a command and a limit: some bridges need two builders, and you are only one of them.",
  },
];

const RECON_STEPS = [
  { step: "1", title: "Count the debt honestly", desc: "Write down what was actually taken from you — or what you actually took. No minimizing, no inflating. Paul named the wrong before he covered it (v.18)." },
  { step: "2", title: "Decide who absorbs it", desc: "Forgiveness means the debt lands on you instead of them: the repayment you stop demanding, the retaliation you forgo. Decide this before God first — vertical release precedes horizontal repair." },
  { step: "3", title: "Use a mediator if the door is closed", desc: "A trusted third party with credibility on both sides can carry a message that would die in direct delivery. Be willing to be Paul; be humble enough to need one." },
  { step: "4", title: "Make the approach an appeal, not a demand", desc: "Whether confessing or confronting, come in weakness rather than leverage (vv.8–9). “I was wrong; I have no excuse” or “This hurt me; I want us restored” — not ultimatums." },
  { step: "5", title: "Re-assign status deliberately", desc: "If you forgive, decide what they now are to you and act it: back at the table, spoken well of, the offense retired from circulation (v.16–17). If full status isn't safe yet, name the honest interim." },
  { step: "6", title: "Build in accountability and time", desc: "Paul promised a visit (v.22). Restored relationships need check-ins, evidence, and patience — trust regrows at the speed of faithfulness, not the speed of apology." },
];

// ---------------------------------------------------------------------------
// THEMES DATA
// ---------------------------------------------------------------------------

const THEME_ITEMS = [
  {
    id: "th1",
    title: "Koinonia: Partnership That Costs Something",
    content:
      "The word koinōnia (fellowship, partnership, shared life) anchors the letter at both ends of the appeal. Verse 6: Paul prays “that the koinōnia of your faith may become effective” — that Philemon's shared faith would convert into action. Verse 17: “if you consider me a koinōnon (partner), welcome him as me.” In Paul's world koinonia was business language as much as church language — partners shared assets, debts, and liabilities. Paul takes it literally: as your partner, my debts are payable by you and Onesimus's debts are payable by me; our accounts interpenetrate. This explodes the modern notion of fellowship as coffee and small talk. Biblical fellowship means your brother's burden is legally yours (Gal 6:2), your sister's disgrace is your business, and the runaway your partner vouches for has a claim on your table. The church is not an audience; it is a partnership with joint and several liability in love.",
  },
  {
    id: "th2",
    title: "Love That Appeals Rather Than Commands",
    content:
      "“Although in Christ I could be bold and order you… yet I appeal to you on the basis of love” (vv.8–9). The letter is a sustained study in the difference between power and authority, and between compliance and transformation. Paul possesses the right to command and judges it the wrong tool, because the thing he wants — a heart that freely welcomes — cannot be produced by force, only invited. This is God's own characteristic mode: he commands, yes, but in Christ he stoops, persuades, washes feet, tells stories, weeps over cities, and stands at the door and knocks (Rev 3:20) rather than battering it down. It is also the charter for all Christian leadership and parenting and persuasion: “not lording it over those entrusted to you, but being examples” (1 Pet 5:3). Whoever must always invoke their authority has already lost the better part of it; whoever spends their authority to set others free, as Paul does here, multiplies it.",
  },
  {
    id: "th3",
    title: "The Social Revolution of “Brother”",
    content:
      "Count the family words: brother (vv.1, 7, 16, 20), sister (v.2), son/child (v.10), father (v.10, implied). In a hierarchical society obsessed with status — patron over client, master over slave, citizen over foreigner — the church called everyone by sibling names, and meant it. Verse 16 is where the vocabulary detonates: the slave is to be a “dear brother… both in the flesh and in the Lord” — not brother-at-church and property-at-home, but brother in the whole embodied relationship. Sociologically this was the early church's scandal and its magnetism: masters and slaves shared one loaf and one cup (1 Cor 10:17), and a slave could be the elder who served his own master communion. Celsus, the second-century pagan critic, sneered that Christianity attracted slaves and the lowborn; the church's answer was that this was the point (1 Cor 1:26–28). Every time we call a fellow believer “brother” or “sister,” we are using revolutionary language — words that, taken seriously, once dissolved an empire's social order, and are still meant to dissolve ours.",
  },
  {
    id: "th4",
    title: "Forgiveness as Debt Absorption",
    content:
      "The letter's financial vocabulary is relentless: owes (v.18), charge it to my account (v.18), I will repay (v.19), you owe me (v.19), benefit/profit (v.20). Paul understands what sentimentality forgets: wrongs are debts, debts are real, and real debts don't evaporate — they are either collected or absorbed. When Jesus teaches “forgive us our debts” (Matt 6:12) and tells of a king eating the loss of ten thousand talents (Matt 18:27 — “canceled the debt,” a financial write-off), he is using Philemon's ledger. To forgive is to announce: the cost of your wrong now lives in my account, and I will not pursue collection. That is why forgiveness hurts (you feel the debit), why it is glorious (it is the only thing that ends the cycle of collection and counter-collection), and why it is Godlike — at the cross, God did not waive our debt by decree; he paid it in person. Philemon shows the chain of absorption: Christ absorbed Paul's debt, Paul absorbs Onesimus's debt, and Philemon is invited to absorb the remainder — “forgive as the Lord forgave you” (Col 3:13, same prison, same courier).",
  },
  {
    id: "th5",
    title: "Providence: “Perhaps the Reason…”",
    content:
      "“Perhaps the reason he was separated from you for a little while was that you might have him back forever” (v.15). Paul's “perhaps” (tacha) is a masterclass in humble providence-reading. He affirms that God was at work in the mess — the divine passive “he was separated” quietly puts God's hand on events that included sin and flight — yet he refuses to claim certainty about the mechanics. Scripture's pattern holds both: Joseph can say “you meant evil… God meant it for good” (Gen 50:20) and “God sent me ahead of you” (Gen 45:7) about the same crime; Acts 2:23 holds “wicked hands” and “God's deliberate plan” in one sentence. Providence never excuses the sin (Onesimus still owed; the debt still needed paying) but it refuses to surrender the story to the sin. For the reader: the worst chapter of your life is not outside God's authorship, and “for a little while” may yet be the setup for “forever” (cf. Rom 8:28; 2 Cor 4:17). Read your own history with Paul's grammar — confident in God's weaving, humble (“perhaps”) about the details.",
  },
];

// ---------------------------------------------------------------------------
// JOURNAL
// ---------------------------------------------------------------------------

type JEntry = { id: string; date: string; verse: string; reflection: string; prayer: string };

const PROMPTS = [
  "Who is your Onesimus — someone you need to receive back as a brother or sister rather than keep in the category their offense assigned them?",
  "Where do you need someone to say “charge it to me” for you? Have you actually brought that debt to Christ, or are you still trying to work it off?",
  "What debt are you still holding over someone — replaying it, citing it in arguments, keeping it in reserve? What would it cost you to absorb it, and what is holding the ledger open?",
  "How does being “God's Onesimus” — welcomed as Christ, your record transferred — change how you see yourself when you fail this week?",
  "Verse 15 says “perhaps the reason…” — is there a painful separation or detour in your story that God may be weaving toward a “back forever”? Write the story with Paul's humble ‘perhaps.’",
];

// ---------------------------------------------------------------------------
// VIDEOS
// ---------------------------------------------------------------------------

const VIDEOS = [
  { videoId: "aW9Q3Jt6Yvk", title: "The Book of Philemon — BibleProject Overview" },
  { videoId: "pXTXlDxQsvc", title: "The Book of Colossians — BibleProject Overview (Philemon's Companion Letter)" },
  { videoId: "Ph-5fR6Cqos", title: "Colossians Part 2 — BibleProject (Onesimus Carried Both Letters, Col 4:7–9)" },
  { videoId: "GdfxXmUJUbA", title: "Put On the New Self — Colossians 3 (“Forgive as the Lord Forgave You”)" },
];

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

export default function PhilemonGuidePage() {
  const [tab, setTab] = usePersistedState<PhmTab>("vine_philemon_tab", "overview");
  const [openAppeal, setOpenAppeal] = useState<string | null>(null);
  const [openSlavery, setOpenSlavery] = useState<string | null>(null);
  const [openRecon, setOpenRecon] = useState<string | null>(null);
  const [openTheme, setOpenTheme] = useState<string | null>(null);

  const [entries, setEntries] = useState<JEntry[]>([]);
  const [verse, setVerse] = useState("");
  const [reflection, setReflection] = useState("");
  const [prayer, setPrayer] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_philemon_journal");
      if (raw) setEntries(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const saveEntry = useCallback(() => {
    if (!verse.trim() && !reflection.trim() && !prayer.trim()) return;
    const entry: JEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verse: verse.trim(),
      reflection: reflection.trim(),
      prayer: prayer.trim(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    try { localStorage.setItem("vine_philemon_journal", JSON.stringify(updated)); } catch { /* ignore */ }
    setVerse(""); setReflection(""); setPrayer("");
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [verse, reflection, prayer, entries]);

  const deleteEntry = useCallback((id: string) => {
    setEntries(prev => {
      const updated = prev.filter(e => e.id !== id);
      try { localStorage.setItem("vine_philemon_journal", JSON.stringify(updated)); } catch { /* ignore */ }
      return updated;
    });
  }, []);

  const inputStyle: React.CSSProperties = {
    width: "100%", background: BG, border: `1px solid ${BORDER}`,
    borderRadius: 8, padding: "10px 14px", color: TEXT, fontSize: 15,
    outline: "none", boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = { display: "block", color: MUTED, fontSize: 13, marginBottom: 6, fontWeight: 600 };

  const accordion = (
    items: { id: string; title: string; content: string }[],
    open: string | null,
    setOpen: (v: string | null) => void,
  ) => (
    <div>
      {items.map(item => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} style={{ background: CARD, border: `1px solid ${isOpen ? `${ACCENT}66` : BORDER}`, borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              style={{ width: "100%", background: "none", border: "none", color: TEXT, padding: "16px 20px", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, fontSize: 15 }}>
              <span style={{ fontWeight: 700 }}>{item.title}</span>
              <span style={{ color: isOpen ? ACCENT : MUTED, fontSize: 16, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 20px 20px", color: MUTED, lineHeight: 1.8, fontSize: 15 }}>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif" }}>

          {/* Hero */}
          <div style={{ background: `linear-gradient(135deg, #0a1510 0%, ${CARD} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
            <div style={{ maxWidth: 860, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>PAULINE EPISTLES</span>
                <span style={{ color: MUTED, fontSize: 14 }}>25 Verses · ~AD 60–62 · Written from Prison</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 800, margin: "0 0 16px", lineHeight: 1.15 }}>
                The Letter to Philemon
              </h1>
              <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: MUTED, maxWidth: 720, lineHeight: 1.7, margin: 0 }}>
                Paul's shortest, most personal letter: a runaway slave, a wronged master, and an old prisoner who stakes everything on grace. <em style={{ color: TEXT }}>“Welcome him as you would welcome me. If he owes you anything, charge it to me.”</em> The gospel, in 335 Greek words.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ borderBottom: `1px solid ${BORDER}`, overflowX: "auto", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 10 }}>
            <div style={{ display: "flex", maxWidth: 860, margin: "0 auto", padding: "0 16px" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id)}
                  style={{ padding: "16px 16px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", color: tab === t.id ? ACCENT : MUTED, borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", transition: "color 0.15s" }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>

            {/* ------------------------------------------------ OVERVIEW */}
            {tab === "overview" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Overview</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                  Philemon is the shortest letter Paul ever wrote — 25 verses, 335 words in the Greek — and the most personal document in the New Testament canon. No church-wide doctrinal crisis, no list of opponents, no sweeping theological argument. Just one apostle, one wealthy believer, one runaway slave, and a single request that puts the entire gospel on trial in a Colossian living room.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 32 }}>
                  Paul wrote it from imprisonment (most likely his Roman house arrest, ~AD 60–62, Acts 28:16, 30) at the same desk as Colossians — both letters traveled in the same satchel, carried by Tychicus, with Onesimus himself walking alongside (Col 4:7–9). Reading them together is like hearing a sermon and then watching the preacher live it: Colossians says “forgive as the Lord forgave you” (Col 3:13); Philemon is what that costs in practice. It is also a masterclass in Christian persuasion — Paul refusing the shortcut of command and instead constructing, sentence by sentence, an appeal that makes grace nearly irresistible while leaving it genuinely free.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16, marginBottom: 36 }}>
                  {FACT_CARDS.map(item => (
                    <div key={item.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "16px 18px" }}>
                      <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontWeight: 600, fontSize: 15, lineHeight: 1.4 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 16 }}>The Cast</h3>
                <div style={{ display: "grid", gap: 16, marginBottom: 36 }}>
                  {CAST.map(c => (
                    <div key={c.name} style={{ background: CARD, border: `1px solid ${c.color}40`, borderLeft: `4px solid ${c.color}`, borderRadius: 12, padding: 20 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                        <h4 style={{ fontWeight: 700, fontSize: 17, margin: 0, color: c.color }}>{c.name}</h4>
                        <span style={{ color: MUTED, fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{c.role}</span>
                      </div>
                      <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: 15 }}>{c.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 16 }}>Structure of the Letter</h3>
                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 36 }}>
                  {STRUCTURE.map((s, i) => (
                    <div key={s.ref} style={{ display: "flex", gap: 16, marginBottom: i === STRUCTURE.length - 1 ? 0 : 18 }}>
                      <span style={{ color: GOLD, fontWeight: 700, minWidth: 76, fontSize: 14, flexShrink: 0 }}>{s.ref}</span>
                      <div>
                        <div style={{ fontWeight: 700, marginBottom: 2 }}>{s.title}</div>
                        <div style={{ color: MUTED, lineHeight: 1.6, fontSize: 15 }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}40`, borderRadius: 12, padding: 28 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 12 }}>Why a 25-Verse Letter Made the Canon</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                    The early church preserved letters about the Trinity, the resurrection, and the end of the world — and this note about one slave. Why? Because Philemon is the gospel demonstrated rather than declared. Every major doctrine appears in miniature and in motion: substitution (“charge it to me”), imputation (“welcome him as me”), adoption (“my son”), providence (“perhaps the reason…”), reconciliation, the priesthood of intercession, and the social earthquake of calling a slave “brother.”
                  </p>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                    It completes the picture of Paul, too: the theologian of grace shown actually doing grace — spending his own credit, signing his own name to another man's debt. As this guide will keep noticing, the letter only stays small if you read it from the outside. Read from inside Onesimus's sandals, it is the story of every Christian. Luther: <em style={{ color: TEXT }}>“We are all God's Onesimi.”</em>
                  </p>
                </div>
              </div>
            )}

            {/* ------------------------------------------------ STORY */}
            {tab === "story" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Story Behind the Letter</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                  Philemon is the rare epistle with a plot. The letter itself gives us only fragments — a flight, a debt, a conversion in chains, a journey home — but the fragments assemble into one of the most dramatic narratives in the New Testament. Reconstructed here in seven movements.
                </p>
                <div style={{ display: "grid", gap: 16, marginBottom: 24 }}>
                  {STORY_BEATS.map(beat => (
                    <div key={beat.id} style={{ background: CARD, border: `1px solid ${beat.color}40`, borderLeft: `4px solid ${beat.color}`, borderRadius: 12, padding: 22 }}>
                      <h3 style={{ fontWeight: 700, color: beat.color, marginBottom: 10, fontSize: 16 }}>{beat.title}</h3>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: 15 }}>{beat.body}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 10 }}>A Detail Worth Sitting With</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                    The most underrated actor in this story is Onesimus himself. Nothing compelled him to go back — he could have melted into Rome's crowds. Instead the new convert carried, over a thousand miles, a letter he could not be certain would work, toward a man with legal power over his body, because Paul asked and because the gospel had made the man he wronged his brother. Repentance is not a feeling; it is a long walk back to Colossae.
                  </p>
                </div>
              </div>
            )}

            {/* ------------------------------------------------ APPEAL */}
            {tab === "appeal" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Appeal (vv. 8–22)</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                  Verses 8–22 are the most carefully engineered paragraph of persuasion in the New Testament. Paul has one request and fifteen verses to make it, and he wastes nothing: every clause either lowers Philemon's defenses, raises the stakes, removes an obstacle, or transfers a cost. Ancient rhetoricians taught that persuasion runs on ethos (character), pathos (emotion), and logos (argument); Paul deploys all three — and then goes beyond rhetoric into something rhetoric cannot do: he puts his own money and his own name into the gap.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                  Open each verse cluster below for a close reading.
                </p>
                {accordion(APPEAL_ITEMS, openAppeal, setOpenAppeal)}
                <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 24, marginTop: 12 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 10 }}>The Shape of the Whole Appeal</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                    Step back and the architecture appears: Paul <strong style={{ color: TEXT }}>lays down power</strong> (vv.8–9), <strong style={{ color: TEXT }}>reframes the person</strong> (vv.10–11), <strong style={{ color: TEXT }}>protects freedom</strong> (vv.12–14), <strong style={{ color: TEXT }}>reinterprets the past</strong> (vv.15–16), <strong style={{ color: TEXT }}>transfers his standing</strong> (v.17), <strong style={{ color: TEXT }}>absorbs the debt</strong> (vv.18–19), <strong style={{ color: TEXT }}>raises the vision</strong> (vv.20–21), and <strong style={{ color: TEXT }}>stays accountable</strong> (v.22). That is not just how to write a letter; it is how to mediate any reconciliation — and, the church has always insisted, it is a portrait of how Christ mediates ours.
                  </p>
                </div>
              </div>
            )}

            {/* ------------------------------------------------ SLAVERY */}
            {tab === "slavery" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Slavery & Scripture</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }}>
                  This is the tab where Philemon stops being a charming story and becomes a hard conversation. Paul sends a slave back to a master and never says the word “abolition.” For centuries, slaveholders quoted this letter; for centuries, abolitionists answered them from the same page. A Christian website owes its readers honesty here — about what Roman slavery was, what Paul did and didn't do, how the letter's logic ultimately destroyed the institution, and how that logic was resisted, misused, and finally vindicated.
                </p>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                  Open each section. They build on one another.
                </p>
                {accordion(SLAVERY_ITEMS, openSlavery, setOpenSlavery)}
                <div style={{ background: CARD, border: `1px solid ${ACCENT}40`, borderRadius: 12, padding: 24, marginTop: 12 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 10 }}>The Takeaway</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                    Philemon does not give us a Paul who endorsed slavery, nor a Paul who led a march against it. It gives us something stranger and, in the long run, more corrosive to every system of domination: a gospel that walks into an unjust structure and renames the people inside it — son, brother, partner, my very heart — until the structure's categories die of contradiction. The letter's question for modern readers is not only “what about slavery then?” but “which of our own categories — the people we write off, rank, and use — would not survive being renamed by verse 16?”
                  </p>
                </div>
              </div>
            )}

            {/* ------------------------------------------------ GOSPEL */}
            {tab === "gospel" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>The Gospel in Miniature</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                  The church has always read Philemon as a living parable of salvation — not because Paul wrote it as an allegory, but because a man saturated in the gospel instinctively re-enacted it. Three roles, one drama.
                </p>
                <div style={{ display: "grid", gap: 16, marginBottom: 32 }}>
                  {GOSPEL_PARALLELS.map(p => (
                    <div key={p.figure} style={{ background: CARD, border: `1px solid ${p.color}40`, borderLeft: `4px solid ${p.color}`, borderRadius: 12, padding: 22 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                        <h3 style={{ fontWeight: 700, color: p.color, margin: 0, fontSize: 16 }}>{p.figure}</h3>
                        <span style={{ color: MUTED, fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{p.role}</span>
                      </div>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: 15 }}>{p.body}</p>
                    </div>
                  ))}
                </div>

                <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #0d1a13 100%)`, border: `1px solid ${ACCENT}55`, borderRadius: 12, padding: 28, marginBottom: 32, textAlign: "center" }}>
                  <p style={{ fontSize: "1.25rem", lineHeight: 1.7, fontStyle: "italic", margin: "0 0 12px", color: TEXT }}>
                    “We are all his Onesimi, if we believe.”
                  </p>
                  <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>
                    — Martin Luther, preface to Philemon (1546). “For what Christ has done for us with God the Father, that St. Paul does also for Onesimus with Philemon… we are all his Onesimi.”
                  </p>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 16 }}>How vv. 17–18 Mirror Justification</h3>
                <div style={{ display: "grid", gap: 16 }}>
                  {GOSPEL_MECHANICS.map(m => (
                    <div key={m.title} style={{ background: CARD, border: `1px solid ${m.color}40`, borderLeft: `4px solid ${m.color}`, borderRadius: 12, padding: 22 }}>
                      <h4 style={{ fontWeight: 700, color: m.color, marginBottom: 10, fontSize: 15 }}>{m.title}</h4>
                      <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: 15 }}>{m.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ------------------------------------------------ RECONCILIATION */}
            {tab === "reconciliation" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Reconciliation in Practice</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                  Philemon is the New Testament's case study in repairing a broken relationship — written not as theory but as an actual intervention in an actual fracture, with money, history, and danger involved. Six principles emerge, followed by practical steps, and an honest section on when reconciliation requires more than a letter.
                </p>
                {accordion(RECON_PRINCIPLES, openRecon, setOpenRecon)}

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "32px 0 16px" }}>Practical Steps for Your Own Fracture</h3>
                <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
                  {RECON_STEPS.map(s => (
                    <div key={s.step} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <span style={{ background: ACCENT, color: "#fff", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{s.step}</span>
                      <div>
                        <div style={{ fontWeight: 700, marginBottom: 4 }}>{s.title}</div>
                        <div style={{ color: MUTED, lineHeight: 1.65, fontSize: 15 }}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${GOLD}40`, borderRadius: 12, padding: 24 }}>
                  <h3 style={{ color: GOLD, fontWeight: 700, marginBottom: 10 }}>A Word to the One Still Waiting</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                    Maybe you have written your letter — confessed, appealed, absorbed what you could — and the answer hasn't come. Scripture never records Philemon's reply either; the letter ends with a request and a hope. You are in good company. Do your side fully (Rom 12:18), keep the door unlocked, release the debt before God even if it is never acknowledged before people, and remember verse 15: separations God superintends can run “for a little while” on their way to “forever.” Some reconciliations take a second letter. Some take twenty years. Some wait for the resurrection. None of your obedience in the meantime is wasted.
                  </p>
                </div>
              </div>
            )}

            {/* ------------------------------------------------ THEMES */}
            {tab === "themes" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Major Themes</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                  For a letter you can read in two minutes, Philemon carries an outsized theological payload. Five themes that run through its 25 verses — and through the whole New Testament.
                </p>
                {accordion(THEME_ITEMS, openTheme, setOpenTheme)}
                <div style={{ background: CARD, border: `1px solid ${PURPLE}40`, borderRadius: 12, padding: 24, marginTop: 12 }}>
                  <h3 style={{ color: PURPLE, fontWeight: 700, marginBottom: 10 }}>One Sentence to Carry</h3>
                  <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
                    If you keep one line from this letter, keep the hinge of v.17–18 and hear it twice: once as Onesimus, spoken over you — <em style={{ color: TEXT }}>“welcome him as you would welcome me; charge it to me”</em> — and once as Philemon, asked of you, about the person you least want to welcome. The letter is only fully read when both hearings have happened.
                  </p>
                </div>
              </div>
            )}

            {/* ------------------------------------------------ JOURNAL */}
            {tab === "journal" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Philemon Journal</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                  Philemon is a letter that demands a reply — and since we never get Philemon's, the tradition of reading it has always been that the reader supplies one. Use these prompts, or write freely. Entries are saved privately on your device.
                </p>

                <div style={{ background: CARD, border: `1px solid ${ACCENT}40`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
                  <h3 style={{ color: ACCENT, fontWeight: 700, marginBottom: 14, fontSize: 15 }}>Reflection Prompts</h3>
                  {PROMPTS.map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, marginBottom: i === PROMPTS.length - 1 ? 0 : 12 }}>
                      <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                      <span style={{ color: MUTED, lineHeight: 1.7, fontSize: 15 }}>{p}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 16 }}>New Entry</h3>
                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>Verse or passage (e.g., Philemon 16)</label>
                    <input value={verse} onChange={e => setVerse(e.target.value)} placeholder="Philemon 17–18" style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>Reflection</label>
                    <textarea value={reflection} onChange={e => setReflection(e.target.value)} placeholder="Who is your Onesimus? What debt are you still holding?"
                      style={{ ...inputStyle, minHeight: 120, resize: "vertical", lineHeight: 1.6 }} />
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>Prayer</label>
                    <textarea value={prayer} onChange={e => setPrayer(e.target.value)} placeholder="Father, I come as your Onesimus…"
                      style={{ ...inputStyle, minHeight: 90, resize: "vertical", lineHeight: 1.6 }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <button onClick={saveEntry}
                      style={{ background: ACCENT, color: "#fff", border: "none", borderRadius: 8, padding: "12px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                      Save Entry
                    </button>
                    {saved && <span style={{ color: ACCENT, fontWeight: 600, fontSize: 14 }}>Saved ✓</span>}
                  </div>
                </div>

                {entries.length > 0 && (
                  <div>
                    <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: 16 }}>Past Entries ({entries.length})</h3>
                    <div style={{ display: "grid", gap: 14 }}>
                      {entries.map(e => (
                        <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, gap: 12 }}>
                            <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                              <span style={{ color: GOLD, fontWeight: 700, fontSize: 14 }}>{e.verse || "Untitled"}</span>
                              <span style={{ color: MUTED, fontSize: 12 }}>{e.date}</span>
                            </div>
                            <button onClick={() => deleteEntry(e.id)}
                              style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "4px 10px", fontSize: 12, cursor: "pointer", flexShrink: 0 }}>
                              Delete
                            </button>
                          </div>
                          {e.reflection && <p style={{ color: TEXT, lineHeight: 1.7, margin: "0 0 8px", fontSize: 15, whiteSpace: "pre-wrap" }}>{e.reflection}</p>}
                          {e.prayer && <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: 14, fontStyle: "italic", whiteSpace: "pre-wrap" }}>{e.prayer}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {entries.length === 0 && (
                  <p style={{ color: MUTED, fontSize: 14, textAlign: "center" }}>No entries yet. Your reflections will appear here, stored only on this device.</p>
                )}
              </div>
            )}

            {/* ------------------------------------------------ VIDEOS */}
            {tab === "videos" && (
              <div>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Video Teaching</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 24 }}>
                  Start with the BibleProject's animated overview of Philemon, then explore Colossians — the companion letter written at the same time and carried by the same hands (Col 4:7–9), whose call to “forgive as the Lord forgave you” (Col 3:13) Philemon puts into practice.
                </p>
                <div style={{ display: "grid", gap: 24 }}>
                  {VIDEOS.map(v => (
                    <div key={v.videoId + v.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                      <VideoEmbed videoId={v.videoId} title={v.title} />
                      <div style={{ padding: "14px 18px" }}>
                        <p style={{ color: TEXT, fontWeight: 600, fontSize: 15, margin: 0 }}>{v.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
