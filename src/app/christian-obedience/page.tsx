"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";

const STORAGE_KEY = "vine_christianobedience_entries";

interface OBDEntry {
  id: string;
  date: string;
  commandObeyed: string;
  theCost: string;
  theBlessing: string;
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
    badge: "John 14:15",
    title: "&ldquo;If You Love Me, Keep My Commandments&rdquo; — Love as the Root of Obedience",
    paragraphs: [
      "When Jesus gathers his disciples in the upper room on the night of his arrest, he gives them a sentence that reorders the entire grammar of obedience: &ldquo;If you love me, keep my commandments&rdquo; (John 14:15). The syntax is everything. He does not say, &ldquo;If you keep my commandments, I will love you,&rdquo; nor &ldquo;Keep my commandments in order to earn my love.&rdquo; He places love first — as the root, not the reward. Obedience is not the cause of love but the fruit of it. The person who keeps Jesus&rsquo;s commands is not thereby earning anything; they are expressing what is already in them.",
      "This reversal has enormous consequences for how Christians understand the moral life. Law, in both its ancient and modern forms, typically operates on the model of obligation: do this and live, or do this to avoid punishment. Jesus does not abolish law — he fulfills it, and in fulfilling it he relocates its power source. The Pharisee obeyed to justify himself before God; the disciple obeys because they love the one who commands. The commands are the same; the motivation that animates them is entirely different. One obedience is the anxious performance of a debtor; the other is the glad response of a lover.",
      "Augustine&rsquo;s famous line — &ldquo;Love God and do what you will&rdquo; — is the bold expression of this principle: a soul properly ordered in its love will, as a natural consequence, obey the one it loves. The problem of disobedience is always, at its root, a problem of love — love misdirected, love cooled, love replaced by fear or pride or the love of something less than God. The cure for disobedience is not more rules or stricter enforcement but the recovery of first love, the rekindling of the affection that makes obedience not a burden but an expression of who you are.",
    ],
    callout: {
      label: "The principle",
      text: "Obedience is not the cause of love between the disciple and Christ; it is the consequence of it. The grammar of John 14:15 is decisive: love first, then keeping. You obey because you love, not in order to be loved.",
    },
  },
  {
    badge: "Genesis 22",
    title: "Abraham&rsquo;s Obedience — &ldquo;Against All Hope&rdquo;",
    paragraphs: [
      "The binding of Isaac in Genesis 22 is the most searching test of obedience in the Old Testament, and perhaps in all of Scripture. God commands Abraham to take his son — the son of promise, the child through whom all the nations of the earth were to be blessed, the one for whom Abraham had waited twenty-five years — and offer him as a burnt offering on Mount Moriah. The command contradicts everything God had previously said and everything Abraham most deeply desired. It is irrational, heartbreaking, and appears to reverse God&rsquo;s own purposes.",
      "Abraham obeys immediately. Genesis 22:3 reports, without drama: &ldquo;So Abraham rose early in the morning, saddled his donkey, and took two of his young men with him, and his son Isaac. And he cut the wood for the burnt offering and arose and went to the place of which God had told him.&rdquo; The early rising is a detail the text seems to emphasize: he does not delay, he does not negotiate, he does not first check with Sarah. He goes. And when Isaac asks where the lamb is, Abraham says, &ldquo;God will provide for himself the lamb for a burnt offering, my son&rdquo; — a statement of faith so large that the author of Hebrews says Abraham &ldquo;considered that God was able even to raise him from the dead&rdquo; (Heb 11:19).",
      "Paul reads Abraham&rsquo;s obedience as the paradigm of faith that &ldquo;hopes against hope&rdquo; (Rom 4:18). The faith that obeys when it cannot see the outcome, that trusts the character of the God who commands even when the command makes no immediate sense, is the faith that pleases God and receives the promise. Abraham is called the father of faith not because he understood everything but because he obeyed in the dark, trusting that the God of promise could be trusted even when his methods were incomprehensible.",
    ],
  },
  {
    badge: "Philippians 2:8 / Hebrews 5:8",
    title: "The Obedience of Christ — Our Template",
    paragraphs: [
      "If Abraham is the paradigm of faithful obedience in the Old Testament, Christ is its fulfillment and perfection in the New. Paul&rsquo;s great hymn in Philippians 2:5-11 traces the arc of the incarnation as an act of voluntary self-emptying that culminates in a specific word: &ldquo;He humbled himself by becoming obedient to the point of death, even death on a cross&rdquo; (v. 8). The obedience is comprehensive — to the point of death — and its object is the Father&rsquo;s will, not human opinion or religious convention. Jesus obeyed the Father even when obedience led to Gethsemane and Golgotha.",
      "The author of Hebrews adds a dimension that astonishes many readers: &ldquo;Although he was a son, he learned obedience through what he suffered&rdquo; (Heb 5:8). The Son of God learned obedience. Not because he was disobedient and had to be corrected — but because obedience in the full human sense requires a will that has been tested, a love that has been pressed against the cost and held firm. Jesus&rsquo;s obedience was real obedience, not play-acting; it cost him something at every step of his earthly life and infinitely at its end.",
      "This means that when a Christian is called to difficult obedience — obedience that costs something, obedience in the dark, obedience that leads to suffering rather than vindication — they are not walking a path the Lord does not know. They are walking his path. He is not a high priest who cannot sympathize with our weakness in obedience; he was tested in every way (Heb 4:15), and the testing cost him more than it costs us. The template he offers is not a comfortable pattern but a cruciform one: learn obedience through what you suffer, and trust the Father who raised from the dead the Son who obeyed him.",
    ],
    callout: {
      label: "The template",
      text: "Christ&rsquo;s obedience is not merely a moral example — it is our salvation (Rom 5:19). And it is the pattern: he learned obedience through suffering, so we will too. The cross-shaped path of obedience is the only path Jesus walked, and it is the one he calls his followers to take up daily.",
    },
  },
  {
    badge: "Obedience vs. Legalism",
    title: "Why Obedience Is Not Legalism — Debt vs. Love",
    paragraphs: [
      "The confusion between obedience and legalism is one of the most damaging in Christian life. When people hear &ldquo;you must obey God&rsquo;s commands,&rdquo; many hear what legalism actually teaches: that obedience earns favor, that performance generates standing before God, that your moral record is the basis of your acceptance. This is the theology of the elder brother in Luke 15 — &ldquo;I have obeyed your commands all these years&rdquo; — and Jesus names it as a form of spiritual bondage, not freedom.",
      "But the antidote to legalism is not antinomianism — the idea that grace means the commands no longer apply. Paul addresses this directly in Romans 6:1: &ldquo;Are we to continue in sin that grace may abound? By no means!&rdquo; Grace does not abolish the commands; it changes the basis on which you approach them. The legalist obeys to earn standing; the child of grace obeys because they have standing already — because the Father has run to them, put the robe on them, called for the feast. The obedience that flows from that acceptance is entirely different in quality, motivation, and sustainability from the obedience that generates the acceptance.",
      "Dietrich Bonhoeffer&rsquo;s concept of &ldquo;costly grace&rdquo; is the relevant corrective here. Cheap grace divorces grace from discipleship and produces a Christianity of beliefs without obedience; costly grace holds them together and recognizes that the grace that does not cost us anything probably did not come from the cross. Obedience is not the condition of grace; it is the shape that grace takes in a life. The difference between obedience-as-debt and obedience-as-love is not just theological — it is experiential, structural, and visible in how a person relates to difficult commands.",
    ],
  },
  {
    badge: "1 Samuel 15",
    title: "Delayed Obedience Is Disobedience — Saul&rsquo;s Partial Obedience",
    paragraphs: [
      "In 1 Samuel 15, God commands Saul through Samuel to utterly destroy the Amalekites: their people, their livestock, everything. Saul goes to war, defeats the Amalekites — and then keeps King Agag alive and spares the best of the sheep and cattle. When Samuel arrives, Saul greets him with: &ldquo;I have performed the commandment of the LORD&rdquo; (v. 13). The gap between what Saul says and what he has done is painful to read. He has obeyed in outline while disobeying in substance, and he has convinced himself that his partial obedience is full obedience.",
      "Samuel&rsquo;s rebuke is one of the most famous in Scripture: &ldquo;Has the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to listen than the fat of rams. For rebellion is as the sin of divination, and presumption is as iniquity and idolatry&rdquo; (vv. 22-23). Saul had substituted religious performance — the sacrifice of the kept animals — for the actual obedience God commanded. He thought his modification was justified; Samuel makes clear it was rebellion.",
      "Partial obedience is a universal temptation because it allows us to feel obedient while retaining control over the part of the command we most dislike. We obey the easy commands and exempt ourselves from the hard ones; we obey publicly and hold back privately; we comply with the letter while violating the spirit. The story of Saul names this tendency and refuses to call it obedience. God&rsquo;s response to Saul — &ldquo;Because you have rejected the word of the LORD, he has also rejected you from being king&rdquo; (v. 23) — is severe precisely because so much was at stake and so little modification had seemed, to Saul, like anything serious.",
    ],
  },
  {
    badge: "Tithing / Enemies / Parents",
    title: "The Blessing Hidden in Hard Commands",
    paragraphs: [
      "Some of God&rsquo;s commands are hard not because they are morally ambiguous but because they run directly against the grain of our instincts and the logic of the world. Three stand out as tests of whether we actually trust the God who commands: tithing (Mal 3:10 — &ldquo;Bring the full tithe into the storehouse... and thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you and pour down for you a blessing&rdquo;), forgiving enemies (Matt 5:44 — &ldquo;Love your enemies and pray for those who persecute you&rdquo;), and honoring difficult parents (Ex 20:12 — a command with a promise attached: &ldquo;that your days may be long in the land&rdquo;).",
      "Each of these commands asks something that the natural self resists: to give money you feel you cannot spare, to extend love and blessing to people who have hurt you, to honor parents whose behavior may have been harmful. Each commands what seems like vulnerability and asks you to trust that the God who commands has access to resources and dynamics you cannot see. And each has a corresponding testimony, repeated across centuries of obedient believers, that something unexpected happened when the command was kept: a freedom, a provision, a healing, a release of something that the disobedience had locked up.",
      "The blessing hidden in hard commands is not always material or immediate. Often it is interior: the person who forgives an enemy does not instantly receive material reward but is released from the prison of resentment that had been consuming them. The person who tithes sacrificially does not always see a dramatic financial return but often discovers a relationship to money transformed by the act of trust. The person who obeys a difficult command often says, afterward, &ldquo;I don&rsquo;t know why I waited so long.&rdquo; The command was the door; obedience opened it.",
    ],
    callout: {
      label: "The pattern",
      text: "Hard commands are not obstacles to blessing — they are often its gateway. The obedience that costs the most is frequently the one that releases what the soul most needs: freedom from fear, from resentment, from the control of money, from the long deformation of an unhealed relationship. Trust the God who commands.",
    },
  },
  {
    badge: "John 8:36",
    title: "Obedience and Freedom — The Paradox That Obedience Sets Free",
    paragraphs: [
      "The modern world frames freedom and obedience as opposites: to obey is to submit, to submit is to surrender your autonomy, and autonomy is the highest good. This framework has deep roots — it runs from the Enlightenment through Romanticism through contemporary individualism — and it is exactly what the New Testament overturns. &ldquo;If the Son sets you free, you will be free indeed&rdquo; (John 8:36): but the freedom the Son offers is not freedom from commandment; it is freedom from sin, from the power that exercises real dominion over the unobeying self.",
      "Paul&rsquo;s paradox in Romans 6 is the deepest expression of this: &ldquo;You who were once slaves of sin have become obedient from the heart to the standard of teaching to which you were committed, and, having been set free from sin, have become slaves of righteousness&rdquo; (vv. 17-18). The structure is stark: everyone is a slave to something. The question is only what master you serve. The person who refuses to obey God in the name of autonomy does not achieve genuine freedom; they remain enslaved to whatever else now governs them — sin, fear, appetite, approval, money, reputation. Obedience to God is not bondage; it is the transfer of allegiance from a cruel master to a good one.",
      "Augustine understood this experientially: &ldquo;Our heart is restless until it rests in Thee.&rdquo; The soul that refuses to obey God is not thereby at rest; it is restlessly in motion, driven by the competing demands of everything it serves instead. The freedom that comes through obedience is not the absence of constraint but the alignment of the will with what it was made for — a freedom that the disobedient soul cannot even conceive from the outside, but which every obedient soul recognizes as the thing they were looking for.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Prompt Obedience Practice",
    summary:
      "Identify one command of Christ that you have been delaying, modifying, or exempting yourself from — and obey it this week. Not eventually; this week. The discipline of promptness is its own form of faithfulness.",
    steps: [
      "Sit quietly and ask the Spirit: &ldquo;Which of your commands have I been delaying, qualifying, or selectively applying?&rdquo; Common candidates: forgiving a specific person, making a difficult reconciliation, tithing sacrificially, serving in a role you have been avoiding, speaking the truth in a relationship where you have been silent.",
      "Name the specific command and the specific cost. Vague obedience is not obedience. &ldquo;I should be more forgiving&rdquo; is not the same as &ldquo;I will forgive [name] by [date], by writing the letter or making the call.&rdquo; The Saul principle applies: partial and delayed obedience is rebellion with better optics.",
      "Obey with the body as well as the will. Augustine observed that the body often leads the soul: act the obedience before you feel it. Write the letter before the resentment has fully lifted. Give the tithe before the fear has fully resolved. Start the action; the heart often follows.",
      "Use the Journal tab to record what obedience cost you and what you found on the other side. Cumulative entries will show you the pattern: the commands you habitually obey fully, the ones you partially obey, and the ones you consistently avoid. That pattern is your actual spiritual state, more honest than any self-assessment.",
    ],
    anchor: "1 Samuel 15:22 — To obey is better than sacrifice, and to listen than the fat of rams.",
  },
  {
    number: "02",
    title: "The &ldquo;Love First&rdquo; Practice — Renewing the Root",
    summary:
      "Obedience sustained by love is different from obedience sustained by duty or fear. When obedience feels like grinding obligation, the problem is usually at the root — a cooling of love — not at the surface. This practice addresses the root.",
    steps: [
      "Begin each day with five minutes oriented not toward what you must do but toward who you love: read a passage about the character of Christ (John 13-17 is the richest), sit with one attribute of God (his faithfulness, his goodness, his knowledge of you), or simply bring to mind one thing the Lord has done for you that you did not deserve.",
      "When a command feels burdensome, return to John 14:15. Ask: have I cooled in my love for this person who commands me? The burden of a command is often in inverse proportion to the warmth of the relationship. Commands from someone you deeply love feel different from commands from an authority you merely respect or fear.",
      "Practice gratitude before obedience in the hard areas. Before the tithe, name three financial gifts the Lord has given you. Before forgiving someone, name what you yourself have been forgiven. Before honoring a difficult parent, name one thing about your life for which they are responsible. The gratitude does not make the obedience automatic, but it reorients the will toward the love that makes obedience possible.",
      "Notice over time whether your obedience changes in quality — not just in compliance but in spirit. The obedience that flows from love is not drudgery; it is not performed for approval or under threat. It has an interior ease that is the mark of the transformed will, what Paul calls &ldquo;obedient from the heart&rdquo; (Rom 6:17).",
    ],
    anchor: "John 14:15 — If you love me, you will keep my commandments.",
  },
  {
    number: "03",
    title: "Examining the Exemptions",
    summary:
      "Every believer has a set of de facto exemptions from God&rsquo;s commands — areas where they have quietly decided the command does not fully apply to them, or applies with significant modifications. This practice names and examines them.",
    steps: [
      "Write down the commands of Christ you know about but do not keep. Not the ones you keep imperfectly — all obedience is imperfect — but the ones you have essentially set aside. Anger toward specific people. Sexual purity in thought. Generosity at levels that actually cost you. Forgiveness of a particular person. Reconciliation with someone you have written off.",
      "For each exemption, identify the reason you have given yourself for it. &ldquo;That command was for a different cultural context.&rdquo; &ldquo;I will obey that one when I am in a better position.&rdquo; &ldquo;That person doesn&rsquo;t deserve my forgiveness.&rdquo; &ldquo;The tithe doesn&rsquo;t apply now because of my debt.&rdquo; Name the reason honestly.",
      "Take each reason to the text. Is this actually what Scripture teaches, or is it what you have constructed to protect the exemption? Bring a trusted friend or your pastor into the examination if necessary. The self-deception that protects our disobedience is usually more sophisticated than we realize.",
      "For each exemption that survives honest scrutiny, confess it as disobedience — not as a weakness or a limitation but as a choice. The confession is the beginning of the end of the exemption. Name it, own it, and ask for the specific grace to begin to close it.",
    ],
    anchor: "1 Samuel 15:13 — &ldquo;I have performed the commandment of the LORD.&rdquo; (And he had not.)",
  },
  {
    number: "04",
    title: "Obeying in Gethsemane — Obedience When It Costs Everything",
    summary:
      "The hardest obedience is the obedience that requires you to surrender what you most want. Jesus&rsquo;s prayer in Gethsemane is the template: &ldquo;Not my will, but yours be done.&rdquo; This practice prepares the soul for its own Gethsemane moments.",
    steps: [
      "Identify the area of your life where you most resist submitting to God&rsquo;s will — a relationship you want to control, a plan you refuse to relinquish, a future you are holding onto. This is your Gethsemane; it is the place where the prayer &ldquo;not my will&rdquo; is hardest and most necessary.",
      "Pray the Gethsemane prayer explicitly and regularly, not as resignation but as trust: &ldquo;Father, I want [name the specific thing]. I also know that you are good and that your will is better than my plan. Not my will, but yours.&rdquo; Pray it until it becomes true in your will, not just in your words.",
      "Look for the &ldquo;angel who strengthened him&rdquo; (Luke 22:43) — the evidence of God&rsquo;s presence and support in the moment of costly obedience. The Gethsemane pattern in Scripture is not isolation but the discovery of divine accompaniment in the place of surrender. Pay attention to how God meets you in the specific moment of costly obedience.",
      "After the obedience — when the cost has been paid and you are on the other side — record what you found. The consistent testimony of believers who have obeyed at great cost is that something was released in them that disobedience was blocking: a peace, a freedom, a sense of God&rsquo;s nearness that the holding-on had prevented. Not always immediately; often over months.",
    ],
    anchor: "Luke 22:42 — Father, if you are willing, remove this cup from me. Nevertheless, not my will, but yours, be done.",
  },
  {
    number: "05",
    title: "Immediate Obedience — The Discipline of Not Delaying",
    summary:
      "Many acts of disobedience are not outright refusals but delays — &ldquo;I will obey that command eventually, when conditions are better.&rdquo; This practice builds the habit of immediate response to the Spirit&rsquo;s prompting.",
    steps: [
      "For one week, practice obeying promptly any clear prompting of the Spirit — to pray for someone, to encourage them, to make a call you have been deferring, to apologize, to give. The practice is not about grand obedience; it is about the small, daily responsiveness that trains the will toward immediacy.",
      "When a prompting comes and the instinct is to delay, notice the delay. Name it: &ldquo;I am choosing to put this off.&rdquo; The act of naming is not self-condemnation but clarity; it makes the choice visible rather than allowing delay to be automatic and invisible.",
      "Practice the Abraham pattern in small things: rise early in the morning. Do the hard thing first. Do not negotiate with the command before you obey it. The longer the negotiation, the less likely the obedience; the prompter the first step, the more likely the completion.",
      "Review at the end of the week: which promptings did I respond to immediately, which did I delay, which did I decline? The pattern will show you the structure of your spiritual responsiveness — where your will is trained toward immediate obedience and where it has developed the habit of deferral.",
    ],
    anchor: "Genesis 22:3 — So Abraham rose early in the morning, saddled his donkey, and took two of his young men with him, and his son Isaac.",
  },
  {
    number: "06",
    title: "Corporate Obedience — Accountable to a Community",
    summary:
      "Obedience is not a solo performance before God. The church is the community in which obedience is both practiced and held accountable. This practice cultivates the kind of transparency that makes sustained obedience possible.",
    steps: [
      "Identify one or two people in your church community with whom you can share your actual obedience struggles — not the presentable ones but the real exemptions, the persistent disobediences, the commands you have been avoiding. This requires trust, and the identification of the right people is itself a prayer.",
      "Meet regularly — monthly at minimum — and share not just your failures but your actual acts of obedience and their costs and fruits. The community that only hears about failure becomes discouraging; the community that also hears &ldquo;I obeyed and this is what I found&rdquo; becomes a school of obedience.",
      "Give these people specific permission to ask the hard questions: &ldquo;Are you still holding back in [area]?&rdquo; &ldquo;Did you make that call?&rdquo; &ldquo;Did you give what you said you would?&rdquo; The accountability is only as useful as it is specific. Vague accountability produces vague results.",
      "Pray for each other&rsquo;s costly obediences. The person who is facing a Gethsemane-level decision needs the church in the garden with them, not asleep. The New Testament pattern of &ldquo;bearing one another&rsquo;s burdens&rdquo; (Gal 6:2) is not primarily emotional support — it is spiritual accompaniment in the actual work of becoming obedient.",
    ],
    anchor: "Hebrews 10:24-25 — And let us consider how to stir up one another to love and good works, not neglecting to meet together.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Andrew Murray",
    role: "Absolute Surrender — The Total Obedience of the Yielded Life",
    quote:
      "God is willing to work in you if you are willing to let go of everything and obey. The whole secret of the Christian life is absolute surrender to him.",
    bio: "Andrew Murray (1828-1917) was a South African Dutch Reformed pastor and prolific devotional writer whose works on surrender, holiness, and abiding in Christ have shaped evangelical piety for more than a century. His book Absolute Surrender, based on a series of addresses delivered in 1895, presents obedience not as a set of moral requirements but as a posture of the will: the complete yielding of the self to God&rsquo;s purposes. Murray was influenced by the Keswick &ldquo;higher life&rdquo; movement and by his own experience of spiritual renewal following a period of physical illness and forced silence. For Murray, the obstacle to full obedience is never primarily circumstantial; it is the self-will that refuses to relinquish control. His counsel is simple to state and hard to do: stop holding back anything, stop managing your own spiritual life, and let the God who commands also be the God who empowers.",
  },
  {
    name: "Dietrich Bonhoeffer",
    role: "The Cost of Discipleship — Costly Grace and Obedient Following",
    quote:
      "Only he who believes is obedient, and only he who is obedient believes. The road to faith passes through obedience to the call of Jesus.",
    bio: "Dietrich Bonhoeffer (1906-1945) wrote The Cost of Discipleship in 1937, when he was running an illegal seminary for the Confessing Church in Nazi Germany. His analysis of &ldquo;cheap grace&rdquo; — the forgiveness of sins proclaimed without repentance, the church without discipline, absolution without confession — remains the most penetrating Protestant critique of easy Christianity. For Bonhoeffer, obedience and faith are inseparable: faith that does not obey is not faith, and obedience that is not rooted in faith degenerates into legalism. His famous paradox — &ldquo;only he who believes is obedient, and only he who is obedient believes&rdquo; — refuses to let Christians shelter in faith as a cognitive category that exempts them from the costly demands of following Jesus. Bonhoeffer himself obeyed at the ultimate cost, arrested by the Gestapo in 1943 and executed in the Flossenburg concentration camp on April 9, 1945, weeks before the Allied liberation.",
  },
  {
    name: "Elisabeth Elliot",
    role: "Obedience into the Unknown — Missionary Life and Costly Following",
    quote:
      "The will of God is never exactly what you expect it to be. It may seem to be much worse, but in the end it&rsquo;s going to be a lot better and a lot bigger.",
    bio: "Elisabeth Elliot (1926-2015) became one of the twentieth century&rsquo;s most compelling voices on obedience through the events of January 8, 1956, when her husband Jim Elliot and four fellow missionaries were killed by the Huaorani people of Ecuador they had gone to reach. Elisabeth stayed in Ecuador, and within two years had moved with her daughter and Huaorani widow Rachel Saint to live among the very tribe that had killed her husband — eventually seeing many of them come to faith. Her obedience was not theoretical; it was the decision to do the next thing God made clear, regardless of the cost, regardless of whether it made sense. Her books — Through Gates of Splendor, Passion and Purity, The Path of Loneliness, A Path Through Suffering — return repeatedly to the theme that obedience in the dark is the essence of faith, and that what God asks is always exactly what we least want to give and most need to release.",
  },
  {
    name: "John Piper",
    role: "Desiring God &mdash; Obedience as the Expression of Delight",
    quote:
      "The great problem with most Christian obedience is not that people obey too much but that what they call obedience is not motivated by delight in God. It is motivated by the fear of punishment or the hope of reward, not the love of the one who commands.",
    bio: "John Piper&rsquo;s contribution to the theology of obedience is his insistence that the motive of obedience matters as much as the act. In Desiring God (1986) and throughout his Bethlehem Baptist pastoral ministry, Piper argues from Jonathan Edwards that the pursuit of joy in God is not a distraction from obedience but its proper engine. The Christian who obeys out of joy — who keeps the commands because they love the one who commands and delight in doing his will — is obeying in the fullest sense. The Christian who obeys out of fear or duty or the hope of reward is obeying in a diminished sense that Piper sometimes calls &ldquo;willpower Christianity.&rdquo; His corrective is not to obey less but to pursue the delight in God that makes obedience natural, overflowing, and joyful rather than grinding. This theological vision has shaped a generation of evangelical preachers and their understanding of the relationship between emotion, desire, and moral action.",
  },
  {
    name: "Thomas à Kempis",
    role: "The Imitation of Christ — The Obedient Life as Daily Following",
    quote:
      "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility, and be thus displeasing to the Trinity? Better of a surety is a lowly peasant who serveth God, than a proud philosopher who watcheth the stars and neglecteth the knowledge of himself.",
    bio: "Thomas à Kempis (c. 1380-1471) wrote The Imitation of Christ in the early fifteenth century, and it has never been out of print. It is the most widely read Christian devotional work after the Bible itself. The Imitation is a manual of obedience in the broadest sense: the daily, practical, interior work of conforming the will, the thoughts, the desires, and the habits to the example of Christ. Thomas writes from within the Devotio Moderna movement, which emphasized humble, practical piety over speculative theology. His consistent message is that obedience begins in the small things — the interior movements of pride, resentment, self-will, and self-justification that the soul must recognize and surrender daily. For Thomas, the person who has read every theological treatise but cannot rule their own temper has learned nothing that matters; the person who knows only one thing — to follow Christ humbly — knows what is necessary.",
  },
  {
    name: "Charles Spurgeon",
    role: "Metropolitan Tabernacle Pulpit — Full Obedience as the Mark of True Conversion",
    quote:
      "He who is truly converted to God does not pick and choose among the commandments which he will keep and which he will leave. He says with David, &ldquo;I esteem all your precepts concerning all things to be right.&rdquo; Full obedience is the mark of full faith.",
    bio: "Charles Spurgeon (1834-1892), the Victorian-era Baptist preacher whose Metropolitan Tabernacle in London drew thousands weekly, preached on obedience with a directness that unsettled comfortable Christianity. Spurgeon was a Calvinist who insisted that genuine regeneration produces genuine obedience — not perfect obedience, but wholehearted obedience, the absence of deliberate exemptions. He was particularly concerned with the tendency to make faith a substitute for obedience rather than its root, and he preached regularly against what his age called &ldquo;easy believism&rdquo; — the idea that mental assent to Christian doctrine exempts one from the practical demands of following Christ. Spurgeon&rsquo;s own life was a model of costly obedience: his &ldquo;Downgrade Controversy&rdquo; in the 1880s, in which he publicly broke with the Baptist Union over doctrinal compromise, cost him many friends, damaged his health, and isolated him in his final years. He obeyed his conscience at the cost of his comfort and his fellowship, and he died shortly after.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "John 14:15",
    text: "If you love me, you will keep my commandments.",
    reflection:
      "Eleven words that reorder the grammar of the moral life. Love is the root; obedience is the fruit. The commands are the same as they ever were, but the motivation that animates them is entirely different when they flow from love rather than obligation. The test of your love for Christ is not your emotional warmth toward him but whether his commands are finding expression in how you live.",
  },
  {
    reference: "Philippians 2:8",
    text: "And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
    reflection:
      "The incarnation is an act of obedience that culminates in the ultimate act of obedience. Christ did not merely model obedience from a safe distance; he descended into the full cost of it, to the point where the cost was his life. When obedience is costly, the Christian has a Companion on that road who has been further along it than any suffering will take us.",
  },
  {
    reference: "Hebrews 5:8",
    text: "Although he was a son, he learned obedience through what he suffered.",
    reflection:
      "Obedience that has not been tested is not the obedience the New Testament has in view. Christ learned obedience — real obedience, obedience that was pressed against cost and held firm — through suffering. The implication for disciples is both sobering and comforting: the path of obedience will include suffering, and the suffering is part of how the obedience becomes real rather than theoretical.",
  },
  {
    reference: "1 Samuel 15:22",
    text: "Has the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to listen than the fat of rams.",
    reflection:
      "Religious performance cannot substitute for actual obedience. Saul had offered sacrifice; he had done religious things; he had been busy in the service of God. But he had not done what God said, and no amount of religious activity filled the gap. The command to obey is not parallel to religious practice — it is prior to it. Obedience is what makes the sacrifice meaningful.",
  },
  {
    reference: "Romans 6:17-18",
    text: "But thanks be to God, that you who were once slaves of sin have become obedient from the heart to the standard of teaching to which you were committed, and, having been set free from sin, have become slaves of righteousness.",
    reflection:
      "Freedom is not the absence of allegiance; it is the transfer of allegiance from a bad master to a good one. The person who refuses to obey God in the name of freedom does not achieve genuine autonomy — they remain enslaved to whatever else governs them. Obedience to God is freedom from sin, and it happens from the heart rather than from external compulsion.",
  },
  {
    reference: "John 8:36",
    text: "So if the Son sets you free, you will be free indeed.",
    reflection:
      "The freedom that Christ offers is not freedom from commandment but freedom from the power of sin that makes commandment feel like bondage. When the heart is renewed by grace, the commands of Christ feel not like an external constraint but like the expression of what the renewed will most deeply wants. The paradox of Christian liberty is that it is gained through obedience, not despite it.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "DmqoHVRtpXg", title: "Obedience and Love — What Does It Mean to Keep His Commands?" },
  { videoId: "6XFbN9bh6gU", title: "Bonhoeffer on Costly Grace and the Call to Obedience" },
  { videoId: "Aq1PEi3U4QU", title: "The Obedience of Christ — Philippians 2 and Our Template" },
  { videoId: "u4Qj2SKGUXU", title: "Elisabeth Elliot: Obedience in the Hard Places" },
  { videoId: "yCfzBgHhSaU", title: "Why Partial Obedience Is Disobedience — 1 Samuel 15" },
  { videoId: "9mxWy4cYsGU", title: "Freedom Through Obedience — The Paradox of John 8" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianObediencePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<OBDEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [commandObeyed, setCommandObeyed] = useState("");
  const [theCost, setTheCost] = useState("");
  const [theBlessing, setTheBlessing] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as OBDEntry[]);
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
    if (!commandObeyed.trim() || !theCost.trim()) return;
    const entry: OBDEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      commandObeyed: commandObeyed.trim(),
      theCost: theCost.trim(),
      theBlessing: theBlessing.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setCommandObeyed("");
    setTheCost("");
    setTheBlessing("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GREEN : BORDER}`,
    background: active ? "rgba(58, 125, 86, 0.12)" : "transparent",
    color: active ? GREEN : MUTED,
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
    color: GREEN,
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
                color: GREEN,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Discipleship &amp; Following Christ
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              If You Love Me, Keep My Commandments: Christian Obedience
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Obedience is not legalism and it is not optional. It is the natural language of love
              toward the one who commands, the pattern Christ himself walked, and the door through
              which the freedom the gospel promises actually enters a life. This guide traces the
              theology of obedience from John 14 through Abraham and Paul, confronts the temptation
              of partial and delayed obedience, and offers practices for learning to obey promptly,
              fully, and from the heart.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GREEN}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;If you love me, you will keep my commandments.&rdquo;
              </p>
              <p style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600 }}>
                John 14:15
              </p>
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
                Seven studies on the theology of obedience — from the love that roots it, through
                the examples of Abraham and Christ, to the paradox that full surrender to God&rsquo;s
                commands is the path to genuine freedom. Each section addresses a common distortion
                of Christian obedience and offers the correction Scripture provides.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: GREEN,
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
                        background: "rgba(58, 125, 86, 0.07)",
                        border: `1px solid rgba(58, 125, 86, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: GREEN,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Love roots obedience, Christ models it, grace frees it from legalism, and the
                  paradox of John 8:36 completes the arc: the obedience that feels like surrender is
                  the path to the freedom that the disobeying self can&rsquo;t find. Explore the
                  related virtue of perseverance in{" "}
                  <Link href="/christian-diligence" style={{ color: GREEN, textDecoration: "underline" }}>
                    Christian Diligence
                  </Link>{" "}
                  or go deeper on the interior life that sustains obedience in{" "}
                  <Link href="/christian-holiness" style={{ color: GREEN, textDecoration: "underline" }}>
                    Christian Holiness
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
                Obedience is not a feeling — it is a decision repeated and structured into a life.
                These six practices address the specific ways disobedience enters: through delay,
                partial compliance, self-constructed exemptions, and the cooling of the love that
                makes obedience natural. Use the Journal tab to track the cost and the fruit.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: GREEN,
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
                      color: GREEN,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the hard commands
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The commands that cost the most are often the ones with the most locked inside
                  them. The tithe that felt impossible often opened something about money and trust.
                  The forgiveness that felt premature often released something that years of
                  resentment had locked. The obedience that required going into the dark often found
                  something waiting there that the safety of disobedience had kept hidden. Do not
                  assume the cost is the whole story. Obey, and see what is on the other side.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six voices on obedience — from Andrew Murray&rsquo;s call to absolute surrender to
                Bonhoeffer&rsquo;s costly discipleship, from Elisabeth Elliot&rsquo;s obedience in
                the worst circumstances to Thomas à Kempis&rsquo;s daily imitation of Christ.
                Each paid a real price for what they taught.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: GREEN,
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
                      background: "rgba(58, 125, 86, 0.06)",
                      borderLeft: `3px solid ${GREEN}`,
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
                Six passages on obedience — from Jesus&rsquo;s upper room discourse through the
                obedience of Christ, the rebuke of Saul, and Paul&rsquo;s paradox of freedom through
                submission. Read one per week alongside the Journal practice.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: GREEN,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into a three-part prayer: adoration (&ldquo;Lord, you are the one
                  who commands from love, not from distance&rdquo;), confession (&ldquo;I have
                  modified your commands, delayed my obedience, and constructed exemptions for the
                  ones that cost me most&rdquo;), and petition (&ldquo;give me the love for you that
                  makes your commands feel not like constraint but like expression — let my obedience
                  come from the heart&rdquo;). The difference between grudging compliance and joyful
                  obedience begins in prayer.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The obedience journal tracks three things: the command you obeyed, what it cost you,
                and the blessing or fruit you found in it — because the testimony of obedience is
                one of the most powerful forces in sustaining the next act of obedience. Entries are
                saved privately in your browser. No one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New obedience entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="obd-command" style={labelStyle}>
                    A command I obeyed recently
                  </label>
                  <input
                    id="obd-command"
                    type="text"
                    value={commandObeyed}
                    onChange={(e) => setCommandObeyed(e.target.value)}
                    placeholder="Name the specific command — forgive someone, give sacrificially, reconcile a relationship, speak a hard truth"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="obd-cost" style={labelStyle}>
                    What it cost me
                  </label>
                  <textarea
                    id="obd-cost"
                    value={theCost}
                    onChange={(e) => setTheCost(e.target.value)}
                    placeholder="Be honest about the cost — money, comfort, pride, a relationship, a plan you held tightly. What did it require you to surrender or do?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="obd-blessing" style={labelStyle}>
                    The blessing or fruit I found in it
                  </label>
                  <textarea
                    id="obd-blessing"
                    value={theBlessing}
                    onChange={(e) => setTheBlessing(e.target.value)}
                    placeholder="What did you find on the other side? Freedom, peace, provision, a restored relationship, a sense of God&rsquo;s nearness? Or are you still waiting to see it?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!commandObeyed.trim() || !theCost.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !commandObeyed.trim() || !theCost.trim() ? BORDER : GREEN,
                    color: !commandObeyed.trim() || !theCost.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !commandObeyed.trim() || !theCost.trim() ? "not-allowed" : "pointer",
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
                      Record an act of obedience — its cost and its fruit. Over time, the pattern of
                      entries becomes its own testimony: what you obeyed, what it asked of you, and
                      what you found waiting on the other side.
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
                          <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GREEN }}>
                              {entry.commandObeyed}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.commandObeyed}`}
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
                            The cost
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theCost}
                          </p>
                        </div>

                        {entry.theBlessing && (
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
                              The blessing
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.theBlessing}
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
                Teaching to watch on obedience — on John 14:15 and the love that roots it,
                Bonhoeffer&rsquo;s costly grace, the obedience of Christ as our template, Elisabeth
                Elliot in the hard places, Saul&rsquo;s partial obedience, and John 8&rsquo;s
                paradox of freedom through surrender.
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
              Obedient from the heart
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The goal of Christian obedience is not compliance with a list but &ldquo;obedient from
              the heart&rdquo; — the transformed will that keeps the commands not as performance
              before God but as expression of love for God. That transformation is a work of grace,
              not willpower; it is given to those who ask for it, practiced by those who act without
              waiting for it, and deepened in the one who discovers, through costly obedience, that
              the God who commands is also the God who meets you in the obedience and makes it worth
              what it cost.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the interior formation that sustains obedience in{" "}
              <Link href="/christian-holiness" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Holiness
              </Link>
              , understand the diligence that obedience requires in{" "}
              <Link href="/christian-diligence" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Diligence
              </Link>
              , or practice the surrender that obedience presupposes in{" "}
              <Link href="/christian-humility" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Humility
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
