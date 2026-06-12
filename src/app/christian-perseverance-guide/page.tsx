"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const ROSE = "#E11D48";

const STORAGE_KEY = "vine_perseverance_entries";

interface PSVEntry {
  id: string;
  date: string;
  whatImEnduring: string;
  theTemptationToQuit: string;
  whyIKeepGoing: string;
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
    badge: "Hupomone — Remaining Under",
    title: "Hupomone: The Strength That Remains Under the Load",
    paragraphs: [
      "The New Testament word for perseverance is hupomone &mdash; from hupo (under) and meno (to remain, to abide). It is not the strength that throws the load off; it is the strength that remains under it. The picture is not a sprinter bursting through a tape but a bearer who does not put the burden down &mdash; who stays under the weight, mile after mile, when every muscle argues for release. English translations render it variously as perseverance, endurance, patience, steadfastness; the common thread is the refusal to walk out from under what God has appointed to be carried.",
      "This matters because the word rules out two counterfeit pictures of Christian strength. The first counterfeit is escape: the notion that mature faith finds a way out of every pressure, that sufficient belief dissolves every burden. Hupomone assumes the load stays on. The second counterfeit is stoicism: gritting the teeth and feeling nothing. Biblical endurance is not numbness under the load but faith under the load &mdash; remaining under it while still hoping, still praying, still loving, still expecting God. The same root, meno, is the word Jesus uses in John 15: &ldquo;Abide in me.&rdquo; Perseverance is abiding with weight on.",
      "Scripture treats hupomone not as a personality trait some have and others lack but as a produced thing: &ldquo;suffering produces endurance, and endurance produces character, and character produces hope&rdquo; (Rom 5:3-4); &ldquo;the testing of your faith produces steadfastness&rdquo; (James 1:3). No one is born with it, and no one receives it in a moment. It is manufactured in exactly one factory &mdash; the experience of remaining under a load you would rather put down &mdash; which is why God, who is after our hope and our character, does not always remove the load.",
    ],
    callout: {
      label: "The root",
      text: "Hupomone &mdash; hupo (under) + meno (remain). Not the strength that escapes the load but the strength that stays under it. The same meno as &ldquo;abide in me&rdquo;: perseverance is abiding with weight on.",
    },
  },
  {
    badge: "Hebrews 12:1-3 — The Race",
    title: "Run with Perseverance the Race Marked Out &mdash; Eyes Fixed on Jesus",
    paragraphs: [
      "&ldquo;Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith&rdquo; (Heb 12:1-2). Every clause is load-bearing. The race is &ldquo;set before us&rdquo; &mdash; marked out, assigned, not chosen from a menu. You do not get to select your course; you get to run the one given. And the running verb is governed by hupomone: this is a distance race, and the only way to lose it is to stop.",
      "The strategy the writer prescribes is not effort but attention: &ldquo;looking to Jesus.&rdquo; The Greek implies looking away from other things in order to fix on one thing. Distance runners know that where the eyes go, the body follows; the writer of Hebrews knows that where the gaze rests, the soul follows. The runner who stares at the remaining miles despairs; the runner who stares at their own legs collapses; the runner who fixes on Jesus &mdash; the one who already ran this course and now sits at the right hand of the throne of God &mdash; keeps moving. Perseverance is less a matter of willpower than of where you point your eyes.",
      "And Jesus himself ran on fuel the text names precisely: &ldquo;who for the joy that was set before him endured the cross, despising the shame.&rdquo; Even the Son did not endure by gritting teeth at nothing; he endured for a joy set before him. Biblical perseverance is always teleological &mdash; it runs toward something. The cloud of witnesses (the Hebrews 11 roll call of those who finished) testifies that the course is runnable; the seated Christ testifies that it ends in joy. Endurance borrows strength from a future that is certain.",
    ],
    callout: {
      label: "The strategy",
      text: "Not willpower but gaze. &ldquo;Looking to Jesus&rdquo; &mdash; looking away from the remaining miles, away from your own failing legs, to the one who finished the course for the joy set before him. Where the eyes fix, the runner follows.",
    },
  },
  {
    badge: "Reformed Doctrine — Preservation",
    title: "The Perseverance of the Saints: God Preserves Those He Saves",
    paragraphs: [
      "The Reformed tradition speaks of the &ldquo;perseverance of the saints&rdquo; &mdash; the doctrine that those whom God has truly saved will be kept by God to the end. The name is slightly misleading, and the Reformed themselves often correct it: it is really the preservation of the saints. The deepest reason a believer perseveres is not the believer&rsquo;s grip on God but God&rsquo;s grip on the believer. &ldquo;He who began a good work in you will bring it to completion at the day of Jesus Christ&rdquo; (Phil 1:6). &ldquo;No one will snatch them out of my hand&rdquo; (John 10:28). &ldquo;He who calls you is faithful; he will surely do it&rdquo; (1 Thess 5:24).",
      "This doctrine transforms the psychology of endurance. If finishing depended finally on the constancy of my own willpower, then every exhausted season would be a mortal threat &mdash; and the honest soul, knowing its own record, would despair. But if God preserves what God saves, then perseverance becomes something I do inside something God is doing. The effort is real: the New Testament is full of commands to endure, hold fast, stand firm, not grow weary. But the effort operates inside a promise. &ldquo;Work out your own salvation with fear and trembling, for it is God who works in you&rdquo; (Phil 2:12-13) &mdash; both halves fully true, the working-out enclosed within the working-in.",
      "The pastoral application is precise: the doctrine comforts the struggling without excusing the drifting. To the believer hanging on by their fingernails, it says: underneath your failing fingers are everlasting arms; the question of whether you finish was settled by grace, not by the strength of today&rsquo;s grip. To the person presuming on grace while drifting from Christ, it says: the saints persevere &mdash; continuing is not optional evidence but the very mark of the genuine work. God&rsquo;s preservation does not make endurance unnecessary; it makes endurance certain, and the believer&rsquo;s endurance is the visible side of God&rsquo;s invisible keeping.",
    ],
    callout: {
      label: "The deeper name",
      text: "The perseverance of the saints is really the preservation of the saints. The believer holds on because God holds the believer. The effort is real, but it operates inside a promise: he who began the work will finish it.",
    },
  },
  {
    badge: "Hebrews 12:3 — Consider Him",
    title: "Consider Him Who Endured &mdash; Christ&rsquo;s Endurance as Fuel for Ours",
    paragraphs: [
      "&ldquo;Consider him who endured from sinners such hostility against himself, so that you may not grow weary or fainthearted&rdquo; (Heb 12:3). The verse prescribes a specific mental discipline for the moment of flagging: consider &mdash; reckon up, calculate, think through in detail &mdash; the endurance of Christ. Not a glance but an accounting. The writer assumes that weariness of soul is treated by sustained meditation on a particular object: the hostility Jesus remained under, and the manner in which he remained under it.",
      "Trace what he endured: the contradiction of sinners across three years of ministry &mdash; misunderstood by family, betrayed by a friend, abandoned by his disciples, falsely accused, mocked by soldiers, and at the last, the cross with its shame. At every point he possessed the power to walk out from under the load &mdash; twelve legions of angels stood ready (Matt 26:53) &mdash; and at every point he chose to remain under it, for us. Hupomone has a face. When Peter wants to teach suffering servants to endure, he points there: &ldquo;Christ also suffered for you, leaving you an example, so that you might follow in his steps&hellip; When he was reviled, he did not revile in return&hellip; but continued entrusting himself to him who judges justly&rdquo; (1 Pet 2:21-23).",
      "The logic of the comparison is gentle and bracing at once: &ldquo;In your struggle against sin you have not yet resisted to the point of shedding your blood&rdquo; (Heb 12:4). This is not a dismissal of our suffering but a recalibration of it. The one who asks me to remain under my load remained under an infinitely heavier one &mdash; and did so partly to be the companion of everyone who endures. The considering is fuel: souls grow weary when they stare at their own endurance; they recover when they study his.",
    ],
  },
  {
    badge: "James 1:12 — Blessed Under Trial",
    title: "Blessed Is the One Who Perseveres Under Trial &mdash; The Crown of Life",
    paragraphs: [
      "&ldquo;Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him&rdquo; (James 1:12). James pronounces a beatitude over the enduring &mdash; the same form Jesus used on the mount. Not &ldquo;blessed is the one whose trial ends quickly,&rdquo; nor &ldquo;blessed is the one who feels strong in the trial,&rdquo; but blessed is the one who remains steadfast under it. The blessing attaches to the remaining itself.",
      "James has already explained the mechanism earlier in the chapter: &ldquo;Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing&rdquo; (James 1:2-4). The trial is a testing in the metallurgical sense &mdash; not designed to destroy the faith but to prove and purify it. And the command &ldquo;let steadfastness have its full effect&rdquo; implies that the work can be interrupted: the person who escapes every trial early, who quits every hard assignment at the first opportunity, leaves the work half-done in themselves and remains &ldquo;lacking.&rdquo; Some completions only happen under load.",
      "The promised end is &ldquo;the crown of life&rdquo; &mdash; the victor&rsquo;s wreath, promised &ldquo;to those who love him.&rdquo; That final phrase quietly identifies what perseverance actually is at bottom: not a feat of resilience but an act of love. People remain under loads for what they love; the marathon of faith is run on affection, not adrenaline. The one who keeps going for the love of Christ is doing, in James&rsquo;s eyes, the most blessed thing a person under trial can do.",
    ],
    callout: {
      label: "The beatitude",
      text: "The blessing attaches to the remaining, not to the relief. The testing produces steadfastness; steadfastness, allowed its full effect, produces completeness. Some completions only happen under load.",
    },
  },
  {
    badge: "2 Corinthians 11:23-28 — Paul&rsquo;s Catalog",
    title: "Paul&rsquo;s Catalog of Endurance &mdash; What Remaining Under Actually Cost",
    paragraphs: [
      "Forced by the Corinthians&rsquo; fascination with impressive &ldquo;super-apostles&rdquo; to produce credentials, Paul writes the strangest resume in ancient literature: &ldquo;Far greater labors, far more imprisonments, with countless beatings, and often near death. Five times I received at the hands of the Jews the forty lashes less one. Three times I was beaten with rods. Once I was stoned. Three times I was shipwrecked; a night and a day I was adrift at sea; on frequent journeys, in danger from rivers, danger from robbers, danger from my own people, danger from Gentiles, danger in the city, danger in the wilderness, danger at sea, danger from false brothers; in toil and hardship, through many a sleepless night, in hunger and thirst, often without food, in cold and exposure&rdquo; (2 Cor 11:23-27).",
      "The catalog rebukes every romantic picture of perseverance. This is what hupomone looked like in an actual life: scar tissue, hunger, insomnia, repetition. Notice especially the word &ldquo;often&rdquo; and the numbers &mdash; five times, three times, three times. Endurance is rarely one heroic moment; it is the same affliction returning, and the same decision to remain under the call being made again. The fortieth lash of the fifth flogging lands on a back that knows exactly what is coming. Paul got back on ships after three shipwrecks. Perseverance is mostly the refusal to let accumulated suffering revise your assignment.",
      "And then the climax, which Paul ranks above all the physical sufferings: &ldquo;apart from other things, there is the daily pressure on me of my anxiety for all the churches&rdquo; (11:28). The heaviest load in the catalog is not a beating but a burden of love &mdash; daily, unglamorous, invisible concern for people. Many believers will never face rods or stones, but every believer knows the daily pressure of loves that cannot be put down: the prodigal child, the ailing parent, the fragile church, the long assignment. Paul dignifies that pressure by ranking it with the lashes. It counts. Remaining under it is perseverance of the apostolic kind.",
    ],
  },
  {
    badge: "Luke 18:1-8 — The Persistent Widow",
    title: "Always Pray and Do Not Give Up &mdash; The Parable of the Persistent Widow",
    paragraphs: [
      "Luke is unusually direct about the purpose of this parable: Jesus told it &ldquo;to the effect that they ought always to pray and not lose heart&rdquo; (Luke 18:1). A widow &mdash; the figure of utter powerlessness in the ancient world, with no husband, no standing, no leverage &mdash; keeps coming to an unjust judge who neither fears God nor respects man, with one petition: &ldquo;Give me justice against my adversary.&rdquo; For a while he refuses. Then he relents &mdash; not from conscience but from exhaustion: &ldquo;because this widow keeps bothering me, I will give her justice, so that she will not beat me down by her continual coming.&rdquo;",
      "The argument runs from lesser to greater, by contrast: if even an unjust judge yields to persistence, &ldquo;will not God give justice to his elect, who cry to him day and night? Will he delay long over them? I tell you, he will give justice to them speedily&rdquo; (18:7-8). God is not the unjust judge; he is his opposite &mdash; a Father who loves the petitioner. The widow had to persist against the judge&rsquo;s character; we persist into God&rsquo;s. Why then does the praying take so long? The parable does not fully say &mdash; but it does say what the delay is not: it is not indifference. And it locates perseverance in prayer precisely in the gap between the promise of justice and its arrival, the gap where hearts are most tempted to quit.",
      "The parable ends with the question that turns the whole teaching toward us: &ldquo;Nevertheless, when the Son of Man comes, will he find faith on earth?&rdquo; (18:8). The issue, at the last, is not whether God will be faithful to answer but whether his people will still be asking &mdash; whether the long delay will have emptied the prayer meetings. Persevering prayer is here the signature form of persevering faith: the praying person who has not given up is the person still living as if God is real, just, and coming. To stop praying is, quietly, to quit the race; to keep asking is to keep running.",
    ],
    callout: {
      label: "The point, stated by Luke",
      text: "&ldquo;That they ought always to pray and not lose heart.&rdquo; The widow persisted against an unjust judge&rsquo;s character; we persist into a loving Father&rsquo;s. The closing question turns it on us: when the Son of Man comes, will he find anyone still asking?",
    },
  },
  {
    badge: "2 Timothy 4:7-10 — Demas vs. Paul",
    title: "Finishing Well &mdash; Demas in Love with This Present World, Paul at the Finish Line",
    paragraphs: [
      "Two verses apart, in Paul&rsquo;s final letter, stand the two endings of every Christian story. Verse 7: &ldquo;I have fought the good fight, I have finished the race, I have kept the faith. Henceforth there is laid up for me the crown of righteousness.&rdquo; Verse 10: &ldquo;For Demas, in love with this present world, has deserted me and gone to Thessalonica.&rdquo; Paul, writing from a Roman death cell, is days from execution and entirely at peace; Demas, once named among Paul&rsquo;s fellow workers (Col 4:14; Philem 24), has walked off the course in the last miles.",
      "Demas is the more sobering for what he was not. He was not an outsider, not a false teacher, not an enemy of the gospel; he was a co-laborer who had endured years of association with an imprisoned apostle &mdash; and then quit. The diagnosis Paul gives is exact: not &ldquo;Demas was overwhelmed&rdquo; but &ldquo;Demas, in love with this present world.&rdquo; Desertion is rarely a decision of a moment; it is the slow transfer of affection. The race is finally lost not by exhaustion but by falling in love with something off the course. This confirms James&rsquo;s insight from the other side: perseverance runs on love, and so does quitting. Everyone endures for what they love most.",
      "Paul&rsquo;s ending shows what the alternative looks like up close. His three perfect-tense verbs &mdash; fought, finished, kept &mdash; describe a life now summarizable, and not one of them claims victory in worldly terms: he is poor, abandoned by many (&ldquo;at my first defense no one came to stand by me,&rdquo; 4:16), cold enough to ask for his cloak, and condemned. Finishing well, on the evidence of this chapter, does not mean ending in comfort or acclaim; it means arriving at the end with the faith intact and the assignment complete, eyes already on &ldquo;that Day.&rdquo; Every believer is, at this moment, becoming either verse 7 or verse 10 &mdash; and the direction is set by what the heart is learning to love.",
    ],
    callout: {
      label: "The two endings",
      text: "&ldquo;I have finished the race&rdquo; or &ldquo;in love with this present world, he deserted.&rdquo; The race is rarely lost to exhaustion; it is lost to a rival love. Everyone perseveres for what they love most &mdash; which is why guarding love is guarding endurance.",
    },
  },
  {
    badge: "Discernment — Endure or Release",
    title: "Perseverance vs. Stubbornness &mdash; When to Endure and When to Release",
    paragraphs: [
      "Not everything should be persevered in, and Scripture knows it. Paul and Barnabas, persecuted in Antioch of Pisidia, &ldquo;shook off the dust from their feet against them and went to Iconium&rdquo; (Acts 13:51) &mdash; obeying Jesus&rsquo;s own instruction for rejected towns. Jesus repeatedly withdrew from regions that sought his death before his hour. Paul abandoned his repeated plans to enter Bithynia when the Spirit blocked the way, and sailed instead for Macedonia (Acts 16:7-10). The same apostle who would not put down the gospel assignment put down particular plans, places, and methods readily. There is a letting-go that is not quitting, and a holding-on that is not faith.",
      "The distinction lies in what, exactly, is being held. Perseverance remains under a load God has assigned; stubbornness remains under a load the self has assigned &mdash; often for the self&rsquo;s reasons: pride that cannot admit a misreading, fear of what others will say, identity so fused with a project that releasing it feels like dying, or the simple refusal to be wrong. Stubbornness frequently wears perseverance&rsquo;s clothing and quotes its verses. The diagnostic questions cut beneath the costume: Is this God&rsquo;s assignment or my ambition? Am I remaining out of love and obedience, or out of pride and fear? Has God closed this door, or has it merely become hard? Hardness alone is no signal &mdash; every true calling gets hard. But a closed door attested by Scripture, counsel, providence, and the Spirit&rsquo;s witness is not a test of endurance; it is a redirection.",
      "Two clarities help. First: the unconditional callings are never released &mdash; faith in Christ, love of neighbor, holiness, prayer, the race itself. No discernment process ever concludes that God wants you to stop trusting, loving, or praying. Second: particular assignments &mdash; a role, a ministry, a strategy, a location &mdash; are stewardships that God gives and sometimes visibly takes. Releasing a stewardship at God&rsquo;s leading is itself an act of perseverance in the deeper race: it remains under his authority, which is the heaviest load of all for a self-directed heart. The widow keeps praying; Paul keeps preaching; but the route to Bithynia is surrendered without a fight. Endure the calling; hold the assignments with an open hand.",
    ],
    callout: {
      label: "The diagnostic",
      text: "Perseverance remains under God&rsquo;s assignment; stubbornness remains under the self&rsquo;s. Never release the race itself &mdash; faith, love, prayer, holiness. Hold particular assignments with an open hand, and let a door God has plainly closed be a redirection, not a dare.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Fixing the Gaze &mdash; A Daily Hebrews 12 Discipline",
    summary:
      "The writer of Hebrews prescribes attention, not adrenaline: looking away from the remaining miles and the failing legs, to Jesus. A daily practice of deliberately re-pointing the eyes before the day&rsquo;s load is lifted.",
    steps: [
      "Each morning, before the day&rsquo;s burden is picked up, read Hebrews 12:1-3 slowly. Name the race &ldquo;set before&rdquo; you today &mdash; the actual assigned course: this illness, this marriage, this ministry, this work, this waiting. Not the course you would have chosen; the one marked out.",
      "Lay aside every weight: identify one thing that is not your assigned load but is slowing the run &mdash; a grievance, a comparison, a distraction, a sin that clings. Perseverance is not only carrying well but refusing to carry what was never assigned.",
      "Spend five minutes considering him who endured (Heb 12:3): trace one specific scene of Christ&rsquo;s endurance &mdash; Gethsemane, the silence before accusers, the cross &mdash; and the fact that he could have walked out from under it at any moment, and remained for you.",
      "Name the joy set before you. Christ endured &ldquo;for the joy set before him&rdquo;; endurance is teleological. Write one sentence of the hope you are running toward &mdash; the Day, the crown, the &ldquo;well done,&rdquo; the people you will have loved to the end.",
      "Through the day, practice the glance: each time weariness or the urge to quit surfaces, treat it as a cue to look up &mdash; a breath-length prayer: &ldquo;Founder and perfecter of my faith, I am looking at you.&rdquo; Where the eyes fix, the runner follows.",
    ],
    anchor: "Hebrews 12:1-2 &mdash; &ldquo;Let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith.&rdquo;",
  },
  {
    number: "02",
    title: "Naming the Quit-Voice &mdash; Bringing the Temptation into the Light",
    summary:
      "The temptation to quit always has a script &mdash; &ldquo;it doesn&rsquo;t matter,&rdquo; &ldquo;nothing will change,&rdquo; &ldquo;anyone reasonable would stop.&rdquo; A practice of writing the script down, testing it against truth, and answering it out loud, so it loses the power of operating unexamined.",
    steps: [
      "When the urge to give up rises, do not argue with it vaguely &mdash; transcribe it. Write down, word for word, what the quit-voice is actually saying: &ldquo;This will never change.&rdquo; &ldquo;No one sees this.&rdquo; &ldquo;You&rsquo;ve done enough.&rdquo; &ldquo;You were a fool to start.&rdquo; Temptation thrives unexamined and weakens on paper.",
      "Test each line against the truth. &ldquo;This will never change&rdquo; &mdash; do you know that, or is it the fatigue talking? &ldquo;No one sees&rdquo; &mdash; &ldquo;God is not unjust so as to overlook your work&rdquo; (Heb 6:10). &ldquo;You&rsquo;ve done enough&rdquo; &mdash; is the assignment complete, or just heavy? Most quit-scripts contain a half-truth riding a lie; separate them.",
      "Check honestly for the Demas signature: is this temptation actually a rival love &mdash; some version of &ldquo;this present world&rdquo; promising ease, approval, or escape? Name the rival love specifically. Quitting is rarely about the load; it is usually about an alternative affection.",
      "Also check honestly for the stubbornness signature: ask whether God may genuinely be closing this door (Scripture, counsel, providence, the Spirit&rsquo;s witness) &mdash; or whether it has merely gotten hard. Hardness alone is never the signal. If the assignment stands, so do you.",
      "Answer the voice out loud or in writing, in the pattern of Psalm 42 (&ldquo;Why are you cast down, O my soul? Hope in God&rdquo;): preach to yourself instead of only listening to yourself. End with one sentence of resolve for today only: &ldquo;By grace, I will not put this down today.&rdquo; Perseverance is built a day at a time.",
    ],
    anchor: "James 1:12 &mdash; &ldquo;Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life.&rdquo;",
  },
  {
    number: "03",
    title: "The Widow&rsquo;s Petition &mdash; Persisting in One Prayer Without Losing Heart",
    summary:
      "Jesus&rsquo;s remedy for losing heart is a specific kind of praying: continual coming with the same petition. A practice of selecting the long prayers of your life and building a structure that keeps you asking through the delay.",
    steps: [
      "Identify your widow-petitions: the one to three prayers you have prayed so long that you are tempted to stop &mdash; the prodigal&rsquo;s return, the healing, the reconciliation, the breakthrough, justice in a situation of real wrong. Write each as a single clear sentence, as the widow had one: &ldquo;Give me justice against my adversary.&rdquo;",
      "Set the structure of continual coming: a fixed daily moment (with coffee, at a commute, before bed) when these petitions are prayed by name &mdash; brief is fine; the widow&rsquo;s power was repetition, not eloquence. Structure is how prayer survives the death of the feeling that started it.",
      "Pray the contrast as part of the prayer: &ldquo;Father, you are not the unjust judge. You love the one I am praying for more than I do. I am not wearing you down; you have invited my continual coming.&rdquo; The theology of the parable, prayed, is what keeps the asking from curdling into resentment.",
      "Keep a record of the long prayer&rsquo;s history &mdash; when it began, what has moved, partial answers, providences along the way. Delay erases memory, and erased memory breeds lost heart. The record is evidence that the silence has not been empty.",
      "When the temptation comes to stop asking, hear it as the parable&rsquo;s closing question addressed to you &mdash; &ldquo;when the Son of Man comes, will he find faith?&rdquo; &mdash; and answer it by praying the petition one more time. The asking itself is the not-quitting.",
    ],
    anchor: "Luke 18:1 &mdash; &ldquo;And he told them a parable to the effect that they ought always to pray and not lose heart.&rdquo;",
  },
  {
    number: "04",
    title: "The Cloud of Witnesses &mdash; Borrowing Endurance from Finished Races",
    summary:
      "Hebrews surrounds the runner with witnesses &mdash; the finished lives of chapter 11 &mdash; before pointing to Jesus. A practice of deliberately keeping company with finishers: in Scripture, in church history, and in the living saints near you.",
    steps: [
      "Read one finished race per week: an entry from Hebrews 11, or a biography chapter &mdash; Bunyan in his cell, Wilberforce in year twenty of forty-six, Fanny Crosby in her blindness, Liddell in the internment camp, Ryle in his obscurity. Read specifically for the middle miles: how did they keep going when nothing was moving?",
      "Notice the pattern the witnesses share: none of them finished by feeling strong. They finished by ordinary repeated faithfulness under unrelieved loads &mdash; which means your unglamorous endurance is not a substandard version of the race but the race itself, as it has always been run.",
      "Find the living witnesses within reach: the saint in your church who has carried a disabled child for thirty years, nursed a spouse through dementia, prayed for a prodigal for decades, served without recognition. Ask them the direct question: &ldquo;What kept you going?&rdquo; Their answers are worth more than most books.",
      "Let yourself be witnessed in turn: tell one trusted person what you are enduring and where you are tempted to quit. Endurance attempted in secret is endurance attempted at half strength &mdash; the runners in Hebrews are surrounded, not solitary. Ask that person to check on you at intervals.",
      "Remember the direction of the metaphor: the witnesses are not judges scoring your form; they are testimony that the course is runnable and the finish is real. The cloud exists &ldquo;therefore&hellip; let us run&rdquo; &mdash; company is fuel.",
    ],
    anchor: "Hebrews 12:1 &mdash; &ldquo;Therefore, since we are surrounded by so great a cloud of witnesses&hellip; let us run with endurance the race that is set before us.&rdquo;",
  },
  {
    number: "05",
    title: "The Long Obedience Audit &mdash; Measuring by Direction, Not by Days",
    summary:
      "Eugene Peterson named discipleship &ldquo;a long obedience in the same direction&rdquo; in a culture of instant everything. A monthly review practice that measures the race the way Scripture does &mdash; by direction and faithfulness, not by speed and visible results.",
    steps: [
      "Once a month, take thirty minutes to review the long assignments of your life &mdash; marriage, children, calling, ministry, recovery, the care of someone, the long prayer. For each, ask the direction question, not the speed question: is my face still pointed toward obedience here, even if progress feels imperceptible?",
      "Refuse the harvest-clock. &ldquo;Let us not grow weary of doing good, for in due season we will reap, if we do not give up&rdquo; (Gal 6:9) &mdash; the season is &ldquo;due,&rdquo; meaning appointed by God, not scheduled by you. Weariness almost always comes from holding God&rsquo;s work to your calendar. Name where you have been doing that, and put the calendar down.",
      "Record the produced things: where has the load itself produced endurance, character, hope this month (Rom 5:3-4)? The growth that suffering produces is usually invisible to the sufferer until it is written down. The audit makes the factory&rsquo;s output visible.",
      "Distinguish the loads: list what you are carrying and mark each one &mdash; assigned by God, or assumed by self? Recommit to the assigned. Begin honest discernment (Scripture, counsel, prayer) about the self-assumed, and release what was never given, without guilt. Stubbornness discarded is strength recovered for the real race.",
      "Close by preaching Philippians 1:6 to yourself in the first person: &ldquo;He who began a good work in me will bring it to completion.&rdquo; The audit ends not in self-assessment but in the preservation of the saints: the deepest reason next month&rsquo;s obedience is possible is that God holds the one obeying.",
    ],
    anchor: "Galatians 6:9 &mdash; &ldquo;And let us not grow weary of doing good, for in due season we will reap, if we do not give up.&rdquo;",
  },
  {
    number: "06",
    title: "Finishing-Well Foresight &mdash; Writing the 2 Timothy 4:7 Sentence Early",
    summary:
      "Demas did not plan to desert; affection drifted until desertion was natural. A practice of deciding now what finishing well means, naming the rival loves early, and building the habits that make verse 7 more likely than verse 10.",
    steps: [
      "Write your own verse 7 &mdash; the sentence you want to be true at the end: &ldquo;I have fought&hellip; I have finished&hellip; I have kept&hellip;&rdquo; Be concrete: kept faith, kept covenant with this spouse, finished raising these children in the Lord, completed this assigned work. The end clarifies the middle. Keep the sentence where you will re-read it.",
      "Name your Thessalonica: the specific form of &ldquo;this present world&rdquo; most plausible as your rival love &mdash; comfort, wealth, approval, ease in retirement, an escape fantasy. Demas&rsquo;s desertion began as an affection long before it became a departure. The rival named early is the rival watchable.",
      "Audit the loves quarterly, not just the behaviors: not only &ldquo;am I still performing the duties&rdquo; but &ldquo;what am I daydreaming about, envying, resenting?&rdquo; Affection drifts before feet do. Treat a cooling love for Christ as the most serious finding the audit can produce, and take it to him in prayer immediately &mdash; he restores lovers, not just workers (John 21:15-17).",
      "Build desertion-resistance into the structure of your life: stay surrounded (the isolated quit more easily), stay assigned (people desert vague callings faster than concrete ones), stay expectant (Paul finished looking at &ldquo;that Day&rdquo; and &ldquo;the crown&rdquo; &mdash; hope is endurance&rsquo;s fuel line).",
      "Hold even this practice inside grace: the goal is not to finish by white-knuckled vigilance but to remain in the hands of the one who preserves what he saves. Pray regularly: &ldquo;He who began a good work &mdash; finish it. Keep me in love with the right things. Let me be found running.&rdquo;",
    ],
    anchor: "2 Timothy 4:7-8 &mdash; &ldquo;I have fought the good fight, I have finished the race, I have kept the faith. Henceforth there is laid up for me the crown of righteousness.&rdquo;",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "John Bunyan",
    role: "The Pilgrim&rsquo;s Progress &mdash; Twelve Years in Bedford Jail Rather Than Stop Preaching",
    quote:
      "I have determined, the Almighty God being my help and shield, yet to suffer, if frail life might continue so long, even till the moss shall grow on mine eyebrows, rather than thus to violate my faith and principles.",
    bio: "John Bunyan (1628-1688) was an unlicensed tinker-preacher in Bedford, England, arrested in 1660 for preaching without the sanction of the established church. The judges offered him release on a single condition &mdash; that he promise to stop preaching &mdash; and he refused, telling them that if released today he would preach again tomorrow. The refusal cost him twelve years in Bedford jail, with a blind daughter, a young wife, and a family dependent on the tagged laces he made in his cell. His own account of the temptation to quit is among the most honest in Christian literature: he wrote of the pull of his family as &ldquo;the pulling of the flesh from my bones,&rdquo; and he felt the force of every argument for compromise. He remained under the load anyway &mdash; and in that cell wrote The Pilgrim&rsquo;s Progress, the allegory of a pilgrim persevering from the City of Destruction to the Celestial City through the Slough of Despond, Vanity Fair, Doubting Castle, and Giant Despair. It became, after the Bible, perhaps the most widely read book in the English language. The map of Christian endurance that has guided millions of pilgrims was drawn by a man who was, at the time, enduring &mdash; proof that the years spent remaining under a load are not subtracted from a life&rsquo;s work but are very often the work itself.",
  },
  {
    name: "William Wilberforce",
    role: "Member of Parliament &mdash; Forty-Six Years Against the Slave Trade",
    quote:
      "Never, never will we desist till we have wiped away this scandal from the Christian name, released ourselves from the load of guilt under which we at present labour, and extinguished every trace of this bloody traffic.",
    bio: "William Wilberforce (1759-1833) was converted to evangelical faith as a rising young member of Parliament and concluded, with John Newton&rsquo;s counsel, that God had set before him two great objects: the suppression of the slave trade and the reformation of morals. He introduced his first abolition bill in 1789. It failed. So did the next, and the next &mdash; defeated, delayed, talked out, and outmaneuvered by the most powerful economic interests in the empire, year after year, through war, vilification, and his own chronic, debilitating illness (he relied on opium prescribed for ulcerative colitis and was repeatedly near death). He brought abolition motions before Parliament for eighteen years before the slave trade was abolished in 1807 &mdash; and then kept going, pressing for the abolition of slavery itself for another twenty-six. Word that the Emancipation Bill would pass reached him on his deathbed in July 1833; he died three days later. Forty-six years between the calling and its completion, almost all of them without visible victory, make Wilberforce the modern archetype of hupomone applied to public evil: justice work measured in decades, sustained not by results &mdash; there were almost none for eighteen years &mdash; but by the settled conviction that the assignment was from God and could not be put down.",
  },
  {
    name: "Fanny Crosby",
    role: "Hymn Writer &mdash; Blind from Infancy, Eight Thousand Hymns of Unbroken Hope",
    quote:
      "It seemed intended by the blessed providence of God that I should be blind all my life, and I thank him for the dispensation. If perfect earthly sight were offered me tomorrow I would not accept it. I might not have sung hymns to the praise of God if I had been distracted by the beautiful and interesting things about me.",
    bio: "Frances Jane Crosby (1820-1915) was blinded in infancy by a botched medical treatment and lived ninety-five years in darkness &mdash; out of which came more than eight thousand hymns, including &ldquo;Blessed Assurance,&rdquo; &ldquo;To God Be the Glory,&rdquo; &ldquo;Pass Me Not, O Gentle Savior,&rdquo; and &ldquo;All the Way My Savior Leads Me.&rdquo; At eight years old she wrote her first defiant verse: &ldquo;Oh, what a happy soul I am, although I cannot see; I am resolved that in this world contented I will be.&rdquo; Her perseverance was of the lifelong, daily kind: not one dramatic trial endured and finished, but a permanent condition remained under for nearly a century &mdash; and remained under singing. She knew sorrow beyond blindness: she and her husband lost their only child in infancy, a grief she rarely spoke of, out of which many believe &ldquo;Safe in the Arms of Jesus&rdquo; was written. She lived simply, gave away most of what she earned, and spent her later decades in rescue mission work among the poor of New York, insisting she was &ldquo;first and foremost a mission worker.&rdquo; Crosby embodies a truth the performance-driven heart resists: endurance is not the grim survival of a load but can become, by grace, the very platform of praise &mdash; the eight thousand songs were not written despite the darkness but out of it.",
  },
  {
    name: "Eric Liddell",
    role: "Olympic Champion and Missionary &mdash; Faithful to the Last Lap in a Prison Camp",
    quote:
      "Circumstances may appear to wreck our lives and God&rsquo;s plans, but God is not helpless among the ruins. God&rsquo;s love is still working. He comes in and takes the calamity and uses it victoriously, working out his wonderful plan of love.",
    bio: "Eric Liddell (1902-1945), the &ldquo;Flying Scotsman,&rdquo; famously refused to run the 100 metres heats on a Sunday at the 1924 Paris Olympics &mdash; the race he was favored to win &mdash; and then won gold in the 400 metres, a distance not his own, in world-record time. The world remembers the Olympic stand; the deeper story of perseverance came after. In 1925 he left athletic celebrity at its peak to serve as a missionary teacher in China, where his father had served, and remained through escalating chaos &mdash; civil war, banditry, the Japanese invasion &mdash; choosing to stay when staying grew dangerous, sending his pregnant wife and daughters to safety in Canada in 1941 while he remained at his post. Interned by the Japanese at the Weihsien camp in 1943, he became its quiet center: teaching science to children, organizing games, carrying coal, caring for the elderly, settling disputes &mdash; the prisoners called him &ldquo;Uncle Eric,&rdquo; and fellow internees later testified he was the finest Christian they had ever known. He died of an inoperable brain tumor in February 1945, five months before liberation, having reportedly declined an exchange-release arranged through Churchill&rsquo;s government in favor of a pregnant woman. His last recorded words were &ldquo;It&rsquo;s complete surrender.&rdquo; Liddell ran the assigned race to its actual finish line &mdash; not the Olympic tape, but a camp infirmary in occupied China &mdash; and his life stands as the great modern portrait of Hebrews 12: the runner who finished well because his eyes were fixed beyond the course.",
  },
  {
    name: "J.C. Ryle",
    role: "First Bishop of Liverpool &mdash; Holiness, and the Long Plod of Faithfulness",
    quote:
      "I ask you to persevere. The way may be long, the cross may be heavy, but the end is glorious. He that endures to the end shall be saved. There are no crowns without crosses, and no victory without a battle; but the rest which remains for the people of God will make amends for all.",
    bio: "John Charles Ryle (1816-1900) had his expected life dismantled at age twenty-five when his father&rsquo;s bank collapsed overnight, sweeping away the family fortune, the estate, and Ryle&rsquo;s parliamentary prospects; he entered the ministry, by his own blunt admission, with no other door open. What followed was four decades of unfashionable faithfulness: long years in obscure rural parishes, the deaths of two wives, the long invalid illness of a third, and sustained marginalization as he defended plain evangelical doctrine against the prevailing currents of ritualism and theological drift &mdash; often nearly alone, armed with tracts, plain sermons, and his classic works Holiness and Expository Thoughts on the Gospels. At sixty-four, an age when most men conclude, he was made the first Bishop of Liverpool, and spent twenty more years building churches and pastors&rsquo; pensions in a hard industrial city. Ryle&rsquo;s pen returned constantly to perseverance &mdash; he preached the &ldquo;religion of the plodding man,&rdquo; insisted that perseverance is the certain mark of true grace because God keeps his saints, and warned with equal force against the easy profession that fades. Spurgeon called him &ldquo;an evangelical champion&hellip; the best man in the Church of England.&rdquo; His life argues what his books argue: that most Christian endurance is unglamorous repetition &mdash; the same truth defended, the same parish served, the same losses absorbed &mdash; and that the plodders, kept by God, finish.",
  },
  {
    name: "Eugene Peterson",
    role: "A Long Obedience in the Same Direction &mdash; Discipleship Against the Instant",
    quote:
      "There is a great market for religious experience in our world; there is little enthusiasm for the patient acquisition of virtue, little inclination to sign up for a long apprenticeship in what earlier generations of Christians called holiness. It is not difficult in such a world to get a person interested in the message of the gospel; it is terrifically difficult to sustain the interest.",
    bio: "Eugene Peterson (1932-2018) spent twenty-nine years as the founding pastor of a single congregation, Christ Our King Presbyterian in Bel Air, Maryland, before becoming known to the wider world through The Message and some thirty books on the spiritual life. His most enduring phrase &mdash; borrowed, with deliberate irony, from the atheist Nietzsche &mdash; named the heart of discipleship as &ldquo;a long obedience in the same direction,&rdquo; the title of his 1980 book on the Psalms of Ascent. Peterson&rsquo;s diagnosis was that the modern world has produced the first generation of Christians formed by instant everything &mdash; instant results, instant intimacy, instant growth &mdash; and therefore constitutionally impatient with the actual shape of the Christian life, which is unhurried, repetitive, local, and long. His prescription was not intensity but persistence: worship on the weeks you feel nothing, prayer through the dry seasons, service in the same place among the same people for decades. He practiced it before he wrote it &mdash; three decades in one ordinary congregation, resisting every metric of speed and size, insisting that the pastor&rsquo;s real work was prayer, Scripture, and spiritual direction among particular people whose names he knew. Peterson gave the church its modern vocabulary for hupomone: discipleship is not a sprint of enthusiasm but a long obedience, and the same direction matters more than the pace.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Hebrews 12:1-3",
    text: "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God. Consider him who endured from sinners such hostility against himself, so that you may not grow weary or fainthearted.",
    reflection:
      "The complete anatomy of perseverance in three verses: company (the cloud of witnesses), lightening (lay aside the unassigned weights), assignment (the race set before us &mdash; given, not chosen), strategy (looking to Jesus &mdash; gaze, not grit), fuel (the joy set before him), and the remedy for weariness (consider him). The race is lost only by stopping, and the eyes are the engine.",
  },
  {
    reference: "James 1:2-4, 12",
    text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing&hellip; Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.",
    reflection:
      "Steadfastness is a produced thing &mdash; manufactured in exactly one factory, the trial remained under &mdash; and it must be allowed its &ldquo;full effect.&rdquo; Some completions only happen under load. The beatitude attaches to the remaining, not the relief, and the closing phrase quietly names what perseverance is at bottom: an act of love &mdash; &ldquo;promised to those who love him.&rdquo;",
  },
  {
    reference: "Romans 5:3-5",
    text: "Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us.",
    reflection:
      "Paul&rsquo;s production chain: suffering, endurance, character, hope &mdash; each stage the raw material of the next. The chain explains why God does not always lift the load: he is after the hope at the end of it. And the chain is anchored not in self-improvement but in poured-out love; the Spirit is in the sufferer before the suffering produces anything.",
  },
  {
    reference: "Luke 18:1, 7-8",
    text: "And he told them a parable to the effect that they ought always to pray and not lose heart&hellip; And will not God give justice to his elect, who cry to him day and night? Will he delay long over them? I tell you, he will give justice to them speedily. Nevertheless, when the Son of Man comes, will he find faith on earth?",
    reflection:
      "Jesus&rsquo;s own stated remedy for losing heart is continual asking. The argument runs by contrast: the widow persisted against an unjust judge&rsquo;s character; we persist into a loving Father&rsquo;s. The closing question turns the parable on the reader &mdash; the issue at the end is not whether God will answer but whether anyone will still be asking. To keep praying is to keep running.",
  },
  {
    reference: "2 Timothy 4:7-8, 10",
    text: "I have fought the good fight, I have finished the race, I have kept the faith. Henceforth there is laid up for me the crown of righteousness, which the Lord, the righteous judge, will award to me on that Day&hellip; For Demas, in love with this present world, has deserted me and gone to Thessalonica.",
    reflection:
      "The two endings of every Christian story, three verses apart: the finished race and the desertion. Demas&rsquo;s diagnosis is exact &mdash; not exhaustion but a rival love, &ldquo;in love with this present world.&rdquo; Everyone perseveres for what they love most, and everyone quits for the same reason. Guarding love is guarding endurance; Paul finished with his eyes on &ldquo;that Day.&rdquo;",
  },
  {
    reference: "Galatians 6:9",
    text: "And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
    reflection:
      "The farmer&rsquo;s logic of perseverance: between sowing and reaping stands a season whose length the sower does not control. The season is &ldquo;due&rdquo; &mdash; appointed by God, not scheduled by us &mdash; and most weariness comes from holding God&rsquo;s harvest to our calendar. The verse hangs the whole outcome on one condition only: not speed, not skill, not visible progress &mdash; &ldquo;if we do not give up.&rdquo;",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "tYbqUKDvJVc", title: "Hupomone &mdash; The Strength That Remains Under the Load" },
  { videoId: "qd0pjs3JTUc", title: "Run with Perseverance &mdash; Hebrews 12 and Fixing Your Eyes on Jesus" },
  { videoId: "Mw8Y9TJtZ1k", title: "The Perseverance of the Saints &mdash; Kept by the God Who Saves" },
  { videoId: "n7gFhSjbXBM", title: "The Persistent Widow &mdash; Always Pray and Do Not Give Up" },
  { videoId: "cTzZmkmcW1w", title: "Finishing Well &mdash; Demas, Paul, and the Two Endings of 2 Timothy 4" },
  { videoId: "D1xVjYzaJVE", title: "Perseverance vs. Stubbornness &mdash; When to Endure and When to Release" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianPerseverancePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<PSVEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whatImEnduring, setWhatImEnduring] = useState("");
  const [theTemptationToQuit, setTheTemptationToQuit] = useState("");
  const [whyIKeepGoing, setWhyIKeepGoing] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as PSVEntry[]);
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
    if (!whatImEnduring.trim() || !whyIKeepGoing.trim()) return;
    const entry: PSVEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whatImEnduring: whatImEnduring.trim(),
      theTemptationToQuit: theTemptationToQuit.trim(),
      whyIKeepGoing: whyIKeepGoing.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhatImEnduring("");
    setTheTemptationToQuit("");
    setWhyIKeepGoing("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? ROSE : BORDER}`,
    background: active ? "rgba(225, 29, 72, 0.12)" : "transparent",
    color: active ? ROSE : MUTED,
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
    color: ROSE,
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
                color: ROSE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Remaining Under the Load
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Perseverance: Running the Race Marked Out
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The New Testament word for perseverance &mdash; hupomone &mdash; means remaining under the
              load: not the strength that escapes the weight but the strength that stays beneath it,
              still hoping, still praying, still moving. This guide traces the theology of endurance from
              Hebrews 12 to the persistent widow, from Paul&rsquo;s catalog of sufferings to the two
              endings of 2 Timothy 4, and builds the practices that keep a runner on the course when
              everything argues for stopping.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${ROSE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Let us run with endurance the race that is set before us, looking to Jesus, the
                founder and perfecter of our faith, who for the joy that was set before him endured the
                cross.&rdquo;
              </p>
              <p style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 600 }}>Hebrews 12:1-2</p>
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
                Nine studies in the theology of perseverance &mdash; from the hupomone root to the race
                of Hebrews 12, from the preservation of the saints to Christ&rsquo;s endurance as fuel
                for ours, from James&rsquo;s beatitude and Paul&rsquo;s catalog to the persistent widow,
                the two endings of 2 Timothy 4, and the hard discernment between endurance and
                stubbornness.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: ROSE,
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
                        background: "rgba(225, 29, 72, 0.07)",
                        border: "1px solid rgba(225, 29, 72, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: ROSE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Perseverance is remaining under an assigned load with eyes fixed on Jesus &mdash;
                  produced by trial, fueled by hope, guarded by love, and undergirded at the bottom by
                  the God who preserves what he saves. The race is lost only by stopping, and the stopping
                  almost always begins as a rival love. See how endurance relates to honest grief in{" "}
                  <Link href="/christian-lament" style={{ color: ROSE, textDecoration: "underline" }}>
                    Christian Lament
                  </Link>{" "}
                  or to the words that keep runners running in{" "}
                  <Link
                    href="/christian-encouragement"
                    style={{ color: ROSE, textDecoration: "underline" }}
                  >
                    Christian Encouragement
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
                Six practices for the long race &mdash; fixing the gaze daily, naming the quit-voice,
                persisting in the widow&rsquo;s petition, borrowing endurance from the cloud of
                witnesses, auditing the long obedience monthly, and writing the finishing-well sentence
                early. Start with the gaze and let the rest build.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: ROSE,
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
                      color: ROSE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the middle miles
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Most quitting happens in the middle &mdash; after the start&rsquo;s adrenaline is gone
                  and before the finish is in sight, in the long stretch where nothing visibly moves.
                  That is precisely where these practices are aimed. None of them is dramatic; neither is
                  endurance. The Journal tab is built for the middle miles: naming what you are actually
                  enduring, transcribing the quit-voice so it loses its unexamined power, and writing
                  down &mdash; again and again &mdash; the hope set before you.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six finished races &mdash; Bunyan&rsquo;s twelve years in a cell, Wilberforce&rsquo;s
                forty-six years against the slave trade, Fanny Crosby&rsquo;s ninety-five singing years of
                blindness, Eric Liddell&rsquo;s last lap in an internment camp, Ryle&rsquo;s long plod of
                faithfulness, and Peterson&rsquo;s long obedience in the same direction. None of them
                finished by feeling strong.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
                  <div
                    style={{
                      color: ROSE,
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
                      background: "rgba(225, 29, 72, 0.06)",
                      borderLeft: `3px solid ${ROSE}`,
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
                Six passages that form the biblical theology of perseverance &mdash; Hebrews 12,
                James 1, Romans 5, the persistent widow of Luke 18, the two endings of 2 Timothy 4, and
                Galatians 6:9. Read one per week alongside the Journal practice, and let each text both
                steady the grip and re-point the eyes.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: ROSE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Bring each passage into contact with the specific load you are under. Name what you are
                  enduring, read the text as God&rsquo;s word into that endurance, and then pray it in
                  the first person: &ldquo;Lord, this is the race set before me. I am weary here. Fix my
                  eyes on Jesus. Let steadfastness have its full effect in me. Keep me asking and not
                  losing heart. He who began a good work in me will bring it to completion &mdash; I am
                  holding you to your promise, because you invited me to.&rdquo;
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three fields for the middle miles &mdash; what you are enduring right now, what the
                temptation to quit actually sounds like, and why you keep going. Entries are stored
                privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New perseverance entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="psv-enduring" style={labelStyle}>
                    What I&rsquo;m enduring right now
                  </label>
                  <textarea
                    id="psv-enduring"
                    value={whatImEnduring}
                    onChange={(e) => setWhatImEnduring(e.target.value)}
                    placeholder="The actual load: the illness, the marriage, the waiting, the work, the long prayer. Name the race set before you..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="psv-temptation" style={labelStyle}>
                    The temptation to quit &mdash; what it sounds like
                  </label>
                  <textarea
                    id="psv-temptation"
                    value={theTemptationToQuit}
                    onChange={(e) => setTheTemptationToQuit(e.target.value)}
                    placeholder="Transcribe the quit-voice word for word: 'It will never change.' 'No one sees this.' 'You've done enough.' It weakens on paper..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="psv-why" style={labelStyle}>
                    Why I keep going &mdash; the hope set before me
                  </label>
                  <textarea
                    id="psv-why"
                    value={whyIKeepGoing}
                    onChange={(e) => setWhyIKeepGoing(e.target.value)}
                    placeholder="Christ endured 'for the joy set before him.' Name yours: the Day, the crown, the people you will have loved to the end..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whatImEnduring.trim() || !whyIKeepGoing.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whatImEnduring.trim() || !whyIKeepGoing.trim() ? BORDER : ROSE,
                    color: !whatImEnduring.trim() || !whyIKeepGoing.trim() ? MUTED : "#F2F2F8",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whatImEnduring.trim() || !whyIKeepGoing.trim() ? "not-allowed" : "pointer",
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
                      Name the load, transcribe the quit-voice, and write down the hope set before you.
                      Over time, these entries become a record of the middle miles &mdash; evidence, on
                      the days when nothing seems to move, of how far the God who preserves his saints
                      has already carried you.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: ROSE }}>
                              {entry.whatImEnduring.length > 70
                                ? `${entry.whatImEnduring.slice(0, 70)}…`
                                : entry.whatImEnduring}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
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
                            What I&rsquo;m enduring
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whatImEnduring}
                          </p>
                        </div>

                        {entry.theTemptationToQuit && (
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
                              The temptation to quit
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                              {entry.theTemptationToQuit}
                            </p>
                          </div>
                        )}

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
                            Why I keep going
                          </span>
                          <p
                            style={{
                              color: MUTED,
                              lineHeight: 1.65,
                              fontSize: "0.9rem",
                              fontStyle: "italic",
                            }}
                          >
                            {entry.whyIKeepGoing}
                          </p>
                        </div>
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
                Teaching on hupomone, the race of Hebrews 12, the perseverance of the saints, the
                persistent widow, finishing well, and the line between endurance and stubbornness. Good
                companions to the Theology and Practices tabs.
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
              The race is lost only by stopping
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Hupomone is not a personality trait but a produced thing &mdash; manufactured under loads
              that are not lifted, fueled by a joy set ahead, guarded by love, and held, underneath
              everything, by the God who finishes what he begins. The witnesses surround the course; the
              founder and perfecter sits at its end; the widow is still knocking; the crown is laid up.
              None of the finishers felt strong in the middle miles. They kept going anyway, a day at a
              time &mdash; and so, by grace, can you.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: learn the honest grief that endurance must be allowed to carry in{" "}
              <Link href="/christian-lament" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Lament
              </Link>
              , see the words that strengthen failing hands in{" "}
              <Link
                href="/christian-encouragement"
                style={{ color: ROSE, textDecoration: "underline" }}
              >
                Christian Encouragement
              </Link>
              , or explore the slow trust of the long season in{" "}
              <Link href="/christian-patience" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Patience
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
