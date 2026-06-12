"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const TABS = [
  { id: "god-concern", label: "God&rsquo;s Concern" },
  { id: "jesus-poor", label: "Jesus &amp; the Poor" },
  { id: "early-church", label: "Early Church" },
  { id: "liberation", label: "Liberation Theology" },
  { id: "prosperity", label: "Prosperity Gospel" },
  { id: "videos", label: "Videos" },
];

interface TabDef {
  id: string;
  label: string;
}

interface Section {
  title: string;
  body: string;
}

const godConcernSections: Section[] = [
  {
    title: "Gleaning Laws: Leviticus 19:9-10 and the Structural Protection of the Poor",
    body: "The Mosaic law is not merely a moral code for individuals; it is an economic constitution for a covenant community. At its heart are structural provisions for the poor built directly into the agricultural system. Leviticus 19:9-10 forbids landowners from harvesting to the edges of their fields or gathering what falls to the ground: these leavings belong to the poor and the sojourner. The poor are not supplicants at the mercy of generous landowners; they have a legal right to glean. The story of Ruth is not primarily a romance; it is a story of a foreigner exercising her legal right to subsistence under the law of God, with a wealthy landowner instructed to honor it. This is the OT&rsquo;s preferential option for the poor encoded in property law: the landless have a prior claim on the surplus of the landed.",
  },
  {
    title: "The Sabbath Year: Debt Release in Deuteronomy 15",
    body: "Every seventh year, Deuteronomy 15 mandates the cancellation of debts among Israelites. The rationale is theological: the land belongs to God, and its produce is gift, not entitlement. Deuteronomy 15:4 envisions a community where &ldquo;there need be no poor people among you&rdquo; &mdash; if the law is fully observed. Then 15:11 adds the realist correction: &ldquo;There will always be poor people in the land. Therefore I command you to be openhanded toward your fellow Israelites who are poor and needy.&rdquo; The persistence of poverty is not an excuse for passivity but the ground of perpetual responsibility. The Sabbath year debt release was a structural correction against the natural tendency of inequality to compound over time &mdash; a built-in economic reset.",
  },
  {
    title: "The Jubilee: Leviticus 25 and God&rsquo;s Economic Vision",
    body: "The Jubilee of Leviticus 25 is the most radical economic institution in the Hebrew Bible. Every fifty years, land returned to its ancestral families, hereditary debts were dissolved, and enslaved Israelites were freed. The underlying logic is theological: the land belongs to God (25:23), which means no purchase of land is permanent &mdash; only a lease until the next Jubilee. The Jubilee assumes that economic inequality will always grow &mdash; families will lose land, accumulate debt, sell themselves into servitude &mdash; and it builds into the law a structural correction: the periodic restoration of economic starting points. Scholars debate whether Israel ever actually kept the Jubilee. Jesus&rsquo;s proclamation in Luke 4 suggests that its principles &mdash; liberation, restoration, equity &mdash; are the grammar of the kingdom, even if the specific institution is not binding on the church.",
  },
  {
    title: "The Prophets on Economic Injustice: Amos, Isaiah, Micah",
    body: "The prophets are not primarily predictors of the future; they are covenant prosecutors who bring charges against Israel for violating the law. Their most persistent charge is economic injustice. Amos 5:11-12 indicts those who &ldquo;trample on the poor&rdquo; and &ldquo;levy a straw tax on grain,&rdquo; who &ldquo;deprive the poor of justice in the courts.&rdquo; Isaiah 58:6-7 defines the fast God desires not as religious ritual but as loosing the chains of injustice, feeding the hungry, and sheltering the poor. Micah 6:8 &mdash; &ldquo;What does the Lord require of you? To act justly and to love mercy and to walk humbly with your God&rdquo; &mdash; has become the most quoted summary of prophetic ethics. Economic injustice is not a secondary concern in the prophets; it is among the central reasons God announces judgment.",
  },
  {
    title: "The Psalms: God as Defender of the Poor",
    body: "The Psalter repeatedly presents God as the special defender of the economically vulnerable. Psalm 72:12-14, a royal psalm, describes the ideal king as one who &ldquo;will deliver the needy who cry out, the afflicted who have no one to help. He will take pity on the weak and the needy and save the needy from death.&rdquo; Psalm 146:7-9 attributes to God directly: he &ldquo;upholds the cause of the oppressed and gives food to the hungry. The Lord sets prisoners free... the Lord watches over the foreigner and sustains the fatherless and the widow.&rdquo; This is not incidental poetry; it is a core attribute of the God of Israel that the powerful of every age must reckon with.",
  },
  {
    title: "The Anawim: The Poor Who Trust God",
    body: "The Hebrew word anawim (sing. anav) carries a double meaning: the economically poor and the spiritually humble &mdash; those who, having no resources of their own, have learned to trust God entirely. In the Psalms and prophets, the anawim are the faithful remnant who persevere through poverty and oppression without becoming bitter or grasping. Mary&rsquo;s Magnificat (Luke 1:46-55) &mdash; &ldquo;He has filled the hungry with good things but has sent the rich away empty&rdquo; &mdash; stands in the tradition of the anawim. The poor are not merely an object of God&rsquo;s concern; in the biblical vision they are often the carriers of genuine faith, because they have been forced to discover what the comfortable never need to learn: that God alone is sufficient. Poverty is therefore a theological issue, not merely a social one &mdash; it reveals and tests the deepest commitments of both the poor and the non-poor.",
  },
];

const jesusPoorSections: Section[] = [
  {
    title: "Luke 4:18 &mdash; The Jubilee Manifesto",
    body: "When Jesus stood in the Nazareth synagogue and read Isaiah 61:1-2, he was announcing his mission in the most economically charged language available in the Jewish tradition. &ldquo;The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free, to proclaim the year of the Lord&rsquo;s favor&rdquo; (Luke 4:18-19). The &ldquo;year of the Lord&rsquo;s favor&rdquo; is the Jubilee. Jesus then says: &ldquo;Today this scripture is fulfilled in your hearing&rdquo; (4:21). The Jubilee is not a future hope; it has arrived in him. Any account of the gospel that marginalizes the poor has trimmed the text of Jesus&rsquo;s first public sermon.",
  },
  {
    title: "The Beatitudes: Blessed Are the Poor (Luke 6:20 vs. Matthew 5:3)",
    body: "Luke 6:20 records Jesus saying: &ldquo;Blessed are you who are poor, for yours is the kingdom of God.&rdquo; Matthew 5:3 spiritualizes: &ldquo;Blessed are the poor in spirit.&rdquo; These are not contradictory but complementary: Luke emphasizes actual economic poverty; Matthew expands to the spiritual disposition of dependence that poverty often produces. Luke immediately adds the corresponding woe: &ldquo;But woe to you who are rich, for you have already received your comfort&rdquo; (6:24). Luke&rsquo;s beatitudes do not allow a purely spiritual reading that leaves the material condition of the poor untouched. The kingdom belongs to the poor &mdash; not because poverty is virtuous but because the kingdom is for those who know they need it.",
  },
  {
    title: "Zacchaeus &mdash; Restitution as Sign of Conversion (Luke 19)",
    body: "The story of Zacchaeus (Luke 19:1-10) is a paradigmatic account of what genuine conversion produces in the economic dimension. Zacchaeus is a chief tax collector &mdash; a man who has built wealth through collaboration with Roman occupation and systematic overcharging. When Jesus invites himself to Zacchaeus&rsquo;s house and Zacchaeus responds, the response is immediately economic: &ldquo;Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount&rdquo; (19:8). Jesus&rsquo;s response is not &ldquo;you don&rsquo;t need to do that&rdquo; but &ldquo;Today salvation has come to this house&rdquo; (19:9). Restitution &mdash; the active undoing of economic harm &mdash; is part of what salvation looks like, not an optional expression of gratitude for it.",
  },
  {
    title: "The Rich Young Ruler &mdash; The One Thing Lacking (Luke 18:18-30)",
    body: "The rich young ruler comes to Jesus with the right question: &ldquo;What must I do to inherit eternal life?&rdquo; He has kept the commandments since his youth. But Jesus identifies the one thing he lacks: &ldquo;Sell everything you have and give to the poor, and you will have treasure in heaven. Then come, follow me&rdquo; (18:22). The man leaves sorrowful. Jesus then says: &ldquo;How hard it is for the rich to enter the kingdom of God! Indeed, it is easier for a camel to go through the eye of a needle than for a rich person to enter the kingdom of God&rdquo; (18:24-25). Jesus is not teaching that poverty is a precondition of salvation, but that wealth is uniquely able to function as a rival god &mdash; one that demands loyalty and crowds out the kingdom. The disciples&rsquo; shocked question &ldquo;Who then can be saved?&rdquo; receives the answer: &ldquo;What is impossible with man is possible with God.&rdquo;",
  },
  {
    title: "Lazarus and the Rich Man &mdash; The Great Reversal (Luke 16:19-31)",
    body: "The parable of Lazarus and the rich man (Luke 16:19-31) is among the most economically disturbing passages in the Gospels. The rich man is not identified as wicked in the conventional sense &mdash; he is simply rich, and Lazarus is simply poor, lying at his gate. After death, their positions reverse: Lazarus is in Abraham&rsquo;s bosom; the rich man is in torment. The rich man&rsquo;s sin is not cruelty but indifference &mdash; he &ldquo;lived in luxury every day&rdquo; while Lazarus &ldquo;longed to eat what fell from the rich man&rsquo;s table&rdquo; (16:19-21). When the rich man asks for the reversal to be explained to his brothers, Abraham replies: &ldquo;They have Moses and the Prophets; let them listen to them&rdquo; (16:29). The answer to poverty is not a miracle; it is the law and prophets already commanding economic responsibility.",
  },
  {
    title: "Matthew 25:31-46 &mdash; Whatever You Did for the Least of These",
    body: "In the judgment scene of Matthew 25, Jesus identifies himself with &ldquo;the least of these my brothers and sisters&rdquo; &mdash; the hungry, thirsty, stranger, naked, sick, and imprisoned. Those who served them served him; those who ignored them ignored him. This passage has generated enormous interpretive controversy: Does &ldquo;the least of these my brothers&rdquo; refer to all poor people, or specifically to persecuted Christian missionaries? Even on the narrower reading, the passage establishes an unbreakable connection between the treatment of vulnerable people and the encounter with Christ. On the broader reading, it is among the most radical statements of identification with the poor in the entire Bible: &ldquo;I was hungry and you gave me food&rdquo; (25:35). Either way, the passage makes care for the vulnerable a matter of ultimate theological seriousness.",
  },
  {
    title: "Jesus as Homeless &mdash; The Incarnation in Poverty",
    body: "Jesus&rsquo;s economic location is not incidental background. He was born to a family too poor to afford the full temple sacrifice (Luke 2:24, offering of doves rather than a lamb &mdash; the provision of Lev 12:8 for those who cannot afford a lamb). He was a craftsman, a tradesman in a subsistence economy. During his ministry he had &ldquo;no place to lay his head&rdquo; (Matthew 8:20). His entry to Jerusalem was on a borrowed donkey; his burial was in a borrowed tomb. Paul reflects on this in 2 Corinthians 8:9: &ldquo;Though he was rich, yet for your sake he became poor, so that you through his poverty might become rich.&rdquo; The incarnation is itself an act of downward economic solidarity, and it sets the pattern for Christian engagement with poverty: not giving from a distance, but entering the condition.",
  },
];

const earlyChurchSections: Section[] = [
  {
    title: "Acts 2:44-45 and 4:32-37 &mdash; All Things in Common",
    body: "The economic life of the Jerusalem church is described in Acts 2:44-45: &ldquo;All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need.&rdquo; Acts 4:32 reaffirms: &ldquo;No one claimed that any of their possessions was their own, but they shared everything they had.&rdquo; Barnabas is held up as a model: he sold a field and laid the money at the apostles&rsquo; feet (4:36-37). This was not compelled communism; Acts 5 makes clear that Ananias and Sapphira were judged not for keeping some of their money but for lying about it. The sharing was voluntary, comprehensive, and targeted at need. It stands as a permanent question to the church: if the body of Christ is one, what does it mean to have enormous wealth differentials within that body?",
  },
  {
    title: "Paul&rsquo;s Collection for Jerusalem &mdash; 2 Corinthians 8-9, Romans 15:26",
    body: "Paul&rsquo;s great project in the second half of his ministry was a collection from the Gentile churches for the poor among the saints in Jerusalem. He describes it in 2 Corinthians 8-9 with extraordinary theological depth. The motivation is Christological: &ldquo;Though he was rich, yet for your sake he became poor, so that you through his poverty might become rich&rdquo; (8:9). The principle is equality: &ldquo;Your plenty will supply what they need, so that in turn their plenty will supply what you need. The goal is equality&rdquo; (8:14). The spirit is voluntary: &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver&rdquo; (9:7). The collection created economic solidarity between churches who had never met, binding Gentile and Jewish Christians through shared material goods &mdash; a sign that the dividing wall had truly fallen.",
  },
  {
    title: "James 2:1-17 &mdash; Partiality to the Rich as Violation of the Law",
    body: "The letter of James contains the sharpest economic critique in the New Testament epistles. James 2:1-9 confronts a congregation that seats wealthy visitors in places of honor while ordering the poor to stand or sit on the floor. He names this &ldquo;discrimination&rdquo; and &ldquo;evil thoughts&rdquo; &mdash; a violation of the &ldquo;royal law&rdquo; of neighbor-love (2:8). The irony he highlights: the rich are the ones who exploit believers and drag them into court, yet the congregation fawns over them. James 2:14-17 drives the point home: faith without works is dead, and the specific works he has in mind are economic: &ldquo;If a brother or sister is without clothes and daily food, and one of you says to them, &lsquo;Go in peace; keep warm and well fed,&rsquo; but does nothing about their physical needs, what good is it?&rdquo; Orthodoxy without economic solidarity is a dead faith.",
  },
  {
    title: "James 5:1-6 &mdash; The Rich Oppressors",
    body: "James 5:1-6 is among the most startling passages in the New Testament: &ldquo;Now listen, you rich people, weep and wail because of the misery that is coming on you.&rdquo; The charges are economic: hoarding wealth, failing to pay workers their wages, living in luxury and self-indulgence while the workers who made them rich went without. &ldquo;The wages you failed to pay the workers who mowed your fields are crying out against you. The cries of the harvesters have reached the ears of the Lord Almighty&rdquo; (5:4). The language is prophetic &mdash; Amos and Micah speaking in the voice of a New Testament letter. Wage theft is not a labor dispute; it is a moral crime that rises as a cry to God. James is not cautioning the rich to be more generous; he is pronouncing judgment on economic exploitation as a fundamental violation of covenant love.",
  },
  {
    title: "The Didache and the Early Church Fathers",
    body: "The Didache (c. 100 AD), one of the earliest non-canonical Christian documents, commands: &ldquo;Share everything with your brother; do not say &lsquo;It is private property.&rsquo;&rdquo; Basil the Great (c. 330-379) preached with prophetic force: &ldquo;The bread which you do not use is the bread of the hungry; the garment hanging in your wardrobe is the garment of him who is naked; the shoes that you do not wear are the shoes of the one who is barefoot; the money that you keep locked away is the money of the poor.&rdquo; Ambrose of Milan: &ldquo;You are not making a gift of your possessions to the poor person. You are handing over to him what is his.&rdquo; John Chrysostom argued that excessive wealth is in itself a form of theft from the poor. The early church consistently read the command to care for the poor not as charity but as justice &mdash; returning what rightfully belongs to those who made it.",
  },
  {
    title: "The Historical Record of Church Care for the Poor",
    body: "The early church&rsquo;s practical care for the poor was one of the most striking features of Christian community in the Roman world. Tertullian (c. 200 AD) describes how Christians pooled money monthly for burial of the poor, support of orphans, the elderly, shipwrecked sailors, and those condemned to the mines. Julian the Apostate, the Roman emperor who tried to reverse Christianization (361-363 AD), famously complained that the Christians &ldquo;support not only their own poor but ours as well.&rdquo; The development of the hospital as an institution is largely a Christian contribution to world history, beginning with Basil&rsquo;s ptochotropheion (poorhouse and hospital complex) in Caesarea in the 370s. The church did not merely preach good news to the poor; it built institutions to embody it.",
  },
];

const liberationSections: Section[] = [
  {
    title: "Gustavo Gutierrez and A Theology of Liberation (1971)",
    body: "Gustavo Gutierrez, a Peruvian Dominican priest, published A Theology of Liberation in 1971, launching one of the most influential and controversial theological movements of the twentieth century. Gutierrez argued that Christian theology must be done from the underside of history &mdash; from the perspective of the poor and oppressed &mdash; because God himself has made a preferential option for the poor. This is not sentimentality; it is a rereading of the Exodus, the prophets, and the Gospels that Gutierrez argues is more faithful than the reading produced from positions of privilege. Theology, in his view, is always a second act: the first act is commitment &mdash; solidarity with the poor &mdash; and theological reflection follows from that engagement. The famous formula: &ldquo;The preferential option for the poor.&rdquo;",
  },
  {
    title: "The Preferential Option for the Poor",
    body: "The &ldquo;preferential option for the poor&rdquo; is the theological heart of liberation theology. It does not mean God loves the poor more than the rich in some emotional sense; it means that God&rsquo;s salvific action in history is characterized by a consistent priority given to the liberation of the marginalized. The Exodus from Egypt, the prophetic indictments of economic oppression, the Beatitudes, Luke 4:18 &mdash; all are read as evidence that God acts in history on behalf of the poor and oppressed in a way that calls the comfortable to conversion. This option is not exclusive of the rich; it is an invitation to the rich to join God&rsquo;s program by divesting their power and standing in solidarity with those below them. The poor are not the objects of charity; they are the subjects of history &mdash; agents of their own liberation, with the church as servant, not savior.",
  },
  {
    title: "Base Communities and Scripture from the Underside",
    body: "The base communities (comunidades de base) of Latin America were small, neighborhood-level Bible study groups that sprang up across Brazil, El Salvador, Nicaragua, and elsewhere in the 1960s-80s. In them, campesinos and urban poor read the Gospels through the lens of their own experience of poverty and oppression &mdash; and found themselves in the text in ways that the standard pastoral theology of the institutional church had not encouraged. An Exodus reading by a group of landless peasants in El Salvador produces different insights than the same text read by a German professor of Old Testament. Liberation theology argued that this reading &ldquo;from below&rdquo; is not less rigorous than academic exegesis but more faithful, because the Gospel was addressed to people like them.",
  },
  {
    title: "The Vatican&rsquo;s Two Instructions (1984/1986)",
    body: "The Vatican engaged liberation theology in two major documents. The 1984 Instruction on Certain Aspects of the &ldquo;Theology of Liberation&rdquo; (Cardinal Ratzinger) criticized what it saw as an uncritical borrowing from Marxist class analysis, the reduction of salvation to political liberation, and the risk of turning the church into a political instrument of revolution. The 1986 Instruction on Christian Freedom and Liberation offered a more positive engagement: affirming the preferential option for the poor as authentically Christian, endorsing structural analysis of poverty, and calling the church to solidarity with the marginalized &mdash; while insisting that authentic liberation must include liberation from sin and cannot be reduced to the political. The two instructions represent not a simple condemnation but a complex negotiation between liberation theology&rsquo;s insights and Rome&rsquo;s concerns.",
  },
  {
    title: "Evangelical Critiques and Responses",
    body: "Evangelical critics of liberation theology have raised several concerns. First, the charge that liberation theology reduces salvation to political-economic liberation, collapsing the distinction between the kingdom of God and any particular political program. Second, the concern that Marxist analysis distorts the reading of Scripture by importing categories (class struggle, praxis, historical materialism) foreign to the biblical text. Third, the challenge that the preferential option, if taken as God&rsquo;s exclusive concern for the poor, contradicts the universality of the gospel. But evangelical responses have also acknowledged what liberation theology gets right. Ron Sider&rsquo;s Rich Christians in an Age of Hunger (1977) engaged the same biblical texts with evangelical exegesis and reached similar conclusions about the church&rsquo;s responsibility to the poor. Nicholas Wolterstorff&rsquo;s Justice: Rights and Wrongs argues that biblical justice demands structural engagement, not merely individual charity. The debate is not over whether Scripture calls the church to solidarity with the poor, but over what that solidarity requires and what it means theologically.",
  },
  {
    title: "What Liberation Theology Gets Right and Where It Overreaches",
    body: "Liberation theology&rsquo;s greatest contribution is its insistence that reading Scripture from the perspective of the poor is not a distortion but a corrective &mdash; that the dominant theological tradition has consistently interpreted texts in ways that serve the interests of the powerful and domesticate the radical demands of the Gospel. The preferential option for the poor, the structural critique of poverty, the insistence that salvation has social and political dimensions &mdash; these are faithful recoveries of biblical emphases that the comfortable church has suppressed. Where liberation theology overreaches: when it reduces the gospel to political liberation (collapsing eschatology into history), when it uncritically borrows Marxist categories that distort biblical analysis, when it subordinates the church&rsquo;s proclamation of the forgiveness of sins to its role as social transformation agent. The fullest Christian response to poverty is neither the pietist retreat from social engagement nor the political reduction of the gospel, but a theology in which personal salvation and social transformation are held together as the single work of the Holy Spirit making all things new.",
  },
];

const prosperitySections: Section[] = [
  {
    title: "The Health-Wealth Gospel: Osteen, Dollar, Copeland",
    body: "The prosperity gospel &mdash; the teaching that God wills material wealth and physical health for all believers, and that faith is the mechanism for claiming these blessings &mdash; has become one of the most influential and globally widespread forms of Christianity in the late twentieth and early twenty-first centuries. Its major figures in America include Joel Osteen (Lakewood Church, Houston), Creflo Dollar, Kenneth Copeland, and earlier figures like Kenneth Hagin. The movement teaches that poverty is not a social condition or a spiritual calling; it is a spiritual failure &mdash; the result of insufficient faith, unconfessed sin, or failure to claim the promises of God. Prosperity is the proof of faith; lack is the evidence of spiritual deficiency.",
  },
  {
    title: "The Name-It-and-Claim-It Theology and the Faith Formula",
    body: "The theological engine of prosperity teaching is the positive confession &mdash; the doctrine that words spoken in faith create reality, because believers participate in the creative power God exercised when he &ldquo;called things that are not as though they were&rdquo; (Romans 4:17). Kenneth Hagin taught that sickness, poverty, and failure are contrary to the will of God, and that believers can &ldquo;name and claim&rdquo; their healing and prosperity by confessing it as already accomplished. This formula &mdash; state the desired reality with conviction, act as if it is already true, do not confess doubt or lack &mdash; is taught as the mechanism of faith. The consequences: people who remain poor or sick are implicitly blamed for their own condition (insufficient faith, negative confession, hidden sin), which adds spiritual shame to material suffering.",
  },
  {
    title: "Distortions of the Atonement",
    body: "Prosperity theology requires a particular account of the atonement. Kenneth Copeland and others have taught that Christ&rsquo;s atoning work included not only the forgiveness of sins but the redemption of believers from poverty and sickness &mdash; citing Isaiah 53:5 (&ldquo;by his wounds we are healed&rdquo;) and Galatians 3:13 (&ldquo;Christ redeemed us from the curse of the law&rdquo;) to argue that the curse includes material poverty. On this reading, to be poor or sick is to fail to appropriate what Christ has already purchased. This is an exegetical and theological distortion. Isaiah 53:5 is applied in the New Testament to the forgiveness of sins (1 Peter 2:24), not to physical healing as a guaranteed benefit of the atonement in this age. The New Testament consistently portrays suffering, hardship, and material poverty as possible &mdash; even normative &mdash; dimensions of faithful discipleship.",
  },
  {
    title: "Biblical Counter-Evidence",
    body: "The biblical counter-evidence to the prosperity gospel is overwhelming and unaddressed by its proponents. Paul, the greatest missionary in Christian history, wrote from prison (Philippians 1:13, 4:10-13) and described himself as &ldquo;in want,&rdquo; &ldquo;hungry,&rdquo; and &ldquo;in need&rdquo; (4:12). Hebrews 11 &mdash; the great &ldquo;hall of faith&rdquo; &mdash; celebrates not only those who received miraculous deliverance but those who &ldquo;were tortured,&rdquo; &ldquo;faced jeers and flogging,&rdquo; &ldquo;went about in sheepskins and goatskins, destitute, persecuted and mistreated&rdquo; (11:35-38). Their faith was not smaller; it was larger. Jesus himself was poor (&ldquo;no place to lay his head&rdquo;, Matt 8:20). Paul instructs that &ldquo;godliness with contentment is great gain&rdquo; (1 Tim 6:6) &mdash; not that godliness produces financial gain. The prosperity gospel requires a selective reading of Scripture that systematically ignores its largest counter-examples.",
  },
  {
    title: "The Harm Done to the Poor in the Global South",
    body: "The prosperity gospel&rsquo;s most devastating effects have been on the poorest Christians in the world &mdash; in sub-Saharan Africa, Latin America, and Southeast Asia &mdash; where it has spread most rapidly. Pastors teach that tithing to the church (often to a church run by a wealthy pastor) is the mechanism for unlocking divine prosperity, extracting the last resources of impoverished families with the promise of a miraculous return. When the miraculous return does not come &mdash; when the family remains poor, the child remains sick &mdash; the implicit teaching is clear: your faith was insufficient. The spiritual harm is compounded by the material harm: families give money they cannot afford, wait for breakthroughs that do not come, and add religious shame to material desperation. Sociological research in Africa has documented the ways prosperity theology has impeded development and deepened poverty.",
  },
  {
    title: "Keller and Piper: Another Gospel (Galatians 1:6-9)",
    body: "Tim Keller and John Piper have both argued that the prosperity gospel is not a deficient version of Christianity but &ldquo;another gospel&rdquo; &mdash; in Paul&rsquo;s language in Galatians 1:6-9, a perversion of the gospel that deserves the anathema. Keller argues that the prosperity gospel fundamentally misunderstands what we are saved from (not from poverty and sickness but from sin and the wrath of God) and what we are saved for (not for material prosperity but for knowing and enjoying God in a redeemed creation). It makes God a means to human ends &mdash; health, wealth, success &mdash; rather than the end himself. Piper argues in Let the Nations Be Glad! and his writing on the prosperity gospel that it turns the cross from the means of our reconciliation with God into a transaction for purchasing earthly blessings, and that it produces a Christianity in which suffering has no place &mdash; when suffering is in fact one of the primary means by which God forms Christ in believers.",
  },
];

const videos = [
  { videoId: "OlmE1nrQp3c", title: "Tim Keller on Justice and the Poor" },
  { videoId: "Vs0sghD2pLw", title: "John Piper on the Prosperity Gospel" },
  { videoId: "LcJWnIq4Ggs", title: "NT Wright on Jubilee and Economics" },
];

export default function ChristianPovertyTheologyPage() {
  const [tab, setTab] = useState("god-concern");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        fontFamily: "var(--font-jost, system-ui, sans-serif)",
      }}
    >
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              background: GREEN + "33",
              color: GREEN,
              padding: "0.2rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Theology
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            margin: "0.75rem 0",
          }}
        >
          Christian Theology of Poverty
        </h1>

        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: 680,
            margin: "0 0 1rem",
          }}
        >
          What the Bible says about poverty and wealth &mdash; from the gleaning laws of Leviticus to the
          koinonia economics of Acts 2, from the prophetic indictments of Amos to the Jubilee manifesto of
          Luke 4, from liberation theology&rsquo;s preferential option to the prosperity gospel&rsquo;s
          distortions.
        </p>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
            marginTop: "1.5rem",
          }}
        >
          {TABS.map((t: TabDef) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              dangerouslySetInnerHTML={{ __html: t.label }}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? GREEN : BORDER,
                background: tab === t.id ? GREEN + "33" : "transparent",
                color: tab === t.id ? GREEN : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* GOD'S CONCERN FOR THE POOR */}
        {tab === "god-concern" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              God&rsquo;s Concern for the Poor
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              From the gleaning laws of Leviticus to the anawim of the Psalms &mdash; the Old Testament&rsquo;s
              comprehensive framework for economic justice and God&rsquo;s special concern for the vulnerable.
            </p>
            {godConcernSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* JESUS AND THE POOR */}
        {tab === "jesus-poor" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              Jesus and the Poor
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              The Great Reversal running through Luke&rsquo;s Gospel &mdash; from the Jubilee manifesto of Luke 4
              to Lazarus and the rich man, the Beatitudes, and whatever you did for the least of these.
            </p>
            {jesusPoorSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* EARLY CHURCH */}
        {tab === "early-church" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: "0 0 0.25rem" }}>
              The Early Church and Possessions
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Acts&rsquo; koinonia economics, Paul&rsquo;s collection for Jerusalem, James&rsquo;s economic
              critique, and the patristic record of care for the poor.
            </p>
            {earlyChurchSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: GREEN, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* LIBERATION THEOLOGY */}
        {tab === "liberation" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: "0 0 0.25rem" }}>
              Liberation Theology
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Gustavo Gutierrez, the preferential option for the poor, the base communities of Latin America,
              the Vatican&rsquo;s response, and what liberation theology gets right &mdash; and where it
              overreaches.
            </p>
            {liberationSections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: GOLD, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
            <div
              style={{
                background: GOLD + "18",
                border: `1px solid ${GOLD}55`,
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                <strong style={{ color: TEXT }}>Key text:</strong> Gustavo Gutierrez,{" "}
                <em>A Theology of Liberation</em> (1971); Ron Sider,{" "}
                <em>Rich Christians in an Age of Hunger</em> (1977). The debate is not over whether Scripture
                calls the church to solidarity with the poor, but over what that solidarity requires and what
                it means theologically.
              </p>
            </div>
          </div>
        )}

        {/* PROSPERITY GOSPEL */}
        {tab === "prosperity" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#E11D48", margin: "0 0 0.25rem" }}>
              The Prosperity Gospel Critique
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              The health-wealth gospel, the faith formula, the atonement distortions, the harm done
              especially to the global poor, and why Keller and Piper call it another gospel (Gal 1:6-9).
            </p>
            {prosperitySections.map((s: Section) => (
              <div
                key={s.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{ color: "#E11D48", fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </div>
            ))}
            <div
              style={{
                background: "#E11D4818",
                border: "1px solid #E11D4855",
                borderRadius: 14,
                padding: "1.5rem 1.75rem",
              }}
            >
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                <strong style={{ color: TEXT }}>Paul&rsquo;s verdict:</strong> &ldquo;Even if we or an angel
                from heaven should preach a gospel other than the one we preached to you, let them be under
                God&rsquo;s curse&rdquo; (Galatians 1:8). The stakes of getting the gospel right are ultimate.
              </p>
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GREEN, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on poverty, economic justice, the Jubilee, and the prosperity gospel from three
              of the most important voices in contemporary theology.
            </p>
            {videos.map((v) => (
              <div
                key={v.videoId}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>
                    {v.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer note */}
        <div
          style={{
            marginTop: "3rem",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: "2rem",
          }}
        >
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, maxWidth: 680 }}>
            &ldquo;He has shown you, O mortal, what is good. And what does the Lord require of you? To act
            justly and to love mercy and to walk humbly with your God&rdquo; (Micah 6:8). Poverty is a
            theological issue because God is not neutral about it &mdash; and neither can his people be.
          </p>
        </div>
      </main>
    </div>
  );
}
