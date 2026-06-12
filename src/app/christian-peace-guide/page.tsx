"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_christianpeace_entries";

interface PCEEntry {
  id: string;
  date: string;
  theUnrest: string;
  thePeacePracticed: string;
  theResult: string;
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
    badge: "Shalom — The Hebrew Vision",
    title: "Shalom: Wholeness, Not Just the Absence of Conflict",
    paragraphs: [
      "The Bible&rsquo;s word for peace is bigger than ours. The Hebrew shalom does not mean merely the absence of war or the quiet after an argument; it means wholeness, completeness, flourishing &mdash; everything in its place, every relationship rightly woven, nothing missing and nothing broken. When the priests blessed Israel &mdash; &ldquo;the LORD lift up his countenance upon you and give you peace&rdquo; (Num 6:26) &mdash; they were not wishing the people a calm afternoon. They were invoking the world as God made it to be: humans at peace with God, with one another, with creation, and within their own souls.",
      "This is why the prophets could speak of shalom as something a whole city could have or lose. Jeremiah told the exiles in Babylon to &ldquo;seek the welfare [shalom] of the city where I have sent you&hellip; for in its welfare you will find your welfare&rdquo; (Jer 29:7) &mdash; peace as the flourishing of streets, markets, families, and neighbors, not merely an inner feeling. And it is why the prophets&rsquo; harshest words fell on those who faked it: &ldquo;They have healed the wound of my people lightly, saying, &lsquo;Peace, peace,&rsquo; when there is no peace&rdquo; (Jer 6:14). A truce that leaves injustice intact is not shalom; it is anesthesia.",
      "The shalom vision reframes the entire subject of this guide. Christian peace is not a mood to be manufactured or a conflict-avoidance strategy; it is participation in God&rsquo;s repair of a vandalized world &mdash; beginning with the soul, extending to the household, reaching to the ends of the earth. Every smaller peace in this guide &mdash; the quieted anxiety, the reconciled friendship, the stilled storm &mdash; is a down payment on the day when &ldquo;the wolf shall dwell with the lamb&rdquo; (Isa 11:6) and shalom covers the earth as the waters cover the sea.",
    ],
    callout: {
      label: "Shalom",
      text: "Not the absence of conflict but the presence of wholeness &mdash; every relationship rightly woven, nothing missing, nothing broken. &ldquo;Peace, peace, when there is no peace&rdquo; is the Bible&rsquo;s own warning against settling for anesthesia.",
    },
  },
  {
    badge: "John 14:27 — Not as the World Gives",
    title: "My Peace I Give to You: The Bequest of the Departing Christ",
    paragraphs: [
      "On the night before his death &mdash; with betrayal in the room, the cross hours away, and the disciples&rsquo; world collapsing &mdash; Jesus makes a will: &ldquo;Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid&rdquo; (John 14:27). The timing is the theology. This is not the serenity of a man whose circumstances are calm; it is the peace of the Son who trusts the Father on the eve of Gethsemane. What he bequeaths is not insulation from trouble &mdash; &ldquo;in the world you will have tribulation&rdquo; (John 16:33) &mdash; but his own settled communion with the Father, carried into the middle of it.",
      "&ldquo;Not as the world gives&rdquo; is the dividing line. The world&rsquo;s peace is circumstantial: it depends on the diagnosis coming back clear, the conflict resolving, the account balance holding, the news improving &mdash; and so it must be anxiously defended, because any morning can take it away. The peace of Christ is sourced upstream of circumstances, in a relationship death itself could not sever. The world gives peace the way a sedative does &mdash; temporarily, externally, with diminishing returns. Christ gives peace the way a vine gives life to a branch: from the inside, continuously, by abiding (John 15:4-5).",
      "Notice, finally, that the gift comes with a command: &ldquo;Let not your hearts be troubled.&rdquo; The peace is given, but it must also be received and practiced &mdash; the heart must be actively talked out of its panic and into the bequest. That interplay of gift and practice runs through this whole guide: peace is grace before it is discipline, but it does not bypass the disciplines. The troubled heart is invited, every day, to go back and read the will.",
    ],
    callout: {
      label: "The bequest",
      text: "Jesus wills his peace to the disciples on the night of his arrest &mdash; peace sourced upstream of circumstances, in communion with the Father. The world&rsquo;s peace is a sedative; Christ&rsquo;s peace is a vine&rsquo;s life in a branch.",
    },
  },
  {
    badge: "Isaiah 9:6 — The Prince of Peace",
    title: "The Prince of Peace: A Person Before a Feeling",
    paragraphs: [
      "&ldquo;For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace&rdquo; (Isa 9:6). Isaiah&rsquo;s great oracle locates peace not in a technique, a treaty, or a state of mind but in a person &mdash; a ruler whose administration is shalom. The next verse completes the claim: &ldquo;Of the increase of his government and of peace there will be no end&rdquo; (9:7). Peace, in the Bible&rsquo;s deepest grammar, is not something you find; it is someone who reigns.",
      "The title was spoken into a war zone. Isaiah 9 opens in the gloom of Assyrian invasion &mdash; &ldquo;the people who walked in darkness&rdquo; (9:2) are refugees of the empire&rsquo;s northern campaigns &mdash; and the oracle answers the boots of trampling warriors and the garments rolled in blood (9:5) with a birth announcement. Biblical peace never pretends the darkness away; it announces a child into it. Micah says the same of the coming ruler from Bethlehem: &ldquo;he shall be their peace&rdquo; (Mic 5:5) &mdash; not he shall bring peace, but he shall be it.",
      "This is why the New Testament treats peace as inseparable from the person of Christ: &ldquo;he himself is our peace&rdquo; (Eph 2:14). The practical consequence is enormous. If peace were a feeling, you would chase the feeling; since peace is a Prince, you draw near to him &mdash; and the feeling, when it comes, is the wake of the relationship, not the goal of it. The anxious heart asking &ldquo;how do I get peace?&rdquo; is asking a slightly wrong question. The better one: how do I get nearer to the Prince of Peace, and what would it mean to live gladly under his government?",
    ],
    callout: {
      label: "A person, not a technique",
      text: "Isaiah answers the boots of trampling warriors with a birth announcement. Peace in the Bible&rsquo;s grammar is not something you find but someone who reigns &mdash; &ldquo;he himself is our peace.&rdquo;",
    },
  },
  {
    badge: "Romans 5, Philippians 4, Romans 12 — Three Dimensions",
    title: "Peace with God, the Peace of God, Peace with Others",
    paragraphs: [
      "Scripture speaks of peace in three distinct dimensions, and confusing them causes endless trouble. The first is peace with God: &ldquo;Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ&rdquo; (Rom 5:1). This is objective, legal, accomplished &mdash; the end of hostilities between the holy God and the sinner, secured at the cross and received by faith. It does not fluctuate with your mood. On your worst morning, if you are in Christ, you have exactly as much peace with God as on your best.",
      "The second is the peace of God: &ldquo;Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus&rdquo; (Phil 4:6-7). This is subjective and experiential &mdash; the felt tranquility that stands sentry over heart and mind &mdash; and unlike the first, it does fluctuate, which is why Paul attaches it to a practice: prayer with thanksgiving. The order matters: the peace of God grows in the soil of peace with God. You cannot reliably feel a peace you do not first have.",
      "The third is peace with others: &ldquo;If possible, so far as it depends on you, live peaceably with all&rdquo; (Rom 12:18). This is relational and pursued &mdash; commanded, but with two honest qualifiers (&ldquo;if possible,&rdquo; &ldquo;so far as it depends on you&rdquo;) that acknowledge reconciliation takes two. The three dimensions form one cascade: reconciled to God, quieted within, the believer becomes an agent of peace without. Most of the frustrations of the Christian life come from working the cascade backward &mdash; trying to feel peaceful, or to fix every relationship, while neglecting the fountain at the top.",
    ],
    callout: {
      label: "The cascade",
      text: "Peace with God (Rom 5:1) is objective and does not fluctuate; the peace of God (Phil 4:7) is felt and practiced; peace with others (Rom 12:18) is pursued. The order is the secret &mdash; the cascade only flows downhill.",
    },
  },
  {
    badge: "Mark 4 — The Storm",
    title: "Asleep on the Cushion: Peace Amid Chaos",
    paragraphs: [
      "The picture is almost comic in its contrast: a windstorm so violent that seasoned fishermen are certain they are dying, waves breaking into the boat, the boat already filling &mdash; &ldquo;but he was in the stern, asleep on the cushion&rdquo; (Mark 4:38). Jesus&rsquo; sleep in the storm is the Gospels&rsquo; most vivid portrait of the peace he later bequeaths: not the absence of the storm but rest inside it, the rest of a Son who knows the sea belongs to his Father. The disciples&rsquo; accusation &mdash; &ldquo;Teacher, do you not care that we are perishing?&rdquo; &mdash; is the permanent voice of panic, which always reads God&rsquo;s calm as God&rsquo;s indifference.",
      "Then the reversal: &ldquo;He awoke and rebuked the wind and said to the sea, &lsquo;Peace! Be still!&rsquo; And the wind ceased, and there was a great calm&rdquo; (4:39). The one who carries peace can speak peace. But the probing word is for the disciples, not the weather: &ldquo;Why are you so afraid? Have you still no faith?&rdquo; (4:40). Jesus treats their terror not as the reasonable response to circumstances but as a faith problem &mdash; they had his word (&ldquo;Let us go across to the other side,&rdquo; 4:35) and his presence in the boat, and concluded from the waves that both were void.",
      "Mark&rsquo;s scene is the believer&rsquo;s storm manual. The storms are real &mdash; the text never minimizes the water in the boat. The presence is real &mdash; he is in the boat, not watching from shore. And the question is permanent: will the disciple take the measure of the storm from the waves or from the one asleep on the cushion? Peace amid chaos is not a temperament some people are born with; it is a conclusion drawn from who is in the boat.",
    ],
    callout: {
      label: "Who is in the boat",
      text: "Panic always reads God&rsquo;s calm as God&rsquo;s indifference &mdash; &ldquo;do you not care that we are perishing?&rdquo; Peace amid chaos is not a temperament; it is a conclusion drawn from who is in the boat.",
    },
  },
  {
    badge: "Colossians 3:15 — Peace as Umpire",
    title: "Let the Peace of Christ Rule in Your Hearts",
    paragraphs: [
      "&ldquo;And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful&rdquo; (Col 3:15). The verb Paul chooses &mdash; brabeuo &mdash; is borrowed from the athletic games: it is the word for what an umpire or arbiter does. The peace of Christ is to officiate in the heart: to call decisions, settle disputes between competing impulses, and declare which course of action is in bounds. Where two paths lie open and anxiety, ambition, and fear are all shouting, the believer is told to let Christ&rsquo;s peace make the call.",
      "This gives peace a practical, almost daily role in guidance and self-examination &mdash; though it must be handled with care. Paul is not teaching that the most comfortable option is always God&rsquo;s will; obedience sometimes disturbs before it settles, and a seared conscience can feel peaceful in sin. The umpire is &ldquo;the peace of Christ,&rdquo; not the peace of avoidance &mdash; a peace that always rules consistently with Scripture and always, says the verse, in the direction of the &ldquo;one body.&rdquo; The context is community: the verses around it are about bearing with one another, forgiving complaints, and putting on love (Col 3:12-14). The umpire&rsquo;s primary jurisdiction is relationships in the church.",
      "Practically, Colossians 3:15 invites a habit of noticing: when peace leaves, ask why. The departure of peace &mdash; after a sharp word, during a nursed grudge, in the middle of a deception &mdash; is the umpire&rsquo;s whistle, a summons to stop play and look at the replay. And the verse ends where sustained peace always ends: &ldquo;and be thankful.&rdquo; Gratitude and the rule of peace are companions; a complaining heart drowns out the official, while a thankful one can hear every call.",
    ],
    callout: {
      label: "Brabeuo",
      text: "The verb means to act as umpire. Christ&rsquo;s peace officiates in the heart &mdash; and when peace departs after a sharp word or during a nursed grudge, that is the whistle: stop play and look at the replay.",
    },
  },
  {
    badge: "Matthew 5:9 — The Seventh Beatitude",
    title: "Peacemaking vs. Peacekeeping: Blessed Are the Peacemakers",
    paragraphs: [
      "&ldquo;Blessed are the peacemakers, for they shall be called sons of God&rdquo; (Matt 5:9). The word is active: peace-makers, not peace-lovers or peace-keepers. A peacekeeper manages the appearance of calm &mdash; smoothing over, changing the subject, appeasing the loudest voice, keeping the lid on. A peacemaker does something far costlier: names the breach, moves toward the conflict, absorbs discomfort, and works for actual reconciliation. Peacekeeping preserves the status quo of a cold war; peacemaking ends the war. The two can look identical at a dinner table for years &mdash; until you notice that the peacekeeper&rsquo;s family has stopped telling the truth.",
      "The beatitude&rsquo;s promised title explains its logic: peacemakers &ldquo;shall be called sons of God&rdquo; because they resemble their Father, whose own peacemaking did not avoid the conflict but entered it &mdash; &ldquo;making peace by the blood of his cross&rdquo; (Col 1:20). God did not keep the peace with humanity by ignoring sin; he made peace by dealing with it, at infinite cost to himself. Every human act of true peacemaking &mdash; the hard conversation initiated, the apology offered first, the mediation patiently brokered &mdash; is a small family resemblance.",
      "Jesus builds the priority into worship itself: &ldquo;If you are offering your gift at the altar and there remember that your brother has something against you, leave your gift there before the altar and go. First be reconciled to your brother, and then come and offer your gift&rdquo; (Matt 5:23-24). Reconciliation outranks ritual. The discipline this beatitude demands is the opposite of conflict-avoidance: it is the courage to believe that a disturbed surface with truth underneath is closer to shalom than a smooth surface over a fracture.",
    ],
    callout: {
      label: "The difference",
      text: "A peacekeeper keeps the lid on; a peacemaker ends the war. Peacemakers are called sons of God because they resemble the Father &mdash; who made peace not by ignoring the conflict but by entering it, at the cross.",
    },
  },
  {
    badge: "2 Corinthians 5 &amp; Ephesians 2 — Reconciliation",
    title: "Christ Our Peace: The Broken Wall and the Ministry of Reconciliation",
    paragraphs: [
      "&ldquo;For he himself is our peace, who has made us both one and has broken down in his flesh the dividing wall of hostility&rdquo; (Eph 2:14). Paul is describing the bitterest division of his world &mdash; Jew and Gentile, kept apart by the literal barrier in the temple courts beyond which no Gentile could pass on pain of death. At the cross, Paul says, that wall came down: Christ &ldquo;create[d] in himself one new man in place of the two, so making peace&rdquo; (2:15) and &ldquo;reconcile[d] us both to God in one body through the cross, thereby killing the hostility&rdquo; (2:16). The gospel is not merely about individual souls finding peace with God; it is the demolition of humanity&rsquo;s oldest walls.",
      "Second Corinthians widens the lens to the whole mission of the church: &ldquo;God&hellip; through Christ reconciled us to himself and gave us the ministry of reconciliation; that is, in Christ God was reconciling the world to himself, not counting their trespasses against them, and entrusting to us the message of reconciliation&rdquo; (2 Cor 5:18-19). The reconciled are made reconcilers; the beneficiaries of the broken wall are deputized to break walls. &ldquo;We are ambassadors for Christ&rdquo; (5:20) &mdash; and an ambassador&rsquo;s whole job is to represent a government of peace inside contested territory.",
      "This is where the theology of peace becomes a job description. The church that knows Christ as its peace cannot remain neutral about racial hostility, class contempt, family estrangement, or congregational factions &mdash; every dividing wall still standing among the reconciled contradicts the cross that came down in Christ&rsquo;s flesh. The &ldquo;gospel of peace&rdquo; is the footwear of the armor of God (Eph 6:15): the good news travels on feet that move toward hostility carrying terms of peace. Evangelism and peacemaking are not two ministries; they are one ministry of reconciliation with two fronts.",
    ],
    callout: {
      label: "Ambassadors",
      text: "The reconciled are made reconcilers. Every dividing wall still standing among Christians contradicts the wall that came down in Christ&rsquo;s flesh &mdash; the gospel of peace travels on feet that move toward hostility carrying terms of peace.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Philippians 4 Exchange &mdash; Trading Anxiety for the Peace That Guards",
    summary:
      "A daily practice built directly on Philippians 4:6-7: converting each anxiety, as it arises, into a specific prayer with thanksgiving &mdash; and letting the peace of God take up sentry duty over heart and mind.",
    steps: [
      "Catch the anxiety while it is concrete. &ldquo;Do not be anxious about anything&rdquo; is workable only one thing at a time. Name the actual worry in a sentence &mdash; the bill, the scan, the conversation &mdash; rather than letting it stay a fog.",
      "Convert it into a request: &ldquo;by prayer and supplication&hellip; let your requests be made known to God&rdquo; (Phil 4:6). Ask for something specific. Anxiety rehearses; prayer requests. The grammatical shift from rumination to petition is the practice&rsquo;s hinge.",
      "Add thanksgiving before you finish &mdash; the verse&rsquo;s often-skipped ingredient. Thank God for two or three concrete things, including past faithfulness in the very area you are worried about. Gratitude reminds the heart that the One receiving the request has a record.",
      "Release the outcome explicitly: &ldquo;Father, this is now yours. I will do my part and leave the result with you.&rdquo; Some find it helps to open clenched hands while saying it &mdash; the body preaching to the soul.",
      "Repeat as often as the worry returns &mdash; without shame. The promise is not that anxiety never knocks again but that the peace of God &ldquo;will guard&rdquo; (4:7) &mdash; a sentry, standing watch, turning each returning worry back into the same exchange. Record the unrest, the practice, and the result in the Journal tab.",
    ],
    anchor: "Philippians 4:6-7 &mdash; &ldquo;Do not be anxious about anything&hellip; and the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.&rdquo;",
  },
  {
    number: "02",
    title: "The Altar Detour &mdash; Taking the First Step Toward Reconciliation",
    summary:
      "Jesus&rsquo; own protocol from Matthew 5:23-24: when you remember a breach, go &mdash; first, promptly, in person where possible &mdash; and seek to be reconciled. Peacemaking begins with whoever moves first, and Jesus assigns that role to you.",
    steps: [
      "Let worship surface the names. Jesus locates the remembering &ldquo;at the altar&rdquo; &mdash; prayer and worship are where the Spirit brings estranged faces to mind. When a name surfaces, do not file it; treat it as the assignment.",
      "Go first, regardless of fault. Strikingly, Matthew 5:23 addresses the one who is remembered against &mdash; &ldquo;your brother has something against you&rdquo; &mdash; and Matthew 18:15 addresses the one sinned against. Jesus closes every loophole: whichever side of the breach you are on, the first move is yours.",
      "Open with ownership, not accusation. Lead with the most honest sentence you can say about your own contribution &mdash; &ldquo;I was harsh, and I&rsquo;m sorry&rdquo; &mdash; without the word &ldquo;but.&rdquo; An apology with a &ldquo;but&rdquo; is a second argument wearing the first one&rsquo;s coat.",
      "Aim for reconciliation, not victory. The goal of the conversation is a restored relationship, not a signed confession from the other party. Say what was true, hear what they say, and leave the outcome free &mdash; &ldquo;so far as it depends on you&rdquo; (Rom 12:18) honestly admits the other person may not be ready.",
      "If direct contact is unwise or impossible &mdash; abuse, death, hard estrangement &mdash; do the work before God instead: write the unsendable letter, forgive from the heart, release the debt in prayer. Reconciliation takes two; the readiness to reconcile takes only one, and that one can be at peace.",
    ],
    anchor: "Matthew 5:24 &mdash; &ldquo;First be reconciled to your brother, and then come and offer your gift.&rdquo;",
  },
  {
    number: "03",
    title: "The Breath of Peace &mdash; A Short Prayer for the Moment Unrest Arrives",
    summary:
      "A portable practice for the spike of unrest &mdash; the email, the diagnosis, the slammed door: a breath-paced scriptural prayer that re-anchors the heart in who is in the boat before you respond to anything.",
    steps: [
      "Choose your verse-prayer in advance, while calm. Time-tested options: &ldquo;Peace! Be still&rdquo; (Mark 4:39); &ldquo;You keep him in perfect peace whose mind is stayed on you&rdquo; (Isa 26:3); &ldquo;My peace I give to you&rdquo; (John 14:27). One phrase, owned, beats ten phrases looked up.",
      "At the spike, pause before responding &mdash; even ten seconds. The unrest will demand an immediate reply, send, or counterattack; almost nothing actually requires one. The pause is where the umpire of Colossians 3:15 gets to make a call.",
      "Breathe the prayer slowly three or four times &mdash; one half of the phrase inhaling, the other exhaling: &ldquo;Peace&rdquo; (in), &ldquo;be still&rdquo; (out). The slow breath is not the peace; it is the runway. The Word carried on it is the peace.",
      "Name what you are entrusting: &ldquo;Lord &mdash; this meeting&rdquo;; &ldquo;Lord &mdash; my daughter.&rdquo; The single phrase keeps the prayer honest without re-opening the rumination.",
      "Then act &mdash; or deliberately don&rsquo;t. From the quieted place, decide the next right thing: reply, wait, apologize, ask for help. Peace is not the enemy of action; it is the condition for action that you will not have to repent of.",
    ],
    anchor: "Isaiah 26:3 &mdash; &ldquo;You keep him in perfect peace whose mind is stayed on you, because he trusts in you.&rdquo;",
  },
  {
    number: "04",
    title: "The Peace Audit &mdash; Mapping Where Shalom Is Missing",
    summary:
      "A monthly examination of the three dimensions of peace &mdash; with God, within, with others &mdash; locating the actual sites of unrest so that prayer and practice can be aimed instead of vague.",
    steps: [
      "Set aside thirty unhurried minutes with a notebook. Begin with two minutes of stillness and a single prayer: &ldquo;Search me, O God, and know my heart&hellip; and lead me in the way everlasting&rdquo; (Ps 139:23-24).",
      "Audit peace with God: is there unconfessed sin, a quarrel with his providence, a drift from prayer? Distinguish accusation from conviction &mdash; conviction is specific and leads to the cross; vague condemnation is not from God (Rom 8:1). Confess what is concrete and receive Romans 5:1 again: justified by faith, peace with God.",
      "Audit the peace of God: where does anxiety currently live &mdash; money, health, children, work, the news? List the top three by name. For each, note what you are doing with it: rehearsing it, medicating it, or praying it (Phil 4:6). Honesty here sets the agenda for Practice 01.",
      "Audit peace with others: walk through your households, friendships, church, and workplace, and list every relationship with a crack in it &mdash; open conflict, cold distance, avoided presence. Mark each one: mine to initiate (go), theirs to decide (release), or unsafe (entrust to God). The marked list is the agenda for Practice 02.",
      "Close by choosing one action in each dimension for the coming month &mdash; one confession, one anxiety to convert into prayer daily, one relationship to move toward. Record the audit&rsquo;s findings in the Journal tab so next month&rsquo;s audit can measure movement.",
    ],
    anchor: "Romans 12:18 &mdash; &ldquo;If possible, so far as it depends on you, live peaceably with all.&rdquo;",
  },
  {
    number: "05",
    title: "Releasing Control &mdash; The Discipline Behind a Quiet Heart",
    summary:
      "Much chronic unrest is unconfessed control: the conviction that outcomes depend on our vigilance. This practice trains the deliberate, repeated handover of what was never ours to carry &mdash; the inner posture of Psalm 131.",
    steps: [
      "Identify your vigilance projects &mdash; the outcomes you monitor as if monitoring secured them: a child&rsquo;s faith, a job decision, another person&rsquo;s opinion of you, the country&rsquo;s direction. Write down the two or three you check on, mentally or literally, every day.",
      "For each, separate the assignment from the outcome. You may be assigned to pray, speak once, work faithfully, love consistently; you are never assigned to guarantee results. Write each project in two columns: &ldquo;mine to do&rdquo; and &ldquo;God&rsquo;s to decide.&rdquo; Most unrest lives in column two.",
      "Build a daily handover ritual &mdash; brief and physical. Each morning, name the projects one by one with open hands: &ldquo;Father, I hand you ___ again. I will do my part today. The outcome is yours.&rdquo; Expect to take some of them back by noon; hand them over again. The repetition is the training, not the failure of it.",
      "Practice the weaned-child posture of Psalm 131: &ldquo;I do not occupy myself with things too great and too marvelous for me. But I have calmed and quieted my soul.&rdquo; When you catch yourself managing the unmanageable &mdash; rereading the text thread, gaming out conversations &mdash; say the verse and put the project back in God&rsquo;s column.",
      "Watch for the fruit the tradition promises: not passivity but freed energy. The person who stops guaranteeing outcomes has surprising capacity for the actual assignments &mdash; and sleeps, like the one in the stern of the boat, through weather that used to keep them up.",
    ],
    anchor: "Psalm 131:1-2 &mdash; &ldquo;I do not occupy myself with things too great and too marvelous for me. But I have calmed and quieted my soul.&rdquo;",
  },
  {
    number: "06",
    title: "Seeking the Shalom of the City &mdash; Peacemaking Beyond Your Own Walls",
    summary:
      "A communal practice from Jeremiah 29:7: extending peace outward &mdash; into the neighborhood, the church&rsquo;s fractures, and the community&rsquo;s conflicts &mdash; as ambassadors of the reconciliation we have received.",
    steps: [
      "Adopt your actual place. Jeremiah told exiles to seek the shalom of Babylon &mdash; not the city they would have chosen. Name your street, building, workplace, school: this is the parish of your peacemaking, chosen for you by providence.",
      "Pray for it by name &mdash; &ldquo;pray to the LORD on its behalf&rdquo; (Jer 29:7). Walk the street occasionally and pray for the households you pass; pray for the difficult colleague, the contentious board, the divided congregation. Intercession is peacemaking&rsquo;s first and most neglected act.",
      "Move toward one standing hostility as a third party. Most communities have cold wars everyone manages around &mdash; the estranged members, the feuding families, the polarized factions. Where you have standing and trust, take the peacemaker&rsquo;s risk: listen to both sides separately, refuse to carry ammunition between them, and ask each whether they would be willing to talk.",
      "Practice peace in your speech about absent people. Much war is logistics &mdash; supplied by gossip, retweets, and repeated grievances. A simple discipline: say nothing about an absent person you have not said, or would not say, to them. Cutting the supply lines is unglamorous peacemaking that anyone can do today.",
      "Tie every effort to its source. The ministry of reconciliation is &ldquo;through Christ&rdquo; (2 Cor 5:18) &mdash; sustained by worship, honest about limits, free of messiah complexes. You are an ambassador, not the Prince; deliver the terms of peace and leave the treaty&rsquo;s timing to him.",
    ],
    anchor: "Jeremiah 29:7 &mdash; &ldquo;Seek the welfare of the city where I have sent you into exile, and pray to the LORD on its behalf, for in its welfare you will find your welfare.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Cornelius Plantinga Jr.",
    role: "Not the Way It&rsquo;s Supposed to Be &mdash; Shalom and Its Vandalism",
    quote:
      "The webbing together of God, humans, and all creation in justice, fulfillment, and delight is what the Hebrew prophets call shalom. We call it peace, but it means far more than mere peace of mind or a cease-fire between enemies. In the Bible, shalom means universal flourishing, wholeness, and delight&hellip; Shalom, in other words, is the way things ought to be.",
    bio: "Cornelius Plantinga Jr. (b. 1946) is a Reformed theologian, former president of Calvin Theological Seminary, and the author of Not the Way It&rsquo;s Supposed to Be: A Breviary of Sin (1995), a book that did something almost no modern theology book does: it made the doctrine of sin illuminating rather than merely accusing &mdash; and it did so by defining sin against the backdrop of shalom. Plantinga&rsquo;s now-classic formulation runs in two movements. First, shalom: the webbing together of God, humans, and all creation in justice, fulfillment, and delight &mdash; universal flourishing, the way things ought to be. Then sin: &ldquo;culpable shalom-breaking,&rdquo; the vandalism of shalom &mdash; any act, structure, or habit that tears the webbing. The definition has quietly reshaped how a generation of pastors and teachers talk about both peace and evil: peace is not a private mood but the fabric of a rightly ordered world, and every lie, betrayal, injustice, and cruelty is a slash in that fabric. Plantinga&rsquo;s gift to the theology of peace is the restoration of its size. If shalom is the way things ought to be, then the pursuit of peace is not a soft elective for the conflict-averse; it is participation in God&rsquo;s restoration of everything &mdash; and the gospel is the announcement that the chief Vandal-damage has been repaired at the cross, with the rest of the mending under way.",
  },
  {
    name: "John Paul Lederach",
    role: "The Moral Imagination; The Journey Toward Reconciliation &mdash; Christian Peacebuilding",
    quote:
      "The moral imagination requires the capacity to imagine ourselves in a web of relationships that includes our enemies; the ability to sustain a paradoxical curiosity that embraces complexity without reliance on dualistic polarity; the fundamental belief in and pursuit of the creative act; and the acceptance of the inherent risk of stepping into the mystery of the unknown that lies beyond the far too familiar landscape of violence.",
    bio: "John Paul Lederach (b. 1955) is a Mennonite scholar-practitioner widely regarded as one of the founders of the modern field of conflict transformation, professor emeritus of international peacebuilding at the University of Notre Dame, and a mediator with decades of work in some of the world&rsquo;s most intractable conflicts &mdash; Nicaragua, Colombia, Northern Ireland, Nepal, the Philippines, the Horn of Africa. Raised in the Anabaptist peace tradition and shaped by its conviction that peacemaking is not a specialty but the church&rsquo;s ordinary obedience, Lederach transformed the practice of mediation by insisting that peace is built, not signed: agreements between elites fail unless reconciliation grows in the relationships, communities, and generations beneath them &mdash; what he called the slow, organic work of cultivating constituencies of peace. His book The Moral Imagination argues that breaking cycles of violence requires a creative act akin to art: the capacity to imagine the web of relationships that includes one&rsquo;s enemies and to risk the unknown beyond violence&rsquo;s familiar landscape. His more devotional work, The Journey Toward Reconciliation, roots it all explicitly in the gospel &mdash; in the God who in Christ moved toward enemies. For the ordinary believer, Lederach&rsquo;s witness translates directly: peace is not the absence of tension achieved by avoidance but a web of right relationship built patiently, creatively, and at personal risk &mdash; in living rooms as truly as in war zones.",
  },
  {
    name: "Desmond Tutu",
    role: "Archbishop of Cape Town; No Future Without Forgiveness &mdash; Truth, Reconciliation, and Ubuntu",
    quote:
      "Forgiving and being reconciled are not about pretending that things are other than they are. It is not patting one another on the back and turning a blind eye to the wrong. True reconciliation exposes the awfulness, the abuse, the pain, the degradation, the truth. It could even sometimes make things worse. It is a risky undertaking, but in the end it is worthwhile, because in the end dealing with the real situation helps to bring real healing.",
    bio: "Desmond Tutu (1931-2021) was the Anglican Archbishop of Cape Town, Nobel Peace laureate (1984), and the moral voice of South Africa&rsquo;s struggle against apartheid &mdash; and then, more remarkably still, of its peace. When the apartheid regime fell, the question was whether the nation would drown in the vengeance its history had earned; Tutu&rsquo;s answer, as chair of the Truth and Reconciliation Commission, became one of history&rsquo;s great experiments in public peacemaking: amnesty in exchange for full truth, victims&rsquo; stories heard and honored, the national wound exposed to the air rather than sealed over septic. His book No Future Without Forgiveness distilled the theology underneath: reconciliation is not pretending; cheap peace that skips truth is no peace at all; and forgiveness is not sentimentality but the only door out of the prison that locks victim and perpetrator together. Tutu grounded it in the African concept of ubuntu &mdash; a person is a person through other persons; my humanity is bound up in yours &mdash; which he read as a cultural echo of the gospel&rsquo;s one new humanity. He laughed easily, wept openly, and enraged every side at some point, because his peacemaking refused all tribal membership. His witness stands as the modern era&rsquo;s clearest demonstration that Matthew 5:9 can operate at the scale of nations: the peacemakers are called children of God, and sometimes they are given a country to prove it.",
  },
  {
    name: "Menno Simons",
    role: "Anabaptist Reformer &mdash; The Church of the Defenseless",
    quote:
      "The regenerated do not go to war, nor engage in strife. They are the children of peace who have beaten their swords into plowshares and their spears into pruning hooks, and know of no war&hellip; Spears and swords of iron we leave to those who, alas, regard human blood and swine&rsquo;s blood about alike.",
    bio: "Menno Simons (1496-1561) was a Dutch Catholic priest who, after years of private doubt about the doctrines he was paid to teach, cast his lot in 1536 with the most hunted people in Europe: the Anabaptists, the radical wing of the Reformation whose insistence on believer&rsquo;s baptism and a free church made them outlaws to Catholic and Protestant authorities alike. The movement Menno inherited was traumatized and discredited &mdash; the violent Anabaptist takeover of M&uuml;nster had ended in catastrophe in 1535 &mdash; and his life&rsquo;s work was to gather the scattered survivors around a wholly different vision: a church of the defenseless (wehrlos), committed to nonresistance because its Lord had renounced the sword, blessed the peacemakers, and conquered by dying. For twenty-five years he pastored underground congregations with a price on his head, writing constantly; those who sheltered him were sometimes executed for it. The communities he stabilized &mdash; eventually called Mennonites &mdash; carried the peace-church conviction through centuries of persecution, migration, and martyrdom, preserving a testimony the wider church repeatedly forgot: that peace is not one of Christianity&rsquo;s moods but one of its marks, and that the church serves the world not by wielding its swords but by showing it a people who have beaten theirs into plowshares. The modern Christian peace tradition &mdash; from conscientious objection to the peacebuilding of Lederach &mdash; runs directly through this hunted pastor&rsquo;s flock.",
  },
  {
    name: "Thomas à Kempis",
    role: "The Imitation of Christ &mdash; First Keep Peace Within Yourself",
    quote:
      "First keep peace with yourself; then you will be able to bring peace to others. A peaceful man does more good than a learned man&hellip; He who is at peace is not suspicious of anyone. But he who is tense and agitated becomes the victim of countless suspicions: he is never at peace with himself, nor does he permit others to be at peace.",
    bio: "Thomas &agrave; Kempis (c. 1380-1471) was a monk of the Augustinian congregation of Mount St. Agnes in the Netherlands and a son of the Devotio Moderna, the lay renewal movement of the late Middle Ages that prized inner devotion over scholastic display. He spent some seventy years inside one monastery &mdash; copying Scripture by hand, directing novices, and writing the small book that became, after the Bible itself, perhaps the most widely read text in Christian history: The Imitation of Christ. The Imitation&rsquo;s teaching on peace is bracingly diagnostic. Peace, Thomas insists, is an inside-out affair: the agitated man exports his agitation everywhere, projecting suspicion onto innocent faces and disturbing every room he enters, while the man at peace with God does more good than the learned &mdash; because peace, unlike learning, is contagious. His counsel anticipates by five centuries what modern psychology calls emotional reactivity: we are not, he observes, made peaceful by the absence of difficult people; we carry our unpeace with us and find it confirmed wherever we go. The remedy is the book&rsquo;s single theme &mdash; the patient conformity of the will to Christ in humility, surrendered desire, and quiet trust. For this guide&rsquo;s purposes, Thomas guards the gate of the whole subject: attempts to make peace with others while at war within end by exporting the war. First keep peace within yourself &mdash; then you have something to give.",
  },
  {
    name: "Tim Keller",
    role: "Founding Pastor, Redeemer Presbyterian Church &mdash; Peace from the Gospel Outward",
    quote:
      "The peace of God is not the absence of negative thoughts and feelings; it is the presence of a Person. The way you get peace is not by trying to control your circumstances or by emptying your mind, but by filling your mind with the knowledge of what God has done for you in Jesus Christ &mdash; until your heart says, &lsquo;If he did that for me, he will not abandon me now.&rsquo;",
    bio: "Timothy Keller (1950-2023) was the founding pastor of Redeemer Presbyterian Church in Manhattan, which he planted in 1989 against every demographic prediction and grew into a congregation of thousands of young urban professionals &mdash; and through books such as The Reason for God, Counterfeit Gods, and Walking with God through Pain and Suffering, he became one of the most influential Christian communicators of his generation. Keller&rsquo;s teaching on peace bears his signature method: locate the human strategy, show its futility, and trace the gospel&rsquo;s better answer. Anxiety, he taught, is theologically informative &mdash; a map of our functional saviors: we are most anxious where we have located our significance and security in something that can be taken away. The world&rsquo;s peace strategies (control the circumstances, lower the expectations, numb the feelings) all fail because they leave the idol on its throne. Gospel peace works differently: it argues with the heart from the cross &mdash; the reasoning of Romans 8:32, that the God who did not spare his own Son will not abandon us in lesser things &mdash; until the heart actually believes it. Keller preached this peace through his own years of pancreatic cancer with a transparency that became its own argument; his final public reflections on dying displayed the unanxious hope his sermons had described for decades. His enduring counsel on unrest: do not merely manage the symptom; ask what the anxiety is telling you that you worship, and bring that to the only Savior who cannot be taken away.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "John 14:27",
    text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.",
    reflection:
      "Spoken on the night of his arrest &mdash; the bequest of a man hours from the cross. The peace Jesus gives is his own: the Son&rsquo;s settled communion with the Father, carried into the storm rather than around it. &ldquo;Not as the world gives&rdquo; is the dividing line: the world&rsquo;s peace is circumstantial and must be anxiously defended; Christ&rsquo;s is sourced upstream of circumstances. And the gift carries a command &mdash; the troubled heart must be talked out of its panic and into the will.",
  },
  {
    reference: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection:
      "The Bible&rsquo;s most practical anxiety text, written from a Roman prison. The exchange is precise: anything (no anxiety exempt), everything (no request too small), thanksgiving (the skipped ingredient), and then the promise &mdash; not that circumstances will resolve, but that peace will stand sentry over heart and mind. The peace surpasses understanding because it does not come from understanding; it guards the believer who cannot yet see how things work out.",
  },
  {
    reference: "Romans 5:1",
    text: "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ.",
    reflection:
      "The foundation of every other peace. This is not a feeling but a fact &mdash; the legal end of hostilities between the holy God and the sinner, secured at the cross, received by faith, and unchanged by your worst morning. Felt peace fluctuates; this peace does not. The believer&rsquo;s practice in unrest always begins here: not climbing toward peace with God but standing on it, and letting the felt peace grow from the fact.",
  },
  {
    reference: "Colossians 3:15",
    text: "And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful.",
    reflection:
      "The verb means to act as umpire &mdash; Christ&rsquo;s peace officiating in the heart, calling decisions between competing impulses. The context is communal: surrounded by commands to bear with, forgive, and put on love, the umpire&rsquo;s chief jurisdiction is relationships in the body. The practice is noticing: when peace leaves &mdash; after the sharp word, during the nursed grudge &mdash; that is the whistle. Stop play. And the closing note is no afterthought: gratitude is the atmosphere in which the umpire can be heard.",
  },
  {
    reference: "Isaiah 26:3",
    text: "You keep him in perfect peace whose mind is stayed on you, because he trusts in you.",
    reflection:
      "The Hebrew doubles the word: shalom shalom &mdash; peace, peace, perfect peace. The promise has a mechanism: the kept peace belongs to the stayed mind, the attention leaned on God rather than on the threat. This is the verse&rsquo;s quiet realism about attention: the mind will be stayed on something, and what it is stayed on will set the heart&rsquo;s weather. Trust is not a feeling summoned from nowhere; it is where the mind chooses, again and again, to rest.",
  },
  {
    reference: "Matthew 5:9",
    text: "Blessed are the peacemakers, for they shall be called sons of God.",
    reflection:
      "Makers, not keepers. The beatitude blesses the active work &mdash; naming the breach, moving toward the conflict, absorbing the cost of reconciliation &mdash; and its promised title gives the reason: peacemakers resemble their Father, who made peace by the blood of his cross rather than by ignoring the war. The verse permanently distinguishes a smooth surface over a fracture from actual shalom &mdash; and calls the children of God to the costlier of the two.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "9P5H9S5fvjk", title: "Shalom &mdash; The Bible&rsquo;s Vision of Wholeness and Flourishing" },
  { videoId: "JU0cdEnLPhM", title: "Not as the World Gives &mdash; The Peace of John 14:27" },
  { videoId: "xrUWds4Ad3o", title: "The Prince of Peace &mdash; Isaiah&rsquo;s Child Born into Darkness" },
  { videoId: "qN3wbY4hPjE", title: "Peace with God, the Peace of God &mdash; The Three Dimensions" },
  { videoId: "K8cZ2xDpQrM", title: "Asleep in the Storm &mdash; Peace Amid Chaos in Mark 4" },
  { videoId: "2vW4qFt9bXc", title: "Blessed Are the Peacemakers &mdash; Reconciliation as Ministry" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianPeaceGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<PCEEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [theUnrest, setTheUnrest] = useState("");
  const [thePeacePracticed, setThePeacePracticed] = useState("");
  const [theResult, setTheResult] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as PCEEntry[]);
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
    if (!theUnrest.trim() || !thePeacePracticed.trim()) return;
    const entry: PCEEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      theUnrest: theUnrest.trim(),
      thePeacePracticed: thePeacePracticed.trim(),
      theResult: theResult.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setTheUnrest("");
    setThePeacePracticed("");
    setTheResult("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? TEAL : BORDER}`,
    background: active ? "rgba(13, 148, 136, 0.12)" : "transparent",
    color: active ? TEAL : MUTED,
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
    color: TEAL,
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
                color: TEAL,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Shalom &amp; the Quieted Heart
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Peace: Not as the World Gives
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The Bible&rsquo;s peace is bigger than calm &mdash; shalom is wholeness, every
              relationship rightly woven, nothing missing and nothing broken. This guide traces the
              theology of peace from the Hebrew vision and the bequest of John 14:27 through the
              Prince of Peace, the three dimensions of Romans 5, Philippians 4, and Romans 12, Jesus
              asleep in the storm, and the ministry of reconciliation &mdash; and builds the
              practices by which an anxious heart learns to let the peace of Christ rule.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${TEAL}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Peace I leave with you; my peace I give to you. Not as the world gives do I
                give to you. Let not your hearts be troubled, neither let them be afraid.&rdquo;
              </p>
              <p style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600 }}>John 14:27</p>
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
                Eight studies in the theology of peace &mdash; from shalom as wholeness and the
                bequest of the departing Christ, through the Prince of Peace and the three dimensions
                of biblical peace, to Jesus asleep in the storm, the umpire of Colossians 3:15, the
                seventh beatitude&rsquo;s peacemakers, and the broken dividing wall of the gospel of
                reconciliation.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: TEAL,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                    dangerouslySetInnerHTML={{ __html: section.badge }}
                  />
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
                        background: "rgba(13, 148, 136, 0.07)",
                        border: "1px solid rgba(13, 148, 136, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: TEAL,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Peace in Scripture is a Person before it is a feeling, a fact before it is an
                  experience, and a ministry before it is a mood &mdash; shalom flowing from the
                  cross outward through quieted hearts into a fractured world. Go deeper into the
                  anxious heart&rsquo;s healing in the{" "}
                  <Link href="/christian-anxiety-guide" style={{ color: TEAL, textDecoration: "underline" }}>
                    Christian Anxiety Guide
                  </Link>
                  , learn the work of releasing offenses in the{" "}
                  <Link href="/forgiveness-guide" style={{ color: TEAL, textDecoration: "underline" }}>
                    Forgiveness Guide
                  </Link>
                  , or study peace among the Spirit&rsquo;s graces in{" "}
                  <Link href="/fruit-of-the-spirit" style={{ color: TEAL, textDecoration: "underline" }}>
                    Fruit of the Spirit
                  </Link>
                  .
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six practices for a heart learning peace &mdash; the Philippians 4 exchange, the
                altar detour of first-step reconciliation, the breath prayer for the moment unrest
                arrives, the monthly peace audit, the discipline of releasing control, and seeking
                the shalom of the city. Peace is grace before it is discipline &mdash; but it does
                not bypass the disciplines.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: TEAL,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2
                      style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}
                      dangerouslySetInnerHTML={{ __html: practice.title }}
                    />
                  </div>
                  <p
                    style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}
                    dangerouslySetInnerHTML={{ __html: practice.summary }}
                  />
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
                      <li
                        key={i}
                        style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: TEAL,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about partial peace
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Almost no act of peacemaking resolves everything at once. The anxiety quiets and
                  returns; the apology is offered and received coolly; the handover of control lasts
                  until noon. This is not failure &mdash; it is how peace is actually built: in
                  repetitions, partial gains, and faithfulness that outlasts setbacks. The Journal
                  tab asks for &ldquo;what happened &mdash; even partially&rdquo; for exactly this
                  reason: the half-degree of warming in a cold relationship, the night of real sleep
                  after weeks of unrest, the meeting survived without the spike &mdash; these are
                  the entries that, read back over months, prove the Prince of Peace has been at
                  work all along.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses to the peace of Christ &mdash; Plantinga&rsquo;s vandalized shalom,
                Lederach&rsquo;s moral imagination, Tutu&rsquo;s truth-telling reconciliation, Menno
                Simons&rsquo; church of the defenseless, Thomas &agrave; Kempis&rsquo; peace kept
                first within, and Keller&rsquo;s gospel argument against anxiety. Each insists that
                peace is costlier &mdash; and far larger &mdash; than calm.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
                  <div
                    style={{
                      color: TEAL,
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
                      background: "rgba(13, 148, 136, 0.06)",
                      borderLeft: `3px solid ${TEAL}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: voice.quote }} />
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
                Six passages that form the biblical theology of peace &mdash; the bequest of John
                14:27, the exchange of Philippians 4, the foundation of Romans 5:1, the umpire of
                Colossians 3:15, the stayed mind of Isaiah 26:3, and the blessed peacemakers of
                Matthew 5:9. Read one per week alongside the Journal practice.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: TEAL,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Pray these passages toward your actual unrest, not in the abstract. Bring one
                  current anxiety or one fractured relationship to the text, read the passage slowly
                  aloud, and let it interrogate the situation: who is in the boat? what is the mind
                  stayed on? what would the first step toward that person be? Then turn the
                  verse&rsquo;s promise into a request and its command into an intention &mdash;
                  &ldquo;Lord, guard my heart tonight&rdquo;; &ldquo;Lord, I will go first.&rdquo;
                  The texts are not descriptions of a peace you lack but instruments of the peace
                  Christ is giving.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields for the honest record of a peace practice &mdash; the unrest you faced,
                the peace practice you tried, and what happened, even partially. Entries are stored
                privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New peace entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="pce-unrest" style={labelStyle}>
                    The unrest &mdash; where peace is missing
                  </label>
                  <textarea
                    id="pce-unrest"
                    value={theUnrest}
                    onChange={(e) => setTheUnrest(e.target.value)}
                    placeholder="The 3 a.m. worry, the cold war with my brother, the dread before the meeting..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="pce-practiced" style={labelStyle}>
                    The peace practice I tried &mdash; prayer, reconciliation step, releasing control
                  </label>
                  <textarea
                    id="pce-practiced"
                    value={thePeacePracticed}
                    onChange={(e) => setThePeacePracticed(e.target.value)}
                    placeholder="Converted the worry into a request with thanksgiving. Sent the first text. Opened my hands and handed the outcome over — twice..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="pce-result" style={labelStyle}>
                    What happened &mdash; even partially
                  </label>
                  <textarea
                    id="pce-result"
                    value={theResult}
                    onChange={(e) => setTheResult(e.target.value)}
                    placeholder="Slept through the night. The reply was cool but the door is open. The spike came and passed without taking me with it..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!theUnrest.trim() || !thePeacePracticed.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !theUnrest.trim() || !thePeacePracticed.trim() ? BORDER : TEAL,
                    color: !theUnrest.trim() || !thePeacePracticed.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !theUnrest.trim() || !thePeacePracticed.trim() ? "not-allowed" : "pointer",
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
                      Name the unrest, try one peace practice, and record what happened &mdash; even
                      partially. Over weeks, these entries become the evidence the practices promise:
                      anxieties converted to prayers, first steps taken toward cold relationships, and
                      the slow proof that the peace of Christ really does stand guard.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry) => (
                      <article key={entry.id} style={cardStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            marginBottom: 10,
                          }}
                        >
                          <span style={{ color: TEAL, fontSize: "0.82rem", fontWeight: 700 }}>
                            {entry.date}
                          </span>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry from ${entry.date}`}
                            style={{
                              background: "transparent",
                              border: `1px solid ${BORDER}`,
                              color: MUTED,
                              borderRadius: 6,
                              padding: "0.3rem 0.75rem",
                              fontSize: "0.78rem",
                              cursor: "pointer",
                              flexShrink: 0,
                            }}
                          >
                            Delete
                          </button>
                        </div>

                        <div style={{ marginBottom: 10 }}>
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
                            The unrest
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theUnrest}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.theResult ? 10 : 0 }}>
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
                            The peace practiced
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.thePeacePracticed}
                          </p>
                        </div>

                        {entry.theResult && (
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
                              What happened
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.theResult}
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
                Teaching on the peace of Christ &mdash; shalom and wholeness, John 14:27, the Prince
                of Peace, the three dimensions of biblical peace, the stilled storm of Mark 4, and
                the ministry of the peacemakers. Good companions to the Theology and Practices tabs.
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
                      <h3
                        style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}
                        dangerouslySetInnerHTML={{ __html: video.title }}
                      />
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
              The peace that goes first
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The promise of the whole tradition &mdash; from the priestly blessing to the upper
              room, from the stilled sea to the broken dividing wall &mdash; is that peace is not
              the prize at the end of perfectly managed circumstances but a Person who enters
              unmanaged ones. He sleeps in the stern of your storm; he wills you his own peace on
              the worst night of history; he makes you, reconciled, into a reconciler. The unrest
              will return tomorrow with new material. So will the practices &mdash; and behind the
              practices, the Prince, whose government of peace will know no end.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: quiet the anxious heart in the{" "}
              <Link href="/christian-anxiety-guide" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Anxiety Guide
              </Link>
              , learn the rhythms of ceasing in the{" "}
              <Link href="/christian-rest-guide" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Rest Guide
              </Link>
              , or take the next step toward a fractured relationship with the{" "}
              <Link href="/forgiveness-guide" style={{ color: TEAL, textDecoration: "underline" }}>
                Forgiveness Guide
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
