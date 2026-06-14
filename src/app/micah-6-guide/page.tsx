"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Lord Has a Case Against Israel",
  "What Shall I Bring Before God",
  "Act Justly Love Mercy Walk Humbly",
  "The Meaning of Justice",
  "The Meaning of Mercy",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Lord Has a Case Against Israel",
    heading: "The Lord Has a Case Against Israel",
    reference: "Micah 6:1&ndash;5",
    paragraphs: [
      "Micah 6 opens with a dramatic scene unlike almost anything else in the prophetic literature. God himself is calling the mountains and hills as witnesses &mdash; indeed, the very foundations of the earth &mdash; to hear a legal case. &ldquo;Arise, plead your case before the mountains, and let the hills hear your voice. Hear, O mountains, the controversy of the Lord, and you enduring foundations of the earth, for the Lord has a controversy with his people, and he will contend with Israel&rdquo; (6:1&ndash;2). The word translated &ldquo;controversy&rdquo; or &ldquo;case&rdquo; is the Hebrew word <em>rib</em>, a legal term for a covenant lawsuit. God is not simply expressing displeasure; he is formally bringing a charge against his covenant people, and he is doing so before the highest tribunal imaginable.",
      "What is extraordinary about this lawsuit is the posture God adopts. He is not merely the prosecutor; he sounds more like a wounded friend demanding explanation. &ldquo;O my people, what have I done to you? How have I wearied you? Answer me!&rdquo; (6:3). The question is not rhetorical bravado; it carries genuine grief. The Creator of heaven and earth, the Lord of all history, is asking his people to name their grievance. If there is some burden he has laid on them, some hardship he has required of them, he wants to hear it. The tone invites the accused to speak &mdash; and by doing so, it exposes the silence that follows as inexcusable.",
      "God then does something remarkable: he rehearses his own record of faithfulness. &ldquo;For I brought you up from the land of Egypt and redeemed you from the house of slavery, and I sent before you Moses, Aaron, and Miriam&rdquo; (6:4). The Exodus stands as the foundational event of Israel&rsquo;s national identity and spiritual life. It was an act of pure grace &mdash; God heard the cry of slaves who had no claim on him, stooped down in sovereign power, and redeemed them at the cost of judgment on Egypt. He gave them not just freedom but leadership: Moses the lawgiver, Aaron the priest, Miriam the prophetess. The provision was comprehensive.",
      "The lawsuit then recalls the episode of Balak and Balaam, a story where Israel was completely unaware that God was working on their behalf. Balak, king of Moab, had hired the prophet Balaam to curse Israel, but &ldquo;what Balaam the son of Beor answered him&rdquo; turned out to be a string of blessings (6:5). Israel did nothing. God simply refused to allow his people to be cursed. Every attempt Balaam made became a blessing, and Israel marched on without ever knowing how God had shielded them. The point is that God&rsquo;s faithfulness extends even to battles fought invisibly, to curses turned to blessings behind the scenes.",
      "The phrase &ldquo;remember what happened from Shittim to Gilgal, that you may know the righteous acts of the Lord&rdquo; (6:5) summarizes the entire case. Shittim was the last encampment east of the Jordan; Gilgal was the first camp in Canaan after the miraculous crossing. The entire journey from slavery in Egypt to settlement in the Promised Land was a display of God&rsquo;s &ldquo;righteous acts&rdquo; &mdash; his <em>tsidqot</em>, his saving deeds of covenant loyalty. God is not angry in the abstract; he is heartbroken that a people so loved and so delivered have turned away.",
      "The prophetic lawsuit form here carries enormous theological weight. The covenant relationship between God and Israel was like a marriage, like a father with his children, like a king with his subjects &mdash; and it was grounded in a history of divine initiative and human reception. When Israel abandoned God for idols, they were not simply breaking rules; they were betraying a relationship built on decades of divine faithfulness. The mountains listen because the history of redemption is a matter of cosmic significance. The God who made the heavens and the earth has loved this particular people, and they have spurned him. The legal language of <em>rib</em> is itself an act of mercy: God is giving Israel one more chance to answer before judgment falls.",
    ],
  },
  {
    id: "What Shall I Bring Before God",
    heading: "What Shall I Bring Before God",
    reference: "Micah 6:6&ndash;7",
    paragraphs: [
      "The legal case shifts suddenly from accusation to question. Apparently stung by God&rsquo;s recitation of his faithful acts, someone in the congregation &mdash; perhaps a representative Israelite, perhaps a priest, perhaps the prophet himself speaking in the voice of a penitent &mdash; asks the most urgent of all religious questions: &ldquo;With what shall I come before the Lord, and bow myself before God on high? Shall I come before him with burnt offerings, with calves a year old?&rdquo; (6:6). The question is earnest. It is not cynical. It has the ring of genuine spiritual searching: I know that something is wrong between me and God; I want to make it right; what will it take?",
      "The ancient world assumed that divine favor was purchasable, that the way to placate an offended deity was through the escalation of sacrifice. The questioner here follows exactly that logic, and the escalation is dramatic. Perhaps a year-old calf is not enough. &ldquo;Will the Lord be pleased with thousands of rams, with ten thousands of rivers of oil?&rdquo; (6:7). Thousands of rams would represent a fortune. Ten thousand rivers of oil would be an impossible quantity, utterly beyond the resources of any human being. The quantities have become absurd, but that is the point: the questioner is trying to find the price point at which God will be satisfied. He is treating the covenant relationship as a transaction.",
      "The escalation reaches its darkest and most disturbing possibility: &ldquo;Shall I give my firstborn for my transgression, the fruit of my body for the sin of my soul?&rdquo; (6:7). Child sacrifice was practiced by the surrounding nations &mdash; Molech worship involved passing children through fire &mdash; and apparently some Israelites had adopted this horror. The question here is not a casual suggestion; it is the ultimate expression of the transactional religious mindset carried to its logical end. If quantities of animals are not enough, what about the most precious thing a person possesses? The very syntax of the question exposes how distorted the underlying theology has become.",
      "The prophet&rsquo;s genius in these two verses is to let the questioner run all the way to the edge of the cliff before answering. By the time we reach the offer of a firstborn child, we have seen the full shape of what religion without relationship looks like: an anxious, escalating attempt to buy off an angry deity by offering ever more expensive things. But the God of Micah is not a deity to be bought. He is not pleased by the sheer volume of sacrifice. The very notion that &ldquo;rivers of oil&rdquo; or thousands of rams would address the covenant problem betrays a fundamental misunderstanding of what the problem actually is.",
      "There is also a pastoral note here that is easy to miss. The questions in verses 6 and 7 are not stupid questions; they are the questions of a sincere but misdirected heart. The person asking them genuinely wants to come before the Lord, genuinely wants to bow down before God on high, genuinely feels the weight of transgression. The problem is not that they don&rsquo;t care about God; the problem is that they have reduced God to the kind of being who can be satisfied by external offerings. This is the religious problem that the prophets return to again and again: not atheism, but a distorted and ultimately self-serving understanding of what God actually wants.",
      "The contrast that verse 8 is about to draw is not between religion and irreligion, but between two kinds of religion: one that is fundamentally transactional and external, and one that is fundamentally relational and internal. The God who has rehearsed his saving acts in verses 3 through 5 is not looking for more sacrifices; he is looking for a people whose hearts have been shaped by those saving acts into something that looks like him. The question of verses 6 and 7 sets up the answer of verse 8 with perfect dramatic economy.",
    ],
  },
  {
    id: "Act Justly Love Mercy Walk Humbly",
    heading: "Act Justly, Love Mercy, Walk Humbly",
    reference: "Micah 6:8",
    paragraphs: [
      "Verse 8 is one of the most celebrated single verses in all of prophetic Scripture, and perhaps in the entire Old Testament. &ldquo;He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?&rdquo; The verse functions as the pivot of the entire chapter and the climax of the prophetic case. After God&rsquo;s rehearsal of his faithfulness and the people&rsquo;s anxious questions about sacrifice, the prophet cuts through all the complexity with three phrases that are at once devastatingly simple and inexhaustibly deep.",
      "The opening phrase &mdash; &ldquo;He has told you, O man, what is good&rdquo; &mdash; is itself significant. It appeals not to priestly instruction or legal code but to something already known. The Hebrew <em>adam</em> is the word for humanity in general, not just Israel. The prophets frequently appeal to moral knowledge that is not the exclusive property of any one nation &mdash; what philosophers would later call natural law. God&rsquo;s requirements are not arbitrary commandments imposed from outside; they flow from the nature of reality, from what human beings already sense, at some level, to be true about right and wrong. The goodness that God requires is not exotic; it is what every human being, made in God&rsquo;s image, knows at some level is right.",
      "The verse then names three things, and the structure is carefully balanced: two actions (&ldquo;do justice&rdquo; and &ldquo;love kindness&rdquo;) and one posture or orientation (&ldquo;walk humbly with your God&rdquo;). The first two describe how one relates to other people; the third describes how one relates to God. Together they cover the whole of human life &mdash; the horizontal and the vertical, the social and the spiritual. What is striking is that the three are presented not as separate categories to balance against each other but as a unified whole. You cannot truly do justice without walking humbly with God; you cannot truly walk humbly with God without loving mercy; they are the three dimensions of a single integrated life.",
      "It is worth pausing over what the verse does not say. It does not say &ldquo;perform thousands of burnt offerings.&rdquo; It does not say &ldquo;master the sacrificial system&rdquo; or &ldquo;accumulate religious merit.&rdquo; It does not even say &ldquo;believe the right doctrines,&rdquo; though right doctrine is assumed throughout. The priorities it names are character-based, not performance-based. &ldquo;Do justice&rdquo; is a verb of action; &ldquo;love kindness&rdquo; is a disposition of the heart; &ldquo;walk humbly&rdquo; is an ongoing orientation of the whole life. God is after something that goes all the way down, not something that can be performed on appointed occasions and then set aside.",
      "The Christological dimension of this verse deserves careful attention. Jesus of Nazareth is the one human being who perfectly embodied all three qualities. He is the one who brought justice to the nations without breaking a bruised reed or quenching a smoldering wick (Isaiah 42:3). He is the one who showed mercy beyond all expectation &mdash; eating with sinners, healing lepers, weeping at Lazarus&rsquo;s tomb, forgiving from the cross. And he is the one who described himself as &ldquo;gentle and lowly in heart&rdquo; (Matthew 11:29), whose walk with the Father was so complete that he could say, &ldquo;I always do what pleases him&rdquo; (John 8:29). Micah 6:8 is not merely a moral programme; it is a portrait of the Messiah, and in him it becomes possible for human beings to become what it describes.",
      "The early church saw in the triad of Micah 6:8 a summary of the entire law of love. Augustine, interpreting through the lens of the two great commandments, noted that love of God (walking humbly) and love of neighbor (doing justice and loving kindness) were precisely what Micah named. The Reformers returned to this verse to argue that true religion was inseparable from public ethics &mdash; that a faith that produced no justice in the marketplace and no mercy toward the poor was not the faith the prophets recognized. In our own time, the verse has become a touchstone for conversations about social justice and personal piety, and its enduring relevance testifies to the accuracy of its diagnosis: the human tendency is always to substitute external religious performance for the inward transformation of character.",
    ],
  },
  {
    id: "The Meaning of Justice",
    heading: "The Meaning of Justice",
    reference: "Micah 6:8a &mdash; <em>Mishpat</em>",
    paragraphs: [
      "The first of the three great requirements is &ldquo;to do justice&rdquo; &mdash; in Hebrew, <em>asot mishpat</em>. The word <em>mishpat</em> appears more than four hundred times in the Old Testament and carries a range of meanings that our English word &ldquo;justice&rdquo; only partially captures. At its most basic, <em>mishpat</em> refers to what is right in any given situation &mdash; the outcome or decision that accurately reflects the moral weight of the case. In legal contexts it refers to a court verdict; in social contexts it refers to the treatment people are owed by virtue of their humanity and their standing within the covenant community.",
      "The prophets use <em>mishpat</em> especially in connection with the vulnerable: widows, orphans, sojourners, and the poor. Amos thunders that justice is being &ldquo;turned into wormwood&rdquo; (Amos 5:7) when the courts favor the wealthy and the poor are trampled. Isaiah declares that God is offended by solemn assemblies whose worshipers oppress the poor &mdash; &ldquo;learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow&rsquo;s cause&rdquo; (Isaiah 1:17). Jeremiah defines knowing God in terms of doing justice: &ldquo;He judged the cause of the poor and needy; then it was well. Is not this to know me? declares the Lord&rdquo; (Jeremiah 22:16). In the prophetic imagination, justice toward the vulnerable is not a political opinion; it is a theological indicator of whether one actually knows God.",
      "The phrase &ldquo;to do justice&rdquo; in Micah 6:8 is an active verb &mdash; it is not merely a sentiment or a preference but an action. <em>Mishpat</em> has to be done; it requires getting involved in the concrete situations where people are being wronged and doing something about it. This is what distinguishes biblical justice from mere legal formalism. The judges and officials of Israel were repeatedly called not just to adjudicate fairly but to actively seek out the cases of the vulnerable, to go looking for the widows and orphans who had no one to speak for them. Justice in the biblical sense is proactive, not passive.",
      "The social dimension of <em>mishpat</em> also has an economic face. The prophets were keenly aware that economic arrangements could be structured in ways that systematically disadvantaged the poor. They condemned false weights and measures (Amos 8:5), the seizure of land from small farmers (Micah 2:1&ndash;2), the charging of interest that trapped the poor in debt, and the delay of wages owed to day laborers. These were not simply individual sins; they were structural injustices &mdash; patterns in the economic life of society that violated <em>mishpat</em>. To do justice meant to refuse to participate in these structures and to work to change them.",
      "At its deepest level, <em>mishpat</em> is rooted in the character of God himself. &ldquo;The Lord is a God of justice&rdquo; (Isaiah 30:18) &mdash; justice is not an external standard that God conforms to; it flows from who he is. He is the God who sees the widow and the orphan, who hears the cry of the poor, who judges the earth with righteousness. When human beings do justice, they are imaging God &mdash; reflecting outward, in their treatment of other people, what God is like inward. This is why justice and worship are inseparable in the prophets: to truly worship a just God is to be transformed by that God into a person who does justice. A worshiper who oppresses the poor is worshiping a god of their own imagination, not the God of Scripture.",
      "The New Testament deepens this understanding rather than departing from it. James, the brother of Jesus, famously declares that &ldquo;pure religion and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world&rdquo; (James 1:27). Jesus declares woe on the Pharisees who tithe mint and dill and cumin but have &ldquo;neglected the weightier matters of the law: justice and mercy and faithfulness&rdquo; (Matthew 23:23). These weightier matters are precisely Micah&rsquo;s three requirements. Jesus is not setting aside the law but fulfilling it, calling his people back to the heart of what God has always required. And in his own ministry, he enacts <em>mishpat</em> supremely &mdash; bringing good news to the poor, proclaiming release to the captives, setting at liberty those who are oppressed (Luke 4:18).",
    ],
  },
  {
    id: "The Meaning of Mercy",
    heading: "The Meaning of Mercy",
    reference: "Micah 6:8b&ndash;c &mdash; <em>Hesed</em> and <em>Halak</em>",
    paragraphs: [
      "The second requirement of Micah 6:8 is &ldquo;to love kindness&rdquo; &mdash; <em>ahavat hesed</em> in Hebrew. The word <em>hesed</em> is one of the richest and most difficult to translate in the entire Hebrew Bible. English versions render it as &ldquo;lovingkindness,&rdquo; &ldquo;steadfast love,&rdquo; &ldquo;mercy,&rdquo; &ldquo;covenant love,&rdquo; or simply &ldquo;kindness.&rdquo; None of these fully captures what the word conveys. At its heart, <em>hesed</em> is the quality of loyal, committed love that goes beyond what is strictly required &mdash; the kind of love that persists when the relationship would justify withdrawal, that gives more than it technically owes, that is characterized by faithfulness and generosity simultaneously.",
      "<em>Hesed</em> is above all God&rsquo;s word for himself. When Moses asks to see God&rsquo;s glory, God proclaims his name: &ldquo;The Lord, the Lord, a God merciful and gracious, slow to anger, and abounding in steadfast love (<em>hesed</em>) and faithfulness&rdquo; (Exodus 34:6). This self-disclosure is echoed more than twenty times in the Old Testament &mdash; it is the most frequently repeated description of God in the entire Hebrew Bible. <em>Hesed</em> is what God is. When Micah requires Israel to &ldquo;love <em>hesed</em>,&rdquo; he is requiring them to cultivate in their own hearts and practices the quality that defines God&rsquo;s own character. It is an invitation to become like God.",
      "Notice that the requirement is not merely to &ldquo;do&rdquo; kindness but to &ldquo;love&rdquo; it. The distinction is profound. It is possible to perform acts of mercy while resenting them &mdash; to help a neighbor under obligation while wishing you did not have to. That is not <em>hesed</em>. <em>Hesed</em> is mercy that flows from a heart that has been shaped by love, mercy that is genuinely desired rather than merely performed. The prophets and wisdom writers were deeply concerned not just with outward behavior but with the condition of the heart that produces it. &ldquo;Love <em>hesed</em>&rdquo; means to have such a disposition of loyal, generous love toward others that acts of mercy are the natural overflow of who you have become.",
      "The relationship between <em>hesed</em> and <em>mishpat</em> is crucial. Justice and mercy are sometimes imagined as opposites &mdash; as though giving someone what they deserve (justice) is in tension with showing them more than they deserve (mercy). But the biblical writers do not set them against each other. Justice without mercy becomes harsh and rigid; mercy without justice becomes sentimental and enabling. Together they form the complete picture of right relationship. The God of Micah 6:8 does not ask Israel to choose between doing justice and loving mercy; he asks them to do both, because in the character of the God who made them, these two qualities are perfectly united.",
      "The third requirement, &ldquo;walk humbly with your God,&rdquo; uses the Hebrew verb <em>halak</em>, which simply means to walk or to go. Walking is the biblical metaphor for the whole of one&rsquo;s life and conduct &mdash; the way one moves through the world day by day. The modifier &ldquo;humbly&rdquo; translates a word that appears only twice in the Hebrew Bible, suggesting a quality of discretion, modesty, or unpretentiousness. To walk humbly with God is not primarily an emotion; it is an orientation of the entire life that takes its bearings from God rather than from one&rsquo;s own ambitions, reputation, or desires.",
      "The phrase &ldquo;with your God&rdquo; is the key to the whole verse. It is not enough to walk humbly in some general philosophical sense &mdash; to be modest or unpretentious as a personal style. The humility Micah calls for is specifically relational: it is a humility that is shaped by the recognition of who God is and who we are in relation to him. God is infinite, eternal, all-knowing, all-powerful, perfectly holy and perfectly loving; we are finite, fallen, limited, and dependent. To walk humbly with God is to live in the continuous awareness of this reality &mdash; not as a crushing burden but as a liberating truth. The person who walks humbly with God is freed from the crushing need to be right all the time, to control outcomes, to manage their own reputation, because all of those burdens rest on shoulders infinitely stronger than their own.",
      "Together the three requirements of Micah 6:8 describe a person whose inward life has been transformed by encounter with the living God and whose outward life reflects that transformation in every dimension: in how they treat the vulnerable (<em>mishpat</em>), in the quality of love they bring to all relationships (<em>hesed</em>), and in the God-oriented posture that underlies everything they do (<em>halak</em>). This is not a program of self-improvement; it is a description of what human beings look like when they have been genuinely changed by the God who brought Israel out of Egypt &mdash; and who, in Christ, has made that same transforming grace available to all who come to him.",
    ],
  },
];

const videoItems = [
  { videoId: "S_1VgBgmAJo", title: "BibleProject - Book of Micah Overview" },
  { videoId: "3ZeOkJv7Oko", title: "Micah 6:8 - Do Justice Love Mercy Walk Humbly Explained" },
  { videoId: "1IjSBpRpDkM", title: "What Does the Lord Require of You - Micah 6 Study" },
  { videoId: "xvlFPFEhm2A", title: "Hesed - The Hebrew Word for Steadfast Love" },
];

export default function Micah6GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Micah 6
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The great prophetic question and answer &mdash; God&rsquo;s covenant lawsuit against Israel, the futility of transactional religion, and the climactic word of Micah 6:8: to do justice, love mercy, and walk humbly with your God.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Micah 6 through visual teaching on the prophetic lawsuit, the meaning of <em>mishpat</em> and <em>hesed</em>, and what it means to walk humbly with God.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>What Does the Lord Require of You?</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Micah 6:8 is not a burden but a liberation &mdash; cutting through the anxiety of transactional religion to reveal what God has always wanted: a people shaped by his own character, doing justice because he is just, loving mercy because he abounds in <em>hesed</em>, and walking humbly because he alone is God.
          </p>
        </div>
      </main>
    </div>
  );
}
