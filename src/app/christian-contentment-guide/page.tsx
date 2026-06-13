"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["The Secret of Contentment", "The Danger of Covetousness", "Comparison and the Modern World", "Gratitude as a Discipline", "Satisfaction in God Alone", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Secret of Contentment",
    heading: "The Secret Paul Learned",
    paragraphs: [
      "Near the end of his letter to the Philippians, the apostle Paul makes one of the most remarkable claims in all of Scripture about the inner life: &ldquo;I have learned in whatever situation I am to be content. I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me&rdquo; (Philippians 4:11&ndash;13). What makes this astonishing is not the sentiment but the setting. Paul wrote these words from prison, his future uncertain, his body worn by beatings and shipwrecks and hunger. This is not the serene reflection of a comfortable man; it is hard-won testimony from the depths.",
      "The first thing to notice is that Paul says he &ldquo;learned&rdquo; contentment. Twice in these few verses he uses that word. Contentment, then, is not a personality trait that some lucky people are born with and others lack. It is not the same as an easygoing temperament. It is a learned secret &mdash; an acquired competence, a skill developed over time through discipline and experience. This is enormously hopeful for those of us who are restless and discontented by nature. If contentment were a matter of inborn disposition, the anxious and the striving would be shut out of it. But because it is learned, it is available to anyone willing to enter Paul&rsquo;s school.",
      "Notice, too, where Paul learned it: in both directions. He knows &ldquo;how to be brought low&rdquo; and he knows &ldquo;how to abound.&rdquo; We readily assume that contentment is the challenge of poverty &mdash; that the poor must learn to be satisfied with little. But Paul insists that abundance is its own school, and arguably the harder one. Prosperity carries hidden dangers: the soul grows soft, forgets its dependence on God, mistakes its blessings for its birthright. Many a person who kept faith through hardship has had it quietly eroded by success. Paul had to learn contentment in plenty as deliberately as he learned it in want. The discipline runs in both directions.",
      "Crucially, Paul&rsquo;s contentment is not stoic self-sufficiency. The ancient Stoics also prized contentment, but theirs was an achievement of the autonomous will &mdash; a hardening of the self against the blows of fortune, a determination to need nothing and feel nothing. Paul&rsquo;s contentment is the opposite. It is not self-sufficiency but Christ-sufficiency. &ldquo;I can do all things through him who strengthens me.&rdquo; The strength is borrowed, not generated. Paul is not content because he has steeled himself to need nothing; he is content because he has found in Christ the one thing that he truly needs, and that one thing cannot be taken from him by any circumstance.",
      "This reframes the famous verse that ends the passage. &ldquo;I can do all things through him who strengthens me&rdquo; (Philippians 4:13) is often quoted as a promise of unlimited achievement &mdash; printed on the gear of athletes and the walls of ambitious offices, as if it guaranteed success in any endeavor. But in context it means something both humbler and deeper. The &ldquo;all things&rdquo; Paul has in view are the heights of plenty and the depths of want, abundance and hunger, freedom and prison. The strength of Christ is what enables him to remain content through any of them. It is not a promise that we will win, but a promise that, win or lose, full or empty, Christ will be enough to carry us.",
      "There is also a quiet realism in Paul&rsquo;s language that guards against a false picture of contentment as constant cheerfulness. Paul does not claim that hunger felt like plenty, or that being brought low felt the same as abounding. He felt the difference; the low places were genuinely low. Contentment is not the denial of hardship or the numbing of feeling. It is the deep settledness of a soul that, even while feeling the full weight of its circumstances, is anchored to something the circumstances cannot reach. Paul could weep and want and still be content, because his peace did not depend on the things he lacked.",
      "Finally, the very fact that contentment must be learned tells us something about the road to it. We do not arrive at it by accident or by waiting for circumstances to improve. We learn it the way Paul did &mdash; in the actual classroom of plenty and want, by repeatedly returning to Christ as our sufficiency when life is hard and when life is easy, until the lesson sinks from our heads into our hearts. The chapters that follow trace the obstacles that block this lesson and the practices that drive it home: the covetousness that whispers we need more, the comparison that poisons our joy, the gratitude that reorients the heart, and finally the satisfaction in God himself that is the secret&rsquo;s deepest root.",
    ],
  },
  {
    id: "The Danger of Covetousness",
    heading: "The Danger of Covetousness and the Love of Money",
    paragraphs: [
      "If contentment is the secret to be learned, covetousness is the lie that keeps us from learning it. Covetousness is the restless craving for what we do not have &mdash; the conviction, lodged deep in the heart, that satisfaction lies just beyond our current reach, in the thing we have not yet acquired. Scripture treats it not as a minor flaw but as a serious spiritual danger, grave enough to be named in the very heart of the moral law. The tenth commandment forbids it directly: &ldquo;You shall not covet your neighbor&rsquo;s house&hellip; or anything that is your neighbor&rsquo;s&rdquo; (Exodus 20:17). It is striking that the Ten Commandments end not with an outward act but with an inward desire. Murder, theft, and adultery are deeds; coveting is a disposition of the heart. God&rsquo;s law reaches all the way down to what we want.",
      "The New Testament intensifies the warning, especially regarding the love of money. &ldquo;The love of money is a root of all kinds of evils,&rdquo; Paul writes to Timothy. &ldquo;It is through this craving that some have wandered away from the faith and pierced themselves with many pangs&rdquo; (1 Timothy 6:10). The phrasing is careful and often misquoted. It is not money itself that is the root of evil, but the love of it &mdash; the craving, the inordinate desire. And money serves as the prime example precisely because it promises to be the universal solution, the master key that can purchase security, status, pleasure, and freedom all at once. The love of money is dangerous because it sets up a rival god, a counterfeit source of the very satisfaction that belongs to God alone.",
      "The writer to the Hebrews ties the cure directly to contentment: &ldquo;Keep your life free from love of money, and be content with what you have, for he has said, &lsquo;I will never leave you nor forsake you&rsquo;&rdquo; (Hebrews 13:5). The logic is profound. The antidote to greed is not merely willpower but a settled trust in the presence of God. Why grasp after money as a hedge against an uncertain future when the God who holds the future has promised never to abandon you? Discontent and covetousness are, at root, a failure to believe that promise. The grasping hand is the hand that has forgotten it is already held.",
      "What makes covetousness so insidious is its deceptive nature: the desire for more never actually satisfies. Each acquisition that was supposed to bring contentment instead resets the baseline, and the craving simply attaches itself to the next thing. The Preacher of Ecclesiastes observed this ancient futility: &ldquo;He who loves money will not be satisfied with money, nor he who loves wealth with his income&rdquo; (Ecclesiastes 5:10). The richest man may be the most discontented, because his wealth has only enlarged his appetite. Covetousness is a thirst that drinking salt water cannot quench; the more we feed it, the more it demands. This is why no level of acquisition ever delivers the peace it promises.",
      "The Puritans understood this with particular depth, and no one explored it more memorably than Jeremiah Burroughs in his classic work &ldquo;The Rare Jewel of Christian Contentment.&rdquo; Burroughs defined Christian contentment as &ldquo;that sweet, inward, quiet, gracious frame of spirit, which freely submits to and delights in God&rsquo;s wise and fatherly disposal in every condition.&rdquo; Every word repays attention. Contentment is inward, a frame of the spirit, not a matter of outward circumstance. It is gracious, a fruit of grace rather than natural temperament. It freely submits, without grumbling. And remarkably, it delights &mdash; it does not merely endure God&rsquo;s providence but learns to take pleasure in it, trusting that the hand arranging our circumstances is both wise and fatherly.",
      "Burroughs made a crucial observation that overturns the world&rsquo;s logic: a Christian comes to contentment, he said, not by adding to what he has, but by subtracting from his desires. The world tries to achieve contentment by increasing possessions to meet its cravings &mdash; a race that can never be won, since the cravings always outrun the supply. The Christian works in the opposite direction, learning through grace to want less, to bring desire into submission, until what one already has is recognized as enough. &ldquo;The way of contentment,&rdquo; in this view, &ldquo;is not by adding to a man&rsquo;s estate, but by subtracting from his desires.&rdquo; This is the great reversal that covetousness can never grasp.",
      "Diagnosing covetousness in our own hearts is difficult, because it disguises itself so well. It rarely announces itself as greed; it presents as prudence, ambition, the reasonable desire to provide, the natural wish for nice things. Jesus warned, &ldquo;Take care, and be on your guard against all covetousness, for one&rsquo;s life does not consist in the abundance of his possessions&rdquo; (Luke 12:15). The warning to &ldquo;be on your guard&rdquo; implies that covetousness slips past undetected unless we are watching for it. The discipline of contentment, then, begins with honest self-examination: noticing the cravings, naming them, and refusing to let them masquerade as needs. Only the heart that has seen through covetousness can begin to be free of it.",
    ],
  },
  {
    id: "Comparison and the Modern World",
    heading: "Comparison and the Manufactured Discontent of the Modern World",
    paragraphs: [
      "Every age has struggled with discontent, but our own age has engineered it on an industrial scale. The challenge of contentment in the era of social media and consumer advertising is unlike anything previous generations faced. For most of human history, a person compared themselves to the few dozen people in their village. Today, through the glowing screen in every pocket, we compare ourselves to a curated parade of the most attractive, successful, wealthy, and seemingly happy people on the planet, scrolling past hundreds of them before breakfast. The scale of comparison has exploded, and with it the scale of our manufactured dissatisfaction.",
      "Social media in particular operates on a cruel asymmetry: we compare our unedited inner lives to other people&rsquo;s carefully edited outer lives. What we see is the highlight reel &mdash; the vacation photos, the engagement announcements, the career triumphs, the beautifully plated meals &mdash; while what we feel is the full, unfiltered reality of our own ordinary days, with their boredom, anxiety, and disappointment. No one posts their loneliness, their failures, their quiet despair at two in the morning. So we measure our blooper reel against everyone else&rsquo;s highlight reel and conclude, inevitably, that we are falling behind. The comparison is rigged from the start.",
      "There is wisdom in the often-repeated saying that &ldquo;comparison is the thief of joy.&rdquo; The mechanism is precise: comparison steals joy by relocating the source of our happiness from what we have to where we rank. A person can possess a perfectly good life &mdash; meaningful work, loving relationships, daily bread, genuine blessings &mdash; and have all of it drained of joy in an instant by the discovery that someone else has more. The good thing in hand has not changed; only the comparison has changed. This is why comparison is so spiritually corrosive: it can poison even genuine abundance, turning gifts into grievances the moment we see someone with a larger gift.",
      "Behind much of this lies a deliberate engine: the manufactured discontent of a consumer economy. Advertising, by its very design, exists to create dissatisfaction. An advertisement that left you content with what you already own would be a failed advertisement. The entire multi-billion-dollar apparatus is engineered to make you feel that your current possessions, your current appearance, your current life are inadequate &mdash; and that the product on offer will close the gap. We are immersed, from childhood, in a sea of messages whose unified purpose is to keep us perpetually unsatisfied. Contentment is not merely a private struggle; it is countercultural resistance against a system financially invested in our discontent.",
      "The biblical writers could not have imagined our technology, yet their diagnosis cuts straight to its heart. The tenth commandment against coveting, the warnings against the love of money, the call to be content with what we have &mdash; all of these speak directly to a heart constantly inflamed by comparison. When Scripture tells us, &ldquo;Do not covet your neighbor&rsquo;s house,&rdquo; it names the exact reflex that social media weaponizes. The ancient remedy is also the modern one: a heart so anchored in God&rsquo;s sufficiency that the endless parade of other people&rsquo;s lives loses its power to unsettle us. The problem is old; only its scale and speed are new.",
      "Resisting this requires real spiritual discipline, because the comparison trap is not something we drift out of by accident; the entire environment is designed to keep us in it. Practical wisdom has emerged for this fight: setting boundaries on screen time, curating or pruning the feeds that most reliably trigger envy, practicing deliberate gratitude as a counterweight, and periodically stepping away from the comparison machine altogether through seasons of fasting from social media. These are not legalistic rules but acts of self-protection, ways of refusing to keep handing our joy over to the thief. The goal is not to despise technology but to refuse to let it dictate the condition of our souls.",
      "Ultimately, the discipline is one of returning our gaze to the right place. Comparison forces our eyes sideways, fixed forever on what others have. Contentment lifts our eyes upward, to the God who is the giver of every good gift, and inward, to honest gratitude for what we have actually received. The cure for a heart distorted by ten thousand highlight reels is not a better filter but a different center of gravity. When our sense of worth and well-being is settled in being known and loved by God, the curated lives of strangers lose their grip, and we are free to receive our own life &mdash; ordinary, unfiltered, and genuinely blessed &mdash; as enough.",
    ],
  },
  {
    id: "Gratitude as a Discipline",
    heading: "Gratitude as the Discipline That Cultivates Contentment",
    paragraphs: [
      "If covetousness and comparison are the diseases that destroy contentment, gratitude is the daily medicine that restores it. Gratitude is the practical discipline through which contentment is actually cultivated &mdash; the concrete habit that, over time, retrains a restless heart. Scripture commands it without qualification: &ldquo;Give thanks in all circumstances; for this is the will of God in Christ Jesus for you&rdquo; (1 Thessalonians 5:18). The phrase &ldquo;in all circumstances&rdquo; is bracing. We are not told to give thanks only when things go well, but in every condition, including hardship. This is not a denial of pain but a deliberate reorientation, a refusal to let difficulty be the only thing the heart can see.",
      "Notice that gratitude is commanded, which means it is not merely a spontaneous feeling but a chosen practice. We tend to think of thankfulness as a mood that arrives when life is good and departs when life is hard. But Scripture treats it as a discipline we take up regardless of mood. We can choose to give thanks, to direct our attention to what is given, even on days when we feel nothing of the sort. And as with any discipline, the practice gradually shapes the feeling. The act of giving thanks, repeated faithfully, slowly cultivates a genuinely grateful heart, which in turn becomes the soil in which contentment grows.",
      "Even outside the framework of faith, the evidence for gratitude&rsquo;s power is substantial. A large body of research in psychology has consistently linked the regular practice of gratitude to greater wellbeing, stronger relationships, better sleep, reduced anxiety, and increased resilience in the face of adversity. Studies repeatedly find that people who deliberately cultivate thankfulness report higher levels of life satisfaction and lower levels of depression. The Christian is not surprised by this; Scripture has always presented gratitude as the will of God for our flourishing. What modern research describes, the wisdom of faith long affirmed: that the thankful heart is a healthier and happier heart.",
      "This research has given rise to concrete practices that anyone can adopt, the most well-known being gratitude journaling &mdash; the simple discipline of regularly writing down a handful of specific things for which one is thankful. The specificity matters. Vague gratitude (&ldquo;I&rsquo;m thankful for my life&rdquo;) does less than particular gratitude (&ldquo;I&rsquo;m thankful for the unexpected phone call from an old friend this afternoon&rdquo;). Other practices include offering thanks before meals, keeping a running record of answered prayers, beginning the day by naming blessings, or pausing in the evening to recount the gifts of the past hours. These small habits act as deliberate counterweights to the heart&rsquo;s natural drift toward complaint.",
      "What gives gratitude its transforming power is the way thankfulness reorients the heart from what is lacking to what is given. The discontented heart operates by a kind of selective attention, fixating on the one thing it does not have while remaining blind to the hundred things it does. Gratitude reverses the focus. It directs the eyes to the gifts already received, the blessings already in hand, the goodness already present. It does not deny that something is missing; it simply refuses to let the missing thing eclipse everything else. In this way gratitude does not change our circumstances, but it changes what we see when we look at them &mdash; and that shift in seeing is the beginning of contentment.",
      "Gratitude is also, at its core, the precise opposite of entitlement, and this contrast exposes the deep root of discontent. Entitlement is the assumption that we are owed &mdash; that the good things in our lives are no more than our due, and that anything less than what we expected is a grievance. The entitled heart cannot be content, because it experiences blessings merely as the payment of a debt and disappointments as injustices. Gratitude dismantles this by recognizing that everything we have is gift, not wage. The grateful person receives each good thing with surprise and thankfulness rather than expecting it as a right, and a heart that expects nothing and receives everything as gift is a heart on the very threshold of contentment.",
      "There is a theological depth here that goes beyond technique. For the Christian, gratitude is not merely a positive mental habit but a true perception of reality: that we are creatures who have received our very existence, our breath, our daily bread, our relationships, and above all our salvation as unearned gifts from the hand of a generous God. To give thanks is therefore to see the world rightly &mdash; to acknowledge the Giver behind every gift. This is why gratitude and contentment are so deeply joined. The person who genuinely sees that all is grace can hardly remain discontented, for they have understood that they stand at every moment as the recipient of a generosity they did nothing to deserve.",
    ],
  },
  {
    id: "Satisfaction in God Alone",
    heading: "Satisfaction in God Alone: The Deepest Ground of Contentment",
    paragraphs: [
      "Beneath every practice and every discipline lies the deepest ground of contentment, the root from which all the rest grows: that God himself, and not his gifts, is the soul&rsquo;s true satisfaction. This is the great secret that Paul had learned and that the whole biblical witness presses toward. We are restless and discontented because we keep seeking in created things a satisfaction that only the Creator can give. We pursue contentment in money, status, relationships, achievement, and comfort &mdash; all genuine goods &mdash; and find that none of them, even when attained, finally fills the void. They were never meant to. The void is God-shaped, and only God fits it.",
      "Paul makes the connection explicit in his letter to Timothy: &ldquo;Godliness with contentment is great gain&rdquo; (1 Timothy 6:6). The world believes that gain produces contentment &mdash; that if we accumulate enough, we will at last be satisfied. Paul reverses it: contentment, joined to godliness, is itself the great gain. The person who has learned to find their sufficiency in God has already obtained the treasure that all the world&rsquo;s acquiring is vainly chasing. This is wealth that no market can touch and no loss can diminish. To possess God and to be content in him is to be richer than the richest discontented person on earth.",
      "The Psalms give voice to this satisfaction in its purest form. The psalmist of Psalm 73, after wrestling bitterly with envy at the prosperity of the wicked, arrives at a breakthrough that reframes everything: &ldquo;Whom have I in heaven but you? And there is nothing on earth that I desire besides you. My flesh and my heart may fail, but God is the strength of my heart and my portion forever&rdquo; (Psalm 73:25&ndash;26). Here is the summit of contentment. Once God himself becomes the heart&rsquo;s supreme desire, the envy that had nearly undone the psalmist simply dissolves. He no longer needs what the wicked have, because he has discovered that he possesses the one thing worth having, and it can never be taken from him.",
      "This was precisely Augustine&rsquo;s great discovery, distilled into one of the most quoted sentences in Christian history. At the opening of his &ldquo;Confessions,&rdquo; reflecting on a lifetime of restless searching for satisfaction in ambition, pleasure, and worldly success, he addresses God: &ldquo;You have made us for yourself, and our heart is restless until it rests in you.&rdquo; In a single line he diagnoses the whole human condition. Our chronic discontent is not a flaw to be fixed by acquiring more; it is a homing signal, the soul&rsquo;s restlessness reaching out for the God it was made to rest in. Every lesser satisfaction leaves us restless precisely because it is lesser. Only in God does the restlessness finally cease.",
      "Understanding this transforms how we relate to all the legitimate good things in life. The point is not that money, relationships, work, and comfort are bad, or that we must despise them to be content. The point is that they make terrible gods and wonderful gifts. When we ask created things to be our ultimate satisfaction &mdash; to do for us what only God can do &mdash; we crush them under a weight they cannot bear, and we end in disappointment and idolatry. But when God is our satisfaction, the gifts can be received and enjoyed freely for what they are: good things from a good Father, neither clung to in desperation nor required to fill the infinite ache that only their Giver can fill.",
      "This is why contentment is ultimately the fruit of finding in God the satisfaction we wrongly seek in circumstances and things. The whole journey of these pages converges here. We learn the secret as Paul did, in plenty and want; we resist the lie of covetousness and the trap of comparison; we cultivate the discipline of gratitude &mdash; but all of it is finally grounded in the discovery that God himself is enough. The contented person is not the one whose circumstances are best arranged, but the one whose heart has come to rest in God, so that, like Paul in prison, they can face any and every circumstance with a peace that the circumstances did not give and cannot take away.",
      "There is profound freedom in this. The person who has found their satisfaction in God is liberated from the exhausting tyranny of needing life to go a certain way. They can hold their possessions loosely, because their treasure is secure elsewhere. They can endure loss without being destroyed, because the one thing they cannot lose is the one thing that matters most. They can rejoice in abundance without idolizing it and accept scarcity without despairing. This is the rare jewel of Christian contentment in its full brilliance: a soul so anchored in the love and sufficiency of God that, whatever the weather of its circumstances, it has already come home and is at rest.",
    ],
  },
];

const videoItems = [
  { videoId: "1KCgwxF1Wf0", title: "The Secret of Contentment - Philippians 4" },
  { videoId: "Fm0Nv0_8nLw", title: "Finding Contentment in a Discontented World" },
  { videoId: "lYpO_zbHbf0", title: "Gratitude and Christian Contentment" },
];

export default function ChristianContentmentGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Hero */}
        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "0.78rem", color: ACCENT, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.6rem" }}>
            Faith &amp; Contentment
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Contentment
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Contentment through a Christian lens &mdash; the secret Paul learned in plenty and want, the danger of covetousness and the love of money, the comparison trap of the modern world, gratitude as a daily discipline, and the deepest ground of all: finding satisfaction in God alone.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;I have learned in whatever situation I am to be content.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>Philippians 4:11</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(58, 125, 86, 0.12)` : "transparent",
              color: tab === t ? ACCENT : MUTED,
              cursor: "pointer", fontSize: "0.88rem", fontWeight: tab === t ? 600 : 400,
              transition: "all 0.15s ease", whiteSpace: "nowrap" as const,
            }}>
              {t}
            </button>
          ))}
        </nav>

        {/* Text tab content */}
        {currentSection && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>{currentSection.heading}</h2>
            {currentSection.paragraphs.map((para, i) => (
              <p key={i} style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </section>
        )}

        {/* Videos tab */}
        {tab === "Videos" && (
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 4 }}>Videos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {videoItems.map((video) => (
                <div key={video.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={video.videoId} title={video.title} />
                  <div style={{ padding: "0.9rem 1.1rem" }}>
                    <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Closing callout */}
        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>The Rare Jewel of Contentment</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Contentment is not the absence of desire or the denial of hardship &mdash; it is the deep settledness of a soul that has found its sufficiency in God. Paul learned it in prison; the psalmist found it when God became his portion; Augustine discovered that the restless heart rests only in its Maker. Whatever your circumstances &mdash; plenty or want, abundance or need &mdash; the secret remains the same: a heart anchored in the love of God is a heart that has already come home.</p>
        </div>
      </main>
    </div>
  );
}
