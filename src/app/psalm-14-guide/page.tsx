"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

interface Accordion {
  id: string;
  title: string;
  ref: string;
  body: string;
}

const TABS = ["overview", "themes", "verse", "application"];
const TAB_LABELS: Record<string, string> = {
  overview: "Overview",
  themes: "Key Themes",
  verse: "Verse by Verse",
  application: "Application",
};

const videoItems = [
  { videoId: "rNcERbkSTXU", title: "Psalm 14 - The Fool Says There Is No God: An Introduction" },
  { videoId: "OjJ7GkWCHvA", title: "Practical Atheism - Living as if God Does Not See" },
  { videoId: "pHBzJ2dVXgk", title: "None Righteous, Not One - Paul's Use of Psalm 14 in Romans 3" },
  { videoId: "3sO5FH2ybPY", title: "Salvation Out of Zion - The Messianic Hope of Psalm 14:7" },
];

const overviewBlocks: { heading: string; body: string }[] = [
  {
    heading: "The Folly of Practical Atheism",
    body:
      "Psalm 14 opens with one of the most arresting verses in the Bible: &ldquo;The fool says in his heart, &lsquo;There is no God.&rsquo;&rdquo; It is easy to read this as a verse about intellectual atheism, but the &ldquo;fool&rdquo; of the psalm (Hebrew <em>nabal</em>) is not primarily a philosopher who has reasoned his way to denying God&rsquo;s existence. He is a moral fool, and his denial is not a thesis argued aloud but a wish whispered &ldquo;in his heart.&rdquo; He lives as though God does not see, does not care, and will not judge. His atheism is practical, not theoretical &mdash; a way of life that pushes God out of the picture so that he may do as he pleases. And the immediate fruit of that practical denial is corruption: &ldquo;they are corrupt, they do abominable deeds, there is none who does good.&rdquo;",
  },
  {
    heading: "The Universal Corruption of Humanity",
    body:
      "From the single fool of verse 1 the psalm widens to take in the whole human race. The LORD himself looks down from heaven &ldquo;to see if there are any who understand, who seek after God,&rdquo; and the verdict of his all-seeing survey is devastating: &ldquo;They have all turned aside; together they have become corrupt; there is none who does good, not even one.&rdquo; This is not a complaint about one bad generation or one wicked nation. It is a diagnosis of the human heart as such. The practical atheism that begins in the fool is shown to be the universal condition apart from grace. The psalm refuses every flattering illusion about human goodness and lays bare a sober, searching truth: left to ourselves, all of us have turned aside.",
  },
  {
    heading: "Context: The Psalm Paul Made Famous",
    body:
      "Psalm 14 is a psalm of David, and it appears almost word for word again as Psalm 53 &mdash; one of the rare &ldquo;doublets&rdquo; in the Psalter, where the same song is preserved twice with small variations. But its greatest afterlife comes in the New Testament. When the apostle Paul builds his case in Romans that &ldquo;all have sinned and fall short of the glory of God,&rdquo; he reaches for Psalm 14 (and 53) and quotes it at the very heart of his argument: &ldquo;None is righteous, no, not one&hellip; no one does good, not even one.&rdquo; This psalm thus becomes a foundation stone of the gospel itself. Yet it does not end in despair. Its final verse turns toward hope, longing that &ldquo;salvation for Israel would come out of Zion&rdquo; &mdash; the cry of a people waiting for the deliverance that, in Christ, has now come.",
  },
];

const themeItems: Accordion[] = [
  {
    id: "t1",
    title: "The Fool Who Says in His Heart There Is No God",
    ref: "Psalm 14:1",
    body:
      "<p>The &ldquo;fool&rdquo; of Psalm 14 is a particular biblical figure. The Hebrew word <em>nabal</em> does not describe a person of low intelligence but a person of low character &mdash; one who is morally and spiritually senseless, who has shut his ears to wisdom and his heart to God. We meet a man literally named Nabal in the story of David and Abigail, &ldquo;harsh and badly behaved,&rdquo; a living portrait of the type. The fool&rsquo;s folly is not that he cannot do arithmetic but that he will not reckon with God.</p>" +
      "<p>Crucially, the fool says &ldquo;there is no God&rdquo; not with his lips in public debate but &ldquo;in his heart.&rdquo; This is the secret wish of a will that does not want God to exist, because the existence of God means accountability. His is not so much a denial of God&rsquo;s being as a denial of God&rsquo;s relevance &mdash; a practical atheism that lives, spends, lusts, and grasps as though no one is watching and no reckoning is coming. The tragedy is that this denial is self-deceiving: the God he wishes away is the very God before whose eyes he stands.</p>" +
      "<p>Cross references: <strong>Psalm 10:4</strong> (&ldquo;in the pride of his face the wicked&hellip; all his thoughts are, &lsquo;There is no God&rsquo;&rdquo;); <strong>1 Samuel 25:25</strong> (Nabal, &ldquo;folly is with him&rdquo;); <strong>Luke 12:20</strong> (&ldquo;Fool! This night your soul is required of you&rdquo;); <strong>Romans 1:21&ndash;22</strong> (&ldquo;claiming to be wise, they became fools&rdquo;).</p>",
  },
  {
    id: "t2",
    title: "The Universal Corruption of Humanity",
    ref: "Psalm 14:1&ndash;3",
    body:
      "<p>The psalm moves from the singular fool to the whole human race with sobering speed. &ldquo;They are corrupt, they do abominable deeds, there is none who does good.&rdquo; Then the LORD himself conducts the inquiry: he &ldquo;looks down from heaven on the children of man, to see if there are any who understand, who seek after God.&rdquo; The result is unanimous and bleak: &ldquo;They have all turned aside; together they have become corrupt; there is none who does good, not even one.&rdquo;</p>" +
      "<p>This is one of Scripture&rsquo;s clearest statements of what theology calls the universal sinfulness of humanity. The corruption is not partial or occasional but pervasive &mdash; &ldquo;all&rdquo; have turned aside, &ldquo;together&rdquo; they are corrupt, and the conclusion is hammered home with that relentless phrase, &ldquo;not even one.&rdquo; The image of turning aside is of travelers who have all wandered off the road, every last one of them lost. The psalm leaves no room for the comforting thought that surely some are exempt. Apart from grace, none seeks God, and none does the good he requires.</p>" +
      "<p>Cross references: <strong>Genesis 6:5</strong> (&ldquo;every intention of the thoughts of his heart was only evil continually&rdquo;); <strong>Isaiah 53:6</strong> (&ldquo;All we like sheep have gone astray&rdquo;); <strong>Ecclesiastes 7:20</strong> (&ldquo;there is not a righteous man on earth who does good and never sins&rdquo;); <strong>Jeremiah 17:9</strong> (&ldquo;The heart is deceitful above all things&rdquo;).</p>",
  },
  {
    id: "t3",
    title: "Paul's Use of Psalm 14 in Romans 3",
    ref: "Psalm 14:1&ndash;3; Romans 3:10&ndash;12",
    body:
      "<p>No psalm is woven more decisively into the argument of the gospel than this one. When the apostle Paul reaches the climax of his case that the whole world &mdash; Jew and Gentile alike &mdash; stands guilty before God, he assembles a chain of Old Testament quotations, and at its head he places Psalm 14: &ldquo;None is righteous, no, not one; no one understands; no one seeks for God. All have turned aside; together they have become worthless; no one does good, not even one&rdquo; (Romans 3:10&ndash;12). The words are lifted almost directly from this psalm.</p>" +
      "<p>Paul&rsquo;s purpose is to close every mouth and shut down every claim to self-righteousness, so that &ldquo;the whole world may be held accountable to God.&rdquo; Psalm 14 is the foundation of his proof that all are under sin, and therefore the foundation of his good news. For it is precisely because none is righteous that the righteousness of God must come as a gift, &ldquo;through faith in Jesus Christ for all who believe.&rdquo; The dark diagnosis of Psalm 14 is the necessary backdrop against which the brightness of grace shines. We cannot rightly hear the gospel until we have first heard, with the psalmist, that there is none who does good, not even one.</p>" +
      "<p>Cross references: <strong>Romans 3:9&ndash;20</strong> (the indictment of all humanity); <strong>Romans 3:23</strong> (&ldquo;all have sinned and fall short&rdquo;); <strong>Galatians 3:22</strong> (&ldquo;Scripture imprisoned everything under sin&rdquo;); <strong>Ephesians 2:1&ndash;5</strong> (dead in trespasses, made alive by grace).</p>",
  },
  {
    id: "t4",
    title: "God With the Generation of the Righteous",
    ref: "Psalm 14:4&ndash;6",
    body:
      "<p>In the midst of the universal indictment, the psalm draws a vital line. Though all have turned aside, God is forming a people for himself, &ldquo;the generation of the righteous,&rdquo; with whom he is present and on whose side he stands. The evildoers &ldquo;eat up my people as they eat bread,&rdquo; preying on the faithful as casually as a man takes a meal &mdash; and the psalm asks in astonishment, &ldquo;Have they no knowledge?&rdquo; Their practical atheism has blinded them not only to God but to the danger of opposing his people.</p>" +
      "<p>But the threat does not have the last word. &ldquo;There they are in great terror, for God is with the generation of the righteous.&rdquo; The wicked who imagined no God to fear suddenly find themselves seized with dread, for the God they denied is unmistakably present among his own. They sought to shame &ldquo;the plans of the poor,&rdquo; but &ldquo;the LORD is his refuge.&rdquo; Here the psalm anticipates a great gospel pattern: the lowly and oppressed who trust in God are not abandoned, for the LORD himself is their shelter, and to assault them is to provoke the One who stands in their midst.</p>" +
      "<p>Cross references: <strong>Proverbs 30:14</strong> (those whose teeth devour the poor); <strong>Psalm 53:5</strong> (the parallel verse, &ldquo;there they are, in great terror&rdquo;); <strong>Matthew 25:40</strong> (&ldquo;as you did it to one of the least of these&hellip; you did it to me&rdquo;); <strong>Psalm 46:1</strong> (&ldquo;God is our refuge and strength&rdquo;).</p>",
  },
  {
    id: "t5",
    title: "The Longing for Salvation Out of Zion",
    ref: "Psalm 14:7",
    body:
      "<p>After the long darkness of the indictment, the psalm ends in a sudden burst of yearning: &ldquo;Oh, that salvation for Israel would come out of Zion! When the LORD restores the fortunes of his people, let Jacob rejoice, let Israel be glad.&rdquo; If none is righteous, if all have turned aside, then the only hope is a salvation that comes from outside ourselves &mdash; from God, out of Zion, the place of his dwelling and his promise. The psalm that began with the fool denying God ends with the faithful longing for God to act in saving power.</p>" +
      "<p>This closing cry is the seed of messianic hope. &ldquo;Salvation out of Zion&rdquo; looks forward to the deliverance that God himself would accomplish, and the New Testament announces that it has come: the Deliverer who comes from Zion to &ldquo;banish ungodliness from Jacob.&rdquo; What the psalmist could only long for, Christ has fulfilled. The verdict of Psalm 14 is that we cannot save ourselves; its final verse is that we do not have to, for God has promised to send salvation. The restoration of his people, glimpsed here through tears, breaks at last into joy in the gospel of Jesus Christ.</p>" +
      "<p>Cross references: <strong>Romans 11:26</strong> (&ldquo;The Deliverer will come from Zion&rdquo;); <strong>Isaiah 59:20</strong> (&ldquo;a Redeemer will come to Zion&rdquo;); <strong>Luke 1:68&ndash;69</strong> (&ldquo;he has visited and redeemed his people&rdquo;); <strong>Psalm 53:6</strong> (the parallel longing for salvation out of Zion).</p>",
  },
];

const verseItems: Accordion[] = [
  {
    id: "v1",
    title: "The Fool Says There Is No God",
    ref: "Psalm 14:1",
    body:
      "<p>&ldquo;The fool says in his heart, &lsquo;There is no God.&rsquo; They are corrupt, they do abominable deeds, there is none who does good&rdquo; (14:1). The psalm begins not with a quiet meditation but with a verdict. The &ldquo;fool&rdquo; here is the <em>nabal</em>, the morally senseless man, and his folly is located precisely: not on his lips but &ldquo;in his heart.&rdquo; This is the secret creed of a will that does not want to be answerable, the quiet wish that God would simply not be there.</p>" +
      "<p>Notice that the denial is practical, not philosophical. The fool may never have argued a single point of atheist theory; he simply lives as if there were no God to see his deeds or to call him to account. And the psalm immediately ties this denial to its consequence. The moment God is pushed out of the heart, corruption rushes in: &ldquo;they are corrupt, they do abominable deeds.&rdquo; Beliefs are never merely private; what we say in the heart about God shapes everything we do with our hands. To deny God in the heart is to unlatch the door to every abomination.</p>" +
      "<p>And so the verse ends with the first sounding of the psalm&rsquo;s great refrain: &ldquo;there is none who does good.&rdquo; What began as a portrait of one fool is already broadening into a verdict on us all. The practical atheism of the heart is not the exotic sin of a few; it is the native dialect of fallen humanity, and the goodness God requires is found in &mdash; none.</p>",
  },
  {
    id: "v2",
    title: "The LORD Looks Down; They Have All Turned Aside",
    ref: "Psalm 14:2&ndash;3",
    body:
      "<p>&ldquo;The LORD looks down from heaven on the children of man, to see if there are any who understand, who seek after God. They have all turned aside; together they have become corrupt; there is none who does good, not even one&rdquo; (14:2&ndash;3). Now the psalm lifts our eyes to heaven and shows us God himself conducting the inquiry. The image deliberately recalls Genesis, where the LORD &ldquo;came down to see&rdquo; the city and tower of human pride, and where he looked upon a corrupted earth before the flood. God is no distant abstraction; he searches the children of man with his own eyes.</p>" +
      "<p>The object of his search is poignant: he looks &ldquo;to see if there are any who understand, who seek after God.&rdquo; He is looking for the very thing the fool has refused &mdash; understanding, and the seeking heart. And the result of the divine survey is total. &ldquo;They have all turned aside&rdquo; &mdash; like travelers who have every one of them wandered from the road. &ldquo;Together they have become corrupt&rdquo; &mdash; the rot is universal. And then the verdict falls like a hammer: &ldquo;there is none who does good, not even one.&rdquo;</p>" +
      "<p>This is the verse Paul would seize upon to prove that the whole world is guilty before God. It allows no exceptions and flatters no one. The point is not that every person is as wicked as they could possibly be, but that no one is righteous enough to stand before God on the basis of their own goodness. The search of heaven comes up empty. If salvation is to come, it must come from God, for it will never be found in us.</p>",
  },
  {
    id: "v3",
    title: "Have They No Knowledge? God Is With the Righteous",
    ref: "Psalm 14:4&ndash;6",
    body:
      "<p>&ldquo;Have they no knowledge, all the evildoers who eat up my people as they eat bread, and do not call upon the LORD? There they are in great terror, for God is with the generation of the righteous. You would shame the plans of the poor, but the LORD is his refuge&rdquo; (14:4&ndash;6). The psalm now turns to the practical effects of the fool&rsquo;s creed. Those who live as if there is no God devour God&rsquo;s people &ldquo;as they eat bread&rdquo; &mdash; casually, routinely, without a second thought, treating the oppression of the faithful as ordinary as a meal.</p>" +
      "<p>&ldquo;Have they no knowledge?&rdquo; the psalmist asks in wonder. Their practical atheism is a kind of willful ignorance; they do not call upon the LORD because they have managed to forget that he is there. But their forgetfulness will not protect them. &ldquo;There they are in great terror&rdquo; &mdash; a sudden, gripping dread &mdash; &ldquo;for God is with the generation of the righteous.&rdquo; The God they denied turns out to be unmistakably present, standing among the very people they thought they could devour with impunity.</p>" +
      "<p>The closing line of the section is tender and strong: &ldquo;You would shame the plans of the poor, but the LORD is his refuge.&rdquo; The powerful may mock and frustrate the hopes of the humble, but they cannot touch the poor man&rsquo;s true shelter, for his refuge is the LORD himself. Here the psalm anticipates the whole biblical pattern in which God takes the side of the lowly who trust in him, and makes himself the hiding place of those the world despises.</p>",
  },
  {
    id: "v4",
    title: "Oh, That Salvation Would Come Out of Zion",
    ref: "Psalm 14:7",
    body:
      "<p>&ldquo;Oh, that salvation for Israel would come out of Zion! When the LORD restores the fortunes of his people, let Jacob rejoice, let Israel be glad&rdquo; (14:7). After the long indictment, the psalm closes with a sigh of longing that is also a confession of hope. If none is righteous and all have turned aside, then the only possible rescue is one that comes from outside &mdash; from God, &ldquo;out of Zion,&rdquo; the place of his presence and his promise. The psalmist does not look within for a remedy; he looks up.</p>" +
      "<p>The cry &ldquo;Oh, that salvation would come&rdquo; is the ache of every faithful heart that has reckoned honestly with sin. It is the prayer of the believer who knows that the diagnosis of the preceding verses is true, and who therefore turns his whole hope toward the saving action of God. And the psalm dares to picture the answer: &ldquo;When the LORD restores the fortunes of his people, let Jacob rejoice, let Israel be glad.&rdquo; The darkness of human corruption is not the final scene; restoration and gladness are.</p>" +
      "<p>For the Christian, this longing has a name and a face. The salvation that comes out of Zion has come in Jesus Christ, the Deliverer who, as Paul says, &ldquo;will come from Zion&rdquo; to banish ungodliness from his people. The psalm that begins with the fool denying God ends pointing straight to the gospel, where the God who was denied stoops to save. What David could only long for through tears, we may now celebrate with joy, for salvation has indeed come out of Zion.</p>",
  },
];

const applicationBlocks: { heading: string; body: string }[] = [
  {
    heading: "Beware the Quiet Atheism of the Heart",
    body:
      "<p>The fool of Psalm 14 is not, first of all, the loud unbeliever who argues against God&rsquo;s existence. He is the person who says &ldquo;there is no God&rdquo; quietly, &ldquo;in his heart&rdquo; &mdash; and then lives accordingly. This is a warning that lands close to home for the religious as much as the irreligious. We can affirm the existence of God on Sunday and yet live, decide, and spend through the week as though he does not see and will not judge. Practical atheism is the gap between our stated beliefs and our actual lives. Examine your heart honestly: are there rooms where you have, in practice, said &ldquo;there is no God&rdquo; &mdash; areas of habit, money, secret sin, or ambition where you live as if no one is watching? The cure is to bring every such room back under the gaze of the God who is always present.</p>",
  },
  {
    heading: "Let the Bad News Prepare You for the Good",
    body:
      "<p>Psalm 14 will not let us think too highly of ourselves: &ldquo;there is none who does good, not even one.&rdquo; This is hard to hear, but it is the most necessary truth in the world, because the gospel only makes sense against it. Paul placed this verdict at the foundation of his argument precisely so that we would stop trying to establish a righteousness of our own and receive the righteousness God gives in Christ. Do not rush past the diagnosis to feel better. Let it do its work. Only those who know they are sick will send for the physician; only those who have heard &ldquo;none is righteous&rdquo; can truly rejoice that Christ &ldquo;came to save sinners.&rdquo; The depth of our need is the measure of the greatness of our salvation.</p>",
  },
  {
    heading: "Trust That God Is With His People",
    body:
      "<p>For the faithful who feel devoured by a world that lives as if there were no God, Psalm 14 brings a steadying word: &ldquo;God is with the generation of the righteous,&rdquo; and &ldquo;the LORD is his refuge.&rdquo; The evildoers may seem to have all the power, eating up God&rsquo;s people as casually as bread, but their confidence is an illusion built on forgetting that God exists. He has not forgotten them, and he has not abandoned you. When you are mocked, sidelined, or shamed for trusting in him, remember that your true refuge cannot be touched. The God the world dismisses stands in the very midst of his lowly, trusting people. Take shelter in him, and do not be moved by the apparent strength of those who do not call upon his name.</p>",
  },
  {
    heading: "Long and Pray for Salvation From God",
    body:
      "<p>The psalm ends not in despair but in longing: &ldquo;Oh, that salvation for Israel would come out of Zion!&rdquo; This is the right response to an honest reckoning with sin &mdash; not self-loathing and not self-improvement, but a heartfelt cry for God to save. For us this longing has been answered: salvation has come out of Zion in Jesus Christ, the Deliverer who saves all who call on him. So let Psalm 14 shape both your prayers and your hope. Pray it for the fools of our own day who say in their hearts there is no God, that the Deliverer would open their eyes. Pray it for yourself, that the salvation already accomplished would be ever more deeply your joy. And let the psalm&rsquo;s closing gladness be yours: when the LORD restores the fortunes of his people, let Jacob rejoice, let Israel be glad.</p>",
  },
];

const reflectionQuestions = [
  "Where might you, in practice rather than in theory, be living as if &ldquo;there is no God&rdquo; &mdash; areas where you act as though God does not see or will not judge?",
  "Why is it important to hear the hard verdict &ldquo;there is none who does good, not even one&rdquo; before we can rightly receive the gospel of grace?",
  "How does Paul&rsquo;s use of Psalm 14 in Romans 3 deepen your understanding of why salvation has to be a gift rather than an achievement?",
  "The fool is &ldquo;morally,&rdquo; not merely intellectually, deficient. How does that reframe the way you think about unbelief in yourself and others?",
  "What does it mean for you, in seasons when the faithful seem to be &ldquo;eaten up,&rdquo; that &ldquo;God is with the generation of the righteous&rdquo; and &ldquo;the LORD is his refuge&rdquo;?",
  "The psalm ends longing for &ldquo;salvation out of Zion.&rdquo; How does it change your prayers to know that this salvation has come in Christ &mdash; both for yourself and for the &ldquo;fools&rdquo; of today?",
];

const closingPrayer =
  "<p>O LORD, you look down from heaven on the children of man, and your searching eyes have found in me what they found in all &mdash; one who has turned aside, who has too often said in his heart that you do not see. I confess that there is no good in me to plead, no righteousness of my own to bring. Have mercy on me, a sinner. Thank you that you did not leave me in the verdict of this psalm, but sent salvation out of Zion in your Son, the Deliverer who banishes ungodliness and saves all who call upon him. Be with me in the generation of the righteous; be my refuge when the world that forgets you would devour my hope. And teach me to long, with this ancient song, for the day when you fully restore the fortunes of your people, that Jacob may rejoice and Israel be glad. In the saving name of Jesus, Amen.</p>";

export default function Psalm14Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const accordionStyle = (active: boolean): React.CSSProperties => ({
    background: CARD,
    border: `1px solid ${active ? PURPLE : BORDER}`,
    borderRadius: 12,
    marginBottom: 14,
    overflow: "hidden",
    transition: "border-color 0.2s ease",
  });

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "system-ui, sans-serif" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: "#B7A6F0", borderRadius: 999, padding: "5px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 18 }}>
            Psalms Deep Dive
          </div>
          <h1 style={{ fontSize: "2.6rem", lineHeight: 1.1, margin: "0 0 14px", fontWeight: 800, letterSpacing: -1 }}>
            Psalm 14
          </h1>
          <p style={{ fontSize: "1.2rem", color: MUTED, margin: "0 0 26px", lineHeight: 1.5, maxWidth: 640 }}>
            The folly of practical atheism and the universal corruption of humanity &mdash; the psalm Paul cites to prove that none is righteous, ending in the longing for salvation out of Zion.
          </p>
          <div
            style={{
              background: `linear-gradient(135deg, ${CARD}, #16122a)`,
              border: `1px solid ${BORDER}`,
              borderLeft: `4px solid ${PURPLE}`,
              borderRadius: 14,
              padding: "1.5rem 1.6rem",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: GOLD, marginBottom: 10 }}>
              Key Verse &mdash; Psalm 14:1
            </div>
            <p
              style={{ margin: 0, fontSize: "1.18rem", lineHeight: 1.6, fontStyle: "italic", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "&ldquo;The fool says in his heart, &lsquo;There is no God.&rsquo; They are corrupt, they do abominable deeds, there is none who does good.&rdquo;",
              }}
            />
          </div>
        </header>

        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: "2rem",
            borderBottom: `1px solid ${BORDER}`,
            paddingBottom: 14,
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  background: active ? PURPLE : "transparent",
                  color: active ? "#fff" : MUTED,
                  border: `1px solid ${active ? PURPLE : BORDER}`,
                  borderRadius: 999,
                  padding: "9px 18px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
              >
                {TAB_LABELS[t]}
              </button>
            );
          })}
        </nav>

        {tab === "overview" && (
          <section>
            {overviewBlocks.map((b, i) => (
              <div key={i} style={{ marginBottom: "1.9rem" }}>
                <h2 style={{ fontSize: "1.5rem", margin: "0 0 12px", fontWeight: 700, color: TEXT }}>{b.heading}</h2>
                <p
                  style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.75, color: "#D6D6E6" }}
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
              </div>
            ))}
            <div
              style={{
                marginTop: "2rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: 14,
                padding: "1.5rem 1.6rem",
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontSize: "1.15rem", color: TEAL, fontWeight: 700 }}>
                The Structure at a Glance
              </h3>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                {[
                  { label: "The Fool", ref: "v.&nbsp;1", desc: "says in his heart, there is no God" },
                  { label: "The Verdict", ref: "vv.&nbsp;2&ndash;3", desc: "all turned aside; none does good" },
                  { label: "The Wicked", ref: "vv.&nbsp;4&ndash;6", desc: "God is with the righteous" },
                  { label: "The Longing", ref: "v.&nbsp;7", desc: "salvation out of Zion" },
                ].map((row, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "baseline",
                      padding: "10px 0",
                      borderBottom: i < 3 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <span style={{ color: GOLD, fontWeight: 700, minWidth: 92 }}>{row.label}</span>
                    <span
                      style={{ color: MUTED, fontSize: 13, minWidth: 86 }}
                      dangerouslySetInnerHTML={{ __html: row.ref }}
                    />
                    <span
                      style={{ color: "#D6D6E6", fontSize: 14 }}
                      dangerouslySetInnerHTML={{ __html: row.desc }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {tab === "themes" && (
          <section>
            {themeItems.map((item) => {
              const active = open === item.id;
              return (
                <div key={item.id} style={accordionStyle(active)}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      padding: "1.1rem 1.3rem",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span>
                      <span
                        style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <span
                        style={{ display: "block", fontSize: 12.5, color: PURPLE, marginTop: 4, fontWeight: 600 }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                    </span>
                    <span style={{ color: PURPLE, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
                      {active ? "-" : "+"}
                    </span>
                  </button>
                  {active && (
                    <div
                      style={{ padding: "0 1.3rem 1.3rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D6D6E6" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "verse" && (
          <section>
            <p style={{ color: MUTED, marginBottom: "1.6rem", fontSize: "1.02rem", lineHeight: 1.6 }}>
              Work through Psalm 14 section by section. Tap each heading to expand the commentary.
            </p>
            {verseItems.map((item) => {
              const active = open === item.id;
              return (
                <div key={item.id} style={accordionStyle(active)}>
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      color: TEXT,
                      padding: "1.1rem 1.3rem",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span>
                      <span
                        style={{ display: "block", fontSize: 12.5, color: GOLD, fontWeight: 700, letterSpacing: 0.5, marginBottom: 4 }}
                        dangerouslySetInnerHTML={{ __html: item.ref }}
                      />
                      <span
                        style={{ display: "block", fontSize: "1.1rem", fontWeight: 700 }}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </span>
                    <span style={{ color: GOLD, fontSize: 22, lineHeight: 1, flexShrink: 0 }}>
                      {active ? "-" : "+"}
                    </span>
                  </button>
                  {active && (
                    <div
                      style={{ padding: "0 1.3rem 1.3rem", fontSize: "1.02rem", lineHeight: 1.75, color: "#D6D6E6" }}
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )}
                </div>
              );
            })}
          </section>
        )}

        {tab === "application" && (
          <section>
            {applicationBlocks.map((b, i) => (
              <div key={i} style={{ marginBottom: "1.9rem" }}>
                <h2 style={{ fontSize: "1.4rem", margin: "0 0 12px", fontWeight: 700, color: TEXT }}>{b.heading}</h2>
                <div
                  style={{ fontSize: "1.04rem", lineHeight: 1.75, color: "#D6D6E6" }}
                  dangerouslySetInnerHTML={{ __html: b.body }}
                />
              </div>
            ))}

            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${TEAL}`,
                borderRadius: 14,
                padding: "1.6rem 1.7rem",
                margin: "2.2rem 0",
              }}
            >
              <h3 style={{ margin: "0 0 16px", fontSize: "1.25rem", color: TEAL, fontWeight: 700 }}>
                Questions for Reflection
              </h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", color: "#D6D6E6" }}>
                {reflectionQuestions.map((q, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: 14, fontSize: "1.02rem", lineHeight: 1.65 }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>

            <h3 style={{ fontSize: "1.4rem", margin: "2.4rem 0 1.2rem", fontWeight: 700, color: TEXT }}>
              Watch &amp; Reflect
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 18,
                marginBottom: "2.4rem",
              }}
            >
              {videoItems.map((v) => (
                <div
                  key={v.videoId}
                  style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.9rem 1rem", fontSize: 14, color: "#D6D6E6", lineHeight: 1.45 }}>
                    {v.title}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(135deg, ${CARD}, #131f18)`,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: 14,
                padding: "1.7rem 1.8rem",
              }}
            >
              <h3 style={{ margin: "0 0 14px", fontSize: "1.25rem", color: GREEN, fontWeight: 700 }}>
                A Closing Prayer
              </h3>
              <div
                style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#E4E2F0", fontStyle: "italic" }}
                dangerouslySetInnerHTML={{ __html: closingPrayer }}
              />
            </div>

            <p style={{ marginTop: "2.4rem", textAlign: "center", color: MUTED, fontSize: 14 }}>
              <span style={{ color: ROSE }}>&hearts;</span>&nbsp; Continue your study with Psalm 53, the near-identical doublet of this psalm, and Psalm 51, David&rsquo;s great prayer of repentance.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
