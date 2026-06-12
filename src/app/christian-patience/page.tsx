"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const AMBER = "#F59E0B";

const STORAGE_KEY = "vine_christianpatience_entries";

interface PATEntry {
  id: string;
  date: string;
  whatImWaitingFor: string;
  theFrustration: string;
  whatGodMightBeDoing: string;
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
    badge: "Greek Theology — James 1:3 / Romans 5:3",
    title: "Hupomone vs. Makrothumia — Two Kinds of Patience the New Testament Names",
    paragraphs: [
      "The New Testament uses two distinct Greek words that English translations both render &ldquo;patience,&rdquo; and the difference between them is theologically significant. Hupomone (ὑπομονή) means steadfast endurance under trials and circumstances &mdash; staying under a load, refusing to flee from what is hard. It is the patience of a person pressed by difficulty who does not collapse. Makrothumia (μακροθυμία) means long-suffering toward people &mdash; slow to anger, bearing with the provoking, the slow, and the sinful without retaliation. It is the patience of a person who has been wronged and does not strike back.",
      "James 1:3 uses hupomone when he says the testing of faith produces steadfastness: the patience in view is the refusal to abandon God under pressure of circumstances. James 5:10-11 uses hupomone for the prophets and Job, who endured suffering without deserting their post. But when Paul lists patience as a fruit of the Spirit in Galatians 5:22, he uses makrothumia: this is the patience that God himself shows toward sinners (&ldquo;not wanting any to perish&rdquo; &mdash; 2 Pet 3:9) and that we are commanded to show toward one another.",
      "Both kinds of patience are required in the Christian life, and they reinforce each other: the person who has learned to endure suffering patiently (hupomone) has been stripped of the self-centeredness that makes makrothumia hard; the person who has practiced long-suffering toward people has learned the kind of surrender that makes hupomone possible. To grow in patience is to grow in both dimensions simultaneously &mdash; and the laboratory for both is ordinary life.",
    ],
    callout: {
      label: "The distinction",
      text: "Hupomone: patience under trials and circumstances, refusing to flee. Makrothumia: patience toward people, refusing to retaliate. Both are required; both are gifts of the Spirit.",
    },
  },
  {
    badge: "James 1:2-4",
    title: "The Testing That Produces Patience — Count It All Joy",
    paragraphs: [
      "&ldquo;Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing&rdquo; (Jas 1:2-4). James does not say to pretend trials are not painful or to manufacture false happiness. He says to count it joy &mdash; a deliberate, reasoned orientation toward the trial based on what you know it is producing. The joy is not about the pain; it is about the outcome: steadfastness, and through steadfastness, completeness.",
      "The word for &ldquo;testing&rdquo; is dokimion &mdash; the same word used for testing the purity of metal. The trial is not an accident or a punishment; it is a refining process. The faith that has been tested and held is more reliable than the faith that has never been tested. James&rsquo;s logic is forward-looking: the trial is unpleasant now, but the person who allows it to produce steadfastness rather than abandonment is building something that will hold under greater pressure in the future. Patience is the investment; completeness is the return.",
      "The command to &ldquo;let steadfastness have its full effect&rdquo; is significant: James implies that we can cut the process short by fleeing the trial, rushing toward resolution, or insisting on our own timeline for relief. The temptation is not only to give up but to give up just before the work is finished. Biblical patience is therefore not merely the absence of flight but the deliberate choice to remain under the pressure long enough for the work to be completed.",
    ],
    callout: {
      label: "Key insight",
      text: "James 1:4 &mdash; &ldquo;Let steadfastness have its full effect.&rdquo; Patience is not only refusing to flee; it is refusing to cut the process short before God has finished what he is doing.",
    },
  },
  {
    badge: "Romans 5:3-4",
    title: "Suffering Produces Patience, Patience Character, Character Hope",
    paragraphs: [
      "&ldquo;We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us&rdquo; (Rom 5:3-5). Paul traces a chain of causation in which suffering is not the terminus but the beginning of a sequence that leads to hope. The chain is not automatic &mdash; it requires the active cooperation of patience. Suffering that is fled produces nothing; suffering that is endured in faith produces the character that holds the hope that does not disappoint.",
      "The word Paul uses for endurance is hupomone: the steadfast remaining under the load. But the next link in the chain &mdash; dokime, character or proven-ness &mdash; is the result of tested endurance: not untried faith but faith that has been put to the test and has not given way. This is the same root as the dokimion in James. Character in the New Testament sense is not personality or virtue in the abstract; it is the specific quality of a person who has been through the fire and has been found trustworthy. Hope built on untested character is fragile; hope built on dokime is the hope that does not put to shame.",
      "The foundation that holds the whole chain together is verse 5: &ldquo;God&rsquo;s love has been poured into our hearts through the Holy Spirit.&rdquo; Patience is not stoic willpower. It is the overflow of a love already received. The person who knows they are loved &mdash; not conditionally or performatively, but poured into the heart by the Spirit &mdash; has the resource from which patience is drawn. The chain runs: love received, suffering endured, character formed, hope grounded. Impatience is often a symptom of imperfect confidence in being loved.",
    ],
  },
  {
    badge: "Mark 4:28 — The Parable of the Sower",
    title: "The Patient Earth — The Soil That Yields in Its Time",
    paragraphs: [
      "&ldquo;The earth produces by itself, first the blade, then the ear, then the full grain in the ear. But when the grain is ripe, at once he puts in the sickle, because the harvest has come&rdquo; (Mark 4:28-29). This brief parable in Mark&rsquo;s Gospel is sometimes called the parable of the patient earth. The farmer scatters the seed, sleeps and rises night and day, and the seed sprouts and grows &mdash; &ldquo;he knows not how.&rdquo; The growth is not produced by the farmer&rsquo;s anxious management; it is produced by the earth doing what the earth does in the time the earth requires.",
      "The theological point is about the Kingdom of God: it does not grow by human impatience or management. The sower&rsquo;s role is to scatter the seed and to wait, trusting the earth and trusting the One who made it. The farmer does not dig up the seed to check on it, does not try to accelerate the process, does not despair because the blade has not yet become the ear. He sleeps. He rises. He waits. And the harvest comes in its time.",
      "The parable is comfort and correction for the impatient: the work of God is being done even when nothing visible is happening. The periods of apparent dormancy are not empty; they are the underground work without which the blade cannot appear. Patience is the posture of the person who has scattered what has been given to scatter and now trusts the God who gives the growth. The harvest will come. It will come when it is ripe. It does not come faster because we are anxious.",
    ],
    callout: {
      label: "The image",
      text: "Mark 4:28 &mdash; The patient earth does not produce the harvest by anxious effort but by receiving the seed and doing what it was made to do in the time that is required. The farmer sleeps and rises; the Kingdom grows.",
    },
  },
  {
    badge: "2 Peter 3:9",
    title: "God&rsquo;s Patience With Us as the Model — Not Wanting Any to Perish",
    paragraphs: [
      "&ldquo;The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance&rdquo; (2 Pet 3:9). The context is eschatological: scoffers are asking why Christ has not returned yet. Peter&rsquo;s answer is that the delay is not failure but makrothumia &mdash; God&rsquo;s long-suffering patience, his willingness to defer the final judgment in order to allow more people time to repent. What looks like slowness is love expressed in time.",
      "This passage grounds the makrothumia the New Testament calls us to in the character of God himself. We are to be patient with difficult and sinful people because God is patient with difficult and sinful people &mdash; including us. The measure of God&rsquo;s patience toward us is the standard for our patience toward others. Paul makes this explicit in Romans 15:7: &ldquo;Accept one another, then, just as Christ accepted you, in order to bring praise to God.&rdquo; The patience required of us is the patience we have already received.",
      "The practical implication is profound: when we grow impatient with someone who is slow to change, slow to understand, slow to repent, or simply slow &mdash; we are invited to remember that God has been patient with us through every equivalent season in our own lives. Our impatience with others is often a failure of the imagination: the failure to see our own ongoing need for the very patience we are withholding. 2 Peter 3:9 does not simply command patience; it narrates the foundation from which patience flows.",
    ],
  },
  {
    badge: "Psalm 27:14",
    title: "Waiting on the Lord — Be Strong and Take Courage",
    paragraphs: [
      "&ldquo;Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!&rdquo; (Ps 27:14). The Psalm ends with this doubled exhortation, framing waiting not as passivity but as the most demanding form of strength: the strength to remain in the tension of unanswered prayer and unresolved suffering without collapsing into despair or rushing ahead of God. Biblical waiting is active. It is turned toward God, expectant, trusting that the one who has promised is faithful.",
      "The Hebrew qavah &mdash; translated &ldquo;wait&rdquo; &mdash; has a root meaning related to twisting or binding together, as strands of rope are braided for strength. To wait on the Lord is not to stand at a distance but to be bound to him, clinging, connected, strengthened by the connection itself. Isaiah 40:31 uses the same word: &ldquo;They who wait for the Lord shall renew their strength; they shall mount up with wings like eagles.&rdquo; The waiting itself is the source of the renewed strength, not the end of the waiting. Strength comes in the waiting, not after it.",
      "Psalm 27 as a whole is a psalm of confidence written in the midst of threat: David is surrounded by enemies and asking God to hide him, to teach him, not to forsake him. The command to wait at the end is not the conclusion of a resolved situation but a faith-command in an unresolved one. This is the nature of biblical patience: not the peace of resolution but the peace of a person who has decided to trust God&rsquo;s character even while the situation remains threatening. The courage to wait is among the most mature forms of the courage the Psalms commend.",
    ],
    callout: {
      label: "The word",
      text: "Qavah: to wait, but also to twist together &mdash; the image of strands being braided for strength. To wait on God is to be bound to him in the waiting, strengthened by the connection itself.",
    },
  },
  {
    badge: "Revelation 6:10-11",
    title: "A Little Longer — The Martyrs Under the Altar",
    paragraphs: [
      "&ldquo;They cried out with a loud voice, &lsquo;O Sovereign Lord, holy and true, how long before you will judge and avenge our blood on those who dwell on the earth?&rsquo; Then they were each given a white robe and told to rest a little longer, until the number of their fellow servants and their brothers should be complete&rdquo; (Rev 6:10-11). This passage in the Apocalypse is among the most striking and honest treatments of patience in the New Testament. The martyred saints in heaven are crying out: how long? And the answer is not &ldquo;your impatience is wrong&rdquo; but &ldquo;a little longer.&rdquo;",
      "The passage does not rebuke the martyrs for their longing. It takes it seriously, answers it, and gives the reason for the delay: the completion of a number, the fulfillment of a purpose, the gathering of others into the same company. The &ldquo;little longer&rdquo; is set within a divine economy that the martyrs cannot see from their vantage point but that God governs. They are given white robes &mdash; the assurance of righteousness and victory &mdash; and asked to rest in that assurance while the story continues.",
      "For the suffering person asking &ldquo;how long?&rdquo; this passage is both validating and reorienting. The &ldquo;how long&rdquo; prayer is not faithless; it is biblical. The Psalms are full of it. But the divine answer consistently reframes the question from &ldquo;why has God not acted?&rdquo; to &ldquo;what is God still doing?&rdquo; The delay is not abandonment; it is the ongoing work of a story larger than any single person&rsquo;s suffering. To wait &ldquo;a little longer&rdquo; with a white robe is not defeat; it is the patience of those who have seen enough of God&rsquo;s faithfulness to trust what they cannot yet see.",
    ],
  },
  {
    badge: "Active vs. Passive",
    title: "Sanctified Waiting — Active Not Passive",
    paragraphs: [
      "A persistent misunderstanding of Christian patience is that it means doing nothing &mdash; sitting quietly, suppressing complaint, and waiting for God to act while the self is entirely inactive. This is not the biblical portrait. Joseph waited in prison, but he kept working. David waited in the wilderness, but he wrote psalms, led men, and served Achish. The waiting of the New Testament is not the absence of activity but the reorientation of activity: doing what can be done while trusting God with what cannot.",
      "The contemplative tradition distinguishes between what Bernard of Clairvaux called the active life and the contemplative life &mdash; but even contemplative waiting is not passive. It requires the discipline of returning the wandering mind, the active posture of receptivity, the deliberate choice to be present to God rather than rehearsing the problem. Eugene Peterson&rsquo;s phrase &ldquo;a long obedience in the same direction&rdquo; captures it: patience is directional persistence, not static waiting.",
      "What sanctified waiting releases is the compulsive effort to control outcomes that are not ours to control. The active component of patience is not managing the unmanageable but doing the next faithful thing while releasing the results to God. This is the distinctive of Christian patience over mere stoic endurance: the Christian waits not in resignation but in expectancy, not in emptiness but in the company of the One whose timing is perfect and whose purposes are good. The waiting is active because the One being waited on is active &mdash; always, in the dark, even in the delay.",
    ],
    callout: {
      label: "The distinction",
      text: "Biblical patience is not passive resignation but active trust: doing the next faithful thing while releasing the results to God. The waiting is active because the One being waited on is always active.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Name the Wait — Identifying What You Are Enduring and Why",
    summary:
      "A journaling and prayer practice for bringing specificity to the waiting. Vague patience is difficult to sustain; named patience knows what it is enduring and why it is worth enduring.",
    steps: [
      "Write down specifically what you are waiting for or enduring right now. Not &ldquo;things are hard&rdquo; but the precise situation: the unanswered prayer, the unresolved relationship, the delayed healing, the career uncertainty that has stretched into years. Specificity is required for the kind of named trust James 1 calls for.",
      "Identify how long you have been waiting. Naming the duration is not self-pity; it is honesty. The &ldquo;how long&rdquo; prayer is biblical (Ps 13:1-2; Rev 6:10). Bring it to God in those terms. You are not telling God anything he does not know; you are taking your actual experience into his actual presence.",
      "Ask: what is being produced in me by this waiting? Not what I wish were happening, but what I can actually see forming &mdash; however partially. James 1:3 says the testing produces steadfastness; can you identify any strand of that in yourself, however small?",
      "Close with a deliberate reorientation: &ldquo;Lord, I am waiting for [name it]. I do not understand the delay. I trust that you are doing something I cannot yet see. I receive the white robe &mdash; the assurance of your righteousness and your purposes &mdash; and I choose to rest in that while I wait.&rdquo;",
    ],
    anchor: "James 1:4 — Let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",
  },
  {
    number: "02",
    title: "The Small School of Patience — Daily Provocation as Training",
    summary:
      "Using the minor frustrations of ordinary life as a training ground for the larger patience that will be required in crisis. Patience in the small things is not trivial; it is formative.",
    steps: [
      "Identify three to five recurring situations or people that reliably provoke impatience in you: the slow driver, the person who talks too long in meetings, the project that keeps getting delayed, the family member who doesn&rsquo;t change. These are your training grounds, not your obstacles.",
      "When the provocation arrives, practice a deliberate pause before responding. Not suppressing the impatience but intercepting it: a breath, a brief inward prayer (&ldquo;Lord, give me your patience toward this person&rdquo;), a moment of remembering that God has been patient with you. The pause is the practice.",
      "After each encounter, note what the impatience was about. Usually it is about control: the frustration that things are not going at your pace or according to your preference. Name the control. Offer it. The small surrender in the minor provocation is training the muscle that will be needed in the major one.",
      "Weekly, review the training ground: is the gap between provocation and pause getting shorter or longer? Is makrothumia growing, even slightly? Patience, like every spiritual discipline, grows through repeated small practice rather than occasional large effort.",
    ],
    anchor: "Galatians 5:22 — The fruit of the Spirit is&hellip; patience (makrothumia).",
  },
  {
    number: "03",
    title: "The &ldquo;How Long&rdquo; Prayer — Biblical Lament as an Act of Patience",
    summary:
      "Following the pattern of the Psalms and Revelation 6: bringing the actual frustration and grief of the waiting into God&rsquo;s presence honestly rather than suppressing it into pious resignation.",
    steps: [
      "Use Psalm 13 or Psalm 22 as a structural guide. Begin with the honest statement of the experience: &ldquo;How long, O Lord? Will you forget me forever?&rdquo; The &ldquo;how long&rdquo; prayer is not faithlessness; it is faith in the form of honest address. You do not cry out to someone you have given up on.",
      "In the middle of the lament, insert the inherited truth about God&rsquo;s character: &ldquo;And yet I know that you are&hellip;&rdquo; Hold the tension between the experience and the truth without resolving it prematurely. The Psalms do not resolve the tension; they hold both.",
      "Name specifically what you are hoping for and asking for. Biblical patience is not the abandonment of hope or desire; it is the refusal to seize what only God can give. Pray the desire clearly and specifically, then release it: &ldquo;I want this. I am not going to demand it on my timeline. I trust your timing.&rdquo;",
      "Close with a forward orientation: Psalm 13:5-6, Psalm 27:14. Whatever the experience right now, name the ground of hope. Not false positivity but grounded expectation: the character of the God who has been faithful before and will be faithful again.",
    ],
    anchor: "Psalm 27:14 — Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!",
  },
  {
    number: "04",
    title: "Reading the Sower Slowly — Releasing the Harvest to God",
    summary:
      "A lectio divina practice with Mark 4:26-29, allowing the image of the patient earth and the sleeping farmer to reshape the anxiety of the waiting.",
    steps: [
      "Read Mark 4:26-29 slowly, three times. First reading: simply receive the story. Second reading: identify which character you are. Are you the farmer who has scattered the seed and needs to sleep and rise without anxious management? What seed have you scattered that you are now obsessively monitoring?",
      "Sit with the image of the earth. The earth does not force the growth; it receives what has been given and does what it was made to do in the time that is required. What does it mean for you to be patient earth &mdash; receiving the work God is doing in you, doing what you are made to do, without forcing the harvest?",
      "Name the thing you have scattered and are now digging up to check on &mdash; the prayer, the relationship, the project, the hope. Write it down. Then, in prayer, put it back in the ground. &ldquo;Lord, I scatter this. I give it back to you. I trust the earth and the One who made it.&rdquo;",
      "Sleep and rise. Return to the passage the next day and the day after. Patience, the parable suggests, is cumulative: night after night after night, the earth is working. Trust the process that is longer than you want it to be.",
    ],
    anchor: "Mark 4:28 — The earth produces by itself, first the blade, then the ear, then the full grain in the ear.",
  },
  {
    number: "05",
    title: "Receiving God&rsquo;s Patience — The Foundation for Showing It",
    summary:
      "A meditation practice grounded in 2 Peter 3:9 and the parable of the unforgiving servant: allowing the experience of being the recipient of God&rsquo;s patience to become the source of our patience toward others.",
    steps: [
      "Sit with 2 Peter 3:9: &ldquo;The Lord&hellip;is patient toward you.&rdquo; Not toward humanity in general but toward you. Name specifically two or three areas of your own life where God has been patient with you &mdash; the slow change, the repeated failure, the long stretch of spiritual immaturity. Name them honestly.",
      "For each one, let the weight of the patience land: God has not given up on you in this. God has not grown exasperated with the timeline. God has not demanded that you be further along than you are. Let that patience be received rather than taken for granted.",
      "Now name the person toward whom you are most impatient. Place them in the position you were just in &mdash; the recipient of the patience you just received. What would it look like to extend to them what has been extended to you?",
      "Pray the connection explicitly: &ldquo;Lord, you have been patient with me in [name it]. I receive that patience. I now offer what I have received to [name the person]. I cannot manufacture this patience; I can only distribute what I have been given.&rdquo;",
    ],
    anchor: "2 Peter 3:9 — The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you.",
  },
  {
    number: "06",
    title: "The Evening Examen for Impatience — Where Did I Rush?",
    summary:
      "A nightly review practice adapted from the Ignatian Examen, focused on the day&rsquo;s impatience: where it appeared, what it was protecting, and where God&rsquo;s patience was available and not taken.",
    steps: [
      "Set aside ten minutes before sleep. Ask the Spirit to show you honestly: where did impatience appear today? Not just the obvious moments of frustration but the subtler forms: the rushed prayer, the skipped waiting, the anxious management of a process that needed to be released.",
      "For each identified moment: what was the underlying fear or desire that was being frustrated? Impatience is almost always the surface of something deeper &mdash; a fear of being out of control, a desire that feels threatened, a deadline that is anxiously driving. Name the underlying thing.",
      "Name one moment in the day where patience was shown &mdash; toward a person, in a situation, in prayer. Acknowledge it as grace, not achievement. The Spirit produced that moment; name it and thank God for it.",
      "Close with an act of deliberate release: name what you are still waiting for, still frustrated about, still wanting resolved &mdash; and give it to God for the night. Not forever; just for tonight. Sleep is itself an act of patience: the surrendering of the day&rsquo;s anxieties to the One who keeps watch while you rest.",
    ],
    anchor: "Psalm 4:8 — In peace I will both lie down and sleep; for you alone, O Lord, make me dwell in safety.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Charles Spurgeon",
    role: "Sermons on Patience — The God Who Is Worth Waiting For",
    quote:
      "The Lord&rsquo;s timing is always right. He is never before his time and never behind it. Our trouble is that we are always ahead of him. We want the harvest before the seed has had time to grow. But he who created time is not subject to our urgency.",
    bio: "Charles Spurgeon was the most widely-read preacher of the Victorian era, delivering sermons to thousands each week at the Metropolitan Tabernacle in London and publishing more than 3,500 sermons over his lifetime. His own experience of patience was forged in suffering: he battled severe depression throughout his ministry and spent years in physical pain from gout and kidney disease. His sermons on waiting and patience carry the authority of someone who had been through the long dark himself, and his consistent counsel &mdash; return to the character of God, not the comfort of your circumstances &mdash; is grounded in decades of pastoral practice. Spurgeon&rsquo;s treatment of patience is robustly theological: the foundation is not our capacity to endure but God&rsquo;s immovable sovereignty. The person who waits on God is not waiting on an uncertain outcome; they are waiting on the God who holds all outcomes, whose timing is governed by perfect wisdom and perfect love.",
  },
  {
    name: "Thomas &agrave; Kempis",
    role: "The Imitation of Christ — Patience as the Mark of Interior Progress",
    quote:
      "What doth it profit thee to enter into deep discussion concerning the Holy Trinity if thou lack humility? Truly it profiteth thee nothing. It is vanity to desire a long life if thou hast but little care for a good life. Better of a surety is a lowly peasant who serveth God, than a proud philosopher who watcheth the stars and neglecteth the knowledge of himself.",
    bio: "Thomas &agrave; Kempis (c. 1380-1471) was a German-Dutch Augustinian friar whose Imitation of Christ became one of the most widely-read devotional works in Christian history, second only to the Bible in some estimates. His treatment of patience is inseparable from his emphasis on humility and the interior life. He consistently connects impatience to pride: the refusal to accept circumstances that God has permitted because the self believes it deserves better, faster, or easier. &Agrave; Kempis argues that the person who endures small provocations and delays with grace has made real progress in the interior life, while the person who can discourse learnedly about patience but loses their temper at the first inconvenience has learned nothing. His counsel is characteristically practical and unsentimental: patience is proved not in the dramatic trials but in the ordinary irritations of daily life with difficult people in a slow world.",
  },
  {
    name: "Amy Carmichael",
    role: "Gold Cord; Edges of His Ways — Patience Forged in Long Service",
    quote:
      "We shall have all eternity to celebrate the victories, but we have only a few hours before sunset to win them. He who has made us will not be less than faithful. The waiting is not wasted; the delay is not defeat. He is the God of the long slow work.",
    bio: "Amy Carmichael (1867-1951) was an Irish missionary to India who spent fifty-five years in South India, the last twenty of them bedridden following an injury. She founded the Dohnavur Fellowship and rescued hundreds of children from temple prostitution. Her patience was not the patience of a comfortable life but of a person who had poured herself out in unglamorous, slow, costly service over decades &mdash; and who had been physically limited in the last twenty years of that service. Her writing &mdash; Gold Cord, Edges of His Ways, and many others &mdash; is saturated with the kind of patience that has been tested in the long slow work and has found God sufficient in every season. Carmichael is particularly eloquent on the patience required in institutional and relational work: the change that does not come quickly, the person who does not respond, the years that pass without visible fruit.",
  },
  {
    name: "Tim Keller",
    role: "Walking with God through Pain and Suffering — The Purpose in the Waiting",
    quote:
      "Christians are not called to a life free of pain and waiting but to a life in which suffering is the instrument through which God&rsquo;s glory is displayed and his character is formed in us. The waiting is not accidental. It is the means.",
    bio: "Tim Keller (1950-2023) was the founding pastor of Redeemer Presbyterian Church in New York City and one of the most theologically rigorous popular Christian writers of the late twentieth and early twenty-first centuries. His book Walking with God through Pain and Suffering is the most sustained and careful treatment of Christian suffering and patience in recent evangelical writing. Keller&rsquo;s approach is theological, historical, and pastoral: he grounds the call to patience in the character of God, traces the history of Christian thought about suffering from the early fathers through the Reformers and into the present, and applies it pastorally to the specific forms suffering takes in contemporary life. He is particularly helpful on the difference between the secular therapeutic response to suffering &mdash; how to get out of it as quickly as possible &mdash; and the biblical response, which is to ask what God is doing in it and to cooperate with that work through patient endurance.",
  },
  {
    name: "Elisabeth Elliot",
    role: "A Path Through Suffering; Suffering Is Never for Nothing — Patience in Loss",
    quote:
      "The secret is Christ in me, not me in a different set of circumstances. The waiting is not about changing the circumstances; it is about being changed in them. God&rsquo;s patience with us is his refusal to let us stay as we are. Our patience with God is our refusal to demand that he change before we trust him.",
    bio: "Elisabeth Elliot (1926-2015) was a missionary, author, and speaker whose husband Jim Elliot was killed by the Auca people of Ecuador in 1956, a tribe she subsequently returned to as a missionary. Her life was shaped by multiple experiences of loss and waiting &mdash; not only Jim&rsquo;s death but the death of her second husband Addison Leitch and decades of chronic pain in her later years. Her writing on patience and suffering is among the most grounded in Christian literature precisely because it is not theoretical: she writes from the inside of loss and from the long practice of patience in circumstances that did not resolve or improve on any human timeline. A Path Through Suffering and Suffering Is Never for Nothing are her most direct treatments of what patience looks like when the circumstances do not change and the suffering does not end &mdash; and what it means to discover that God is enough.",
  },
  {
    name: "Eugene Peterson",
    role: "A Long Obedience in the Same Direction — Patience as the Shape of Discipleship",
    quote:
      "Everybody wants to be a saint, but nobody wants to go through the training. And the training is patience: not a single dramatic act of surrender but a long, slow, often boring obedience in the same direction without the encouragement of visible results.",
    bio: "Eugene Peterson (1932-2018) was a pastor, scholar, and writer who spent thirty years as a parish minister in Maryland before translating The Message and writing more than thirty books on the spiritual life. A Long Obedience in the Same Direction &mdash; its title drawn ironically from Nietzsche &mdash; is his sustained argument that discipleship is constitutionally patient: slow, cumulative, resistant to shortcuts, and fundamentally opposed to the instant-gratification culture in which contemporary Christians live. Peterson draws on the Psalms of Ascent (Psalms 120-134) to trace the contours of a life shaped by patience: the gradual movement, the small obediences, the long arc of formation that cannot be compressed or accelerated. His work is a needed corrective to the evangelical expectation of immediate transformation and visible results: the Christian life, Peterson argues, looks much more like a long walk than a dramatic conversion, and patience is not incidental to that walk but its essential shape.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "James 1:2-4",
    text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",
    reflection:
      "The joy commanded is not about the pain but about what the pain is producing. James names the outcome &mdash; completeness &mdash; and invites us to orient toward it rather than toward the discomfort. The most important phrase may be &ldquo;let steadfastness have its full effect&rdquo;: the invitation to remain under the pressure long enough for the work to be finished, rather than cutting short the process by flight or despair.",
  },
  {
    reference: "Romans 5:3-5",
    text: "We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us.",
    reflection:
      "The chain runs from suffering to hope through patience and proven character. The foundation that holds the chain together is not our willpower but God&rsquo;s love already poured into our hearts by the Spirit. Biblical patience is not stoic endurance; it is the overflow of received love, the capacity to endure because the Comforter is present in the enduring.",
  },
  {
    reference: "Psalm 27:14",
    text: "Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!",
    reflection:
      "The doubled exhortation frames waiting as an act of strength rather than passivity. The command to be strong and courageous &mdash; Joshua&rsquo;s language &mdash; is applied to the interior act of waiting, suggesting that the patience required to trust God in the unresolved is among the most demanding forms of spiritual courage. Waiting on the Lord is not giving up; it is the most active and difficult form of trust.",
  },
  {
    reference: "2 Peter 3:9",
    text: "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance.",
    reflection:
      "What looks like delay is love. God&rsquo;s patience toward us is the model and the ground of our patience toward others and toward God&rsquo;s own timing. The verse reframes every experience of &ldquo;why is God taking so long?&rdquo;: the delay is not negligence but makrothumia, the same long-suffering patience we have received and are called to practice.",
  },
  {
    reference: "Isaiah 40:31",
    text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
    reflection:
      "The strength promised comes in the waiting, not after it. The renewal is not the reward for having waited successfully; it is the result of being bound to God in the waiting itself. The three images &mdash; eagles soaring, runners not weary, walkers not fainting &mdash; are not three stages of arrival but three forms of sustained capacity produced by the sustained waiting.",
  },
  {
    reference: "Revelation 6:10-11",
    text: "They cried out with a loud voice, &lsquo;O Sovereign Lord, holy and true, how long before you will judge and avenge our blood on those who dwell on the earth?&rsquo; Then they were each given a white robe and told to rest a little longer.",
    reflection:
      "The &ldquo;how long&rdquo; prayer is not rebuked but answered: a little longer, for a reason. The white robes are given not when the waiting is over but in the waiting itself &mdash; the assurance of righteousness and victory extended to those who must still endure. Patience in the New Testament is never naked; it is always clothed in the prior gift of God&rsquo;s love and the assurance of his ultimate vindication.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "LB2o9jn7Ppg", title: "Biblical Patience &mdash; Hupomone and Makrothumia Explained" },
  { videoId: "q3j4FqPqUoQ", title: "Waiting on God &mdash; The Theology of Psalm 27 and Isaiah 40" },
  { videoId: "5G7BcXPvVaY", title: "James 1:2-4 &mdash; Testing, Steadfastness, and the Joy of Trials" },
  { videoId: "FxNiRi4YAAM", title: "God&rsquo;s Patience as the Model &mdash; 2 Peter 3:9 and Long-Suffering" },
  { videoId: "6Hhf_yLcMHI", title: "Suffering and Character &mdash; Romans 5 and the Chain of Hope" },
  { videoId: "zT_VZcW0PAc", title: "Elisabeth Elliot on Patience in Suffering and Loss" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianPatiencePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<PATEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whatImWaitingFor, setWhatImWaitingFor] = useState("");
  const [theFrustration, setTheFrustration] = useState("");
  const [whatGodMightBeDoing, setWhatGodMightBeDoing] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as PATEntry[]);
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
    if (!whatImWaitingFor.trim() || !theFrustration.trim()) return;
    const entry: PATEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whatImWaitingFor: whatImWaitingFor.trim(),
      theFrustration: theFrustration.trim(),
      whatGodMightBeDoing: whatGodMightBeDoing.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhatImWaitingFor("");
    setTheFrustration("");
    setWhatGodMightBeDoing("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? AMBER : BORDER}`,
    background: active ? "rgba(245, 158, 11, 0.12)" : "transparent",
    color: active ? AMBER : MUTED,
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
    color: AMBER,
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
                color: AMBER,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Patience &amp; Endurance
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Christian Patience: The Theology and Practice of Waiting on God
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The New Testament uses two words English translations both render &ldquo;patience&rdquo;:
              hupomone &mdash; steadfast endurance under trials &mdash; and makrothumia &mdash;
              long-suffering toward people. Both are required; both are gifts of the Spirit; both are
              forged in ordinary life. This guide traces the theology of patience from James 1 and
              Romans 5 through the martyrs under the altar and the patient earth, and builds the
              practices that form it.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${AMBER}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Count it all joy, my brothers, when you meet trials of various kinds, for you
                know that the testing of your faith produces steadfastness. And let steadfastness
                have its full effect, that you may be perfect and complete, lacking in nothing.&rdquo;
              </p>
              <p style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600 }}>James 1:2-4</p>
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
                Eight studies tracing the theology of patience from the two Greek words through James
                1, Romans 5, the patient earth, God&rsquo;s patience as the model, waiting on the
                Lord, the martyrs under the altar, and sanctified waiting as active not passive.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: AMBER,
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
                        background: "rgba(245, 158, 11, 0.07)",
                        border: "1px solid rgba(245, 158, 11, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: AMBER,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Hupomone, makrothumia, the patient earth, the martyrs under the altar, and the
                  sleeping farmer &mdash; these are not separate topics but one doctrine of patience
                  seen under different kinds of pressure. What they share: patience is not passive but
                  active trust; it is both received from God and practiced toward others; and it is
                  forged in the specific texture of ordinary waiting rather than in a single dramatic
                  act. Explore how patience connects to suffering in{" "}
                  <Link href="/christian-suffering" style={{ color: AMBER, textDecoration: "underline" }}>
                    Christian Suffering
                  </Link>{" "}
                  or to trust in{" "}
                  <Link href="/christian-trust" style={{ color: AMBER, textDecoration: "underline" }}>
                    Christian Trust
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
                Six practices for building patience in the specific texture of ordinary life &mdash;
                from naming the wait to the small school of daily provocation, the &ldquo;how long&rdquo;
                prayer, lectio divina with the sower, receiving God&rsquo;s patience, and the evening
                Examen. Start with one and let it build the others.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: AMBER,
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
                      color: AMBER,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the slow work of patience
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Patience, like every spiritual discipline, is built in the small ordinary
                  provocations long before it is required in the catastrophic ones. The person who
                  learns to pause before speaking to the slow colleague, to sleep before sending the
                  angry email, to pray before rushing to fix &mdash; that person is building the
                  muscle that will hold in the season of genuine suffering. The Journal tab is
                  designed to support that slow, specific work: naming what you are waiting for,
                  naming the frustration underneath it, and naming what God might be forming in you
                  through it. Over time, the journal becomes a record of God&rsquo;s faithfulness in
                  the specific texture of your waiting &mdash; the best foundation for the patience
                  that more demanding seasons will require.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six teachers who have most deeply shaped the theology and practice of Christian
                patience &mdash; Spurgeon&rsquo;s Victorian authority, &Agrave; Kempis&rsquo;s
                interior realism, Carmichael&rsquo;s long service, Keller&rsquo;s theological care,
                Elliot&rsquo;s costly loss, and Peterson&rsquo;s long obedience. Each one learned
                patience under pressure.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: voice.name }}
                  />
                  <div
                    style={{
                      color: AMBER,
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
                      background: "rgba(245, 158, 11, 0.06)",
                      borderLeft: `3px solid ${AMBER}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;<span dangerouslySetInnerHTML={{ __html: voice.quote }} />&rdquo;
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
                Six passages that form the biblical theology of patience &mdash; from James 1 and
                Romans 5 through Psalm 27, 2 Peter 3:9, Isaiah 40:31, and Revelation 6. Read them
                one per week alongside the Journal practice. Let each text both describe and produce
                the posture of patient endurance.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: AMBER,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${AMBER}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Take each passage and bring it into contact with the specific thing you are waiting
                  for or enduring. Name the trial, then read the text as God&rsquo;s word to you in
                  that trial &mdash; not as a formula but as a living word addressed to a specific
                  person in a specific situation. Let the text both validate the difficulty and
                  reorient your expectation. Close with the act of deliberate waiting: &ldquo;I am
                  in this waiting. I choose to remain. I trust the One who governs the timing.&rdquo;
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions that build patience over time: what are you waiting for or enduring,
                what is the frustration underneath it, and what might God be forming in you through
                it? Entries are stored privately in your browser. No account needed.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New patience entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="pat-waiting" style={labelStyle}>
                    What I&rsquo;m waiting for or enduring
                  </label>
                  <input
                    id="pat-waiting"
                    type="text"
                    value={whatImWaitingFor}
                    onChange={(e) => setWhatImWaitingFor(e.target.value)}
                    placeholder="Name the specific situation &mdash; the unanswered prayer, the unresolved relationship, the long delay..."
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="pat-frustration" style={labelStyle}>
                    The frustration underneath the waiting
                  </label>
                  <textarea
                    id="pat-frustration"
                    value={theFrustration}
                    onChange={(e) => setTheFrustration(e.target.value)}
                    placeholder="What does the impatience feel like? What is being threatened or frustrated? Name it honestly..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="pat-god" style={labelStyle}>
                    What God might be forming in me through this
                  </label>
                  <textarea
                    id="pat-god"
                    value={whatGodMightBeDoing}
                    onChange={(e) => setWhatGodMightBeDoing(e.target.value)}
                    placeholder="However partial the answer &mdash; steadfastness, character, dependence, trust, freedom from control..."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whatImWaitingFor.trim() || !theFrustration.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whatImWaitingFor.trim() || !theFrustration.trim() ? BORDER : AMBER,
                    color: !whatImWaitingFor.trim() || !theFrustration.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whatImWaitingFor.trim() || !theFrustration.trim() ? "not-allowed" : "pointer",
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
                      Name what you&rsquo;re waiting for, name the frustration underneath it, and
                      name what you think God might be forming in you through it. Over time this
                      becomes a record of God&rsquo;s faithfulness in the specific texture of your
                      waiting &mdash; the best foundation for the patience that demanding seasons
                      will require.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: AMBER }}>
                              {entry.whatImWaitingFor}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.whatImWaitingFor}`}
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
                            The frustration underneath
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.theFrustration}
                          </p>
                        </div>

                        {entry.whatGodMightBeDoing && (
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
                              What God might be forming in me
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.whatGodMightBeDoing}
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
                Teaching on biblical patience, hupomone and makrothumia, the theology of waiting,
                James 1, Romans 5, and voices on suffering and long-suffering. Good companions to
                the Theology and Practices tabs.
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
              Patience as the shape of a Christian life
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Patience is not a single dramatic act of will but a long slow formation: thousands of
              small surrenders, small pauses, small choices to remain under the load rather than flee
              it. The person who endures with grace in the catastrophic trial has almost always been
              practicing patience in the ordinary provocations &mdash; the delayed response, the slow
              colleague, the unanswered prayer. Hupomone and makrothumia are both built in the
              specific texture of daily life, and both are gifts of the Spirit who is always at work
              &mdash; in the dark, in the delay, in the waiting.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: see how patience connects to trust in{" "}
              <Link href="/christian-trust" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Trust
              </Link>
              , explore how suffering produces patience in{" "}
              <Link href="/christian-suffering" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Suffering
              </Link>
              , or discover how hope sustains the long wait in{" "}
              <Link href="/christian-hope" style={{ color: AMBER, textDecoration: "underline" }}>
                Christian Hope
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
