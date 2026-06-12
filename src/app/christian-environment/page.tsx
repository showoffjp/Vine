"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const STORAGE_KEY = "vine_christianenvironment_entries";

interface ENVEntry {
  id: string;
  date: string;
  creationAct: string;
  whyItMatters: string;
  communityStep: string;
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
    badge: "Genesis 2:15",
    title: "Tend and Keep — Abad and Shamar, the Dual Calling",
    paragraphs: [
      "The first job description in the Bible is not preaching, evangelism, or even prayer. It is gardening. Genesis 2:15 places the human creature in Eden and assigns two verbs: abad (עָבַד) and shamar (שָׁמַר). Abad means to work, to serve, to cultivate — it is the root word for servant and for worship. Shamar means to keep, to guard, to protect, to watch over — it is used of a shepherd watching a flock, a sentinel keeping a gate, a parent watching a child. Together they form the oldest human vocation: cultivating what grows and protecting what is threatened.",
      "The church has frequently spiritualized or abandoned this text, reading it as mere backdrop before the real drama of the Fall. But the vocation survives the Fall — in Genesis 3 the ground becomes harder, the labor more painful, but the calling does not disappear. Humans are still tillers of the soil; the curse complicates the work without canceling it. If abad and shamar are what it means to be human before sin enters the story, then creation care is not a peripheral add-on to Christian discipleship. It is constitutive of what image-bearing looks like.",
      "Christian environmental care begins not with statistics about carbon or species loss but with this: we were made to tend. The garden was given to us not as raw material for extraction but as a living system to cultivate and guard. The first calling of the human — worship-work in a garden entrusted to our care — is still the calling.",
    ],
    callout: {
      label: "The words",
      text: "Abad (עָבַד): to till, work, serve — shares its root with worship and servanthood. Shamar (שָׁמַר): to keep, guard, protect, watch over — the same word used of a sentinel or a shepherd watching a flock.",
    },
  },
  {
    badge: "Genesis 1:28",
    title: "Dominion as Stewardship — The Misuse of a Word",
    paragraphs: [
      "Lynn White Jr.&rsquo;s 1967 essay &ldquo;The Historical Roots of Our Ecological Crisis&rdquo; charged Christianity with responsibility for the environmental crisis, citing Genesis 1:28 — &ldquo;have dominion over&rdquo; the earth — as the theological warrant for exploitation. The charge stings because it is not entirely wrong. Western Christianity has often read dominion as license — the right to use and dispose of creation however human ambition sees fit. The result has been a tradition largely absent from conservation and at times actively hostile to it.",
      "But dominion in the Hebrew is not the dominion of a tyrant; it is the dominion of a king who answers to a higher King. In the ancient Near East, the image of God language placed humans as royal stewards representing the divine sovereign. A steward does not own what he manages; he manages it on behalf of the one who does. Psalm 24:1 is the corrective that every reading of Genesis 1:28 must pass through: &ldquo;The earth is the LORD&rsquo;s, and the fullness thereof.&rdquo; We exercise authority over a property that belongs to God. Any exercise of that authority which damages or destroys what is his is not dominion — it is theft.",
      "The dominion tradition, rightly read, actually makes the environmental demand more urgent: the steward who depletes the owner&rsquo;s estate and returns it diminished has not served faithfully. The creation is God&rsquo;s. We hold it in trust. That trust is presently being broken on an enormous scale, and Christians of all people should be alarmed — not because nature is divine, but because it belongs to our Lord.",
    ],
  },
  {
    badge: "Romans 8:19-22",
    title: "The Groaning Creation — Creation Awaits Redemption",
    paragraphs: [
      "Paul&rsquo;s cosmology in Romans 8 is startling in its scope. The creation, he writes, &ldquo;was subjected to futility — not willingly, but because of him who subjected it, in hope that the creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God. For we know that the whole creation has been groaning together in the pains of childbirth until now.&rdquo; The Fall damaged not only human beings but the whole created order; Paul speaks of a cosmos in labor, aching for the redemption it knows is coming.",
      "Two implications follow. First, the creation is not spiritually neutral — it is implicated in the story of sin and redemption, not merely a stage on which that story is performed. When Christians neglect or damage creation, they are not harming a morally indifferent backdrop; they are adding to the groaning of a world already in pain, a world that God loves and that God has promised to redeem. Second, and just as importantly, the creation&rsquo;s groaning is the groaning of a mother in childbirth — it is travail that leads somewhere. The creation has a future.",
      "This future orientation matters for environmental motivation. Christian creation care is not fueled by despair or by the conviction that the earth is merely a temporary platform to be abandoned. It is fueled by the knowledge that the creation matters to God, that it will be renewed and not discarded, and that how we tend it now — our faithfulness or faithlessness as stewards — is somehow part of the story that groaning is resolved in.",
    ],
  },
  {
    badge: "Revelation 21",
    title: "Not Destruction but Transformation — The New Creation",
    paragraphs: [
      "A common evangelical reading of eschatology treats the physical creation as disposable — it will all burn anyway, so why invest in it? This reading has done enormous damage, undercutting environmental motivation by implying that caring for the earth is pointless in light of its imminent incineration. But the biblical picture of the end is not destruction and escape; it is transformation and renewal. Revelation 21 does not describe the earth being erased and replaced by a purely spiritual realm. It describes the new Jerusalem coming down — heaven coming to earth, not earth being abandoned for heaven.",
      "N.T. Wright has argued, following the Greek of 2 Peter 3:10 carefully, that the &ldquo;burning&rdquo; texts are describing purification rather than annihilation — the way ore is refined by fire, not dissolved. Paul uses the same verb (apokaradokia — eager expectation) for both the creation waiting for redemption and the children of God waiting for it; both are waiting for the same event, which is liberation and glorification, not elimination. What God made, God loves. What God loves, God will not simply throw away.",
      "The practical upshot is significant. If the new creation is a renewed and glorified version of this creation rather than an utterly different substance, then what we do with this creation now has eschatological weight. It is not that our conservation efforts will survive intact into the age to come — it is that the habits of faithfulness and unfaithfulness we form now are the habits we bring with us. We tend the earth because it belongs to God, because he will renew it, and because tending is the kind of people we want to be when the renewal comes.",
    ],
  },
  {
    badge: "Leviticus 25",
    title: "Sabbath for the Land — The Sabbatical Year",
    paragraphs: [
      "One of the most striking and least-followed ecological laws in Scripture is the sabbatical year. Leviticus 25 commands Israel to let the land rest every seventh year: no sowing, no pruning, no harvest. The land itself — not just the people — is to keep a Sabbath to the LORD. The soil is not merely a resource to be maximized; it is a creature under the lordship of God, entitled to rest on a divine schedule. The command insists that the creation has rhythms and limits that human agricultural ambition must submit to.",
      "The text treats violation of this law with unusual seriousness. Leviticus 26 explicitly says that if Israel refuses to give the land its sabbaths, the land will take them by force — the people will be exiled, and &ldquo;the land shall enjoy its Sabbaths while it lies desolate without them.&rdquo; The punishment fits the crime: a people who refused to honor creation&rsquo;s limits will lose access to creation for the exact number of years they robbed it of rest. This is not primitive superstition; it is a prescient ecological observation. Soils that are never rested are eventually unusable soils.",
      "The sabbatical year pattern — work six, rest one — extends the Sabbath principle into the agricultural realm and implies a theology of enough: there is enough, if we trust the provision and honor the rhythm. The manna in the wilderness trained Israel in the same logic: gather for today, not for the week. The land sabbath trains Israel that the earth is not an inexhaustible vending machine but a living gift that requires rest. Creation care rooted in the Sabbath is creation care rooted in trust.",
    ],
  },
  {
    badge: "Common Grace",
    title: "Creation&rsquo;s Beauty and the Theology of Common Grace",
    paragraphs: [
      "Calvin&rsquo;s doctrine of common grace holds that God blesses all people, not only the elect — rain falls on the just and the unjust, harvests arrive for believers and unbelievers alike, and the beauty of the creation is given to all. The implication for creation care is underappreciated: every person who stands before a mountain, a coastline, or a night sky full of stars is receiving a gift from God, whether or not they know it. The creation is not merely a utility; it is a means of grace, a constant communication of the power and generosity and beauty of its Maker.",
      "The Psalms sing this at length. Psalm 19 opens with the heavens declaring glory — a declaration that needs no human translator, that goes out through all the earth, that the speechless creation nevertheless broadcasts continuously. Psalm 104 is a sustained meditation on the intricacy of the creation, lingering over the springs and the wild donkeys and the storks and the sea monsters, each creature receiving its food in its time from the open hand of God. The psalmist&rsquo;s delight in creation is not pantheism; it is worship — seeing the creation as a window onto the One who made it.",
      "This means that environmental destruction is not merely a practical problem; it is a silencing. Every species extinction removes a voice from the chorus. Every degraded watershed darkens a window. Common grace flows to all people through the intactness of creation, and Christians who care about the world knowing its Maker have reason to care about preserving the means by which the Maker is known.",
    ],
  },
  {
    badge: "Incarnation",
    title: "The Body of God — The Incarnation as Affirmation of the Physical World",
    paragraphs: [
      "The most theologically dense argument for creation care is often overlooked: the incarnation. In Jesus Christ, the eternal Son of God took on human flesh — actual material body, actual neurons, actual digestive system, actual bones that would eventually be broken. This is not a metaphor. John 1 insists that the Word became flesh and dwelt among us — the Greek word for dwelt is literally &ldquo;tabernacled,&rdquo; pitched a tent, made a home in the material world. The incarnation is God&rsquo;s supreme endorsement of the physical.",
      "Gnostic Christianity, ancient and modern, has always suspected the body and the material world — treating them as temporary, lower, spiritually suspect. But Christian orthodoxy has condemned Gnosticism at every turn because the incarnation forbids it. You cannot believe that God took a body, that Jesus ate fish on the beach after his resurrection, that we will be raised with resurrection bodies, and simultaneously believe that the material world is spiritually irrelevant. If God made it, walked in it, ate in it, wept in it, bled in it, and promised to renew it — the material world is not the enemy of the spiritual. It is its theater.",
      "Creation care is thus a profoundly incarnational practice. To plant a tree, clean a river, compost food waste, or reduce carbon emissions is to act in accordance with the incarnation&rsquo;s logic: this physical world matters, God showed that it matters by entering it, and we honor his entry by caring for what he entered. Disembodied spirituality that ignores the groaning of the physical creation is not more Christian for its spirituality; it is less Christian for its Gnosticism.",
    ],
  },
  {
    badge: "Justice",
    title: "Creation Care as Justice — The Poor Suffer Most",
    paragraphs: [
      "One of the most compelling reasons for Christian environmental engagement is also the most uncomfortable to face: the people who have contributed least to environmental degradation are the people who suffer most from it. Rising seas threaten Pacific Island nations whose carbon footprint is negligible. Drought devastates sub-Saharan farmers who have never owned a car. Indoor air pollution from cooking fires kills millions across the developing world who had no hand in building the industrial economy that dominates global carbon emissions. Environmental damage is not a politically neutral issue; it is a justice issue, and the weight falls hardest on the poor.",
      "The biblical tradition is unambiguous about God&rsquo;s concern for the vulnerable — the widow, the orphan, the stranger, the poor. Proverbs 31:8-9 commands speaking up for those who cannot speak for themselves. Isaiah 58 ties true fasting directly to loosing the chains of injustice and sharing food with the hungry. If environmental degradation is disproportionately destroying the lives of the world&rsquo;s poorest people, then silence on environmental issues is silence about justice, which is silence about what the prophets never stopped shouting.",
      "This framing changes the political valence of creation care for evangelical Christians who have been skeptical of environmentalism as a liberal project. When the frame shifts from &ldquo;save the planet&rdquo; to &ldquo;protect the poor from the consequences of our consumption,&rdquo; the issue sounds like the Hebrew prophets, not the Sierra Club. Jonathan Merritt, Calvin DeWitt, and a growing number of evangelical leaders have made exactly this argument, and it is moving a generation of younger evangelicals toward creation care that their parents never embraced.",
    ],
  },
  {
    badge: "History",
    title: "Why Evangelicals Have Been Slow — And Why That&rsquo;s Changing",
    paragraphs: [
      "American evangelical Christianity has been notably slow to engage environmental issues, and the reasons are worth naming honestly. The &ldquo;dominion theology&rdquo; misreading gave theological cover to exploitation. The premillennial eschatology that expected imminent rapture made long-term investment in the earth seem pointless. The cultural identification of environmentalism with the political left made it feel like enemy territory. The prosperity gospel, in its various forms, encouraged treating the earth as raw material for human wealth-building. Together these streams produced a tradition that has often been the church least likely to show up for creation.",
      "But the tide is shifting. A new generation of evangelical thinkers and practitioners — led by figures like Calvin DeWitt, Jonathan Merritt, and the Evangelical Environmental Network — have returned to the biblical texts and found that the case for creation care is not a concession to secular environmentalism but a recovery of the oldest biblical mandate. The Lausanne Movement&rsquo;s Cape Town Commitment (2010) explicitly included creation care as part of integral mission. Young evangelical Christians are citing environmental concern as one of the defining issues of their faith, and many churches are beginning to integrate creation care into their theology of discipleship.",
      "This recovery is still uneven and contested. But it is genuine. The question for today&rsquo;s believer is not whether the cultural tide is turning — it is whether their own discipleship will be shaped by abad and shamar, by the groaning of Romans 8, by the sabbatical year, by the incarnation. Every Christian can tend and keep. Start small. The garden given to us is larger than a backyard, but it is tended one act at a time.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Creation Care Log",
    summary:
      "Name one concrete act of care for the creation each week, trace its theological root, and identify one step that involves others. Use the Journal tab on this page to build a record.",
    steps: [
      "Choose a scale that is doable — a changed habit, a restoration project, a purchase reconsidered. The point is specificity: not &ldquo;be more eco-conscious&rdquo; but &ldquo;walk to the market on Tuesdays instead of driving.&rdquo;",
      "For each act, trace the theological root. Which part of the creation mandate is this honoring? Abad (tending, cultivating) or shamar (protecting, guarding)? Connecting action to doctrine keeps creation care from becoming moralism.",
      "Ask: who else could join this? Creation care is communal in Scripture — the sabbatical year was a national practice, the jubilee was collective, the new creation is a city. Identify one person to invite into the practice.",
      "Record it in the Journal tab. Over time, patterns emerge: where you find it easy to act, where you resist, which habits are forming and which are still aspirations.",
    ],
    anchor: "Genesis 2:15 — The LORD God took the man and put him in the garden of Eden to work it and keep it.",
  },
  {
    number: "02",
    title: "Sabbath Economics — Reducing Consumption",
    summary:
      "Apply the logic of the sabbatical year to personal consumption: designated periods of deliberate rest from acquiring, consuming, and discarding, rooted in trust that there is enough.",
    steps: [
      "Choose one category per month: food waste, fast fashion, single-use plastics, screen time, or energy consumption. Audit your current use first — you cannot reduce what you have not measured.",
      "Practice &ldquo;enough&rdquo; theology. Before each purchase in the chosen category, ask the sabbatical question: do I trust God&rsquo;s provision, or am I accumulating against fear? Let the question slow the consumption.",
      "Redirect what is saved — money, time, material — toward a creation care initiative: a local land trust, an environmental justice organization serving communities already suffering from pollution, a congregation planting trees.",
      "Observe one full digital sabbath per week: no unnecessary consumption of media, goods, or streaming. Let the day be a practice of the sufficiency the whole creation is waiting to be freed into.",
    ],
    anchor: "Leviticus 25:4 — But in the seventh year there shall be a Sabbath of solemn rest for the land, a Sabbath to the LORD.",
  },
  {
    number: "03",
    title: "Neighborhood Ecology",
    summary:
      "Creation care practiced at the scale of your block, your watershed, your local ecosystem — the shamar of the particular place where God has put you.",
    steps: [
      "Learn the name of the watershed you live in, the native species in your bioregion, and the history of the land under your feet — who lived here before, what it was before it was developed. Place-knowledge is the beginning of place-care.",
      "Find one local creation care initiative to join: a river cleanup, a community garden, a native plant restoration project, a food pantry that diverts food waste. Join it as a Christian with a theology of abad and shamar, not just as a volunteer.",
      "Plant something native. Native plants support the local insect and bird populations that developed alongside them; ornamental monocultures do not. Even a small native plant bed is an act of ecological hospitality.",
      "Befriend a farmer. The agricultural relationship between humans and the land is the oldest and most theologically loaded relationship in Scripture. Knowing where your food comes from and who tends it reconnects the urban Christian to the creation mandate.",
    ],
    anchor: "Psalm 24:1 — The earth is the LORD&rsquo;s, and the fullness thereof, the world and those who dwell therein.",
  },
  {
    number: "04",
    title: "Creation Contemplation",
    summary:
      "The practice of attentiveness to the natural world as a spiritual discipline — developing the eyes and ears that hear the creation&rsquo;s declaration of glory.",
    steps: [
      "Set aside time weekly to be in nature without an agenda: no podcast, no phone, no goal but presence. This is not tourism; it is the practice of paying attention that the Psalms model — noticing the specific, the small, the nonhuman.",
      "Read Psalm 104 in an outdoor setting and let the natural world around you annotate the text. The psalm lingers on springs, wild donkeys, storks, sea monsters — the specificity is deliberate. Notice what is specific and alive near you.",
      "Keep a creation journal: not a scientific log, but a record of beauty, strangeness, and gratitude. What did you see this week that declared the glory of God? What silenced the noise in you?",
      "Practice what John Muir called &ldquo;going out&rdquo; as a form of going in. The creation is a book of general revelation; reading it is a devotional act, not a distraction from prayer but a preparation for it.",
    ],
    anchor: "Psalm 19:1 — The heavens declare the glory of God, and the sky above proclaims his handiwork.",
  },
  {
    number: "05",
    title: "Congregation as Creation Community",
    summary:
      "Bringing creation care into the worship, education, and practice of your local church — making the oldest human vocation visible in the community of the new creation.",
    steps: [
      "Advocate for creation care in your congregation&rsquo;s adult education, small groups, or preaching calendar. Ask your pastor to preach on Genesis 2:15, Romans 8, or Leviticus 25. Many pastors have simply never been asked.",
      "Explore the A Rocha model of ecological witness: churches that maintain native habitats, gardens, or conservation easements on church property, turning land into demonstration sites of abad and shamar.",
      "Lead a study of The Care of Creation (R.J. Berry, ed.), Wendell Berry&rsquo;s essays, or Jonathan Merritt&rsquo;s Green Like God. The theological resources now exist; the need is people willing to introduce them.",
      "Connect your congregation to local environmental justice work. The communities nearest your church that suffer most from pollution, heat islands, and toxic exposure are the neighbors Luke 10 asks about.",
    ],
    anchor: "Romans 8:21 — The creation itself will be liberated from its bondage to decay and brought into the freedom and glory of the children of God.",
  },
  {
    number: "06",
    title: "Eating as Theology",
    summary:
      "Food choices as creation care — applying the theology of stewardship, sabbath economics, and justice to the most daily and physical of human activities.",
    steps: [
      "Reduce food waste aggressively. Roughly one-third of food produced globally is lost or wasted — a staggering squandering of the creation&rsquo;s provision. Meal planning, composting, and using leftovers are abad practiced at the table.",
      "Eat less meat and more plants, or source meat from farms practicing regenerative agriculture. Industrial animal agriculture is one of the largest contributors to greenhouse gas emissions, water use, and land degradation. This is not a demand for veganism; it is a call to stewardship.",
      "Buy local when possible — from farmers&rsquo; markets, CSAs, or local farms. Knowing your farmer is a theological act: it reconnects you to the land, the labor, and the gift of food.",
      "Practice table gratitude consciously. Saying grace over food is the oldest liturgy of creation acknowledgment: this came from the earth, the earth came from God, we receive it in trust. Let the prayer be specific and attentive, not rote.",
    ],
    anchor: "Leviticus 26:34 — Then the land shall enjoy its Sabbaths as long as it lies desolate, while you are in your enemies&rsquo; land.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Francis of Assisi",
    role: "Canticle of the Creatures — Italy, 1224",
    quote:
      "Praised be you, my Lord, through our Sister, Mother Earth, who sustains and governs us, and who produces varied fruits with colored flowers and herbs.",
    bio: "Francis of Assisi composed the Canticle of the Creatures in 1224, one of the earliest poems in the Italian vernacular and one of the most theologically serious celebrations of creation in Christian history. He addressed the sun, the moon, wind, water, fire, and the earth as brothers and sisters — not because he was a nature mystic who divinized creation, but because he saw all creatures as fellow recipients of God&rsquo;s fatherly generosity, dependent on the same Source. His vocation of radical poverty trained him to receive rather than exploit creation&rsquo;s gifts. Pope Francis took his name deliberately, citing Assisi&rsquo;s model of integral care for creation and the poor as the church&rsquo;s needed recovery. His path remains a corrective to both the gnostic suspicion of the physical and the consumer treatment of nature as raw material.",
  },
  {
    name: "Calvin DeWitt",
    role: "Evangelical Environmental Pioneer — Au Sable Institute",
    quote:
      "We must not destroy what God has created. The Bible does not give us permission to be destroyers; it gives us the call to be keepers. Abad and shamar are not optional extras for the Christian life.",
    bio: "Calvin DeWitt, a biologist at the University of Wisconsin and founder of the Au Sable Institute of Environmental Studies, has spent four decades working at the intersection of evangelical theology and conservation biology. His work — including Earth-Wise: A Biblical Response to Environmental Issues and Earthwise: A Guide to Hopeful Creation Care — recovered the creation mandate vocabulary (abad and shamar) for evangelical audiences who had largely ceded environmental concern to secular science. DeWitt has been a primary architect of the evangelical creation care movement, drafting early versions of the Evangelical Declaration on the Care of Creation (1994) and training generations of scientists, theologians, and pastors in the integration of faith and ecology. He insists that creation care is not a concession to environmentalism but a retrieval of the church&rsquo;s oldest vocation.",
  },
  {
    name: "Wendell Berry",
    role: "Port William Writer and Farmer — A Continuous Harmony",
    quote:
      "The ecological crisis is a crisis of character and of culture. We can have the world we have been choosing or we can have a different world. We cannot have both. And we can begin anywhere.",
    bio: "Wendell Berry — farmer, poet, and novelist — has written for sixty years from his farm in Port Royal, Kentucky, about the connections between the health of the land, the health of communities, and the health of the human soul. Though not writing as an explicitly Christian apologist, his theology of place, limit, and membership is deeply consonant with the biblical creation mandate. His essays in The Unsettling of America, What Are People For?, and The Art of the Commonplace argue that industrial agriculture, consumer culture, and the abstraction of land into investment property represent a failure of character — a rejection of the patient, attentive, affectionate labor that both farming and human flourishing require. For Berry, caring for a particular piece of land with full attention over many years is itself a moral and spiritual education. He is perhaps the finest prose writer alive on what abad actually looks like.",
  },
  {
    name: "N.T. Wright",
    role: "Surprised by Hope — The New Creation and Creation Care",
    quote:
      "The New Testament, without any question, envisages a new creation which is the renewal and transformation of the present one rather than its scrapping and replacement. This means that what you do in the present matters — because God intends to bring the present into the future.",
    bio: "N.T. Wright&rsquo;s Surprised by Hope (2008) reshaped evangelical eschatology for a generation by recovering the New Testament&rsquo;s picture of resurrection and new creation — not escape from matter but transformation of it, not heaven as disembodied spiritual state but the new Jerusalem coming down to a renewed earth. The environmental implication is explicit in Wright&rsquo;s treatment: if the future is a renewed and glorified version of this creation, then what we do with this creation now has eschatological weight. He has written and spoken directly on creation care as a consequence of resurrection faith, arguing that evangelical abandonment of the earth has been driven by a Platonic eschatology foreign to the New Testament. For Wright, tending the creation is not a distraction from the gospel; it is an enactment of the hope the gospel proclaims.",
  },
  {
    name: "Jonathan Merritt",
    role: "Green Like God — Unlocking the Divine Plan for Our Planet",
    quote:
      "God&rsquo;s concern for creation is not a liberal agenda. It is the oldest agenda in the Book. We did not get it from the Sierra Club; we got it from Genesis.",
    bio: "Jonathan Merritt, a Southern Baptist writer and journalist, published Green Like God in 2010 as an explicitly evangelical case for creation care, aimed at the demographic most resistant to the message. His argument is simultaneously theological (recovering abad and shamar, Romans 8, and the eschatology of new creation) and justice-oriented (emphasizing the disproportionate impact of environmental degradation on the global poor). Merritt helped organize the Evangelical Climate Initiative and the &ldquo;An Evangelical Declaration on the Care of Creation,&rdquo; gathering evangelical leaders across the theological and political spectrum around a shared commitment to the biblical creation mandate. His work exemplifies the generational shift among younger evangelicals who see no contradiction between biblical authority and creation care — because they have read the Bible.",
  },
  {
    name: "Pope Francis",
    role: "Laudato Si&rsquo; — On Care for Our Common Home, 2015",
    quote:
      "The earth herself, burdened and laid waste, is among the most abandoned and maltreated of our poor; she groans in travail. We have forgotten that we ourselves are dust of the earth; our very bodies are made up of her elements, we breathe her air and we receive life and refreshment from her waters.",
    bio: "Laudato Si&rsquo; (2015) is the most comprehensive theological treatment of environmental care ever issued by a major Christian body. Pope Francis drew on Scripture (Genesis, Psalms, Romans 8), the Franciscan tradition, Catholic social teaching, and contemporary science to make an integrated case that ecological destruction and social injustice are inseparable — that the cry of the earth and the cry of the poor are the same cry. The encyclical&rsquo;s concept of &ldquo;integral ecology&rdquo; insists that environmental, social, economic, cultural, and spiritual dimensions of human life cannot be separated; care for creation that ignores the poor is incomplete, and concern for the poor that ignores environmental degradation is incomplete. Laudato Si&rsquo; became a landmark across Christian traditions, prompting engagement from Protestant, Orthodox, and evangelical leaders who found in it a recovery of what their own traditions had lost.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Genesis 2:15",
    text: "The LORD God took the man and put him in the garden of Eden to work it and keep it.",
    reflection:
      "The first vocation given to humanity is not theological but horticultural — to work (abad) and keep (shamar) a garden. Before the Fall, before the giving of the law, before any religious institution, there is this: a creature made in the image of God and placed in a garden to tend it. The text implies that what we do with the physical world is not beneath theology; it is the first theology.",
  },
  {
    reference: "Romans 8:20-22",
    text: "For the creation was subjected to futility, not willingly, but because of him who subjected it, in hope that the creation itself will be set free from its bondage to corruption and obtain the freedom of the glory of the children of God. For we know that the whole creation has been groaning together in the pains of childbirth until now.",
    reflection:
      "Paul places the whole physical creation inside the story of redemption — not as a backdrop but as a participant. The groaning is not meaningless pain; it is the labor of a birth that is coming. The creation is groaning toward something, and that something is the freedom that arrives with the full redemption of the image-bearers who were charged to tend it. Our faithfulness and unfaithfulness as stewards is part of this story.",
  },
  {
    reference: "Psalm 24:1",
    text: "The earth is the LORD&rsquo;s, and the fullness thereof, the world and those who dwell therein.",
    reflection:
      "Every theology of creation care must pass through this verse. The earth is not ours. It does not belong to any nation, corporation, or generation. It is the LORD&rsquo;s. We are tenants, stewards, managers entrusted with someone else&rsquo;s property. Misusing what belongs to God is not an abstract offense; it is theft from the One who will call us to account for what we did with his earth.",
  },
  {
    reference: "Psalm 104:24-25",
    text: "O LORD, how manifold are your works! In wisdom have you made them all; the earth is full of your creatures. Here is the sea, great and wide, which teems with creatures innumerable, living things both small and great.",
    reflection:
      "Psalm 104 is perhaps the Bible&rsquo;s greatest celebration of biodiversity — each creature in its habitat, each habitat in its order, all of it teeming and manifold and wise. The psalmist&rsquo;s delight in the variety and abundance of life is an act of worship. Every species extinction is a silencing of a voice in this psalm&rsquo;s chorus; every degraded ecosystem is a verse that can no longer be sung.",
  },
  {
    reference: "Leviticus 25:23",
    text: "The land shall not be sold in perpetuity, for the land is mine. For you are strangers and sojourners with me.",
    reflection:
      "The sabbatical and jubilee legislation rests on this foundation: the land belongs to God, and Israel holds it on his terms, not its own. The sabbatical year is not merely a practical agricultural measure; it is a periodic reminder that the land has a Lord, and that Lord&rsquo;s schedule takes precedence over human productivity demands. We are strangers and sojourners — guests who must behave as guests behave.",
  },
  {
    reference: "Revelation 21:5",
    text: "And he who was seated on the throne said, &lsquo;Behold, I am making all things new.&rsquo;",
    reflection:
      "Not &ldquo;I am making all new things&rdquo; — discarding the old for a different substance — but &ldquo;I am making all things new,&rdquo; renewing and transforming what already exists. The promise of new creation is not the annihilation of this creation but its glorification. The same Word who spoke creation into being will speak it new. We tend what is being renewed, not what is being discarded.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "JYH7hl-IJXA", title: "The Bible and Creation Care — Genesis 1-2" },
  { videoId: "WB2IqLikLbY", title: "N.T. Wright on New Creation and Ecology" },
  { videoId: "0WDk-YYl3gE", title: "Romans 8 — The Groaning Creation" },
  { videoId: "hFg0I9IWfz8", title: "Laudato Si&rsquo; — Pope Francis on Care for Our Common Home" },
  { videoId: "5v8hJMnOF_s", title: "Evangelical Creation Care — Calvin DeWitt" },
  { videoId: "S-gPkph2aiU", title: "Wendell Berry on the Land and the Christian" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianEnvironmentPage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<ENVEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [creationAct, setCreationAct] = useState("");
  const [whyItMatters, setWhyItMatters] = useState("");
  const [communityStep, setCommunityStep] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as ENVEntry[]);
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
    if (!creationAct.trim() || !whyItMatters.trim()) return;
    const entry: ENVEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      creationAct: creationAct.trim(),
      whyItMatters: whyItMatters.trim(),
      communityStep: communityStep.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setCreationAct("");
    setWhyItMatters("");
    setCommunityStep("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GREEN : BORDER}`,
    background: active ? "rgba(58, 125, 86, 0.15)" : "transparent",
    color: active ? GREEN : MUTED,
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
    color: GREEN,
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
                color: GREEN,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Creation Care
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Tend and Keep: A Christian Theology of Environmental Care
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The first human vocation was not preaching — it was gardening. Genesis 2:15 gives us
              two verbs: <em style={{ color: TEXT }}>abad</em> (tend, cultivate, serve) and{" "}
              <em style={{ color: TEXT }}>shamar</em> (keep, guard, protect). Long before the law,
              before any institution, the image-bearer was placed in a garden and told to care for
              it. This guide traces that calling through Romans&rsquo; groaning creation, the
              sabbatical year, the incarnation, and the new creation — recovering a creation care
              theology as old as Genesis itself.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GREEN}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;The LORD God took the man and put him in the garden of Eden to work it and
                keep it.&rdquo;
              </p>
              <p style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 600 }}>Genesis 2:15</p>
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
                Before creation care is a practice it is a doctrine — something true about God and
                his world before it is anything required of us. These nine studies trace the
                theological roots from the garden of Eden to the new creation of Revelation,
                exploring why Christians are called to care for the earth and why that call has so
                often been ignored.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: GREEN,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {section.badge}
                  </div>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 14, lineHeight: 1.35 }}>
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: MUTED,
                        lineHeight: 1.78,
                        fontSize: "0.93rem",
                        marginBottom: i === section.paragraphs.length - 1 ? 0 : 14,
                      }}
                    >
                      {p}
                    </p>
                  ))}
                  {section.callout && (
                    <div
                      style={{
                        marginTop: 16,
                        background: "rgba(58, 125, 86, 0.07)",
                        border: `1px solid rgba(58, 125, 86, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: GREEN,
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section.callout.label}:
                      </span>{" "}
                      <span style={{ color: TEXT, fontSize: "0.88rem", lineHeight: 1.6 }}>
                        {section.callout.text}
                      </span>
                    </div>
                  )}
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Abad and shamar, the groaning of Romans 8, the sabbatical year, the incarnation,
                  the new creation — these are not separate topics but a single continuous theology.
                  God made the world, called humans to tend it, lamented its groaning, entered it in
                  person, and promised to renew it. At every point in that story, caring for the
                  physical creation is the appropriate response of faith. Explore the practice of
                  justice that grounds this theology in our{" "}
                  <Link href="/christian-justice" style={{ color: GREEN, textDecoration: "underline" }}>
                    Christian Justice guide
                  </Link>
                  , or consider the theology of the body and creation in{" "}
                  <Link href="/christian-fasting" style={{ color: GREEN, textDecoration: "underline" }}>
                    Christian Fasting
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
                The creation mandate is not a policy position — it is a vocation to be lived in
                particular places, on particular soil, with particular neighbors. These six practices
                move the theology of abad and shamar into daily and weekly life.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: GREEN,
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
                  <p style={{ color: TEXT, lineHeight: 1.7, fontSize: "0.93rem", marginBottom: 14 }}>
                    {practice.summary}
                  </p>
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
                      <li key={i} style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.9rem" }}>
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 14,
                      borderTop: `1px solid ${BORDER}`,
                      color: GREEN,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about scale
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The scale of the environmental crisis can produce paralysis — no individual act
                  seems adequate to the scale of the problem. But the creation mandate was always
                  given to individuals in particular places. Adam did not manage a global ecosystem;
                  he tended a garden. The sabbatical year was practiced by individual farmers on
                  individual plots. Faithfulness in creation care begins where you are, with what you
                  have, on the piece of earth you actually inhabit. Use the Journal tab to build a
                  record of small, rooted acts.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six witnesses — from a medieval Italian friar to a twenty-first century pope — who
                have recovered, articulated, and embodied the Christian theology of creation care.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: GREEN,
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
                      background: "rgba(58, 125, 86, 0.06)",
                      borderLeft: `3px solid ${GREEN}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.9rem" }}>{voice.bio}</p>
                </article>
              ))}
            </section>
          )}

          {/* ---------- Scripture ---------- */}
          {tab === "Scripture" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six passages to read slowly — from the garden vocation of Genesis to the renewal
                promise of Revelation. Each pairs the text with a short reflection for meditation
                and prayer.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: GREEN,
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
                  >
                    &ldquo;{scripture.text}&rdquo;
                  </blockquote>
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GREEN}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into three sentences of prayer: adoration (&ldquo;Father, the earth
                  is yours, and everything in it — you made it and you love it&rdquo;), confession
                  (&ldquo;I have consumed and discarded as though it were mine to waste; forgive me
                  for being an unfaithful steward&rdquo;), and petition (&ldquo;Teach me to tend and
                  keep in the specific place where you have put me today&rdquo;). Consider praying
                  these outdoors, with the text in one hand and the creation in the other.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The creation care log lives here. Three fields: a concrete act of environmental
                care, its theological grounding, and a community step taken. Entries are saved
                privately in your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  Log a creation care act
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="env-act" style={labelStyle}>
                    The act of creation care
                  </label>
                  <textarea
                    id="env-act"
                    value={creationAct}
                    onChange={(e) => setCreationAct(e.target.value)}
                    placeholder="Specific and concrete: planted native species, reduced food waste this week, walked instead of drove, joined a river cleanup"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="env-why" style={labelStyle}>
                    Why it theologically matters
                  </label>
                  <textarea
                    id="env-why"
                    value={whyItMatters}
                    onChange={(e) => setWhyItMatters(e.target.value)}
                    placeholder="Which part of the theology grounds this? Abad and shamar, the groaning of Romans 8, sabbath economics, incarnation, justice for the poor?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="env-community" style={labelStyle}>
                    Community step taken
                  </label>
                  <textarea
                    id="env-community"
                    value={communityStep}
                    onChange={(e) => setCommunityStep(e.target.value)}
                    placeholder="Who did you invite, or what communal initiative did you join? Creation care is not only private."
                    rows={2}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!creationAct.trim() || !whyItMatters.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !creationAct.trim() || !whyItMatters.trim() ? BORDER : GREEN,
                    color: !creationAct.trim() || !whyItMatters.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !creationAct.trim() || !whyItMatters.trim() ? "not-allowed" : "pointer",
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
                      Name one act of creation care, trace it to the theology that grounds it, and
                      name one person to bring along. The garden is tended one entry at a time.
                    </p>
                  </div>
                )}

                {loaded && entries.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {entries.map((entry) => (
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
                          <span style={{ color: MUTED, fontSize: "0.8rem" }}>{entry.date}</span>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label="Delete entry"
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

                        <div style={{ marginBottom: 10 }}>
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
                            The act
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.creationAct}
                          </p>
                        </div>

                        <div style={{ marginBottom: entry.communityStep ? 10 : 0 }}>
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
                            Why it matters
                          </span>
                          <p
                            style={{
                              color: MUTED,
                              lineHeight: 1.65,
                              fontSize: "0.9rem",
                              fontStyle: "italic",
                            }}
                          >
                            {entry.whyItMatters}
                          </p>
                        </div>

                        {entry.communityStep && (
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
                              Community step
                            </span>
                            <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.9rem" }}>
                              {entry.communityStep}
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
                Teaching and conversation on the theology of creation care — from the Genesis
                mandate to the new creation, from evangelical recovery to Catholic integral ecology.
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
                      <h3 style={{ fontSize: "0.92rem", fontWeight: 600, lineHeight: 1.45 }}>
                        {video.title}
                      </h3>
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
              The oldest vocation, still in effect
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Abad and shamar were given before the Fall, survive the Fall, and point toward the new
              creation. The groaning of Romans 8 is not a counsel of despair; it is the groaning of
              childbirth — pain that is heading somewhere. We tend the earth not because we can save
              it, but because it belongs to the One who will renew it, and our faithfulness in the
              meantime is part of the story of that renewal. Start somewhere specific. Plant
              something. Clean something. Protect something. The garden is still waiting for its
              keepers.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore how justice for the poor and care for creation intersect in our{" "}
              <Link href="/christian-justice" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Justice guide
              </Link>
              , discover the theology of enough in{" "}
              <Link href="/christian-generosity" style={{ color: GREEN, textDecoration: "underline" }}>
                Christian Generosity
              </Link>
              , or consider the Sabbath&rsquo;s full scope in{" "}
              <Link href="/sabbath" style={{ color: GREEN, textDecoration: "underline" }}>
                Sabbath
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
