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

const STORAGE_KEY = "vine_christianracism_entries";

interface RCMEntry {
  id: string;
  date: string;
  biasRecognized: string;
  stepTowardReconciliation: string;
  prayerForUnity: string;
}

const theologySections = [
  {
    title: "From One Blood — Acts 17:26 and Biblical Monogenism",
    body: "When Paul stood on the Areopagus and addressed the philosophers of Athens, he grounded his appeal in a biological and theological claim: “From one man he made all the nations, that they should inhabit the whole earth” (Acts 17:26). The Greek is ex henos — from one. This is monogenism: the conviction that the entire human family descends from a single source, and therefore that every racial distinction is secondary, superficial, and far younger than our shared humanity. In the nineteenth century, polygenists — including many who used the Bible to defend chattel slavery — argued that the different “races” were separately created, hierarchically ordered, and suited for different social stations. Paul’s sermon at Athens demolished this argument two millennia before it was made. There is one bloodline. The pigmentation of skin, the shape of an eye, the texture of hair — these are astonishingly thin variations on a single genome. Modern genetics confirms what Scripture declared: the genetic distance between any two humans is negligible; the category “race” has almost no biological content. What it has is social, economic, and deeply political content — and the church is called to name this clearly, beginning with the theological foundation that one blood unites us all.",
  },
  {
    title: "The Image of God — The Only Race That Matters (Gen 1:26-27)",
    body: "Genesis 1:26-27 declares that human beings — without distinction — are made in the image of God, the imago Dei. The text does not say that some humans image God more fully than others. It does not rank the bearers of the divine image by melanin content, country of origin, or socioeconomic status. Every human being, by virtue of being human, carries the image of the living God — which means that every act of racial contempt is not merely a social evil but a theological one: it despises something God made in his own image. John Calvin wrote that when we meet a human being — any human being — we encounter someone stamped with the image of the Creator, and on that basis we owe them dignity, justice, and love. The imago Dei is the foundation of human rights, racial equality, and the irreducible worth of every person who has ever lived. If racism must be named as sin — and it must — the clearest basis for that naming is not political theory but the opening chapter of the Bible: to despise the image-bearer is to despise the One whose image is borne.",
  },
  {
    title: "The Church’s Complicity — An Honest Historical Reckoning",
    body: "The church has not always been the conscience of culture on race. In America, the Bible was used to defend the institution of slavery — the curse of Ham (Gen 9:20-27) twisted into a justification for African enslavement, sermons preached on the duty of obedience without the demand of emancipation. Denominations split over slavery: the Southern Baptist Convention was founded in 1845 explicitly to preserve the rights of slaveholders to serve as missionaries. Jim Crow was not opposed from most white pulpits; it was largely tolerated, rationalized, or actively defended. The silence of white churches during the civil rights movement — the silence King addressed in the “Letter from Birmingham Jail” — is not a footnote but a judgment. Jemar Tisby’s research in The Color of Compromise documents this complicity with devastating care. Honest reckoning requires that the church not only celebrate abolitionists and civil rights heroes within its ranks, but also reckon with the majority voice, which was often on the wrong side. Lament before solution: before the church can be an agent of racial reconciliation, it must first confess what it has done and what it failed to do.",
  },
  {
    title: "Neither Jew nor Greek — Galatians 3:28 and the New Humanity",
    body: "In Galatians 3:28, Paul issues one of the most revolutionary social declarations in human history: “There is neither Jew nor Greek, neither slave nor free, neither male nor female, for you are all one in Christ Jesus.” These were not abstract spiritual truths floating above social reality; they were explosive claims in a world structured by ethnic hierarchy, class, and gender subordination. The Jew-Greek distinction was perhaps the most entrenched ethnic boundary in the ancient Mediterranean world — and Paul dissolves it in Christ. The new humanity created in the gospel is not a colorless uniformity (Paul did not say “Jews and Greeks no longer exist”) but a new community in which ethnic identity no longer determines standing, access, or worth. The dividing walls have been demolished. This means that a church stratified by race — where Sunday morning remains, as King observed, the most segregated hour in American life — is a church that has not yet caught up with its own gospel. Galatians 3:28 is not a distant aspiration; it is a description of what is already true in Christ and therefore an indictment of every arrangement that contradicts it.",
  },
  {
    title: "Every Tribe and Tongue — The Multiethnic Vision of Revelation 7:9",
    body: "The final vision of Scripture is not a monochrome heaven. In Revelation 7:9, the apostle John sees “a great multitude that no one could count, from every nation, tribe, people, and language, standing before the throne and before the Lamb.” Ethnic and linguistic diversity is not erased in the new creation; it is gathered, redeemed, and presented before God as a unified chorus of praise. This matters for how we think about race. The goal of Christian reconciliation is not assimilation — the erasure of cultural particularity into a dominant norm — but the eschatological community John envisions: every distinct voice present, every particular tongue heard, all of them together forming something more beautiful than any one could produce alone. The multiethnic church is not a social experiment or a political statement; it is a preview of the future God has promised. When a congregation reflects the diversity of its community and of the coming kingdom, it is not being progressive; it is being prophetic — bearing witness to the world that is coming.",
  },
  {
    title: "The Dividing Wall Demolished — Reconciliation as a Gospel Issue (Eph 2:14-16)",
    body: "In Ephesians 2:14-16, Paul describes what Christ accomplished on the cross with striking social language: “For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility” — creating “one new humanity out of the two.” The two groups are Jews and Gentiles, the defining ethnic-religious division of Paul’s world. The cross did not merely secure individual forgiveness; it demolished the structures of ethnic enmity. Reconciliation with God and reconciliation with the other are not separate projects — they proceed from the same atoning work. This is why racial reconciliation is a gospel issue, not a social one tangential to the church’s mission. To say “I am right with God but have no obligation to pursue peace with my racially different neighbor” is to misunderstand what God did at Calvary. The dividing wall has been demolished. A church that reconstructs it — through segregation, exclusion, or indifference to racial injustice — is contradicting its own message.",
  },
  {
    title: "Why Colorblindness Is Not the Answer — Justice Requires Seeing",
    body: "A common white response to racial tension in the church is to declare, with apparent good will, “I don’t see color.” The intention is generous: I refuse to assign different value to people based on race. But the effect is the opposite of justice, for two reasons. First, colorblindness ignores the way race continues to shape life outcomes — in policing, lending, hiring, health care, and education — whether or not individuals consciously intend those disparities. To not see color is to not see the water in which people are swimming. Second, it erases the beauty of cultural particularity that Revelation 7:9 celebrates. The goal is not to become blind to the image of God in people of different ethnicities but to see it more fully — to recognize the particular beauty and wisdom that each cultural tradition carries. Bryan Stevenson’s work in Just Mercy is an exercise in the opposite of colorblindness: he sees, precisely and painfully, the ways race has shaped outcomes in the criminal justice system, and that seeing is what makes justice possible. The call is not blindness but just sight — eyes open to beauty and to injustice simultaneously.",
  },
  {
    title: "Structural Racism and Personal Racism — Both Matter",
    body: "The conversation about race in the church is sometimes paralyzed by a false either-or: either racism is a matter of personal prejudice (individual hearts that need to change) or it is a matter of systemic injustice (structures that need to change). Scripture insists on both-and. Personal racism — contempt, prejudice, stereotyping, the unconscious bias we carry from formation in a racialized society — is a sin of the heart that requires repentance, confession, and the renewing work of the Spirit. Structural racism — the way unjust policies accumulate over time into unequal outcomes, even when no individual in the system today consciously intends those outcomes — is a justice concern that requires prophetic engagement, advocacy, and concrete action. The Hebrew prophets did not choose between personal holiness and systemic justice; they demanded both. Amos denounced economic exploitation encoded in the market (Amos 8:4-6); Jesus condemned both the hypocrisy of individual Pharisees and the temple system that exploited the poor. The church that addresses only personal racism while ignoring structural causes misses half the biblical picture, and vice versa.",
  },
  {
    title: "The Call to Lament Before Solution",
    body: "The American evangelical church has often been more comfortable with solution than with lament. But before we can address racial injustice, we must sit in the reality of it — feel its weight, hear the stories of those who have borne it, and grieve before God. The Psalms of lament, and the book of Lamentations, model a spiritual practice that is absent from much suburban Christianity: the willingness to stay in the pain before reaching for the fix. Latasha Morrison’s work with Be the Bridge emphasizes that multiethnic relationships must begin with listening, not problem-solving — with white Christians specifically learning to hear the experiences of people of color without immediately defending, explaining, or redirecting toward “what we can do.” Lament is not passivity; it is the honest acknowledgment that something has been broken that only God can ultimately heal. It is the prerequisite for genuine repentance, and repentance is the prerequisite for genuine reconciliation. The church that moves too quickly to “solutions” produces programs; the church that begins with lament produces transformation.",
  },
];

const practices = [
  {
    name: "The Listening Posture",
    body: "Before speaking on race, practice the discipline of sustained listening. Seek out the testimonies of brothers and sisters in Christ from different racial backgrounds — not to debate or correct, but to hear. Read memoirs and histories written from within experiences different from your own. Latasha Morrison of Be the Bridge calls this “courageous conversation,” and its first posture is receptive silence. James 1:19 commands us to be swift to hear and slow to speak — a discipline the church desperately needs on this topic. Set a rule for yourself: before you offer an opinion on racial justice, you must first be able to accurately and charitably represent the experience and argument of those most directly affected.",
  },
  {
    name: "Cross-Racial Friendship",
    body: "The most powerful agent of racial reconciliation is not a conference or a curriculum but a friendship across racial lines — the kind that grows deep enough to include honest conversation about experience, history, and pain. John Perkins, who survived beatings by white law enforcement officers and came to preach racial reconciliation for the rest of his long life, called this the heart of his ministry: “Love is the final fight.” Pursue proximity. Attend a church outside your racial comfort zone for a season. Build friendships with intention and patience. Do not expect your cross-racial friendships to fix racism; expect them to form you into someone who understands it better and loves more concretely.",
  },
  {
    name: "Honest Historical Education",
    body: "Many white Christians are unaware of the specific history of race in their country, their denomination, and their own city. Read Jemar Tisby’s The Color of Compromise, Bryan Stevenson’s Just Mercy, and the history of your own church’s stance on race and slavery. Visit a local civil rights landmark with the posture of a learner. Teach this history to your children. Ignorance of history is not neutrality; it is a choice that leaves harmful patterns unexamined and unreformed. Knowledge of what happened is not the whole of reconciliation, but it is the necessary beginning of repentance.",
  },
  {
    name: "Lament as Spiritual Discipline",
    body: "Set aside time to lament the sins of racism — historical and present, corporate and personal. Use the Psalms of lament as a template. Name specific injustices. Pray for specific people and communities affected. Sit with the weight of it before moving to petition. The goal is not guilt as a permanent resting place but grief as the gateway to genuine repentance. A congregation that regularly practices lament over racial sin will be less likely to return to comfortable numbness and more likely to sustain costly engagement over years.",
  },
  {
    name: "Examining Your Own Biases",
    body: "The research on implicit bias — the associations we hold below the threshold of conscious intention — confirms what the Christian doctrine of sin would predict: we are all formed by the racialized environments we inhabit, and that formation produces biases we did not choose and may not even be aware of. The honest Christian response is not denial but examination. Ask: Where do my automatic associations come from? What neighborhoods do I avoid? Whose pain do I find easier to feel? What stories do I instinctively believe or disbelieve? This is the work of self-examination before God, not a political exercise — the kind of honest inventory that Psalm 139:23-24 invites: “Search me, O God, and know my heart.”",
  },
  {
    name: "Economic and Political Engagement",
    body: "Racial reconciliation is not only spiritual and relational; it has material and political dimensions. Gary Haugen’s work on international justice, Bryan Stevenson’s Equal Justice Initiative, and John Perkins’ community development model all demonstrate that the church’s call to racial justice includes engagement with housing policy, criminal justice reform, educational equity, and economic opportunity. This does not mean a particular party affiliation; it means asking, for any given policy question: Does this reflect the biblical vision of justice for the poor and the vulnerable? Does it honor the imago Dei of every person affected? Vote, advocate, give, and serve in ways shaped by the answer.",
  },
];

const voices = [
  {
    name: "Jemar Tisby",
    years: "b. 1983",
    role: "Historian of the church's racial failure",
    body: "Tisby’s The Color of Compromise: The Truth About the American Church’s Complicity in Racism is among the most important books written for white evangelicals in a generation. A church historian and former Reformed Presbyterian seminarian, Tisby traces the American church’s support for, tolerance of, and accommodation to racial injustice from the colonial era through the present, with meticulous documentation and a pastoral tone that makes the indictment harder to dismiss. His argument is not that individual Christians were uniquely evil but that the institutional church repeatedly chose comfort and cultural accommodation over costly prophetic witness. Tisby calls the church to the “ARC of racial justice”: awareness, relationships, and commitment. His work is an act of love toward a church he refuses to abandon, precisely because he believes it can do better.",
    quote: "The most important thing to understand about the history of race and the American church is that Christians have rarely been ahead of the culture when it comes to racial justice.",
  },
  {
    name: "Bryan Stevenson",
    years: "b. 1959",
    role: "Lawyer, justice advocate, and witness",
    body: "Stevenson is the founder of the Equal Justice Initiative and the author of Just Mercy, a memoir of his legal work on behalf of death row inmates and the wrongfully convicted, most of them Black men in the Deep South. He is not primarily writing as a theologian, but his vision of proximity, justice, and the irreducible dignity of every human being is profoundly Christian in its implications. His four keys — get proximate to the poor and incarcerated, change narratives, maintain hope, and be willing to be uncomfortable — are a practical theology of racial justice. Stevenson’s witness is particularly powerful because it has come at great personal cost: he has spent his career in the rooms of power arguing for the humanity of people everyone else had discarded.",
    quote: "Each of us is more than the worst thing we’ve ever done. If someone tells a lie, they’re not just a liar. If someone takes something, they’re not just a thief. Even if you kill someone, you’re not just a killer.",
  },
  {
    name: "Martin Luther King Jr.",
    years: "1929–1968",
    role: "Prophet of the beloved community",
    body: "King was first a Baptist preacher and theologian before he was a civil rights leader, and it shows in every line of his writing. His vision of the “beloved community” was explicitly eschatological — drawn from Revelation’s picture of every tribe and tongue gathered in worship — and his critique of the white church was not political but pastoral. The “Letter from Birmingham Jail” is one of the great documents of Christian ethics in American history, addressed not to politicians but to white moderates and white clergymen who counseled patience without urgency. King’s demand was simple: the church must be the conscience of the state, not its chaplain. He was assassinated at thirty-nine, but his theology of nonviolent resistance rooted in agape love remains the most coherent Christian framework for engagement with racial injustice that America has produced.",
    quote: "The church must be reminded that it is not the master or the servant of the state, but rather the conscience of the state. It must be the guide and the critic of the state, and never its tool.",
  },
  {
    name: "John Perkins",
    years: "b. 1930",
    role: "Pioneer of reconciliation and community development",
    body: "Perkins grew up in rural Mississippi in grinding poverty, watched his brother killed by a white deputy sheriff, and fled north to California. He became a Christian in his twenties, felt called back to Mississippi, and then — in a moment that defies human logic — was beaten nearly to death by white law enforcement officers in 1970 and chose to forgive them and remain in the South preaching reconciliation for the rest of his life. His three Rs of Christian community development — relocation, reconciliation, and redistribution — have shaped a generation of practitioners who believe the gospel must be embodied in economically and racially broken communities. Perkins is now in his nineties and has never stopped. His life is the most compelling argument in American Christianity that racial reconciliation is possible, because it is the fruit of a man who had every human reason for rage and chose love.",
    quote: "Love is the final fight.",
  },
  {
    name: "Latasha Morrison",
    years: "b. 1970",
    role: "Founder of Be the Bridge",
    body: "Morrison founded Be the Bridge in 2016 as a practical discipleship resource for multiethnic reconciliation in the local church, and her book of the same name has become one of the most widely used guides in that space. Her approach is distinctive: she centers the experiences of people of color, insists on listening before problem-solving, and frames reconciliation as a long spiritual journey rather than a program or an event. Morrison is particularly helpful in naming the dynamics of white fragility — the defensiveness that shuts down honest conversation — and in giving white Christians a practical pathway to move from awareness to engagement. Be the Bridge groups now operate in thousands of churches and organizations across the country, doing the slow, unglamorous work of building cross-racial understanding one conversation at a time.",
    quote: "Reconciliation is not a moment. It is a lifestyle. It is choosing, over and over again, to pursue relationship across racial lines even when it is uncomfortable, even when you make mistakes, even when it costs you something.",
  },
  {
    name: "Esau McCaulley",
    years: "b. 1984",
    role: "Scholar of Black Christian exegesis",
    body: "McCaulley is a New Testament scholar and Anglican priest whose book Reading While Black: African American Biblical Interpretation as an Exercise in Hope argues that Black Christians have been reading the Bible for justice for centuries, and that their interpretive tradition is a gift to the whole church rather than a sectarian grievance. He demonstrates, passage by passage, that the biblical text supports the concerns of the Black church — for justice, dignity, liberation, and hope in the face of suffering — not despite rigorous exegesis but because of it. McCaulley models a mode of theological engagement that is simultaneously academically serious and pastorally urgent, and his work gives theological grounding to Christians who have long intuited that the gospel has something to say about race but have lacked the exegetical vocabulary to say it clearly.",
    quote: "The Black church tradition says there is a God who sees our suffering and cares. That is not a political statement. That is the gospel.",
  },
];

const scriptures = [
  {
    ref: "Acts 17:26",
    text: "From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands.",
    note: "Paul’s declaration of monogenism — the whole human family from one blood — is the theological demolition of every hierarchy built on race. Our shared origin is the ground of our shared dignity.",
  },
  {
    ref: "Genesis 1:26-27",
    text: "Then God said, “Let us make mankind in our image, in our likeness…” So God created mankind in his own image, in the image of God he created them; male and female he created them.",
    note: "Every human being bears the imago Dei without qualification. Racial contempt is theological sin — it despises the image of the Creator stamped on the face of the neighbor.",
  },
  {
    ref: "Galatians 3:28",
    text: "There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.",
    note: "The most explosive social declaration in the New Testament. The dividing walls of ethnicity, class, and gender have been abolished in Christ — which means the church that reconstructs them contradicts its own gospel.",
  },
  {
    ref: "Revelation 7:9",
    text: "After this I looked, and there before me was a great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.",
    note: "Heaven is multiethnic by design. Ethnic and cultural diversity is not erased in the new creation but gathered and redeemed. The multiethnic church is a foretaste of this promise.",
  },
  {
    ref: "Ephesians 2:14-16",
    text: "For he himself is our peace, who has made the two groups one and has destroyed the barrier, the dividing wall of hostility, by setting aside in his flesh the law with its commands and regulations. His purpose was to create in himself one new humanity out of the two, thus making peace, and in one body to reconcile both of them to God through the cross.",
    note: "The cross accomplishes horizontal reconciliation — between peoples — as well as vertical reconciliation with God. Racial reconciliation is not a supplement to the gospel; it is embedded in it.",
  },
  {
    ref: "Micah 6:8",
    text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.",
    note: "The prophetic summons to justice is not optional for the people of God. Racial justice is one of the most urgent contemporary applications of this ancient command.",
  },
];

const videos = [
  { videoId: "O9AiKI9V8dk", title: "The Christian Response to Racism" },
  { videoId: "9RMCcIxdMq8", title: "Jemar Tisby: The Color of Compromise" },
  { videoId: "fB9XTJM7JkM", title: "Bryan Stevenson on Justice and Mercy" },
  { videoId: "oNQZsGNd2io", title: "John Perkins on Racial Reconciliation" },
  { videoId: "GDnCnI-27Ys", title: "Latasha Morrison: Be the Bridge" },
  { videoId: "2JEGbKT4C28", title: "Esau McCaulley: Reading While Black" },
];

const relatedPages = [
  { href: "/christian-poverty", label: "Christian Response to Poverty" },
  { href: "/justice", label: "Justice" },
  { href: "/lament", label: "Lament" },
  { href: "/image-of-god-guide", label: "Imago Dei" },
  { href: "/race-reconciliation", label: "Reconciliation" },
  { href: "/theology-of-the-church", label: "The Church" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianRacismPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RCMEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [biasRecognized, setBiasRecognized] = useState("");
  const [stepTowardReconciliation, setStepTowardReconciliation] = useState("");
  const [prayerForUnity, setPrayerForUnity] = useState("");

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
    if (!biasRecognized.trim()) return;
    const entry: RCMEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      biasRecognized: biasRecognized.trim(),
      stepTowardReconciliation: stepTowardReconciliation.trim(),
      prayerForUnity: prayerForUnity.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setBiasRecognized("");
    setStepTowardReconciliation("");
    setPrayerForUnity("");
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
            background: AMBER + "22",
            color: AMBER,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Justice &amp; Reconciliation
          </span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          One Blood: The Christian Response to Racism
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          &ldquo;From one blood he made all nations&rdquo; (Acts 17:26). Every human being carries the image of God
          &mdash; the only race that finally matters. Yet the church has a long history of complicity with racial
          injustice, and the gospel demands honest reckoning before genuine reconciliation is possible.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide traces the biblical foundations of racial equality, the church&rsquo;s painful history,
          and the multiethnic vision of Revelation 7:9 &mdash; every tribe, tongue, people, and nation gathered
          before the Lamb.
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
                borderColor: tab === t.id ? AMBER : BORDER,
                background: tab === t.id ? AMBER + "22" : "transparent",
                color: tab === t.id ? AMBER : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              A Theology of Race and Reconciliation
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Nine movements through Scripture &mdash; from the one blood of Acts 17 to the call to lament before
              solution &mdash; building the theological case that racial justice is a gospel issue.
            </p>
            {theologySections.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: AMBER, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.body}</p>
              </div>
            ))}
            <div style={{ background: AMBER + "11", border: `1px solid ${AMBER}44`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: AMBER, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Thread That Ties It Together
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                From the first chapter of Genesis to the last chapter of Revelation, Scripture tells a single story:
                every human being is made in the image of God, from one blood, and the work of Christ is to gather
                every divided people into one new humanity. Racism is not merely a social evil but a theological one
                &mdash; and the church&rsquo;s call to racial reconciliation is not a political program but a gospel
                obligation.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Practices of Racial Reconciliation
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Reconciliation is not a moment but a lifestyle. These six practices form the habits of listening,
              learning, and loving across racial lines.
            </p>
            {practices.map((p, i) => (
              <div key={p.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  background: AMBER + "22",
                  color: AMBER,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Voices on Race and Reconciliation
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six figures &mdash; historians, lawyers, prophets, pastors, organizers, and scholars &mdash; whose
              work illuminates the church&rsquo;s call to racial justice and reconciliation.
            </p>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: AMBER, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.role}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${AMBER}`,
                  background: AMBER + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: "0 0 0.25rem" }}>
              Scripture on Race and Reconciliation
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six anchor texts from the creation mandate to the eschatological vision of Revelation &mdash; read
              slowly, pray carefully, and let the weight of each land.
            </p>
            {scriptures.map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: AMBER, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${AMBER}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{ background: AMBER + "11", border: `1px solid ${AMBER}44`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice:</strong> read Acts 17:26 and Revelation 7:9 together
                as a pair &mdash; the declaration at the beginning (one blood, one origin) and the vision at the end
                (every tribe gathered). Let the distance between where we are and where we are going move you to
                both lament and hope.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: 0 }}>
              Reconciliation Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Name a racial bias you have recognized &mdash; in yourself or in the society around you &mdash; a
              step you have taken toward reconciliation, and a prayer for unity. Entries are saved privately in your
              browser.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="rcm-bias" style={labelStyle}>A racial bias I have recognized</label>
                <textarea
                  id="rcm-bias"
                  value={biasRecognized}
                  onChange={e => setBiasRecognized(e.target.value)}
                  rows={2}
                  placeholder="e.g. I noticed I cross the street when I see certain people; I realized my church has never had a leader of color; I assumed someone wasn&rsquo;t qualified based on appearance..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Honest recognition &mdash; in yourself or in society &mdash; is the beginning of change. Name it specifically.</p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="rcm-step" style={labelStyle}>A step I have taken toward reconciliation</label>
                <textarea
                  id="rcm-step"
                  value={stepTowardReconciliation}
                  onChange={e => setStepTowardReconciliation(e.target.value)}
                  rows={2}
                  placeholder="e.g. I read The Color of Compromise; I attended a Be the Bridge group; I had a hard conversation with a friend; I advocated for a policy change..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Small steps are not small. Name what you actually did, not what you plan to do.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="rcm-prayer" style={labelStyle}>A prayer for unity</label>
                <textarea
                  id="rcm-prayer"
                  value={prayerForUnity}
                  onChange={e => setPrayerForUnity(e.target.value)}
                  rows={2}
                  placeholder="e.g. Lord, break down the walls I have built; make your church look like Revelation 7:9; give me eyes to see the image of God in every face..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Pray specifically. Vague prayers for &ldquo;unity&rdquo; slip past us; named prayers anchor us.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!biasRecognized.trim()}
                style={{
                  background: biasRecognized.trim() ? AMBER : BORDER,
                  color: biasRecognized.trim() ? "#07070F" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: biasRecognized.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Begin your record of recognition and reconciliation above.
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
                        <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Bias Recognized
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.biasRecognized}</p>
                      </div>
                      {entry.stepTowardReconciliation && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Step Toward Reconciliation
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.stepTowardReconciliation}</p>
                        </div>
                      )}
                      {entry.prayerForUnity && (
                        <div>
                          <div style={{ color: AMBER, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Prayer for Unity
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem", fontStyle: "italic" }}>{entry.prayerForUnity}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: AMBER, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching and testimony on race, reconciliation, justice, and the church&rsquo;s call to be the
              multiethnic community Revelation 7:9 envisions.
            </p>
            {videos.map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>{v.title}</h3>
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
              >
                {r.label}
              </Link>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, marginTop: "1.5rem", maxWidth: 660 }}>
            &ldquo;From every nation, tribe, people and language&rdquo; &mdash; this is the church God is building.
            The work of racial reconciliation is hard, slow, and costly. It is also the work of the gospel, and it
            is already finished in Christ. We labor now toward what is already true.
          </p>
        </div>
      </main>
    </div>
  );
}
