"use client";
import { useState } from "react";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#00FF88";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type Tab = "theology" | "armor" | "tactics" | "victory";

const THEOLOGY_ITEMS = [
  {
    id: "reality",
    title: "The Reality of the Spiritual Realm",
    content: `This is not superstition — it is the Biblical cosmology. Paul's letter to the Ephesians assumes a tiered spiritual universe: "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms" (Eph 6:12). Colossians 1:16 tells us that Christ created "thrones or powers or rulers or authorities" — these are real categories with weight and reality. Daniel 10:13 reveals an angelic messenger delayed twenty-one days by "the prince of the Persian kingdom" — spiritual powers operating behind geopolitical realities.\n\nScholar Walter Wink identified three positions Christians have occupied toward this cosmology. The worldview of the first century took spiritual beings literally and personally — every nation had its angel, every river its spirit, every institution its inner essence. The worldview of materialism, dominant since the Enlightenment, dismisses all such language as pre-scientific mythology — superstition to be explained away. Wink proposed a third way: taking the language of "powers and principalities" seriously without literalistic naivety — understanding them as both spiritual realities AND the inner spiritual dimension of human institutions. This third way does justice to the text without abandoning intellectual honesty.`,
    references: ["Eph 6:12", "Col 1:16", "Dan 10:13"],
  },
  {
    id: "satan",
    title: "Satan's Identity and Limitations",
    content: `The Hebrew "ha-satan" means "the adversary" or "the accuser" — a prosecutorial role. In Job 1–2, this figure appears in the divine council, and critically, he can do nothing to Job without God's explicit permission. "Very well," God says, "he is in your hands" — with limits. Satan is not the equal opposite of God; he operates within a leash. This is not a dualistic universe.\n\nThe popular interpretations of Isaiah 14 ("How you have fallen from heaven, morning star, son of the dawn!") and Ezekiel 28 ("You were the model of perfection, full of wisdom and perfect in beauty") are often read as accounts of Satan's primordial fall from heaven — a once-glorious being brought low by pride. Scholars debate whether these texts refer to a cosmic being or to human kings using hyperbolic language; the tradition of reading them as Satan's biography is ancient and influential even if exegetically contested.\n\nThe New Testament holds two images in tension: the defeated enemy (Christ has disarmed the powers — Col 2:15) and the dangerous lion ("Your enemy the devil prowls around like a roaring lion looking for someone to devour" — 1 Pet 5:8). Both are true. The lion is real and dangerous; the lion is also on a chain and already dealt a mortal blow.`,
    references: ["Job 1–2", "Isa 14", "Ezek 28", "1 Pet 5:8"],
  },
  {
    id: "victory",
    title: "The Already–Not-Yet Victory",
    content: `Colossians 2:15 uses the image of a Roman triumphal procession: "And having disarmed the powers and authorities, he made a public spectacle of them, triumphing over them by the cross." The cross was not the moment of defeat — it was the decisive victory. Christ did not barely survive; he conquered.\n\nThe challenge is that we still fight. If the victory is won, why is there still a battle? Theologians use the analogy of D-Day and V-Day in World War II. The decisive battle — the Normandy invasion — determined the outcome of the war. After D-Day, everyone knew Germany would fall. But months of brutal fighting remained before V-Day. Soldiers did not fight less hard after D-Day because the outcome was certain — they fought knowing the outcome was certain. The cross is our D-Day. The return of Christ is V-Day. We fight in the interim, not to win but because it is already won.\n\nThis changes the posture of spiritual warfare entirely. We do not fight desperately hoping God might pull through. We fight from a position of established victory, enforcing what has already been accomplished.`,
    references: ["Col 2:15"],
  },
  {
    id: "structural",
    title: "Structural vs. Personal Evil",
    content: `Walter Wink's landmark trilogy on "the powers" (Naming the Powers, Unmasking the Powers, Engaging the Powers) argued that Paul's language of "principalities and powers" cannot be reduced to individual demonic beings or to mere social structures — it must be held as both simultaneously.\n\nEvery human institution — governments, corporations, ideologies, economic systems, even religious organizations — has an inner spiritual dimension, an "angel" that is its corporate spirituality. These powers were created good (Col 1:16), have fallen into complicity with evil, and are in need of redemption. This produces a more complex demonology: spiritual warfare is not just about personal demons tormenting individuals; it includes the corporate spiritual forces that animate unjust systems, oppressive institutions, and ideologies that dehumanize.\n\nPractically, this means the Christian warrior must engage both the personal and the structural — praying against spiritual forces while also working for justice in the visible world. Spiritual warfare and social action are not alternatives; they are two sides of the same battle.`,
    references: ["Col 1:16", "Eph 6:12"],
  },
  {
    id: "mentalhealth",
    title: "Spiritual Warfare and Mental Health",
    content: `Two pastoral errors create enormous damage. The first is attributing everything to demonic activity — explaining depression as oppression, anxiety as attack, OCD intrusive thoughts as demonic voices. This approach bypasses legitimate medical and psychological care, creates shame around mental illness, and can leave people feeling that their suffering is a spiritual failure. The harm done by misapplied deliverance ministry to people with undiagnosed mental illness is real and documented.\n\nThe second error is attributing nothing to the spiritual realm — reducing all human suffering to brain chemistry, trauma, or social conditioning. This is the materialist default and it misses what Scripture clearly presents: that there are spiritual dimensions to human suffering, that some afflictions are spiritually rooted or spiritually aggravated, and that prayer, Scripture, and spiritual community are themselves healing forces.\n\nA pastoral discernment approach holds these in tension. Seek medical care and spiritual care. Don't use demonic explanation as a shortcut away from therapy or medication. Don't use psychological explanation as a reason to dismiss prayer and spiritual formation. A wise spiritual director asks: What are you experiencing? What have you tried? Who is walking with you? — before reaching for any single-category explanation.`,
    references: ["Luke 13:10–17", "Mark 9:14–29"],
  },
  {
    id: "position",
    title: "The Christian's Position",
    content: `Ephesians 2:6 is one of the most arresting statements in the New Testament: God "raised us up with Christ and seated us with him in the heavenly realms in Christ Jesus." Past tense. Already done. Before you pray, before you perform, before you feel spiritually adequate — you are already seated in the heavenly places.\n\nThis changes the grammar of spiritual warfare. Authority in the spiritual realm does not come from spiritual attainment, emotional intensity, loud prayer, or moral superiority. It comes from position — who you are in Christ, where you are seated. A newly commissioned officer has authority not because of personal strength but because of their position in the hierarchy. The youngest believer has the same positional authority as the most seasoned saint, because both are equally "in Christ."\n\nThe practical implication is that spiritual warfare is not about generating enough spiritual power to overcome the enemy — it is about standing in the authority that is already yours by virtue of union with Christ. "Stand firm" (Eph 6:13–14) is the operative command — not "generate," not "achieve," not "earn."`,
    references: ["Eph 2:6", "Eph 6:13–14"],
  },
];

const ARMOR_PIECES = [
  {
    id: "belt",
    name: "Belt of Truth",
    verse: "Eph 6:14a",
    meaning: `In Roman military dress, the belt (cingulum) was the first piece donned — everything else fastened to it. Without the belt, nothing held together. Truth plays the same structural role in spiritual warfare: it is not one weapon among many but the foundation everything else requires. The "father of lies" (John 8:44) works by distorting reality — about who God is, who you are, what is happening. When truth is the girding foundation, his primary weapon is neutralized.\n\nThis is truth in several senses: doctrinal truth (what is actually true about God, creation, salvation), relational truth (honesty and integrity in your dealings with others), and inner truth (self-knowledge, refusing self-deception). All three are aspects of the belt.`,
    application: `Daily: Begin by naming what is actually true — about God's character, your identity in Christ, what is real versus what fear or accusation is projecting. Journal the lies you've been believing. For each, find a specific counter-truth in Scripture. Practice radical honesty in your relationships — secrecy and deception are cracks in the belt.`,
    protects: "Against deception, self-deception, and the distortion of reality that enables all other attacks",
  },
  {
    id: "breastplate",
    name: "Breastplate of Righteousness",
    verse: "Eph 6:14b",
    meaning: `The breastplate covered the vital organs — heart and lungs. In the ancient world the heart was the seat of emotion, will, and moral life. The righteousness that covers you is twofold: the imputed righteousness of Christ (justification — you are declared righteous by God because of Christ's record credited to you) and practical righteousness (your actual conduct, your walk). The first is the theological foundation; the second is the lived expression.\n\nA guilt-soaked believer who has not received justification by faith is fighting with a missing breastplate. Every accusation goes straight to the heart. But imputed righteousness without practical righteousness creates a different vulnerability — the one who claims Christ's righteousness while living in unconfessed sin finds that hypocrisy itself becomes an opening.`,
    application: `When accused: Distinguish between Holy Spirit conviction (specific, leads to repentance and restoration) and satanic condemnation (vague, crushing, leads to despair). For conviction — confess, receive forgiveness, move forward. For condemnation — stand on 2 Corinthians 5:21: "God made him who had no sin to be sin for us, so that in him we might become the righteousness of God." Walk in integrity — not to earn favor but because integrity is protection.`,
    protects: "Against guilt, condemnation, accusation, and the spiritual vulnerability created by unconfessed sin",
  },
  {
    id: "feet",
    name: "Gospel of Peace (Feet)",
    verse: "Eph 6:15",
    meaning: `Roman soldiers wore caliga — hobnailed sandals that gripped the ground and allowed them to stand and advance without slipping. Stability was military. Paul says your feet are shod with "the readiness that comes from the gospel of peace." Two ideas are present: readiness to advance (proclaiming the gospel) and the stability to stand your ground (peace as the ground beneath your feet).\n\nPeace here is not the absence of conflict — it is the settled security that comes from reconciliation with God. The believer who is at peace with God (Rom 5:1) has a foundation that circumstances cannot undermine. You cannot be knocked off your feet if your footing is the peace of God.`,
    application: `Practice standing in uncertainty without losing your footing. When anxiety rises, the prescription of Philippians 4:6–7 is specific: "in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God... will guard your hearts." Peace is actively received in prayer, not passively experienced when things go well. Be ready to speak the gospel — advance, don't merely dig in.`,
    protects: "Against anxiety, instability, and the loss of footing that makes every attack more dangerous",
  },
  {
    id: "shield",
    name: "Shield of Faith",
    verse: "Eph 6:16",
    meaning: `The Roman scutum was a large, curved rectangular shield — not a small buckler but a full body cover. Roman soldiers in formation could interlock their shields, creating a tortoise formation (testudo) that made the unit nearly impenetrable. Paul says this shield quenches "all the flaming arrows of the evil one." Fiery arrows were a real ancient weapon: arrows dipped in pitch, lit, and fired to start fires behind lines, cause panic, and break formation.\n\nFaith here is not the feeling of certainty — it is active trust in God's character and promises in the face of specific attacks. The flaming arrows Paul has in mind include doubt ("Does God really love you?"), accusation ("You're not really saved"), fear ("Something terrible is going to happen"), and despair ("This will never change").`,
    application: `When an arrow hits: name it. "This is the arrow of accusation. This is the arrow of fear." Then lift the shield by speaking aloud what you believe about God in response to this specific arrow. Don't fight feelings with willpower — fight them with declared truth. Engage your community (interlocked shields) — this is why Hebrews 10:25 says not to give up meeting together.`,
    protects: "Against doubt, fear, accusation, discouragement, and panic under sustained attack",
  },
  {
    id: "helmet",
    name: "Helmet of Salvation",
    verse: "Eph 6:17a",
    meaning: `The helmet protects the head — the mind, the command center of the soldier. The "helmet of salvation" (cf. "helmet of the hope of salvation" in 1 Thess 5:8) protects your thinking from attacks on your identity and security in Christ. The assurance of your salvation — that you are genuinely God's child, that nothing can separate you from his love (Rom 8:38–39), that you are sealed by the Holy Spirit (Eph 1:13) — is armor for the mind.\n\nMany spiritual attacks are fundamentally identity attacks: "You're not really saved," "God doesn't actually want you," "You're disqualified," "You've gone too far." Without a helmet, these thoughts do direct damage. With the helmet secured — with settled assurance of your standing before God — the attacks may land but they cannot penetrate.`,
    application: `When identity attacks come: don't try to argue from your performance ("but I've been praying more"). Argue from your position ("I am sealed by the Holy Spirit — Eph 1:13. I am an adopted child of God — Rom 8:15. Nothing separates me from God's love — Rom 8:38–39"). Settle the question of your salvation once and receive the assurance Scripture offers — not arrogance, but the confident trust God desires you to have.`,
    protects: "Against identity attacks, assurance attacks, and lies about your standing before God",
  },
  {
    id: "sword",
    name: "Sword of the Spirit",
    verse: "Eph 6:17b",
    meaning: `The sword of the Spirit is "the word of God" — and uniquely in the armor list, it is the only explicitly offensive weapon. Every other piece is defensive: belt, breastplate, shoes, shield, helmet — all protect. The sword cuts. It advances. It is machaira in Greek — a short, close-combat sword requiring skill and proximity, not a long-range weapon.\n\nPaul uses rhema here (spoken word) rather than logos. This is potentially significant: not just the written text of Scripture in the abstract, but Scripture spoken, declared, applied to the specific moment of attack. Jesus's response to Satan in the wilderness (Matt 4:4–10) is the model: three specific temptations met with three specific "It is written..." citations. Not general piety — targeted Scripture. Some argue the logos/rhema distinction is overdrawn; what is undeniable is that Jesus spoke Scripture directly at specific attacks.`,
    application: `Memorize Scripture by category of attack, not just devotionally. Build a warfare library in your mind: passages for accusation, for fear, for temptation, for identity attacks, for hopelessness. When the attack comes, speak the relevant verse aloud. This is not magic incantation — it is engaging your faith actively through your mouth, the same way Jesus engaged his. The wilderness temptations were won with a memorized Deuteronomy.`,
    protects: "Against all attacks — it is the offensive weapon that advances rather than merely stands",
  },
];

const TACTICS_ITEMS = [
  {
    id: "accusation",
    title: "Accusation and Condemnation",
    content: `Revelation 12:10 names Satan explicitly as "the accuser of our brothers and sisters, who accuses them before our God day and night." This is not metaphor — it is function. His primary occupation is accusation.\n\nThe critical pastoral distinction is between Holy Spirit conviction and satanic condemnation. Holy Spirit conviction is specific ("you lied to your friend on Tuesday"), leads to a specific action (confess, make it right), and produces a movement toward God and restoration. Satanic condemnation is vague and crushing ("you're worthless, you're a failure, you're not really a Christian"), produces despair and withdrawal from God, and has no resolution — no matter how much you confess, the weight doesn't lift.\n\nThe response to accusation is not to argue your innocence or your spiritual performance — it is to point to Christ. "Christ Jesus who died — more than that, who was raised to life — is at the right hand of God and is also interceding for us" (Rom 8:34). Against the Accuser, the High Priest intercedes. The believer's standing is not their own record.`,
    references: ["Rev 12:10", "Rom 8:33–34", "Zech 3:1–5"],
  },
  {
    id: "deception",
    title: "Deception and Lies",
    content: `Jesus called Satan "a liar and the father of lies" (John 8:44) — not merely a liar but the originator of the lie, the one in whom lying is native. The serpent's first recorded words in Genesis are a distortion: "Did God really say...?" — not an outright falsehood but a subtle misquotation that introduces doubt.\n\nThis is the pattern: outright falsehood is less effective than subtle distortion. The most dangerous lies contain enough truth to be plausible. A false gospel (Gal 1:8) is dangerous precisely because it resembles the true gospel — grace plus something, Jesus plus something. The satanic distortion of "God is love" into "God would never judge anyone" is more damaging to faith than outright atheism, because it is harder to recognize and resist.\n\nThe antidote is not suspicion of everything but deep rootedness in Scripture — knowing the original so well that the counterfeit is obvious. This is why Bible literacy is a warfare discipline, not just an academic one.`,
    references: ["John 8:44", "Gal 1:8", "Gen 3:1"],
  },
  {
    id: "temptation",
    title: "Temptation",
    content: `James 1:14–15 locates the root of temptation not primarily in external demonic attack but in internal desire: "each person is tempted when they are dragged away by their own evil desire and enticed." The enemy does not create the desire — he finds it, amplifies it, and presents an opportunity. Our own fallen natures are complicit in temptation, which is why Paul addresses both the external spiritual battle and the internal battle against the flesh.\n\n1 Corinthians 10:13 provides the two great promises about temptation: God will not allow it beyond your ability to endure, and he always provides a way of escape. This is not license for passivity — the way of escape must be taken — but it is the absolute guarantee that temptation is never irresistible.\n\n1 John 2:16 organizes the categories of temptation: "the lust of the flesh, the lust of the eyes, and the pride of life." Augustine saw these mapped onto Genesis 3 (the fruit was good for food / a delight to the eyes / to be desired for wisdom) and onto Jesus's wilderness temptations (stones to bread / all the kingdoms / throw yourself down). The patterns of temptation are consistent across human history — which means the Scriptural responses are equally consistent.`,
    references: ["James 1:14–15", "1 Cor 10:13", "1 John 2:16"],
  },
  {
    id: "division",
    title: "Division and Offense",
    content: `Ephesians 4:26–27 is one of the most tactically important verses in the New Testament: "In your anger do not sin. Do not let the sun go down while you are still angry, and do not give the devil a foothold." Unresolved anger, bitterness, and offense are described as literally giving the enemy an entry point — a foothold (topos, "place") — in your life and in your community.\n\nConflict is not just relationally painful; it is spiritually strategic. The enemy uses interpersonal offense to divide communities that are stronger together, to consume energy in internal conflict rather than external mission, and to cultivate bitterness that hardens and isolates. The prolonged feud between two Christians is not just a shame — it is an open door.\n\nThe spiritual warfare discipline here is radical and countercultural: "Do not let the sun go down while you are still angry." Before sleep — reconcile, at least in your own heart. Go to the brother or sister. Don't nurse the wound. The speed of forgiveness and reconciliation is a warfare strategy.`,
    references: ["Eph 4:26–27", "Matt 5:23–24"],
  },
  {
    id: "discouragement",
    title: "Spiritual Discouragement",
    content: `The desert fathers had a name for a specific spiritual affliction they knew well: acedia — often translated "sloth" but meaning something more like spiritual apathy, the noonday demon, a deadening of the soul's responsiveness to God. It is not grief or depression but a specific dullness, a sense that prayer is pointless, that God is distant, that nothing in the spiritual life matters or will ever change.\n\nElijah's story in 1 Kings 19 is a clinical portrait of burnout after spiritual battle. Fresh from the greatest victory of his ministry (the fire from heaven on Carmel), Elijah collapses under a broom tree and asks to die: "I have had enough, Lord." God's response is not a lecture or a rebuke — it is food, sleep, and the gentleness of an angel who says "Get up and eat, because the journey is too much for you." The practical care precedes the spiritual restoration.\n\nThe attack of hopelessness — "nothing will change," "your prayers don't work," "God is not there" — is one of the enemy's most effective long-term strategies because it paralyzes without leaving marks. The antidote includes community (Elijah thought he was alone; he was not), physical care, honest lament (the Psalms are full of this), and the long view of what God has done and promised.`,
    references: ["1 Kings 19", "Ps 42–43", "Heb 12:1–3"],
  },
  {
    id: "pride",
    title: "Pride and Self-Sufficiency",
    content: `1 Timothy 3:6 warns that a new convert should not be made a church elder lest he "become conceited and fall under the same judgment as the devil." The pattern: spiritual success → elevation → conceit → fall. This is the anatomy of the enemy's own story (as traditionally read from Isaiah 14 and Ezekiel 28) — and it is the trap laid for every believer who makes spiritual progress.\n\nSelf-sufficiency is particularly dangerous precisely because it looks like maturity. The person who no longer needs prayer support, who has graduated beyond community accountability, who finds others' spiritual struggles somewhat beneath them — this is not growth, it is a posture that has removed the protections God designed. Peter's confidence ("Even if all fall away, I will not") immediately preceded his denial.\n\nThe antidote is the ongoing practice of dependence: continuing to confess to one another (James 5:16), continuing to receive prayer, maintaining the posture of "apart from me you can do nothing" (John 15:5) regardless of spiritual experience. The great saints of Christian history were, without exception, profoundly aware of their own weakness. That awareness was not false humility — it was accuracy.`,
    references: ["1 Tim 3:6", "Prov 16:18", "John 15:5"],
  },
];

const VICTORY_ITEMS = [
  {
    id: "prayer",
    title: "Prayer as Warfare",
    content: `Daniel 10 pulls back the curtain: Daniel prayed for three weeks and received no answer. An angel finally arrived and explained that he had been opposed by "the prince of the Persian kingdom" — a spiritual power — for twenty-one days, until Michael came to help. Daniel's prayer was directly connected to a spiritual battle he was entirely unaware of. The battle was real whether Daniel felt it or not; his prayer was the instrument through which the heavenly engagement was occurring.\n\nThis changes the theology of prayer from mere petition (asking for things) to participation in spiritual reality. Rees Howells, the Welsh intercessor documented in Norman Grubb's biography, understood prayer as taking a position of intercession — standing between, absorbing the assault, holding the ground in prayer until the breakthrough came. This is warfare, not wishing.\n\nPraying with authority means not merely asking God to act as though he might not have noticed the situation — but declaring what is true, what Christ has accomplished, what the enemy's defeat means for this specific situation. It is enforcement of a verdict already rendered, not a campaign to win a verdict still uncertain.`,
    references: ["Dan 10", "Luke 18:1–8", "Eph 6:18"],
  },
  {
    id: "memorization",
    title: "Scripture Memorization",
    content: `The sword of the Spirit is the word of God — and a sword you don't have in hand when the attack comes is useless. Jesus's model in the wilderness was not that he opened a scroll — he had the words of Deuteronomy available in his mind, accessible under the most extreme pressure imaginable, after forty days without food, facing the direct assault of the enemy.\n\nScripture memorization as a warfare discipline means organizing memory by attack category rather than just by devotional preference. The warrior needs: verses for when accused (Rom 8:1, 8:33–34), for when fearful (Isa 41:10, Ps 27:1), for when tempted (1 Cor 10:13, James 4:7), for when identity is attacked (Eph 1:4–5, 2:6, Rom 8:15–17), for when despairing (Lam 3:22–23, Ps 42:11).\n\nPractical strategies: Write three verses per week on index cards and review them daily. Attach specific verses to specific recurring attacks — when that thought comes, that verse is the response. Memorize with your mouth — speak it aloud, not just read it with your eyes. The spoken word is the weapon; training your mouth matters.`,
    references: ["Matt 4:4–10", "Ps 119:11", "Col 3:16"],
  },
  {
    id: "community",
    title: "Community Covering",
    content: `"Where two or three gather in my name, there am I with them" (Matt 18:20) is spoken in the context of community discipline and prayer — the gathered community has a corporate spiritual presence that the isolated individual does not. The full armor of God in Ephesians 6 is addressed in the second-person plural ("you all") — the warfare posture was designed for community, not for the lone ranger.\n\nIsolation is itself a tactic. The enemy picks off the separated sheep, the one who has drifted from community, the one who believes their struggles are too embarrassing to share. The secrecy that protects shame also removes covering. This is why James 5:16 connects confession to healing: "Confess your sins to each other and pray for each other so that you may be healed." The exposure of sin to a trusted community removes one of the enemy's most effective hiding places.\n\nAccountability in this framework is not merely behavior modification — it is spiritual warfare strategy. To have a brother or sister who knows your specific struggles, prays for you specifically, checks in regularly, and stands with you — this is the interlocked-shield formation that makes the testudo possible.`,
    references: ["Matt 18:19–20", "James 5:16", "Eccl 4:9–12"],
  },
  {
    id: "worship",
    title: "Worship as Warfare",
    content: `2 Chronicles 20:21–22 is one of the strangest battle plans in Scripture. Jehoshaphat's Judah faced a vast coalition army. God's instruction, received through a prophet: "Do not be afraid or discouraged because of this vast army. For the battle is not yours, but God's." The battle plan: appoint men to sing to the Lord at the front of the army. As they began to sing and praise, "the Lord set ambushes against the men of Ammon and Moab and Mount Seir who were invading Judah, and they were defeated." The singers went first. The enemy was routed before the army arrived.\n\nPaul and Silas in Acts 16 were beaten, imprisoned, and fastened in stocks — and at midnight they "were praying and singing hymns to God." An earthquake. Doors open. Chains loosed. The worship preceded the miracle.\n\nWorship as warfare is not manipulation — it is declaration. To praise God in the midst of suffering is to declare that God is who he says he is regardless of what circumstances say. That declaration has spiritual weight. It refuses the lie that circumstances dictate reality. It aligns the worshipper with the truth that the enemy most wants to suppress.`,
    references: ["2 Chron 20:21–22", "Acts 16:25–26", "Ps 22:3"],
  },
  {
    id: "truth",
    title: "Living in Truth",
    content: `Ephesians 4:15 calls the church to "speaking the truth in love" as the mechanism of growth — truth is not optional for the maturing body but the very substance of growth. Sin, secrecy, and self-deception create vulnerabilities — "gaps" in the armor — that the enemy exploits. This is not moralism; it is maintenance.\n\nConfession is armor maintenance. The theological sequence in 1 John 1:8–9 is important: "If we claim to be without sin, we deceive ourselves and the truth is not in us." Self-deception is itself a spiritual danger — it removes the ability to confess what you don't admit you've done. But: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." Confession is not just psychological unburdening; it is the practical act of keeping the armor intact.\n\nIntegrity — wholeness, the alignment of inner reality with outer presentation — is itself a form of protection. The double-minded person (James 1:8) is unstable in all his ways. The person whose inside matches their outside has removed a profound vulnerability.`,
    references: ["Eph 4:15", "1 John 1:8–9", "James 1:8"],
  },
  {
    id: "endurance",
    title: "Perspective and Endurance",
    content: `2 Corinthians 4:17 — written by a man who had been beaten, shipwrecked, imprisoned, stoned, and left for dead — calls his suffering "momentary and light." The comparison is not to the suffering of others but to "an eternal glory that far outweighs them all." Paul is not minimizing; he is calibrating. The scale matters. Seen from eternity, even significant suffering is brief.\n\nJames 1:2–4 instructs believers to "consider it pure joy, my brothers and sisters, whenever you face trials of many kinds" — not because the trials are pleasant but because "the testing of your faith produces perseverance" and perseverance "must finish its work so that you may be mature and complete, not lacking anything." The trial is a process toward an end, and the end is worth it.\n\nThe long view is itself a warfare posture. The enemy wants you focused on the immediate pain, the immediate loss, the immediate hopelessness. The Biblical antidote is eschatological vision — the ability to see this moment in the context of a larger story that God is writing and that ends well. Hebrews 11–12 situates the believer within a "great cloud of witnesses" — surrounded by the faithful who endured — and calls us to "run with perseverance the race marked out for us."`,
    references: ["2 Cor 4:17", "James 1:2–4", "Heb 12:1–3"],
  },
];

function AccordionItem({
  id,
  title,
  content,
  references,
  expanded,
  onToggle,
}: {
  id: string;
  title: string;
  content: string;
  references?: string[];
  expanded: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      style={{
        background: CARD,
        borderRadius: 14,
        border: `1px solid ${expanded ? "rgba(0,255,136,0.28)" : BORDER}`,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={() => onToggle(id)}
        style={{
          width: "100%",
          padding: "18px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: expanded ? GREEN : TEXT,
            lineHeight: 1.3,
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: expanded ? GREEN : MUTED,
            fontSize: 22,
            lineHeight: 1,
            marginLeft: 16,
            flexShrink: 0,
          }}
        >
          {expanded ? "−" : "+"}
        </span>
      </button>
      {expanded && (
        <div style={{ padding: "0 22px 22px", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ paddingTop: 18 }}>
            {content.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 14,
                  color: "#C8C8E0",
                  lineHeight: 1.85,
                  marginBottom: i < content.split("\n\n").length - 1 ? 14 : 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>
          {references && references.length > 0 && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
              {references.map((ref) => (
                <span
                  key={ref}
                  style={{
                    fontSize: 12,
                    padding: "3px 10px",
                    borderRadius: 8,
                    background: "rgba(0,255,136,0.07)",
                    color: GREEN,
                    border: `1px solid rgba(0,255,136,0.2)`,
                    fontWeight: 600,
                  }}
                >
                  {ref}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SpiritualWarfarePage() {
  const [tab, setTab] = useState<Tab>("theology");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedArmor, setSelectedArmor] = useState<string>(ARMOR_PIECES[0].id);

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectedPiece = ARMOR_PIECES.find((p) => p.id === selectedArmor) ?? ARMOR_PIECES[0];

  const tabs: { key: Tab; label: string }[] = [
    { key: "theology", label: "Theology" },
    { key: "armor", label: "Armor of God" },
    { key: "tactics", label: "Enemy Tactics" },
    { key: "victory", label: "Walking in Victory" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: BG, color: TEXT, paddingTop: 40 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <h1
            style={{
              fontSize: 34,
              fontWeight: 900,
              letterSpacing: -0.5,
              marginBottom: 10,
              color: TEXT,
            }}
          >
            Spiritual Warfare
          </h1>
          <p style={{ color: MUTED, fontSize: 15, marginBottom: 22 }}>
            Stand firm in the full armor of God.
          </p>
          <div
            style={{
              display: "inline-block",
              background: "rgba(0,255,136,0.06)",
              border: `1px solid rgba(0,255,136,0.16)`,
              borderRadius: 12,
              padding: "12px 22px",
              maxWidth: 580,
            }}
          >
            <p
              style={{
                fontSize: 14,
                color: "#C8C8E0",
                fontStyle: "italic",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              "For our struggle is not against flesh and blood, but against the rulers, against the
              authorities, against the powers of this dark world."
            </p>
            <p style={{ fontSize: 13, color: GREEN, fontWeight: 700, marginTop: 6, marginBottom: 0 }}>
              — Ephesians 6:12
            </p>
          </div>
        </div>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            gap: 2,
            marginBottom: 36,
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 600,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: tab === key ? GREEN : MUTED,
                borderBottom: `2px solid ${tab === key ? GREEN : "transparent"}`,
                marginBottom: -1,
                transition: "color 0.15s",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab 1: Theology */}
        {tab === "theology" && (
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "16px 20px",
                marginBottom: 24,
              }}
            >
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                Spiritual warfare is grounded in a coherent Biblical cosmology — not superstition, not
                medieval fantasy, but the lived reality of a universe in which real spiritual powers
                operate within real limits under the sovereignty of God.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {THEOLOGY_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  references={item.references}
                  expanded={!!expanded[item.id]}
                  onToggle={toggleExpanded}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Armor of God */}
        {tab === "armor" && (
          <div>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "14px 20px",
                marginBottom: 28,
                maxWidth: 780,
                margin: "0 auto 28px",
              }}
            >
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                Ephesians 6:10–18. Paul wrote from prison, chained to a Roman soldier, and drew on
                what he observed. Select each piece to explore its theological meaning, daily
                application, and what it protects against.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "260px 1fr",
                gap: 24,
                alignItems: "start",
              }}
            >
              {/* Sticky left list */}
              <div style={{ position: "sticky", top: 24 }}>
                <div
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "12px 16px",
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: MUTED,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        margin: 0,
                      }}
                    >
                      Pieces of Armor
                    </p>
                  </div>
                  {ARMOR_PIECES.map((piece, idx) => (
                    <button
                      key={piece.id}
                      onClick={() => setSelectedArmor(piece.id)}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        background:
                          selectedArmor === piece.id
                            ? `rgba(0,255,136,0.07)`
                            : "none",
                        border: "none",
                        borderBottom:
                          idx < ARMOR_PIECES.length - 1
                            ? `1px solid ${BORDER}`
                            : "none",
                        cursor: "pointer",
                        borderLeft: `3px solid ${selectedArmor === piece.id ? GREEN : "transparent"}`,
                        textAlign: "left",
                        transition: "background 0.15s",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: selectedArmor === piece.id ? GREEN : TEXT,
                          lineHeight: 1.3,
                        }}
                      >
                        {piece.name}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: MUTED,
                          marginTop: 2,
                        }}
                      >
                        {piece.verse}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right detail panel */}
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "26px 28px",
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: TEXT,
                      marginBottom: 4,
                    }}
                  >
                    {selectedPiece.name}
                  </h2>
                  <span
                    style={{
                      fontSize: 12,
                      color: GREEN,
                      fontWeight: 700,
                    }}
                  >
                    {selectedPiece.verse}
                  </span>
                </div>

                <div style={{ marginBottom: 22 }}>
                  <h3
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: PURPLE,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 12,
                    }}
                  >
                    Theological Meaning
                  </h3>
                  {selectedPiece.meaning.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: 14,
                        color: "#C8C8E0",
                        lineHeight: 1.85,
                        marginBottom: 12,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div
                  style={{
                    background: "#0D0D1C",
                    border: `1px solid rgba(0,255,136,0.15)`,
                    borderLeft: `3px solid ${GREEN}`,
                    borderRadius: 10,
                    padding: "14px 16px",
                    marginBottom: 20,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: GREEN,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 10,
                    }}
                  >
                    Daily Application
                  </h3>
                  <p style={{ fontSize: 14, color: "#C8C8E0", lineHeight: 1.8, margin: 0 }}>
                    {selectedPiece.application}
                  </p>
                </div>

                <div
                  style={{
                    background: "#0D0D1C",
                    border: `1px solid rgba(107,79,187,0.2)`,
                    borderLeft: `3px solid ${PURPLE}`,
                    borderRadius: 10,
                    padding: "14px 16px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#A080FF",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      marginBottom: 8,
                    }}
                  >
                    What It Protects Against
                  </h3>
                  <p style={{ fontSize: 14, color: "#C8C8E0", lineHeight: 1.7, margin: 0 }}>
                    {selectedPiece.protects}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Enemy Tactics */}
        {tab === "tactics" && (
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "16px 20px",
                marginBottom: 24,
              }}
            >
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                "We are not unaware of his schemes" (2 Cor 2:11). Naming the enemy's tactics clearly is
                itself a defensive act — recognition is the first step to resistance.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {TACTICS_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  id={`tactics-${item.id}`}
                  title={item.title}
                  content={item.content}
                  references={item.references}
                  expanded={!!expanded[`tactics-${item.id}`]}
                  onToggle={toggleExpanded}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Walking in Victory */}
        {tab === "victory" && (
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "16px 20px",
                marginBottom: 24,
              }}
            >
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: 0 }}>
                Victory is not a destination reached once and maintained automatically. It is walked in
                — a sustained practice of disciplines that keep the armor on and the ground held.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {VICTORY_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  id={`victory-${item.id}`}
                  title={item.title}
                  content={item.content}
                  references={item.references}
                  expanded={!!expanded[`victory-${item.id}`]}
                  onToggle={toggleExpanded}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
