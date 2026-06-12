"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";
const TEAL = "#0D9488";
const BLUE = "#3B82F6";

type TabKey =
  | "what-are-disciplines"
  | "inward"
  | "outward"
  | "corporate"
  | "lectio-examen"
  | "videos";

const TABS: { key: TabKey; label: string }[] = [
  { key: "what-are-disciplines", label: "What Are Disciplines" },
  { key: "inward", label: "Inward Disciplines" },
  { key: "outward", label: "Outward Disciplines" },
  { key: "corporate", label: "Corporate Disciplines" },
  { key: "lectio-examen", label: "Lectio Divina & Examen" },
  { key: "videos", label: "Videos" },
];

const WHAT_SECTIONS = [
  {
    id: "foster-framework",
    color: PURPLE,
    title: "Richard Foster and the Celebration of Discipline",
    ref: "1 Timothy 4:7-8; Richard Foster, Celebration of Discipline (1978)",
    body: [
      "When Richard Foster published Celebration of Discipline in 1978, he gave the evangelical world something it had largely lost: a coherent account of how spiritual transformation actually happens. Not through willpower alone, not through more information, but through ordered, intentional practice of the classical disciplines that the church had practiced for two millennia. The book became one of the bestselling Christian titles of the twentieth century because it named something people felt but could not articulate: that knowing more about Jesus and actually becoming like Jesus are not the same thing.",
      "Foster organized twelve disciplines in three categories &mdash; inward, outward, and corporate &mdash; drawing on a stream of Christian practice stretching from the Desert Fathers through Francis of Assisi, the medieval mystics, the Reformers, the Puritans, and the Quakers. His great contribution was synthesis: showing Protestant evangelicals that these practices were not Catholic peculiarities but the heritage of the whole church, preserved across traditions and waiting to be recovered.",
      "Foster was careful to guard against a works-righteousness reading: the disciplines are not ways of earning grace. &ldquo;God has given us the Disciplines of the spiritual life as a means of receiving his grace. The Disciplines allow us to place ourselves before God so that he can transform us.&rdquo; The initiative is always God&rsquo;s; the disciplines position us to receive what he freely gives.",
    ],
  },
  {
    id: "willard-training",
    color: GOLD,
    title: "Dallas Willard: Training vs. Trying",
    ref: "Romans 12:2; Dallas Willard, The Spirit of the Disciplines (1988)",
    body: [
      "Dallas Willard drove the same insight deeper with a distinction that changed how many people think about spiritual growth: the difference between trying and training. You do not try to play concert piano. You train. You do not try to run a marathon. You train. The idea that the Christian life consists in trying very hard to be good in the moment of temptation is, Willard argued, precisely wrong &mdash; and it explains why so many sincere Christians experience repeated failure despite genuine effort.",
      "The athlete in training does not focus entirely on the performance itself. She focuses on the practices that will form the body and mind so that, when the moment comes, the right response flows naturally. Willard applied this to spiritual formation: the disciplines train the whole person &mdash; body, soul, mind, will &mdash; so that Christ-like responses become increasingly natural rather than effortful. Grace does not bypass the body; it works through it. The disciplines are the training program.",
      "Willard&rsquo;s phrase &ldquo;the spirit of the disciplines&rdquo; points to the deeper reality: Jesus himself practiced these disciplines. He withdrew to lonely places to pray (Luke 5:16). He fasted forty days before public ministry (Matthew 4:2). He memorized and meditated on Scripture. He lived in simplicity and community. If the Son of God, fully human, needed these practices to sustain his life in God, we should not be surprised that we do too.",
    ],
  },
  {
    id: "means-not-ends",
    color: TEAL,
    title: "Disciplines as Means, Not Ends",
    ref: "Colossians 2:20-23; Galatians 5:1; 1 Timothy 4:8",
    body: [
      "The most important thing to say about spiritual disciplines is what they are not: they are not the goal. They are not ways of demonstrating spiritual seriousness to God or to others. They are not ways of accumulating spiritual merit. Paul warns sharply in Colossians 2 against a religion of self-imposed discipline &mdash; &ldquo;having an appearance of wisdom in promoting self-made religion and asceticism and severity to the body&rdquo; &mdash; that is not actually of any value in stopping the indulgence of the flesh. The disciplines can become an end in themselves, a performance of piety, a new form of pride.",
      "The disciplines are means &mdash; means of grace, channels through which the living God works to transform the whole person into Christlikeness. When they stop serving that end and start serving the ego, they have been corrupted. A person can fast for three days and become more self-righteous rather than more humble. A person can read the Bible every day and become more hardened rather than more transformed. The discipline is the vehicle; God&rsquo;s grace is the engine; love is the destination.",
      "1 Timothy 4:7-8 gives the gymnasium metaphor: &ldquo;train yourself for godliness; for while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come.&rdquo; The Greek word for &ldquo;train&rdquo; is gumnaze &mdash; from which we get &ldquo;gymnasium.&rdquo; Paul does not say that bodily training is worthless; he says godliness is more valuable. The gymnasium metaphor reframes the disciplines as athletic training for the soul &mdash; rigorous, systematic, and oriented toward a goal beyond the training itself.",
    ],
  },
  {
    id: "three-categories",
    color: GREEN,
    title: "Three Categories: Inward, Outward, Corporate",
    ref: "Matthew 6:1-18; Luke 4:16; Acts 2:42-47",
    body: [
      "Foster&rsquo;s three-category framework is heuristic rather than exhaustive, but it provides a useful map. The inward disciplines &mdash; meditation, prayer, fasting, study &mdash; are practiced primarily in the interior life, in the hidden place where the soul meets God. Jesus models this in Matthew 6: prayer in your room with the door shut, fasting without letting it show on your face. These disciplines form the interior foundation from which outward and corporate life flow.",
      "The outward disciplines &mdash; simplicity, solitude, submission, service &mdash; involve the body and the social world. They reach outward &mdash; toward possessions (simplicity), toward community (service), toward authority and relationship (submission), toward time and space (solitude). They are visible, even if not always publicly performed. They reshape how we inhabit the world, what we hold, and how we relate.",
      "The corporate disciplines &mdash; confession, worship, guidance, celebration &mdash; are practiced in community, with the body of Christ. They presuppose others. They cannot be done alone. Acts 2:42-47 gives the early church&rsquo;s version: devoted to the apostles&rsquo; teaching, to fellowship, to the breaking of bread, and to prayer &mdash; corporate, ordered, and joyful. The three categories together form a whole: the person formed by all three is shaped in the interior, in their bodily life, and in their life together with others.",
    ],
  },
];

const INWARD_SECTIONS = [
  {
    id: "meditation",
    color: PURPLE,
    title: "Meditation: Biblical vs. Eastern",
    ref: "Psalm 1:2; Joshua 1:8; Philippians 4:8",
    body: [
      "The English word &ldquo;meditation&rdquo; now carries the freight of Eastern practices &mdash; emptying the mind, achieving detachment, entering a contentless awareness. Biblical meditation is the opposite: it is filling the mind with Scripture, turning it over and over, dwelling in it until it yields its meaning and its life. Psalm 1:2 describes the blessed person as one who &ldquo;meditates day and night&rdquo; on the Torah &mdash; the word translated &ldquo;meditates&rdquo; (hagah) also means to murmur, to mutter, to speak quietly to oneself. Biblical meditation was often audible, a kind of liturgical rumination.",
      "Joshua 1:8 gives the purpose: &ldquo;This Book of the Law shall not depart from your mouth, and you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.&rdquo; Meditation is not a relaxation technique; it is the internalization of the Word so that obedience flows naturally. The Scripture moves from the page to the lips to the mind to the will.",
      "Philippians 4:8 &mdash; &ldquo;whatever is true, whatever is honorable, whatever is just&rdquo; &mdash; is sometimes called the NT&rsquo;s meditation instruction. Paul describes a deliberate direction of mental attention toward the good, the beautiful, and the true. This is not mindless positivity; it is the discipline of choosing what to give the mind to, recognizing that the mind will conform, over time, to whatever it meditates on. Christian meditation is an act of will, Scripture-soaked, and aimed at transformation.",
    ],
  },
  {
    id: "prayer-discipline",
    color: GREEN,
    title: "Prayer as Discipline: The Lord’s Prayer as Template",
    ref: "Matthew 6:9-13; Luke 11:1-4; Romans 8:26-27",
    body: [
      "Prayer is a spiritual discipline in the sense that it requires formation &mdash; that we learn to pray, that we are taught to pray, that we practice praying even when it feels like nothing is happening. The disciples&rsquo; request &mdash; &ldquo;Lord, teach us to pray&rdquo; &mdash; assumes that prayer is a learnable skill, not merely a spontaneous overflow of feeling. Jesus responds by giving them a pattern, not a script: &ldquo;Pray then like this...&rdquo;",
      "The Lord&rsquo;s Prayer as a template for disciplined prayer structures the whole of Christian life: it begins with God&rsquo;s fatherhood and holiness, moves to his kingdom and will, then to human need (daily bread), relational health (forgiveness and being forgiven), spiritual danger (temptation and evil), and ends with doxology. This sequence is not accidental; it trains us to begin with God rather than with ourselves, to subordinate our requests to his agenda, and to hold our needs within the context of his sovereignty and goodness.",
      "Prayer as discipline means showing up whether you feel like it or not. The great tradition of fixed-hour prayer &mdash; the Divine Office, the daily office, Lauds and Vespers &mdash; is built on the recognition that waiting for inspiration produces intermittent prayer. Scheduled, structured prayer produces formed souls. E.M. Bounds: &ldquo;Talking to men for God is a great thing, but talking to God for men is greater still.&rdquo;",
    ],
  },
  {
    id: "fasting-discipline",
    color: GOLD,
    title: "Fasting: Matthew 6 and the Hidden Fast",
    ref: "Matthew 6:16-18; Isaiah 58:6-7; Acts 13:2-3",
    body: [
      "Jesus assumes his disciples will fast: &ldquo;And when you fast...&rdquo; &mdash; not if. His concern in Matthew 6 is not whether to fast but how: not for display but for the hidden audience of the Father who sees in secret. The fasting Jesus commends is invisible &mdash; no disfigured faces, no announcement &mdash; performed in the confidence that the Father who sees what is done in secret will reward it.",
      "Fasting as a spiritual discipline is the whole-body practice of saying: I do not live by bread alone. It is the body&rsquo;s declaration of dependence on God. When hunger comes, the hungry person is reminded to pray. The fast converts physical appetite into spiritual attentiveness. It also tests what actually controls us: the person who cannot skip a meal without becoming anxious or irritable has discovered something about their relationship with comfort and control.",
      "Isaiah 58 offers the corrective against purely religious fasting: the fast God chooses is justice &mdash; loosing the bonds of wickedness, freeing the oppressed, feeding the hungry. Fasting that produces no mercy is theater. But when fasting and justice run together &mdash; when self-denial for God produces generosity toward neighbor &mdash; the promise is extravagant: &ldquo;Then your light shall break forth like the dawn.&rdquo;",
    ],
  },
  {
    id: "study-discipline",
    color: TEAL,
    title: "Study: Spiritual Discipline, Not Merely Intellectual",
    ref: "Deuteronomy 6:4-9; 2 Timothy 2:15; Ezra 7:10",
    body: [
      "Study as a spiritual discipline is distinct from academic study because its aim is transformation, not information. Ezra &ldquo;set his heart to study the Law of the LORD, and to do it and to teach his statutes and rules in Israel&rdquo; (Ezra 7:10) &mdash; the movement is from study to obedience to teaching. The sequence matters: study shapes character, character shapes practice, practice enables credible witness.",
      "Deuteronomy 6&rsquo;s Shema calls for total cognitive engagement with the commands of God &mdash; on the heart, repeated to children, discussed while walking and lying down and rising up, bound on hands, on foreheads, on doorposts. This is not occasional review; it is the immersion of the whole life in the Word. The Torah becomes the atmosphere in which life is lived.",
      "Study as discipline requires method: the spiritual reader uses pace (slow is better than fast), repetition (re-reading is formative), pondering (stopping at what arrests attention), and application (asking not only &ldquo;what does this mean?&rdquo; but &ldquo;what does this mean for me, today?&rdquo;). 2 Timothy 2:15 calls the worker to &ldquo;rightly handle the word of truth&rdquo; &mdash; careful study is itself an act of worship, a refusal to treat the Word carelessly.",
    ],
  },
];

const OUTWARD_SECTIONS = [
  {
    id: "simplicity",
    color: GREEN,
    title: "Simplicity: Against Consumerism",
    ref: "Matthew 6:19-21; Luke 12:15; Philippians 4:11-13",
    body: [
      "The discipline of simplicity is the intentional practice of ordering possessions, desires, and time around their proper place rather than allowing them to order us. Jesus&rsquo;s economic teaching is some of his most demanding: &ldquo;Do not lay up for yourselves treasures on earth&rdquo; (Matthew 6:19); &ldquo;Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions&rdquo; (Luke 12:15). These are not suggestions for Franciscans; they are normative descriptions of what a disciple&rsquo;s relationship to money looks like.",
      "Richard Foster identifies three inner attitudes of simplicity: to receive what we have as gift (rather than achievement), to know that God cares for us (so we can release the anxiety of acquisition), and to make our goods available to others. These inner attitudes produce outer simplicity &mdash; buying less, owning less, needing less &mdash; not as an ascetic performance but as the natural overflow of a heart freed from the tyranny of things.",
      "Against contemporary consumerism, which defines the self by what it purchases and accumulates, simplicity is a profoundly countercultural act. Paul&rsquo;s &ldquo;contentment in all circumstances&rdquo; (Philippians 4:11) is explicitly something he &ldquo;learned&rdquo; &mdash; a formed disposition, not a natural temperament. Simplicity is the discipline that trains contentment, slowly releasing the grip of &ldquo;more&rdquo; until the soul discovers that it already has enough.",
    ],
  },
  {
    id: "solitude-silence",
    color: PURPLE,
    title: "Solitude and Silence: Nouwen and the Desert Fathers",
    ref: "Luke 5:16; Mark 1:35; Henri Nouwen, The Way of the Heart (1981)",
    body: [
      "Jesus withdrew to lonely places to pray &mdash; regularly, persistently, as a pattern of life. This was not crisis management; it was formation. Before choosing the twelve, he spent the night on the mountain in prayer (Luke 6:12). Before the cross, he withdrew to Gethsemane. Before the feeding of the five thousand, he sought solitude that was interrupted by the crowd. Jesus needed solitude not because he was socially exhausted but because solitude was the place where the Father&rsquo;s voice was most clearly heard and the Son&rsquo;s will most fully aligned with it.",
      "The Desert Fathers and Mothers of the third and fourth centuries fled to the Egyptian desert to discover, in radical solitude, the true self under God and the falsehood of the social self formed by reputation, noise, and distraction. Anthony of Egypt became the prototype: sold his possessions, moved to the desert, wrestled with demons and desires, and emerged with a wisdom that drew seekers from across the Mediterranean. Their sayings (the Apophthegmata Patrum) preserve a practical wisdom about the interior life that is startling in its contemporary relevance.",
      "Henri Nouwen drew on this tradition in The Way of the Heart (1981): &ldquo;In solitude I get rid of my scaffolding: no friends to talk with, no telephone calls to make, no meetings to attend, no music to entertain, no books to distract, just me &mdash; naked, vulnerable, weak, sinful, deprived, broken &mdash; nothing. It is this nothingness that I have to face in my solitude.&rdquo; Solitude does not produce peace automatically; it first produces awareness of what we have been running from. That awareness is the beginning of formation.",
    ],
  },
  {
    id: "submission",
    color: GOLD,
    title: "Submission: Freedom Through Yielding",
    ref: "Ephesians 5:21; Philippians 2:3-4; 1 Peter 5:5",
    body: [
      "The discipline of submission is the voluntary yielding of one&rsquo;s own rights and preferences for the sake of another or for the sake of the body of Christ. Ephesians 5:21 gives the overarching principle before the specific household codes: &ldquo;submitting to one another out of reverence for Christ.&rdquo; Mutual submission is a mark of Spirit-filled community. It is not hierarchy at its core but love &mdash; the willingness to place another&rsquo;s need above one&rsquo;s own insistence.",
      "Richard Foster distinguishes submission as discipline from submission as compulsion: the discipline is chosen, not coerced. The person who submits out of fear or manipulation is not practicing the discipline of submission; they are enduring oppression. The discipline is the free choice to yield, to defer, to set aside one&rsquo;s own agenda for the sake of another &mdash; practiced first in small things until it becomes a formed disposition of the soul.",
      "Philippians 2:3-4 gives the Christological ground: &ldquo;Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves.&rdquo; The example is Jesus himself &mdash; who, though equal with God, &ldquo;emptied himself, taking the form of a servant&rdquo; (2:7). The discipline of submission is the practice of the kenotic pattern of Christ: self-emptying as the path to genuine greatness.",
    ],
  },
  {
    id: "service",
    color: TEAL,
    title: "Service: The Towel and Basin",
    ref: "John 13:1-17; Mark 10:43-45; Romans 12:10-11",
    body: [
      "On the night before his death, Jesus took a towel and a basin and washed his disciples&rsquo; feet (John 13:1-17). In first-century Palestinian culture, this was the work of the lowest servant &mdash; not even Jewish slaves were required to wash feet. Jesus, knowing that he had come from God and was going to God, laid aside his outer garments and served. The knowledge of who he was freed him to serve without loss of dignity.",
      "The discipline of service is the practice of this same pattern: not strategic service that builds reputation, but the hidden service that no one notices, the work that no one thanks you for, the need that nobody sees. Foster distinguishes self-righteous service (which needs to be seen and appreciated) from true service (which is indifferent to recognition). Self-righteous service picks and chooses what to serve; true service is available. Self-righteous service is pained by ingratitude; true service is freed from the need for gratitude.",
      "Mark 10:43-45 gives the theology: &ldquo;Whoever would be great among you must be your servant, and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.&rdquo; The cross is the ultimate service &mdash; the one who had every right to demand service became the servant of all. The discipline of service trains us into the pattern of the cross: the paradox that greatness in the kingdom is measured downward, toward the lowest need.",
    ],
  },
];

const CORPORATE_SECTIONS = [
  {
    id: "confession",
    color: GREEN,
    title: "Confession: The Discipline of Honesty",
    ref: "James 5:16; 1 John 1:9; Psalm 32:1-5",
    body: [
      "James 5:16 is disarmingly simple: &ldquo;Therefore, confess your sins to one another and pray for one another, that you may be healed.&rdquo; Corporate confession &mdash; not merely to God in private but to another person &mdash; is a New Testament discipline. The healing James promises is connected to the confession: something is released when sin is brought out of darkness into the light of another person&rsquo;s presence.",
      "Dietrich Bonhoeffer in Life Together argued that the person who refuses to confess to a brother or sister has not yet experienced grace fully: &ldquo;He who is alone with his sin is utterly alone... The pious fellowship permits no one to be a sinner. So everybody must conceal his sin from himself and from the fellowship. We dare not be sinners. Many Christians are unthinkably horrified when a real sinner is suddenly discovered among the righteous. So we remain alone with our sin, living in lies and hypocrisy.&rdquo; Confession breaks the isolation of hidden sin.",
      "The discipline of confession is not about earning forgiveness &mdash; that has already been granted in Christ. It is about the psychology and community of actual forgiveness: the experience of saying the worst thing out loud and discovering that it does not destroy the relationship, that the brother or sister still looks at you with grace. Psalm 32 describes the felt experience of unconfessed sin &mdash; bodily, crushing &mdash; and the felt relief of confession: &ldquo;Blessed is the one whose transgression is forgiven.&rdquo;",
    ],
  },
  {
    id: "worship-discipline",
    color: GOLD,
    title: "Worship: What It Actually Is",
    ref: "John 4:23-24; Romans 12:1; Psalm 100",
    body: [
      "Worship is widely misunderstood as the music portion of a church service. It is actually the orientation of the whole life toward God in honor, adoration, and surrender. John 4:23-24 describes the worship the Father seeks: &ldquo;in spirit and truth.&rdquo; Spirit: not external ritual alone but from the inmost self, animated by the Holy Spirit. Truth: not sentimental feeling but grounded in the truth of who God is and what he has done. Worship that is all spirit and no truth becomes emotionalism; worship that is all truth and no spirit becomes intellectualism.",
      "Romans 12:1 extends worship beyond the sanctuary: &ldquo;present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.&rdquo; The whole life &mdash; the body, the daily work, the relationships, the money &mdash; is the medium of worship. This is not a metaphor; it is a claim that cooking a meal for a sick neighbor, doing honest work with integrity, and raising children in the nurture of God are acts of worship as much as singing a hymn.",
      "As a corporate discipline, worship requires formation. We must learn to worship &mdash; to get out of the way of our own preferences and performance, to move past our evaluation of music quality and lyrical content toward actual encounter with the living God. Psalm 100 gives the shape: come with joy, serve, know, enter, give thanks, bless. It begins with a posture (joyful approach) and moves toward an acknowledgment (the LORD is God) and a practice (gratitude). Disciplined worship trains us to bring our whole selves rather than our religious face.",
    ],
  },
  {
    id: "guidance",
    color: PURPLE,
    title: "Guidance: Discernment in Community",
    ref: "Acts 15:28; Proverbs 11:14; Acts 13:2-3",
    body: [
      "The discipline of corporate guidance is the practice of seeking and submitting to discernment made in community rather than in isolation. The Jerusalem Council (Acts 15) gives the model: a disputed question &mdash; circumcision of Gentiles &mdash; is brought to the gathered community of apostles and elders. They discuss, debate, hear testimony, consult Scripture, and reach a conclusion that they report with the phrase: &ldquo;It has seemed good to the Holy Spirit and to us&rdquo; (Acts 15:28). Corporate discernment is not the elimination of human process; it is the sanctification of it.",
      "The Protestant tendency toward individualism in spiritual decision-making &mdash; &ldquo;God told me personally&rdquo; &mdash; produces accountability-free spirituality that can justify almost anything. The discipline of guidance insists on the check of community: the spiritual directors, the trusted elders, the discerning friends who can hear what we have heard and ask whether it is truly the Spirit or our own unexamined desire. Proverbs 11:14: &ldquo;In the abundance of counselors there is safety.&rdquo;",
      "The Quakers developed the practice of the &ldquo;clearness committee&rdquo; &mdash; a small group convened not to give advice but to ask honest, open questions that help the person seeking clarity hear what they already know but cannot yet articulate. Parker Palmer recovered this practice for a wider audience. The discipline of guidance recognizes that we are not always the most reliable interpreters of our own experience, and that the community of faith has been given the Spirit precisely for the work of discernment together.",
    ],
  },
  {
    id: "celebration",
    color: TEAL,
    title: "Celebration: Joy as Spiritual Discipline",
    ref: "Philippians 4:4; Nehemiah 8:10; Luke 15:23-24",
    body: [
      "Celebration is the discipline most likely to be dismissed as a luxury rather than a necessity &mdash; surely the serious spiritual life is about solemnity, suffering, and sacrifice? But Foster argues that &ldquo;if we do not celebrate, we will lose the energy necessary for all the other disciplines.&rdquo; Joylessness is a spiritual problem, not merely a psychological one. The person who has lost the ability to celebrate has, in some sense, lost touch with the goodness of God.",
      "Philippians 4:4 &mdash; &ldquo;Rejoice in the Lord always; again I will say, rejoice&rdquo; &mdash; is an imperative from prison. Paul is not writing from comfort; he is commanding joy from chains. This suggests that joy is not the natural overflow of good circumstances but a disciplined orientation of the soul toward the goodness of God in the midst of all circumstances. The command to rejoice always is not naivete about suffering; it is the insistence that God&rsquo;s goodness remains even when circumstances do not.",
      "Nehemiah 8:10 &mdash; &ldquo;the joy of the LORD is your strength&rdquo; &mdash; connects celebration to capacity. The people were weeping at the public reading of the Law &mdash; hearing how far they had fallen. Nehemiah redirects them to celebration as the source of energy for obedience. Luke 15 gives three parables of celebration: the father runs to the prodigal, throws a party, and kills the fatted calf. The older brother, who does not celebrate, is described as angry and refuses to enter. His inability to celebrate reveals a deeper problem: he has been working without joy, serving without love. Celebration is the discipline that keeps us from the older brother&rsquo;s joyless obedience.",
    ],
  },
];

const LECTIO_SECTIONS = [
  {
    id: "lectio-divina",
    color: PURPLE,
    title: "Lectio Divina: Holy Reading",
    ref: "Psalm 119:15; Luke 2:19; John 15:7",
    body: [
      "Lectio divina (Latin: holy reading) is an ancient practice of prayerful Scripture reading that traces its formal articulation to the monk Guigo II in the twelfth century, though the practice is as old as the church&rsquo;s engagement with Scripture. It is not Bible study in the modern analytical sense; it is reading for encounter &mdash; reading not to master the text but to be mastered by it, not to extract information but to receive formation.",
      "The four movements: Lectio (reading) &mdash; read a short passage slowly, perhaps twice, listening for a word or phrase that catches your attention. Do not analyze yet; simply receive. Meditatio (meditation) &mdash; take that word or phrase and turn it over slowly in the mind. Let it interact with your memory, your present circumstances, your questions. Repeat it quietly. Let it become interior. Oratio (prayer) &mdash; respond to God from what has arisen in meditation. Speak honestly &mdash; gratitude, confession, petition, desire. Let the Word prompt the prayer. Contemplatio (contemplation) &mdash; fall silent. Rest in God&rsquo;s presence. Stop speaking and simply be with him. Let go of thoughts and rest in the one who has spoken.",
      "Lectio divina resists the hurry of modern life and the productivity framework we unconsciously apply even to prayer. Its goal is not to get through more Scripture but to let a small amount of Scripture get deeper into the soul. Mary, who &ldquo;pondered these things in her heart&rdquo; (Luke 2:19), models the lectio disposition: not rushing past the holy to the next thing, but remaining with it until it has done its work.",
    ],
  },
  {
    id: "examen",
    color: GREEN,
    title: "The Ignatian Daily Examen",
    ref: "Psalm 139:23-24; Lamentations 3:40; 1 Corinthians 11:28",
    body: [
      "The Daily Examen is a prayer practice developed by Ignatius of Loyola (1491-1556) for reviewing the day in God&rsquo;s presence. It is not self-criticism but attentiveness &mdash; learning to notice where God was at work and where we were or were not responsive. Ignatius considered it the most important of all spiritual practices, the non-negotiable center of Jesuit formation.",
      "The five movements: 1) Gratitude &mdash; begin by giving thanks for specific gifts of the day. This is not forced positivity but genuine acknowledgment of grace. 2) Request for the Spirit &mdash; ask the Holy Spirit to illuminate the review with honesty and mercy. 3) Review of the day &mdash; walk back through the hours: where did you feel God&rsquo;s presence? Where were you consoled (drawn toward God) or desolated (drawn away from him)? Where did you act from love and where from fear or selfishness? 4) Contrition &mdash; acknowledge honestly the moments of failure, unkindness, or inattention. Receive forgiveness. 5) Resolution &mdash; look to tomorrow. What do you want to be different? What do you ask for? Rest in God&rsquo;s faithfulness for what is ahead.",
      "The examen&rsquo;s genius is that it makes us attentive to the texture of daily life as the place where God is encountered. Formation is not primarily in the dramatic moments of crisis or conversion; it is in the ten thousand small choices of ordinary days. The examen trains us to see those moments, to learn from them, and to bring them before God before they are forgotten.",
    ],
  },
  {
    id: "journaling",
    color: GOLD,
    title: "Journaling as Spiritual Discipline",
    ref: "Habakkuk 2:2; Revelation 1:11; Psalm 102:18",
    body: [
      "Journaling has an ancient pedigree as a spiritual discipline: Augustine&rsquo;s Confessions is, among other things, an extended journal of the soul&rsquo;s movement toward God. The Desert Fathers wrote aphorisms. John Wesley kept meticulous diaries of his spiritual state. The Puritans practiced &ldquo;spiritual bookkeeping&rdquo; &mdash; systematic examination of the soul&rsquo;s condition before God. The practice serves a simple but profound function: it slows us down long enough to see what is actually happening in the interior life.",
      "The discipline of journaling is not about literary quality or comprehensiveness. It is about the act of giving language to experience &mdash; and in doing so, bringing it before God. The unnamed feelings that drive our behavior often lose some of their power when named and written. The gratitude that might otherwise evaporate is crystallized and held. The insight that came in prayer or Scripture reading is secured against the erosion of the next busy hour.",
      "Habakkuk 2:2: &ldquo;Write the vision; make it plain on tablets, so he may run who reads it.&rdquo; The discipline of writing is connected throughout Scripture to memory, formation, and witness. Psalm 102&rsquo;s superscription describes it as &ldquo;a prayer of one afflicted, when he is faint and pours out his complaint before the LORD&rdquo; &mdash; the psalms themselves are a kind of divine journaling. Writing to God, in the manner of the psalms, is one of the oldest spiritual disciplines in the tradition.",
    ],
  },
  {
    id: "daily-office",
    color: TEAL,
    title: "The Daily Office: Fixed-Hour Prayer",
    ref: "Psalm 55:17; Daniel 6:10; Acts 3:1",
    body: [
      "The Daily Office &mdash; also called fixed-hour prayer, the divine hours, or the Liturgy of the Hours &mdash; is the practice of praying at specific times throughout the day: morning, midday, evening, and night. This practice roots the individual in the ancient rhythm of the church and hallows the structure of the day itself. Daniel prayed three times daily even under threat of death (Daniel 6:10). The early church observed the third, sixth, and ninth hours of prayer (Acts 3:1; 10:9).",
      "The genius of fixed-hour prayer is that it does not depend on inspiration, mood, or available energy. The office comes whether or not the soul feels like praying. It is the antidote to the &ldquo;when I feel like it&rdquo; spirituality that produces thin prayer and intermittent engagement. Phyllis Tickle&rsquo;s The Divine Hours (three volumes) made the practice accessible to non-liturgical Protestants, providing morning, midday, and evening prayers drawn from psalms, Scripture, and collects. Common Prayer (Shane Claiborne, Jonathan Wilson-Hartgrove) offers a similar resource with social justice emphasis.",
      "The Daily Office shapes time itself as sacred. When the alarm signals noon prayer and the lawyer stops to read a psalm and a collect, the law firm becomes, for that moment, a monastery. The discipline sanctifies not just the prayer but the context in which it is prayed. Over years of practice, the hours accumulate into a formed person: one who, as Psalm 55:17 says, cries out &ldquo;evening and morning and at noon&rdquo; and finds that God hears.",
    ],
  },
];

const VIDEOS = [
  {
    videoId: "4MvKl2M0Y6Q",
    title: "Richard Foster on Spiritual Disciplines",
    description:
      "Richard Foster, author of Celebration of Discipline, explains why the classical disciplines are means of grace, not ways of earning favor, and how they position the soul to receive transformation.",
  },
  {
    videoId: "a7dRpnB2_s0",
    title: "Dallas Willard on Spiritual Formation",
    description:
      "Dallas Willard unpacks the distinction between trying and training in the Christian life, explaining how the disciplines work with grace to form the whole person into Christlikeness.",
  },
  {
    videoId: "rL5e7nQ3YIY",
    title: "Thomas Keating on Contemplative Prayer",
    description:
      "Thomas Keating introduces centering prayer and the contemplative tradition, grounding the practice in the history of Christian mysticism and the movement toward union with God.",
  },
];

export default function ChristianSpiritualDisciplinesGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("what-are-disciplines");
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const renderSections = (
    sections: {
      id: string;
      color: string;
      title: string;
      ref: string;
      body: string[];
    }[]
  ) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {sections.map((sec) => (
        <div
          key={sec.id}
          style={{
            background: CARD,
            border: `1px solid ${openSection === sec.id ? sec.color + "55" : BORDER}`,
            borderRadius: 14,
            overflow: "hidden",
            transition: "border-color 0.2s",
          }}
        >
          <button
            type="button"
            onClick={() => toggleSection(sec.id)}
            style={{
              width: "100%",
              padding: "20px 24px",
              cursor: "pointer",
              textAlign: "left",
              background: "transparent",
              border: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  color: sec.color,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {sec.ref}
              </div>
              <div
                style={{
                  color: TEXT,
                  fontSize: 16,
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {sec.title}
              </div>
            </div>
            <div
              style={{
                color: MUTED,
                fontSize: 20,
                flexShrink: 0,
                transform: openSection === sec.id ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            >
              &#8964;
            </div>
          </button>
          {openSection === sec.id && (
            <div
              style={{
                padding: "0 24px 24px",
                borderTop: `1px solid ${BORDER}`,
              }}
            >
              {sec.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: i === 0 ? TEXT : MUTED,
                    fontSize: 15,
                    lineHeight: 1.85,
                    marginTop: 16,
                    marginBottom: 0,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

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
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(160deg, #0d0d20 0%, ${BG} 60%)`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "64px 20px 56px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              background: `${PURPLE}22`,
              border: `1px solid ${PURPLE}44`,
              borderRadius: 24,
              padding: "5px 16px",
              color: PURPLE,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Train Yourself for Godliness &mdash; 1 Tim 4:7
          </div>
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Christian Spiritual Disciplines:
            <br />
            <span style={{ color: PURPLE }}>Forming Christ in You</span>
          </h1>
          <p
            style={{
              color: MUTED,
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 620,
              margin: "0 auto 32px",
            }}
          >
            The classical disciplines of the Christian life &mdash; inward, outward, and
            corporate &mdash; as recovered by Richard Foster and Dallas Willard. Not ways
            of earning grace, but ways of placing ourselves before the God who
            freely transforms.
          </p>
          <blockquote
            style={{
              background: `${PURPLE}12`,
              border: `1px solid ${PURPLE}30`,
              borderRadius: 12,
              padding: "20px 28px",
              maxWidth: 560,
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <p
              style={{
                color: TEXT,
                fontSize: 15,
                lineHeight: 1.75,
                margin: "0 0 10px",
                fontStyle: "italic",
              }}
            >
              &ldquo;The Disciplines allow us to place ourselves before God so that he
              can transform us. The goal is God himself, not the Disciplines.&rdquo;
            </p>
            <p
              style={{
                color: PURPLE,
                fontSize: 12,
                fontWeight: 700,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Richard Foster &mdash; Celebration of Discipline
            </p>
          </blockquote>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Tab Bar */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 32,
            background: CARD,
            borderRadius: 10,
            padding: 4,
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                background: activeTab === t.key ? PURPLE : "transparent",
                color: activeTab === t.key ? "#fff" : MUTED,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab: What Are Disciplines */}
        {activeTab === "what-are-disciplines" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              What Are Spiritual Disciplines?
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Foster&rsquo;s framework, Willard&rsquo;s training vs. trying, the gymnasium metaphor,
              and why the disciplines are means of grace rather than ends in themselves.
            </p>
            {renderSections(WHAT_SECTIONS)}
          </div>
        )}

        {/* Tab: Inward Disciplines */}
        {activeTab === "inward" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              The Inward Disciplines
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Meditation, prayer, fasting, and study &mdash; the disciplines practiced in the
              interior life, in the hidden place where the soul meets God.
            </p>
            {renderSections(INWARD_SECTIONS)}
          </div>
        )}

        {/* Tab: Outward Disciplines */}
        {activeTab === "outward" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              The Outward Disciplines
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Simplicity, solitude, submission, and service &mdash; disciplines that reshape how
              we inhabit the world, what we hold, and how we relate to others.
            </p>
            {renderSections(OUTWARD_SECTIONS)}
          </div>
        )}

        {/* Tab: Corporate Disciplines */}
        {activeTab === "corporate" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              The Corporate Disciplines
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Confession, worship, guidance, and celebration &mdash; disciplines that can only
              be practiced in community, with the body of Christ.
            </p>
            {renderSections(CORPORATE_SECTIONS)}
          </div>
        )}

        {/* Tab: Lectio Divina & Examen */}
        {activeTab === "lectio-examen" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              Lectio Divina, Examen & the Daily Office
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Step-by-step lectio divina, the Ignatian Daily Examen, journaling as discipline,
              and fixed-hour prayer that hallows the structure of the day.
            </p>
            {renderSections(LECTIO_SECTIONS)}
          </div>
        )}

        {/* Tab: Videos */}
        {activeTab === "videos" && (
          <div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: TEXT,
                marginBottom: 8,
              }}
            >
              Video Teaching on Spiritual Disciplines
            </h2>
            <p style={{ color: MUTED, fontSize: 14, marginBottom: 28, lineHeight: 1.7 }}>
              Richard Foster, Dallas Willard, and Thomas Keating on the classical
              disciplines, spiritual formation, and contemplative prayer.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {VIDEOS.map((v) => (
                <div
                  key={v.videoId}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "16px 20px" }}>
                    <h4
                      style={{
                        color: PURPLE,
                        fontWeight: 700,
                        fontSize: 16,
                        marginBottom: 8,
                      }}
                    >
                      {v.title}
                    </h4>
                    <p
                      style={{
                        color: MUTED,
                        fontSize: 14,
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing callout */}
        <div
          style={{
            background: `linear-gradient(135deg, ${PURPLE}15 0%, ${GREEN}15 100%)`,
            border: `1px solid ${PURPLE}30`,
            borderRadius: 16,
            padding: "40px 36px",
            textAlign: "center",
            marginTop: 48,
          }}
        >
          <h3
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: TEXT,
              marginBottom: 14,
            }}
          >
            Begin with One
          </h3>
          <p
            style={{
              color: MUTED,
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 600,
              margin: "0 auto 20px",
            }}
          >
            You do not need to practice twelve disciplines simultaneously. Choose one.
            Start small, start today, and stay with it long enough to notice what it
            is forming in you. The disciplines are not sprints; they are the slow
            architecture of a life being shaped by grace.
          </p>
          <div
            style={{
              display: "inline-block",
              background: BG,
              border: `1px solid ${GOLD}30`,
              borderRadius: 10,
              padding: "12px 24px",
              color: GOLD,
              fontSize: 14,
              fontStyle: "italic",
            }}
          >
            &ldquo;Train yourself for godliness.&rdquo; &mdash; 1 Timothy 4:7
          </div>
        </div>
      </div>
    </div>
  );
}
