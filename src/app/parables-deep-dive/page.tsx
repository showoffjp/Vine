"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useCallback } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

type ParablesTab =
  | "overview"
  | "kingdom"
  | "grace"
  | "discipleship"
  | "judgment"
  | "prayer"
  | "themes"
  | "journal"
  | "videos";

type Parable = {
  title: string;
  reference: string;
  gospels: string[];
  theme: string;
  summary: string;
  mainLesson: string;
  keyVerse: string;
  reflectionQuestion: string;
};

type JEntry = {
  id: string;
  date: string;
  verse: string;
  reflection: string;
  prayer: string;
};

// ─── Parable Data ────────────────────────────────────────────────────────────

const KINGDOM_PARABLES: Parable[] = [
  {
    title: "The Parable of the Sower",
    reference: "Matthew 13:3-23",
    gospels: ["Matthew", "Mark", "Luke"],
    theme: "Reception of the Word",
    summary:
      "A farmer scatters seed on four types of soil: hardened path, rocky ground, thorny ground, and good soil. Only the seed on good soil produces a harvest — thirty, sixty, and a hundredfold. Jesus explains that the soils represent different responses to the Word of God: the hardened heart snatched by the evil one; the shallow heart that falls away under persecution; the distracted heart choked by worldly cares and wealth; and the receptive heart that understands and bears lasting fruit.",
    mainLesson:
      "The condition of the heart determines how the Word of God takes root. Hearing the gospel is not enough — we must cultivate receptive, attentive hearts free from hardness, shallowness, and distraction. The goal is not merely to hear but to understand and bear lasting fruit.",
    keyVerse: "Matthew 13:23",
    reflectionQuestion:
      "Which type of soil best describes your heart toward God's Word right now — and what would it look like to cultivate deeper, rockless, weed-free soil?",
  },
  {
    title: "The Wheat and the Tares",
    reference: "Matthew 13:24-30, 36-43",
    gospels: ["Matthew"],
    theme: "Kingdom Patience and Judgment",
    summary:
      "A farmer sows good wheat, but an enemy secretly sows weeds (tares/darnel) among it. When the servants want to pull up the weeds, the master forbids it, fearing the wheat will be uprooted with them. At harvest, he will separate the wheat into the barn and the tares into fire. Jesus explains: the field is the world, the good seed are sons of the Kingdom, the tares are sons of the evil one, the enemy is the devil, and the harvest is the end of the age.",
    mainLesson:
      "The Kingdom of God currently contains both true and false believers, genuine and counterfeit disciples. God in his patience allows this mixed reality until the final judgment, when the Son of Man will send his angels to separate them definitively. This should produce humility, patience, and holy urgency — not presumptuous judgment of others.",
    keyVerse: "Matthew 13:30",
    reflectionQuestion:
      "How does the reality that the church contains true and false disciples affect how you relate to people in the church who seem to have different levels of commitment?",
  },
  {
    title: "The Mustard Seed",
    reference: "Matthew 13:31-32",
    gospels: ["Matthew", "Mark", "Luke"],
    theme: "Kingdom Growth",
    summary:
      "The Kingdom of Heaven is like a mustard seed, the smallest of all garden seeds, which grows into a tree large enough for birds to perch in its branches. In its context, the contrast between the tiny seed and the enormous tree was astonishing to first-century hearers who knew mustard could grow to ten feet and more.",
    mainLesson:
      "The Kingdom of God begins in ways that seem impossibly small — a band of twelve disciples, a crucified teacher — but its ultimate scope is cosmic. We must not despise small beginnings in God's work, whether in our own spiritual formation, our local church, or the global mission. God delights in working through apparent insignificance.",
    keyVerse: "Matthew 13:32",
    reflectionQuestion:
      "Where do you see God doing something in your life that looks too small to matter, but might be the beginning of something much larger?",
  },
  {
    title: "The Yeast/Leaven",
    reference: "Matthew 13:33",
    gospels: ["Matthew", "Luke"],
    theme: "Kingdom Permeation",
    summary:
      "The Kingdom of Heaven is like yeast that a woman mixes into a large amount of flour until it works through the whole batch. Yeast was typically a symbol of corruption in Jewish culture, which makes Jesus' use of it provocative and deliberate — the Kingdom permeates, infiltrates, and transforms from within every domain it touches.",
    mainLesson:
      "The Kingdom does not arrive as a thunderbolt from outside but as leaven from within — quietly, invisibly, yet irresistibly transforming every structure it penetrates. This applies to cultures, families, workplaces, and individual hearts. Kingdom work is often hidden and incremental before it becomes visibly transformative.",
    keyVerse: "Matthew 13:33",
    reflectionQuestion:
      "Where are you called to be the 'leaven' — a transforming presence in a family, workplace, or neighborhood — even when the change is not yet visible?",
  },
  {
    title: "The Hidden Treasure",
    reference: "Matthew 13:44",
    gospels: ["Matthew"],
    theme: "Kingdom Worth",
    summary:
      "The Kingdom of Heaven is like treasure hidden in a field that a man finds and hides again. In his joy he sells everything he owns to buy that field. In first-century Palestine it was common to bury treasure in fields during times of war or instability. The man stumbles upon it accidentally — and his joy is so total that selling everything else feels not like sacrifice but like the obvious response to something incomparably valuable.",
    mainLesson:
      "The Kingdom demands total reorientation of priorities, but the reorientation comes not from grim duty but from joyful discovery. When we truly see the worth of knowing and belonging to God, every sacrifice becomes not a cost but a trade-up. The motivating emotion is not fear or guilt but overwhelming joy at having found something of infinite value.",
    keyVerse: "Matthew 13:44",
    reflectionQuestion:
      "Is your relationship with God characterized more by joyful discovery of infinite worth, or by a sense of obligation? What would change if you genuinely saw the Kingdom as the greatest treasure you could possess?",
  },
  {
    title: "The Pearl of Great Price",
    reference: "Matthew 13:45-46",
    gospels: ["Matthew"],
    theme: "Kingdom Supremacy",
    summary:
      "The Kingdom of Heaven is like a merchant searching for fine pearls who finds one of extraordinary value and sells everything he has to buy it. Unlike the hidden treasure found accidentally, this man is a professional seeker — and his lifetime of experience helps him recognize that this pearl surpasses everything he has ever encountered. All his accumulated wealth becomes negotiating currency for one supreme purchase.",
    mainLesson:
      "The Kingdom of God surpasses every other earthly value — relationships, wealth, status, achievement, comfort. The parable twin to the hidden treasure reinforces the point: whether by sudden discovery or long seeking, the response of those who truly see the Kingdom is the same — radical, all-in commitment. No partial allegiance is adequate for what Jesus is offering.",
    keyVerse: "Matthew 13:46",
    reflectionQuestion:
      "What 'pearls' of lesser value — career success, comfort, reputation, a relationship — are you most tempted to prize more than the Kingdom? What would it look like to sell them for the one pearl?",
  },
  {
    title: "The Net",
    reference: "Matthew 13:47-50",
    gospels: ["Matthew"],
    theme: "Kingdom Judgment",
    summary:
      "The Kingdom of Heaven is like a dragnet cast into the sea that gathers fish of every kind. When it is full, fishermen pull it to shore and sort the catch, keeping the good fish and throwing away the bad. Jesus explains: at the end of the age, angels will separate the wicked from the righteous — the wicked will be thrown into the fiery furnace.",
    mainLesson:
      "The Kingdom currently gathers widely — like a net sweeping through the whole sea of humanity — but the gathering is not permanent sorting. A final, definitive separation is coming. This parable, like the Wheat and Tares, guards against both premature judgment (we do not do the sorting now) and presumptuous carelessness (there is a sorting coming).",
    keyVerse: "Matthew 13:49",
    reflectionQuestion:
      "How does the certainty of a final judgment affect the urgency and compassion with which you engage people who are far from God right now?",
  },
  {
    title: "The Prodigal Son",
    reference: "Luke 15:11-32",
    gospels: ["Luke"],
    theme: "The Father's Heart",
    summary:
      "A younger son demands his inheritance early (a culturally shocking act of social death toward his father), squanders it in a far country, and in desperation returns hoping to be hired as a servant. His father, seeing him 'a great way off,' runs — a posture of undignified, shame-absorbing love — falls on his neck, and restores him fully to sonship with a robe, a ring, and a party. The elder son, furious at the celebration, refuses to enter. The father leaves the party to plead with him too. Jesus told this parable to rebuke the Pharisees who complained that he ate with sinners.",
    mainLesson:
      "The parable reveals the heart of God as a Father who watches and waits, who runs toward returning sinners, who lavishes restoration rather than rationed second chances, and who is grieved by the self-righteous elder-brother spirit that keeps people outside the party. The story has two lost sons — the one lost in licentiousness and the one lost in legalism — and the Father runs to both.",
    keyVerse: "Luke 15:20",
    reflectionQuestion:
      "Which son do you most identify with — the one who ran away and is learning to receive grace, or the one who stayed but is bitter about grace extended to others? How does this story challenge you?",
  },
];

const GRACE_PARABLES: Parable[] = [
  {
    title: "The Lost Sheep",
    reference: "Matthew 18:12-14",
    gospels: ["Matthew", "Luke"],
    theme: "God's Pursuit of the Lost",
    summary:
      "A shepherd with a hundred sheep leaves the ninety-nine on the hillside to search for the one that has gone astray. When he finds it, he lays it on his shoulders rejoicing and calls his neighbors to celebrate. Jesus' application: 'It is not the will of your Father in heaven that one of these little ones should perish.' In Luke 15 the parable is told to Pharisees who grumble that Jesus receives sinners, positioning God as the seeking shepherd and the grumbling religious leaders as those who don't understand what the flock is for.",
    mainLesson:
      "Every individual lost person is of irreplaceable worth to God. He does not write off the one for the sake of the ninety-nine. This refutes both the Pharisaic attitude that the religiously impure are not worth pursuing, and the modern attitude that people's choices disqualify them from God's concern. God goes after the lost with initiative, persistence, and joy at their return.",
    keyVerse: "Luke 15:7",
    reflectionQuestion:
      "Who in your life has wandered and perhaps feels beyond God's reach? How does this parable reshape your prayers and actions toward them?",
  },
  {
    title: "The Lost Coin",
    reference: "Luke 15:8-10",
    gospels: ["Luke"],
    theme: "Heaven's Joy Over Repentance",
    summary:
      "A woman with ten silver coins loses one, lights a lamp, sweeps the entire house, and searches carefully until she finds it. Then she calls her friends and neighbors to celebrate. Jesus says there is joy in the presence of the angels of God over one sinner who repents — the second in Luke's trilogy of lost things (sheep, coin, son), each intensifying the theme of joyful recovery.",
    mainLesson:
      "The response of heaven to one repentant sinner is not quiet satisfaction but communal celebration — a party. This parable is notable because it presents God in the image of a woman, a surprising rhetorical move by Jesus that subverts the assumption that only masculine images of God are theologically valid. The intensity of the search — lamp lit, house swept — portrays a God who leaves no corner unexplored for the sake of the lost.",
    keyVerse: "Luke 15:10",
    reflectionQuestion:
      "Do you find yourself genuinely moved by the spiritual restoration of people far from God, or has that sense of celebration become dulled? What would it take to recover that joy?",
  },
  {
    title: "The Unforgiving Servant",
    reference: "Matthew 18:23-35",
    gospels: ["Matthew"],
    theme: "Forgiveness as Debt Relief",
    summary:
      "A king decides to settle accounts with his servants. One servant owes ten thousand talents — an astronomically impossible sum, equivalent to billions of dollars — and the king forgives the entire debt when the servant begs for mercy. That same servant then finds a fellow servant who owes him a hundred denarii (a few hundred dollars) and has him thrown in prison for non-payment. When the king hears, he is furious and hands the unforgiving servant over to the jailers until he pays every last cent. Jesus told this parable in response to Peter asking how many times he must forgive a sinning brother.",
    mainLesson:
      "The immeasurable gap between the debt we owe God and the debts others owe us makes unforgiveness morally incoherent. A person who has been forgiven billions cannot justifiably imprison someone over a few dollars. Forgiveness of others is not optional for those who have received God's forgiveness — not because forgiveness earns God's grace, but because receiving grace without extending it reveals that the grace has not truly been received at all.",
    keyVerse: "Matthew 18:32-33",
    reflectionQuestion:
      "Is there someone you are holding in an emotional 'prison' of unforgiveness? What does the scale of God's forgiveness toward you say about your capacity and responsibility to release them?",
  },
  {
    title: "The Pharisee and the Tax Collector",
    reference: "Luke 18:9-14",
    gospels: ["Luke"],
    theme: "Humility in God's Presence",
    summary:
      "Two men go to the temple to pray. The Pharisee stands and prays about himself, listing his religious accomplishments and thanking God he is not like sinners, particularly the tax collector nearby. The tax collector stands far off, will not even look up, and beats his chest saying, 'God, be merciful to me, a sinner!' Jesus pronounces the tax collector justified — declared right before God — not the Pharisee. The punchline: 'Everyone who exalts himself will be humbled, and everyone who humbles himself will be exalted.'",
    mainLesson:
      "Genuine faith approaches God in honest, self-aware poverty of spirit rather than religious performance and comparison. The Pharisee's prayer is a soliloquy about himself; the tax collector's prayer is a cry for mercy. God justifies not the morally impressive but the spiritually honest. Religious achievement can be one of the greatest obstacles to actually receiving God's grace.",
    keyVerse: "Luke 18:13-14",
    reflectionQuestion:
      "Which prayer more closely resembles your typical approach to God — the Pharisee's confident resume, or the tax collector's honest cry for mercy? What does authentic humility before God look like for you specifically?",
  },
  {
    title: "The Two Debtors",
    reference: "Luke 7:41-43",
    gospels: ["Luke"],
    theme: "Gratitude Proportional to Grace",
    summary:
      "A moneylender forgives two debtors — one who owed five hundred denarii and one who owed fifty. Jesus asks Simon the Pharisee which debtor will love the moneylender more. Simon reluctantly answers: the one who was forgiven the most. Jesus then points to the sinful woman who has been weeping at his feet and anointing them: she has shown extravagant love because she has been forgiven much. Simon, who showed no such love, reveals that he has felt no such forgiveness.",
    mainLesson:
      "The depth of our love for God is proportional to our sense of how much we have been forgiven. Those who feel they owe God little will love little. The woman's extravagant, culturally embarrassing act of devotion flows not from personality but from a settled awareness of radical grace received. Spiritual tepidity often reveals an impoverished sense of one's own sin and one's need for mercy.",
    keyVerse: "Luke 7:47",
    reflectionQuestion:
      "Do you tend to think of yourself as someone who needed to be forgiven 'a little' or 'a great deal'? How does your honest answer explain the temperature of your love for God?",
  },
];

const DISCIPLESHIP_PARABLES: Parable[] = [
  {
    title: "The Good Samaritan",
    reference: "Luke 10:25-37",
    gospels: ["Luke"],
    theme: "Radical Love of Neighbor",
    summary:
      "A lawyer asks Jesus who his neighbor is. Jesus tells of a man beaten and left half-dead on the road from Jerusalem to Jericho. A priest and a Levite — both ritually qualified to help — each pass by on the other side. A Samaritan (a half-breed, despised by Jews) stops, bandages the man's wounds with oil and wine, places him on his own animal, takes him to an inn, pays for his care, and promises to cover any additional costs. Jesus asks: who was a neighbor? The lawyer cannot even bring himself to say 'Samaritan' and answers: 'the one who showed mercy.'",
    mainLesson:
      "The question 'Who is my neighbor?' — asked to limit the scope of love — is reframed by Jesus as 'To whom will I be a neighbor?' The answer is: whoever is in need of love, regardless of ethnicity, religion, or social category. Radical neighbor love crosses every boundary, involves personal cost, and does not wait for the 'deserving' but acts toward the vulnerable. The parable also implicitly rebukes religious performance that bypasses human suffering.",
    keyVerse: "Luke 10:36-37",
    reflectionQuestion:
      "Who is the 'Samaritan' in your cultural context — the person you instinctively dismiss as unlike you — and what would it look like to be a neighbor to them or to learn from them?",
  },
  {
    title: "The Rich Fool",
    reference: "Luke 12:16-21",
    gospels: ["Luke"],
    theme: "True Wealth and Death",
    summary:
      "A rich man's land produces abundantly. He decides to tear down his small barns and build larger ones to store all his grain and goods, then retire in comfort: 'Take it easy; eat, drink, and be merry.' God says to him: 'Fool! This night your soul is required of you, and the things you have prepared — whose will they be?' Jesus' conclusion: 'So is the one who lays up treasure for himself and is not rich toward God.' The parable is told after someone asks Jesus to arbitrate an inheritance dispute — Jesus refuses to be reduced to a property divider.",
    mainLesson:
      "Accumulating material security while neglecting eternal realities is the height of folly when death can arrive at any moment. The man's mistake is not that he was productive or successful, but that he lived as if his soul's future was as manageable as his grain supply. 'Being rich toward God' — investing in eternal things, in people, in generosity — is the counterpart to the fool's earthly hoarding.",
    keyVerse: "Luke 12:21",
    reflectionQuestion:
      "If you were told tonight is your last night, how would you evaluate the 'richness toward God' of the way you have been spending your time, money, and energy this year?",
  },
  {
    title: "The Tower Builder",
    reference: "Luke 14:28-30",
    gospels: ["Luke"],
    theme: "Counting the Cost of Discipleship",
    summary:
      "Immediately after saying that following Jesus requires hating even one's own family by comparison (Luke 14:26), Jesus tells a short parable: who builds a tower without first sitting down and calculating the cost to see if he can complete it? Otherwise he lays a foundation, cannot finish, and everyone mocks him. The paired parable of the king going to war makes the same point: assess whether you have the resources for the battle before engaging.",
    mainLesson:
      "Jesus deliberately discouraged hasty, emotionally driven, uncalculated commitments to discipleship. He wanted people to follow him with eyes open to the cost — not to reduce the number of disciples, but to produce durable ones. Superficial, crowd-following Christianity that has never truly counted the cost leads to the embarrassment of a half-built tower: a life that began with Jesus but was not sustained to completion.",
    keyVerse: "Luke 14:28",
    reflectionQuestion:
      "Have you honestly counted the full cost of following Jesus — not just the emotional high of conversion but the daily cross-carrying, the potential family conflict, the countercultural choices? What would a more calculated, durable commitment look like?",
  },
  {
    title: "The Talents",
    reference: "Matthew 25:14-30",
    gospels: ["Matthew", "Luke"],
    theme: "Faithful Stewardship of Gifts",
    summary:
      "A man going on a journey entrusts his servants with different amounts of money (talents) according to their ability — five to one, two to another, one to a third. On his return, the servants with five and two talents have doubled their master's investment and are commended: 'Well done, good and faithful servant; you were faithful over a few things, I will make you ruler over many things.' The servant with one talent buried it in fear and is condemned. His one talent is given to the servant with ten, and he is cast out.",
    mainLesson:
      "The master expects proportional return — not equal return. Each servant was given according to his own ability, and each is responsible for what was entrusted to him specifically. The condemned servant's sin was not incompetence but fearful inaction — he knew his master's character and still chose to play it safe. Fear is the enemy of faithful stewardship. God's expectation is not perfection but engaged, risk-taking faithfulness with what we have been given.",
    keyVerse: "Matthew 25:21",
    reflectionQuestion:
      "What specific gifts, resources, opportunities, or relationships has God entrusted to you? Are you investing them for Kingdom return, or has fear caused you to 'bury' them in safety?",
  },
  {
    title: "The Two Sons",
    reference: "Matthew 21:28-32",
    gospels: ["Matthew"],
    theme: "Obedience Over Profession",
    summary:
      "A father tells his two sons to go work in the vineyard. The first says, 'I will not,' but later changes his mind and goes. The second says, 'I will, sir,' but does not go. Jesus asks which did the father's will — clearly the first. He then applies this to the Pharisees: tax collectors and prostitutes (who initially said 'no' to God) are entering the Kingdom ahead of the religious leaders (who said 'yes' but never actually obeyed).",
    mainLesson:
      "Obedience — actual, embodied action in the direction of God's will — matters infinitely more than verbal profession or religious reputation. This parable confronts the danger of religious hypocrisy: those who sound most committed to God may be furthest from actually doing his will, while those whose lives have included significant moral failure may be closer to true repentance and genuine response.",
    keyVerse: "Matthew 21:31",
    reflectionQuestion:
      "Where in your life do you say 'yes' to God verbally but live practically as though you said 'no'? What is one specific area where you need to move from profession to actual obedience?",
  },
  {
    title: "The Vine and the Branches",
    reference: "John 15:1-8",
    gospels: ["John"],
    theme: "Abiding in Christ",
    summary:
      "Jesus says he is the true vine and his Father is the gardener. Every branch that does not bear fruit is cut off; every branch that does bear fruit is pruned so it will bear more. He commands his disciples to 'remain' or 'abide' in him, as the branch cannot bear fruit unless it remains in the vine. Apart from him they can do nothing. If they remain in him and his words remain in them, they may ask whatever they wish and it will be done, for bearing much fruit is what glorifies the Father.",
    mainLesson:
      "Fruitfulness in the Christian life is not produced by effort, technique, or willpower but by vital, dependent connection to Christ. The branch metaphor is radical: a branch has no independent life; it is entirely derivative from the vine. Abiding — remaining in Jesus through his Word, prayer, obedience, and love — is the one necessary condition for a fruitful life. Everything else flows from this organic union.",
    keyVerse: "John 15:5",
    reflectionQuestion:
      "What does 'abiding' in Christ look like concretely in your daily life? What are the practical means by which you stay connected to the vine — and what disconnects you from it?",
  },
  {
    title: "The Wise and Foolish Builders",
    reference: "Matthew 7:24-27",
    gospels: ["Matthew", "Luke"],
    theme: "Hearing and Doing",
    summary:
      "The Sermon on the Mount closes with this parable: the one who hears Jesus' words and does them is like a wise man who built his house on rock — when the rain, floods, and winds came, the house stood. The one who hears but does not do them is like a foolish man who built on sand — the same storm destroyed his house completely. The contrast is not between different foundations (rock vs. sand) but between two people who both heard the same words and made different choices about obedience.",
    mainLesson:
      "The storms of life are not if-questions but when-questions. Both builders faced identical storms. The only variable was foundation — and foundation was determined not by profession, attendance, or emotional experience, but by obedience to Jesus' specific teachings. Biblical knowledge that does not produce practical obedience provides no more security than ignorance when the crisis comes.",
    keyVerse: "Matthew 7:24",
    reflectionQuestion:
      "What specific teaching of Jesus do you know intellectually but have not yet built into the actual structure of your daily life? What would it look like to lay that particular stone today?",
  },
];

const JUDGMENT_PARABLES: Parable[] = [
  {
    title: "The Ten Virgins",
    reference: "Matthew 25:1-13",
    gospels: ["Matthew"],
    theme: "Readiness for Christ's Return",
    summary:
      "Ten virgins take their lamps to meet a bridegroom. Five are foolish and take no extra oil; five are wise and bring extra oil in jars. The bridegroom is delayed. All ten fall asleep. At midnight the cry comes: 'The bridegroom is coming!' The foolish virgins find their lamps going out and ask the wise for oil; the wise say there is not enough for both and tell them to buy their own. While they are away buying oil, the bridegroom arrives, the door is shut, and when the foolish virgins return, the bridegroom says: 'I do not know you.'",
    mainLesson:
      "The readiness that matters is personal, not transferable, and it must be cultivated before the crisis arrives — not purchased in the emergency. The foolish virgins' mistake was not that they fell asleep (all ten did) but that they had not prepared in advance. 'Keeping watch' means ongoing spiritual preparation — maintaining an inner life of faith, prayer, and obedience — not merely staying physically awake.",
    keyVerse: "Matthew 25:13",
    reflectionQuestion:
      "What does it practically mean for you to keep your 'lamp full of oil' — to maintain genuine spiritual readiness for Christ's return — in the rhythms of your ordinary daily life?",
  },
  {
    title: "The Sheep and the Goats",
    reference: "Matthew 25:31-46",
    gospels: ["Matthew"],
    theme: "Judgment and Care for the Vulnerable",
    summary:
      "The Son of Man comes in glory and separates all nations as a shepherd separates sheep from goats. To those on his right he says: 'I was hungry and you fed me, thirsty and you gave me drink, a stranger and you welcomed me, naked and you clothed me, sick and in prison and you visited me.' When they ask when they did these things, he answers: 'Whatever you did for one of the least of these brothers and sisters of mine, you did for me.' Those on the left receive the opposite verdict for their omissions.",
    mainLesson:
      "Jesus identifies himself so completely with the vulnerable, the poor, the imprisoned, and the marginalized that how we treat 'the least' is how we treat him. This parable does not teach salvation by works, but it does reveal that genuine faith produces concrete acts of mercy — and that professed faith that produces no such acts is no faith at all. The shocking surprise of both groups is that they did not know they were serving (or failing to serve) Christ himself.",
    keyVerse: "Matthew 25:40",
    reflectionQuestion:
      "Who are 'the least of these' in your specific social location — and how concretely are you serving Christ by serving them?",
  },
  {
    title: "The Rich Man and Lazarus",
    reference: "Luke 16:19-31",
    gospels: ["Luke"],
    theme: "Eternal Reversal",
    summary:
      "A rich man feasts daily in luxury while the beggar Lazarus lies at his gate, covered in sores, longing for the crumbs from the rich man's table. Both die. Lazarus is carried by angels to Abraham's side; the rich man is in Hades in torment. He asks Abraham to send Lazarus to cool his tongue; Abraham says the chasm is fixed and no one can cross. He then asks for Lazarus to be sent back to warn his brothers; Abraham says they have Moses and the Prophets, and if they don't listen to them, they won't listen even to someone who rises from the dead.",
    mainLesson:
      "The afterlife involves a radical reversal of earthly fortunes — not because poverty is virtuous but because the rich man in the story ignored the suffering man literally at his doorstep. The parable confronts the religious complacency of those who use God's blessing as evidence that the poor deserve their condition. The final twist — 'even if someone rises from the dead, they will not be persuaded' — is a dark foreshadowing of the response to Jesus' own resurrection.",
    keyVerse: "Luke 16:26",
    reflectionQuestion:
      "Who is the 'Lazarus' at your gate — the visible, nearby suffering that you have learned to step over — and what would genuine response look like?",
  },
  {
    title: "The Great Banquet",
    reference: "Luke 14:15-24",
    gospels: ["Luke", "Matthew"],
    theme: "Rejected Invitation and Surprising Guests",
    summary:
      "A man gives a great banquet and invites many guests. When the banquet is ready, he sends his servant to tell them to come — but each invited guest makes excuses: one has bought a field, another oxen to examine, another has just gotten married. The host, furious, sends the servant into the streets and alleys to bring in the poor, the crippled, the blind, and the lame. When there is still room, he sends the servant to the country roads and hedges to compel more people to come in. 'Not one of those who were invited will taste my banquet.'",
    mainLesson:
      "The invited guests — representing Israel's religious leaders — refused the divine invitation in favor of ordinary earthly concerns. In their place, the morally disreputable and the social outcasts are welcomed to the feast. The parable drives home both the urgency of response to the gospel invitation and the stunning reversal by which those deemed unworthy are welcomed while the presumed insiders exclude themselves through indifference.",
    keyVerse: "Luke 14:23",
    reflectionQuestion:
      "What ordinary 'good things' — work, family, recreation, comfort — most tempt you to treat the invitation of Jesus as something to be deferred rather than urgently embraced?",
  },
  {
    title: "The Wicked Tenants",
    reference: "Matthew 21:33-46",
    gospels: ["Matthew", "Mark", "Luke"],
    theme: "Israel's Rejection of the Son",
    summary:
      "A landowner plants a vineyard, leases it to tenant farmers, and goes away. At harvest he sends servants to collect his fruit; the tenants beat one, kill another, and stone a third. He sends more servants with the same result. Finally he sends his own son, thinking they will respect him. They say, 'This is the heir; let us kill him and seize his inheritance.' They kill him and throw him out of the vineyard. Jesus asks what the owner will do — the hearers answer: he will destroy those tenants and rent the vineyard to others. Jesus then quotes Psalm 118:22: 'The stone the builders rejected has become the cornerstone.'",
    mainLesson:
      "This is one of the most theologically explicit parables, pointing directly to the rejection and death of Jesus at the hands of the Jewish religious establishment. The parable traces Israel's long history of rejecting the prophets and culminates in the rejection of the Son. But the rejected cornerstone becomes the foundation of the new structure — a stunning reversal that is at the center of both Judaism and Christianity's ongoing theological conversation.",
    keyVerse: "Matthew 21:42",
    reflectionQuestion:
      "How does the long pattern of human resistance to God — from the prophets to the cross — affect your understanding of the seriousness of your own ongoing resistance to his claims on your life?",
  },
];

const PRAYER_PARABLES: Parable[] = [
  {
    title: "The Friend at Midnight",
    reference: "Luke 11:5-8",
    gospels: ["Luke"],
    theme: "Persistence and Boldness in Prayer",
    summary:
      "A man goes to his neighbor at midnight asking for three loaves of bread for an unexpected guest. The neighbor refuses: the door is locked, the children are in bed. Yet Jesus says that because of the man's persistence (in the Greek, anaideia — shameless boldness or impudence), the neighbor will get up and give him whatever he needs. Jesus immediately follows with: 'Ask and it will be given, seek and you will find, knock and the door will be opened.' The parable argues from the lesser to the greater: if even a reluctant neighbor responds to bold persistence, how much more will the Father respond to his children?",
    mainLesson:
      "Boldness, persistence, and even holy audacity are not disrespectful before God but encouraged. God is not a reluctant neighbor but a willing Father — and if persistent, shameless asking moves even the reluctant, it certainly moves the One who delights to give good gifts. Passionless, timid, occasional prayer that gives up quickly has misunderstood the Father's character and the nature of our access to him.",
    keyVerse: "Luke 11:8",
    reflectionQuestion:
      "Where in your prayer life have you given up too quickly — stopped asking because you assumed the answer was no? What bold, persistent, specific request is Jesus inviting you to bring to the Father?",
  },
  {
    title: "The Persistent Widow",
    reference: "Luke 18:1-8",
    gospels: ["Luke"],
    theme: "Never Give Up in Prayer",
    summary:
      "Luke tells us explicitly that Jesus told this parable to show his disciples 'that they should always pray and not give up.' A widow comes again and again to an unjust judge who neither fears God nor cares about people. He finally grants her justice — not out of righteousness but because her persistence is wearing him out ('lest she beat me down by her continual coming'). Jesus' application: if an unjust judge finally yields to a persistent widow, will not God bring about justice for his chosen ones who cry out to him day and night? But Jesus closes with a piercing question: 'When the Son of Man comes, will he find faith on the earth?'",
    mainLesson:
      "Persistent, tenacious prayer is a mark of genuine faith. The parable argues again from lesser to greater: if even a corrupt judge responds eventually to relentless pleading, the perfectly just and loving Father will certainly vindicate his children's cries. The closing question — 'Will he find faith?' — links prayerlessness to faithlessness. To give up in prayer is ultimately to give up on God.",
    keyVerse: "Luke 18:7-8",
    reflectionQuestion:
      "What persistent, unanswered prayer have you been most tempted to abandon? What would it look like to be the persistent widow — determined, undeterred, refusing to stop asking — in that specific prayer?",
  },
  {
    title: "The Father Who Gives Good Gifts",
    reference: "Matthew 7:9-11",
    gospels: ["Matthew", "Luke"],
    theme: "God's Generosity Toward His Children",
    summary:
      "Jesus asks: which of you, if your son asks for bread, will give him a stone? Or if he asks for a fish, will give him a snake? If you, evil as you are, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him! Luke's version specifies: 'how much more will your heavenly Father give the Holy Spirit to those who ask him.' This mini-parable anchors the Lord's Prayer teaching and the ask-seek-knock commands in the character of the Father.",
    mainLesson:
      "The foundation of bold, persistent prayer is confidence in the character of the Father — not confidence in our own worthiness or formula. The analogy from flawed human parenting to perfect divine parenting is meant to dismantle the subconscious image of God as withholding, capricious, or indifferent. The worst human parent gives their child food, not rocks. God gives not just what we ask but his very Spirit — the best possible gift.",
    keyVerse: "Matthew 7:11",
    reflectionQuestion:
      "What is your functional image of God when you pray — a generous Father who loves to give good things, or a reluctant God who must be coaxed? How does your prayer life reveal your actual theology of God's character?",
  },
  {
    title: "The Pharisee and the Tax Collector (Prayer Tab)",
    reference: "Luke 18:9-14",
    gospels: ["Luke"],
    theme: "Authentic vs. Performative Prayer",
    summary:
      "This parable appears above in the Grace section but deserves attention specifically as a teaching on the nature of prayer. The Pharisee's 'prayer' is actually an address to himself using God as the audience for his self-admiration — 'God, I thank you that I am not like other men.' The tax collector's prayer is addressed entirely to God out of a genuine sense of need: 'God, be merciful to me, a sinner.' The first prayer is actually a monologue; the second is authentic encounter. Only one man goes home justified.",
    mainLesson:
      "Authentic prayer is a genuine encounter with God as God, not a performance for human or divine approval. The Pharisee's prayer, despite its impressive vocabulary of gratitude and moral listing, does not constitute communication with God because it is directed at his own reputation. The tax collector's five words — 'God, be merciful to me, sinner' — are among the most theologically loaded in Scripture, expressing total dependence and honest self-knowledge.",
    keyVerse: "Luke 18:13",
    reflectionQuestion:
      "When you pray, are you more often genuinely talking to God or performing for an internal audience? What does authentic, unperformed prayer look like for you in private?",
  },
];

const THEMES_DATA = [
  {
    title: "The Kingdom of God: Already and Not Yet",
    color: ACCENT,
    content:
      "The parables are saturated with what scholars call 'already/not yet' tension — the Kingdom has arrived in Jesus (already) but has not yet been fully consummated (not yet). The mustard seed is already planted. The net is already in the water. The treasure has already been found. But the harvest has not come, the sorting has not occurred, the tree has not fully grown. This tension is the central framework for understanding Christian life: we live in the overlap of the ages, after the decisive victory of the cross and resurrection, before the final return of the King. The parables teach us to live with that tension faithfully — neither collapsing into despair (the Kingdom is not coming) nor into triumphalism (the Kingdom is fully here already).",
  },
  {
    title: "The Great Reversal",
    color: GREEN,
    content:
      "One of the most consistent patterns across the parables is unexpected reversal: the last shall be first, the humble will be exalted, the despised will be welcomed, the confident will be turned away. The Prodigal Son who is 'dead' comes alive; the elder brother who is 'alive' is spiritually dead. The tax collector who seems farthest from God is justified; the Pharisee who seems closest is not. Lazarus in his poverty enters Abraham's bosom; the rich man in his luxury enters torment. This pattern is not arbitrary but theological — it flows from a God who opposes the proud and gives grace to the humble, who raises the lowly and scatters the proud in the thoughts of their hearts (Luke 1:51-52). Jesus' parables systematically subvert all human systems of worth and status.",
  },
  {
    title: "Grace vs. Merit",
    color: "#6B4FBB",
    content:
      "Many of the parables are laser-targeted at the religious merit system of first-century Judaism — and by extension, every human religious system that tries to earn standing before God. The workers in the vineyard (Matt 20) are all paid the same regardless of hours worked, and those who worked longest complain about equity — Jesus says the master is free to be generous. The Prodigal Son's return triggers a party not a probation period. The tax collector prays five words and goes home justified; the Pharisee with his impressive resume does not. Again and again, Jesus dismantles the carefully constructed structures by which people secure their sense of religious worthiness and replaces them with a simple, shocking, scandalous grace that cannot be earned, only received.",
  },
  {
    title: "The Cost of Discipleship",
    color: "#EF4444",
    content:
      "While the Kingdom is free grace, following Jesus costs everything. The Hidden Treasure and Pearl of Great Price portray the Kingdom as worth selling everything for — not because it is expensive, but because it is so incomparably valuable that everything else becomes negotiating currency. The Tower Builder counts the cost. The Two Sons reveal that real obedience, not verbal commitment, is what the Father requires. The Talents demand active stewardship at personal risk. The Ten Virgins must have oil in their own lamps — readiness cannot be borrowed from others. This strand of the parables guards against a cheap grace that treats the Kingdom as an add-on to a basically unchanged life. Jesus was a deliberate de-recruiter of shallow disciples (Luke 14:25-35).",
  },
  {
    title: "God's Relentless Pursuit of the Lost",
    color: "#10B981",
    content:
      "Luke 15 — the lost sheep, the lost coin, and the lost son — forms what many scholars consider the theological heart of the parables. All three portray a God who is not passive, waiting for sinners to find their way home, but actively seeking: the shepherd leaves the ninety-nine; the woman lights a lamp and sweeps the whole house; the father runs down the road. The seeking God does not wait to be approached — he approaches. This theme culminates in the Incarnation itself: 'The Son of Man came to seek and to save the lost' (Luke 19:10). Every parable about God's reaching toward sinners is a window into the theological logic of Christmas and Good Friday.",
  },
  {
    title: "The Hiddenness and Apparent Smallness of the Kingdom",
    color: "#F59E0B",
    content:
      "The Mustard Seed and the Yeast both portray the Kingdom as operating in ways that seem laughably small or invisible before they become undeniable. This was especially necessary for Jesus' hearers who expected the Messiah to arrive with spectacular military and political force — overthrowing Rome, restoring the Davidic throne, and ushering in an obvious, unmistakable age of glory. Jesus constantly redirected: the Kingdom comes like a seed planted in the ground, like yeast disappearing into flour. The church's apparently unimpressive beginnings — twelve disciples, a crucified founder, a persecuted minority movement — are not evidence against the Kingdom but the very pattern by which the Kingdom advances. This theme calls Christians to faithful, patient, unhurried work in God's Kingdom even when visible results seem absent.",
  },
  {
    title: "Wealth, Poverty, and the Danger of Riches",
    color: "#EC4899",
    content:
      "A disproportionate number of Jesus' parables engage the dangers of wealth with a directness that makes comfortable Western Christians squirm. The Rich Fool stores up earthly treasure and dies unexpectedly. The Rich Man feasts while Lazarus starves at his gate and ends in torment. The Great Banquet guests are too busy with real estate and commercial transactions to attend a feast. The Talents are entrusted to be invested, not buried. The Pearl Merchant and the Treasure-Finder sell everything for what truly matters. Jesus does not condemn wealth as such — he condemns the attachment to wealth that blinds us to God and to our neighbors. The parables are one of Scripture's most sustained examinations of how money shapes the soul.",
  },
];

const JOURNAL_PROMPTS = [
  "Which parable most challenges your current way of living, and what specific change is it asking for?",
  "What 'soil' do you think you are right now — hardened, shallow, thorny, or good — and what would help you become better soil?",
  "What does it mean for you to be a neighbor like the Good Samaritan in your specific context?",
  "How has God shown you grace like the running father in the Prodigal Son story?",
];

const TAB_LABELS: Record<ParablesTab, string> = {
  overview: "Overview",
  kingdom: "Kingdom Parables",
  grace: "Grace & Forgiveness",
  discipleship: "Discipleship",
  judgment: "Judgment",
  prayer: "Prayer",
  themes: "Themes",
  journal: "My Journal",
  videos: "Videos",
};

const ALL_TABS: ParablesTab[] = [
  "overview",
  "kingdom",
  "grace",
  "discipleship",
  "judgment",
  "prayer",
  "themes",
  "journal",
  "videos",
];

const STATS = [
  { value: "40+", label: "recorded parables of Jesus" },
  { value: "1/3", label: "of Jesus' teaching in parables" },
  { value: "3", label: "primary purposes (reveal, conceal, fulfill)" },
  { value: "All 4", label: "Gospels contain parables" },
];

const ALL_PARABLES_QUICK_REF = [
  { title: "Sower", ref: "Matt 13:3", category: "Kingdom" },
  { title: "Wheat and Tares", ref: "Matt 13:24", category: "Kingdom" },
  { title: "Mustard Seed", ref: "Matt 13:31", category: "Kingdom" },
  { title: "Leaven", ref: "Matt 13:33", category: "Kingdom" },
  { title: "Hidden Treasure", ref: "Matt 13:44", category: "Kingdom" },
  { title: "Pearl of Great Price", ref: "Matt 13:45", category: "Kingdom" },
  { title: "The Net", ref: "Matt 13:47", category: "Kingdom" },
  { title: "Lost Sheep", ref: "Matt 18:12", category: "Grace" },
  { title: "Unforgiving Servant", ref: "Matt 18:23", category: "Grace" },
  { title: "Workers in the Vineyard", ref: "Matt 20:1", category: "Grace" },
  { title: "Two Sons", ref: "Matt 21:28", category: "Discipleship" },
  { title: "Wicked Tenants", ref: "Matt 21:33", category: "Judgment" },
  { title: "Wedding Feast", ref: "Matt 22:1", category: "Judgment" },
  { title: "Wise & Foolish Builders", ref: "Matt 7:24", category: "Discipleship" },
  { title: "Good Samaritan", ref: "Luke 10:25", category: "Discipleship" },
  { title: "Friend at Midnight", ref: "Luke 11:5", category: "Prayer" },
  { title: "Rich Fool", ref: "Luke 12:16", category: "Discipleship" },
  { title: "Tower Builder", ref: "Luke 14:28", category: "Discipleship" },
  { title: "Great Banquet", ref: "Luke 14:15", category: "Judgment" },
  { title: "Lost Coin", ref: "Luke 15:8", category: "Grace" },
  { title: "Prodigal Son", ref: "Luke 15:11", category: "Grace" },
  { title: "Unjust Steward", ref: "Luke 16:1", category: "Discipleship" },
  { title: "Rich Man and Lazarus", ref: "Luke 16:19", category: "Judgment" },
  { title: "Persistent Widow", ref: "Luke 18:1", category: "Prayer" },
  { title: "Pharisee and Tax Collector", ref: "Luke 18:9", category: "Grace" },
  { title: "Ten Minas", ref: "Luke 19:12", category: "Discipleship" },
  { title: "Two Debtors", ref: "Luke 7:41", category: "Grace" },
  { title: "Ten Virgins", ref: "Matt 25:1", category: "Judgment" },
  { title: "Talents", ref: "Matt 25:14", category: "Discipleship" },
  { title: "Sheep and Goats", ref: "Matt 25:31", category: "Judgment" },
  { title: "Vine and Branches", ref: "John 15:1", category: "Discipleship" },
  { title: "Good Shepherd", ref: "John 10:1", category: "Grace" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Kingdom: ACCENT,
  Grace: "#10B981",
  Discipleship: "#3B82F6",
  Judgment: "#EF4444",
  Prayer: "#8B5CF6",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ParablesDeepDivePage() {
  const [tab, setTab] = usePersistedState<ParablesTab>(
    "vine_parables_tab",
    "overview"
  );

  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const [journalEntries, setJournalEntries] = useState<JEntry[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem("vine_parables_journal") ?? "[]"
      ) as JEntry[];
    } catch {
      return [];
    }
  });
  const [journalForm, setJournalForm] = useState({
    verse: "",
    reflection: "",
    prayer: "",
  });
  const [journalSaved, setJournalSaved] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(
        "vine_parables_journal",
        JSON.stringify(journalEntries)
      );
    } catch {}
  }, [journalEntries]);

  const saveJournalEntry = useCallback(() => {
    if (!journalForm.reflection.trim()) return;
    setJournalEntries((prev) => [
      {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(),
        ...journalForm,
      },
      ...prev,
    ]);
    setJournalForm({ verse: "", reflection: "", prayer: "" });
    setJournalSaved(true);
    setTimeout(() => setJournalSaved(false), 2000);
  }, [journalForm]);

  const deleteJournalEntry = useCallback((id: string) => {
    setJournalEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const filteredQuickRef =
    categoryFilter === "All"
      ? ALL_PARABLES_QUICK_REF
      : ALL_PARABLES_QUICK_REF.filter((p) => p.category === categoryFilter);

  // ─── Parable card renderer ─────────────────────────────────────────────────
  function ParableCard({ parable, index }: { parable: Parable; index: number }) {
    const key = `parable-${parable.title}`;
    const isOpen = openAccordion === key;
    return (
      <div
        style={{
          background: CARD,
          border: `1px solid ${isOpen ? ACCENT : BORDER}`,
          borderRadius: 14,
          overflow: "hidden",
          transition: "border-color 0.15s",
          marginBottom: 12,
        }}
      >
        <button
          type="button"
          onClick={() => setOpenAccordion(isOpen ? null : key)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "20px 24px",
            background: "transparent",
            border: "none",
            color: TEXT,
            cursor: "pointer",
            textAlign: "left",
            gap: 16,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 900,
                  color: ACCENT,
                  letterSpacing: "0.05em",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: TEXT,
                  margin: 0,
                }}
              >
                {parable.title}
              </h3>
            </div>
            <div
              style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: MUTED,
                  fontStyle: "italic",
                }}
              >
                {parable.reference}
              </span>
              {parable.gospels.map((g) => (
                <span
                  key={g}
                  style={{
                    fontSize: 10,
                    background: GREEN + "22",
                    color: GREEN,
                    border: `1px solid ${GREEN}44`,
                    borderRadius: 10,
                    padding: "2px 8px",
                    fontWeight: 700,
                  }}
                >
                  {g}
                </span>
              ))}
              <span
                style={{
                  fontSize: 10,
                  background: ACCENT + "22",
                  color: ACCENT,
                  border: `1px solid ${ACCENT}44`,
                  borderRadius: 10,
                  padding: "2px 8px",
                  fontWeight: 700,
                }}
              >
                {parable.theme}
              </span>
            </div>
          </div>
          <span
            style={{
              color: ACCENT,
              fontSize: 20,
              fontWeight: 900,
              lineHeight: 1,
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>
        {isOpen && (
          <div
            style={{
              padding: "0 24px 24px",
              borderTop: `1px solid ${BORDER}`,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 16,
                marginTop: 20,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: MUTED,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 8,
                  }}
                >
                  The Parable
                </div>
                <p
                  style={{
                    color: TEXT,
                    fontSize: 14,
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {parable.summary}
                </p>
              </div>
              <div
                style={{
                  background: BG,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: GREEN,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 8,
                  }}
                >
                  Main Lesson
                </div>
                <p
                  style={{
                    color: TEXT,
                    fontSize: 14,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {parable.mainLesson}
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    background: ACCENT + "11",
                    border: `1px solid ${ACCENT}33`,
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: ACCENT,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 6,
                    }}
                  >
                    Key Verse
                  </div>
                  <div style={{ fontSize: 14, color: TEXT, fontWeight: 700 }}>
                    {parable.keyVerse}
                  </div>
                </div>
                <div
                  style={{
                    background: GREEN + "11",
                    border: `1px solid ${GREEN}33`,
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: GREEN,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 6,
                    }}
                  >
                    Reflection
                  </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: MUTED,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {parable.reflectionQuestion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "var(--header-height, 80px)" }}>
        <div
          style={{
            background: BG,
            minHeight: "100vh",
            color: TEXT,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <main id="main-content">
            <div
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "40px 20px 80px",
              }}
            >
              {/* ── Hero ─────────────────────────────────────────── */}
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <div
                  style={{
                    display: "inline-block",
                    background: ACCENT + "18",
                    border: `1px solid ${ACCENT}44`,
                    borderRadius: 20,
                    padding: "5px 16px",
                    fontSize: 12,
                    fontWeight: 700,
                    color: ACCENT,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  Parables of Jesus — Deep Dive
                </div>
                <h1
                  style={{
                    fontSize: "clamp(28px, 5vw, 42px)",
                    fontWeight: 900,
                    color: TEXT,
                    marginBottom: 14,
                    lineHeight: 1.15,
                  }}
                >
                  The Parables of Jesus
                </h1>
                <p
                  style={{
                    color: MUTED,
                    fontSize: 16,
                    maxWidth: 680,
                    margin: "0 auto",
                    lineHeight: 1.75,
                  }}
                >
                  Earthly stories with heavenly meaning — the parables were
                  Jesus&apos; primary teaching method, used to reveal the Kingdom
                  to those with ears to hear and to challenge every comfortable
                  religious assumption of his day.
                </p>
              </div>

              {/* ── Stats ────────────────────────────────────────── */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 12,
                  marginBottom: 36,
                }}
              >
                {STATS.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: "18px 16px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 5,
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Tab Nav ──────────────────────────────────────── */}
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 32,
                  background: CARD,
                  borderRadius: 10,
                  padding: 4,
                  flexWrap: "wrap",
                }}
              >
                {ALL_TABS.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 8,
                      border: "none",
                      background: tab === t ? ACCENT : "transparent",
                      color: tab === t ? "#07070F" : MUTED,
                      fontWeight: 700,
                      fontSize: 12,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {TAB_LABELS[t]}
                  </button>
                ))}
              </div>

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: OVERVIEW */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "overview" && (
                <div>
                  {/* What Are Parables */}
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "28px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 14,
                      }}
                    >
                      What Is a Parable?
                    </h2>
                    <p
                      style={{
                        color: TEXT,
                        fontSize: 15,
                        lineHeight: 1.8,
                        marginBottom: 16,
                      }}
                    >
                      The word <em>parable</em> comes from the Greek{" "}
                      <em>parabolē</em> — literally &ldquo;to throw alongside.&rdquo; A parable
                      places a familiar earthly story alongside a heavenly reality
                      so that the comparison illuminates something otherwise
                      invisible. Jesus&apos; parables are not merely illustrations
                      or moral lessons; they are theologically loaded narratives that
                      demand response, disturb comfortable assumptions, and reveal
                      the nature of God&apos;s Kingdom with stunning economy and
                      precision.
                    </p>
                    <p
                      style={{
                        color: TEXT,
                        fontSize: 15,
                        lineHeight: 1.8,
                        marginBottom: 16,
                      }}
                    >
                      Jesus told approximately 40 parables — they constitute
                      roughly one third of his entire recorded teaching in the
                      Synoptic Gospels. Unlike propositional teaching, parables
                      engage the imagination before they engage the intellect.
                      They create a world, invite the listener in, and then spring
                      a reversal or surprise that forces moral and spiritual
                      reckoning. C.H. Dodd&apos;s classic definition captures it
                      well: &ldquo;A parable is a metaphor or simile drawn from nature
                      or common life, arresting the hearer by its vividness or
                      strangeness, and leaving the mind in sufficient doubt about
                      its precise application to tease it into active thought.&rdquo;
                    </p>
                    <blockquote
                      style={{
                        borderLeft: `3px solid ${ACCENT}`,
                        paddingLeft: 20,
                        margin: "20px 0",
                        color: MUTED,
                        fontStyle: "italic",
                        fontSize: 15,
                        lineHeight: 1.7,
                      }}
                    >
                      &ldquo;Earthly stories with heavenly meaning&rdquo; — the simplest
                      summary of what a parable does. The genius is that the
                      earthly story must be true to real life (planting, baking,
                      shepherding, banking) before it can carry the weight of
                      transcendent truth.
                    </blockquote>
                  </div>

                  {/* Why Did Jesus Use Parables */}
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "28px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 14,
                      }}
                    >
                      Why Did Jesus Speak in Parables?
                    </h2>
                    <p
                      style={{
                        color: TEXT,
                        fontSize: 15,
                        lineHeight: 1.8,
                        marginBottom: 16,
                      }}
                    >
                      When the disciples asked Jesus directly why he spoke in
                      parables (Matthew 13:10-17), his answer is startling: he
                      gives three interconnected reasons that have puzzled
                      theologians for centuries.
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 14,
                        marginBottom: 20,
                      }}
                    >
                      {[
                        {
                          num: "01",
                          title: "To Reveal Truth to Seekers",
                          body: "To those given 'ears to hear' and hearts genuinely open to the Kingdom, parables illuminate and deepen understanding. The disciples are told, 'To you it has been given to know the secrets of the kingdom of heaven' (Matt 13:11). Parables reward the engaged, curious heart that leans in and asks, 'What did he mean by that?'",
                        },
                        {
                          num: "02",
                          title: "To Conceal from Hardened Hearts",
                          body: "For those whose hearts have become callous — who have heard and refused, seen and disbelieved — parables actually obscure. Jesus quotes Isaiah 6:9-10: 'Seeing they do not see, and hearing they do not hear, nor do they understand.' This is not cruelty but judgment: those who love darkness more than light receive more darkness. The parable as a veil is also the parable as a mercy — God does not force revelation on those committed to resistance.",
                        },
                        {
                          num: "03",
                          title: "To Fulfill Prophecy",
                          body: "Matthew quotes Psalm 78:2 ('I will open my mouth in parables; I will utter what has been hidden since the foundation of the world') as the prophetic rationale for Jesus' parabolic teaching. Asaph's psalm anticipated a teacher who would unlock ancient mysteries. Jesus presents himself as the fulfillment of that prophecy — the final and definitive interpreter of all creation's hidden meaning.",
                        },
                      ].map((item) => (
                        <div
                          key={item.num}
                          style={{
                            background: BG,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 12,
                            padding: "18px 16px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 22,
                              fontWeight: 900,
                              color: ACCENT,
                              marginBottom: 8,
                            }}
                          >
                            {item.num}
                          </div>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 800,
                              color: TEXT,
                              marginBottom: 8,
                            }}
                          >
                            {item.title}
                          </div>
                          <p
                            style={{
                              fontSize: 13,
                              color: MUTED,
                              lineHeight: 1.7,
                              margin: 0,
                            }}
                          >
                            {item.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How to Interpret */}
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "28px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 14,
                      }}
                    >
                      How to Interpret a Parable
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.75,
                        marginBottom: 20,
                      }}
                    >
                      The history of parable interpretation has been marked by
                      allegorizing excess (finding hidden spiritual meaning in
                      every detail) and reductionism (flattening them to simple
                      moral stories). Four interpretive principles help navigate
                      between these errors:
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      {[
                        {
                          title: "Identify the Main Point",
                          body: "Most parables make one central point. Seek the central theological claim before exploring details. The Good Samaritan is primarily about the identity of the neighbor and the nature of love — not about allegorizing the inn as the church and the innkeeper as the apostle Paul (as Origen did).",
                        },
                        {
                          title: "Read in Original Context",
                          body: "Who is Jesus talking to, and why? The Prodigal Son is told to Pharisees grumbling about Jesus eating with sinners — the elder brother IS the Pharisee. The original rhetorical context is often the master key to interpretation.",
                        },
                        {
                          title: "Respect the Original Audience",
                          body: "First-century Palestinian hearers would have understood the cultural weight of a Samaritan as the despised 'other', the scandal of a son asking for his inheritance early, the honour-shame dynamics of a father running. Recovering that original force helps us re-hear the parable's surprise.",
                        },
                        {
                          title: "Sit With the Surprise",
                          body: "Every parable has a twist — an unexpected reversal, a counter-intuitive punchline. The surprise IS the theological point. Don't resolve the tension too quickly. The parable's function is to disorient before it reorients.",
                        },
                      ].map((item, i) => {
                        const isOpen = openAccordion === `interp-${i}`;
                        return (
                          <div
                            key={i}
                            style={{
                              background: BG,
                              border: `1px solid ${isOpen ? ACCENT : BORDER}`,
                              borderRadius: 10,
                              overflow: "hidden",
                              transition: "border-color 0.15s",
                            }}
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setOpenAccordion(
                                  isOpen ? null : `interp-${i}`
                                )
                              }
                              style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "16px 20px",
                                background: "transparent",
                                border: "none",
                                color: TEXT,
                                fontWeight: 700,
                                fontSize: 15,
                                cursor: "pointer",
                                textAlign: "left",
                              }}
                            >
                              <span>
                                <span
                                  style={{
                                    color: ACCENT,
                                    marginRight: 10,
                                    fontSize: 12,
                                    fontWeight: 900,
                                  }}
                                >
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                {item.title}
                              </span>
                              <span
                                style={{
                                  color: ACCENT,
                                  fontSize: 18,
                                  fontWeight: 900,
                                  flexShrink: 0,
                                  marginLeft: 16,
                                }}
                              >
                                {isOpen ? "−" : "+"}
                              </span>
                            </button>
                            {isOpen && (
                              <div
                                style={{
                                  padding: "0 20px 18px",
                                  borderTop: `1px solid ${BORDER}`,
                                }}
                              >
                                <p
                                  style={{
                                    color: MUTED,
                                    fontSize: 14,
                                    lineHeight: 1.8,
                                    margin: "14px 0 0",
                                  }}
                                >
                                  {item.body}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Reference Grid */}
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "28px 28px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 6,
                      }}
                    >
                      All Parables: Quick Reference
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        marginBottom: 20,
                      }}
                    >
                      Filter by category to explore the full scope of Jesus&apos;
                      parabolic teaching.
                    </p>
                    {/* Category filter */}
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        marginBottom: 20,
                      }}
                    >
                      {["All", "Kingdom", "Grace", "Discipleship", "Judgment", "Prayer"].map(
                        (cat) => {
                          const isActive = categoryFilter === cat;
                          const color =
                            cat === "All"
                              ? ACCENT
                              : CATEGORY_COLORS[cat] ?? ACCENT;
                          return (
                            <button
                              type="button"
                              key={cat}
                              onClick={() => setCategoryFilter(cat)}
                              style={{
                                padding: "6px 14px",
                                borderRadius: 20,
                                border: `1px solid ${isActive ? color : BORDER}`,
                                background: isActive ? color + "22" : "transparent",
                                color: isActive ? color : MUTED,
                                fontWeight: 700,
                                fontSize: 12,
                                cursor: "pointer",
                                transition: "all 0.15s",
                              }}
                            >
                              {cat}
                            </button>
                          );
                        }
                      )}
                    </div>
                    {/* Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(200px, 1fr))",
                        gap: 10,
                      }}
                    >
                      {filteredQuickRef.map((p) => {
                        const catColor = CATEGORY_COLORS[p.category] ?? ACCENT;
                        return (
                          <div
                            key={p.title}
                            style={{
                              background: BG,
                              border: `1px solid ${BORDER}`,
                              borderRadius: 10,
                              padding: "12px 14px",
                              display: "flex",
                              flexDirection: "column",
                              gap: 6,
                            }}
                          >
                            <div
                              style={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: TEXT,
                              }}
                            >
                              {p.title}
                            </div>
                            <div
                              style={{
                                fontSize: 12,
                                color: MUTED,
                                fontStyle: "italic",
                              }}
                            >
                              {p.ref}
                            </div>
                            <span
                              style={{
                                fontSize: 10,
                                background: catColor + "22",
                                color: catColor,
                                border: `1px solid ${catColor}44`,
                                borderRadius: 10,
                                padding: "2px 8px",
                                fontWeight: 700,
                                alignSelf: "flex-start",
                              }}
                            >
                              {p.category}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: KINGDOM PARABLES */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "kingdom" && (
                <div>
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "24px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 10,
                      }}
                    >
                      Kingdom Parables
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      In Matthew 13, Jesus delivers seven back-to-back parables
                      about the Kingdom of Heaven — what it is, how it grows,
                      what it costs, and how it ends. Together they constitute
                      the most sustained teaching on the Kingdom anywhere in
                      the Gospels. The Prodigal Son from Luke 15 rounds out this
                      category as the supreme portrait of the Father&apos;s heart
                      at the centre of the Kingdom.
                    </p>
                  </div>
                  {KINGDOM_PARABLES.map((p, i) => (
                    <ParableCard key={p.title} parable={p} index={i} />
                  ))}
                </div>
              )}

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: GRACE & FORGIVENESS */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "grace" && (
                <div>
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "24px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 10,
                      }}
                    >
                      Grace and Forgiveness Parables
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      These parables are Jesus&apos; most concentrated teaching on
                      the nature of God&apos;s love and the shape of grace. Luke 15
                      alone — the lost sheep, the lost coin, and the prodigal son
                      — has been called the &ldquo;Gospel within the Gospels.&rdquo; Each
                      story portrays God not as a passive responder to human
                      repentance but as an active seeker of the lost, a lavish
                      celebrant at their return, and a patient father who meets
                      both the rebellious and the self-righteous exactly where
                      they are.
                    </p>
                  </div>
                  {GRACE_PARABLES.map((p, i) => (
                    <ParableCard key={p.title} parable={p} index={i} />
                  ))}
                </div>
              )}

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: DISCIPLESHIP */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "discipleship" && (
                <div>
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "24px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 10,
                      }}
                    >
                      Discipleship Parables
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      Following Jesus involves concrete choices: love of neighbor
                      at personal cost, radical reorientation of wealth, counted
                      commitment, faithful stewardship, and total dependence on
                      Christ himself. These parables do not describe the
                      condition of salvation but the shape of authentic, embodied
                      discipleship — what it actually looks like in a life to
                      take up the cross and follow. The Vine and Branches (John
                      15) uniquely shows that even this demanding obedience
                      flows not from willpower but from abiding union with Christ.
                    </p>
                  </div>
                  {DISCIPLESHIP_PARABLES.map((p, i) => (
                    <ParableCard key={p.title} parable={p} index={i} />
                  ))}
                </div>
              )}

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: JUDGMENT */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "judgment" && (
                <div>
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "24px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 10,
                      }}
                    >
                      Judgment and Last Things
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      The Olivet Discourse (Matthew 24-25) contains the most
                      concentrated cluster of eschatological parables in the
                      Gospels. Jesus uses them to address two fundamental
                      realities: the certainty of his return and the accounting
                      it will bring. These are not intended to frighten but to
                      awaken — to produce the kind of urgent, faithful,
                      neighbor-loving, Kingdom-oriented life that is ready for
                      the King&apos;s arrival at any moment.
                    </p>
                  </div>
                  {JUDGMENT_PARABLES.map((p, i) => (
                    <ParableCard key={p.title} parable={p} index={i} />
                  ))}
                </div>
              )}

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: PRAYER */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "prayer" && (
                <div>
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "24px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 10,
                      }}
                    >
                      Parables on Prayer
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      A striking feature of Luke&apos;s Gospel especially is the
                      number of parables devoted explicitly to prayer. Jesus uses
                      everyday scenes — a neighbour hammering at midnight, a widow
                      repeatedly confronting a corrupt judge, children asking a
                      parent for bread — to dismantle a distorted view of God as
                      reluctant or indifferent, and to call his disciples to a
                      persistent, bold, humble, and trust-fuelled prayer life.
                      Together these parables constitute a complete theology of
                      prayer anchored in the character of the Father.
                    </p>
                  </div>
                  {PRAYER_PARABLES.map((p, i) => (
                    <ParableCard key={p.title} parable={p} index={i} />
                  ))}
                </div>
              )}

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: THEMES */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "themes" && (
                <div>
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "24px 28px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        fontSize: 22,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 10,
                      }}
                    >
                      Cross-Cutting Themes in the Parables
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      Reading the parables individually is enriching; reading
                      them together as a corpus reveals a set of interlocking
                      theological themes that form a coherent vision of what
                      Jesus was announcing and what following him demands. These
                      themes traverse all five parable categories and illuminate
                      each other when seen together.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                    }}
                  >
                    {THEMES_DATA.map((theme, i) => {
                      const key = `theme-${i}`;
                      const isOpen = openAccordion === key;
                      return (
                        <div
                          key={i}
                          style={{
                            background: CARD,
                            border: `1px solid ${isOpen ? theme.color : BORDER}`,
                            borderRadius: 14,
                            overflow: "hidden",
                            transition: "border-color 0.15s",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenAccordion(isOpen ? null : key)
                            }
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "20px 24px",
                              background: "transparent",
                              border: "none",
                              color: TEXT,
                              fontWeight: 800,
                              fontSize: 16,
                              cursor: "pointer",
                              textAlign: "left",
                            }}
                          >
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                              }}
                            >
                              <span
                                style={{
                                  width: 10,
                                  height: 10,
                                  borderRadius: "50%",
                                  background: theme.color,
                                  display: "inline-block",
                                  flexShrink: 0,
                                }}
                              />
                              {theme.title}
                            </span>
                            <span
                              style={{
                                color: theme.color,
                                fontSize: 20,
                                fontWeight: 900,
                                lineHeight: 1,
                                flexShrink: 0,
                                marginLeft: 16,
                              }}
                            >
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div
                              style={{
                                padding: "0 24px 24px",
                                borderTop: `1px solid ${BORDER}`,
                              }}
                            >
                              <p
                                style={{
                                  color: TEXT,
                                  fontSize: 14,
                                  lineHeight: 1.85,
                                  margin: "18px 0 0",
                                }}
                              >
                                {theme.content}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Synthesis box */}
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${ACCENT}44`,
                      borderRadius: 14,
                      padding: "24px 28px",
                      marginTop: 24,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 900,
                        color: ACCENT,
                        marginBottom: 12,
                      }}
                    >
                      The Parables as a Whole: A Unified Vision
                    </h3>
                    <p
                      style={{
                        color: TEXT,
                        fontSize: 14,
                        lineHeight: 1.85,
                        marginBottom: 14,
                      }}
                    >
                      When read together, the parables of Jesus present a
                      breathtakingly coherent vision: a God who is lavish with
                      grace, relentless in pursuit of the lost, radically
                      opposed to the proud and self-sufficient, and bringing a
                      Kingdom that is simultaneously gift and demand — free and
                      yet costly, present and yet coming, small now and
                      enormous later.
                    </p>
                    <p
                      style={{
                        color: TEXT,
                        fontSize: 14,
                        lineHeight: 1.85,
                        marginBottom: 14,
                      }}
                    >
                      The parables also form the most sustained critique of
                      religion-as-merit-accumulation in human history. Every
                      time a character who ought to be approved (the elder
                      brother, the Pharisee, the invited guests, the
                      religious leaders tending God&apos;s vineyard) is shown to
                      be furthest from the Kingdom, and every time the
                      outsider, the failure, the desperate one is shown to be
                      closest — the same theological point is being hammered
                      home: the Kingdom belongs to those who receive it as a
                      gift, not to those who earn it as a wage.
                    </p>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.85,
                        margin: 0,
                      }}
                    >
                      This is why the parables remain inexhaustibly alive.
                      They are not instructions for achieving a religious life;
                      they are windows into the life of God himself — a God
                      who runs down the road, who lights candles in dark rooms,
                      who leaves safe flocks on hillsides, who insists on
                      parties for the ruined, who is violently opposed to the
                      complacency of the comfortable. The parables do not let
                      us remain as we are.
                    </p>
                  </div>
                </div>
              )}

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: JOURNAL */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "journal" && (
                <div>
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: "20px 24px",
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        color: ACCENT,
                        fontWeight: 800,
                        fontSize: 22,
                        marginBottom: 8,
                      }}
                    >
                      My Parables Journal
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.7,
                        margin: "0 0 16px",
                      }}
                    >
                      Use these prompts to engage personally with what the
                      parables are saying to you.
                    </p>
                    {/* Prompts */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 10,
                      }}
                    >
                      {JOURNAL_PROMPTS.map((prompt, i) => (
                        <div
                          key={i}
                          style={{
                            background: BG,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 10,
                            padding: "12px 14px",
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 900,
                              color: ACCENT,
                              flexShrink: 0,
                              marginTop: 1,
                            }}
                          >
                            {i + 1}.
                          </span>
                          <span
                            style={{
                              fontSize: 13,
                              color: MUTED,
                              lineHeight: 1.65,
                            }}
                          >
                            {prompt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Journal form */}
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      padding: 24,
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                      }}
                    >
                      <div>
                        <label
                          style={{
                            color: MUTED,
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          Parable / Verse
                        </label>
                        <textarea
                          rows={2}
                          value={journalForm.verse}
                          onChange={(e) =>
                            setJournalForm((f) => ({
                              ...f,
                              verse: e.target.value,
                            }))
                          }
                          placeholder="e.g. The Prodigal Son — Luke 15:20 'While he was still a great way off, his father saw him...'"
                          style={{
                            width: "100%",
                            background: BG,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            color: TEXT,
                            fontSize: 14,
                            padding: "10px 12px",
                            resize: "vertical",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            color: MUTED,
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          My Reflection
                        </label>
                        <textarea
                          rows={4}
                          value={journalForm.reflection}
                          onChange={(e) =>
                            setJournalForm((f) => ({
                              ...f,
                              reflection: e.target.value,
                            }))
                          }
                          placeholder="What is this parable saying to you personally? What is it challenging, comforting, or calling you toward?"
                          style={{
                            width: "100%",
                            background: BG,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            color: TEXT,
                            fontSize: 14,
                            padding: "10px 12px",
                            resize: "vertical",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            color: MUTED,
                            fontSize: 11,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          My Response / Prayer
                        </label>
                        <textarea
                          rows={3}
                          value={journalForm.prayer}
                          onChange={(e) =>
                            setJournalForm((f) => ({
                              ...f,
                              prayer: e.target.value,
                            }))
                          }
                          placeholder="Write a short prayer or commitment in response to what you've heard from this parable..."
                          style={{
                            width: "100%",
                            background: BG,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 8,
                            color: TEXT,
                            fontSize: 14,
                            padding: "10px 12px",
                            resize: "vertical",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={saveJournalEntry}
                        style={{
                          alignSelf: "flex-start",
                          background: ACCENT,
                          color: "#07070F",
                          border: "none",
                          borderRadius: 8,
                          padding: "10px 24px",
                          fontWeight: 700,
                          fontSize: 14,
                          cursor: "pointer",
                        }}
                      >
                        {journalSaved ? "Saved ✓" : "Save Entry"}
                      </button>
                    </div>
                  </div>

                  {/* Saved entries */}
                  {journalEntries.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 16,
                          fontWeight: 800,
                          color: TEXT,
                          margin: "0 0 4px",
                        }}
                      >
                        Previous Entries ({journalEntries.length})
                      </h3>
                      {journalEntries.map((entry) => (
                        <div
                          key={entry.id}
                          style={{
                            background: CARD,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 14,
                            padding: 20,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 12,
                            }}
                          >
                            <span style={{ color: MUTED, fontSize: 12 }}>
                              {entry.date}
                            </span>
                            <button
                              type="button"
                              onClick={() => deleteJournalEntry(entry.id)}
                              style={{
                                background: "none",
                                border: "none",
                                color: MUTED,
                                cursor: "pointer",
                                fontSize: 13,
                              }}
                            >
                              ✕
                            </button>
                          </div>
                          {entry.verse && (
                            <div style={{ marginBottom: 8 }}>
                              <span
                                style={{
                                  color: ACCENT,
                                  fontSize: 11,
                                  fontWeight: 700,
                                  textTransform: "uppercase",
                                  letterSpacing: 1,
                                }}
                              >
                                Parable / Verse
                              </span>
                              <p
                                style={{
                                  color: TEXT,
                                  fontSize: 14,
                                  margin: "4px 0 0",
                                  lineHeight: 1.65,
                                }}
                              >
                                {entry.verse}
                              </p>
                            </div>
                          )}
                          {entry.reflection && (
                            <div style={{ marginBottom: 8 }}>
                              <span
                                style={{
                                  color: GREEN,
                                  fontSize: 11,
                                  fontWeight: 700,
                                  textTransform: "uppercase",
                                  letterSpacing: 1,
                                }}
                              >
                                Reflection
                              </span>
                              <p
                                style={{
                                  color: TEXT,
                                  fontSize: 14,
                                  margin: "4px 0 0",
                                  lineHeight: 1.65,
                                }}
                              >
                                {entry.reflection}
                              </p>
                            </div>
                          )}
                          {entry.prayer && (
                            <div>
                              <span
                                style={{
                                  color: MUTED,
                                  fontSize: 11,
                                  fontWeight: 700,
                                  textTransform: "uppercase",
                                  letterSpacing: 1,
                                }}
                              >
                                Prayer / Response
                              </span>
                              <p
                                style={{
                                  color: TEXT,
                                  fontSize: 14,
                                  margin: "4px 0 0",
                                  lineHeight: 1.65,
                                }}
                              >
                                {entry.prayer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ─────────────────────────────────────────────────── */}
              {/* TAB: VIDEOS */}
              {/* ─────────────────────────────────────────────────── */}
              {tab === "videos" && (
                <div>
                  <div
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      padding: 24,
                      marginBottom: 24,
                    }}
                  >
                    <h2
                      style={{
                        color: ACCENT,
                        fontWeight: 800,
                        fontSize: 22,
                        marginBottom: 8,
                      }}
                    >
                      Teaching Videos
                    </h2>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        marginBottom: 24,
                        lineHeight: 1.7,
                      }}
                    >
                      Curated teachings on the parables from trusted biblical
                      scholars and communicators.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 24,
                      }}
                    >
                      {[
                        {
                          videoId: "bxzuh5Xx5G4",
                          title: "The Parables of Jesus — Overview",
                          channel: "BibleProject",
                          description:
                            "BibleProject unpacks what parables are, why Jesus used them, and how these earthly stories carry the weight of the Kingdom of God. An essential introduction for anyone wanting to read the parables with fresh eyes — covering the cultural world of first-century Palestine, the nature of the Kingdom, and the surprising reversals that characterize Jesus' teaching.",
                        },
                        {
                          videoId: "YNd-PbVhnvA",
                          title: "Why Jesus Taught in Parables",
                          channel: "Teaching",
                          description:
                            "Why did Jesus wrap his most important teaching in stories? This teaching works through Matthew 13:10–17 — the disciples' own question — and explores how parables simultaneously reveal truth to seeking hearts and conceal it from hardened ones, fulfilling Isaiah's prophecy and inviting every listener to lean in.",
                        },
                        {
                          videoId: "XtwIT8JjddM",
                          title: "The Kingdom Parables of Matthew 13",
                          channel: "Sermon Series",
                          description:
                            "An in-depth teaching on the seven Kingdom parables of Matthew 13 — the Sower, the Wheat and Tares, the Mustard Seed, the Leaven, the Hidden Treasure, the Pearl, and the Net — connecting them to the already/not-yet arc of Jesus' Kingdom announcement and what each one demands of the hearer.",
                        },
                        {
                          videoId: "KwX1f2gYKZ4",
                          title: "The Prodigal Son Explained",
                          channel: "Bible Study",
                          description:
                            "A celebrated exposition of Luke 15. The parable actually has two lost sons — and the elder brother's lostness is in many ways the more dangerous kind. This study unpacks the scandalous grace of the running father, the cultural shock of his behavior, and what the story reveals about the heart of God for both kinds of sinners.",
                        },
                      ].map((v) => (
                        <div
                          key={v.videoId}
                          style={{
                            background: BG,
                            border: `1px solid ${BORDER}`,
                            borderRadius: 12,
                            overflow: "hidden",
                          }}
                        >
                          <VideoEmbed videoId={v.videoId} title={v.title} />
                          <div style={{ padding: "16px 18px" }}>
                            <h4
                              style={{
                                color: ACCENT,
                                fontWeight: 700,
                                fontSize: 16,
                                marginBottom: 4,
                              }}
                            >
                              {v.title}
                            </h4>
                            <p
                              style={{
                                color: GREEN,
                                fontSize: 13,
                                fontWeight: 600,
                                marginBottom: 8,
                              }}
                            >
                              {v.channel}
                            </p>
                            <p
                              style={{
                                color: MUTED,
                                fontSize: 13,
                                lineHeight: 1.7,
                                margin: 0,
                              }}
                            >
                              {v.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
