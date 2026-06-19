"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Jonah4Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "8phkAg8PMHE", title: "Jonah 4 - The Angry Prophet and God's Final Question" },
    { id: "Q2oNOlXzBhY", title: "The Book of Jonah Overview" },
    { id: "JKPD1AXf0lg", title: "Jonah: Repentance and the Mercy of God" },
    { id: "3sO5FH2ybPY", title: "God's Compassion in Jonah" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const themeItems = [
    {
      id: "anger",
      color: ROSE,
      title: "The Most Honest Complaint in the Book: Jonah&rsquo;s Anger at God&rsquo;s Mercy",
      body: "Jonah 4:1 opens with a statement that is almost shocking in its directness: &ldquo;But it displeased Jonah exceedingly, and he was angry.&rdquo; This is not a minor annoyance. The Hebrew says it was evil to Jonah with a great evil &mdash; the same word used to describe the wickedness of Nineveh that prompted God&rsquo;s commission in chapter 1. What displeases Jonah with this great displeasure? God&rsquo;s mercy. God relented. Nineveh repented. The city was spared. And Jonah is furious. This is the most theologically transparent moment in the book, and in many ways it is the most honest complaint a human being can lodge before God: I knew you would do this, and I didn&rsquo;t want you to. Jonah is not confused about God&rsquo;s character. He is not surprised by divine mercy. He is enraged by it. He articulates precisely his problem in verse 2: &ldquo;for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.&rdquo; This is verbatim from Exodus 34:6&ndash;7, the great divine self-declaration on Mount Sinai. Jonah has memorized the character of God. He is not theologically ignorant. His problem is not a deficiency of knowledge but an excess of preference: he wants God to be one way toward Israel and another way toward Nineveh. The anger of Jonah in chapter 4 is the anger of every religious person who has ever believed that divine grace belongs to their tribe and no one else&rsquo;s.",
    },
    {
      id: "exodus-connection",
      color: GOLD,
      title: "Exodus 34:6&ndash;7 as Complaint: The Attributes of God That Jonah Hates",
      body: "The theological heart of Jonah 4 is a quotation. When Jonah explains his flight in verse 2, he recites one of the most important texts in the Hebrew Bible: &ldquo;You are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.&rdquo; This is the divine self-disclosure given to Moses after the golden calf episode, when Israel had just committed the most catastrophic act of covenant betrayal in their brief history and God was asked to reveal his name. The answer God gave &mdash; gracious, merciful, slow to anger, abounding in steadfast love &mdash; became the theological DNA of Israel&rsquo;s faith. It is quoted and echoed across the entire Old Testament: Nehemiah 9:17, Joel 2:13, Psalm 86:15, Psalm 103:8, Psalm 145:8. Nahum 1:3 echoes it with a telling variation: God is &ldquo;slow to anger&rdquo; &mdash; but the same Nahum 1 goes on to announce the final destruction of Nineveh in the Assyrian period. The trajectory of history will eventually circle back and undo what Jonah 3 accomplished. But in Jonah 4, the character of God revealed in Exodus 34 is being applied to Nineveh &mdash; and Jonah quotes it not as a doxology but as an accusation. He is not praising God for these attributes; he is indicting God for applying them too broadly. What Israel had sung as a song of trust, Jonah hurls back at God as a grievance. The text is asking every reader: can you sing the song of Exodus 34 with genuine praise if it means that the mercy it describes extends to your enemies?",
    },
    {
      id: "plant-worm",
      color: TEAL,
      title: "The Plant and the Worm: A Living Parable About Misplaced Grief",
      body: "The plant and worm episode in Jonah 4:5&ndash;8 is one of the most carefully constructed parables in Scripture. Jonah sits east of the city in a shelter he has made, watching to see what will happen to Nineveh &mdash; still hoping, apparently, for its destruction. God appoints a plant to grow up over him and provide shade, &ldquo;to save him from his discomfort.&rdquo; Jonah is &ldquo;exceedingly glad about the plant.&rdquo; The phrase is emphatic in the Hebrew: he rejoiced over it with great joy. The same kind of intensity he brought to his anger (great displeasure, 4:1) he now brings to his delight in a plant. Then God appoints a worm at dawn that attacks the plant so that it withers. Then God appoints a scorching east wind and a beating sun so that Jonah is faint and asks to die: &ldquo;It is better for me to die than to live&rdquo; (v. 8) &mdash; the same words he had used in verse 3. The pattern is clear: Jonah can be moved from anger to joy to despair by a plant. He feels more for a plant than for 120,000 human beings. God&rsquo;s question in verse 9 exposes this precisely: &ldquo;Do you do well to be angry for the plant?&rdquo; And Jonah answers: &ldquo;Yes, I do well to be angry, angry enough to die.&rdquo; The ferocity of the answer is revealing. Jonah is passionately committed to the plant. He has not said he does well to be angry about Nineveh&rsquo;s sparing since the first verses. But he will fight to the death for the plant. The parable works by comparison: if a plant that Jonah did not plant, that came up in a night and perished in a night, can generate this intensity of feeling, what does that say about the appropriate intensity of feeling God should have for 120,000 human beings made in his image?",
    },
    {
      id: "final-question",
      color: PURPLE,
      title: "The Open-Ended Close: God&rsquo;s Unanswered Question and the Reader",
      body: "The book of Jonah ends in a way that is unique in the entire Hebrew Bible: with an unanswered question. God asks, &ldquo;And should I not pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?&rdquo; (v. 11). And then: silence. Jonah does not answer. The narrator does not tell us whether Jonah was persuaded or remained angry. The story does not resolve. The question hangs in the air &mdash; not just for Jonah but for every reader in every generation. This open-endedness is deliberate and radical. The book is not primarily about what happened to Jonah; it is about what God is like and how we respond to that. By ending with a question rather than an answer, the narrator forces the question onto the reader. You are Jonah. You have heard the commission. You have seen the mercy. You have watched God spare the city you thought deserved destruction. And now God asks you: should I not pity them? The question transfers the weight of the book&rsquo;s theology directly into the reader&rsquo;s chest. Who are the 120,000 in your world who do not know their right hand from their left? Who are the Ninevites you would rather see judged than saved? What is the plant you are weeping over while 120,000 people perish? The book ends with a question because the question is the point. The answer each reader gives is their theological self-portrait.",
    },
    {
      id: "compassion",
      color: GREEN,
      title: "God&rsquo;s Universal Compassion Versus Israel&rsquo;s Tribal Limitation",
      body: "Jonah 4 is, at its deepest level, a confrontation between two visions of divine mercy. Jonah&rsquo;s vision is tribal: God&rsquo;s love belongs to Israel, God&rsquo;s mercy is covenant-bounded, God&rsquo;s grace is reserved for those who have earned it through proper belonging. God&rsquo;s vision, expressed in the final question, is universal: his pity extends to any human being, even human beings who &ldquo;do not know their right hand from their left&rdquo; &mdash; who are morally and spiritually ignorant, who have never heard the Torah, who do not have the covenant promises. The phrase &ldquo;do not know their right hand from their left&rdquo; is sometimes taken to refer specifically to children, but more likely it refers to moral incapacity &mdash; people who genuinely do not know what they are doing or why it is wrong. God&rsquo;s response to this is not greater condemnation but greater pity. The inclusion of &ldquo;and also much cattle&rdquo; at the end of God&rsquo;s question extends his compassion even beyond the human to the animal creation. God cares about cattle. His compassion is not narrowed to the covenant people or even to human beings; it encompasses the whole created order. This universalism is not a rejection of Israel&rsquo;s special calling but an expansion of what that calling was always meant to produce: a people through whom all the families of the earth would be blessed (Genesis 12:3). Jonah&rsquo;s tribal mercy betrays Israel&rsquo;s universal vocation. God&rsquo;s final question is the question every instrument of divine blessing must eventually answer: will I carry the blessing to those who, by my reckoning, least deserve it?",
    },
    {
      id: "twice-dying",
      color: ROSE,
      title: "Jonah Asks to Die Twice: The Theology of the Prophet&rsquo;s Despair",
      body: "A detail easily passed over in Jonah 4 is that Jonah asks to die twice: once in verse 3 (&ldquo;O LORD, please take away my life from me, for it is better for me to die than to live&rdquo;) and once in verse 8 (&ldquo;It is better for me to die than to live&rdquo;). The first request comes immediately after God spares Nineveh. The second comes after the worm destroys the plant. In both cases the desire for death is triggered not by suffering inflicted on Jonah but by a perceived loss: in verse 3, the loss of Nineveh&rsquo;s judgment; in verse 8, the loss of the plant&rsquo;s shade. Jonah is not suicidal in the ordinary sense. He is a man whose sense of how the world should be has been so thoroughly violated that he would rather not exist than live in a world ordered this way. God is too merciful, too willing to extend grace to enemies, too ready to relent from disaster. Jonah cannot bear it. The double death wish is the book&rsquo;s most transparent portrait of what happens when a person&rsquo;s theology of divine justice collapses into a theology of divine preference: not the just ordering of the universe but the gratification of one man&rsquo;s tribal instincts. God does not grant either death wish. He asks a question instead. The gentleness of God&rsquo;s response to Jonah&rsquo;s rage is itself a demonstration of the divine character Jonah is complaining about: &ldquo;slow to anger and abounding in steadfast love.&rdquo; God is patient with the angry prophet just as he was compassionate toward the ignorant city.",
    },
  ];

  const verseItems = [
    {
      id: "v1-4",
      ref: "Jonah 4:1&ndash;4",
      title: "Jonah&rsquo;s Anger; His Recital of Exodus 34; God&rsquo;s Gentle Question",
      body: "Jonah 4 opens without transition: Nineveh has been spared (3:10), and the very next verse tells us Jonah&rsquo;s response. &ldquo;But it displeased Jonah exceedingly, and he was angry.&rdquo; The Hebrew is vivid &mdash; it was evil to Jonah with a great evil. God&rsquo;s mercy to Nineveh is experienced by the prophet as a moral catastrophe. He then prays &mdash; not to seek God&rsquo;s will but to register his complaint. The prayer in verse 2 is one of the most remarkable in the Bible: &ldquo;O LORD, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster.&rdquo; Jonah here explains for the first time why he ran in chapter 1. It was not fear of Nineveh. It was not cowardice. It was theology: he knew God&rsquo;s character and he knew that if Nineveh repented, God would relent. He did not want God to relent. So he ran. The confession in verse 2 quotes Exodus 34:6&ndash;7 almost verbatim &mdash; the divine self-description given to Moses after the golden calf. This is the foundational statement of who God is in the Hebrew Bible, and Jonah quotes it not as praise but as a grievance. He then asks God to take his life: &ldquo;It is better for me to die than to live.&rdquo; God&rsquo;s response is a single, quiet question: &ldquo;Do you do well to be angry?&rdquo; (v. 4). The question does not condemn, does not threaten, does not argue. It simply opens a space. It is the gentleness of the question that makes it most convicting. God is not threatened by Jonah&rsquo;s anger. He engages it.",
    },
    {
      id: "v5-8",
      ref: "Jonah 4:5&ndash;8",
      title: "The Shelter East of the City; the Plant; the Worm; the Scorching Wind",
      body: "Verse 5 finds Jonah sitting east of the city in a booth he has made for himself, waiting to see what would happen to Nineveh. The detail is telling: even after God&rsquo;s explicit declaration that he has relented (3:10), Jonah is still watching and waiting, still harboring hope that the destruction might come after all. He cannot let go. He is camped outside the city with a front-row seat, just in case. What happens next is a sequence of four divine appointments. God appoints a plant (the Hebrew word suggests a fast-growing gourd or castor bean) that grows up over Jonah and gives him shade. Jonah is &ldquo;exceedingly glad about the plant&rdquo; &mdash; the same emphatic phrase that described his anger in verse 1, now redirected to joy about a plant. He has more emotional investment in this plant than in anything else in the chapter. Then, at dawn of the next day, God appoints a worm that attacks the plant so it withers. Then God appoints a scorching east wind and a blazing sun so that Jonah is faint and the same words return: &ldquo;It is better for me to die than to live.&rdquo; The escalation of appointed instruments &mdash; plant, worm, wind, sun &mdash; mirrors the escalation in chapter 1 (wind, sea, fish). God is once again orchestrating the natural world to accomplish a purpose, but now the purpose is not physical rescue; it is spiritual illumination. Jonah must see himself in the mirror of his response to the plant. The speed of the plant&rsquo;s appearance and disappearance (&ldquo;came up in a night and perished in a night&rdquo;) marks it as inherently transient &mdash; a parabolic creature, designed to make a theological point before it dies.",
    },
    {
      id: "v9-11",
      ref: "Jonah 4:9&ndash;11",
      title: "Do You Do Well to Be Angry? God&rsquo;s Final Question and the Book&rsquo;s Last Word",
      body: "God asks again the question from verse 4, now sharpened to address the plant: &ldquo;Do you do well to be angry for the plant?&rdquo; (v. 9). Jonah&rsquo;s answer is the most honest sentence he has spoken in the entire book: &ldquo;Yes, I do well to be angry, angry enough to die.&rdquo; He does not equivocate. He does not soften. He is angry about the plant to the point of wanting death, and he thinks this is justified. Then God speaks the final words of the book. Verse 10 begins the argument: &ldquo;You pity the plant, for which you did not labor, nor did you make it grow, which came into being in a night and perished in a night.&rdquo; Jonah has pity &mdash; the Hebrew word is the same as the one God will use of himself in verse 11, the word for compassion or concern &mdash; for the plant. He did not create it, did not cultivate it, did not invest in it. It existed for one day. And yet he grieves its loss as if it were a catastrophic destruction. Verse 11 then delivers the logical conclusion that is also the book&rsquo;s final question: &ldquo;And should I not pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?&rdquo; God has loved and created these 120,000 human beings. He has invested in them. They exist not for a night but for lifetimes. They are made in his image. They are morally confused, not morally defiant &mdash; they do not know their right hand from their left. If Jonah can grieve over a plant for a day, how much more should God &mdash; who created these people, who has watched over them, who knows each of them &mdash; feel pity for them? The book ends here. No answer. No resolution. The question is left open because it belongs to the reader as much as to Jonah.",
    },
  ];

  const appItems = [
    {
      id: "app-anger",
      color: ROSE,
      title: "The Anger We Won&rsquo;t Admit",
      body: "Jonah&rsquo;s anger in chapter 4 is remarkable for its honesty. He doesn&rsquo;t dress it up. He doesn&rsquo;t pretend he is angry for righteous reasons. He tells God exactly what the problem is: I knew you were gracious and merciful, and I didn&rsquo;t want you to be that way to Nineveh. Most of us carry similar angers that we are far less honest about. We are angry that a person we dislike was shown grace. We are angry that a community we regard as beyond redemption was restored. We are angry that the mercy of God doesn&rsquo;t operate by our social categories. But instead of naming it as Jonah does &mdash; with brutal directness before God &mdash; we disguise it as principled concern, theological precision, or righteous indignation. Jonah 4 calls us to the harder honesty: to name our anger at God&rsquo;s mercy for what it is, to bring it into the open where God can ask us his questions. The God who responded to Jonah&rsquo;s rage with a quiet question rather than condemnation is the same God who will engage our hidden angers with the same patience. But he cannot address what we refuse to name.",
    },
    {
      id: "app-plant",
      color: TEAL,
      title: "The Plants We Grieve More Than People",
      body: "The plant episode is a parable about misplaced investment. Jonah never made or planted the gourd; it grew up in a night; it was gone in a morning. And yet he grieved over it enough to want to die. This is the question the parable presses: what are the plants in your life that occupy more emotional and spiritual energy than the people God is calling you to love? The plant can be anything: a reputation, a ministry status, a comfort, a privilege, a preference. It can be a theological position you hold so tightly that you would rather God not be merciful to those who disagree with it. It can be a community you identify with so completely that you grieve its diminishment more than you rejoice in the expansion of God&rsquo;s grace beyond it. The 120,000 people in Nineveh who did not know their right hand from their left were human beings made in the image of God, each one known and loved by their creator. Jonah was more agitated about a gourd. The question God asks Jonah &mdash; should I not pity them? &mdash; is simultaneously a question about proportion and a question about love. Are the people God loves properly proportioned in your concern? Or are there plants you are protecting that have more of your heart than people do?",
    },
    {
      id: "app-open-ending",
      color: PURPLE,
      title: "The Question That Belongs to You",
      body: "The open-ended conclusion of Jonah 4 is one of the most provocative literary choices in all of Scripture. The book ends with God&rsquo;s question: &ldquo;And should I not pity Nineveh?&rdquo; Jonah does not answer. The narrator does not answer. You are expected to answer. This is the book&rsquo;s final move &mdash; to relocate the conflict of the text into the reader&rsquo;s own soul. It is not enough to analyze Jonah&rsquo;s anger and conclude that he was wrong. The book insists that you are in the same position: you have heard the commission, you have seen the mercy, and now God is asking you whether you think it is right. Who are the 120,000 in your world? Who are the people or communities you have written off &mdash; the Ninevites of your life &mdash; whom God regards with exactly this pity? The unanswered question is not a narrative failure; it is the book&rsquo;s greatest theological achievement. It ensures that the book has not been read until the reader has answered the question themselves. What is your answer?",
    },
    {
      id: "app-gentleness",
      color: GOLD,
      title: "The Gentleness of God Toward the Angry Prophet",
      body: "One of the most overlooked aspects of Jonah 4 is how God treats Jonah. Jonah is angry. He asks to die. He camps outside the city like a sulking child waiting for a destruction that will not come. He is furious about a plant. He admits to wanting death over life in a world where God is this merciful. And through all of this, God does not condemn him. God does not revoke his prophetic calling. God does not remind him of the fish or the storm or the sailors or the Ninevites. He simply asks questions &mdash; gentle, probing, relentless questions. &ldquo;Do you do well to be angry?&rdquo; It is perhaps the most patient pastoral question in the Bible. God is practicing on Jonah exactly what Jonah was unwilling to extend to Nineveh: patient mercy toward someone who doesn&rsquo;t deserve it. The compassion God showed to the ignorant 120,000 is the same compassion he shows to the furious prophet sitting in the sun. This is the character of God in Exodus 34: gracious, merciful, slow to anger, abounding in steadfast love. It extends to Nineveh. It extends to Jonah. And it extends, the book implies, to the reader who is slower to accept it than they think.",
    },
    {
      id: "app-nahum",
      color: GREEN,
      title: "Jonah and Nahum: The Same City, Two Moments in God&rsquo;s Patience",
      body: "To read Jonah 4 alongside the book of Nahum is to encounter a sobering perspective on divine patience. In Jonah, God shows compassion to Nineveh&rsquo;s repentance and relents from disaster. In Nahum, written about a century later, God announces Nineveh&rsquo;s final and total destruction &mdash; the destruction Jonah had hoped for, carried out when Nineveh&rsquo;s repentance had long been forgotten and the city had returned to its violence. Nahum 1:3 even echoes the same divine attributes that Jonah quoted: &ldquo;The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty.&rdquo; God is slow to anger &mdash; but he is not infinitely patient with unrepentance. The grace shown in Jonah&rsquo;s time was real and total, but it was responsive to repentance. When the repentance was abandoned, the patience eventually ran out. Nineveh fell to Babylon in 612 BC. This parallel does not undermine the universalism of Jonah 4; it contextualizes it. God&rsquo;s compassion is real and available to all who repent. But it is not unconditional and permanent regardless of human response. Jonah 4&rsquo;s great question &mdash; should I not pity Nineveh? &mdash; was answered with a yes in the days of Jonah. The question Nahum asks a century later is whether Nineveh has retained the repentance that earned that pity. The answer, tragically, is no. The sequence of the two books is itself a theology of patience and accountability.",
    },
  ];

  const reflectionQuestions = [
    "Jonah knew God&rsquo;s character precisely &mdash; he quoted Exodus 34:6&ndash;7 &mdash; and yet that knowledge made him run away rather than embrace the commission. Is there any area of your own theological knowledge that functions as a reason to avoid rather than to engage?",
    "Jonah was angry enough to die over God&rsquo;s mercy to Nineveh. Are there people or groups toward whom you feel a similar resistance to God&rsquo;s grace &mdash; people you would rather see judged than forgiven? Can you name them honestly before God?",
    "The plant episode shows Jonah grieving more for a gourd than for 120,000 people. What are the plants in your own life that occupy disproportionate emotional or spiritual space &mdash; things you guard more fiercely than you love people?",
    "God&rsquo;s final question to Jonah is never answered in the text &mdash; it is left for the reader. How would you answer it? Should God not pity the 120,000 people in your Nineveh who do not know their right hand from their left?",
    "God responded to Jonah&rsquo;s rage and death wish with quiet, patient questions rather than condemnation. How does the way God treats the angry prophet in chapter 4 shape your understanding of how God treats you in your own moments of spiritual anger or despair?",
    "The book of Jonah ends with an unanswered question. What does it mean for you personally to sit with that open ending? Who are the people in your world for whom God&rsquo;s final question serves as a call to action rather than a rhetorical flourish?",
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg, ${CARD} 0%, #0a0a18 100%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "3.5rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: GOLD,
            fontWeight: 700,
            letterSpacing: "0.12em",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            margin: "0 0 0.75rem",
          }}
        >
          Jonah 4
        </p>
        <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 900, margin: "0 0 1rem", lineHeight: 1.15 }}>
          The Angry Prophet and God&rsquo;s Final Question
        </h1>
        <p
          style={{ color: MUTED, fontSize: "1.1rem", maxWidth: 680, margin: "0 auto 1.5rem", lineHeight: 1.75 }}
          dangerouslySetInnerHTML={{
            __html:
              "Nineveh repented. God relented. And Jonah was furious. The last chapter of the book is the most honest &mdash; and the most unsettling. It ends not with an answer but with a question the reader must answer themselves.",
          }}
        />
        <div
          style={{
            display: "inline-block",
            background: `${GOLD}18`,
            border: `1px solid ${GOLD}44`,
            borderRadius: 10,
            padding: "0.9rem 1.4rem",
            maxWidth: 720,
            textAlign: "left",
          }}
        >
          <p
            style={{
              color: GOLD,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 0.4rem",
            }}
          >
            Key Verse &mdash; Jonah 4:11
          </p>
          <p
            style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;And should I not pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?&rdquo;",
            }}
          />
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          borderBottom: `1px solid ${BORDER}`,
          background: CARD,
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", overflowX: "auto", maxWidth: 900, margin: "0 auto", padding: "0 1rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "1rem 1.4rem",
                background: "none",
                border: "none",
                borderBottom: tab === t ? `2px solid ${GOLD}` : "2px solid transparent",
                color: tab === t ? TEXT : MUTED,
                fontWeight: tab === t ? 700 : 400,
                fontSize: "0.95rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jonah 4 is the most theologically concentrated chapter in the book. If the first three chapters are about what Jonah does, the fourth chapter is about who Jonah is &mdash; and, more importantly, who God is in contrast to him. The great city has been spared. The mission has been accomplished. And the prophet is furious. The chapter explores the anatomy of religious resentment, the way God teaches through parable and question, and the extraordinary fact that the book of the Bible most concerned with the universality of divine mercy ends with an unanswered question addressed to every reader.",
              }}
            />

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: ROSE,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.3rem",
                }}
              >
                Jonah 4:1&ndash;4
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem" }}>The Complaint That Explains the Flight</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The chapter opens with Jonah&rsquo;s response to Nineveh&rsquo;s salvation: he is exceedingly displeased and angry. In verse 2, for the first time in the book, we are given Jonah&rsquo;s reason for fleeing in chapter 1. He knew God was gracious and merciful, slow to anger and abounding in steadfast love. He knew God would relent if Nineveh repented. He didn&rsquo;t want that. So he ran. The prayer in verse 2 is a direct quotation of Exodus 34:6&ndash;7, the divine self-disclosure given to Moses. Jonah is not quoting Scripture as praise; he is hurling it at God as an accusation. He then asks to die. God responds with a single question: &ldquo;Do you do well to be angry?&rdquo;",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "This opening exchange establishes the theological problem of the chapter: a prophet who has correct doctrine about God but wrong dispositions toward God&rsquo;s mercy. Jonah knows who God is. He quotes the right texts. He is not theologically ignorant. His failure is not in his head but in his heart: he does not want the God he knows to be that God toward the people he hates. The tension between accurate theology and misaligned loves is the central crisis of Jonah 4.",
                }}
              />
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: TEAL,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.3rem",
                }}
              >
                Jonah 4:5&ndash;8
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem" }}>The Plant, the Worm, and the Scorching Wind</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Jonah builds a booth east of the city and waits &mdash; still hoping for the destruction God has already said will not come. God appoints a plant to grow and shade him. Jonah is overjoyed. Then God appoints a worm to destroy the plant at dawn, and a scorching east wind and blazing sun to torment Jonah until he again asks to die. The sequence of appointed instruments &mdash; plant, worm, wind, sun &mdash; mirrors the appointed instruments of chapter 1 (wind, sea, fish). In both cases God is using the natural world to accomplish a purpose. But now the purpose is pedagogical: God is constructing a parable in real time.",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The parable is about proportion. Jonah felt nothing for 120,000 people but feels everything for a single plant. He rejoiced over the plant with the same intensity with which he raged over Nineveh&rsquo;s sparing. He wants to die because the plant is gone. The emotional architecture of Jonah&rsquo;s soul is revealed: plants matter more than people. Comforts matter more than cities. Personal preferences matter more than divine compassion. The plant is gone in a morning so that Jonah can see himself clearly.",
                }}
              />
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 0.3rem",
                }}
              >
                Jonah 4:9&ndash;11
              </p>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem" }}>God&rsquo;s Final Question: Should I Not Pity Nineveh?</h3>
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: "0 0 0.9rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "God asks again: &ldquo;Do you do well to be angry for the plant?&rdquo; Jonah answers with unapologetic conviction: &ldquo;Yes, I do well to be angry, angry enough to die.&rdquo; Then God draws the logical conclusion that is also the book&rsquo;s final sentence: you pity the plant you did not make; should I not pity the city I did make, with 120,000 people who do not know their right hand from their left, and also much cattle?",
                }}
              />
              <p
                style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "The argument from lesser to greater is unmistakable. If pity is appropriate for a plant that came up in a night and perished in a night &mdash; a plant Jonah did not create, did not tend, did not invest in &mdash; then pity is infinitely more appropriate for 120,000 human beings that God did create, has known since before their birth, and has watched over through the years. The book ends here. No answer is recorded. Jonah&rsquo;s silence becomes the reader&rsquo;s opportunity. The question hangs in the air of every generation that reads this book, and every reader must answer it.",
                }}
              />
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jonah 4 is the richest and most demanding chapter in the book. It layers together the anatomy of religious resentment, the theology of divine compassion from Exodus 34, the pedagogical use of a plant and worm, the open-ended question that makes every reader Jonah, and the contrast between Israel&rsquo;s tribal mercy and God&rsquo;s universal pity. Each theme presses the reader to examine their own heart rather than simply analyze Jonah&rsquo;s.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {themeItems.map((item) => (
                <div
                  key={item.id}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "1.1rem 1.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      gap: "1rem",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: item.color,
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      <span style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}>{item.title}</span>
                    </span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", flexShrink: 0 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, lineHeight: 1.85, margin: "1rem 0 0", fontSize: "1rem" }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jonah 4 moves through three tightly constructed scenes: the prayer of complaint and God&rsquo;s first question (vv. 1&ndash;4), the parable of the plant and the worm (vv. 5&ndash;8), and the final dialogue in which God delivers his unanswered question about the city (vv. 9&ndash;11). Each scene advances the theological argument toward the same destination: a question addressed not only to Jonah but to every reader of the book.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {verseItems.map((item) => (
                <div
                  key={item.id}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "1.1rem 1.4rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      gap: "1rem",
                    }}
                  >
                    <span>
                      <span
                        style={{
                          color: GOLD,
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: 2,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                      <span
                        style={{ color: TEXT, fontWeight: 600, fontSize: "1rem" }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </span>
                    <span style={{ color: MUTED, fontSize: "1.2rem", flexShrink: 0 }}>{open === item.id ? "-" : "+"}</span>
                  </button>
                  {open === item.id && (
                    <div style={{ padding: "0 1.4rem 1.4rem", borderTop: `1px solid ${BORDER}` }}>
                      <p
                        style={{ color: MUTED, lineHeight: 1.85, margin: "1rem 0 0", fontSize: "1rem" }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{
                __html:
                  "Jonah 4 does not let the reader off the hook. Its application is not primarily about what Jonah should have done; it is about what we are doing &mdash; right now, in our own relationships to those we would rather God not love quite so lavishly. The chapter ends with a question. The question is yours.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              {appItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${item.color}44`,
                    borderRadius: 12,
                    padding: "1.6rem 1.75rem",
                  }}
                >
                  <h3
                    style={{ color: item.color, fontWeight: 700, fontSize: "1.1rem", margin: "0 0 0.85rem" }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.85, margin: 0, fontSize: "1rem" }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                background: CARD,
                border: `1px solid ${GOLD}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
                marginBottom: "2.5rem",
              }}
            >
              <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 1.1rem", fontSize: "1.25rem" }}>Reflection Questions</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ color: MUTED, lineHeight: 1.8, fontSize: "1.02rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <section style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem", marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
              <p
                style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Go deeper into Jonah 4 with these teachings on the angry prophet, God&rsquo;s compassion for Nineveh, the plant and the worm, and the unanswered question that ends the book.",
                }}
              />
              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}
              >
                {videoItems.map((v) => (
                  <div
                    key={v.id}
                    style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
                  >
                    <VideoEmbed videoId={v.id} title={v.title} />
                    <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>
                      {v.title}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div
              style={{
                background: CARD,
                border: `1px solid ${ROSE}44`,
                borderRadius: 12,
                padding: "1.75rem 2rem",
              }}
            >
              <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
                A Prayer from Jonah 4
              </h3>
              <p
                style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "LORD, you are gracious and merciful, slow to anger and abounding in steadfast love, and relenting from disaster. Forgive us for quoting those words as praise on Sunday and resenting their implications on Monday. Show us where we are camped east of the city, watching in sullen hope for the destruction of those you pity. Give us eyes to see the 120,000 &mdash; the ones who do not know their right hand from their left &mdash; and hearts that grieve their lostness more than we grieve our comfort. And grant us grace to answer your final question not with silence but with a yes &mdash; yes, you should pity them, and yes, I will go.",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
