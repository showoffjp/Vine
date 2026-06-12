"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GOLD = "#D97706", TEAL = "#0D9488", BLUE = "#3B82F6", ROSE = "#E11D48";

const TABS = [
  { id: "why", label: "Why Bible Study" },
  { id: "inductive", label: "Inductive Method" },
  { id: "methods", label: "Other Methods" },
  { id: "tools", label: "Essential Tools" },
  { id: "community", label: "Community & Accountability" },
  { id: "videos", label: "Videos" },
];

const WHY_SECTIONS = [
  {
    title: "The Sufficiency of Scripture",
    color: GOLD,
    text: "Second Timothy 3:16&ndash;17 is the foundational text for why Christians study the Bible: &ldquo;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.&rdquo; The doctrine of Scripture&rsquo;s sufficiency does not mean the Bible answers every question we might ask &mdash; it means the Bible provides everything necessary for life and godliness (2 Pet 1:3). This sufficiency creates the motive for serious study: if God has spoken in Scripture, and if that speech is sufficient for our formation, then engaging it carefully is not optional. It is the primary means by which God shapes his people.",
  },
  {
    title: "Reading vs. Studying: The Difference Matters",
    color: BLUE,
    text: "Reading and studying are related but not the same activity. Reading Scripture devotionally &mdash; for encouragement, comfort, and encounter &mdash; is a legitimate and necessary practice. But it is not a substitute for study. When we read, we receive impressions; when we study, we interrogate. The Bereans in Acts 17:11 are held up as exemplars not because they received the word with gladness but because they &ldquo;examined the Scriptures every day to see if what Paul said was true.&rdquo; Their gladness was tested by their diligence. Devotional reading without a foundation of study tends to become a mirror for our existing assumptions rather than a genuinely new word.",
  },
  {
    title: "The Bereans as Model (Acts 17:11)",
    color: TEAL,
    text: "The Bereans &ldquo;received the message with great eagerness and examined the Scriptures every day.&rdquo; Luke calls them &ldquo;more noble&rdquo; than the Thessalonians &mdash; not because they were more learned, but because they submitted even the apostle Paul&rsquo;s preaching to the test of Scripture. This is a remarkable statement: the Berean model is one of active, disciplined, daily engagement with Scripture as the norm for measuring every teaching. The implication is that Christians who do not study the Bible are vulnerable to every wind of doctrine. Daily examination of Scripture is not a scholarly elite practice &mdash; it is the baseline expectation of the new covenant community.",
  },
  {
    title: "Ezra as Prototype (Ezra 7:10)",
    color: GREEN,
    text: "Ezra 7:10 provides the Old Testament model: &ldquo;For Ezra had set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel.&rdquo; The sequence is critical &mdash; study, do, teach &mdash; in that order. Teaching that is not grounded in personal study produces borrowed insights without conviction. Doing that is not grounded in study produces moralism without transformation. Ezra&rsquo;s sequence makes personal engagement with the text the foundation of everything else. The scribe who &ldquo;sets his heart&rdquo; to study has made it a settled priority, not an occasional activity. This is the posture of the serious Bible student.",
  },
  {
    title: "Eisegesis vs. Exegesis: Why It Matters",
    color: ROSE,
    text: "Exegesis means &ldquo;to lead out&rdquo; &mdash; reading out of the text what is actually there. Eisegesis means &ldquo;to lead into&rdquo; &mdash; reading into the text what we bring to it. The danger of eisegesis is not that readers are malicious; it is that they are usually sincere. We bring our culture, our theology, our fears, and our wishes to the text and hear them confirmed. Serious Bible study is the discipline that guards against this &mdash; training readers to slow down, to ask historical and grammatical questions, to let the text resist our expectations. The difference between a Bible that shapes us and a Bible that flatters us is usually a matter of interpretive method.",
  },
  {
    title: "Why Christians Need More Than Devotional Reading",
    color: PURPLE,
    text: "Devotional reading &mdash; reading the Bible for encouragement and spiritual sustenance &mdash; is a good and necessary practice. But it has a built-in limitation: it tends to focus on the parts that feel immediately applicable and to skim the parts that require more interpretive work. The result is a truncated biblical worldview. The neglected portions &mdash; Old Testament law, the prophets, the wisdom literature, the apocalyptic texts, the difficult Pauline passages &mdash; are not devotionally inert; they are formatively essential. Christians who want to mature in their faith and resist false teaching need more than devotional reading. They need the discipline of systematic, methodical engagement with the whole canon.",
  },
];

const INDUCTIVE_SECTIONS = [
  {
    title: "Observation: What Does the Text Say?",
    color: GOLD,
    text: "The first movement of inductive Bible study is observation &mdash; the discipline of noticing what is actually on the page before deciding what it means. Most Bible study failures are failures of observation: readers rush to interpretation and application before they have paid careful attention to what the text says. Skilled observers use the 5 W&rsquo;s and H: Who is speaking? To whom? What is happening? When and where does this occur? Why? How? They note repetition (which indicates emphasis), contrast (but, yet, however), cause and effect (therefore, because, so that), and progression. They mark key words and trace them through the passage. Observation is slow work, but it is irreplaceable: every meaningful interpretive insight comes from something first noticed in observation.",
  },
  {
    title: "Interpretation: What Does the Text Mean?",
    color: BLUE,
    text: "Interpretation asks what the text meant to its original author and audience. The governing principle is context: grammatical context (what do these words mean in this sentence?), historical context (what was happening in the author&rsquo;s world?), literary context (what kind of writing is this?), and canonical context (how does this fit in the whole of Scripture?). Good interpretive questions move from what you observe to what you need to understand: Why does the author use this word here? What did this practice mean in this culture? How does this passage connect to what comes before and after? The interpretive goal is the author&rsquo;s intended meaning &mdash; not what the text means to me, but what the author meant when he wrote it.",
  },
  {
    title: "Application: What Does It Mean for Me?",
    color: GREEN,
    text: "Application is the goal of Bible study, but it is not the starting point. The most common mistake in Bible study is asking &ldquo;What does this mean to me?&rdquo; before doing the work of observation and interpretation. Application built on insufficient exegesis is unstable and often self-serving. When observation and interpretation are done well, application flows naturally. Good application is specific, not generic. &ldquo;I should be more loving&rdquo; is not an application &mdash; it is a vague aspiration. A real application names a specific person, situation, belief, or action: a truth to believe, a sin to confess, a command to obey, a promise to claim. The same text will apply differently in different seasons of life, but it should always land somewhere concrete.",
  },
  {
    title: "Key Skills for Observation",
    color: TEAL,
    text: "Observation skills can be learned and improved. The 5 W&rsquo;s and H provide a basic interrogation framework for any passage. Noting repetition: when an author repeats a word or phrase, he is emphasizing it &mdash; the repeated word is usually the subject of the passage. Noting contrast: &ldquo;but,&rdquo; &ldquo;yet,&rdquo; and &ldquo;however&rdquo; signal shifts that are often theologically significant. Noting cause and effect: &ldquo;therefore,&rdquo; &ldquo;because,&rdquo; &ldquo;so that&rdquo; reveal the logical structure of the author&rsquo;s argument. Marking key words: choose 3&ndash;5 theologically significant words in the passage and trace them. Studying context: always read the paragraph before and after the passage. The verse in isolation is often the most misread form of Scripture.",
  },
  {
    title: "Forming Good Interpretive Questions",
    color: ROSE,
    text: "Interpretive questions bridge the gap between observation and understanding. A good interpretive question is specific (not &ldquo;what does this mean?&rdquo; but &ldquo;why does Paul use the word &lsquo;righteousness&rsquo; here instead of &lsquo;holiness&rsquo;?&rdquo;), answerable from the text or its context, and productive (it leads somewhere). Common sources of interpretive questions: unusual words, surprising claims, unresolved tensions, historical references you do not understand, and apparent contradictions with other passages. Write your interpretive questions before consulting commentaries &mdash; the discipline of forming questions yourself trains the interpretive faculty that commentaries would otherwise short-circuit.",
  },
  {
    title: "Application That Is Specific, Not Generic",
    color: PURPLE,
    text: "The goal of Bible study is not knowing more about the Bible but being changed by what the Bible reveals. Specific application requires courage: it is easier to note that a text is &ldquo;encouraging&rdquo; than to identify exactly what it demands of your life this week. The four categories of application provide a framework: (1) A truth to believe &mdash; something the text reveals about God, humanity, or reality that you are invited to trust; (2) A sin to confess &mdash; a pattern the text exposes as destructive or dishonoring; (3) A command to obey &mdash; a specific action the text calls you to take; (4) A promise to claim &mdash; something God has committed to that you can stand on. Before closing your Bible, write one specific application in one of these four categories.",
  },
];

const METHODS_SECTIONS = [
  {
    title: "SOAP Method",
    color: GOLD,
    text: "SOAP &mdash; Scripture, Observe, Apply, Pray &mdash; is inductive Bible study adapted for daily devotional use. Write out the Scripture passage by hand (the act of writing slows reading down). Record one or two observations &mdash; what stands out, what you notice. Write an application &mdash; how this truth intersects your life today. Close with a prayer that responds to what you read. SOAP is not a full IBS session; it is a daily practice that sustains connection to the text and trains the observational reflex over time. It takes 10&ndash;15 minutes. The danger of SOAP is using it as a substitute for deeper study rather than a complement to it.",
  },
  {
    title: "Lectio Divina for Scripture",
    color: BLUE,
    text: "Lectio divina (divine reading) is an ancient practice of slow, prayerful engagement with a short passage. The four movements are lectio (read the passage slowly, noticing any word or phrase that catches your attention), meditatio (meditate on that word or phrase, letting it interact with your memory, imagination, and experience), oratio (pray in response to what you have received), and contemplatio (rest in God&rsquo;s presence, receiving rather than speaking). Lectio divina is not eisegesis &mdash; it is a different mode of engagement than exegetical study. It is best practiced with passages that have already been studied. It cultivates a posture of receptivity and formation that analytical methods alone cannot provide.",
  },
  {
    title: "Verse Mapping",
    color: TEAL,
    text: "Verse mapping is an intensive method for deep study of a single verse. On a blank page, write the verse in the center. Branch outward: the context (what comes before and after), definitions of key words in the original language (using a concordance or lexicon), cross-references that illuminate the verse, historical background, and your personal application. Verse mapping is particularly valuable for key doctrinal verses because it forces engagement with every element of the verse before synthesizing its meaning. The visual layout helps show relationships between different aspects of the text. It typically takes 30&ndash;60 minutes per verse.",
  },
  {
    title: "Word Studies and Topical Study",
    color: GREEN,
    text: "A word study traces a theologically significant term &mdash; grace, covenant, righteousness, redemption &mdash; across the whole canon. Using a concordance, identify every occurrence of the word, noting how it is used in different contexts and how its meaning develops from the Old Testament to the New. Topical study follows a theme rather than a word: studying prayer, or forgiveness, or the kingdom of God across multiple books and genres. Both methods produce a depth of biblical-theological understanding that passage-by-passage study cannot replicate. The risk is losing the context of individual passages: word and topical studies should complement, not replace, passage study.",
  },
  {
    title: "Biographical Study",
    color: ROSE,
    text: "Biographical study follows a biblical character through all of Scripture, tracing the arc of their life, their failures and faithfulness, and what their story reveals about God. Subjects for productive biographical study include Abraham (faith and doubt), Moses (calling and weakness), David (repentance and consequence), Elijah (triumph and depression), Peter (impulsiveness and restoration), and Paul (conversion and suffering). Biographical study is inherently narrative, which makes it accessible and memorable. It also guards against the tendency to read biblical characters as either heroes without fault or moral failures without redemption.",
  },
  {
    title: "Book Study and the Danger of Method-Hopping",
    color: PURPLE,
    text: "Book study works through an entire biblical book systematically &mdash; from the historical background and authorship, through the book&rsquo;s argument and structure, to passage-by-passage study. Short New Testament books (Philippians, Colossians, James, 1 John) are excellent starting points. Book study produces structural understanding that topical and devotional reading cannot: you begin to see how Paul builds an argument, how narrative tension develops, how a letter answers specific problems. The danger of method-hopping &mdash; trying SOAP for a week, verse mapping for a week, topical study for a week &mdash; is that no method goes deep enough to produce lasting skill. Choose one method and use it consistently for at least three months.",
  },
];

const TOOLS_SECTIONS = [
  {
    title: "Concordances",
    color: GOLD,
    text: "A concordance is an alphabetical index of every word in the Bible with every reference where it appears. Strong&rsquo;s Exhaustive Concordance, keyed to the King James Version, assigns a number to each Hebrew and Greek word, making it possible to identify the original word behind any English translation even without knowledge of the original languages. Strong&rsquo;s is available free online (Blue Letter Bible, BibleHub) and in print. Using a concordance for word studies, tracing themes, and finding parallel passages is one of the most productive Bible study habits a layperson can develop. The concordance turns a Bible reader into a Bible researcher.",
  },
  {
    title: "Bible Dictionaries and Encyclopedias",
    color: BLUE,
    text: "Bible dictionaries provide historical, geographical, and cultural background for people, places, and events in Scripture. The New Bible Dictionary (IVP) is the standard one-volume evangelical reference. For more depth, the Anchor Yale Bible Dictionary (6 volumes) covers critical and evangelical scholarship. The IVP Bible Background Commentary (Old and New Testament, 2 volumes) is particularly valuable for understanding the cultural background of specific passages. These tools answer the historical and cultural questions that arise in interpretation: what was a talent worth? who were the Pharisees? what was the significance of a city gate? Background knowledge does not replace exegesis but informs it.",
  },
  {
    title: "Word Study Tools",
    color: TEAL,
    text: "Word study tools allow readers to examine the original Hebrew and Greek words behind English translations. Blue Letter Bible (blueletterbible.org) is the best free online resource: clicking on any word in a verse shows the original language word, its Strong&rsquo;s number, its range of meanings, and every occurrence in Scripture. Logos Bible Software and Accordance are the professional-grade platforms that provide access to lexicons, morphological search, and original language texts. For laypersons without Greek or Hebrew, the Expository Dictionary of New Testament Words (W.E. Vine) provides accessible original language study. The caution: word study tools can produce overly narrow or anachronistic readings when used without understanding of context.",
  },
  {
    title: "Commentaries",
    color: GREEN,
    text: "Commentaries are the distilled work of scholars who have spent years on specific texts. The key principle: use commentaries after doing your own observation and interpretation work, not instead of it. For a beginning library, the NIV Application Commentary series bridges exegesis and application well. For more technical work, the Word Biblical Commentary and the New International Commentary series are excellent. For laypeople, the Tyndale Commentary series is rigorous but accessible. The Expositor&rsquo;s Bible Commentary (12 volumes) is a comprehensive evangelical set. One-volume commentaries &mdash; the ESV Study Bible notes, the New Bible Commentary &mdash; are practical starting points. Always consult at least two commentaries representing different interpretive perspectives.",
  },
  {
    title: "Cross-Reference Tools and Bible Atlases",
    color: ROSE,
    text: "Cross-reference tools identify parallel passages, fulfillment relationships, and thematic connections across Scripture. The Treasury of Scripture Knowledge (available free online) is the most comprehensive cross-reference resource, with an average of 30+ cross-references per verse. Modern study Bibles include cross-references in the margin. Bible atlases and maps provide the geographical context essential for understanding Old Testament narrative, Paul&rsquo;s missionary journeys, and the geography of the Gospels. The Crossway ESV Bible Atlas and the Zondervan Atlas of the Bible are both excellent. Understanding that Galilee and Judea had distinct cultural characters, or that Babylon was 900 miles from Jerusalem, changes how you read the texts set in those locations.",
  },
  {
    title: "Free vs. Paid Tools and Best Online Resources",
    color: PURPLE,
    text: "Free online tools provide most of what laypeople need for serious Bible study. Blue Letter Bible (blueletterbible.org) provides concordance, lexicon, commentary, and cross-reference resources for free. BibleHub (biblehub.com) offers parallel translations, interlinear texts, and multiple commentaries side by side. BibleGateway (biblegateway.com) provides access to dozens of translations. The BibleProject website and YouTube channel offer theological and visual overviews of every biblical book and theme. For paid tools, Logos Bible Software is the industry standard for serious students and pastors. Accordance is the preferred platform for Mac users and scholars. Olive Tree provides a good middle option for tablet and phone use.",
  },
];

const COMMUNITY_SECTIONS = [
  {
    title: "Why Solo Study Has Limits",
    color: GOLD,
    text: "No reader is interpretation-neutral. We all bring assumptions, experiences, and blindspots to the text, and we tend to find what we are looking for. Solo Bible study is essential &mdash; the daily discipline of personal engagement with Scripture is irreplaceable &mdash; but it is incomplete without communal correction. The history of heresy shows that almost every major theological error has been an individual or small group reading of Scripture that the broader community eventually corrected. The Reformation principle that Scripture is its own interpreter (analogia scripturae) requires a community large enough to hold the whole of Scripture in view. Individual readers tend to build theologies from their favorite passages.",
  },
  {
    title: "The Small Group as Spiritual Formation Context",
    color: BLUE,
    text: "The small group Bible study &mdash; 6 to 12 people meeting regularly to read and discuss Scripture together &mdash; is one of the most powerful spiritual formation contexts available to ordinary Christians. Its power comes from the diversity of observations, life experiences, and questions that a group brings to any text. Someone in a season of grief will notice things about Lamentations that someone in a season of joy will miss. Someone with a background in poverty will hear the prophets differently than someone in comfortable circumstances. This diversity is not a problem to be managed &mdash; it is a feature of communal reading that individual reading cannot replicate.",
  },
  {
    title: "How to Lead an Inductive Bible Study Group",
    color: TEAL,
    text: "An inductive group Bible study assigns a passage for individual observation before the group meets. The session opens with pooling observations &mdash; what did each person notice? &mdash; before anyone offers interpretation. This discipline prevents the most common small group failure: the group immediately jumping to what the text means and how to apply it without having looked carefully at what it says. Good questions for a group observation phase: What is repeated? What is surprising? What do you not understand? What is the emotional tone? After the observation phase, interpretation questions can be explored together, and application can be shared personally.",
  },
  {
    title: "Lecture vs. Discussion: The Key Difference",
    color: GREEN,
    text: "A Bible study group led by lecture produces passive recipients; a group led by discussion produces active interpreters. The difference is not the leader&rsquo;s intelligence or preparation &mdash; it is the goal. A lecture communicates what the leader has discovered. A discussion facilitates what the group discovers together. The best small group leaders prepare thoroughly and then ask questions rather than deliver answers. The Socratic approach &mdash; asking questions that lead people to discover truth rather than handing them conclusions &mdash; produces deeper ownership and longer retention. The leader who says less and questions more is usually more effective than the leader who prepares excellent content and delivers it.",
  },
  {
    title: "Asking Good Questions in Group Study",
    color: ROSE,
    text: "Good Bible study questions are open-ended (not yes/no), text-based (answerable from the passage), and generative (they lead to further questions rather than closing off discussion). Three types of questions structure a good group Bible study: observation questions (&ldquo;What does the author say in verse 4?&rdquo;), interpretation questions (&ldquo;Why do you think Paul uses the word &lsquo;therefore&rsquo; here?&rdquo;), and application questions (&ldquo;Where in your life this week does this truth need to land?&rdquo;). The best application questions are personal but not intrusive: they invite sharing without requiring it. The leader&rsquo;s own honest answer to the application question usually creates the safety for others to share.",
  },
  {
    title: "Accountability Systems for Daily Reading Habits",
    color: PURPLE,
    text: "A daily Bible reading habit is not self-sustaining for most people &mdash; it requires structure and accountability. Reading plans (chronological, canonical, thematic, M&rsquo;Cheyne&rsquo;s plan) provide structure by eliminating the daily decision of what to read. Accountability partners or groups provide external motivation during the seasons when internal motivation fails. Daily check-in systems &mdash; texting a partner what passage you read and one observation &mdash; create low-friction accountability without requiring a meeting. The goal of accountability is not guilt management but habit formation: research on habit formation suggests that 60&ndash;90 days of consistent practice is required to establish a new daily behavior. Systems that sustain the practice through the resistance period produce lasting formation.",
  },
];

const VIDEOS = [
  {
    id: "O-mvZLMh1_4",
    title: "Inductive Bible Study &mdash; Howard Hendricks",
    color: GOLD,
  },
  {
    id: "Fg9gBCxBmOE",
    title: "How to Study the Bible &mdash; Tim Mackie / BibleProject",
    color: BLUE,
  },
  {
    id: "tF7FHtDY6f4",
    title: "Study Methods Overview",
    color: TEAL,
  },
];

function SectionList({ sections }: { sections: { title: string; color: string; text: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {sections.map((s) => (
        <div
          key={s.title}
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            padding: "1.5rem 1.75rem",
            borderLeft: `4px solid ${s.color}`,
          }}
        >
          <h3 style={{ color: s.color, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>
            {s.title}
          </h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}
            dangerouslySetInnerHTML={{ __html: s.text }}
          />
        </div>
      ))}
    </div>
  );
}

export default function ChristianBibleStudyGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("why");
  useEffect(() => { setLoaded(true); }, []);
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
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <span
            style={{
              background: GOLD + "22",
              color: GOLD,
              padding: "0.2rem 0.8rem",
              borderRadius: 20,
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Bible &amp; Theology
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            margin: "0.75rem 0 0.75rem",
          }}
        >
          Christian Bible Study Guide
        </h1>

        <p
          style={{
            color: MUTED,
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: 660,
            margin: "0 0 2rem",
          }}
        >
          Serious engagement with Scripture is the foundation of Christian discipleship. This guide
          covers the methods, tools, and practices that move Bible reading from passive consumption
          to active formation &mdash; from devotional skimming to the disciplined, life-changing
          encounter that God intends through his Word.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: 20,
                border: "1px solid",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                borderColor: tab === t.id ? GOLD : BORDER,
                background: tab === t.id ? GOLD + "22" : "transparent",
                color: tab === t.id ? GOLD : MUTED,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "why" && <SectionList sections={WHY_SECTIONS} />}
        {tab === "inductive" && <SectionList sections={INDUCTIVE_SECTIONS} />}
        {tab === "methods" && <SectionList sections={METHODS_SECTIONS} />}
        {tab === "tools" && <SectionList sections={TOOLS_SECTIONS} />}
        {tab === "community" && <SectionList sections={COMMUNITY_SECTIONS} />}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: GOLD, margin: "0 0 0.5rem" }}>
              Videos
            </h2>
            {VIDEOS.map((v) => (
              <div key={v.id}>
                <div
                  style={{
                    color: v.color,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    marginBottom: "0.5rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: v.title }}
                />
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
