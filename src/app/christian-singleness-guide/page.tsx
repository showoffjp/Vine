"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";
const GOLD = "#D97706";

const STORAGE_KEY = "vine_singleness_entries";

interface SglEntry {
  id: string;
  date: string;
  reflection: string;
  scripture: string;
  freedom: string;
}

const theologySections = [
  {
    title: "Jesus Was Single",
    color: TEAL,
    ref: "Matthew 19:12; Luke 2:49",
    body: "The most decisive fact in any Christian theology of singleness is one that is rarely stated directly: Jesus of Nazareth was a single person. He lived his entire adult ministry as an unmarried man. He had no wife, no children, no household of his own. He taught from borrowed boats and slept under the open sky. When his mother pressed him to act at Cana, he replied with a gentle distance: that was no longer the primary relational claim on his life (John 2:4). When his family came to take him home, he pointed to his disciples: these are my mother and brothers (Mark 3:33-35). This is not incidental biographical detail. Jesus did not merely happen to be single the way a person might happen to be left-handed. He was the perfect human being — the second Adam, the image of God incarnate — and he was single. This means that singleness is not a deficient form of humanness. It cannot be. The Son of God wore it. Whatever lack singleness involves, it is not a lack of the fullness of humanity.",
  },
  {
    title: "Paul: The Gift of Singleness",
    color: PURPLE,
    ref: "1 Corinthians 7:7-8, 32-35",
    body: "In 1 Corinthians 7, Paul makes the most theologically compressed argument for singleness in the New Testament. He calls singleness a charisma — the same word used for spiritual gifts throughout the letter. He says plainly: I wish that all of you were as I am. Then he clarifies: each has his own gift from God, one of this kind and one of that. He is not claiming universal superiority for singleness, but he is refusing to allow it to be ranked below marriage as a lesser calling. His argument for the single person is specific: the unmarried person is free to be anxious about the things of the Lord — how to please the Lord. The married person is pulled between pleasing the Lord and pleasing the spouse, and this is not presented as a moral failure but as an honest description of the competing claims of faithful marriage. Paul is not anti-marriage; he grounds the theology of marriage in Ephesians 5. But he sees in singleness a freedom of undivided devotion that marriage, by its nature, does not permit.",
  },
  {
    title: "Marriage and Singleness as Signs",
    color: GOLD,
    ref: "Ephesians 5:31-32; Revelation 19:7-9",
    body: "The great insight of Barry Danylak and others working in biblical theology is that both marriage and singleness are signs — enacted parables of the same ultimate reality, but at different moments. Marriage, in Ephesians 5, is a sign of the covenant relationship between Christ and the church: the husband loves as Christ loved; the wife trusts as the church trusts. But singleness, in the eschatological vision of Revelation 19, is the sign of what comes after: the marriage supper of the Lamb, where the distinction between married and unmarried is dissolved in the final reality that all covenant relationship has been pointing toward. Jesus said that in the resurrection, people neither marry nor are given in marriage (Matthew 22:30). Marriage is a penultimate sign; singleness anticipates the ultimate reality. Neither sign is more holy. Both are arrows pointing to the same place. The church that has absorbed the culture's obsession with romantic fulfillment as the apex of human experience has quietly demoted the eschatological witness of the single person — and has diminished its own theological imagination.",
  },
  {
    title: "The Overly Marriage-Focused Church",
    color: "#EF4444",
    ref: "1 Corinthians 12:12-27; Romans 16",
    body: "The contemporary evangelical church has, in many settings, constructed an implicit theology in which marriage is the normative and aspirational form of Christian adulthood. Family ministry is often the largest program. Sermons regularly use spouse and children as the central relational illustrations. Singles ministries, when they exist, can carry the implicit message that their purpose is to help single people become married. The result is that single adults in many churches feel like guests in a community designed for a household shape they do not have. This is a theological failure as much as a pastoral one. The New Testament does not describe the church as a collection of nuclear families. It describes the church as a new family — a household of God in which the primary relational unit is the brotherhood and sisterhood of the baptized, not the biological or legal family. Rodney Stark has documented that it was precisely the early church's countercultural inclusion of single women, widows, and the childless that drove its extraordinary growth. The church that has lost this vision has lost one of its most powerful distinctions.",
  },
  {
    title: "Loneliness vs. Solitude in Singleness",
    color: TEAL,
    ref: "Matthew 14:23; Luke 6:12; Mark 1:35",
    body: "The deepest practical challenge of Christian singleness is not the absence of romantic love but the presence of loneliness — the felt sense of not being known, of returning each night to an empty home, of having no one for whom one is the first person. This is a real and serious difficulty, and it deserves honest acknowledgment rather than spiritual management. But the Christian tradition distinguishes between loneliness and solitude. Loneliness is the pain of unwanted isolation. Solitude is the practice of chosen aloneness in order to be with God. Jesus withdrew regularly into solitude — before major decisions, after demanding ministry, in the early morning before the crowds arrived. Henri Nouwen, himself a celibate priest who wrote with great honesty about loneliness, argued that the movement from loneliness to solitude is one of the most important spiritual conversions available to the single person: not the denial of the loneliness but its transformation, through deliberate practice, into a form of attentiveness to God that the constant presence of others makes difficult. This does not dissolve the loneliness. It gives it a direction.",
  },
  {
    title: "The Celibate Tradition — Anthony, Clare, and Beyond",
    color: PURPLE,
    ref: "Matthew 19:12; Acts 21:9",
    body: "The history of Christian celibacy is one of the most misunderstood chapters of the faith — often dismissed as medieval asceticism or (in Protestant circles) as an unfortunate Catholic detour from biblical faith. But its roots are deep in Scripture. Jesus speaks approvingly of those who have made themselves eunuchs for the sake of the kingdom of heaven (Matthew 19:12). Philip the Evangelist had four unmarried prophetic daughters (Acts 21:9). Anthony of Egypt sold everything, gave it to the poor, and went into the desert in the third century — and the desert fathers and mothers he inspired produced one of the richest traditions of spiritual formation in the history of the church. Clare of Assisi founded the Order of Poor Ladies in the thirteenth century with a radical commitment to poverty and contemplative community that shaped Franciscan life for centuries. In Protestant history, figures like Amy Carmichael devoted lifetimes of unrepeatable missionary service specifically because they were free from the claims of spouse and children. Singleness as deliberate vocation — not merely singleness endured but singleness embraced as a gift for the kingdom — runs from the New Testament through the whole history of the church.",
  },
  {
    title: "Dietrich Bonhoeffer: Singleness and Engagement",
    color: GOLD,
    ref: "Life Together; Letters and Papers from Prison",
    body: "Dietrich Bonhoeffer is a case study in the complexity of Christian singleness. He lived most of his adult life as a single man — pouring himself into the underground seminary at Finkenwalde, writing Life Together (the most important Protestant work on Christian community), and resisting the Nazi regime. At thirty-six, while already imprisoned, he became engaged to Maria von Wedemeyer, eighteen years his junior. They were never able to marry. He was executed at Flossenburg in April 1945, three weeks before Germany surrendered. Their correspondence — Love Letters from Cell 92 — is a document of remarkable tenderness and theological depth. Bonhoeffer experienced both the singular freedom of the single person and the longing of the engaged man who cannot reach his beloved. His theology of community in Life Together was built from the experience of celibate community at Finkenwalde, and its insights about brotherhood, confession, and mutual service are available to any Christian community. His life refused the easy categories: he was neither permanently single nor ever married. He occupied the threshold — and his thought illuminates both sides.",
  },
];

const practices = [
  {
    name: "The Undivided Hour",
    body: "Once a week, give God an hour that you could not give in the same way if you were married. Not an obligatory quiet time compressed into morning routine, but an expansive, unscheduled hour of prayer, Scripture reading, and silence. Use it differently from week to week: one week intercession for people you know, one week lectio divina with a psalm, one week simply sitting in stillness. Paul described the single person as able to give undivided devotion to the Lord (1 Corinthians 7:35). This practice makes that theological claim visible in the shape of your week. The hour is not about spiritual performance — it is a small enactment of the freedom Paul identified as the gift of singleness.",
  },
  {
    name: "Cultivating Family in the Church",
    body: "The New Testament describes Christians as brothers and sisters — not metaphorically but as a claim about the primary relational reality for those who are in Christ. For single people, the practice of cultivating genuine familial relationships within the local church is not optional comfort but theological necessity. Identify two or three households in your church where you can belong on a regular, informal basis — sharing meals, participating in ordinary family life, being a presence without an appointment. This is not charity from married people to single people; it is the church being what it actually is: a new family that crosses the boundaries of the nuclear household.",
  },
  {
    name: "The Solitude Practice",
    body: "Following Jesus and the long tradition of Christian formation, build deliberate solitude into your week — not the passive solitude of an empty apartment but the chosen, intentional solitude of someone going into the desert to meet God. Take a half-day once a month to be alone and silent: away from screens, productivity, and social obligations. Bring only Scripture, a journal, and time. The movement Henri Nouwen describes — from loneliness to solitude — does not happen automatically. It is a discipline acquired slowly, through the repeated practice of going into the silence and finding that God is there. For single people, who have more unscheduled time than married people by definition, the question is not whether to have solitude but whether to let it be empty or to let it be inhabited.",
  },
  {
    name: "Naming and Using the Freedom",
    body: "Make a list of the specific freedoms your singleness permits that would be significantly constrained by marriage and children: geographic mobility, financial flexibility, availability for ministry, depth of friendships, particular forms of service. Then identify one freedom on that list that you are actively wasting and one that you are actively using. The goal is not guilt but intentionality. Paul was not writing 1 Corinthians 7 to make single people feel blessed about their situation; he was making a theological argument about the structure of time and devotion. Use the argument. Every freedom has a corresponding opportunity — and the opportunity, like any gift, can be squandered or invested.",
  },
  {
    name: "Reading the Celibate Tradition",
    body: "Spend six months reading one primary text from the celibate Christian tradition: the Sayings of the Desert Fathers (Apophthegmata Patrum), Thomas Merton's The Seven Storey Mountain, Henri Nouwen's The Genesee Diary, Amy Carmichael's If, or Elisabeth Elliot's Passion and Purity. These are not texts about singleness per se, but they are accounts of lives organized around the freedom of undivided devotion — lives that produced extraordinary depth of soul, breadth of service, and clarity of theological vision. Reading them alongside ordinary evangelical devotional material is disorienting in a productive way: they suggest a form of Christian life that is not organized around romantic fulfillment, family formation, or personal happiness, but around something much older and much larger.",
  },
  {
    name: "Honest Prayer About Loneliness",
    body: "The practice is not to pray away the loneliness but to pray it. Bring the specific loneliness — the returning to an empty apartment, the absence of physical affection, the sense of being peripheral to the communities organized around families — directly to God, without theological management. The psalms of lament give permission for this: they do not resolve the darkness prematurely. Hold the loneliness in one hand and the promise of Psalm 68:6 in the other: God sets the lonely in families. This does not necessarily mean biological families or marriage. It means that God is actively at work providing community for the lonely. Pray for eyes to see where that community is being built around you, and for the humility to receive it when it arrives in forms you did not expect.",
  },
];

const voices = [
  {
    name: "The Apostle Paul",
    years: "c. 5 -- c. 67 AD",
    work: "1 Corinthians 7",
    body: "Paul was almost certainly single during his ministry — he makes a point in 1 Corinthians 9:5 of noting that he does not exercise the right to take a believing wife as other apostles do, implying he could but chooses not to. His argument for singleness in 1 Corinthians 7 is not asceticism — he is not arguing that the body is bad or that marriage is spiritually dangerous. He is making a practical argument about the structure of attention and devotion: the married person is necessarily divided in allegiance between the spouse and the Lord, and this division is not a moral failure but simply the shape of faithful marriage. The single person who understands their freedom as Paul describes it — as charisma, as gift for the kingdom, as a form of eschatological witness — is not enduring a lesser life. They are living a different sign of the same hope.",
    quote: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that. Now to the unmarried and the widows I say: It is good for them to stay unmarried, as I do.",
  },
  {
    name: "Henri Nouwen",
    years: "1932 -- 1996",
    work: "Reaching Out; The Inner Voice of Love",
    body: "Nouwen was a Dutch Catholic priest and one of the most widely read spiritual writers of the twentieth century. He taught at Notre Dame, Yale, and Harvard, but spent the last decade of his life as a pastor to people with intellectual disabilities at the L'Arche Daybreak community in Toronto. He never married and wrote with extraordinary candor about loneliness — his own loneliness, the loneliness of the modern person, and the loneliness that lies at the heart of human existence. His framework for the movement from loneliness to solitude has become one of the most influential contributions to Christian thinking about the inner life. Nouwen did not romanticize singleness, nor did he sentimentalize the celibate life. He insisted on the full weight of the loneliness while pointing toward the transformation available through solitude, community, and prayer. The Inner Voice of Love, written during a period of acute emotional breakdown, is the most honest document he produced — a series of notes written to himself that he published only reluctantly, as a record of how the spiritual life looks from the inside when it is falling apart.",
    quote: "The movement from loneliness to solitude is the beginning of any spiritual life because it is the movement from the restless senses to the restful spirit, from the outward-seeking compulsiveness to the inward-attentive freedom.",
  },
  {
    name: "Barry Danylak",
    years: "b. 1967",
    work: "Redeeming Singleness",
    body: "Danylak is a biblical theologian whose book Redeeming Singleness is the most rigorous contemporary biblical-theological defense of singleness as a positive vocation. He traces the trajectory of singleness through both Testaments — from the apparent theological problem of childlessness in the Old Testament (where offspring was the primary form of covenant blessing and land inheritance) to the New Testament's radical revaluation of singleness as a gift for the kingdom. He shows how Jesus's teaching in Matthew 19:12 (eunuchs for the sake of the kingdom) and Paul's argument in 1 Corinthians 7 are not departures from the Old Testament but its fulfillment: in the new covenant, the primary covenant community is not the biological family but the church, and the primary inheritance is not land but the kingdom of God. Within this framework, the single person is not missing out on covenant blessing — they are living within a form of covenant community that has superseded the old categories.",
    quote: "Singleness in the new covenant is not a theological problem to be solved but a gift to be embraced and a witness to be made.",
  },
  {
    name: "Wesley Hill",
    years: "b. 1981",
    work: "Washed and Waiting; Spiritual Friendship",
    body: "Wesley Hill is a New Testament scholar at Trinity School for Ministry who is also gay and celibate. His two most important books on singleness and friendship approach the subject from a position of lived experience that gives his theology unusual weight. Washed and Waiting is an honest account of what it is to be gay and Christian and committed to celibacy — not as a sad concession but as a genuine vocation, however costly. Spiritual Friendship recovers the category of committed, covenantal same-sex friendship as a form of love that the contemporary church has largely lost the vocabulary to name. Hill draws on Aelred of Rievaulx, C.S. Lewis, and the practice of the early church to argue that the modern evacuation of deep friendship in favor of marriage as the only site of genuine intimacy has impoverished everyone — married and single alike. His work has become foundational for a generation of Christians trying to think carefully about singleness, sexuality, and what it means to belong to one another.",
    quote: "The real tragedy is not that I am gay and celibate but that the church has so often failed to give me the community I need to live that calling well.",
  },
  {
    name: "Amy Carmichael",
    years: "1867 -- 1951",
    work: "If; Things as They Are",
    body: "Amy Carmichael is one of the most remarkable single missionaries in the history of the church. She arrived in India in 1895 and did not return to England for fifty-five years — the longest unbroken missionary tenure of the modern era. She founded the Dohnavur Fellowship, which rescued hundreds of children from temple prostitution. She wrote thirty-five books. She suffered from neuralgia for much of her life and, after a fall in 1931, spent the last twenty years of her ministry largely bedridden — from which she continued to write and lead. She never married. If, her most widely read book, is structured as a series of meditations on love: If I am not willing to be spent, to be poured out, to suffer — then my love is not the love of 1 Corinthians 13 but something smaller. Her life demonstrated what Paul argued in 1 Corinthians 7: that the single person who understands their freedom correctly can give themselves with a totality of devotion that the responsibilities of marriage and family make structurally impossible.",
    quote: "If the praise of others elates me and their blame depresses me, if I cannot rest under misunderstanding without defending myself, then I know nothing of Calvary love.",
  },
];

const scriptures = [
  {
    ref: "1 Corinthians 7:7",
    text: "I wish that all of you were as I am. But each of you has your own gift from God; one has this gift, another has that.",
    note: "Paul calls singleness a charisma — the same Greek word used for spiritual gifts. It is not merely a circumstance to be endured but a gift to be received and used.",
  },
  {
    ref: "Matthew 19:12",
    text: "For there are eunuchs who were born that way, and there are eunuchs who have been made eunuchs by others — and there are those who choose to live like eunuchs for the sake of the kingdom of heaven. The one who can accept this should accept it.",
    note: "Jesus acknowledges three forms of singleness and speaks approvingly of those who choose it for kingdom purposes. This is not a minor pastoral footnote but a substantive teaching.",
  },
  {
    ref: "1 Corinthians 7:32-35",
    text: "I would like you to be free from concern. An unmarried man is concerned about the Lord's affairs — how he can please the Lord. But a married man is concerned about the affairs of this world — how he can please his wife... I am saying this for your own good, not to restrict you, but that you may live in a right way in undivided devotion to the Lord.",
    note: "Paul is not denigrating marriage but honestly describing the competing claims it creates. Undivided devotion is the specific gift that singleness permits.",
  },
  {
    ref: "Psalm 68:6",
    text: "God sets the lonely in families, he leads out the prisoners with singing.",
    note: "The promise is active: God sets, God leads. For the single person navigating loneliness, this is not a passive comfort but a claim about what God is actively doing in the church.",
  },
  {
    ref: "Matthew 22:30",
    text: "At the resurrection people will neither marry nor be given in marriage; they will be like the angels in heaven.",
    note: "Marriage is a penultimate reality. The ultimate reality — the marriage supper of the Lamb — requires no human marriage because it is the fulfillment of everything that human marriage was pointing toward.",
  },
  {
    ref: "Luke 18:29-30",
    text: "Truly I tell you, no one who has left home or wife or brothers or sisters or parents or children for the sake of the kingdom of God will fail to receive many times as much in this age, and in the age to come eternal life.",
    note: "Jesus promises that what is given up for the kingdom — including the relational goods of marriage and family — is returned many times over in the new community of the church.",
  },
];

const videos = [
  {
    videoId: "IVDp1WNTY4k",
    title: "The Gift of Singleness — A Biblical Theology",
    description: "A careful walk through 1 Corinthians 7 and Paul's theology of singleness as charisma — a gift for the kingdom, not a deficiency waiting to be resolved.",
  },
  {
    videoId: "L9gpHNKmvpE",
    title: "Celibacy, Singleness, and the Christian Tradition",
    description: "The history of Christian celibacy from the desert fathers through the Reformation and into the contemporary church — and what evangelicals have lost by ignoring it.",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Single in the Church: Belonging Without Marriage",
    description: "Honest pastoral reflection on what it means to be single in communities designed for families — and what the church must do to become the new family the New Testament describes.",
  },
];

const relatedPages = [
  { href: "/christian-marriage", label: "Christian Marriage" },
  { href: "/christian-friendship-guide", label: "Christian Friendship" },
  { href: "/christian-sexuality", label: "Christian Sexuality" },
  { href: "/christian-identity-guide", label: "Christian Identity" },
  { href: "/contentment", label: "Contentment" },
  { href: "/community-formation", label: "Community Formation" },
];

const tabs = [
  { id: "theology", label: "Theology" },
  { id: "practices", label: "Practices" },
  { id: "voices", label: "Voices" },
  { id: "scripture", label: "Scripture" },
  { id: "journal", label: "Journal" },
  { id: "videos", label: "Videos" },
];

export default function ChristianSinglenessGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SglEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [reflection, setReflection] = useState("");
  const [scripture, setScripture] = useState("");
  const [freedom, setFreedom] = useState("");

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
    if (!reflection.trim()) return;
    const entry: SglEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      reflection: reflection.trim(),
      scripture: scripture.trim(),
      freedom: freedom.trim(),
    };
    setEntries(prev => [entry, ...prev]);
    setReflection("");
    setScripture("");
    setFreedom("");
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
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main id="main-content" style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        {/* Badge */}
        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{
            background: TEAL + "22",
            color: TEAL,
            padding: "0.2rem 0.8rem",
            borderRadius: 20,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            Vocation &amp; Calling
          </span>
        </div>

        {/* Hero */}
        <h1 style={{ fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0" }}>
          Christian Singleness: The Gift the Church Forgot
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 1rem" }}>
          Paul called it a gift. Jesus lived it for thirty-three years. The celibate tradition &mdash; from Anthony
          in the Egyptian desert to Clare of Assisi to Amy Carmichael in India &mdash; has always known that singleness
          is not the waiting room for real life. It is a form of real life, with its own theology, its own freedoms,
          and its own eschatological witness.
        </p>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, maxWidth: 660, margin: "0 0 2rem" }}>
          This guide explores the full biblical and historical theology of Christian singleness &mdash; what Paul
          actually argued in 1 Corinthians 7, why the church&rsquo;s marriage-centeredness is a theological problem,
          the difference between loneliness and solitude, and what a life of undivided devotion looks like in practice.
        </p>

        {/* Key verse callout */}
        <div style={{
          background: TEAL + "11",
          border: `1px solid ${TEAL}44`,
          borderRadius: 14,
          padding: "1.25rem 1.5rem",
          marginBottom: "2rem",
        }}>
          <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.8, margin: "0 0 0.5rem", fontSize: "1rem" }}>
            &ldquo;I wish that all of you were as I am. But each of you has your own gift from God; one has this gift,
            another has that.&rdquo;
          </p>
          <p style={{ color: TEAL, fontWeight: 700, fontSize: "0.85rem", margin: 0 }}>
            &mdash; 1 Corinthians 7:7
          </p>
        </div>

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
                borderColor: tab === t.id ? TEAL : BORDER,
                background: tab === t.id ? TEAL + "22" : "transparent",
                color: tab === t.id ? TEAL : MUTED,
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              A Theology of Christian Singleness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Seven movements through the theology of singleness &mdash; from the single Jesus through Paul&rsquo;s
              theology of the gift, to the celibate tradition and its witnesses.
            </p>
            {theologySections.map(section => (
              <div
                key={section.title}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: "1.5rem 1.75rem",
                  borderLeft: `3px solid ${section.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                  <h3 style={{ color: section.color, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{section.title}</h3>
                </div>
                <div style={{ color: MUTED, fontSize: "0.78rem", fontWeight: 600, marginBottom: "0.75rem", fontStyle: "italic" }}>
                  {section.ref}
                </div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{section.body}</p>
              </div>
            ))}

            {/* Closing synthesis */}
            <div style={{
              background: TEAL + "11",
              border: `1px solid ${TEAL}44`,
              borderRadius: 14,
              padding: "1.5rem 1.75rem",
            }}>
              <h3 style={{ color: TEAL, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
                The Witness Singleness Makes
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>
                Every single Christian, whether or not they have named it as vocation, is making a statement simply by
                being single in a culture that worships romantic fulfillment. The statement is: there is a form of
                life in which God alone is sufficient. There is a form of belonging that does not require a spouse. There
                is a form of love &mdash; for God, for the community, for the stranger &mdash; that does not route
                through romantic partnership. This is not a claim that single people have achieved some spiritual
                superiority. It is a claim about the kingdom: that the kingdom&rsquo;s goods are real, that the
                community of the church is a genuine family, and that the marriage supper of the Lamb is the destination
                toward which all of us &mdash; married and single alike &mdash; are traveling. The single person lives
                closest to that horizon.
              </p>
            </div>
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Practices for the Single Christian
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six practices that give shape to singleness as vocation rather than circumstance &mdash; turning the
              freedom of the single life from something passively experienced into something actively used.
            </p>
            {practices.map((p, i) => (
              <div
                key={p.name}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div style={{
                  background: TEAL + "22",
                  color: TEAL,
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

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.75rem" }}>
                The Single Person&rsquo;s Unique Ministry Freedom
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.75rem", fontSize: "0.95rem" }}>
                Every one of these practices points toward the same underlying reality: the single person has a form
                of freedom that is structurally unavailable to the person with a spouse and children. The freedom is
                not automatic, and it is not always felt as freedom &mdash; it is often felt as absence. But it is
                real. The church that helps its single members name that freedom and invest it &mdash; in prayer, in
                friendship, in service, in learning, in community &mdash; is the church that Paul was describing
                in 1 Corinthians 7.
              </p>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
                Amy Carmichael went to India and stayed for fifty-five years, unburdened by the legitimate claims of
                a husband or children. Henri Nouwen moved into the L&rsquo;Arche community and gave himself to
                people with intellectual disabilities with a totality of presence that his academic career could never
                have permitted. The freedom of singleness, invested well, produces a kind of service that the world
                would not otherwise receive.
              </p>
            </div>
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Voices on Christian Singleness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Five people &mdash; spanning the first century to the twenty-first &mdash; who lived or wrote about
              singleness with theological depth and biographical honesty.
            </p>
            {voices.map(v => (
              <div
                key={v.name}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{v.name}</h3>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{v.years}</span>
                </div>
                <div style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem" }}>{v.work}</div>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem", fontSize: "0.95rem" }}>{v.body}</p>
                <blockquote style={{
                  margin: 0,
                  padding: "0.75rem 1rem",
                  borderLeft: `3px solid ${TEAL}`,
                  background: TEAL + "0E",
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: "0 0 0.25rem" }}>
              Scripture on Singleness
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: "0 0 0.5rem", fontSize: "0.95rem" }}>
              Six texts &mdash; from Paul&rsquo;s argument for the gift of singleness to Jesus&rsquo;s teaching on
              those who embrace celibacy for the kingdom. Read them slowly and with fresh eyes.
            </p>
            {scriptures.map(s => (
              <div
                key={s.ref}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}
              >
                <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1rem", margin: "0 0 0.75rem" }}>{s.ref}</h3>
                <p style={{
                  color: TEXT,
                  lineHeight: 1.8,
                  margin: "0 0 0.9rem",
                  fontSize: "1rem",
                  fontStyle: "italic",
                  borderLeft: `3px solid ${TEAL}`,
                  paddingLeft: "1rem",
                }}>
                  {s.text}
                </p>
                <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>{s.note}</p>
              </div>
            ))}
            <div style={{
              background: TEAL + "11",
              border: `1px solid ${TEAL}44`,
              borderRadius: 14,
              padding: "1.25rem 1.5rem",
            }}>
              <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.92rem" }}>
                <strong style={{ color: TEXT }}>A practice:</strong> read 1 Corinthians 7:25-35 slowly, replacing
                the word &ldquo;unmarried&rdquo; with your own name. Notice what Paul is actually claiming about the
                freedom you have &mdash; and what you are doing with it.
              </p>
            </div>
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Singleness Journal
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Reflect on what singleness is costing you and what it is giving you. Write a Scripture that is shaping
              how you think about it. Name one freedom you are investing and one you are wasting. Entries are saved
              privately in your browser.
            </p>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="sgl-reflection" style={labelStyle}>My honest reflection on singleness right now</label>
                <textarea
                  id="sgl-reflection"
                  value={reflection}
                  onChange={e => setReflection(e.target.value)}
                  rows={3}
                  placeholder="What is it costing you? What is it giving you? What are you feeling that you have not said aloud?"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>
                  Unedited honesty is more useful here than polished theology. Write what is actually true.
                </p>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="sgl-scripture" style={labelStyle}>A Scripture that is speaking to me about singleness</label>
                <textarea
                  id="sgl-scripture"
                  value={scripture}
                  onChange={e => setScripture(e.target.value)}
                  rows={2}
                  placeholder="A verse or passage &mdash; even one you are arguing with rather than agreeing with..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>The Psalms are full of people arguing with God. That counts as Scripture engagement.</p>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="sgl-freedom" style={labelStyle}>A freedom of singleness I am investing (or wasting)</label>
                <textarea
                  id="sgl-freedom"
                  value={freedom}
                  onChange={e => setFreedom(e.target.value)}
                  rows={2}
                  placeholder="Name the freedom specifically &mdash; time, mobility, focus, a relationship, a form of service..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <p style={hintStyle}>Naming a wasted freedom is the first step toward investing it.</p>
              </div>

              <button
                onClick={saveEntry}
                disabled={!reflection.trim()}
                style={{
                  background: reflection.trim() ? TEAL : BORDER,
                  color: reflection.trim() ? "#FFFFFF" : MUTED,
                  border: "none",
                  borderRadius: 10,
                  padding: "0.7rem 1.6rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: reflection.trim() ? "pointer" : "not-allowed",
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
                    No entries yet. Your singleness has permission to be thought through honestly here.
                  </p>
                </div>
              )}

              {loaded && entries.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {entries.map(entry => (
                    <div
                      key={entry.id}
                      style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", position: "relative" }}
                    >
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
                      <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{entry.date}</div>
                      <div style={{ marginBottom: "0.75rem", paddingRight: "4.5rem" }}>
                        <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                          Reflection
                        </div>
                        <p style={{ color: TEXT, margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{entry.reflection}</p>
                      </div>
                      {entry.scripture && (
                        <div style={{ marginBottom: "0.75rem" }}>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Scripture
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.scripture}</p>
                        </div>
                      )}
                      {entry.freedom && (
                        <div>
                          <div style={{ color: TEAL, fontSize: "0.72rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.25rem" }}>
                            Freedom
                          </div>
                          <p style={{ color: MUTED, margin: 0, lineHeight: 1.7, fontSize: "0.92rem" }}>{entry.freedom}</p>
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
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEAL, margin: 0 }}>
              Watch &amp; Reflect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              Teaching on Christian singleness, celibacy, and the theology of undivided devotion &mdash; from
              scholars, pastors, and people who have lived the calling.
            </p>
            {videos.map(v => (
              <div
                key={v.videoId}
                style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}
              >
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "1rem 1.25rem" }}>
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "0.98rem", margin: "0 0 0.35rem" }}>{v.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 700, fontSize: "1rem", margin: "0 0 0.75rem" }}>
                Recommended Reading
              </h3>
              {[
                { title: "Redeeming Singleness", author: "Barry Danylak", note: "The most rigorous biblical-theological account of singleness as a positive vocation in both Testaments." },
                { title: "Washed and Waiting", author: "Wesley Hill", note: "An honest account of gay celibacy as Christian vocation &mdash; theologically careful and biographically specific." },
                { title: "Spiritual Friendship", author: "Wesley Hill", note: "Recovering the category of covenantal friendship as a form of intimacy available to single people." },
                { title: "The Meaning of Singleness", author: "Danielle Treweek", note: "A comprehensive theology of singleness for the contemporary church, from an evangelical perspective." },
                { title: "Reaching Out", author: "Henri Nouwen", note: "The movement from loneliness to solitude, from hostility to hospitality, from illusion to prayer." },
                { title: "If", author: "Amy Carmichael", note: "Meditations on love from one of the greatest single missionaries in the history of the church." },
              ].map(book => (
                <div
                  key={book.title}
                  style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.75rem", marginBottom: "0.75rem" }}
                >
                  <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", alignItems: "baseline" }}>
                    <span style={{ color: TEXT, fontWeight: 700, fontSize: "0.95rem" }}>{book.title}</span>
                    <span style={{ color: MUTED, fontSize: "0.85rem" }}>&mdash; {book.author}</span>
                  </div>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: "0.2rem 0 0" }}>{book.note}</p>
                </div>
              ))}
            </div>
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
            The single person is not waiting to begin their real life. They are living it &mdash; in a form that the
            married person cannot, making a witness that the married person cannot make, with a freedom that belongs
            only to those who have been given this particular gift. The kingdom of God is large enough to hold both
            signs. The church that forgets this has shrunk its theology to fit its cultural preferences.
          </p>
        </div>
      </main>
    </div>
  );
}
