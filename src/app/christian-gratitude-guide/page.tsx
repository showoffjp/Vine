"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["Grace and Gratitude", "Give Thanks in All Things", "The Danger of Ingratitude", "Gratitude and Wellbeing", "Cultivating Thankfulness", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Grace and Gratitude",
    heading: "Grace and Gratitude: The Deep Connection",
    paragraphs: [
      "There is a connection between grace and gratitude so deep that it is written into the very words. In Greek, the word for grace is <em>charis</em>, and the word for thanksgiving is <em>eucharistia</em> &mdash; literally a &ldquo;good grace,&rdquo; grace returned, grace answered. The same root runs through the English: <em>grace</em> and <em>gratitude</em> spring from the same Latin word, <em>gratia</em>. This is not a coincidence of etymology but a window into the structure of the Christian life. Gratitude is the natural and proper response to grace. Where grace has been truly received, gratitude wells up; where there is no gratitude, one wonders whether grace has been understood at all.",
      "Grace, in the Christian gospel, is the unearned and unearnable favor of God &mdash; the gift of salvation given freely to those who could never deserve it. &ldquo;For by grace you have been saved through faith. And this is not your own doing; it is the gift of God&rdquo; (Ephesians 2:8). Everything that matters most in the Christian life is gift: life itself, the world we did not make, the breath in our lungs, and above all the rescue accomplished for us in Christ. To grasp this is to find oneself in the posture of a perpetual recipient &mdash; one who has been given everything and earned none of it.",
      "And the only fitting response to a gift is thanksgiving. This is why gratitude is not merely one Christian virtue among many but lies near the heart of the whole Christian disposition toward God. The believer who understands grace cannot help but be thankful, because they know themselves to be living entirely on gifts. Thanksgiving is grace recognized and returned &mdash; the creature&rsquo;s answer to the Creator&rsquo;s generosity, the redeemed sinner&rsquo;s answer to the cross. The Christian life, viewed from this angle, is fundamentally a life of <em>eucharistia</em>: a life of giving thanks for the gift of salvation.",
      "Gratitude, understood this way, reshapes the way we see the whole of existence. It teaches us to receive all of life as gift rather than as entitlement. The sunrise, the meal, the friendship, the work, the very capacity to enjoy any of it &mdash; none of it is owed to us; all of it is grace. The grateful heart is one that has learned to see the giver behind every gift, to trace each blessing back to the open hand of God. &ldquo;Every good gift and every perfect gift is from above, coming down from the Father of lights&rdquo; (James 1:17). To live gratefully is to live in the constant awareness that we are surrounded by gifts.",
      "This is precisely why ingratitude is so corrosive and gratitude so freeing. The ungrateful person lives as if the world owed them everything, and so they are perpetually disappointed, perpetually aggrieved, perpetually focused on what they lack. The grateful person, by contrast, lives in a kind of perpetual surprise that they have been given anything at all, and so they are rich even in want. Gratitude is the difference between seeing life as a debt the world has failed to pay and seeing it as a gift one had no right to expect.",
      "The Reformers understood this with particular clarity. The Heidelberg Catechism famously structures the whole Christian life under three headings: our guilt, our deliverance, and our gratitude. The entire Christian ethic &mdash; the obedience, the good works, the holy living &mdash; is placed under the heading of gratitude. We do not obey God in order to earn his grace; we obey out of thankfulness for the grace already given. Good works are not the payment for salvation but the gratitude of the saved. This rescues Christian obedience from the prison of anxious merit and sets it free as the joyful overflow of a thankful heart.",
      "So gratitude is not a small or optional thing in the Christian life. It is the answering note to the entire melody of grace. Where the gospel of free grace is truly believed, gratitude is its inevitable fruit; and where gratitude is present, it testifies that grace has been received and understood. To grow in gratitude is to grow in the deepest recognition of what God has done &mdash; and to lose it is to drift away from the very heart of the faith.",
    ],
  },
  {
    id: "Give Thanks in All Things",
    heading: "Give Thanks in All Circumstances",
    paragraphs: [
      "Among the most demanding commands in the New Testament is Paul&rsquo;s instruction to the Thessalonians: &ldquo;Rejoice always, pray without ceasing, give thanks in all circumstances, for this is the will of God in Christ Jesus for you&rdquo; (1 Thessalonians 5:16-18). It is striking that Paul attaches the rare and weighty phrase &ldquo;this is the will of God&rdquo; to the call to give thanks. Christians often agonize over discerning God&rsquo;s will for their lives; here Paul states it plainly. Whatever else God&rsquo;s will may include, it certainly includes this: that his people be a thankful people, giving thanks in all circumstances.",
      "Everything hinges on a single small preposition. Paul does not say give thanks <em>for</em> all circumstances, as though we were to be grateful for cancer, for cruelty, for catastrophe. He says give thanks <em>in</em> all circumstances. The difference is enormous. We are not asked to pretend that evil is good, or to manufacture thankfulness for genuine tragedy. We are asked to maintain a posture of thanksgiving even in the midst of hardship &mdash; to find, in every circumstance however dark, reasons to give thanks to the God who remains good, who is still present, who has not abandoned us, and who is working even now toward our redemption.",
      "This is thanksgiving as an act of faith rather than an expression of feeling. To give thanks in the midst of suffering is to declare, against the testimony of our circumstances, that God is good even when our situation is not. It is to refuse to let our momentary experience define our theology. The grateful believer in the valley says, in effect: I cannot see the goodness right now, but I know it is there, because I know the One who is unchanging, and so I will give thanks. Such thanksgiving is one of the boldest exercises of faith a Christian can perform.",
      "Scripture is full of such defiant thanksgiving. The supreme picture is Paul and Silas in the Philippian jail: beaten, their feet in the stocks, in the dark of midnight, &ldquo;praying and singing hymns to God&rdquo; while the other prisoners listened (Acts 16:25). They had every earthly reason for despair and chose instead to worship. Their songs in the darkness were a thunderous declaration that their joy did not depend on their circumstances but on their God. Habakkuk reaches the same summit: though the fig tree does not blossom and there is no fruit on the vines and the fields yield no food, &ldquo;yet I will rejoice in the Lord; I will take joy in the God of my salvation&rdquo; (Habakkuk 3:17-18).",
      "Job, in the first shock of staggering loss, falls to the ground and worships: &ldquo;The Lord gave, and the Lord has taken away; blessed be the name of the Lord&rdquo; (Job 1:21). This is not the suppression of grief &mdash; Job will grieve and argue and lament at length &mdash; but it is thanksgiving held in the same hand as the sorrow. The biblical witness does not ask us to choose between honesty about our pain and gratitude toward our God. It teaches us to hold both: to weep and to give thanks, to lament and to worship, to feel the full weight of loss while still blessing the name of the Lord.",
      "Practicing thanksgiving in hardship is also profoundly transformative for the one who practices it. The discipline of looking for reasons to be thankful even in difficulty trains the eye to see grace where despair would see only loss. It loosens the grip of self-pity and bitterness. It keeps the soul anchored to God when circumstances would tear it loose. This is not denial; it is the deliberate orientation of the heart toward the goodness of God in the teeth of everything that would deny it. And it is, Paul says, exactly what God wills for us &mdash; not because God delights in our suffering, but because he knows that a thankful heart is a heart kept safe in him.",
      "Ultimately, thanksgiving in all circumstances rests on the conviction that God is sovereignly and lovingly at work in everything. &ldquo;We know that for those who love God all things work together for good&rdquo; (Romans 8:28). The Christian gives thanks in the dark not because the dark is good but because the God who reigns over the dark is good, and is weaving even this into a purpose we cannot yet see. To give thanks in all circumstances is to trust that the story is not over, that the worst thing is never the last thing, and that the One who began a good work will bring it to completion.",
    ],
  },
  {
    id: "The Danger of Ingratitude",
    heading: "The Danger of Ingratitude",
    paragraphs: [
      "Scripture treats ingratitude not as a minor lapse of manners but as a root sin near the very source of human rebellion. In Romans 1, Paul traces the tragic descent of humanity into darkness, and at the head of the whole catastrophe stands a failure of gratitude: &ldquo;For although they knew God, they did not honor him as God or give thanks to him, but they became futile in their thinking, and their foolish hearts were darkened&rdquo; (Romans 1:21). The refusal to give thanks is named alongside the refusal to honor God as the first step into futility and darkness. Ingratitude is not a small thing; it is, in Paul&rsquo;s account, near the headwaters of the fall.",
      "This makes a profound kind of sense. To refuse thanks is to refuse to acknowledge dependence; it is to act as if I am the author of my own blessings, the source of my own life, owing nothing to anyone. Ingratitude is thus a form of pride at its most fundamental level &mdash; the creature pretending not to be a creature, the recipient pretending not to have received. It is the original lie of Eden in another form: the refusal to live as one who has been given everything by Another. From this root spring countless other sins, because the heart that will not give thanks has already declared its independence from God.",
      "The Gospels give us an unforgettable picture of ingratitude in the story of the ten lepers (Luke 17:11-19). Jesus heals all ten of a disease that had made them outcasts, and as they go they are cleansed. But only one &mdash; and he a Samaritan, a despised outsider &mdash; turns back, falls at Jesus&rsquo; feet, and gives thanks. Jesus&rsquo; question hangs in the air across the centuries: &ldquo;Were not ten cleansed? Where are the nine?&rdquo; The nine were not ungrateful in any dramatic way; they simply received the gift and moved on, absorbed in their own lives. That is how ingratitude usually looks &mdash; not active hostility but the quiet forgetting of the giver, the casual absorption of the gift without a backward glance.",
      "The wilderness generation of Israel stands as the great cautionary tale of grumbling ingratitude. Delivered from slavery by mighty wonders, fed with manna from heaven, given water from the rock, led by the pillar of cloud and fire, they nevertheless complained at every turn &mdash; about the food, the water, the leadership, the whole journey. &ldquo;Would that we had died in the land of Egypt!&rdquo; they cried, looking back with absurd nostalgia at their slavery (Numbers 14:2). Their grumbling was, at bottom, a refusal of gratitude &mdash; an inability to see the staggering mercies surrounding them because their eyes were fixed on what they lacked. And their ingratitude provoked God&rsquo;s judgment more than almost anything else.",
      "Grumbling and entitlement, then, are the everyday faces of ingratitude, and they reveal a heart far from God. The grumbler sees only what is missing; the entitled person feels owed and therefore is never satisfied. Both are blind to grace. Both live in a perpetual deficit, measuring life by its gaps rather than its gifts. Scripture takes grumbling far more seriously than we tend to, warning against it repeatedly, precisely because it is the symptom of a deeper ingratitude that has stopped seeing life as gift. &ldquo;Do all things without grumbling or disputing&rdquo; (Philippians 2:14) is no small instruction; it strikes at a posture of the heart that poisons everything.",
      "Ingratitude is also self-destructive, quite apart from its offense against God. It makes a person miserable, because it trains the attention relentlessly on what is lacking. The ungrateful heart can possess much and enjoy little, because it has lost the capacity to receive anything as gift. It corrodes relationships, because it takes others for granted and resents them for not giving more. It darkens the whole world, draining the color from blessings that a grateful heart would have savored. In refusing to give thanks, the ungrateful person does not merely sin against the giver; they impoverish themselves.",
      "Paul lists ingratitude among the marks of a society in moral collapse. Describing the last days, he writes that people will be &ldquo;lovers of self, lovers of money, proud, arrogant, abusive, disobedient to their parents, ungrateful, unholy&rdquo; (2 Timothy 3:2). Ingratitude sits in that grim catalog as a diagnostic symptom of a culture that has forgotten God. The remedy, in every case, is the deliberate recovery of thanksgiving &mdash; the turning back, like the one healed leper, to fall at the feet of the Giver and give thanks. Gratitude is not only a duty; it is the cure for a host of spiritual diseases that ingratitude breeds.",
    ],
  },
  {
    id: "Gratitude and Wellbeing",
    heading: "Gratitude and Wellbeing",
    paragraphs: [
      "In recent decades, gratitude has become one of the most studied subjects in psychology, and the findings are remarkably consistent: gratitude is good for human beings. Researchers such as Robert Emmons, the leading scientist in the field, have documented again and again that grateful people are measurably happier, healthier, more resilient, and more generous than their less grateful peers. Gratitude correlates with greater life satisfaction, lower rates of depression and anxiety, better sleep, stronger relationships, and even improved physical health. What Scripture commanded long ago, modern science has begun to confirm: the thankful life is a flourishing life.",
      "Some of the most striking evidence comes from studies of simple gratitude practices. In controlled experiments, people who kept a weekly gratitude journal &mdash; writing down a handful of things they were thankful for &mdash; reported significantly higher levels of optimism and life satisfaction, and even exercised more and reported fewer physical complaints, than those who recorded hassles or neutral events. The practice of writing a letter of thanks to someone who had never been properly thanked produced measurable and lasting increases in happiness. The effects are real, repeatable, and surprisingly large for so simple an intervention.",
      "Part of the explanation lies in what gratitude does to attention. The human mind has a powerful negativity bias &mdash; a tendency to fixate on threats, lacks, and grievances. Gratitude deliberately redirects attention from what is missing to what is present, from scarcity to abundance, from complaint to blessing. It is, in a sense, a retraining of perception. The grateful person and the ungrateful person may live in identical circumstances; what differs is where their attention rests. Gratitude rewires the habitual gaze of the mind toward the good that is genuinely there but easily overlooked.",
      "Gratitude also appears to buffer people against adversity. Studies of people facing serious hardship &mdash; illness, loss, trauma &mdash; find that those who cultivate gratitude tend to be more resilient, recovering more fully and finding meaning more readily than those who do not. This fits the biblical pattern exactly: thanksgiving in the midst of trial is not a denial of the trial but a resource for enduring it. The capacity to give thanks even in difficulty turns out to be one of the strongest predictors of how well a person weathers the storms of life.",
      "Yet here the Christian must add a crucial qualification, lest gratitude be reduced to a mere wellness technique. The modern self-help industry has seized on gratitude as a tool for personal optimization &mdash; a hack for happiness, a method for feeling better. But Christian gratitude is something deeper and different. It is not gratitude in the abstract, a vague positive feeling directed at the universe or at life in general. It is thanksgiving directed to a Person: to God, the giver of every good gift. The Christian is not merely grateful <em>that</em> good things happen; the Christian is grateful <em>to</em> the One who gives them.",
      "This distinction matters enormously. Generic gratitude floats free, with no object to anchor it &mdash; thankfulness with no one to thank. Christian gratitude has an address. It rests in a relationship. And because of this, it goes deeper than any technique and reaches further than any therapeutic benefit. The believer&rsquo;s gratitude is not ultimately about optimizing their own wellbeing, though it does bless them; it is about rightly honoring the God who has given them everything. The wellbeing is real, but it is a byproduct of worship, not the point of it.",
      "So Christians can welcome the findings of gratitude research with glad recognition &mdash; here is creation testifying to the wisdom of the Creator&rsquo;s commands &mdash; while refusing to let gratitude be domesticated into a self-improvement strategy. That the thankful life flourishes is no surprise to those who believe we were made by a God who calls us to give thanks. But the deepest reason to be grateful is not that it makes us happier. It is that God is good and has given us all things, and the only fitting response is thanksgiving offered up to him.",
    ],
  },
  {
    id: "Cultivating Thankfulness",
    heading: "Cultivating Thankfulness",
    paragraphs: [
      "Gratitude, like patience, is not merely a mood that comes and goes but a disposition that can be cultivated &mdash; a settled habit of the heart that grows through deliberate practice. The goal is not occasional spasms of thankfulness when something good happens, but a steady, abiding posture that sees the whole of life as grace. Such a disposition does not appear by accident; it is formed by the repeated exercise of thanksgiving until gratitude becomes the soul&rsquo;s default rather than its exception. The practices below are well-worn paths by which Christians across the centuries have trained their hearts to be thankful.",
      "The gratitude journal is among the simplest and most effective practices. The discipline is plain: regularly, perhaps each evening, write down several specific things for which you are thankful that day. The specificity matters &mdash; not &ldquo;my family&rdquo; in the abstract but a particular kindness, a particular meal, a particular mercy. Over time, the practice trains the eye to go hunting for blessings throughout the day, knowing they must be named come evening. Both Scripture and modern research commend the practice; it is one of the most reliable ways to retrain a complaining heart toward thanksgiving.",
      "Returning thanks before meals is an ancient and humble practice with surprising power. Jesus himself gave thanks before he broke bread, again and again, and the early church &ldquo;received their food with glad and generous hearts, praising God&rdquo; (Acts 2:46-47). To pause before eating and acknowledge that this food is a gift &mdash; that we did not ultimately produce it, that it comes from the hand of God &mdash; is a small but constant rehearsal of dependence and gratitude. Done sincerely rather than by rote, the saying of grace punctuates each day with thanksgiving and keeps the giver in view.",
      "The prayer of examen, drawn from the Christian contemplative tradition, is a practice of reviewing the day in God&rsquo;s presence and noticing where his gifts and his hand were at work. To look back over the hours and trace the blessings &mdash; the unexpected grace, the quiet provision, the moment of beauty, the answered need &mdash; is to gather up the day&rsquo;s mercies and offer them back in thanks. Closely related is the simple practice of counting blessings by name, of which the old hymn sings: &ldquo;Count your blessings, name them one by one, and it will surprise you what the Lord has done.&rdquo; Naming blessings particularly, one by one, defeats the vagueness that lets gratitude evaporate.",
      "Gratitude is also cultivated in the direction of other people. To express thanks to those around us &mdash; to actually voice appreciation to the spouse, the friend, the coworker, the stranger who served us &mdash; both honors them and deepens our own thankful disposition. The grateful heart that keeps its gratitude silent is only half formed; spoken thanks completes the circuit. Writing a letter of thanks to someone who shaped us, taking the trouble to tell people what their kindness has meant, makes gratitude concrete and relational rather than merely internal.",
      "Corporate worship is the great communal school of thanksgiving. When the gathered church sings its praise, recites its thanks, and lifts its grateful prayers together, the individual believer is caught up into a thanksgiving larger than their own. The Psalms model this constantly: &ldquo;Oh give thanks to the Lord, for he is good, for his steadfast love endures forever&rdquo; (Psalm 107:1). To give thanks in the company of God&rsquo;s people, week after week, trains the heart in gratitude and reminds us that thanksgiving is not merely a private discipline but the corporate vocation of the whole people of God.",
      "At the very center of Christian worship stands the practice that is named for thanksgiving itself: the Lord&rsquo;s Supper, which the church has called from the beginning the <em>Eucharist</em> &mdash; the &ldquo;thanksgiving.&rdquo; In the bread and the cup, the believer gives thanks for the body and blood of Christ, the supreme gift of grace, and so the Christian life is centered again and again on gratitude for the cross. The whole pattern of cultivation aims at this: a settled, abiding disposition of thankfulness that receives the whole of life &mdash; salvation, daily bread, breath itself &mdash; as gift, and answers the grace of God with a heart that will not stop giving thanks.",
    ],
  },
];

const videoItems = [
  { videoId: "tQ9Ld2dErMU", title: "The Christian Practice of Gratitude" },
  { videoId: "DljZmd45rDk", title: "Give Thanks in All Circumstances" },
  { videoId: "I9oFkVAQ4uE", title: "Grace and Gratitude - A Biblical View" },
];

export default function ChristianGratitudeGuidePage() {
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
            Faith &amp; Gratitude
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Gratitude
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Gratitude through a Christian lens &mdash; the deep connection between grace and gratitude, the command to give thanks in all circumstances, the danger of ingratitude, what research reveals about gratitude and wellbeing, and the practices that cultivate a settled, thankful heart.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>1 Thessalonians 5:18</p>
          </div>
        </header>

        {/* Tab navigation */}
        <nav aria-label="Page sections" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2.25rem" }}>
          {TABS.map((t) => (
            <button key={t} type="button" onClick={() => setTab(t)} style={{
              padding: "0.5rem 1.1rem", borderRadius: 8,
              border: `1px solid ${tab === t ? ACCENT : BORDER}`,
              background: tab === t ? `rgba(217, 119, 6, 0.12)` : "transparent",
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Gratitude Is the Answer to Grace</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>Grace and gratitude spring from the same root. Because God has given us everything in Christ, the fitting response to the whole of life is thanksgiving &mdash; in plenty and in want, in joy and in sorrow. As we practice giving thanks, name our blessings one by one, and center our worship on the Eucharist of Christ&rsquo;s self-giving, the Spirit forms in us a settled, abiding gratitude that receives all of life as gift.</p>
        </div>
      </main>
    </div>
  );
}
