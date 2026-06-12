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

const STORAGE_KEY = "vine_christianjustice_entries";

interface JSTEntry {
  id: string;
  date: string;
  injusticeWitnessed: string;
  actionTaken: string;
  prayerOffered: string;
}

const theologySections = [
  {
    title: "Mishpat, Hesed, Tsanah &mdash; Micah 6:8",
    body: "\"He has shown you, O mortal, what is good. And what does the Lord require of you? To do justice (mishpat), to love kindness (hesed), and to walk humbly (tsanah) with your God\" (Micah 6:8). This verse is perhaps the most concentrated summary of the ethical life in all of Scripture, and its three terms are precisely chosen. Mishpat is the Hebrew word for justice &mdash; the active setting right of wrongs, the righting of scales, the protection of the weak from the strong. It is not a sentiment but a practice, not a posture but a verdict. Hesed is the covenantal loyalty that motivates mishpat: the stubborn, gut-level commitment to the good of another that persists even when there is no benefit to oneself. Tsanah means to walk carefully, humbly, attentively &mdash; the posture of someone who knows they are not God and therefore cannot afford to be arrogant about the conclusions they draw or the power they wield. Together the three words define the whole person: the hands doing justice, the heart overflowing with covenant love, the spine bent in humility before the God who sees every scale. Justice without hesed becomes cold enforcement; hesed without justice becomes sentimental enablement; both without tsanah become oppression wearing a righteous mask. Micah demands all three, inseparably.",
  },
  {
    title: "The Prophets and Justice: Amos and Isaiah",
    body: "The eighth-century prophets were God&rsquo;s prosecuting attorneys against societies that had separated worship from justice. Amos, a shepherd from Tekoa, confronted the Northern Kingdom with searing specificity: \"Let justice roll down like waters, and righteousness like an ever-flowing stream\" (Amos 5:24). The image is not a polite trickle but an unstoppable flood &mdash; Amos was done with the nation&rsquo;s solemn assemblies and burnt offerings offered by people who trampled the poor and sold the needy for a pair of sandals (Amos 2:6). Isaiah opened his book with a divine court case: God tells Israel to \"seek justice, defend the oppressed, take up the cause of the fatherless, plead the case of the widow\" (Isaiah 1:17), then threatens to hide his eyes from their prayers until they do. Both prophets make the same devastating argument: worship that coexists with injustice is not merely incomplete, it is an abomination. God does not accept liturgy from hands dripping with the blood of the poor. The prophetic tradition insists that justice is not a department of the church&rsquo;s work or a optional ministry track &mdash; it is the test of whether the community has understood the God it claims to worship.",
  },
  {
    title: "The Image of God as the Basis for Justice",
    body: "The deepest foundation of biblical justice is not a social theory or a political philosophy but a theological claim about human beings: every person is made in the image of God (Genesis 1:26-27). The Hebrew is tselem &mdash; image, likeness, representation. In the ancient Near East, only kings bore the image of the deity and represented his rule. Genesis democratizes this status: every human being, regardless of race, class, gender, or ability, is a royal representative of God, stamped with his likeness, entrusted with his commission. This is why murder is wrong &mdash; not merely because it destroys a life but because it desecrates the image of God (Genesis 9:6). And this is why injustice is always, at its root, a theological offense: to trample the poor is to trample someone who bears the face of God. To deny the widow her rights is to deny a God-bearer her dignity. The imago Dei does not permit a hierarchy of human worth. It means the unborn child, the undocumented immigrant, the prisoner on death row, the elder with dementia, and the CEO of a Fortune 500 company all carry the same irreducible dignity &mdash; and any social arrangement that treats them otherwise has already sinned against their Maker.",
  },
  {
    title: "The Preferential Option for the Poor",
    body: "The law of Moses built protection for the poor into Israel&rsquo;s economic system at the structural level. When harvesting crops, farmers were required to leave the corners of their fields and the gleanings of the harvest for the poor and the stranger (Leviticus 19:9-10). Every seventh year, debts were released and slaves freed. Every fiftieth year, the Jubilee returned alienated land to its original families, preventing the permanent accumulation of property by the powerful. This was not charity &mdash; it was structural redistribution built into the covenantal economy. In the New Testament, Jesus announced his ministry in Nazareth by reading Isaiah 61: \"The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed, to proclaim the year of the Lord&rsquo;s favor\" (Luke 4:18-19). The year of the Lord&rsquo;s favor is a Jubilee reference. Jesus&rsquo;s mission statement is soaked in economic and structural justice. Theologians speak of God&rsquo;s &ldquo;preferential option for the poor&rdquo; &mdash; not that God loves the poor more as people, but that in a world where the scales are perpetually tipped against them, God&rsquo;s active concern tips toward those crushed by the weight.",
  },
  {
    title: "Justice vs. Charity: Structural vs. Individual",
    body: "There is a crucial distinction in the Christian tradition between charity &mdash; relieving the suffering of individuals &mdash; and justice &mdash; changing the systems that produce the suffering. Both are commanded; only one addresses the root. Charity feeds the person falling off the cliff; justice asks why people keep falling and builds a railing. The prophets were not primarily urging individuals to be generous; they were indicting the structural arrangements of Israel &mdash; the corrupt courts, the fraudulent merchants, the accumulation of land by the powerful &mdash; that generated poverty in the first place. Gary Haugen and Victor Boutros, in The Locust Effect, document that the primary driver of poverty in the developing world is not lack of aid but the absence of functioning justice systems: people are kept poor by violence, extortion, and legal systems that cannot protect them. This does not make charity wrong &mdash; Jesus commands it &mdash; but it does mean that Christians who only ever do charity while ignoring structural sin are cleaning up after a machine they have never tried to stop. Both must operate. Individual acts of generosity reveal the character of God; structural advocacy reveals the kingdom of God.",
  },
  {
    title: "Retributive vs. Restorative Justice: Biblical Tensions",
    body: "Scripture holds in tension two distinct understandings of justice. Retributive justice gives wrongdoers what they deserve: the punishment fits the crime, the scales of guilt are balanced by proportionate penalty. The lex talionis &mdash; eye for eye, tooth for tooth &mdash; was itself a civilizing principle, limiting retribution to proportionality. Restorative justice asks a different question: not &ldquo;what does the offender deserve?&rdquo; but &ldquo;what does repair look like for the victim, the offender, and the community?&rdquo; It moves toward reintegration, reconciliation, and the healing of relationships. Biblical law contains both impulses. The death penalty for murder is retributive. The cities of refuge for accidental killing are restorative. The Jubilee, debt release, and gleaning laws are restorative. Jesus&rsquo;s teaching in the Sermon on the Mount &mdash; turn the other cheek, go the extra mile, love your enemy &mdash; disrupts the retributive cycle entirely. The cross is the supreme act of restorative justice: God does not ignore the demands of retributive justice (the penalty for sin is real and must be borne) but absorbs them in order to restore the broken relationship. Christians who think carefully about criminal justice, racial reconciliation, and conflict resolution will need to hold both poles in Scripture rather than simply baptizing the prevailing punitive assumptions of their culture.",
  },
  {
    title: "The Kingdom of God and Social Transformation",
    body: "Jesus announced that the kingdom of God &mdash; the active reign of God breaking into the present &mdash; is both already and not yet. It is already present: the blind receive sight, the lame walk, the poor hear good news (Matthew 11:5). It is not yet consummated: we still pray &ldquo;thy kingdom come, thy will be done on earth as it is in heaven.&rdquo; For the church, this already/not-yet structure means that social transformation is a genuine sign of the kingdom&rsquo;s presence and a genuine anticipation of its consummation &mdash; but never its arrival. Christians do not build the kingdom; God brings it. But they can bear witness to it, display it in their communities, and work to bend social structures toward it, because the direction of history is toward a new creation in which justice rolls down like waters and the earth is full of the knowledge of God as the waters cover the sea (Isaiah 11:9). This rules out both utopian optimism (the church will transform society into the kingdom) and quietist despair (justice work doesn&rsquo;t matter since the world is burning anyway). The right posture is faithful witness: doing justice not because it will fix everything but because the kingdom is real, the King is coming, and his people live by his values now.",
  },
  {
    title: "Why Christians Differ: Individual Gospel vs. Social Gospel",
    body: "One of the sharpest fault lines in twentieth-century Christianity ran between the &ldquo;individual gospel&rdquo; &mdash; salvation of souls, personal morality, the church&rsquo;s primary task as evangelism &mdash; and the &ldquo;social gospel&rdquo; &mdash; transformation of structures, advocacy for the oppressed, the church&rsquo;s primary task as justice. Walter Rauschenbusch, the great social gospel theologian, argued that sin is structural as well as personal and that the church must attack unjust systems. His critics, observing his theological liberalism and the early twentieth century&rsquo;s optimism about human progress, feared that the social gospel had gutted personal salvation and supernatural Christianity. The fundamentalist-modernist controversy cemented the association: justice was liberal, evangelism was conservative. Tim Keller spent much of his career arguing that this is a false dilemma. The gospel of the kingdom &mdash; the gospel Jesus actually preached &mdash; addresses the whole person: the soul that needs new birth and the body that needs bread, the individual who needs forgiveness and the community that needs transformation. Justice work done from the gospel is not an alternative to evangelism; it is a sign that the gospel is real. When the church splits the seamless garment of the kingdom into &ldquo;spiritual&rdquo; and &ldquo;social,&rdquo; it misrepresents the Christ who did both without apology.",
  },
  {
    title: "Shalom: Justice as Comprehensive Wholeness",
    body: "The Hebrew word shalom &mdash; usually translated &ldquo;peace&rdquo; but meaning far more than the absence of conflict &mdash; is perhaps the Bible&rsquo;s most comprehensive term for what justice aims at. Cornelius Plantinga defines shalom as &ldquo;the webbing together of God, humans, and all creation in justice, fulfillment, and delight.&rdquo; It is the condition of flourishing that God intended for creation from the beginning and that the new creation will fully restore. Shalom includes right relationships (with God, with neighbor, with the earth), fair distribution of the earth&rsquo;s goods, the security of those who are vulnerable, and the joy of those who are fully what they were made to be. Nicholas Wolterstorff argues that justice is the social face of shalom: you cannot have shalom in a community where some are exploited, where some live in terror, where some lack what they need to flourish. This means that Christian justice work is not primarily about protest or advocacy, though it includes both &mdash; it is about participating in the restoration of shalom wherever it has been torn. The Christian doing prison ministry, the lawyer providing pro bono immigration defense, the doctor serving in an underserved community, the parent raising children to see others as image-bearers: all are shalom-weavers, all are practicing the justice that is the social face of the gospel&rsquo;s goal.",
  },
];

const practices = [
  {
    name: "The Justice Audit",
    body: "Once a year, spend two hours examining the concrete circumstances of your life with justice eyes. Where do your goods come from &mdash; are the workers who made them paid fairly? Where does your money go &mdash; does your spending pattern favor the vulnerable or ignore them? Who lives in your neighborhood and who is absent, and why? The audit is not designed to produce guilt but clarity: you cannot address injustice you have never named. Bring the audit before God in prayer. Then choose one concrete change &mdash; a different purchasing habit, a conversation with an elected official, a volunteer commitment, a financial gift &mdash; and make it. Justice begins with honest seeing, which is itself an act of faithfulness.",
  },
  {
    name: "Reading the Prophets Aloud",
    body: "Select Amos, Micah, Isaiah 1&ndash;5, or one of the minor prophets, and read a chapter aloud each week for a month. The prophets were oral literature meant to be heard, and hearing them activates their force in a way silent reading rarely does. As you read, ask: Who is the vulnerable party in this passage? What structural arrangement is being condemned? What would this look like in my city? Pair the reading with a prayer of intercession for one specific local injustice. Over a month, the prophetic imagination begins to sharpen the eye: you start to notice the Amos-shaped patterns in the news and the Isaiah-shaped gaps in your own community.",
  },
  {
    name: "Practicing Advocacy",
    body: "Choose one justice issue &mdash; criminal justice reform, housing, immigration, child welfare, labor rights, anti-trafficking &mdash; and spend one year going deep rather than broad. Read one serious book, follow two organizations working on the issue, attend one community meeting, and write to one elected official with a specific ask. Advocacy begins with knowledge; justice work requires you to know what you are talking about. Gary Haugen&rsquo;s rule is useful here: locate the actual point of harm and work as close to it as possible. Organizations working on the ground near suffering are more likely to produce real change than those operating at a distance from it. One year of focused attention produces more than a decade of diffuse concern.",
  },
  {
    name: "Gleanings: Structured Generosity",
    body: "Leviticus 19 instructs farmers not to harvest to the edges of their fields but to leave the corners for the poor. Translate this into your economic life: before the harvest is fully gathered &mdash; before the paycheck is allocated &mdash; set aside a portion for those in need. This is not giving from surplus; it is giving from the first and the edges, before the full accounting. Automate a recurring gift to an organization serving those Jesus called &ldquo;the least of these.&rdquo; The discipline of the harvest-edge giving trains the instinct to see one&rsquo;s resources not as fully owned but as held in trust for the flourishing of the community. Over time, it reorients the entire relationship to money from ownership to stewardship.",
  },
  {
    name: "Proximity to the Marginalized",
    body: "Bryan Stevenson&rsquo;s central principle in Just Mercy is proximity: you cannot understand injustice at a distance. Pursue one concrete relationship with someone living on the margins of your community &mdash; through a prison ministry, a refugee resettlement program, a homeless shelter, a disability ministry, or a neighborhood association in an underserved area. Do not go as a benefactor; go as a learner. Ask questions. Listen before advising. The gospel crossed every boundary of dignity to reach you; following Jesus means crossing the boundaries of comfort that separate you from those he came to reach. Proximity does not always produce solutions, but it reliably produces empathy, and empathy &mdash; the gut-wrenching sense of what someone else is experiencing &mdash; is the emotional prerequisite for sustained justice work.",
  },
  {
    name: "The Justice Examen",
    body: "Add a justice dimension to your daily or weekly examen. After reviewing where you saw God and where you fell short, add two questions: Where did I encounter injustice &mdash; in the news, in conversation, in my own behavior? And what did I do with what I saw? The questions are modest, but consistency matters. The person who asks them weekly for a year will have named and responded to fifty injustices rather than walking past them. The examen connects justice not to grand strategies but to the texture of daily life, training the eye to see who is being overlooked, whose voice is not in the room, and what the moment requires of someone who claims the God of Amos and Isaiah.",
  },
];

const voices = [
  {
    name: "Tim Keller",
    years: "1950&ndash;2023",
    role: "Generous Justice",
    body: "Keller spent his Redeemer years arguing that justice is not an appendix to the gospel but integral to it. His book Generous Justice draws directly on Micah 6:8, arguing that the Hebrew mishpat and tsedaqah (justice and righteousness) together describe a pattern of active intervention on behalf of the poor, the widow, the stranger, and the orphan &mdash; not because they deserve it but because God loves them. Keller&rsquo;s great contribution was to show that the same gospel that justifies the sinner sends that sinner out into the world to do justice: we do not do justice to earn God&rsquo;s favor, but the experience of God&rsquo;s grace in Christ makes us people who cannot look at the suffering of others with indifference. He also pushed back, from the evangelical side, against the false divorce between evangelism and justice, insisting that a church doing only one of the two has truncated the gospel of the kingdom.",
    quote: "Doing justice is not an optional specialty track that only radical Christians take. It is incumbent on every Christian.",
  },
  {
    name: "Cornel West",
    years: "1953&ndash;",
    role: "Prophetic Christianity",
    body: "West is one of the most prominent voices for prophetic Christianity in American public life, drawing on the Black church tradition, the Social Gospel, and the Hebrew prophets to argue that justice &mdash; particularly racial and economic justice &mdash; is inseparable from authentic Christian witness. He frequently invokes the tradition of Frederick Douglass, Harriet Tubman, Ida B. Wells, and Martin Luther King Jr. as examples of a Christianity that takes the prophets seriously. His concept of &ldquo;blues Christianity&rdquo; holds that authentic faith is forged in suffering and resistance: the spirituals were not escapism but acts of defiance, sustained by the conviction that the God of the Exodus would not leave his people in bondage forever. West&rsquo;s work challenges any Christianity that has become comfortable with the status quo, asking whether a church that does not disturb the powerful has truly heard the prophets.",
    quote: "Justice is what love looks like in public.",
  },
  {
    name: "Nicholas Wolterstorff",
    years: "1932&ndash;",
    role: "Justice: Rights and Wrongs",
    body: "Wolterstorff is among the most rigorous philosophical theologians working on justice, and his magnum opus Justice: Rights and Wrongs makes a careful argument that rights-talk is not secular baggage imported into Christianity but grows directly from the inherent worth that God confers on human beings as those who stand in a special relation to him. Where utilitarian theories of justice calculate the greatest good for the greatest number, Wolterstorff argues that justice protects the rights of individuals regardless of whether doing so maximizes aggregate welfare &mdash; and the grounds for those rights are theological, not merely contractual or evolutionary. He also contributed the concept of &ldquo;justice as shalom,&rdquo; insisting that justice and flourishing are not competitors but the same reality seen from different angles: wherever shalom is present, justice is done; wherever shalom is absent, injustice is operating.",
    quote: "Shalom is the human being dwelling at peace in all his or her relationships.",
  },
  {
    name: "Gary Haugen",
    years: "1963&ndash;",
    role: "Good News About Injustice",
    body: "Haugen founded International Justice Mission after leading the United Nations&rsquo; genocide investigation in Rwanda and witnessing mass atrocity first-hand. His book Good News About Injustice argues, from Scripture and experience, that Christians are called not merely to alleviate suffering at a distance but to defend the oppressed from the violence being perpetrated against them &mdash; a mandate he finds in Proverbs 24:11-12, Isaiah 1:17, and the ministry of Jesus. IJM&rsquo;s model is direct legal intervention: deploying lawyers, investigators, and social workers to rescue victims of trafficking, slave labor, and police violence in the developing world. Haugen makes the uncomfortable argument that most of the world&rsquo;s poor are not primarily poor because of a lack of resources but because of a lack of justice: functioning legal systems and law enforcement that actually protect them rather than prey on them. His work is perhaps the strongest contemporary example of Amos&rsquo;s vision given institutional form.",
    quote: "The God of the Bible is not looking for us to feel bad about injustice. He is looking for us to do something about it.",
  },
  {
    name: "Martin Luther King Jr.",
    years: "1929&ndash;1968",
    role: "The Prophetic Tradition Incarnate",
    body: "King was above all a Baptist preacher who applied the prophetic tradition of Amos, Isaiah, and Jeremiah to the specific injustice of American racial apartheid. His Letter from Birmingham Jail is one of the great theological documents of the twentieth century: in it he argues that an unjust law &mdash; one that degrades human personality and contradicts the moral law of God &mdash; is no law at all, drawing on Augustine and Aquinas. His &ldquo;I Have a Dream&rdquo; speech culminates with a quotation from Amos: &ldquo;We will not be satisfied until justice rolls down like waters and righteousness like a mighty stream.&rdquo; King insisted that the church&rsquo;s task was to be the conscience of the state rather than its chaplain, and he paid for that insistence with his life. His theology of the &ldquo;beloved community&rdquo; &mdash; a redeemed social order in which persons of every race live as brothers and sisters &mdash; is the most powerful American instantiation of shalom in the twentieth century.",
    quote: "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny.",
  },
  {
    name: "Desmond Tutu",
    years: "1931&ndash;2021",
    role: "Ubuntu and the Rainbow People",
    body: "Tutu&rsquo;s leadership of the Truth and Reconciliation Commission in post-apartheid South Africa demonstrated that restorative justice &mdash; the biblical model that aims at repair rather than mere punishment &mdash; could be institutionalized at a national scale. He drew on the African concept of ubuntu &mdash; &ldquo;I am because we are&rdquo; &mdash; and on the Christian conviction that every human being bears the image of God to argue that the victims of apartheid and its perpetrators were both diminished by the system: one had their dignity violated, the other their humanity corrupted. The TRC hearings, in which perpetrators could receive amnesty in exchange for full public disclosure, were an act of extraordinary moral imagination rooted in the conviction that the goal of justice is not primarily retribution but the restoration of the community. Tutu frequently said that forgiving was not forgetting but refusing to let the past determine the future &mdash; a claim that could only be sustained by faith in a God whose own act of justice on the cross was simultaneously an act of reconciliation.",
    quote: "There is no future without forgiveness. But we should be very careful that forgiveness is not confused with condoning injustice.",
  },
];

const scriptures = [
  {
    ref: "Micah 6:8",
    text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To do justice, and to love kindness, and to walk humbly with your God.",
    note: "The three-fold summary of the ethical life: mishpat (the active doing of justice), hesed (covenant love that motivates it), and tsanah (the humility that protects both from pride). None of the three can be separated without distorting the whole.",
  },
  {
    ref: "Amos 5:24",
    text: "But let justice roll down like waters, and righteousness like an ever-flowing stream.",
    note: "Amos images justice not as a trickle of charitable acts but as an unstoppable flood. The passage comes immediately after God&rsquo;s rejection of Israel&rsquo;s solemn assemblies &mdash; worship without justice is not worship at all.",
  },
  {
    ref: "Isaiah 1:17",
    text: "Learn to do good; seek justice, defend the oppressed, take up the cause of the fatherless, plead the case of the widow.",
    note: "The verbs are active and specific: seek, defend, take up, plead. Biblical justice is not a disposition but a practice. Isaiah identifies the specific classes most likely to be denied justice: the orphan, the widow, the oppressed.",
  },
  {
    ref: "Luke 4:18-19",
    text: "The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed, to proclaim the year of the Lord&rsquo;s favor.",
    note: "Jesus&rsquo; mission statement in Nazareth is a Jubilee text. The year of the Lord&rsquo;s favor is Leviticus 25 &mdash; the year of debt release and land restoration. Jesus announces that his ministry is the fulfillment of Jubilee justice.",
  },
  {
    ref: "Proverbs 31:8-9",
    text: "Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.",
    note: "The command is to use the voice and the position you have on behalf of those who have neither. Advocacy &mdash; speaking up in a system for those the system ignores &mdash; is here a direct command of God.",
  },
  {
    ref: "Matthew 25:40",
    text: "And the King will answer them, &lsquo;Truly, I say to you, as you did it to one of the least of these my brothers and sisters, you did it to me.&rsquo;",
    note: "The identification of Christ with the hungry, the stranger, the naked, the sick, and the imprisoned is not a metaphor &mdash; it is a claim about where God is found. To serve the least is to serve the Lord; to ignore the least is to ignore him.",
  },
];

const videos = [
  { videoId: "uIVMCArQqS4", title: "What Is Biblical Justice? &mdash; Tim Keller" },
  { videoId: "vUJuBhO1U6A", title: "Generous Justice: How God&rsquo;s Grace Makes Us Just" },
  { videoId: "_TBdwG_c5rQ", title: "Do Justice: The Christian Call from Amos to Today" },
  { videoId: "FoamDJm5hC8", title: "Shalom: Comprehensive Justice and Human Flourishing" },
  { videoId: "dIaFtcuBLas", title: "Good News About Injustice &mdash; Gary Haugen" },
  { videoId: "yiF4q65h7fk", title: "Restorative Justice and the Gospel of Reconciliation" },
];

const relatedPages = [
  { href: "/christian-compassion", label: "Christian Compassion" },
  { href: "/stewardship", label: "Stewardship" },
  { href: "/shalom", label: "Shalom" },
  { href: "/kingdom-of-god", label: "Kingdom of God" },
  { href: "/imago-dei", label: "Imago Dei" },
  { href: "/christian-poverty", label: "Poverty &amp; the Church" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianJusticePage() {
  const [tab, setTab] = useState("theology");

  const [entries, setEntries] = useState<JSTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [injusticeWitnessed, setInjusticeWitnessed] = useState("");
  const [actionTaken, setActionTaken] = useState("");
  const [prayerOffered, setPrayerOffered] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage may be unavailable
    }
  }, [entries, loaded]);

  const saveEntry = () => {
    if (!injusticeWitnessed.trim()) return;
    const entry: JSTEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      injusticeWitnessed: injusticeWitnessed.trim(),
      actionTaken: actionTaken.trim(),
      prayerOffered: prayerOffered.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setInjusticeWitnessed("");
    setActionTaken("");
    setPrayerOffered("");
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: BG,
    border: `1px solid ${BORDER}`,
    borderRadius: 10,
    color: TEXT,
    padding: "0.75rem 0.9rem",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: TEXT,
    fontWeight: 700,
    fontSize: "0.88rem",
    marginBottom: "0.4rem",
  };

  const hintStyle: React.CSSProperties = {
    color: MUTED,
    fontSize: "0.8rem",
    margin: "0.3rem 0 0",
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: ROSE + "22",
            color: ROSE,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Biblical Justice
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Do Justice: The Christian Call to Justice
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          &ldquo;Do justice, love kindness, walk humbly with your God&rdquo; (Micah 6:8). The prophets of Israel did not whisper
          this &mdash; they thundered it into the ears of nations that had learned to worship without caring for the poor. The
          Hebrew mishpat is not a sentiment; it is the active, structural setting-right of what has been bent by power and sin.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores biblical justice from its theological foundations in the image of God through the prophets, the
          Jubilee law, and the ministry of Jesus &mdash; and into the practical question of what justice requires of those who
          follow the God who &ldquo;loves justice&rdquo; (Isaiah 61:8).
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                borderColor: tab === t.id ? ROSE : BORDER,
                background: tab === t.id ? ROSE + "22" : "transparent",
                color: tab === t.id ? ROSE : MUTED,
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ROSE, margin: "0 0 0.25rem" }}>
              A Theology of Justice
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture&rsquo;s teaching on justice &mdash; from the call of Micah through the prophets,
              the law of Moses, the kingdom announced by Jesus, and the shalom that is justice&rsquo;s ultimate aim.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3
                  style={{ color: ROSE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: ROSE + "11", border: `1px solid ${ROSE}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: ROSE, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every strand of this theology converges on a single claim: justice is not a political add-on to the gospel
                but the social face of the God who made every human being in his image, redeemed the enslaved in the Exodus,
                sent the prophets to rage against oppression, incarnated himself among the poor, and will one day set every
                crooked thing straight. To follow this God is to do justice &mdash; not to earn his favor, but because his
                Spirit has made us people who cannot look at the image of God crushed underfoot and remain unmoved.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ROSE, margin: "0 0 0.25rem" }}>
              Practices of Justice
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Justice is not a feeling; it is a practice. These six disciplines train the eye to see injustice, the voice to
              name it, and the hand to address it &mdash; one concrete act at a time.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: ROSE + "22",
                  color: ROSE,
                  fontWeight: 800,
                  borderRadius: "50%",
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "0.9rem",
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1rem", margin: "0.25rem 0 0.5rem" }}>{p.name}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ROSE, margin: "0 0 0.25rem" }}>
              Voices of Justice
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six voices &mdash; theologians, activists, philosophers, and prophets &mdash; who have shaped the Christian
              understanding of justice from Amos to the present day.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span
                    style={{ color: MUTED, fontSize: "0.82rem" }}
                    dangerouslySetInnerHTML={{ __html: v.years }}
                  />
                </div>
                <div style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${ROSE}`,
                  background: ROSE + "0E",
                  borderRadius: "0 8px 8px 0",
                  color: TEXT,
                  fontStyle: "italic",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ROSE, margin: "0 0 0.25rem" }}>
              Scripture on Justice
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts on justice to read slowly, pray over, and carry into the world. The God who spoke these words
              has not changed his mind.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ROSE, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p
                  style={{
                    color: TEXT,
                    lineHeight: 1.8,
                    margin: "0 0 0.9rem",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    borderLeft: `3px solid ${ROSE}`,
                    paddingLeft: "1rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: ROSE + "11", border: `1px solid ${ROSE}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice:</strong> read Amos 5 and Isaiah 58 in the same sitting. They are
                the two great prophetic texts on the relationship between worship and justice. Note what each says about
                fasting, prayer, and solemn assemblies &mdash; and what God says he wants instead. Then bring the question
                to your own congregation: are we closer to Amos&rsquo;s Bethel or to Isaiah&rsquo;s vision of the fast God has chosen?
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ROSE, margin: 0 }}>
              Justice Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Log an injustice you witnessed, what action you took (or honestly why you did not act), and a prayer
              offered for those affected. Entries are saved privately in your browser &mdash; a record of what you saw
              and how you responded, for the God who sees every injustice and every act of courage.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="jst-injustice" style={labelStyle}>The injustice I witnessed</label>
                <textarea
                  id="jst-injustice"
                  value={injusticeWitnessed}
                  onChange={e => setInjusticeWitnessed(e.target.value)}
                  rows={2}
                  placeholder="e.g. A coworker was passed over for a promotion due to their background; I saw someone treated with contempt at a government office..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Be specific. Vague awareness does not produce action; named injustices can be addressed.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="jst-action" style={labelStyle}>What action I took &mdash; or why I passed by</label>
                <textarea
                  id="jst-action"
                  value={actionTaken}
                  onChange={e => setActionTaken(e.target.value)}
                  rows={2}
                  placeholder="e.g. I spoke up in the meeting; I made a call on their behalf; I did nothing and I am ashamed of that..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Honest accounting of the gap between what justice required and what you did is itself a form of moral seriousness.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="jst-prayer" style={labelStyle}>A prayer offered for those affected</label>
                <textarea
                  id="jst-prayer"
                  value={prayerOffered}
                  onChange={e => setPrayerOffered(e.target.value)}
                  rows={2}
                  placeholder="e.g. Lord, see what happened to your image-bearer today. Bring justice. Show me what I can do..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Prayer is not a substitute for action, but it keeps injustice before the God who hears, and keeps your heart from going numb.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!injusticeWitnessed.trim()}
                style={{
                  background: injusticeWitnessed.trim() ? ROSE : BORDER,
                  color: injusticeWitnessed.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: injusticeWitnessed.trim() ? "pointer" : "not-allowed",
                }}
              >
                Save Entry
              </button>
            </div>

            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
                Your Entries {loaded && entries.length > 0 && (
                  <span style={{ color: MUTED, fontWeight: 600, fontSize: "0.85rem" }}>({entries.length})</span>
                )}
              </h3>

              {!loaded && (
                <p style={{ color: MUTED, fontSize: "0.92rem", margin: 0 }}>Loading your journal&hellip;</p>
              )}

              {loaded && entries.length === 0 && (
                <div style={{ background: CARD, border: `1px dashed ${BORDER}`, borderRadius: 12, padding: "1.5rem", textAlign: "center" }}>
                  <p style={{ color: MUTED, margin: 0, fontSize: "0.92rem", lineHeight: 1.7 }}>
                    No entries yet. Begin your record of witness above &mdash; the God of Amos is keeping his own ledger.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}>
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        aria-label="Delete entry"
                        style={{
                          position: "absolute",
                          top: "0.9rem",
                          right: "0.9rem",
                          background: "transparent",
                          border: `1px solid ${BORDER}`,
                          borderRadius: 8,
                          color: MUTED,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "0.25rem 0.65rem",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                      {entry.date && (
                        <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      )}
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: ROSE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Injustice Witnessed
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.injusticeWitnessed}</p>
                      </div>
                      {entry.actionTaken && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: ROSE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Action Taken
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.actionTaken}</p>
                        </div>
                      )}
                      {entry.prayerOffered && (
                        <div>
                          <div style={{ color: ROSE, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Prayer Offered
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.prayerOffered}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ROSE, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on biblical justice, the prophetic tradition, and what the call to mishpat looks like in practice
              for followers of Jesus today.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3
                    style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: v.title }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Related pages */}
        <div style={{ marginTop: "3rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT, margin: "0 0 1rem" }}>
            Continue Exploring
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {relatedPages.map(r => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  border: `1px solid ${BORDER}`,
                  background: CARD,
                  color: MUTED,
                  padding: "0.45rem 1rem",
                  borderRadius: 20,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
                dangerouslySetInnerHTML={{ __html: r.label }}
              />
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;Let justice roll down like waters, and righteousness like an ever-flowing stream&rdquo; (Amos 5:24). The
            river does not ask whether the moment is convenient. It does not wait for a platform or an audience. It rolls
            because that is its nature, and the nature of the God who sends it. Be a channel.
          </p>
        </div>
      </main>
    </div>
  );
}
