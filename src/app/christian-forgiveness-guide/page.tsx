"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const STORAGE_KEY = "vine_forgivenessguide_entries";

interface FRGEntry {
  id: string;
  date: string;
  person: string;
  offense: string;
  prayerForThem: string;
  released: boolean;
}

interface TheologySection {
  badge: string;
  title: string;
  paragraphs: string[];
  callout?: { label: string; text: string };
}

interface PracticeCard {
  number: string;
  title: string;
  summary: string;
  steps: string[];
  anchor: string;
}

interface VoiceCard {
  name: string;
  role: string;
  quote: string;
  bio: string;
}

interface ScriptureCard {
  reference: string;
  text: string;
  reflection: string;
}

interface VideoItem {
  videoId: string;
  title: string;
}

const theologySections: TheologySection[] = [
  {
    badge: "Matthew 18:21-35",
    title: "The Parable of the Unforgiving Servant — Seventy Times Seven",
    paragraphs: [
      "When Peter asks whether forgiving seven times is enough, Jesus answers not with a new number but with a story that dismantles the question entirely. The king cancels a debt of ten thousand talents — an astronomical sum, the equivalent of tens of millions of day&rsquo;s wages, a figure the original audience would have recognized as impossible to repay. The servant&rsquo;s debt to God is precisely that: impossible, owed forever, already cancelled by pure mercy. Then this same forgiven servant seizes a fellow servant who owes a hundred denarii — a real debt, a fraction of a percent of what he himself was just forgiven — and throws him in prison.",
      "The parable does not say forgiveness is easy, or that the hundred denarii did not matter, or that the wrong was not wrong. It says that the scale of what we have been forgiven renders the scale of what we must forgive incommensurable. &ldquo;Should you not also have had mercy on your fellow servant, even as I had mercy on you?&rdquo; The king&rsquo;s question is not really a question. The servant who cannot pass on what he has received proves he never truly received it. Forgiveness that stops at the boundary of ourselves is not forgiveness at all; it is transaction.",
      "Seventy times seven — or seventy-seven, depending on the translation — is not arithmetic. Jesus is quoting Lamech&rsquo;s boast in Genesis 4:24: &ldquo;If Cain is avenged sevenfold, truly Lamech seventy-sevenfold.&rdquo; Where Lamech made vengeance infinite, Jesus makes forgiveness infinite. The disciple does not count offenses on a ledger; the ledger itself is abolished.",
    ],
    callout: {
      label: "The logic",
      text: "We forgive not because the offense was small but because what we ourselves have been forgiven is immeasurably large. The debts we hold against others are hundreds of denarii; the debt God cancelled for us was tens of millions.",
    },
  },
  {
    badge: "Colossians 3:13",
    title: "&ldquo;Forgive as the Lord Has Forgiven You&rdquo; — The Standard and the Basis",
    paragraphs: [
      "Paul&rsquo;s command in Colossians 3:13 is deceptively compact: &ldquo;bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.&rdquo; Two things are happening here simultaneously. First, the standard: forgive as the Lord has forgiven you — not to the degree that feels manageable, not proportional to the severity of the offense, not conditional on apology, but at the standard of God&rsquo;s forgiveness of you. Second, the basis: as the Lord has forgiven you. Christian forgiveness is not sourced in human moral strength but in what has already been received. We are not the origin of the forgiveness we extend; we are its conduit.",
      "The word translated &ldquo;forgiving&rdquo; is charizomai — from charis, grace. To forgive is to grace someone, to give them grace. This is not the language of legal pardon; it is the language of gift. The forgiven person did not earn pardon and cannot. They receive a grace from a gracious person who is himself acting out of grace received. Every Christian act of forgiveness is a small reenactment of the gospel: the wronged party absorbs the cost and releases the debt freely.",
      "Ephesians 4:32 makes the same move: &ldquo;Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.&rdquo; Both verses root the imperative in the indicative — you must because you have been. This is why moralistic approaches to forgiveness fail: they demand the fruit without the root. The person who does not yet know the depth of their own forgiveness has nothing sufficient to draw from when the offense is deep.",
    ],
  },
  {
    badge: "Theology",
    title: "Forgiveness and Reconciliation — Two Distinct Things",
    paragraphs: [
      "One of the most practically important distinctions in a theology of forgiveness is the difference between forgiveness and reconciliation. Forgiveness is a transaction that happens in one heart — the wronged person releases the debt, cancels the claim, relinquishes the right to retribution. It requires no cooperation from the offender and can happen even when the offender is dead, unrepentant, or unaware. Reconciliation is relational — it requires two people, two willing parties, and normally includes acknowledgment of wrong, repentance, and the rebuilding of trust over time.",
      "Confusing these two does enormous damage. It leads survivors of abuse to believe they must return to or remain in harmful relationships to be truly forgiving. It leads those nursing wounds from a dead parent or a vanished betrayer to believe forgiveness is impossible. And it leads the offender to mistake the victim&rsquo;s willingness to forgive for a declaration that the relationship is restored. The New Testament keeps them distinct: we are called to forgive as Christ forgave us — unilaterally, freely, from the wounded side outward. We are not called to pretend the wrong did not happen, to trust people who have not demonstrated trustworthiness, or to expose ourselves to repeated harm.",
      "Jesus forgave from the cross. He did not make reconciliation with his executioners a condition of forgiveness. He also did not return to Pilate&rsquo;s house for dinner. Forgiveness opens the door; reconciliation is the slow, costly, earned process of both parties walking through it together — when it is safe, and when it is possible.",
    ],
    callout: {
      label: "Key distinction",
      text: "Forgiveness is unilateral — it happens in one heart. Reconciliation is bilateral — it requires two willing parties. You can and must forgive; you cannot compel reconciliation.",
    },
  },
  {
    badge: "Romans 12 / Nahum 1:2",
    title: "Forgiveness and Justice — God as the Vindicator",
    paragraphs: [
      "The deepest fear behind unforgiveness is that releasing the debt means the wrong escapes unpunished, that forgiveness is a kind of cosmic injustice — a declaration that what was done did not matter. Paul answers this fear with startling directness in Romans 12:19: &ldquo;Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, &lsquo;Vengeance is mine, I will repay, says the Lord.&rsquo;&rdquo; The command to forgive is not a command to pretend wrongs are trivial. It is a transfer of the case to a more competent court.",
      "Miroslav Volf, who wrote Exclusion and Embrace in the shadow of the Yugoslav wars, argues that the theology of divine judgment is the precondition for human forgiveness, not its enemy. It is precisely because God will judge rightly that the victim can release the demand for personal revenge. The wrongdoer will answer; the wrong will be reckoned with. The forgiver does not say &ldquo;it doesn&rsquo;t matter.&rdquo; She says &ldquo;it matters to God, who sees everything, and I trust him with it more than I trust my own rage to make it right.&rdquo;",
      "The cross itself is the supreme demonstration that forgiveness and justice are not opposites. At Calvary, God did not wave a hand and say &ldquo;never mind.&rdquo; The full weight of human sin was absorbed, the debt was paid, justice was satisfied — and mercy was extended from the same event. Christian forgiveness does not minimize the offense; it brings it to the One who dealt with all offenses in the body of his Son.",
    ],
  },
  {
    badge: "Soul Care",
    title: "Why Unforgiveness Is Self-Harm",
    paragraphs: [
      "Lewis Smedes famously wrote that when you refuse to forgive, &ldquo;you set a prisoner free and discover that the prisoner was you.&rdquo; The psychological and spiritual evidence converges on the same point: unforgiveness does not harm the offender. It incarcerates the wronged. The one who hurt you has moved on, or died, or is oblivious; you are the one lying awake rehearsing what you would have said, rehearsing the injury, keeping the wound inflamed by constant attention. The person who sinned against you is the jailer, and resentment is the prison — and you hold the key.",
      "The medical literature on unforgiveness documents elevated cortisol, increased cardiovascular risk, compromised immune function, and compounding depression. The spiritual literature adds what the medical cannot measure: unforgiveness hardens the ground of the heart against the very grace it needs to survive. Jesus links forgiveness to prayer in Matthew 6:14-15 not because God withdraws his affection from the unforgiving, but because a heart clenched around a grievance cannot receive what open hands can. The disposition that refuses to release others makes the self unable to be released.",
      "None of this means forgiveness is a shortcut to feeling better. In the short term it may cost more than bitterness, which offers the cold comfort of feeling righteous. But forgiveness is the only road out of the prison — and the one who walked the road of Calvary walked it first, so that we would not have to walk it without a guide.",
    ],
  },
  {
    badge: "Psychology and Theology",
    title: "Forgiving Yourself — And the Category Confusion of Forgiving God",
    paragraphs: [
      "Self-forgiveness is real and necessary, but it operates differently than forgiving another person. We cannot literally forgive ourselves — forgiveness flows from the injured party toward the one who caused harm, and we cannot simultaneously occupy both positions. What looks like self-forgiveness is more precisely the internalization of God&rsquo;s forgiveness: accepting as true what God has declared, resting in the pardon that has already been pronounced, and releasing the demand that we continue to punish ourselves for what the cross has already addressed. The enemy of self-forgiveness is almost always the belief, half-articulate and entirely wrong, that our ongoing self-reproach somehow supplements or justifies the atonement — that if we suffer for our sin long enough, we earn our way free. The gospel says otherwise.",
      "The phrase &ldquo;forgiving God&rdquo; names a real experience — the grief, the rage, the sense of abandonment that genuine suffering can produce — but it is a category confusion. God does not sin; he does not owe us anything he withheld; the forgiveness flow cannot run in that direction. What looks like forgiving God is more carefully the movement from accusation to trust, from protest to lament, from demanding an explanation to handing the incomprehensible over to a God who is good even when he is not comprehensible. The Psalms model this movement without eliminating the anguish.",
    ],
  },
  {
    badge: "C.S. Lewis",
    title: "On Forgiving the Inexcusable — The Essay That Changed Everything",
    paragraphs: [
      "In his essay &ldquo;On Forgiveness&rdquo; (collected in The Weight of Glory), C.S. Lewis cuts through every soft-pedaled evasion of the subject. His first move is to insist that excusing is not forgiving: &ldquo;If you excuse me, you are not forgiving me. If the whole charge is shown to be groundless, there is nothing to forgive. Forgiveness only operates where there really is something to forgive.&rdquo; We routinely pass off excuse-making as forgiveness — explaining why the person did it, noting their difficult childhood, finding mitigating circumstances — because real forgiveness is far harder. Real forgiveness looks full at the inexcusable thing and releases it anyway.",
      "Lewis then reaches the nerve of the matter: the model for forgiving others is the way God forgives us — not the parts of us that are sympathetic, not our best intentions poorly executed, but the parts that are genuinely inexcusable, the acts we cannot explain or mitigate. &ldquo;To excuse what can really produce good excuses is not Christian charity; it is only fairness. To be a Christian means to forgive the inexcusable, because God has forgiven the inexcusable in you.&rdquo;",
      "He adds a practical note about Christian forgiveness of long abuse: it does not require pretending the relationship is good or the person is trustworthy, and it may be perfectly compatible with prudent self-protection. &ldquo;If I can remember all I owe to the villain who wronged me, I think I can manage to do this — for a start. I hope it will not always be for a start only.&rdquo; Lewis is honest that forgiveness of the deeply personal wound is the work of a lifetime, not an event, and he is honest that he himself had barely begun.",
    ],
    callout: {
      label: "Lewis&rsquo;s definition",
      text: "Excusing is not forgiving. Forgiveness only operates where there really is something to forgive — where the wrong is inexcusable — and it forgives it anyway, on the strength of having been forgiven inexcusable things ourselves.",
    },
  },
  {
    badge: "Atonement",
    title: "The Cross as the Basis and Ground of All Christian Forgiveness",
    paragraphs: [
      "Christian forgiveness is not a free-standing moral achievement. It is a downstream participation in what happened at Calvary. At the cross, God did not pretend the debt did not exist, did not absorb it passively, did not simply decree it away. He paid it — in the body of his Son, in real suffering, in genuine cost. &ldquo;For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God&rdquo; (2 Corinthians 5:21). The cancellation of the debt was possible only because someone bore it.",
      "This means that when a Christian forgives, she is not doing something that merely imitates God at a moral distance. She is participating in the same logic — absorbing the cost, bearing the loss, releasing the claim — that God himself enacted in Christ. The cost does not disappear; it transfers. The forgiving person takes it on herself rather than demanding the offender carry it. This is why forgiveness is always a form of costly grace, never cheap, never cost-free. To forgive is to absorb a real debt, to refuse to pass it on, to let the wound end with you.",
      "The assurance that makes this possible is not stoic endurance but resurrection. The One who bore the cost of human sin was not consumed by it. The cross is not the last word; the empty tomb is. The Christian who absorbs another&rsquo;s wrong in forgiveness does so in the company of One who has shown that love&rsquo;s absorptions do not destroy it. The prisoner the forgiver sets free is herself; and the power to do it flows from the One who set her free first.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Forgiveness Inventory",
    summary:
      "A regular prayerful examination of who you have not forgiven — bringing names, offenses, and resentments into the open where they can be handed to God.",
    steps: [
      "Set aside twenty minutes in quiet. Ask the Holy Spirit to surface names — not to torment you, but to show you what is still clenched in your hand. Write them in the Journal on this page; secrecy keeps unforgiveness alive.",
      "For each name, identify the offense as specifically as you can. Vague resentment is harder to forgive than a named wrong. &ldquo;I forgive [name] for [specific act].&rdquo; Precision is mercy to yourself.",
      "Pray for each person by name: not for God to judge them, but for their genuine good. This is Luke 6:28's instruction — &ldquo;pray for those who abuse you&rdquo; — and it is one of the most effective softeners of a hardened heart.",
      "Mark the entry as &ldquo;released&rdquo; not as a declaration that the feeling is gone but as an act of the will. Feelings will revisit; the release remains as a stake in the ground you can return to.",
    ],
    anchor:
      "Matthew 5:23-24 — So if you are offering your gift at the altar and there remember that your brother has something against you, leave your gift there before the altar and go. First be reconciled to your brother, and then come and offer your gift.",
  },
  {
    number: "02",
    title: "Praying for Your Offenders",
    summary:
      "The specific practice Jesus commands in Luke 6:28 — interceding for the people who have wronged you, daily, until the prayer becomes possible and then genuine.",
    steps: [
      "Begin with five sentences, even if none of them feel sincere: &ldquo;Lord, bless [name]. Give them health. Give them peace. Draw them to yourself. Give them what they would need to flourish.&rdquo; You are asking God for what you cannot yet produce emotionally — begin with the words.",
      "Do this for thirty days without stopping. Lewis Smedes observed that sustained prayer for an enemy changes the one praying before it changes anything about the enemy. The prayer is practicing a posture your heart has not yet assumed.",
      "Notice what resists in you. The refusals — &ldquo;I don&rsquo;t want them to flourish&rdquo; — are honest data about where the wound still lives. Bring those resistances to God as well, without pretending. Honest prayer moves; polished prayer often does not.",
      "When the prayer becomes genuine — when you catch yourself actually wanting their good — mark it as a milestone. This is the Spirit&rsquo;s work in you, not your own moral achievement.",
    ],
    anchor:
      "Luke 6:28 — Bless those who curse you, pray for those who abuse you.",
  },
  {
    number: "03",
    title: "The Emmaus Walk — Tracing Your Own Forgiveness",
    summary:
      "A meditative practice of walking backward through your own story to trace all the places God has forgiven you — the exercise that makes forgiving others possible.",
    steps: [
      "Begin with your own account: write the offenses you have committed, not the offenses others committed against you. Be honest and specific. This is not self-flagellation; it is spiritual accounting.",
      "For each, receive again — not once but actively, now — the declaration of Romans 8:1: &ldquo;There is therefore now no condemnation.&rdquo; Let the forgiveness be present-tense, not merely historical. You are the servant whose ten thousand talents were just cancelled.",
      "Now bring the person who wronged you back to mind. Hold your ten thousand talents and their hundred denarii side by side. This is the parable&rsquo;s invitation. You are not diminishing their wrong; you are putting it in its true scale.",
      "This practice does not produce instant forgiveness, but it produces the conditions for it. Repeat it whenever the resentment resurfaces, and let the Psalms of lament accompany it — David combined honest complaint with radical trust, and so can you.",
    ],
    anchor:
      "Ephesians 1:7 — In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace.",
  },
  {
    number: "04",
    title: "Releasing the Verdict",
    summary:
      "The act of transferring the case — handing the offender, the wrong, and its consequences over to God as the only judge competent to handle it justly.",
    steps: [
      "Write the wrong and the wrongdoer on a piece of paper. Be specific — not catharsis, but clarity. The prayer that follows requires honesty.",
      "Pray Romans 12:19 back to God: &ldquo;Lord, I am releasing my claim to vengeance. I am handing [name] and what they did over to you. You said vengeance belongs to you. I trust your judgment more than my own rage.&rdquo;",
      "Physically destroy the paper — not as a magic act, but as a concrete, embodied symbol of release. Our bodies participate in our spiritual decisions; the physical gesture gives the act a moment in time to return to.",
      "Expect the case to return to court in your mind. When it does, you have standing: &ldquo;I have already handed this case over. I am not re-trying it today.&rdquo; Forgiveness is not a single event but a direction you keep walking.",
    ],
    anchor:
      "Romans 12:19 — Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, &ldquo;Vengeance is mine, I will repay, says the Lord.&rdquo;",
  },
  {
    number: "05",
    title: "The Corrie ten Boom Practice — Forgiving When There Is Nothing Left",
    summary:
      "A practice for forgiveness at the end of human capacity — when the will consents but the feelings are absent, learning to extend the hand and ask God to supply the warmth.",
    steps: [
      "Acknowledge the gap honestly: &ldquo;I have no warmth toward this person. There is no forgiveness in me at the moment. But I am willing.&rdquo; Willingness is the seed; God grows what comes after.",
      "Make one physical gesture of willingness: extend a hand if you are praying alone, open your hands palms upward, say the words aloud. Corrie ten Boom extended her hand to the SS guard who tortured her; the warmth flooded in after. The act preceded the feeling.",
      "Ask for the Holy Spirit&rsquo;s supply specifically: not &ldquo;make me feel forgiving&rdquo; but &ldquo;give me your love for this person, because I do not have any of my own.&rdquo; This is not a small prayer; it is one of the most honestly demanding things a human being can ask.",
      "Return to this practice each time the wound is re-exposed — a memory, an encounter, a triggered grief. Forgiveness practiced at the edge of capacity is the practice that most deeply forms the soul.",
    ],
    anchor:
      "Romans 5:5 — God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us.",
  },
  {
    number: "06",
    title: "Communal Forgiveness — Practicing in Community",
    summary:
      "Forgiveness is a social skill learned in the practice of ordinary community life — the small conflicts of church, family, and friendship that train the soul for larger ones.",
    steps: [
      "Treat every conflict in your ordinary relationships as a training ground. The person who irritates you at small group, the family member who offended at the table, the colleague who took credit — these are the everyday mat on which the forgiveness muscle is built.",
      "Practice the repair sequence: acknowledge the wrong (to yourself and where appropriate to the person), release the grievance in prayer, and where reconciliation is possible, initiate it. Don&rsquo;t wait for the other person to come to you; Matthew 5:23 puts the initiative on the one who remembers the breach.",
      "Find a confessor or soul friend with whom you can name unforgivenness aloud. The act of speaking it — of saying &ldquo;I have not forgiven [name] and here is why&rdquo; — breaks the power that secrecy gives resentment.",
      "Celebrate small victories in community: share a release, not publicly to perform virtue, but privately with a trusted friend. Forgiveness practiced in community becomes part of the community&rsquo;s culture rather than a private burden.",
    ],
    anchor:
      "Colossians 3:13 — Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "C.S. Lewis",
    role: "On Forgiveness — The Weight of Glory",
    quote:
      "To excuse what can really produce good excuses is not Christian charity; it is only fairness. To be a Christian means to forgive the inexcusable, because God has forgiven the inexcusable in you.",
    bio: "Lewis&rsquo;s brief essay &ldquo;On Forgiveness&rdquo; is one of the most precise things ever written on the subject. His central move is to distinguish excusing from forgiving — a distinction most popular teaching on forgiveness never makes — and to insist that real forgiveness operates only where the wrong is genuinely inexcusable. He applies the same laser to the inner life: why is it easier to believe God has forgiven the large and notorious sins of notorious sinners than to accept that he has forgiven our own private and persistent ones? The essay ends not with resolution but with Lewis confessing he has barely begun the work of forgiving his own old wounds — a honesty that makes the essay, paradoxically, more useful than a triumphant one would be.",
  },
  {
    name: "Corrie ten Boom",
    role: "The Hiding Place — Forgiveness in Extremis",
    quote:
      "Forgiveness is an act of the will, and the will can function regardless of the temperature of the heart. When He tells us to love our enemies, He gives, along with the command, the love itself.",
    bio: "Corrie ten Boom&rsquo;s account of coming face to face with her former SS guard after a 1947 Munich lecture on forgiveness has become one of the century&rsquo;s great testimonies to costly grace. The man asked her to forgive him; she felt nothing. She prayed, extended her hand as an act of will, and — in her account — warmth flooded her arm that she could not attribute to herself. The Hiding Place and its sequel Tramp for the Lord document a life built on precisely this discovery: that God supplies the love to fulfill his own commands, but only to those who obey first. Ten Boom&rsquo;s authority is inseparable from the specificity of her suffering; she forgave from a very specific wound, not from a comfortable theoretical position, and that is exactly what makes her witness credible.",
  },
  {
    name: "Lewis Smedes",
    role: "Forgive and Forget — The Architecture of Release",
    quote:
      "When you release the wrongdoer from the wrong, you cut a malignant tumor out of your inner life. You set a prisoner free, but you discover that the real prisoner was yourself.",
    bio: "Lewis Smedes&rsquo;s Forgive and Forget (1984) is the book that introduced the language of forgiveness-as-release to a generation of Christians and counselors. Smedes was careful to insist that forgiving is not excusing, not forgetting (the title is deliberately ironic), not reconciling, and not denying that wrong was done. It is one thing: releasing the wrongdoer from the claim your pain wants to make on them, which turns out to free you from the prison of perpetual victimhood. He developed a four-stage model — hurt, hate, heal, release — and was honest that the stages rarely move in a tidy line. His later book Shame and Grace extended the same logic to the experience of self-contempt, arguing that self-forgiveness is ultimately the reception of grace already given.",
  },
  {
    name: "Desmond Tutu",
    role: "No Future Without Forgiveness — Forgiveness and the Body Politic",
    quote:
      "Forgiveness is not some nebulous thing. It is practical politics. Without forgiveness, there is no future.",
    bio: "Desmond Tutu chaired South Africa&rsquo;s Truth and Reconciliation Commission from 1996 to 1998, presiding over a national experiment in whether a society shattered by apartheid could find a path other than vengeance. No Future Without Forgiveness is his theological account of that experiment. For Tutu, forgiveness is not a private spiritual transaction; it is the only political philosophy capable of breaking cycles of retributive violence. He drew on ubuntu — the African philosophical tradition that &ldquo;I am because we are&rdquo; — and on Christian atonement theology to argue that restorative justice, not punitive justice, is both more Christian and more effective. He was unflinching about the cost: amnesty for perpetrators who confessed publicly meant that many victims felt the truth was traded for justice. Tutu believed the alternative would have been civil war. Whether he was right remains a live question; that he took the cost of forgiveness seriously is not in doubt.",
  },
  {
    name: "Henri Nouwen",
    role: "The Return of the Prodigal Son — The Father Who Runs",
    quote:
      "The Father&rsquo;s heart is not a heart that keeps account of debts. It is a heart that is always ready to celebrate the return of those who were lost.",
    bio: "Henri Nouwen spent years meditating on Rembrandt&rsquo;s painting of the prodigal son&rsquo;s return, and the book that came from that meditation — The Return of the Prodigal Son — is one of the finest explorations of forgiveness in Christian devotional literature. Nouwen moved progressively through each figure in the painting: the younger son who needed to return, the older son who could not celebrate, and finally the father with the failing eyes and the hands — one feminine-soft, one masculine-strong — pressing the prodigal home. His claim is that every Christian is called to become the father: to develop the capacity to greet the returning with a feast before an explanation. Nouwen wrote from personal knowledge of all three positions — the prodigal, the elder, and the slow, painful formation into the one who can forgive without demanding that the wound be justified first.",
  },
  {
    name: "Tim Keller",
    role: "Counterfeit Gods / The Prodigal God — Forgiveness and the Heart&rsquo;s Idols",
    quote:
      "The only way to forgive a deep wound is to refuse to let the wrongdoer define your worth. Your worth is defined by the One who paid an infinite price for you — and when you know that, the hundred denarii stop being the most important thing in the room.",
    bio: "Tim Keller&rsquo;s treatment of forgiveness runs through several of his books, most fully in The Prodigal God and his sermons on Matthew 18. His signature move is to ask: why is forgiveness so hard? And his answer is always about idolatry: what was taken from you in the offense — dignity, security, reputation, love — was functioning as something more than a human good; it was functioning as a god. The unforgiveness that remains is the protective instinct of an idol whose shrine was vandalized. Until the deeper displacement is addressed — until the good that was lost is dethroned from the supreme place — the forgiveness remains conditional. Keller&rsquo;s approach turns the work of forgiveness into an act of worship: you forgive because you have found a worth in Christ that the offense cannot touch, and so the debt, however real, is no longer existential.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Matthew 18:21-22",
    text: "Then Peter came up and said to him, &ldquo;Lord, how often will my brother sin against me, and I forgive him? As many as seven times?&rdquo; Jesus said to him, &ldquo;I do not say to you seven times, but seventy-seven times.&rdquo;",
    reflection:
      "Peter offers a generous number; Jesus abolishes the category. Seventy-seven is not an upper limit — it is the end of limits. The disciple does not maintain a ledger of offenses forgiven; the ledger is torn up. The question behind Peter&rsquo;s question is &ldquo;when am I done?&rdquo; and the answer is never, because you have been forgiven infinitely more than you will ever be asked to forgive.",
  },
  {
    reference: "Colossians 3:13",
    text: "Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.",
    reflection:
      "The standard is not &ldquo;to the degree that feels reasonable&rdquo; but &ldquo;as the Lord has forgiven you.&rdquo; This converts every act of forgiveness into a theological statement about what you believe God has done for you. The measure of our forgiveness of others is the measure of our comprehension of our own forgiveness — and both are bottomless.",
  },
  {
    reference: "Matthew 6:14-15",
    text: "For if you forgive others their trespasses, your heavenly Father will also forgive you, but if you do not forgive others their trespasses, neither will your Father forgive your trespasses.",
    reflection:
      "These verses have terrified many readers. They are not teaching that we earn forgiveness by forgiving first. They are diagnosing: the heart that refuses to forgive has not understood forgiveness and therefore cannot receive it. It is not a transaction but a soil condition — an unforgiving heart is closed ground that grace cannot enter. Forgiveness of others and reception of God&rsquo;s forgiveness live and die together.",
  },
  {
    reference: "Romans 12:19",
    text: "Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, &ldquo;Vengeance is mine, I will repay, says the Lord.&rdquo;",
    reflection:
      "The command not to avenge is not a command to pretend injustice does not exist. It is a transfer of jurisdiction. God sees every wrong with perfect clarity, is moved by none of the distortions that corrupt human justice, and will repay. The believer who releases vengeance is not capitulating to injustice; she is trusting it to a court more competent than her own grief.",
  },
  {
    reference: "Luke 23:34",
    text: "And Jesus said, &ldquo;Father, forgive them, for they know not what they do.&rdquo;",
    reflection:
      "The first word from the cross is forgiveness, spoken before any apology was offered, before any of the perpetrators asked for it, in the middle of the act of crucifixion itself. This is Christian forgiveness at its source: the wounded one praying for the offenders, not from a safe distance but from inside the wound. Every Christian act of forgiveness participates in this moment.",
  },
  {
    reference: "Ephesians 4:31-32",
    text: "Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice. Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.",
    reflection:
      "Paul lists what must be put away: bitterness, wrath, anger, clamor, slander, malice — six manifestations of the unforgiven wound. Then what must be put on: kindness, tenderheartedness, forgiveness. The two lists describe the same heart in two different states. The transition from one to the other is not self-improvement; it is &ldquo;as God in Christ forgave you&rdquo; — received mercy, then extended.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "Y2y0Nt0ABQQ", title: "The Theology of Forgiveness" },
  { videoId: "UhzTrh6vb9s", title: "C.S. Lewis: On Forgiving the Inexcusable" },
  { videoId: "gXLblNwi8H8", title: "Forgiveness and Justice — Are They Compatible?" },
  { videoId: "bVB-wc6HJJY", title: "Corrie ten Boom: Forgiving the Unforgivable" },
  { videoId: "WdJr4DMQ-GE", title: "The Parable of the Unforgiving Servant" },
  { videoId: "cBKzOdCf-uA", title: "Why Unforgiveness Hurts You More" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianForgivenessGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<FRGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [person, setPerson] = useState("");
  const [offense, setOffense] = useState("");
  const [prayerForThem, setPrayerForThem] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as FRGEntry[]);
      }
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage unavailable — entries remain in memory only
    }
  }, [entries, loaded]);

  function addEntry() {
    if (!person.trim() || !offense.trim()) return;
    const entry: FRGEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      person: person.trim(),
      offense: offense.trim(),
      prayerForThem: prayerForThem.trim(),
      released: false,
    };
    setEntries((prev) => [entry, ...prev]);
    setPerson("");
    setOffense("");
    setPrayerForThem("");
  }

  function toggleReleased(id: string) {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, released: !e.released } : e))
    );
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const releasedCount = entries.filter((e) => e.released).length;

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GOLD : BORDER}`,
    background: active ? "rgba(217, 119, 6, 0.12)" : "transparent",
    color: active ? GOLD : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.9rem",
    borderRadius: 8,
    border: `1px solid ${BORDER}`,
    background: BG,
    color: TEXT,
    fontSize: "0.92rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: GOLD,
    marginBottom: 6,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
          {/* ---------- Hero ---------- */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: GOLD,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Spiritual Discipline
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Seventy Times Seven: A Guide to Christian Forgiveness
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Forgiveness is the most demanding thing Jesus commands and the most liberating thing
              Christians experience. It is not excusing, not forgetting, not reconciling — it is
              releasing a debt you have every right to hold. This guide explores the theology of
              forgiveness from the cross outward, the voices who have forgiven at great cost, and
              the practices that make the parable of the unforgiving servant a daily reality rather
              than a conviction that never touches the wound.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Bearing with one another and, if one has a complaint against another,
                forgiving each other; as the Lord has forgiven you, so you also must forgive.&rdquo;
              </p>
              <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>Colossians 3:13</p>
            </div>
          </header>

          {/* ---------- Tabs ---------- */}
          <nav
            aria-label="Page sections"
            style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
          >
            {TABS.map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
                {t}
              </button>
            ))}
          </nav>

          {/* ---------- Theology ---------- */}
          {tab === "Theology" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Before forgiveness is a practice it is a doctrine — rooted in the cross, grounded in
                what God has done, and impossible to sustain apart from a steady grasp of what we
                ourselves have been forgiven. These eight studies trace forgiveness from the parable
                of the unforgiving servant to C.S. Lewis&rsquo;s essay on the inexcusable.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: GOLD,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(217, 119, 6, 0.07)",
                        border: `1px solid rgba(217, 119, 6, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: GOLD,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                        dangerouslySetInnerHTML={{ __html: section.callout.label + ":" }}
                      />{" "}
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The parable of the unforgiving servant, the command to forgive as the Lord forgave,
                  the cross as the ground of all forgiveness, and Lewis&rsquo;s insistence that
                  excusing is not forgiving — these are not separate topics but one. The God who
                  absorbed the full weight of human sin in Christ invites his people into the same
                  logic: absorb, release, do not demand repayment. The freedom on the other side is
                  not the offender&rsquo;s freedom. It is yours. Explore the Practices tab for
                  concrete first steps, or go deeper on{" "}
                  <Link
                    href="/christian-kindness"
                    style={{ color: GOLD, textDecoration: "underline" }}
                  >
                    kindness
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/christian-anxiety-guide"
                    style={{ color: GOLD, textDecoration: "underline" }}
                  >
                    anxiety
                  </Link>
                  , two close companions of the forgiveness journey.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Forgiveness is an act of will before it is a feeling, a direction before it is a
                destination. These six practices give the act of forgiveness a shape — something
                you can actually do today, not just intend to feel eventually.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: GOLD,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2 style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}>
                      {practice.title}
                    </h2>
                  </div>
                  <p style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}>
                    {practice.summary}
                  </p>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {practice.steps.map((step, i) => (
                      <li key={i} style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: GOLD,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the process
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Forgiveness is a direction, not an event. You will revisit the wound; the case will
                  return to court in your mind; the feeling of outrage will resurface. This does not
                  mean you have not forgiven. It means forgiveness, like most growth, is a
                  repetitive practice rather than a single achievement. Return to the release, to
                  the prayer, to the parable, as many times as it takes — seventy times seven, if
                  necessary. The Spirit is patient with the repetition because the wound was real.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Forgiveness is best learned by watching people who have actually done it at cost.
                Six witnesses — from a Nazi concentration camp survivor to an Oxford don to an
                archbishop facing civil war — show what releasing the debt looks like in practice.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: GOLD,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                    dangerouslySetInnerHTML={{ __html: voice.role }}
                  />
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(217, 119, 6, 0.06)",
                      borderLeft: `3px solid ${GOLD}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <p
                    style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: voice.bio }}
                  />
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages to read slowly, memorize, and pray. Each pairs the text with a short
                reflection. Consider taking one per week and carrying it alongside your forgiveness
                journal entries.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: GOLD,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: 12,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {scripture.reference}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.75,
                      fontSize: "0.97rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into three sentences of prayer: adoration (&ldquo;Father, you
                  forgave the inexcusable in me — you cancelled ten thousand talents&rdquo;),
                  confession (&ldquo;I have held the hundred denarii. I have kept the case open when
                  I claimed to have released it&rdquo;), and petition (&ldquo;Give me the grace to
                  release [name] today — not the feeling first, but the will&rdquo;). Scripture
                  prayed over unforgiveness becomes a hammer that, over time, breaks the prison
                  open.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Track who you need to forgive, the offense, and a prayer for them. Mark entries as
                &ldquo;released&rdquo; when you have handed the case over to God — not as proof
                that the feeling is gone, but as a stake in the ground you can return to. Entries
                are saved privately in your browser.
              </p>

              {loaded && entries.length > 0 && (
                <div
                  style={{
                    ...cardStyle,
                    borderLeft: `3px solid ${GOLD}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: GOLD,
                        lineHeight: 1,
                        display: "block",
                      }}
                    >
                      {releasedCount}
                    </span>
                    <span style={{ color: MUTED, fontSize: "0.82rem" }}>
                      of {entries.length} released
                    </span>
                  </div>
                  <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", margin: 0 }}>
                    Each release is a participation in Calvary — a debt absorbed rather than demanded.
                    The one who benefits most from every release is you.
                  </p>
                </div>
              )}

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New forgiveness entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="frg-person" style={labelStyle}>
                    Who do you need to forgive?
                  </label>
                  <input
                    id="frg-person"
                    type="text"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                    placeholder="A name — parent, friend, colleague, yourself, a stranger"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="frg-offense" style={labelStyle}>
                    The offense
                  </label>
                  <textarea
                    id="frg-offense"
                    value={offense}
                    onChange={(e) => setOffense(e.target.value)}
                    placeholder="Name it specifically — the parable works with specifics, not vague resentment"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="frg-prayer" style={labelStyle}>
                    A prayer for them
                  </label>
                  <textarea
                    id="frg-prayer"
                    value={prayerForThem}
                    onChange={(e) => setPrayerForThem(e.target.value)}
                    placeholder="Even five sincere sentences: their health, their peace, their relationship with God"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!person.trim() || !offense.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !person.trim() || !offense.trim() ? BORDER : GOLD,
                    color: !person.trim() || !offense.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !person.trim() || !offense.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save entry
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your entries{" "}
                  <span style={{ color: MUTED, fontWeight: 400, fontSize: "0.88rem" }}>
                    ({entries.length})
                  </span>
                </h2>

                {!loaded && (
                  <p style={{ color: MUTED, fontSize: "0.9rem" }}>Loading your journal&hellip;</p>
                )}

                {loaded && entries.length === 0 && (
                  <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 6 }}>
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Name one person, one offense, and one prayer for them. The act of writing it
                      is already the beginning of the release.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry) => (
                      <article key={entry.id} style={{ ...cardStyle, opacity: entry.released ? 0.75 : 1 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            marginBottom: 10,
                          }}
                        >
                          <div>
                            <h3
                              style={{
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: entry.released ? MUTED : GOLD,
                                textDecoration: entry.released ? "line-through" : "none",
                              }}
                            >
                              {entry.person}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                            <button
                              type="button"
                              onClick={() => toggleReleased(entry.id)}
                              style={{
                                background: entry.released
                                  ? "rgba(217, 119, 6, 0.15)"
                                  : "transparent",
                                border: `1px solid ${entry.released ? GOLD : BORDER}`,
                                color: entry.released ? GOLD : MUTED,
                                borderRadius: 6,
                                padding: "0.3rem 0.75rem",
                                fontSize: "0.78rem",
                                cursor: "pointer",
                                fontWeight: entry.released ? 600 : 400,
                              }}
                            >
                              {entry.released ? "Released" : "Mark released"}
                            </button>
                            <button
                              type="button"
                              onClick={() => deleteEntry(entry.id)}
                              aria-label={`Delete entry for ${entry.person}`}
                              style={{
                                background: "transparent",
                                border: `1px solid ${BORDER}`,
                                color: MUTED,
                                borderRadius: 6,
                                padding: "0.3rem 0.75rem",
                                fontSize: "0.78rem",
                                cursor: "pointer",
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>

                        <div style={{ marginBottom: entry.prayerForThem ? 10 : 0 }}>
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            The offense
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.offense}
                          </p>
                        </div>

                        {entry.prayerForThem && (
                          <div>
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 3,
                              }}
                            >
                              Prayer for them
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.prayerForThem}
                            </p>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- Videos ---------- */}
          {tab === "Videos" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Teaching to watch slowly — on the theology of forgiveness, the parable of the
                unforgiving servant, Corrie ten Boom, and why releasing the debt sets the forgiver
                free. Good companions to the Theology and Journal tabs.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {videoItems.map((video) => (
                  <div
                    key={video.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={video.videoId} title={video.title} />
                    <div style={{ padding: "0.9rem 1.1rem" }}>
                      <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>
                        {video.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Closing ---------- */}
          <section
            style={{
              marginTop: "3rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "1.75rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>
              The freedom on the other side
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Jesus did not command forgiveness to protect the people who wronged you. He commanded
              it to free you from the prison that unforgiveness builds — quietly, brick by brick,
              until the very person who wounded you is controlling your inner life from a distance.
              The cross makes forgiveness possible because Someone else has already absorbed the
              cost. You are not forgiving from a deficit; you are forgiving from a surplus, passing
              on what you have already received in full.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore{" "}
              <Link
                href="/christian-kindness"
                style={{ color: GOLD, textDecoration: "underline" }}
              >
                Christian Kindness
              </Link>
              , navigate worry with the{" "}
              <Link
                href="/christian-anxiety-guide"
                style={{ color: GOLD, textDecoration: "underline" }}
              >
                Anxiety Guide
              </Link>
              , or go deeper on prayer with{" "}
              <Link
                href="/prayer"
                style={{ color: GOLD, textDecoration: "underline" }}
              >
                The Prayer Guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
