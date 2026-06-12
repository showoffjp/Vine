"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const BLUE = "#3B82F6";

const STORAGE_KEY = "vine_christianpolitics_entries";

interface PLTEntry {
  id: string;
  date: string;
  politicalIssue: string;
  biblicalLens: string;
  howChristLike: string;
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
    badge: "Mark 12:17",
    title: "&ldquo;Render to Caesar&rdquo; — The Limits of Political Authority",
    paragraphs: [
      "When the Pharisees and Herodians — an unlikely coalition of political rivals — brought Jesus their carefully laid trap (&ldquo;Is it lawful to pay taxes to Caesar, or not?&rdquo;), Jesus asked for a denarius, noted whose image and inscription were on it, and delivered one of the most politically charged sentences ever spoken: &ldquo;Render to Caesar the things that are Caesar&rsquo;s, and to God the things that are God&rsquo;s.&rdquo; The crowd marveled. They still should.",
      "The line simultaneously validates and limits Caesar. There are things that belong to him — taxes, civil order, the coinage of commerce. But there are things that do not: the allegiance of the conscience, the worship of the heart, the authority over life and death, the definition of justice. The coin bears Caesar&rsquo;s image; the human being bears God&rsquo;s (Genesis 1:27). The moment any political regime demands what belongs only to God, it has overstepped, and the Christian must notice. Jesus does not solve every political question here — he sets the frame in which all political questions must be answered.",
      "This verse has been read across centuries to justify both submission to authority and resistance to it, which tells us it contains more than a simple answer. It is not a blueprint for theocracy or for quietism. It is an invitation to the most demanding political work: discerning, in each generation and each question, what belongs to Caesar and what to God — and having the courage to name the difference.",
    ],
    callout: {
      label: "The question",
      text: "Whose image does this bear? Caesar&rsquo;s image on the coin means the coin is his. God&rsquo;s image on the human being means the human is his. Every political claim must be evaluated against this prior claim.",
    },
  },
  {
    badge: "Augustine / Luther",
    title: "Two Cities, Two Kingdoms — Citizens of Both",
    paragraphs: [
      "Augustine of Hippo, writing as the Roman Empire was literally crumbling around him in 410, refused the panicked conclusion that the church&rsquo;s fate was tied to Rome&rsquo;s. The City of God and the City of Man are not two separate territories on a map; they are two loves operating in the same history. The earthly city is organized by the love of self; the heavenly city by the love of God. Christians live inside both simultaneously — they pay taxes, serve on juries, vote, hold office — while their ultimate loyalty runs in a different direction entirely. Rome could fall. The City of God could not.",
      "Martin Luther sharpened Augustine&rsquo;s vision into his doctrine of two kingdoms. God governs the world through two hands: his left hand rules through law, civil authority, and the sword — restraining evil and maintaining order among those who will not love voluntarily. His right hand rules through the gospel — the church&rsquo;s proclamation of grace, operating by a completely different logic. The mistake Luther feared was the confusion of the two: the church claiming civil coercion, or the state claiming spiritual authority. Both errors destroy what they touch. The church that wields Caesar&rsquo;s sword becomes Caesar. The state that claims Christ&rsquo;s throne becomes an idol.",
      "Neither Augustine nor Luther was politically passive. Both wrote extensively on the obligations of rulers. Their point was not indifference but proper ordering: Christians bring their fullest allegiance to a kingdom that no election can grant and no revolution can establish, and from that security they engage the earthly city without idolizing it.",
    ],
  },
  {
    badge: "Amos / Isaiah / Jeremiah",
    title: "The Prophetic Tradition — Speaking Truth to Power",
    paragraphs: [
      "The Hebrew prophets were not commentators; they were interrupters. Amos walked into the sanctuary at Bethel and told the northern kingdom&rsquo;s comfortable worshipers that their festivals nauseated God — &ldquo;let justice roll down like waters, and righteousness like an ever-flowing stream&rdquo; (Amos 5:24) — because justice was dammed up by exploitation of the poor and corruption of the courts. Isaiah 1 records God refusing Israel&rsquo;s offerings while the oppressed go undefended: &ldquo;your hands are full of blood.&rdquo; Jeremiah stood in the temple gate and said to the people streaming in that the building would not save them; only justice toward the vulnerable would.",
      "What made the prophets prophets was not their political theory but their standpoint: they spoke from the perspective of the covenant God, holding both ruler and people accountable to a standard that transcended and predated every human political arrangement. They named names — Ahab, Herod, Herodias. They were imprisoned, thrown in cisterns, killed. Their message was not safe for broadcast because it respected no faction. They condemned the nation&rsquo;s enemies for war crimes and condemned the nation itself for the same.",
      "The church inherits this tradition. Its calling is not to serve as chaplain to power, blessing the flag and the policy. It is to speak from the Lord — on behalf of the widow, the immigrant, the prisoner, the unborn, the poor — to whoever holds authority, regardless of party. The prophetic voice that only speaks when its own side is out of power is not prophetic; it is partisan.",
    ],
  },
  {
    badge: "Romans 13 / Acts 5:29",
    title: "Submit and Obey — And When Not To",
    paragraphs: [
      "Romans 13:1-7 is the New Testament&rsquo;s clearest statement about political authority: &ldquo;Let every person be subject to the governing authorities. For there is no authority except from God, and those that exist have been instituted by God.&rdquo; Paul writes this to Roman Christians living under Nero — a fact that should discipline any reading that turns the passage into unconditional patriotism. The governing authority is God&rsquo;s servant for good; it bears the sword to punish evil. These are functional claims about what government is for, not blank checks for whatever government does.",
      "Acts 5:29 is the counter-pressure: &ldquo;We must obey God rather than men.&rdquo; Peter and the apostles say this to the Sanhedrin after being ordered to stop preaching — an order they politely and repeatedly defy, accepting the beatings that follow. The logic is not revolution; it is jurisdictional. The state has authority within its God-given domain. When it overreaches into that domain — commanding worship of Caesar, forbidding the preaching of the gospel, requiring complicity in injustice — the Christian has both the right and the obligation to refuse. This is not disobedience for convenience; it is obedience to a higher authority at personal cost.",
      "The history of Christian political witness is largely a history of navigating this tension: Augustine on the fall of Rome, Luther before the Diet of Worms, Bonhoeffer in the resistance, King in the Birmingham jail. None of them were anarchists; all of them found limits to Caesar&rsquo;s reach. The question is never whether there are limits, but where they fall and whether we have the courage to say so.",
    ],
    callout: {
      label: "The limit",
      text: "&ldquo;We must obey God rather than men&rdquo; (Acts 5:29) — not a license for every act of civil disobedience, but a recognition that Caesar&rsquo;s authority is delegated, derivative, and bounded.",
    },
  },
  {
    badge: "Theological Problem",
    title: "Christian Nationalism — Where the Confusion Lies",
    paragraphs: [
      "Christian nationalism is the project of merging Christian identity with national identity in such a way that the nation becomes the vehicle of God&rsquo;s purposes and the church becomes the instrument of the nation&rsquo;s power. It is not simply the claim that Christianity has shaped a nation&rsquo;s history — that may be historically accurate about many countries. It is the claim that a specific nation holds a special covenantal status with God and that the church&rsquo;s task is to secure or recover that status through political means.",
      "The theological problems are severe. First, the New Testament consistently relocates the covenant people from a nation-state to a transnational community: the church drawn from every tongue, tribe, and nation (Revelation 7:9). The church is not a nation; it is something that transcends every nation. Second, when the church identifies its cause with the cause of a particular political order, it loses the prophetic distance it needs to speak to that order. The chaplain cannot also be the prophet. Third, the gospel becomes entangled with cultural grievance and demographic anxiety in ways that make it unrecognizable to the Lord who had no place to lay his head.",
      "None of this means Christians should be politically inactive or that faith has nothing to say about legislation. It means the church&rsquo;s identity, its message, and its hope must remain independent of any earthly political project — available to bless what is good in any government, and free to name what is wrong in all of them.",
    ],
  },
  {
    badge: "Psalm 146:3",
    title: "Why Political Hope Always Disappoints",
    paragraphs: [
      "&ldquo;Put not your trust in princes, in a son of man, in whom there is no salvation. When his breath departs, he returns to the earth; on that very day his plans perish&rdquo; (Psalm 146:3-4). The psalmist is not urging political disengagement; he is diagnosing misplaced hope. Princes die. Their plans perish. The political projects that absorb generations of passion are not permanent; they are mortal, as mortal as the men who build them. History confirms this with monotonous regularity.",
      "The Christian who treats a political victory as salvation or a political defeat as catastrophe has made politics into soteriology. This is the specific danger Jesus&rsquo; hearers faced: they wanted a Messiah who would restore the Davidic kingdom and expel Rome, and Jesus kept refusing to be that. His kingdom, he told Pilate, was not of this world — or its weapons would have been deployed differently. The disciples kept arguing about who would be greatest; Jesus kept washing feet. The gap between political hope and the kingdom of God is not a tactical disagreement; it is a theological chasm.",
      "The pastoral consequence is freedom. The Christian can engage politics earnestly — vote, advocate, run for office, lobby for justice — without treating any of it as ultimate. When the party loses, the church does not lose. When the legislation fails, the kingdom does not fail. When the candidate turns out to be a disappointment — they always do — faith does not crumble, because faith was never in the candidate. &ldquo;Blessed is he whose help is the God of Jacob, whose hope is in the LORD his God&rdquo; (Psalm 146:5).",
    ],
  },
  {
    badge: "Discernment",
    title: "Political Witness Without Partisan Capture — And Disagreement Within the Church",
    paragraphs: [
      "The church has a political witness — it speaks to power, advocates for the vulnerable, shapes the moral imagination of a society — but it is not a political party, and it must refuse to become one. Partisan capture is the process by which a church becomes the religious wing of a political coalition: it speaks only on the issues its coalition cares about, in the same direction as its coalition, with no prophetic distance and no ability to correct. The church that has been captured by one party is no longer serving its Lord; it is serving a platform.",
      "This means Christians will disagree about politics. Not because their faith is irrelevant to public life, but because the application of Christian principles to complex legislation and competing goods is genuinely difficult and permits genuine disagreement. Christians who agree fully on the lordship of Christ, the authority of Scripture, the resurrection, and the nature of the church have disagreed — thoughtfully and in good faith — about immigration policy, just war criteria, economic structures, and the proper role of government in social welfare. That disagreement is not a failure of faith; it is what serious political engagement by serious Christians looks like.",
      "The rule for disagreement within the church is not silence — suppressing political conviction is not Christian peace. The rule is charity, humility, and a refusal to treat political difference as spiritual disqualification. We can argue about policy while sharing the table. We can vote differently and still say the creed together. What we cannot do is treat the church as a means to political ends — turning the body of Christ into a voting bloc, a donor base, or a cultural army. The church is the community of the coming kingdom; its unity is a sign of that kingdom, not a casualty of the current election.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Political Examination of Conscience",
    summary:
      "A regular audit of where your political passions live — what outrages you, what you celebrate, who you dehumanize — measured against the gospel rather than the news cycle.",
    steps: [
      "Once a week, before consuming political media, spend ten minutes in silence with Psalm 146. Ask: where have I placed hope that belongs to God alone? Which political figure have I made into a savior or a devil beyond what evidence warrants?",
      "List the political issues you care about most. For each, ask: do I care about this because the gospel compels me, or because my tribe does? Is there a person on the other side of this issue who loves Christ and has thought carefully about it?",
      "Notice your political emotions — the contempt, the fear, the tribal pleasure when the other side loses. These are spiritual data: they reveal where our identity is actually located. Bring them to confession before bringing them to argument.",
      "End with prayer for those in authority — all of them, including the ones you voted against. First Timothy 2:1-2 commands it, and the habit gradually separates intercession from instrumentalization.",
    ],
    anchor: "Psalm 146:3 — Put not your trust in princes, in a son of man, in whom there is no salvation.",
  },
  {
    number: "02",
    title: "Reading Across the Political Divide",
    summary:
      "The discipline of reading the best thinkers on the other side — not to win arguments but to understand a neighbor, and to find where your own position needs correction.",
    steps: [
      "For every political book or podcast you consume from your own perspective, read or listen to one from a thoughtful representative of the opposing view. Not the worst version — seek the strongest.",
      "As you read, look for the genuine moral intuition driving the position you disagree with. Almost every political view, even a wrong one, is protecting something real: a legitimate concern about justice, order, liberty, or human dignity.",
      "Ask which biblical themes are being invoked — whether knowingly or not — by the other side. Often the argument is about which biblical priority is most pressing; both sides may be right about what they are protecting and wrong about what they are ignoring.",
      "Record in the Journal tab: the issue, the biblical lens you bring to it, and a concrete step toward engagement that looks like Christ rather than a partisan combatant.",
    ],
    anchor: "Philippians 4:8 — Whatever is true, whatever is honorable, whatever is just... think about these things.",
  },
  {
    number: "03",
    title: "Practicing the Prophetic — Speaking Up Without Taking Sides",
    summary:
      "Developing the capacity to speak from the tradition of Amos and Isaiah — naming injustice and holding power to account — without becoming the religious voice of a political party.",
    steps: [
      "Study a specific issue of injustice in your community: housing, criminal justice, immigration, poverty, the unborn, the elderly. Go beyond headlines to primary sources — legal filings, social workers, academic research, the people most affected.",
      "Identify what Scripture says about the people at the center of this issue. The widow, the orphan, the immigrant, the prisoner, the poor appear constantly in the law, the prophets, and the Gospels. What does it mean to be their advocate?",
      "Find at least one person of a different political persuasion who cares about the same injustice. Seek coalition around the specific issue rather than party alignment. The prophetic witness is strongest when it cannot be categorized.",
      "If you speak publicly — in a church forum, on social media, in a letter to a representative — check whether your language humanizes those who disagree, whether you have named inconvenient truths about your own coalition&rsquo;s failures, and whether your tone could be received by someone across the aisle.",
    ],
    anchor: "Amos 5:24 — Let justice roll down like waters, and righteousness like an ever-flowing stream.",
  },
  {
    number: "04",
    title: "Engaging the Political Neighbor",
    summary:
      "The practice of actual conversation — face to face, in your neighborhood, with people whose politics differ from yours — as a form of Christian presence.",
    steps: [
      "Identify one neighbor, coworker, or family member whose political views significantly differ from yours and whom you tend to avoid on that basis. Make a decision to know them better as a person before engaging their politics.",
      "Ask about their lives before their opinions: What are they worried about? What do they love about their community? What injustice have they experienced that shapes how they vote? Political views almost always trace back to stories.",
      "When political topics arise, practice the discipline of the second question: rather than countering, ask &ldquo;can you say more about that?&rdquo; before you respond. You will be surprised how often the first statement is not the actual concern.",
      "Look for genuine common ground — not false equivalence, but real overlap. Almost everyone wants their children to be safe, their neighborhood to be livable, their government to be honest. Build from there.",
    ],
    anchor: "Romans 12:18 — If possible, so far as it depends on you, live peaceably with all.",
  },
  {
    number: "05",
    title: "The Fast from Political Media",
    summary:
      "A deliberate, regular break from the political news ecosystem — not to be uninformed, but to notice what it does to your soul and to recalibrate where your hope lives.",
    steps: [
      "Choose one day per week — the Sabbath is the obvious candidate — for a complete fast from political news, social media, and commentary. No cable, no feeds, no podcasts. Note the emotional withdrawal symptoms; they are informative.",
      "Use the time for Scripture, prayer, service, and the company of people who are not primarily political. Observe whether your joy, your sense of security, and your charity toward strangers shifts when the political noise stops.",
      "At the end of the fast, re-enter the information environment deliberately rather than compulsively. Choose sources rather than streams. Limit the hours rather than swimming in them. Political awareness is a responsibility; political saturation is a choice.",
      "After three months of this practice, write in your journal: what has changed about how you hold political events? What do you trust differently? Where has hope migrated?",
    ],
    anchor: "Psalm 46:10 — Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth.",
  },
  {
    number: "06",
    title: "Voting as an Act of Neighbor-Love",
    summary:
      "Approaching the ballot not as an expression of tribal identity but as an act of service to the common good — asking &ldquo;who does this serve?&rdquo; rather than &ldquo;who is on our team?&rdquo;",
    steps: [
      "Before voting, articulate in writing — not out loud, not on social media, just to yourself — the biblical reasoning behind each choice. Where do justice, human dignity, the care of the vulnerable, and the proper ordering of society intersect with this ballot?",
      "Vote for the interests of those who cannot vote for themselves: the unborn, the immigrant, the incarcerated, the poor, the future generation who will inherit your policy choices. Ask whose voice you are casting in addition to your own.",
      "Hold the ballot lightly. Vote, then release. The kingdom of God does not depend on this election, and your joy should not either. The day after, whoever wins, the church has work to do that no election result changes.",
      "Refuse to treat your vote as a test of another Christian&rsquo;s faith. Christians who vote differently from you may be wrong about policy; they are not necessarily wrong about Christ. Keep the conversation about reasoning and values, not loyalty and identity.",
    ],
    anchor: "Jeremiah 29:7 — Seek the welfare of the city where I have sent you into exile, and pray to the LORD on its behalf, for in its welfare you will find your welfare.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Augustine of Hippo",
    role: "City of God — Two Cities, One History",
    quote:
      "Two cities have been formed by two loves: the earthly by the love of self, even to the contempt of God; the heavenly by the love of God, even to the contempt of self. The former glories in itself, the latter in the Lord.",
    bio: "Augustine wrote the City of God between 413 and 426 as Rome reeled from the Visigoth sack of 410 and pagans blamed the Christian God for the empire&rsquo;s collapse. His answer transformed Christian political theology for fifteen centuries: the fate of the City of Man and the City of God are not the same fate, and the Christian need not panic when earthly empires fail. Augustine was no quietist — he wrote extensively about just war, the duties of rulers, and the proper ordering of society — but he refused to identify any earthly political arrangement with the kingdom of God. His diagnosis of the two loves (self and God) as the organizing principle of all political communities remains the most penetrating political anthropology in Christian thought.",
  },
  {
    name: "Martin Luther King Jr.",
    role: "Letter from Birmingham Jail — The Prophetic Voice in the Public Square",
    quote:
      "One has not only a legal but a moral responsibility to obey just laws. Conversely, one has a moral responsibility to disobey unjust laws. I would agree with St. Augustine that &lsquo;an unjust law is no law at all.&rsquo;",
    bio: "King&rsquo;s Letter from Birmingham Jail (1963) is the greatest American document in the tradition of Acts 5:29. Written in the margins of a newspaper and scraps of paper from a jail cell, it addresses eight white moderate clergymen who agreed with his goals but deplored his methods. King&rsquo;s answer drew on Aquinas, Augustine, Paul, Socrates, Niebuhr, and Buber to make a single argument: the church has always stood under a law higher than Caesar&rsquo;s, and when Caesar&rsquo;s law violates that higher law, the Christian&rsquo;s obligation is not patience but courage. He also indicted the church with devastating specificity for its silence and its comfort. The letter remains the standard against which Christian political engagement is measured.",
  },
  {
    name: "Abraham Kuyper",
    role: "Stone Lectures — Every Square Inch",
    quote:
      "There is not a square inch in the whole domain of our human existence over which Christ, who is Sovereign over all, does not cry, Mine!",
    bio: "Abraham Kuyper was a Dutch pastor, theologian, journalist, and Prime Minister of the Netherlands who developed the most comprehensive Reformed account of Christian cultural and political engagement. His doctrine of sphere sovereignty holds that God has ordained distinct spheres of human life — family, church, state, education, commerce, art — each with its own authority and responsibility, none sovereign over the others. The state&rsquo;s role is to adjudicate when spheres conflict and to protect the weak, not to absorb every domain into its own logic. Kuyper&rsquo;s vision animates much of evangelical political thought today — the conviction that faith has something to say about every square inch of public life without turning the church into a political party.",
  },
  {
    name: "Reinhold Niebuhr",
    role: "The Children of Light and the Children of Darkness — Moral Realism",
    quote:
      "Man&rsquo;s capacity for justice makes democracy possible; but man&rsquo;s inclination to injustice makes democracy necessary.",
    bio: "Reinhold Niebuhr was the twentieth century&rsquo;s most important Christian political realist. Against the liberal optimism that human progress would eventually solve political problems, Niebuhr insisted on the permanent reality of human sin — including the sin of those pursuing justice. His doctrine of original sin is not a counsel of despair but a safeguard against utopianism: because every person and every movement is capable of self-interest masquerading as righteousness, checks on power, humility about certainty, and tolerance of ambiguity are political necessities, not failures. The Serenity Prayer is his; so is a body of thought that shaped American foreign policy, civil rights strategy, and reinhold niebuhr&rsquo;s ironic sense that the most dangerous political actors are the most idealistic ones.",
  },
  {
    name: "Jim Wallis",
    role: "God&rsquo;s Politics — The Neither-Left-Nor-Right Challenge",
    quote:
      "God is not a Republican or a Democrat. And when either party acts as though it has a monopoly on God&rsquo;s agenda, it commits a form of idolatry.",
    bio: "Jim Wallis founded Sojourners magazine in 1971 as an attempt to recover the prophetic tradition for a generation of evangelicals alienated by both the Religious Right and the secular left. His argument — most accessibly made in God&rsquo;s Politics (2005) — is that a consistent application of biblical ethics produces a political agenda that crosses party lines: pro-life in the full sense (opposing abortion, capital punishment, and poverty), committed to racial justice, serious about environmental stewardship, skeptical of military triumphalism. Wallis has drawn criticism from both left and right, which he takes as evidence that the prophetic voice is working. Whatever one makes of his specific positions, his insistence that the church must not be owned by any party remains an essential check on partisan capture.",
  },
  {
    name: "Os Guinness",
    role: "The Case for Civility — Public Faith Without Culture War",
    quote:
      "Freedom requires virtue, virtue requires faith, and faith requires freedom. The three go together, and if you break the circle, all three are lost.",
    bio: "Os Guinness — Irish-born Christian social critic and great-great-great-grandson of Arthur Guinness — has spent forty years arguing that the deepest threat to free societies is not external enemies but internal decay: the loss of the moral and civic habits that self-government requires. In The Case for Civility and elsewhere, he argues that the Religious Right and the secular left are mirror images of each other, both seeking to capture the public square for their own side rather than maintaining the principled pluralism that allows all to flourish. His vision of &ldquo;a civil public square&rdquo; — where all citizens bring their deepest convictions while respecting others&rsquo; right to do the same — is an attempt to recover the conditions under which genuine political disagreement can happen without destroying the community.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Mark 12:17",
    text: "Jesus said to them, &ldquo;Render to Caesar the things that are Caesar&rsquo;s, and to God the things that are God&rsquo;s.&rdquo; And they marveled at him.",
    reflection:
      "The astonishment of the crowd is the right response — Jesus refuses both the Herodian capitulation and the Pharisaic resistance and proposes something more difficult: dual citizenship, carefully ordered. The hard work is discernment: what does belong to Caesar, and what does not? The coin bears Caesar&rsquo;s image. What bears God&rsquo;s?",
  },
  {
    reference: "Romans 13:1, 4",
    text: "Let every person be subject to the governing authorities. For there is no authority except from God, and those that exist have been instituted by God... for he is God&rsquo;s servant for your good.",
    reflection:
      "Paul writes this to Christians in Rome — the capital of Nero&rsquo;s empire. The verse validates civil authority as God&rsquo;s instrument for restraining evil and promoting order. It does not validate every use of that authority. &ldquo;For your good&rdquo; is not a description of every law; it is the standard by which law is to be judged.",
  },
  {
    reference: "Acts 5:29",
    text: "But Peter and the apostles answered, &ldquo;We must obey God rather than men.&rdquo;",
    reflection:
      "The apostles were not anarchists; they had already obeyed civil authorities in countless ways. This is jurisdictional refusal: the Sanhedrin has ordered them to stop proclaiming Jesus, which is an overreach into God&rsquo;s domain. The statement is not a general license for disobedience but a specific claim about limits. The cost was beatings; they accepted it joyfully.",
  },
  {
    reference: "Psalm 146:3-5",
    text: "Put not your trust in princes, in a son of man, in whom there is no salvation. When his breath departs, he returns to the earth; on that very day his plans perish. Blessed is he whose help is the God of Jacob, whose hope is in the LORD his God.",
    reflection:
      "The contrast is not between political engagement and withdrawal; it is between misplaced trust and rightly placed trust. Princes are mortal; their plans end with their breath. The beatitude in verse 5 does not belong to the uninvolved — it belongs to the one whose hope is located above the electoral calendar.",
  },
  {
    reference: "Amos 5:21-24",
    text: "I hate, I despise your feasts, and I take no delight in your solemn assemblies... But let justice roll down like waters, and righteousness like an ever-flowing stream.",
    reflection:
      "God refuses worship from people who exploit the poor in the marketplace. The prophetic tradition links liturgy and justice inextricably: you cannot praise God on Sunday and defraud your neighbor on Monday. The church that has no political witness is not being appropriately apolitical; it is being disobedient. The question is not whether to engage but how.",
  },
  {
    reference: "Jeremiah 29:7",
    text: "But seek the welfare of the city where I have sent you into exile, and pray to the LORD on its behalf, for in its welfare you will find your welfare.",
    reflection:
      "God commands exiles in Babylon — a pagan empire, not their home, not their choice — to seek its shalom. Not to withdraw, not to despair, not to spend their energy resenting their context, but to invest in the flourishing of the city where they find themselves. Political engagement motivated by shalom — the comprehensive flourishing of a community — is commanded, not optional.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "Gh9OLZ-KKUY", title: "Render to Caesar — Jesus and Political Authority" },
  { videoId: "4t8V4TnUNas", title: "Two Kingdoms: Augustine and Luther on Church and State" },
  { videoId: "7RNzKBcjFAw", title: "The Prophetic Tradition and Political Witness" },
  { videoId: "Z2EiB7RZKZE", title: "Christian Nationalism: A Theological Critique" },
  { videoId: "eUP48bq2iYQ", title: "Why Political Hope Disappoints — Psalm 146" },
  { videoId: "cNfQT2zMShk", title: "Faithful Citizenship — Engaging Politics as a Christian" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianPoliticsPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<PLTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [politicalIssue, setPoliticalIssue] = useState("");
  const [biblicalLens, setBiblicalLens] = useState("");
  const [howChristLike, setHowChristLike] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as PLTEntry[]);
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
    if (!politicalIssue.trim() || !biblicalLens.trim()) return;
    const entry: PLTEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      politicalIssue: politicalIssue.trim(),
      biblicalLens: biblicalLens.trim(),
      howChristLike: howChristLike.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setPoliticalIssue("");
    setBiblicalLens("");
    setHowChristLike("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? BLUE : BORDER}`,
    background: active ? "rgba(59, 130, 246, 0.12)" : "transparent",
    color: active ? BLUE : MUTED,
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
    color: BLUE,
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
                color: BLUE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Faith &amp; Public Life
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Render Unto Caesar: Christian Faith and Politics
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              &ldquo;Render to Caesar the things that are Caesar&rsquo;s, and to God the things
              that are God&rsquo;s&rdquo; — Jesus drew a line that no political order has ever
              been comfortable with. This guide explores the theology of political engagement, the
              prophetic tradition, why the church must not become a party, and how to be a
              faithful citizen of two kingdoms at once.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${BLUE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Put not your trust in princes, in a son of man, in whom there is no
                salvation. When his breath departs, he returns to the earth; on that very day his
                plans perish.&rdquo;
              </p>
              <p style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 600 }}>Psalm 146:3-4</p>
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
                Seven theological studies on political authority, prophetic witness, and faithful
                citizenship — from Augustine&rsquo;s two cities to the specific problem of
                Christian nationalism to why political hope always disappoints.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: BLUE,
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
                        background: "rgba(59, 130, 246, 0.07)",
                        border: `1px solid rgba(59, 130, 246, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: BLUE,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Caesar and God, the two cities, the prophets and the kings, Romans 13 and Acts
                  5:29, political hope and the God who outlasts every empire — these are not
                  separate topics but one long argument about where final authority lies. The
                  Christian who has internalized Psalm 146 can vote, advocate, and serve in public
                  life with full commitment and without idolatry, because she knows the election
                  that actually matters has already been decided. Explore how culture intersects
                  with faith in our{" "}
                  <Link href="/christian-culture" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christians and Culture guide
                  </Link>
                  , or go deeper on the call to justice in{" "}
                  <Link href="/christian-justice" style={{ color: BLUE, textDecoration: "underline" }}>
                    Christian Justice
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
                Six practices for political engagement that forms the soul rather than inflaming it —
                from the examination of conscience to the fast from media to voting as neighbor-love.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: BLUE,
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
                      color: BLUE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about political passion
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Political passion is not the enemy — indifference to injustice is. The prophets
                  were not calm. King was not moderate. The danger is not passion but misplaced
                  ultimate hope. You can care enormously about an election while knowing that the
                  kingdom does not depend on its outcome. The practices above are designed to hold
                  those two things together: full engagement with proper expectation, zeal with
                  sabbath, advocacy with prayer. That combination is what the world expects from
                  the church and almost never sees.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six thinkers who have wrestled seriously with the relation of faith to political
                life — spanning four continents and fifteen centuries, from Augustine&rsquo;s
                North Africa to King&rsquo;s Birmingham jail.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: BLUE,
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
                      background: "rgba(59, 130, 246, 0.06)",
                      borderLeft: `3px solid ${BLUE}`,
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
                Six texts to read slowly — on political authority, the prophetic tradition,
                misplaced hope, and the call to seek the welfare of the city. Each pairs the
                passage with a reflection for prayer and application.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: BLUE,
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
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${BLUE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  For each text: adoration — name what it says about God&rsquo;s sovereignty over
                  political history. Confession — where have you placed political hope that belongs
                  to God, or remained silent when the prophetic tradition required speech?
                  Petition — ask for the grace to be a faithful citizen of both kingdoms, neither
                  withdrawing nor idolizing, engaging with full commitment and proper hope.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Name a political issue you&rsquo;re wrestling with, the biblical lens you&rsquo;re
                applying to it, and how you can engage in a Christ-like way. Entries are saved
                privately in your browser — no one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="plt-issue" style={labelStyle}>
                    Political issue you&rsquo;re wrestling with
                  </label>
                  <input
                    id="plt-issue"
                    type="text"
                    value={politicalIssue}
                    onChange={(e) => setPoliticalIssue(e.target.value)}
                    placeholder="e.g. immigration policy, abortion legislation, criminal justice reform, economic inequality"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="plt-lens" style={labelStyle}>
                    Biblical lens you&rsquo;re applying
                  </label>
                  <textarea
                    id="plt-lens"
                    value={biblicalLens}
                    onChange={(e) => setBiblicalLens(e.target.value)}
                    placeholder="Which Scripture, theological tradition, or biblical principle is guiding your thinking?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="plt-christlike" style={labelStyle}>
                    How you can engage in a Christ-like way
                  </label>
                  <textarea
                    id="plt-christlike"
                    value={howChristLike}
                    onChange={(e) => setHowChristLike(e.target.value)}
                    placeholder="Concrete next step: a conversation, a letter, a vote, a fast from outrage, a prayer for those you oppose"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!politicalIssue.trim() || !biblicalLens.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !politicalIssue.trim() || !biblicalLens.trim() ? BORDER : BLUE,
                    color: !politicalIssue.trim() || !biblicalLens.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !politicalIssue.trim() || !biblicalLens.trim() ? "not-allowed" : "pointer",
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
                      Name one issue, one biblical lens, one Christ-like step — and take it. That
                      is what faithful political engagement looks like from the inside.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: BLUE, marginBottom: 2 }}>
                              {entry.politicalIssue}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.politicalIssue}`}
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

                        <div style={{ marginBottom: entry.howChristLike ? 10 : 0 }}>
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
                            Biblical lens
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.biblicalLens}
                          </p>
                        </div>

                        {entry.howChristLike && (
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
                              Christ-like engagement
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.howChristLike}
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
                Teaching on Christian political theology — on rendering to Caesar, the prophetic
                tradition, Christian nationalism, and faithful citizenship. Good companions to the
                Theology and Voices tabs.
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
              The church that cannot be captured
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The church&rsquo;s most valuable contribution to political life is not a voting bloc
              or a legislative agenda. It is a community whose ultimate loyalty cannot be purchased
              by any party, captured by any ideology, or silenced by any administration. A church
              that will praise Caesar when convenient and condemn him when necessary — without
              changing its message, its Lord, or its people — is the most politically subversive
              institution in any society. Be that church.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue exploring: see how Christians engage culture in{" "}
              <Link href="/christian-culture" style={{ color: BLUE, textDecoration: "underline" }}>
                Christians and Culture
              </Link>
              , pursue justice through{" "}
              <Link href="/christian-justice" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Justice
              </Link>
              , or deepen your prophetic witness through{" "}
              <Link href="/christian-service" style={{ color: BLUE, textDecoration: "underline" }}>
                Christian Service
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
