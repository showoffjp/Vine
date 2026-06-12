"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ROSE = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christiansexuality_entries";

interface CSXEntry {
  id: string;
  date: string;
  struggle: string;
  truthReceived: string;
  stepTaken: string;
}

interface TheologySection {
  badge: string;
  title: string;
  paragraphs: string[];
  callout?: { label: string; text: string };
}

interface PracticeCard {
  number: string;
  title: string;
  summary: string;
  steps: string[];
  anchor: string;
}

interface VoiceCard {
  name: string;
  role: string;
  quote: string;
  bio: string;
}

interface ScriptureCard {
  reference: string;
  text: string;
  reflection: string;
}

interface VideoItem {
  videoId: string;
  title: string;
}

const theologySections: TheologySection[] = [
  {
    badge: "Genesis 1:27",
    title: "&ldquo;Male and Female He Created Them&rdquo; — the Theological Foundation",
    paragraphs: [
      "Genesis 1:27 is the load-bearing wall of Christian sexual ethics: &ldquo;So God created mankind in his own image, in the image of God he created them; male and female he created them.&rdquo; Sexual differentiation is not an evolutionary accident or a cultural construction — it is part of the creation design, written into human beings before the Fall, called very good by God. To be human is to be embodied, and to be embodied is to be sexed. The body is not the cage of the soul; it is the shape of the person.",
      "This has immediate implications for sexuality. Because maleness and femaleness are created categories, sexuality is not a merely private matter — it is a theological one. Who we are as sexual beings is constitutive of who we are as human beings in a way that extends far beyond behavior. The contemporary tendency to treat sexuality as a fluid self-construction, or to treat the body as raw material to be shaped by the will, runs directly against this foundational affirmation.",
      "Jesus himself returns to Genesis 1:27 in Matthew 19:4-5 when he is asked about divorce: &ldquo;Haven&rsquo;t you read that at the beginning the Creator made them male and female, and said, &rsquo;For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh&rsquo;?&rdquo; The beginning is the reference point. Creation, not culture, sets the terms.",
    ],
    callout: {
      label: "The foundation",
      text: "Male and female are not social constructs but created realities, and the union of a man and a woman in marriage is the created context for the expression of sexual love. Everything else in Christian sexual ethics is an application of this foundation.",
    },
  },
  {
    badge: "John Paul II",
    title: "The Theology of the Body — Sex as a Sign Pointing Beyond Itself",
    paragraphs: [
      "John Paul II&rsquo;s Theology of the Body, developed across 129 Wednesday audiences from 1979 to 1984, is the most ambitious attempt in Christian history to think through the meaning of human sexuality from the inside — not as a set of rules but as a language, a sign, a form of communication that participates in the mystery of God. His central claim: the human body has a &ldquo;spousal meaning&rdquo; — it is made to be given, to speak the language of total self-gift, to image the inner life of the Trinity.",
      "Sex, in John Paul&rsquo;s framework, is not primarily about pleasure or even procreation. It is a sign — the most intimate human enactment of the kind of love that God is. The union of husband and wife in the act of marriage is supposed to say, with the body, what God says eternally in the inner life of the Trinity and what Christ says on the cross: &ldquo;I give myself completely to you.&rdquo; This is why sexual sin is so serious — it is not merely a rule broken but a word spoken falsely, a sign that contradicts what it is supposed to mean.",
      "Christopher West has done the most to bring John Paul&rsquo;s theology to popular audiences in the English-speaking world. The framework it offers is far more beautiful — and far more demanding — than the purity culture version of Christian sexual ethics that reduced the whole subject to a list of prohibitions. It does not merely say no to disordered sexuality; it says yes to a vision of sexuality so high that only grace can reach it.",
    ],
  },
  {
    badge: "Ephesians 5:31-32",
    title: "Sex as Sacramental Sign — the Christ/Church Union",
    paragraphs: [
      "Paul&rsquo;s most startling claim about marriage and sexuality is in Ephesians 5:31-32: &ldquo;For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh. This is a profound mystery — but I am talking about Christ and the church.&rdquo; The one-flesh union of marriage is a sign of the union between Christ and his people. Sex, within that covenant, is a sacramental act — an embodied participation in a reality larger than itself.",
      "This is why the sexual ethics of the New Testament are not merely moral but theological. Sexual immorality is not just a transgression of social norms — it is a misuse of a sign that is supposed to point to Christ. When the body unites outside of covenant, it speaks a falsehood: it says &ldquo;I give myself completely&rdquo; in a context where the giver retains the right to leave. When the body unites in covenant, it says something true: this is permanent, exclusive, life-giving — as Christ&rsquo;s love for the church is permanent, exclusive, and life-giving.",
      "This also means that celibacy is not the absence of this sign but a different sign pointing to the same reality. The celibate person says, with their body and their life, that the union with Christ is itself sufficient — that the deepest human longing will be satisfied not in a spouse but in God. Both marriage and celibacy are prophetic — they point, from different angles, toward the same eschatological marriage between Christ and his people.",
    ],
    callout: {
      label: "The mystery",
      text: "Human sexuality is designed to be a bodily participation in the mystery of Christ and the church. This is why it matters so much, and why its distortion is so destructive: it is a sacred sign being used for something other than what it means.",
    },
  },
  {
    badge: "Universal Calling",
    title: "Chastity as the Universal Christian Calling — Not Just for Singles",
    paragraphs: [
      "Purity culture made a foundational error: it treated sexual purity as a pre-marital concern that ends at the wedding. In this framing, marriage is the goal and chastity is the obstacle course you run to get there. The New Testament knows nothing of this. Chastity is not a pre-marital virtue — it is a permanent one, and it applies to every Christian regardless of marital status.",
      "The Catechism of the Catholic Church defines chastity as &ldquo;the successful integration of sexuality within the person and thus the inner unity of man in his bodily and spiritual being.&rdquo; This is not about abstinence — it is about integrity, about the ordering of sexual desire and expression toward its proper end. For the single person, chastity means celibacy. For the married person, chastity means fidelity and the avoidance of lust even within marriage. For every Christian, chastity means the refusal to use another person sexually — treating persons as ends, never as means.",
      "This reframing changes the pastoral situation entirely. The married man who uses pornography is not chaste. The married couple who have turned sexual intimacy into performance or power is not chaste. The single person who cultivates emotional unchastity — parasocial obsession, the emotional equivalent of adultery — is not chaste. Chastity is not a box checked at marriage; it is a discipline sustained for life, and it requires the same community support and accountability as any other virtue.",
    ],
  },
  {
    badge: "Pornography",
    title: "Pornography and the Distortion of Desire",
    paragraphs: [
      "Pornography is the most widespread sexual sin in the contemporary church, and one of the least acknowledged. Survey data consistently shows that a majority of Christian men — and a growing proportion of Christian women — view pornography regularly. It is not a fringe problem among the uncommitted; it is a mainstream practice among the churched, and it is reshaping the sexual imaginations of an entire generation.",
      "The theological problem with pornography is not primarily behavioral — it is formative. Pornography trains desire to function in ways that are antithetical to the spousal meaning of the body: it conditions the viewer to experience sexual arousal in the absence of relationship, to treat persons as objects, to expect sexual partners to be available and compliant and interchangeable. It does not merely tempt the viewer — it forms them, slowly reshaping what they find beautiful, what they expect, and what they are capable of giving.",
      "Jesus&rsquo; words in Matthew 5:28 — &ldquo;anyone who looks at a woman lustfully has already committed adultery with her in his heart&rdquo; — locate the problem in the heart rather than the act. The issue is what pornography does to the imagination and the capacity for genuine love. Recovery from pornography addiction is therefore not merely behavioral (stop watching) but formative (rebuild the imagination through beauty, truth, accountability, and the slow work of grace). Accountability software is not a solution; it is a support for a solution that must go deeper.",
    ],
  },
  {
    badge: "Homosexuality",
    title: "Same-Sex Attraction — a Compassionate and Orthodox Treatment",
    paragraphs: [
      "The church has swung between two pastoral errors on homosexuality, and both have caused enormous damage. The first error is rejection: treating same-sex attraction as uniquely disqualifying, responding to gay people with disgust or dismissal, implying that they are less welcome in the body of Christ or that their temptations are worse than others&rsquo;. This is not biblical and it is not kind. It has driven gay Christians out of the church and handed them over to communities that will affirm what the church should have addressed pastorally.",
      "The second error is affirmation: treating same-sex sexual behavior as morally equivalent to heterosexual behavior within marriage, revising the church&rsquo;s historic reading of Scripture to accommodate contemporary sexual ethics. This error also causes enormous damage — it tells people that the church will follow culture wherever it goes, it undermines trust in Scripture&rsquo;s authority, and it ultimately fails the gay person by withholding the truth that the gospel offers: that same-sex sexual behavior, like all sexual behavior outside covenant marriage, calls for repentance and transformation.",
      "The faithful position is the one that holds both: genuine love for the person and genuine honesty about the sexual ethic. Same-sex attraction is a form of disordered desire — not sin, but temptation, as all disordered desire in fallen humanity is temptation. The call to every Christian is chastity, and the standard does not change based on the direction of desire. Christians who experience same-sex attraction and live faithfully celibate lives are not second-class disciples. They deserve the church&rsquo;s full honor, genuine belonging, and its best pastoral care — not its embarrassment or its pity.",
    ],
    callout: {
      label: "The pastoral call",
      text: "Reject the person and you drive them from the gospel. Affirm the behavior and you hand them a false gospel. The third way — genuine love held together with genuine truth — is costly and necessary.",
    },
  },
  {
    badge: "The Sexual Revolution",
    title: "The Sexual Revolution and Its Consequences",
    paragraphs: [
      "The sexual revolution of the 1960s and 1970s was not merely a change in behavior — it was a change in metaphysics. It replaced the Christian account of sexuality (sex is a sacred sign pointing toward covenant and toward God) with a therapeutic account (sex is a vehicle for self-expression and self-realization, and its only meaningful constraint is consent). The consequences have been measured: rising rates of depression and anxiety, especially among young women; epidemic pornography use; declining marriage rates; rising rates of sexually transmitted infections; and a widespread experience of sex as alienating rather than bonding.",
      "The church is not immune to these consequences. Decades of data show that sexual behavior among churched and unchurched young adults is increasingly indistinguishable. The church has largely failed to offer a positive vision of sexual ethics — something beautiful enough to compete with the culture&rsquo;s offer, grounded enough to withstand scrutiny, and honest enough about its own failures to be credible. Purity culture tried and largely failed because it was essentially reactive — it said no without offering a compelling yes.",
      "What is needed is not a return to purity culture&rsquo;s shame-based apparatus, nor an accommodation to the sexual revolution. It is a recovery of the Theology of the Body&rsquo;s positive vision: sex as a language of total self-gift, sexuality as a sacred sign, chastity as the discipline that makes genuine intimacy possible. This vision is more demanding than anything purity culture offered, and far more beautiful.",
    ],
  },
  {
    badge: "Purity Culture",
    title: "Purity Culture&rsquo;s Failures — and How to Do It Better",
    paragraphs: [
      "Purity culture — the approach to sexual ethics prominent in evangelical churches from roughly the 1990s through the 2010s — was right about the importance of sexual purity and wrong about nearly everything else. It was wrong to attach a person&rsquo;s worth to their sexual history. It was wrong to reduce sexual ethics to the location of the penis. It was wrong to place the burden of male sexual purity entirely on female dress and behavior. It was wrong to promise that marriage would automatically resolve sexual struggle. And it was deeply wrong to respond to sexual failure with shame rather than with grace.",
      "The damage purity culture caused is real and well-documented. People who internalized its framework found that it prepared them poorly for actual marriage — they had been trained to see sexual desire as the enemy rather than as a gift to be ordered, and could not easily switch that training off at the wedding. Women who had been told their worth was in their purity found that past sexual failure defined them in their own minds in ways no amount of repentance could undo. And people whose sexuality did not fit the assumed heterosexual-and-eventually-married template found no place for themselves at all.",
      "Doing it better means starting with the positive vision — sex as a sacramental sign, chastity as integrity rather than abstinence, the body as a temple worth honoring rather than a threat to be controlled. It means talking about sexual failure with the grammar of grace: sin, confession, forgiveness, transformation, not shame, contamination, and permanent damage. It means addressing men and women with equal responsibility and equal dignity. And it means building communities robust enough to carry people through the long and often painful work of sexual formation.",
    ],
  },
  {
    badge: "Redemption",
    title: "Redemption for Sexual Brokenness — the Gospel&rsquo;s Deepest Yes",
    paragraphs: [
      "Paul&rsquo;s list of sins in 1 Corinthians 6:9-10 includes sexually immoral people, adulterers, and those who practice homosexuality — and then he writes one of the most beautiful verses in his letters: &ldquo;And that is what some of you were. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God.&rdquo; The past tense is everything. The gospel does not merely forgive sexual sin — it forms new sexual persons.",
      "What redemption for sexual brokenness looks like in practice: honest confession, not only to God but to a trusted community; professional care where addiction or trauma is involved, because the gospel works through means; genuine accountability from people who will ask hard questions without flinching; and the slow, patient work of identity reconstruction. The person who has been formed by pornography or by sexual trauma or by patterns of compulsive behavior needs more than forgiveness — they need the rebuilding of the imagination and the formation of new habits of perception and response.",
      "The promise of the gospel is not that the journey will be short or easy. It is that it is possible, that it is not walked alone, and that the destination is worth the cost. Many people — including the contributors to this page — have found that their sexual histories, when brought into the light of the gospel, became not the defining mark of their lives but the place where the grace of God became most visible. That is the testimony the church should be able to offer, and that is what the gospel, if it is the gospel, must be able to produce.",
    ],
    callout: {
      label: "1 Corinthians 6:11",
      text: "And that is what some of you were. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God. Past tense. The gospel is in the past tense.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "Bring Your Sexuality Honestly to God",
    summary:
      "The first practice is the hardest: honest prayer about your actual sexual life — not the edited version, not the confession you have made peace with, but the real thing. God already knows it. Bringing it to him is about your posture, not his information.",
    steps: [
      "Set aside fifteen minutes for honest examination: what is the actual shape of your sexual struggle? Pornography, compulsive behavior, lust, same-sex attraction, sexual shame, wounds from past abuse or purity culture — name what is actually there.",
      "Bring it to God without the preamble of self-justification. The Psalms model this: direct, honest, without diplomatic softening. &ldquo;I am ashamed of what I look at. I am in over my head. I cannot change this by myself.&rdquo; Let that be the prayer.",
      "Identify what you have been believing about God in this area — that he is disgusted, that he has given up, that this is unforgivable. Then locate the biblical counter-truth and bring it explicitly: &ldquo;You said I was washed and sanctified. I am claiming that.&rdquo;",
      "Do this weekly, not just at crisis points. Sexual formation is slow, and so is the work of grace in this area. The practice of regular honest prayer builds a posture of dependence that one-time confessions cannot.",
    ],
    anchor: "Psalm 51:10 — Create in me a clean heart, O God, and renew a right spirit within me.",
  },
  {
    number: "02",
    title: "Confess to a Same-Gender Mature Christian",
    summary:
      "The isolation of sexual struggle is one of its most damaging features — it convinces the person that they are uniquely broken, uniquely bad, unable to be known and still accepted. Confession to another person breaks the isolation and removes the power secrecy provides.",
    steps: [
      "Choose a same-gender mature Christian — not a peer in the same struggle, but someone with enough life and faith to hold the confession without being destabilized by it. This may be a pastor, a spiritual director, or a trusted elder in the faith.",
      "Confess specifically, not vaguely. &ldquo;I struggle with sexual sin&rdquo; is not confession — it is category. &ldquo;I have been viewing pornography three times a week for two years&rdquo; is confession. The specificity is not prurient; it is what breaks the power of the secret.",
      "Ask this person to ask you hard questions regularly — not just when you bring it up, but as a standing accountability. The question &ldquo;how are you doing in this area?&rdquo; asked monthly, with genuine expectation of an honest answer, changes the shape of the struggle.",
      "Let the confession be met with the gospel. The person hearing it should be able to say, and to mean: you are not uniquely broken, you are not beyond grace, here is what the gospel says about what you just told me. If that response is not available, find someone else.",
    ],
    anchor: "James 5:16 — Confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power.",
  },
  {
    number: "03",
    title: "Rebuild the Imagination Through Beauty",
    summary:
      "Sexual formation is largely a matter of the imagination — what we find beautiful, what we desire, what we are drawn toward. Pornography corrupts the imagination; the antidote is not merely the removal of pornography but the rebuilding of the imagination through genuine beauty.",
    steps: [
      "Read the Song of Solomon slowly and let it form your imagination of what sexuality is supposed to look like: mutual, delighted, fully present, fully personal. This is the biblical picture of sexual joy, and it is nothing like what pornography offers.",
      "Engage with art, music, literature, and nature that trains the eye to see persons as persons and creation as gift. Beauty is not a luxury in sexual formation — it is the counter-formation that displaces what pornography installs.",
      "Read Christopher West&rsquo;s work on the Theology of the Body, or John Paul II directly, and let the positive vision of sexuality as spousal self-gift do its slow work of persuasion. You need more than rules — you need a vision worth living for.",
      "Be patient. The imagination that pornography has shaped over years is not rebuilt in weeks. The formation of desire is slow, and it requires sustained exposure to what is genuinely good and genuinely beautiful. This is a project for years, not months.",
    ],
    anchor: "Philippians 4:8 — Whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely — think about these things.",
  },
  {
    number: "04",
    title: "Pursue Professional Care Where It Is Needed",
    summary:
      "Sexual addiction and sexual trauma both require professional support that accountability partners and small groups cannot provide. Recognizing when the struggle has exceeded what community can carry is a form of wisdom, not weakness.",
    steps: [
      "If you are in a pattern of compulsive sexual behavior that you have been unable to break through spiritual practice and accountability alone, seek a licensed therapist who is both clinically trained and theologically informed. EMDR, trauma-focused therapy, and addiction counseling are legitimate means of grace.",
      "If sexual shame, abuse, or purity culture has produced lasting psychological damage — intrusive thoughts, inability to experience sexual intimacy in marriage, body shame, dissociation — seek professional help. These are wounds that need clinical treatment as well as pastoral care.",
      "Tell your accountability partner or pastor that you are seeking professional support. It should not be a secret. The combination of professional care and community accountability is more robust than either alone.",
      "Ask your church whether it has vetted referrals for Christian counselors. If it does not, ask why not, and whether it can build that resource. The church&rsquo;s pastoral care in this area should include knowing where to send people who need more than it can offer.",
    ],
    anchor: "Proverbs 11:14 — Where there is no guidance, a people falls, but in an abundance of counselors there is safety.",
  },
  {
    number: "05",
    title: "Build Genuine Community Across the Sexuality Divide",
    summary:
      "The church&rsquo;s gay members who are committed to biblical faithfulness need, more than almost anything else, genuine community in which they are not defined by their sexuality, pitied for their celibacy, or isolated by the church&rsquo;s discomfort.",
    steps: [
      "If you are gay and celibate, find the communities that exist for you — Living Out, Revoice, the Spiritual Friendship network. These are people who have walked this path longer and can offer the witness of sustained faithfulness.",
      "If you are straight, build genuine friendships with gay Christians in your community — not as a ministry project but as actual friendship. Ask them about their lives, their struggles, their joys. Let them be people rather than a theological category.",
      "Ask your church&rsquo;s leadership whether it has a pastoral strategy for same-sex attracted members — not just a theological position but a community response. The theology without the community is a burden without the support to carry it.",
      "Read Preston Sprinkle&rsquo;s &ldquo;People to Be Loved&rdquo; and Sam Allberry&rsquo;s &ldquo;Is God Anti-Gay?&rdquo; — not to resolve every question but to develop the pastoral intelligence and the vocabulary to be genuinely helpful rather than merely orthodox.",
    ],
    anchor: "Galatians 6:2 — Bear one another&rsquo;s burdens, and so fulfill the law of Christ.",
  },
  {
    number: "06",
    title: "Recover the Language of Grace for Sexual Failure",
    summary:
      "Purity culture&rsquo;s lasting damage is linguistic: it gave the church the language of contamination and loss rather than the language of sin, forgiveness, and transformation. Recovering the gospel grammar for sexual failure is essential for healing.",
    steps: [
      "Learn to say: &ldquo;I sinned. I confessed. I am forgiven. I am being transformed.&rdquo; This is the correct grammar. Not: &ldquo;I am damaged goods. I am defined by what I did. God forgave me but I will always be less.&rdquo; That grammar is not the gospel.",
      "If you carry shame from sexual history — abuse, promiscuity, pornography, abortion — bring it specifically to the cross. Identify the exact thought: &ldquo;I am permanently damaged.&rdquo; Locate the exact biblical counter: &ldquo;Washed, sanctified, justified.&rdquo; Pray the counter-truth over the specific shame.",
      "Find a community that can hold your sexual history without defining you by it. This may require finding new community — some church cultures are so saturated with purity culture shame that they cannot offer the grace the gospel promises.",
      "Be willing to testify, when it is appropriate and helpful, to what God has done. The testimony of transformation — not sanitized, not triumphalistic, but honest — is one of the most powerful tools the church has. &ldquo;That is what some of you were&rdquo; is a pastoral invitation as much as it is a theological claim.",
    ],
    anchor: "1 Corinthians 6:11 — You were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Christopher West",
    role: "Theology of the Body for Beginners",
    quote:
      "The theology of the body is not the church saying no to sex. It is the church saying yes to sex — but the yes is so high, so beautiful, and so demanding that only those who have been transformed by grace can live it. We have settled for a no when God offered us something far more radical.",
    bio: "Christopher West is the most widely known popularizer of John Paul II&rsquo;s Theology of the Body in the English-speaking world. His books — &ldquo;Theology of the Body for Beginners,&rdquo; &ldquo;Good News About Sex &amp; Marriage,&rdquo; and &ldquo;Fill These Hearts&rdquo; — have introduced millions of people to the positive vision of sexuality as spousal self-gift. West writes with conviction that the church&rsquo;s sexual ethics are not a set of restrictions but a vision of human flourishing so demanding and so beautiful that only the gospel can make it possible. His work is not without critics within the Catholic tradition, but it has opened the Theology of the Body to audiences who would never have encountered it otherwise.",
  },
  {
    name: "Wesley Hill",
    role: "Washed and Waiting",
    quote:
      "I am gay and Christian. That means I am living with a tension that may not be fully resolved this side of eternity. But I have found that the gospel is deep enough to sustain that tension — that the God who calls me to faithfulness is also the God who walks with me through the cost of it. I am not alone in this. Neither are you.",
    bio: "Wesley Hill is a New Testament scholar at Western Theological Seminary and one of the most important voices writing at the intersection of sexuality and Christian faithfulness. &ldquo;Washed and Waiting&rdquo; is his personal account of living as a gay Christian committed to celibacy — written with unusual honesty about the cost of that commitment and unusual theological precision about its grounds. Hill does not pretend the path is easy or that the questions are simple. He testifies that the gospel is sufficient for the life it calls him to, and that testimony carries the weight of someone who has actually tried to live it.",
  },
  {
    name: "Sam Allberry",
    role: "Is God Anti-Gay?",
    quote:
      "The question is not whether the church accepts gay people. The question is whether it accepts the cost of actually loving them — the cost of genuine community, genuine friendship, genuine belonging, the willingness to be the family that celibate Christians give up in order to be faithful. Theology without that community is a burden without a back to carry it.",
    bio: "Sam Allberry is a pastor, speaker, and author who is himself same-sex attracted and committed to biblical celibacy. &ldquo;Is God Anti-Gay?&rdquo; is a brief and pastorally sensitive treatment of what the Bible says about homosexuality and what the church owes to same-sex attracted Christians. Allberry consistently holds together two things that churches tend to separate: the conviction that same-sex sexual behavior falls outside the biblical sexual ethic, and the insistence that Christians who experience same-sex attraction and live faithfully deserve the church&rsquo;s deepest honor and most genuine community. His ministry at Living Out has been a lifeline for many.",
  },
  {
    name: "Preston Sprinkle",
    role: "People to Be Loved",
    quote:
      "If your theology about gay people doesn&rsquo;t lead you to weep over the gay teenager who was told by her church that she was an abomination, or to mourn the gay Christian who left the faith because no one would love him well enough to help him stay — then something is wrong with your theology. Or your heart. Or both.",
    bio: "Preston Sprinkle is a New Testament scholar and the president of the Center for Faith, Sexuality &amp; Gender. &ldquo;People to Be Loved&rdquo; offers a careful, compassionate, and biblically rigorous examination of what the New Testament says about homosexuality. Sprinkle holds the traditional view that same-sex sexual behavior falls outside the biblical sexual ethic, but he is equally insistent that the church&rsquo;s response to gay people has often been cruel, theologically confused, and pastorally disastrous. His work is a model of how to hold conviction and compassion without sacrificing either.",
  },
  {
    name: "Timothy Keller",
    role: "The Meaning of Marriage",
    quote:
      "Sex is not primarily a recreational activity. It is a form of self-disclosure — the most intimate form of self-disclosure — and it is therefore also the most dangerous form. The union of two people in sexual intimacy creates a bond at the level of the self that cannot be undone, only damaged or deepened.",
    bio: "Timothy Keller&rsquo;s &ldquo;The Meaning of Marriage,&rdquo; co-written with his wife Kathy, is one of the most theologically serious and practically useful treatments of marriage and sexuality available in evangelical writing. Keller situates sexuality within the gospel — marriage as a sign of the Christ/church union, sexual intimacy as a form of covenant renewal, the goodness of the body as grounded in creation and confirmed by incarnation. His treatment of sexuality is characteristically rigorous, compassionate, and honest about the ways the church has often handled these subjects poorly.",
  },
  {
    name: "C.S. Lewis",
    role: "Mere Christianity — The Chapter on Sexual Morality",
    quote:
      "The Christian idea of marriage is based on Christ&rsquo;s words that a man and wife are to be regarded as a single organism — for that is what the words &ldquo;one flesh&rdquo; would be in modern English. And the Christians believe that when He said this He was not expressing a sentiment but stating a fact — just as one is stating a fact when one says that a lock and its key are one mechanism, or that a violin and a bow are one musical instrument.",
    bio: "C.S. Lewis&rsquo;s chapter on sexual morality in &ldquo;Mere Christianity&rdquo; remains one of the most incisive treatments of Christian sexual ethics written for a general audience. Lewis does not begin with rules but with the observation that human sexual desire, unlike hunger, has become almost entirely unmoored from its proper object and end — and then asks what this tells us about the soul. His argument for Christian sexual ethics is not moralistic but diagnostic: the disorder of human sexuality is a symptom of the disorder of the human soul, and the gospel addresses both. Written in 1952, it has aged remarkably well.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Genesis 1:27",
    text: "So God created mankind in his own image, in the image of God he created them; male and female he created them.",
    reflection:
      "The foundation. Sexual differentiation is not incidental but constitutive — part of what it means to be made in the image of God. The two sexes together image God in a way that neither does alone, which is why their union is fruitful and why their separation is a form of incompleteness. Christian sexual ethics begin here, not with a rule but with a reality.",
  },
  {
    reference: "1 Corinthians 6:18-20",
    text: "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body. Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies.",
    reflection:
      "Sexual sin is uniquely self-destructive because the body is uniquely personal — it is not a vehicle for the self but constitutive of the self. The Christian body is not owned by the person but by the Spirit who inhabits it and the Christ who redeemed it. The ground of sexual ethics is not self-respect but worship: the body is a temple, and what happens to it happens in the presence of God.",
  },
  {
    reference: "Ephesians 5:31-32",
    text: "For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh. This is a profound mystery — but I am talking about Christ and the church.",
    reflection:
      "Paul discloses the inner meaning of sexual union: it is a sign pointing toward the union of Christ and his people. This is why the sexual ethics of the New Testament are not merely moral but sacramental. To misuse the sign is to speak a falsehood about the deepest reality in the universe. To honor the sign is to participate, bodily, in the mystery of the gospel.",
  },
  {
    reference: "1 Thessalonians 4:3-5",
    text: "It is God&rsquo;s will that you should be sanctified: that you should avoid sexual immorality; that each of you should learn to control your own body in a way that is holy and honorable, not in passionate lust like the pagans, who do not know God.",
    reflection:
      "Sexual holiness is God&rsquo;s will — not a recommendation but a direct statement. Paul frames it as learning: &ldquo;learn to control your own body.&rdquo; This is not an immediate achievement but a long formation — acquired through discipline, community, accountability, and grace. The contrast with paganism is significant: disordered sexuality is described as the condition of those who do not know God, which implies that knowing God should produce a different relationship to desire.",
  },
  {
    reference: "1 Corinthians 6:11",
    text: "And that is what some of you were. But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God.",
    reflection:
      "The most important verse in Christian sexual ethics, and the one purity culture most consistently failed to apply. Paul&rsquo;s list of sins includes sexual sinners, and his response to them is not stigma but the past tense: &ldquo;that is what some of you were.&rdquo; The gospel does not merely forgive sexual history — it forms new sexual persons. The were is the promise.",
  },
  {
    reference: "Matthew 5:28",
    text: "But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart.",
    reflection:
      "Jesus locates the sexual problem in the heart and the imagination, not only in the act. This is both more demanding than external compliance — it reaches into the inner life — and more hopeful, because if the problem is the imagination, then the renewal of the imagination through grace is a genuine solution. The Sermon on the Mount is not law without gospel; it is the description of a life that only the Spirit&rsquo;s transformation can produce.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "pIRoFYm8k2k", title: "Theology of the Body — Christopher West" },
  { videoId: "gzfv9xRGN_E", title: "Preston Sprinkle: People to Be Loved" },
  { videoId: "zP1g8k_4Uog", title: "Same-Sex Attraction and the Gospel" },
  { videoId: "Hn6YjOJXRmY", title: "Chastity as a Universal Christian Calling" },
  { videoId: "vWAbU6LTpRo", title: "Purity Culture&rsquo;s Failures and a Better Way" },
  { videoId: "fmFY-i2LqKo", title: "Sexual Redemption — the Gospel&rsquo;s Deepest Yes" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianSexualityPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<CSXEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [struggle, setStruggle] = useState("");
  const [truthReceived, setTruthReceived] = useState("");
  const [stepTaken, setStepTaken] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as CSXEntry[]);
      }
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      // storage unavailable — entries remain in memory only
    }
  }, [entries, loaded]);

  function addEntry() {
    if (!struggle.trim()) return;
    const entry: CSXEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      struggle: struggle.trim(),
      truthReceived: truthReceived.trim(),
      stepTaken: stepTaken.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setStruggle("");
    setTruthReceived("");
    setStepTaken("");
  }

  function deleteEntry(index: number) {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? ROSE : BORDER}`,
    background: active ? "rgba(225, 29, 72, 0.12)" : "transparent",
    color: active ? ROSE : MUTED,
    cursor: "pointer",
    fontSize: "0.88rem",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s ease",
  });

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.9rem",
    borderRadius: 8,
    border: `1px solid ${BORDER}`,
    background: BG,
    color: TEXT,
    fontSize: "0.92rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: ROSE,
    marginBottom: 6,
  };

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
        <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
          {/* ---------- Hero ---------- */}
          <header style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.78rem",
                color: ROSE,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Theology of the Body
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Created Male and Female: A Christian View of Sexuality
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Sex is a sacred sign — the most intimate bodily enactment of the kind of love that God
              is. Christian sexual ethics begin not with rules but with a vision: the human body made
              in the image of God, sexual union as a sign pointing toward Christ and the church,
              chastity as integrity rather than abstinence. This guide explores the theology, the
              voices, and the practices of sexual faithfulness.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${ROSE}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;And that is what some of you were. But you were washed, you were sanctified,
                you were justified in the name of the Lord Jesus Christ and by the Spirit of our
                God.&rdquo;
              </p>
              <p style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 600 }}>
                1 Corinthians 6:11
              </p>
            </div>
          </header>

          {/* ---------- Tabs ---------- */}
          <nav
            aria-label="Page sections"
            style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "2.25rem" }}
          >
            {TABS.map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} style={tabButtonStyle(tab === t)}>
                {t}
              </button>
            ))}
          </nav>

          {/* ---------- Theology ---------- */}
          {tab === "Theology" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Nine studies from creation to redemption — tracing the biblical and theological
                foundations of sexuality, the spousal meaning of the body, chastity as a universal
                calling, and the gospel&rsquo;s sufficiency for sexual brokenness.
              </p>

              {theologySections.map((section) => (
                <article key={section.badge} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: ROSE,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2
                    style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(225, 29, 72, 0.07)",
                        border: "1px solid rgba(225, 29, 72, 0.25)",
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: ROSE,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span
                        style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}
                        dangerouslySetInnerHTML={{ __html: section.callout.text }}
                      />
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where these threads converge
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Genesis 1:27, Ephesians 5:31-32, and 1 Corinthians 6:11 are not separate topics —
                  they are one theology, moving from creation to sign to redemption. The body is
                  good, sex is sacred, chastity is universal, and the gospel is sufficient. Explore
                  related topics in{" "}
                  <Link href="/christian-marriage" style={{ color: ROSE, textDecoration: "underline" }}>
                    Christian Marriage
                  </Link>
                  ,{" "}
                  <Link href="/christian-singleness" style={{ color: ROSE, textDecoration: "underline" }}>
                    Christian Singleness
                  </Link>
                  , or{" "}
                  <Link href="/christian-pornography" style={{ color: ROSE, textDecoration: "underline" }}>
                    Pornography Recovery
                  </Link>
                  .
                </p>
              </div>
            </section>
          )}

          {/* ---------- Practices ---------- */}
          {tab === "Practices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six practices for sexual formation — not a checklist but a set of real engagements
                with the long work of becoming sexually whole. Begin with the one that most
                addresses your actual situation.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: ROSE,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2 style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}>
                      {practice.title}
                    </h2>
                  </div>
                  <p
                    style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}
                    dangerouslySetInnerHTML={{ __html: practice.summary }}
                  />
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.2rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {practice.steps.map((step, i) => (
                      <li
                        key={i}
                        style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: ROSE,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the journey
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Sexual formation is the work of years, not the achievement of a decision or a
                  season of discipline. The person who is further along the path is not more
                  deserving than the person who is at the beginning; they have simply been at it
                  longer and with better support. The grace that begins the work is the grace that
                  sustains it. Bring the whole thing — the failures and the progress both — to God
                  and to community, and let the work continue.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses — from Christopher West&rsquo;s Theology of the Body to C.S.
                Lewis&rsquo;s diagnostic clarity — who have brought theological depth, pastoral
                compassion, and personal honesty to one of the church&rsquo;s most contested and
                most necessary conversations.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: ROSE,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {voice.role}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(225, 29, 72, 0.06)",
                      borderLeft: `3px solid ${ROSE}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${voice.quote}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: voice.bio }}
                  />
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages forming the backbone of a Christian sexual theology — from Genesis
                1:27 to 1 Corinthians 6:11. Take one per week, pray it, and let it do its slow
                work of formation.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: ROSE,
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      marginBottom: 12,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {scripture.reference}
                  </div>
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.75,
                      fontSize: "0.97rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${scripture.text}&rdquo;` }}
                  />
                  <p
                    style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}
                    dangerouslySetInnerHTML={{ __html: scripture.reflection }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${ROSE}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into three sentences: adoration (&ldquo;Father, you made the body
                  good and called it very good — I believe this&rdquo;), confession (&ldquo;I have
                  used my body in ways that contradict what it is for&rdquo;), and petition
                  (&ldquo;wash me, sanctify me, justify me — let the past tense of 1 Corinthians
                  6:11 be my present reality&rdquo;). The imagination is formed by what it dwells
                  on. Let it dwell on this.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Three questions: a struggle in this area you are bringing to God, a truth received
                from Scripture or community, and a step taken toward faithfulness. This is private —
                no one sees it but you. Entries are saved in your browser only.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Today&rsquo;s entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="csx-struggle" style={labelStyle}>
                    A struggle in this area you are bringing to God
                  </label>
                  <textarea
                    id="csx-struggle"
                    value={struggle}
                    onChange={(e) => setStruggle(e.target.value)}
                    placeholder="Be honest and specific — this is private. Pornography, lust, shame, confusion, a pattern you cannot break alone"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="csx-truth" style={labelStyle}>
                    A truth received from Scripture or community
                  </label>
                  <textarea
                    id="csx-truth"
                    value={truthReceived}
                    onChange={(e) => setTruthReceived(e.target.value)}
                    placeholder="A verse, a word from a friend or pastor, a truth that landed this week — name it specifically"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="csx-step" style={labelStyle}>
                    A step taken toward faithfulness
                  </label>
                  <textarea
                    id="csx-step"
                    value={stepTaken}
                    onChange={(e) => setStepTaken(e.target.value)}
                    placeholder="Specific and small beats vague and grand — a conversation had, a confession made, a boundary held, a pattern interrupted"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!struggle.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !struggle.trim() ? BORDER : ROSE,
                    color: !struggle.trim() ? MUTED : "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !struggle.trim() ? "not-allowed" : "pointer",
                  }}
                >
                  Save entry
                </button>
              </div>

              <div>
                <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 14 }}>
                  Your entries{" "}
                  <span style={{ color: MUTED, fontWeight: 400, fontSize: "0.88rem" }}>
                    ({entries.length})
                  </span>
                </h2>

                {!loaded && (
                  <p style={{ color: MUTED, fontSize: "0.9rem" }}>Loading your journal&hellip;</p>
                )}

                {loaded && entries.length === 0 && (
                  <div style={{ ...cardStyle, textAlign: "center", padding: "2.25rem 1.5rem" }}>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 6 }}>
                      No entries yet.
                    </p>
                    <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>
                      Name one struggle, one truth, one step — and let the practice of honest
                      prayer begin. The work is long. Begin today.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry, index) => (
                      <article key={entry.id} style={cardStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 12,
                            marginBottom: 10,
                          }}
                        >
                          <h3 style={{ fontSize: "0.85rem", fontWeight: 600, color: MUTED }}>
                            {entry.date}
                          </h3>
                          <button
                            type="button"
                            onClick={() => deleteEntry(index)}
                            aria-label={`Delete entry from ${entry.date}`}
                            style={{
                              background: "transparent",
                              border: `1px solid ${BORDER}`,
                              color: MUTED,
                              borderRadius: 6,
                              padding: "0.3rem 0.75rem",
                              fontSize: "0.78rem",
                              cursor: "pointer",
                              flexShrink: 0,
                            }}
                          >
                            Delete
                          </button>
                        </div>
                        <div style={{ marginBottom: entry.truthReceived || entry.stepTaken ? 10 : 0 }}>
                          <span
                            style={{
                              color: MUTED,
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              display: "block",
                              marginBottom: 3,
                            }}
                          >
                            Struggle
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.struggle}
                          </p>
                        </div>
                        {entry.truthReceived && (
                          <div style={{ marginBottom: entry.stepTaken ? 10 : 0 }}>
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 3,
                              }}
                            >
                              Truth received
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                              {entry.truthReceived}
                            </p>
                          </div>
                        )}
                        {entry.stepTaken && (
                          <div>
                            <span
                              style={{
                                color: MUTED,
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                letterSpacing: "0.07em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: 3,
                              }}
                            >
                              Step taken
                            </span>
                            <p style={{ color: MUTED, lineHeight: 1.65, fontSize: "0.9rem", fontStyle: "italic" }}>
                              {entry.stepTaken}
                            </p>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- Videos ---------- */}
          {tab === "Videos" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Teaching on the theology of the body, same-sex attraction and the gospel, purity
                culture&rsquo;s failures, and the redemption the gospel offers for sexual brokenness.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 20,
                }}
              >
                {videoItems.map((video) => (
                  <div
                    key={video.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={video.videoId} title={video.title} />
                    <div style={{ padding: "0.9rem 1.1rem" }}>
                      <h3
                        style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}
                        dangerouslySetInnerHTML={{ __html: video.title }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Closing ---------- */}
          <section
            style={{
              marginTop: "3rem",
              background: CARD,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "1.75rem",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12 }}>
              The gospel&rsquo;s deepest yes
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The past tense of 1 Corinthians 6:11 is not wishful thinking — it is the
              church&rsquo;s testimony across two thousand years. People have been washed from
              sexual histories that seemed definitive and have become, by grace, genuinely different.
              That transformation is not easy, not fast, and not solo — it requires the whole
              apparatus of the gospel: truth, community, confession, accountability, professional
              care where needed, and the slow work of the Holy Spirit. But it is real.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue exploring:{" "}
              <Link href="/christian-marriage" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Marriage
              </Link>
              ,{" "}
              <Link href="/christian-singleness" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Singleness
              </Link>
              ,{" "}
              <Link href="/christian-pornography" style={{ color: ROSE, textDecoration: "underline" }}>
                Pornography Recovery
              </Link>
              , or{" "}
              <Link href="/christian-dating" style={{ color: ROSE, textDecoration: "underline" }}>
                Christian Dating
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
