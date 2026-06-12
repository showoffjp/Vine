"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ROSE = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christianevangelism_entries";

interface EVGEntry {
  id: string;
  date: string;
  personSharedWith: string;
  whatWasSaid: string;
  nextStep: string;
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
    badge: "1 Corinthians 15:1-4",
    title: "Euangelion — What the Gospel Actually Is",
    paragraphs: [
      "The Greek word euangelion means good news — not good advice, not a moral framework, not a self-improvement program. In the first-century world it was used for announcements of military victories, the accession of an emperor, the birth of an heir: something decisive had happened that changed everything. When Paul says in Romans 1:16 that he is not ashamed of the euangelion, he means he is not ashamed of an announcement. Something has happened in history, and the world is different because of it.",
      "The content of that announcement is compressed in 1 Corinthians 15:3-4: Christ died for our sins in accordance with the Scriptures, he was buried, he was raised on the third day in accordance with the Scriptures, and he appeared. Four verbs — died, buried, raised, appeared — and two anchors in Israel&rsquo;s story. The gospel is not &ldquo;go to heaven when you die.&rdquo; It is the announcement that the God of Israel has acted decisively in Jesus to deal with sin, defeat death, and launch a new creation. Heaven is a consequence, not the content.",
      "This matters for evangelism because what you think the gospel is determines what you say when you share it. If the gospel is &ldquo;accept Jesus so you can go to heaven,&rdquo; evangelism becomes a transaction: close the deal before they die. If the gospel is the announcement that Jesus is Lord and has risen, evangelism becomes a herald&rsquo;s proclamation: this has happened, and everything is different. The first can be reduced to a formula. The second invites a person into a story — and it is a much richer, more durable, more honest invitation.",
    ],
    callout: {
      label: "The word",
      text: "Euangelion (εὐαγγέλιον): good news, a herald&rsquo;s announcement of decisive events — not advice to follow but news to believe.",
    },
  },
  {
    badge: "Matthew 28:18-20",
    title: "The Great Commission — All Authority, All Nations, All Commands, Always",
    paragraphs: [
      "The final words of Matthew&rsquo;s Gospel are the most concentrated evangelism mandate in the New Testament: &ldquo;All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.&rdquo; Four &lsquo;alls&rsquo; and one command: make disciples. The going, baptizing, and teaching are participles — the means by which disciple-making happens — but the imperative is one: matheteusate, make learners, make followers.",
      "The foundation of the commission is authority, not enthusiasm. Jesus does not say &ldquo;go because you feel passionate about sharing.&rdquo; He says go because all authority has been given to him — because he rose from the dead and was vindicated by the Father, the only possible response is to tell every nation what has happened. The commission is grounded in Christology: the risen Lord has the authority of the cosmos, and his word therefore goes to all of it.",
      "The bookends hold everything together: all authority (v.18) and I am with you always (v.20). The commission is not issued and left to nervous disciples to execute alone. The one who sends is the one who accompanies. Evangelism is not a solo project; it is collaboration with the present, risen Christ, who goes with every witness into every conversation, every village, every hostile boardroom.",
    ],
  },
  {
    badge: "Ephesians 4:11 / Acts 8:5",
    title: "The Evangelist as Gift vs. Every Christian as Witness",
    paragraphs: [
      "Paul lists the evangelist (euangelistes) in Ephesians 4:11 as one of the gifts Christ gave to the church — alongside apostles, prophets, pastors, and teachers. The evangelist has a particular calling, a particular edge, a particular gift for crossing new frontiers with the gospel. Philip in Acts 8 is the clearest example: he goes to Samaria, shares Christ, sees a city transformed, then pivots to a desert road to open Isaiah 53 for an Ethiopian official. The office of evangelist is not the same as being a pastor-teacher; it is a distinct calling with a distinct urgency.",
      "But the existence of the evangelistic gift does not exempt the rest of the church from witness. Acts 8:1 says that after the persecution of Stephen, &ldquo;they were all scattered throughout the regions of Judea and Samaria, except the apostles.&rdquo; The apostles stayed in Jerusalem; the ordinary scattered believers went everywhere. And Acts 8:4 records the result: &ldquo;those who were scattered went about preaching the word.&rdquo; The word is euangelizomenoi — evangelizing. Every ordinary believer, scattered and afraid, became an evangelist by default. The gift of the evangelist leads the church; the witness of every member fills the world.",
      "The practical implication is that no Christian can outsource evangelism entirely to those with the gift. You may not have Philip&rsquo;s calling or Billy Graham&rsquo;s platform. But you have relationships that Philip and Billy Graham will never have. The person God has placed in front of you — at work, on the street, in your family — is your mission field. The evangelist gifts the whole body; the whole body witnesses.",
    ],
  },
  {
    badge: "John 16:8",
    title: "The Holy Spirit as the Real Evangelist",
    paragraphs: [
      "One of the most liberating truths for the anxious witness is this: the Holy Spirit is the one who actually does evangelism. In John 16:8, Jesus says the Spirit will &ldquo;convict the world concerning sin and righteousness and judgment.&rdquo; The Greek word is elencho — to expose, to bring to light, to convince. The Spirit does not nudge people gently toward vague spiritual openness; he convicts. He brings the weight of reality — of sin, of the righteousness of Jesus, of coming judgment — to bear on the human conscience in ways no human persuasion can reach.",
      "This means the Christian witness is not the closer. She is the messenger. Her job is to open her mouth and say what is true; the Holy Spirit&rsquo;s job is to take those words and drive them home. Paul describes the dynamic in 1 Corinthians 3:6-7: &ldquo;I planted, Apollos watered, but God gave the growth. So neither he who plants nor he who waters is anything, but only God who gives the growth.&rdquo; We are responsible for the planting and the watering. We are not responsible for the harvest. That belongs to God.",
      "This is the cure for both evangelistic arrogance and evangelistic paralysis. Arrogance says &ldquo;I will argue, persuade, and close them.&rdquo; Paralysis says &ldquo;I cannot say the right thing, I&rsquo;ll ruin it, I&rsquo;ll make them worse.&rdquo; Both assume too much depends on the messenger. The Spirit convicts — this should make us bold enough to speak and humble enough to release the outcome.",
    ],
  },
  {
    badge: "Honest Diagnosis",
    title: "Why Christians Don&rsquo;t Evangelize",
    paragraphs: [
      "Fear is the most common reason — specifically the fear of rejection. When we share our faith, we expose ourselves at the deepest level: we are saying &ldquo;here is what I actually believe is true about reality.&rdquo; To have that dismissed or mocked is to feel personally rejected, and the human nervous system would rather stay quiet. Rebecca Manley Pippert notes that Christians are often more afraid of evangelism than non-Christians are of hearing the gospel, which says something about us.",
      "Unbelief runs a close second. If you genuinely believe that Jesus is the only way to the Father (John 14:6), that sin has consequences, and that the resurrection happened, the stakes of your silence are staggering. The reason many Christians do not feel those stakes urgently is that our functional belief in these things has grown thin. We intellectually assent but do not feel the weight. The cure for lack of evangelistic urgency is not more guilt; it is deeper encounter with the gospel&rsquo;s own reality.",
      "Wrong theology of evangelism is the third obstacle. Some Christians have been taught that evangelism means presenting a four-point sales script and getting a verbal commitment before the conversation ends. When real conversations don&rsquo;t work that way — when people have objections, when trust takes months to build — they conclude they are failing. Healthy evangelism is a longer, messier, more relational process. Recovering that vision is what releases many frozen witnesses.",
    ],
  },
  {
    badge: "Luke 4:18 / Matthew 4:23",
    title: "The Gospel for the Whole Person",
    paragraphs: [
      "Jesus announces his ministry in Luke 4:18 by reading Isaiah 61: &ldquo;The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed, to proclaim the year of the Lord&rsquo;s favor.&rdquo; The gospel is good news to the whole person — the prisoner, the blind, the oppressed, the poor — not only to the soul awaiting heaven. Matthew summarizes Jesus&rsquo; ministry as &ldquo;teaching in their synagogues and proclaiming the gospel of the kingdom and healing every disease and every affliction.&rdquo; Word and deed, proclamation and demonstration.",
      "This does not collapse evangelism into social action, but it does refuse the split. John Stott called the relationship between word and deed &ldquo;the double mandate.&rdquo; The church that only preaches without serving has a truncated gospel. The church that only serves without preaching has lost the good news that animates service and addresses the deepest need. In authentic evangelism the word and the works interpret each other: the deed shows that the gospel has hands and feet, and the word explains whose hands and feet they are.",
      "Practically this means your evangelism begins with attention to the person in front of you — their actual life, actual losses, actual questions — before it proceeds to proclamation. Jesus was constantly responding to the specific situation of the specific person: blind Bartimaeus, the woman at the well, Nicodemus the theologian, Zacchaeus the tax collector. He met different people in radically different places. So does faithful witness.",
    ],
  },
  {
    badge: "Romans 10:14-15",
    title: "Pre-Evangelism, Prepared Hearts, and Friendship Evangelism",
    paragraphs: [
      "Paul&rsquo;s logic in Romans 10:14-15 is sequential: they cannot call unless they believe; they cannot believe unless they hear; they cannot hear without someone preaching; no one can preach unless they are sent. The chain assumes that before proclamation there is often a longer season of preparation — what missiologists call pre-evangelism. Questions must be taken seriously, relationships must be built, trust must be formed. The soil must be broken before seed takes root.",
      "Friendship evangelism emphasizes the relational foundation: shared meals, genuine interest in a person&rsquo;s life, years of unhurried presence. It rightly observes that most people who come to faith did so through the sustained witness of a friend, not a crusade or a cold encounter. The danger is when &ldquo;friendship evangelism&rdquo; becomes a permanent excuse never to say anything — when we are so committed to friendship that we never get to the gospel. A friendship built on a withheld truth is not the fullest friendship.",
      "Proclamation evangelism emphasizes the irreducible necessity of the word being spoken. Romans 10:17 — &ldquo;faith comes from hearing&rdquo; — insists that at some point words must be used. The best answer is both-and: deeds of love open the door, words of gospel walk through it. Pippert&rsquo;s Out of the Saltshaker describes this integration brilliantly: be genuinely present to people, earn the right to be heard, and then be honest about what you believe and why. Real friendship can absorb gospel honesty; it does not have to choose.",
    ],
  },
  {
    badge: "John 14:6",
    title: "The Scandal of Particularity — Why Jesus Is the Only Way",
    paragraphs: [
      "No verse is more offensive to the modern pluralist imagination than John 14:6: &ldquo;I am the way, and the truth, and the life. No one comes to the Father except through me.&rdquo; The offense is real and should not be domesticated. Jesus is not saying &ldquo;I am a helpful spiritual resource.&rdquo; He is saying that the entire structure of access to the God of the universe runs through him — his person, his work, his resurrection. This is the scandal of particularity: not a principle or a religion but a specific man, at a specific time, making a specific claim.",
      "The evangelical obligation is to hold this claim honestly rather than softening it to what our culture prefers. C.S. Lewis called it the &lsquo;shocking alternative&rsquo;: either the words are true, or Jesus was a liar or a lunatic — those are the options on offer. The very offensiveness of the claim is part of what authenticates it; a gospel designer trying to appeal to a Roman pluralistic audience in the first century would not have invented it.",
      "Holding John 14:6 does not require contempt for other religions or for the sincere people in them. It requires honesty about what the gospel claims, humility about the limits of our knowledge of God&rsquo;s ways, and love toward the people we are telling. The Christian can say: &ldquo;I believe Jesus is the only way, and I believe this is the best possible news, and I want you to hear it.&rdquo; The scandal is not cruelty — it is the form that love takes when it tells the truth.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Gospel in One Minute",
    summary:
      "Prepare, rehearse, and internalize a clear, honest one-minute account of the gospel — so that when a door opens you are ready and not fumbling for words.",
    steps: [
      "Write out the gospel in your own words in under 150 words. Not a formula — your account: what is the human problem, what did God do about it in Jesus, and what is the invitation. Read it aloud.",
      "Refine for clarity: does it mention the resurrection? Does it explain why Jesus&rsquo; death matters? Does it include a response? Most first drafts under-explain the resurrection and over-emphasize heaven.",
      "Practice it with a Christian friend. Have them ask you the most common objection: &ldquo;why should I believe Jesus rose from the dead?&rdquo; Get comfortable with the question.",
      "Do not memorize it like a script — internalize it like a story. The goal is fluency, not performance. When you know the gospel in your bones, you can share it naturally in three minutes or thirty.",
    ],
    anchor: "1 Peter 3:15 — Always be prepared to give a defense to anyone who asks you for a reason for the hope that is in you.",
  },
  {
    number: "02",
    title: "The Open Question",
    summary:
      "Asking a single genuine question that creates space for spiritual conversation — without manipulation and without pressure.",
    steps: [
      "Learn two or three questions that open spiritual conversations naturally: &ldquo;What do you make of all this?&rdquo; after a crisis. &ldquo;Have you ever had a sense that there&rsquo;s more going on than what we can see?&rdquo; &ldquo;What do you think happens after we die?&rdquo; Simple, non-threatening, genuine.",
      "Ask and then listen — actually listen, not just wait for a pause to launch a prepared answer. The person in front of you is not a prospect; they are a person whose actual answer matters to you.",
      "Note where they are spiritually. Mark Mittelberg&rsquo;s work describes people as being at different distances from the gospel. Pre-evangelism serves those far away; direct sharing serves those who are close. You cannot tell the difference without listening.",
      "Follow the conversation rather than the script. If a great question opens up, stay there. The Spirit will open doors you did not plan; your job is to walk through them, not force your own.",
    ],
    anchor: "Colossians 4:5-6 — Walk in wisdom toward outsiders, making the best use of the time. Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person.",
  },
  {
    number: "03",
    title: "Your Story in Three Acts",
    summary:
      "Articulating your personal testimony clearly: life before, the turning, and life now — in under three minutes, without jargon, and connected to the gospel.",
    steps: [
      "Write the three-act version: what was life like before you knew Christ — not artificially dark, just honest? What happened — how did you encounter the gospel, what shifted? What is different now — again, not a performance, just true.",
      "Strip the jargon. &ldquo;I asked Jesus into my heart&rdquo; means nothing to someone outside the culture. &ldquo;I came to believe that Jesus actually rose from the dead, and it changed what I thought was real&rdquo; means something. Translate.",
      "Connect your story to the gospel itself. Your testimony is not the main point — it is a door into the main point. After sharing, say: &ldquo;The reason that mattered is because...&rdquo; and give the gospel briefly.",
      "Keep it short enough to use in a normal conversation without derailing it. Three minutes is sufficient. A personal story that people cannot escape is not witness; it is a monologue.",
    ],
    anchor: "Acts 26:16 — Rise and stand on your feet, for I have appeared to you for this purpose, to appoint you as a servant and witness to the things in which you have seen me.",
  },
  {
    number: "04",
    title: "The Lifestyle of Witness",
    summary:
      "Arranging your life so that meaningful contact with non-Christians is normal, not exceptional — because you cannot witness to people you never meet.",
    steps: [
      "Audit your relational world honestly. Write down your ten closest friendships. How many are with people who do not share your faith? If the number is close to zero, your missional geography needs to change.",
      "Put yourself in shared spaces — the community league, the neighborhood block party, the gym, the local pub — not as a strategy, but as someone who genuinely enjoys and belongs to the world God made. Salt has to be on the food to do anything.",
      "Invite neighbors over, not just church friends. The open table (practiced in Christian Hospitality) is one of the oldest and most effective pre-evangelism environments ever devised. Meals lower defenses and build the trust that gospel conversations require.",
      "Be a genuinely good friend first — curious about their life, present in their crises, trustworthy with their vulnerabilities. The gospel will come up naturally when you are someone they trust enough to ask.",
    ],
    anchor: "Matthew 5:13-14 — You are the salt of the earth... You are the light of the world. A city set on a hill cannot be hidden.",
  },
  {
    number: "05",
    title: "Praying for Five",
    summary:
      "A daily practice of intercessory prayer for five named people who do not yet follow Christ — the oldest evangelistic discipline in the church.",
    steps: [
      "Name five people in your relational world who do not know Christ. Write their names down somewhere permanent — in your phone, in this journal, on a card. Generalities cannot be prayed; names can.",
      "Pray for them each by name, each day, for their specific lives: their work pressures, their relationships, their fears, what you know of their spiritual state. Let your prayer be informed by your friendship.",
      "Pray for gospel openings specifically: &ldquo;Lord, open a door for me to speak&rdquo; (Colossians 4:3). Then stay alert — open doors rarely announce themselves; they appear as ordinary moments of conversation.",
      "Add and subtract from the list as God works. When someone comes to faith, praise God and pray for five more. Keeping the list live keeps your heart oriented outward over years.",
    ],
    anchor: "Colossians 4:3 — Pray also for us, that God may open to us a door for the word, to declare the mystery of Christ.",
  },
  {
    number: "06",
    title: "The Gospel in a Crisis",
    summary:
      "The moments of loss, grief, and dislocation in a friend&rsquo;s life are among the most significant gospel openings that exist — and most Christians waste them by only offering comfort.",
    steps: [
      "When a friend faces a death, a diagnosis, a divorce, or a collapse of meaning — show up. Practically, physically, with food and presence. Do not send a text and disappear. The incarnation was God showing up; witness follows the same pattern.",
      "Do not rush to words. Sit in the loss first. Ask questions. Let silence be what it is. The person who listens well in crisis earns the right to speak in crisis.",
      "When the time comes — and it usually does — speak honestly: &ldquo;Can I tell you what I believe about this?&rdquo; or &ldquo;The only thing that has made sense of death to me is the resurrection.&rdquo; Grief makes people genuinely open to ultimate questions in a way ordinary life does not.",
      "Follow up. Crisis-witness that disappears after the acute phase is not witness; it is exploitation. The sustained presence over weeks and months is what shows that the gospel you spoke is real.",
    ],
    anchor: "2 Corinthians 1:4 — He comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Billy Graham",
    role: "Evangelist to the Nations — 1949-2005",
    quote:
      "It is the Holy Spirit&rsquo;s job to convict, God&rsquo;s job to save, and my job to preach the gospel. I&rsquo;m not going to do their jobs for them.",
    bio: "Billy Graham preached to more people face to face than any other person in history — an estimated 210 million people in 185 countries across six decades of crusade ministry. What is less often noted is the theological discipline behind his method: Graham consistently refused to engineer emotional responses or exert undue pressure; he preached, gave the invitation, and left the results to God. He was unashamed of the resurrection, unashamed of hell, and unashamed of calling for a decision — but equally clear that decisions were not his to manufacture. His autobiography Just as I Am documents both the scale of the harvest and the personal cost of a life fully spent in witness. Graham is the modern reference point for what the gift of the evangelist looks like when given to the whole world.",
  },
  {
    name: "Rebecca Manley Pippert",
    role: "Out of the Saltshaker — Evangelism as a Way of Life",
    quote:
      "We need to see that it is just as wrong to be silent about Jesus as it would be to preach the gospel in a way that embarrasses or shames people. Both extremes are failures of love.",
    bio: "Rebecca Manley Pippert&rsquo;s Out of the Saltshaker and Into the World (1979) remains the most practically influential book on personal evangelism written in the twentieth century. Her central argument is that evangelism is not a technique to be deployed but a natural overflow of a life transformed by the gospel — and that Christians who refuse to witness are not merely missing opportunities but refusing a dimension of what it means to love their neighbor. Pippert is ruthlessly honest about the fear and embarrassment that silence masks, and equally ruthless about the Jesus who was himself &ldquo;deeply human and deeply holy&rdquo; and who never treated a person as a project. Her witness is the integration: genuine friendship, genuine presence, genuine gospel. She shows that you do not have to choose between being a good friend and telling the truth.",
  },
  {
    name: "Mark Mittelberg",
    role: "Becoming a Contagious Christian — Relational Witness",
    quote:
      "Contagious Christianity happens when ordinary believers, living authentic lives, form deep friendships with people who don&rsquo;t know Christ, and then share the gospel naturally out of the overflow of their own experience.",
    bio: "Mark Mittelberg&rsquo;s work, developed alongside Bill Hybels at Willow Creek and in his books Becoming a Contagious Christian and Confident Faith, made accessible evangelism the inheritance of ordinary church members who would never fill a stadium. His key insight is that different people have different evangelistic styles — intellectual, testimonial, interpersonal, invitational, serving, confrontational — and that forcing everyone into one mold produces awkwardness rather than witness. Finding and working in your own style releases the natural witness that manipulation-based approaches suppress. Mittelberg is a practitioner, not merely a theorist; his frameworks have been tested in thousands of real conversations over decades.",
  },
  {
    name: "N.T. Wright",
    role: "Surprised by Hope — The Gospel as New Creation",
    quote:
      "The gospel is not about how to get to heaven when you die. The gospel is about the kingdom of God breaking into the present world, and Jesus as the one in whom and through whom that has happened.",
    bio: "N.T. Wright&rsquo;s contribution to evangelism is primarily theological: he has done more than any other contemporary scholar to recover the full-orbed biblical gospel from the thin &ldquo;soul-escape-to-heaven&rdquo; version that has dominated much of modern evangelicalism. Surprised by Hope grounds Christian hope not in the evacuation of the earth but in its renewal — in resurrection bodies in a renewed creation — and this has profound implications for what the gospel offers. If the gospel is about new creation, then evangelism is inviting people into the most expansive story imaginable: not rescue from the world but the redemption of it. Wright&rsquo;s scholarship serves the evangelist by giving them richer, more honest categories to work with, and by showing that what Jesus announced is genuinely good news for the whole person and the whole world.",
  },
  {
    name: "Michael Green",
    role: "Evangelism in the Early Church — The Original Method",
    quote:
      "The early church spread not primarily through professional preachers but through the informal witness of ordinary Christians in the daily circumstances of their lives — in the home, at the workshop, and in the marketplace.",
    bio: "Michael Green&rsquo;s Evangelism in the Early Church (1970) is the definitive study of how the first Christians actually spread the gospel in the Roman world, and it is one of the most liberating books any would-be evangelist can read. Green documents that the explosion of the early church was not primarily driven by professional clergy but by ordinary slaves, artisans, traders, and household members who carried the gospel along the existing networks of their daily lives. The methods were conversation, shared meals, healing, exorcism, and the public and private proclamation of the resurrection. Green&rsquo;s historical recovery matters because it makes evangelism seem achievable again: the church grew fastest when it had no buildings, no Sunday programs, and no professional staff — only witnesses who believed what they had seen and heard.",
  },
  {
    name: "John Stott",
    role: "Christian Mission in the Modern World — Word and Deed Together",
    quote:
      "Evangelism and social action are like two blades of a pair of scissors, or the two wings of a bird. They must go together.",
    bio: "John Stott&rsquo;s Christian Mission in the Modern World (1975) is the clearest theological account of why evangelism and social responsibility belong together without collapsing into each other. Stott argued against those on both sides: against the reductionists who made mission into pure social action with no gospel proclamation, and against the pietists who made evangelism purely about soul-saving with no concern for bodies and justice. His framework — proclamation and demonstration together, each illuminating the other — has shaped evangelical mission theology for fifty years. Stott&rsquo;s own life at All Souls, Langham Place was an embodiment of this integration: careful Bible exposition paired with genuine engagement with the social realities of London and the developing world. He remained to the end clear that the verbal proclamation of the cross and resurrection was irreducibly central.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Matthew 28:18-20",
    text: "And Jesus came and said to them, &lsquo;All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.&rsquo;",
    reflection:
      "The Great Commission is framed by two declarations of presence: all authority (v.18) and always with you (v.20). The command in the middle — make disciples — is held between these two realities. We go not in our own strength but in the authority of the risen Lord who accompanies every witness. The going is a participle; the making is the imperative. Movement is assumed; discipleship is the goal.",
  },
  {
    reference: "Romans 1:16",
    text: "For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.",
    reflection:
      "Paul&rsquo;s &ldquo;I am not ashamed&rdquo; implies that there was every social reason to be ashamed — a crucified Messiah was an offense to Jews and foolishness to Greeks (1 Cor 1:23). The antidote to shame is not bravado but theological conviction: the gospel is the power of God, not the cleverness of the messenger. When you feel the social weight of the conversation, come back to what the gospel actually is.",
  },
  {
    reference: "1 Corinthians 9:22-23",
    text: "I have become all things to all people, that by all means I might save some. I do it all for the sake of the gospel, that I may share in its blessings.",
    reflection:
      "Paul&rsquo;s contextualization principle: the message does not change, but the mode of communication is radically flexible. To the Jews he became as a Jew; to those outside the law, as one outside the law. This is not dishonesty or people-pleasing — Paul has a clear motive: &ldquo;by all means save some.&rdquo; The urgency of the gospel justifies the flexibility of the method. Consider: what would it mean to become &ldquo;all things&rdquo; to the specific people in your relational world?",
  },
  {
    reference: "Acts 1:8",
    text: "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.",
    reflection:
      "The structure of witness is centrifugal: from where you are, outward. Jerusalem first — the home city, the known relationships, the most uncomfortable witnesses. Samaria — the people you would rather skip. The end of the earth — beyond your comfort zone entirely. Every Christian is given a specific Jerusalem: the neighborhood, the workplace, the family, the zip code where their witness must begin. The end of the earth is the destination; Jerusalem is where you start.",
  },
  {
    reference: "Colossians 4:5-6",
    text: "Walk in wisdom toward outsiders, making the best use of the time. Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person.",
    reflection:
      "Two disciplines: wisdom in lifestyle (walk) and grace in speech (talk). The phrase &ldquo;seasoned with salt&rdquo; is evocative — salt preserves and flavors; gospel speech should be both preserving (honest) and appetizing (gracious). The final phrase matters: &ldquo;each person.&rdquo; There is no universal evangelistic script. The wise witness learns to answer each person as they actually are, not as a generic &ldquo;lost person.&rdquo;",
  },
  {
    reference: "John 14:6",
    text: "&lsquo;I am the way, and the truth, and the life. No one comes to the Father except through me.&rsquo;",
    reflection:
      "The exclusivity of Christ is inseparable from the generosity of Christ: he is not restricting access, he is providing it. If Jesus is the way, then the way exists — that is good news. If there were many ways, each might be uncertain; a single revealed way is actually the more secure claim. The scandal is not that God is withholding himself; it is that God gave himself entirely in one person, and the right response to that is not offense but wonder.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "W8PVQW_HBQM", title: "The Great Commission — Matthew 28" },
  { videoId: "kijlV3Wgrec", title: "What Is the Gospel? A Biblical Overview" },
  { videoId: "Tn4e4dNFoSo", title: "Why Every Christian Is Called to Witness" },
  { videoId: "iXp4fB5RMFI", title: "How to Share Your Faith Naturally" },
  { videoId: "nVpbEEXTqgA", title: "The Holy Spirit and Evangelism" },
  { videoId: "k0BnJ0BMSOA", title: "Evangelism in the Early Church" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianEvangelismPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<EVGEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [personSharedWith, setPersonSharedWith] = useState("");
  const [whatWasSaid, setWhatWasSaid] = useState("");
  const [nextStep, setNextStep] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as EVGEntry[]);
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
    if (!personSharedWith.trim() || !whatWasSaid.trim()) return;
    const entry: EVGEntry = {
      id: `${Date.now()}-${Math.random()}`,
      date: new Date().toLocaleDateString(),
      personSharedWith: personSharedWith.trim(),
      whatWasSaid: whatWasSaid.trim(),
      nextStep: nextStep.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setPersonSharedWith("");
    setWhatWasSaid("");
    setNextStep("");
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
              The Mission of the Church
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Go and Make Disciples: Christian Evangelism
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The word{" "}
              <em style={{ color: TEXT }}>euangelion</em> means good news — not a program, not a
              sales pitch, not a religious obligation, but a herald&rsquo;s announcement that
              something decisive has happened in history. This guide explores what the gospel
              actually is, why every Christian is called to share it, how the Holy Spirit does the
              real work, and the practical habits that make witness a way of life rather than an
              occasional event.
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
                &ldquo;All authority in heaven and on earth has been given to me. Go therefore and
                make disciples of all nations, baptizing them in the name of the Father and of the
                Son and of the Holy Spirit, teaching them to observe all that I have commanded you.
                And behold, I am with you always, to the end of the age.&rdquo;
              </p>
              <p style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 600 }}>
                Matthew 28:18-20
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
                Before evangelism is a method it is a message — and before it is a method or a
                message it is a reality: something happened in history that changes everything. These
                eight studies move from the content of the gospel to the commission that flows from
                it, the obstacles that block it, and the scandal at its heart.
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
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}>
                    {section.title}
                  </h2>
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
                        border: `1px solid rgba(225, 29, 72, 0.25)`,
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
                  The thread that runs through all of it
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Euangelion, the Great Commission, the gift of the evangelist, the Spirit&rsquo;s
                  conviction, the whole-person gospel, the scandal of John 14:6 — these are not
                  eight separate topics but one. The God who acted decisively in Christ issues a
                  command that flows necessarily from what he has done, and empowers it by his
                  Spirit. The witness who grasps the gospel&rsquo;s reality cannot permanently stay
                  silent. Explore the apologetic dimension in{" "}
                  <Link
                    href="/christian-apologetics"
                    style={{ color: ROSE, textDecoration: "underline" }}
                  >
                    Christian Apologetics
                  </Link>
                  , or go deeper on the relational foundation in{" "}
                  <Link
                    href="/christian-kindness"
                    style={{ color: ROSE, textDecoration: "underline" }}
                  >
                    Christian Kindness
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
                Witness rarely happens by accident in a distracted, privatized culture. These six
                practices are disciplines — structures that keep the heart oriented outward and the
                mouth ready. Start with one. The Journal tab is built to accompany practices two and
                three.
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
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about fruitfulness
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  You are responsible for the sowing; you are not responsible for the harvest. Paul
                  plants, Apollos waters, God gives the growth. The practices above are forms of
                  planting and watering — fidelity in those is all that is asked. Evangelistic
                  fruitfulness measured only by conversions leads to either pride when people respond
                  or despair when they don&rsquo;t. Faithfulness measured by the quality of your
                  witness — the clarity of the gospel, the genuineness of the friendship, the
                  consistency of the prayer — is a measure you can actually live with over a lifetime.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses who shaped the church&rsquo;s understanding of evangelism — from
                the stadium to the living room, from the scholarly desk to the open door.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: ROSE,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {voice.role}
                  </div>
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
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${voice.quote}&rdquo;` }}
                  />
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
                Six passages to memorize, meditate on, and pray. Each drives to the heart of the
                evangelistic calling. Consider pairing one per week with the practices above.
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
                    dangerouslySetInnerHTML={{ __html: scripture.text }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Praying these passages
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into three movements: adoration (&ldquo;Lord, you are the way — the
                  only way, and you made it&rdquo;), confession (&ldquo;I have been silent when I
                  should have spoken, comfortable when I should have been sent&rdquo;), and petition
                  (&ldquo;Give me one conversation this week, and give me the words when it comes&rdquo;).
                  Scripture prayed changes more witnesses than Scripture merely studied.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Track your witness conversations here. Three questions: who did you share with,
                what was said, and what is the next step? Entries are stored privately in your
                browser. No one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Log a conversation
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="evg-person" style={labelStyle}>
                    Person you shared with
                  </label>
                  <input
                    id="evg-person"
                    type="text"
                    value={personSharedWith}
                    onChange={(e) => setPersonSharedWith(e.target.value)}
                    placeholder="A name — friend, coworker, neighbor, family member, stranger"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="evg-said" style={labelStyle}>
                    What was said
                  </label>
                  <textarea
                    id="evg-said"
                    value={whatWasSaid}
                    onChange={(e) => setWhatWasSaid(e.target.value)}
                    placeholder="How did the conversation go? What did you share? How did they respond?"
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="evg-next" style={labelStyle}>
                    The next step
                  </label>
                  <textarea
                    id="evg-next"
                    value={nextStep}
                    onChange={(e) => setNextStep(e.target.value)}
                    placeholder="What happens next? A follow-up conversation, a book to give, a meal to share, a prayer to keep praying?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!personSharedWith.trim() || !whatWasSaid.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background:
                      !personSharedWith.trim() || !whatWasSaid.trim() ? BORDER : ROSE,
                    color:
                      !personSharedWith.trim() || !whatWasSaid.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor:
                      !personSharedWith.trim() || !whatWasSaid.trim()
                        ? "not-allowed"
                        : "pointer",
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
                      Name one person, write what was said, and note the next step. Logging witness
                      conversations keeps you accountable and shows you the story God is writing over
                      time.
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
                              {entry.personSharedWith}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.personSharedWith}`}
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

                        <div style={{ marginBottom: entry.nextStep ? 10 : 0 }}>
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
                            What was said
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whatWasSaid}
                          </p>
                        </div>

                        {entry.nextStep && (
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
                              Next step
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.nextStep}
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
                Teaching to watch alongside the Theology and Practices tabs — on the gospel, the
                Great Commission, the Holy Spirit&rsquo;s role, and the early church&rsquo;s
                evangelistic methods.
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
              Witness and apologetics together
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Evangelism opens the door; apologetics often holds it open when objections arise. Most
              real witness conversations move between both: a friend is curious, then skeptical, then
              curious again. The evangelist who has thought through the hard questions is better
              equipped for the full conversation, and the apologist who cannot articulate the gospel
              clearly has lost the thread that makes the defense matter.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Go deeper:{" "}
              <Link
                href="/christian-apologetics"
                style={{ color: ROSE, textDecoration: "underline" }}
              >
                Christian Apologetics
              </Link>{" "}
              for defending the faith,{" "}
              <Link
                href="/christian-kindness"
                style={{ color: ROSE, textDecoration: "underline" }}
              >
                Christian Kindness
              </Link>{" "}
              for the relational foundation, or{" "}
              <Link
                href="/christian-hospitality"
                style={{ color: ROSE, textDecoration: "underline" }}
              >
                Christian Hospitality
              </Link>{" "}
              for the open table that makes witness natural.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
