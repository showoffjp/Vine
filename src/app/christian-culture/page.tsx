"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const TEAL = "#0D9488";

const STORAGE_KEY = "vine_christianculture_entries";

interface CLTEntry {
  id: string;
  date: string;
  culturalEngagement: string;
  faithPerspective: string;
  witness: string;
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
    badge: "H. Richard Niebuhr",
    title: "Five Models: How Has the Church Engaged Culture?",
    paragraphs: [
      "H. Richard Niebuhr&rsquo;s 1951 masterwork Christ and Culture remains the most useful taxonomy of the question, even for those who ultimately reject its framework. He identified five historic postures: Christ against culture (the church as counterculture, refusing the world&rsquo;s terms — Tertullian, the early monastics, the Anabaptists); Christ of culture (Christianity as the fulfillment of culture&rsquo;s highest aspirations — theological liberalism, culture Protestantism); Christ above culture (a synthetic view in which Christ completes what nature and culture begin — Aquinas, the Catholic synthesis); Christ and culture in paradox (the two remain in unresolved tension, both necessary, neither conquering — Luther, Kierkegaard); and Christ transforming culture (the Redeemer reshapes the order of society from within — Augustine in one reading, Calvin, Kuyper).",
      "No model is without problems. &ldquo;Christ against culture&rdquo; risks sectarianism and the abandonment of responsibility for the world. &ldquo;Christ of culture&rdquo; risks losing the distinctiveness of the gospel in cultural accommodation. &ldquo;Christ above culture&rdquo; can underwrite an uncritical synthesis with whatever is dominant. &ldquo;Christ in paradox&rdquo; can produce passivity about injustice. &ldquo;Christ transforming culture&rdquo; can collapse into cultural triumphalism or Christian nationalism. Niebuhr&rsquo;s map is not a verdict; it is a diagnostic. The first question about any Christian cultural stance is: which of these is it, and what does that mean for its blindspots?",
      "The most honest answer is probably that no single model captures the full biblical picture. The church is called to be a city on a hill (distinct) while being salt in the world (present and penetrating). It is called to transform culture while acknowledging that only Christ transforms anything ultimately. It is called to cultural engagement without cultural captivity — a posture that requires discernment rather than a single method.",
    ],
    callout: {
      label: "The diagnostic question",
      text: "Is your community&rsquo;s default stance toward culture primarily retreat, accommodation, synthesis, paradox, or transformation? What does that posture protect, and what does it miss?",
    },
  },
  {
    badge: "John 1 / Philippians 2",
    title: "The Incarnation as the Model for Cultural Engagement",
    paragraphs: [
      "The Word became flesh and dwelt among us. The Greek word for &ldquo;dwelt&rdquo; is eskenosen — he tabernacled, he pitched his tent. The eternal Son of God entered into a specific culture: a first-century Jewish village, a Galilean accent, an Aramaic idiom, a carpenter&rsquo;s calluses, the rhythms of sabbath and pilgrimage festival. He was not a generic human being; he was this human being, in this time and place, fully present to the particulars of a specific cultural world.",
      "Philippians 2 describes the movement: he emptied himself, taking the form of a servant. The theological term is kenosis — self-emptying. He did not empty himself of divinity; he emptied himself of the prerogatives of divinity, the insistence on being served, the maintenance of divine distance. He came down. This is the model for all Christian cultural engagement: a willingness to enter, to learn, to be present without insisting on one&rsquo;s own terms, while remaining fully who you are. The incarnation is not assimilation — Jesus did not become merely Jewish or merely Galilean. He remained the Son of God. But he did not avoid culture; he inhabited it.",
      "The phrase &ldquo;in the world, not of it&rdquo; does not appear verbatim in Scripture, but John 17 captures the tension Jesus names for his disciples: &ldquo;I do not ask that you take them out of the world, but that you keep them from the evil one... As you sent me into the world, so I have sent them into the world.&rdquo; Sent into. Not insulated from. The mission is incarnational by design, and every cultural engagement question reduces to: how do we go in without being absorbed?",
    ],
  },
  {
    badge: "James Davison Hunter",
    title: "&ldquo;Faithful Presence&rdquo; — Neither Withdrawal Nor Conquest",
    paragraphs: [
      "James Davison Hunter&rsquo;s To Change the World (2010) is the most rigorous recent critique of evangelical cultural strategies. Hunter argued that the Religious Right, the Christian Left, and neo-Anabaptist withdrawal all share the same mistake: they believe cultural change happens through the assertion of power — political, countercultural, or separatist. Hunter&rsquo;s sociology of culture demonstrates that this is wrong. Cultures change through elites in overlapping networks at the centers of cultural production, not through popular movements or electoral victories.",
      "His alternative is &ldquo;faithful presence&rdquo; — Christians living fully in the places and institutions where they find themselves, bringing the love of God to bear in those particular contexts, not as a strategy to change culture from the top down or the bottom up but as a form of witness and service that is its own end. A Christian surgeon practicing faithful presence in a hospital is not trying to Christianize medicine; she is caring for patients with the love of Christ and doing her work with excellence. A Christian artist practicing faithful presence is not making propaganda; he is making beautiful things because beauty reflects the beauty of God.",
      "Hunter does not foreclose the possibility that faithfulness changes culture — it often does. His point is that this is not the goal; it is the possible byproduct. The goal is faithfulness in the particular place and the particular moment. This relocates Christian cultural engagement from strategy to vocation: not &ldquo;how do we win?&rdquo; but &ldquo;what does faithfulness look like here?&rdquo;",
    ],
  },
  {
    badge: "Abraham Kuyper",
    title: "Common Grace — Why Non-Christians Make Beautiful Things",
    paragraphs: [
      "One of the most practically important doctrines for Christian cultural engagement is Abraham Kuyper&rsquo;s articulation of common grace — the grace by which God restrains the full effects of sin and enables all human beings, regardless of faith, to participate in truth, beauty, and goodness. Common grace is why a Buddhist can write a devastating novel about loneliness that is more true than a mediocre Christian novel about the same subject. It is why a secular architect can design a building that fills you with something that feels like worship. It is why an atheist scientist can make discoveries that serve the common good.",
      "The doctrine saves the Christian from two opposite errors. The first error is cultural withdrawal — the assumption that nothing outside the church is worth engaging because it is all corrupted by sin. Common grace is the theological reason why a Christian can read Homer, appreciate Monet, listen to Bach or Miles Davis or Kendrick Lamar, and find God&rsquo;s fingerprints in places no one intended them. The second error is uncritical cultural consumption — treating everything produced by culture as equally good because of common grace. Common grace does not eliminate the idol; it coexists with it. Discernment is still required.",
      "For Kuyper, the implication was that Christians should excel at cultural production rather than retreat from it. If every square inch belongs to Christ, then Christian scientists, artists, economists, and filmmakers should be the ones working most diligently in their fields, not because they are trying to make those fields Christian, but because the glory of God is honored by excellent work. The cultural mandate of Genesis 1 — cultivate and keep — was never revoked.",
    ],
    callout: {
      label: "Common grace",
      text: "The grace by which God enables all people — regardless of faith — to participate in truth, beauty, and goodness. Reason Christians can engage secular culture without assuming it is entirely dark.",
    },
  },
  {
    badge: "Makoto Fujimura",
    title: "The Christian Artist — Culture Care, Not Culture War",
    paragraphs: [
      "Makoto Fujimura — Japanese-American painter, author, and founder of the International Arts Movement — argues that the church&rsquo;s default stance toward culture has been reactive rather than generative. We respond to what the culture produces; we critique, protest, and counter-program. What we rarely do is create things that are so good, so beautiful, so true that the culture is changed by the encounter with them. Fujimura calls for &ldquo;culture care&rdquo; rather than &ldquo;culture war&rdquo;: the patient, costly work of creating beauty that nourishes a culture rather than fighting over its direction.",
      "His own work in Nihonga — a centuries-old Japanese painting technique using mineral pigments and gold — is itself a cultural argument. He makes things slowly, with ancient materials, at tremendous expense, and the results are irreducibly beautiful. The beauty is not incidental to the witness; it is the witness. A culture that has given up on the permanent, the patient, and the beautiful is being served by someone who has not.",
      "Fujimura draws on the incarnation: the eternal Son of God made something — he took on flesh — and that making was itself an act of love toward the world. Every Christian act of making participates in that original creativity. The novelist who writes truthfully about suffering, the composer who finds the sound of grief, the architect who designs a building that makes people feel small in a good way — these are acts of love toward a world that needs more beauty than it is producing on its own.",
    ],
  },
  {
    badge: "Social Media / Consumption",
    title: "Consuming Culture Discerningly — Social Media and the Christian",
    paragraphs: [
      "Social media is the most significant new cultural environment since the printing press, and the church has barely begun to think theologically about it. Its architectural features — the feed designed for outrage, the metrics of engagement that reward extremity, the infinite scroll that replaces rest with stimulation, the comparison engine that makes everyone else&rsquo;s highlight reel your reference point — are not spiritually neutral. They are forming people, and the formation is not primarily toward love, patience, peace, or self-control.",
      "Discerning cultural consumption begins with the question: what is this doing to me? Not just what am I watching or reading but what habits is this building, what emotions is this cultivating, what view of other people is this producing? Philippians 4:8 is a filter for all cultural consumption: whatever is true, honorable, just, pure, lovely, commendable, excellent, praiseworthy — think about these things. The filter is not prudishness; it is attentiveness to the direction of formation.",
      "On social media specifically, the Christian witness is primarily one of non-participation in the outrage economy. The algorithm profits from your anger; your neighbor does not. The discipline of not sharing the inflammatory article, not responding to the provocation, not building a brand out of contempt for the other side — these are forms of countercultural witness that cost something real and produce something real. The Christian who uses social media slowly, carefully, and with evident love for the people they disagree with is doing something genuinely unusual and genuinely Christian.",
    ],
  },
  {
    badge: "Genesis 1-2 / Romans 8",
    title: "Creation Care as Cultural Engagement",
    paragraphs: [
      "The cultural mandate in Genesis 1-2 — &ldquo;fill the earth and subdue it&rdquo;, &ldquo;cultivate and keep&rdquo; — is the original cultural commission. Human beings are placed in a garden to work it and watch over it. The word for &ldquo;keep&rdquo; (shamar) is the same word used for the priestly duty to guard the sanctuary: creation is holy ground, entrusted to human care. Dominion is not domination; it is the authority to tend, protect, and develop what God made.",
      "Romans 8 adds the eschatological dimension: the creation waits with eager longing for the revelation of the sons of God. The whole creation was subjected to futility, Paul writes, not willingly but in hope — because the creation itself will be set free from its bondage to corruption and obtain the freedom of the glory of the children of God. The Christian doctrine of resurrection and new creation implies that this world matters permanently. We are not waiting to be evacuated from a doomed planet; we are waiting for the renewal of a beloved one.",
      "Creation care, then, is not a concession to secular environmentalism; it is obedience to the original human vocation. The Christian engages it as an act of neighbor-love (the poor are always most vulnerable to environmental damage), as an act of worship (the heavens declare the glory of God — and that declaration is impaired when the heavens are choked with pollutants), and as an act of hope (we care for what God is going to renew). These are distinctively Christian reasons for creation care, and they are more durable than any secular movement&rsquo;s.",
    ],
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Cultural Inventory",
    summary:
      "A regular audit of what you are consuming — media, art, music, social platforms — and what each is doing to your soul, your relationships, and your imagination.",
    steps: [
      "Once a month, list the ten things you spent the most time with culturally: shows, podcasts, accounts, music, books, games. For each, ask three questions: Is this forming me toward love or away from it? Does this make me more patient with real people or less? What vision of the good life is this promoting?",
      "Apply the Philippians 4:8 filter to each item — not as a censor but as a diagnostic. Something does not need to be explicitly Christian to be true, honorable, just, pure, or lovely. And something can have Christian branding while failing every criterion.",
      "Identify one thing to add (something formative that you have been too busy for — a great novel, a piece of music, time in creation) and one thing to limit or cut (something that consistently leaves you more anxious, more contemptuous, or more restless than it found you).",
      "Record the findings in the Journal tab. Over six months, you will have a map of what your cultural diet is actually producing in your character.",
    ],
    anchor: "Philippians 4:8 — Whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely... think about these things.",
  },
  {
    number: "02",
    title: "Making Something",
    summary:
      "The recovery of the maker&rsquo;s vocation — engaging culture not only as a consumer but as a creator, in whatever medium is available to you.",
    steps: [
      "Choose a creative practice you have abandoned or never tried — writing, drawing, cooking as art, gardening, music, woodworking, photography, poetry. The medium matters less than the decision to make rather than only consume.",
      "Make something this week with no audience in mind. The goal is not quality or publication; it is participation in the image-bearing, world-making activity that Genesis 1 implies. God made; we are made in his image; making is an act of worship.",
      "As you work, practice attentiveness: notice what emerges that you did not plan, where beauty appears without being forced, what the process teaches you about patience and limits. These are theological data.",
      "Share what you make — if not publicly, then with one person. Cultural goods do not fully exist until they are received by another. Even a meal shared with a neighbor is an act of culture-making.",
    ],
    anchor: "Genesis 1:1 — In the beginning, God created. (And created beings, made in his image, create.)",
  },
  {
    number: "03",
    title: "Slow Reading",
    summary:
      "The discipline of reading long-form — books, not feeds — as a counterformation to the attention economy, and as an act of taking the world seriously.",
    steps: [
      "Set a goal of one serious book per month outside your normal genre — if you read theology, read a novel; if you read fiction, read history; if you read neither, start with one book that has been recommended by someone you trust and has survived more than a decade.",
      "Read slowly enough to stop when something strikes you. Underline. Ask: what is this book about at the level below the plot or the argument? What does it love? What is it afraid of? What does it assume about human beings?",
      "Bring the book into conversation with Scripture — not to evaluate whether it passes a doctrinal test, but to notice where they speak to the same human reality from different angles. Common grace means that the novelist and the prophet can be reading the same wound.",
      "Talk about what you read with at least one person. Books become culture when they circulate. The conversation is part of the practice.",
    ],
    anchor: "Proverbs 18:15 — An intelligent heart acquires knowledge, and the ear of the wise seeks knowledge.",
  },
  {
    number: "04",
    title: "The Social Media Sabbath",
    summary:
      "A deliberate, regular rest from the social media environment — to recover attention, interrupt compulsion, and notice what the absence reveals about where your identity was being formed.",
    steps: [
      "Choose one day per week for a complete social media fast. No feeds, no stories, no notifications, no posting. Put the phone in another room for the morning. Observe what happens to your attention, your anxiety, and your sense of how interesting your life is without an audience.",
      "During the fast, do something that cannot be photographed for an audience: pray without announcing it, serve without posting it, take a walk without documenting it. Practice invisibility as a spiritual discipline.",
      "After four weeks, evaluate: what did you miss, and why? What did you not miss? What did you think about the first time, without the noise? These observations are a spiritual map.",
      "Consider whether you need a longer fast — a week, a month. Many people who fast from social media for thirty days report that re-entering it looks very different from the outside than it did from the inside.",
    ],
    anchor: "Psalm 46:10 — Be still, and know that I am God.",
  },
  {
    number: "05",
    title: "Attending to Non-Christian Art",
    summary:
      "The practice of receiving beauty, truth, and goodness in secular art as evidence of common grace and as formation in the full range of human experience.",
    steps: [
      "Deliberately attend to a work of art by a non-Christian artist — a film, a novel, an album, a painting, a piece of architecture — chosen for its reputation for excellence rather than its compatibility with your worldview.",
      "Receive it as a gift before you evaluate it. Ask what it is trying to say, what it sees truly, what human reality it illuminates. The question &ldquo;what can I learn from this?&rdquo; comes before &ldquo;what is wrong with this?&rdquo;",
      "Then apply discernment: where does this work reach for something it calls transcendence or meaning or beauty? That reaching is common grace. Where does it make claims that contradict the gospel? That contradiction is worth naming — to yourself, and sometimes to others.",
      "Thank God for what is good in it. Kuyper&rsquo;s insight is that beauty in a secular artist is still God&rsquo;s beauty, refracted through a creature made in God&rsquo;s image. Gratitude for it is an act of worship.",
    ],
    anchor: "Acts 17:28 — As even some of your own poets have said, &ldquo;For we are indeed his offspring.&rdquo;",
  },
  {
    number: "06",
    title: "Creation Care as Practice",
    summary:
      "Integrating care for the natural world into ordinary life as an act of obedience to the cultural mandate and love toward the neighbor most vulnerable to environmental harm.",
    steps: [
      "Begin with attention: spend time in natural spaces — not to exercise or photograph but to observe. What do you notice when you are not moving through nature but receiving it? This attentiveness is the beginning of care.",
      "Identify one concrete change in your consumption or advocacy: food choices, energy use, single-use plastics, the way you vote on land-use questions. The change should be real and inconvenient enough to be a choice, not merely a convenient alignment with existing habit.",
      "Connect creation care to neighbor-love: find out how environmental conditions affect the most vulnerable people in your city — air quality in low-income neighborhoods, water access, heat islands, flood risk. Care for creation is always also care for people.",
      "Pray creation care prayers — Psalm 104, the canticle of the creatures, gratitude for specific things in the natural world you have noticed. Worship is the root that keeps care from becoming ideology.",
    ],
    anchor: "Genesis 2:15 — The LORD God took the man and put him in the garden of Eden to work it and keep it.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "H. Richard Niebuhr",
    role: "Christ and Culture — The Defining Taxonomy",
    quote:
      "The question of Christianity and civilization is by no means a new one; the problem has been present from the beginning of the church&rsquo;s history. It appears in many forms and has been answered in many ways.",
    bio: "H. Richard Niebuhr (brother of Reinhold) was a Yale theologian whose 1951 Christ and Culture remains, seventy years later, the unavoidable starting point for any serious discussion of Christian cultural engagement. His five models — against, of, above, in paradox with, and transforming culture — are not equally endorsed; Niebuhr clearly preferred the transformationist model. But his real contribution was the recognition that Christian communities have always had a stance toward culture, whether they acknowledged it or not, and that the stance matters enormously for both mission and faithfulness. Before you decide how to engage culture, Niebuhr forces you to ask what culture is, what Christ is, and what it would mean for one to transform the other.",
  },
  {
    name: "James Davison Hunter",
    role: "To Change the World — Faithful Presence vs. Culture War",
    quote:
      "The task for Christians is to engage with the world faithfully, not to &ldquo;change the world.&rdquo; Change, in this framework, is not something we accomplish; it is a byproduct of faithful presence.",
    bio: "James Davison Hunter is a University of Virginia sociologist who coined the term &ldquo;culture war&rdquo; in 1991 — and then spent twenty years watching evangelical Christianity lose the war it had helped start. To Change the World (2010) is his diagnosis: Christian cultural engagement has been dominated by strategies of political power that misunderstand how cultures actually change. His alternative, &ldquo;faithful presence,&rdquo; asks Christians to be fully present in the institutions and communities where they find themselves, bringing excellence, integrity, and love — not as a strategy to win culture back, but as faithful service to neighbors and communities. The book is deliberately discomforting: it asks the church to give up the goal of winning and accept the calling of faithfulness.",
  },
  {
    name: "Andy Crouch",
    role: "Culture Making — Christians as Creators, Not Critics",
    quote:
      "The only way to change culture is to create more of it. Critics and protesters rarely change culture; makers do.",
    bio: "Andy Crouch&rsquo;s Culture Making (2008) is the most practically oriented of the major evangelical cultural engagement books. Crouch argues that the church has spent too much time condemning culture, critiquing culture, consuming culture, and copying culture — and not enough time making it. His central claim is both sociological and theological: cultures change when someone creates an artifact — a book, a law, a song, a business, a community — that becomes generative for others. The Christian calling is to be makers, not merely critics. Drawing on the cultural mandate of Genesis and the vision of the New Jerusalem in Revelation, Crouch argues that culture-making is not a concession to the world but the fulfillment of the human vocation. The question is not whether to engage culture but whether to engage it creatively.",
  },
  {
    name: "Makoto Fujimura",
    role: "Silence and Beauty / Culture Care — The Artist&rsquo;s Witness",
    quote:
      "Art does not solve problems. But it can create the cultural space in which problems can be addressed with full humanity. Art that endures has always been about gratuitous beauty — beauty that does not justify itself by being useful.",
    bio: "Makoto Fujimura is one of the most important Christian voices on art and culture working today. A practitioner of Nihonga — traditional Japanese mineral pigment painting — and the founder of the International Arts Movement and the Brehm Center for Worship, Theology, and the Arts, Fujimura has spent thirty years arguing that the church needs artists who will make things that are genuinely beautiful rather than merely edifying. His own work — luminous, slow, irreducible to message — is an argument about the nature of witness. His books Silence and Beauty and Culture Care develop a theology of culture-making rooted in the extravagant love of God: because God gives beauty gratuitously (the peacock, the nebula, the symphony), the Christian artist is authorized and called to do the same.",
  },
  {
    name: "Francis Schaeffer",
    role: "Art and the Bible / How Should We Then Live? — Defending Aesthetic Seriousness",
    quote:
      "The Christian is the one whose imagination should fly beyond the stars. We are not bound by what is, but by the God who has revealed himself in what is.",
    bio: "Francis Schaeffer was a mid-twentieth-century American evangelical thinker who more than anyone else convinced a generation of evangelicals that the arts and ideas mattered theologically. From L&rsquo;Abri, his community in the Swiss Alps, he argued that the history of Western culture was a history of ideas that had consequences, and that the Christian could not afford to be either naive about those ideas or indifferent to the art and film and music that embodied them. Art and the Bible (1973) remains a foundational text for evangelical aesthetics: art does not need to be evangelistic to be good, and the quality of an artwork reflects the maker&rsquo;s theology whether the maker knows it or not. Schaeffer&rsquo;s legacy is the permission — the obligation — for Christians to take culture seriously.",
  },
  {
    name: "N.T. Wright",
    role: "Surprised by Hope — Resurrection and Cultural Renewal",
    quote:
      "What you do in the present — by painting, preaching, singing, sewing, praying, teaching, building hospitals, digging wells, campaigning for justice, writing poems, caring for the needy — will last into God&rsquo;s future.",
    bio: "N.T. Wright&rsquo;s Surprised by Hope (2008) provides the most important eschatological grounding for Christian cultural engagement. Against the view that we are simply waiting to be rescued from a doomed world, Wright argues that the New Testament describes not the replacement but the renewal of creation. The resurrection of Jesus is the first fruits of this renewal; the new creation will take up and transform, not discard, the present one. This has enormous consequences for cultural engagement: art, scholarship, justice work, and community building are not temporary distractions from the real gospel but anticipations of the renewal of all things. What we make in obedience and love is not wasted; it is, in some form, taken up into the new creation. This gives Christian culture-making an eschatological dignity it rarely claims.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "John 17:15-18",
    text: "I do not ask that you take them out of the world, but that you keep them from the evil one... As you sent me into the world, so I have sent them into the world.",
    reflection:
      "The prayer is for presence with protection, not rescue from risk. Jesus does not ask the Father to make his disciples safe from culture; he asks that they be kept from the evil one within culture. The sending is deliberate: as the Son was sent into the world, so the disciples are sent. Cultural engagement is not optional; it is the form the mission takes.",
  },
  {
    reference: "Philippians 4:8",
    text: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.",
    reflection:
      "Paul&rsquo;s filter for cultural consumption is defined by quality and virtue, not by source. He does not say &ldquo;whatever is produced by Christians&rdquo; or &ldquo;whatever avoids darkness.&rdquo; Truth is truth, beauty is beauty, excellence is excellence, wherever it appears. The verse authorizes broad cultural engagement and demands discernment about what that engagement does to the mind.",
  },
  {
    reference: "Genesis 1:28; 2:15",
    text: "And God blessed them. And God said to them, &ldquo;Be fruitful and multiply and fill the earth and subdue it&rdquo;... The LORD God took the man and put him in the garden of Eden to work it and keep it.",
    reflection:
      "The cultural mandate precedes the Fall. Human beings are made to cultivate, to develop, to create, to tend. This calling is not revoked by sin, redemption, or the coming new creation. It is, rather, redeemed. The Christian engagement with culture is not a concession but a fulfillment of original vocation.",
  },
  {
    reference: "Acts 17:22-23, 28",
    text: "Men of Athens, I perceive that in every way you are very religious... &ldquo;The unknown god&rdquo; whom you worship, I now proclaim to you... &lsquo;For we are indeed his offspring.&rsquo;",
    reflection:
      "Paul&rsquo;s Areopagus speech is the model of culturally engaged proclamation. He has walked through the city, observed it carefully, found the altar to the unknown god — a gap in their own system — and built his argument from their poets and their altar. He does not begin with denunciation; he begins with common ground. Common grace made that common ground possible. The gospel entered Athens through Athens&rsquo;s own questions.",
  },
  {
    reference: "Romans 8:19-21",
    text: "For the creation waits with eager longing for the revealing of the sons of God... in hope that the creation itself will be set free from its bondage to corruption and obtain the freedom of the glory of the children of God.",
    reflection:
      "The creation has a future — freedom and glory, not abandonment. This eschatology transforms how Christians relate to the natural and cultural world. If creation is redeemed, not discarded, then what we do with it now participates in its trajectory. Care for the world — natural, cultural, artistic, political — is eschatologically significant.",
  },
  {
    reference: "Revelation 21:24, 26",
    text: "By its light will the nations walk, and the kings of the earth will bring their glory into it... They will bring into it the glory and the honor of the nations.",
    reflection:
      "The new Jerusalem receives the &ldquo;glory and honor of the nations&rdquo; — the best of human cultural production, transformed and taken up into the eternal city. This is not sentimental; it is a theological claim that what human beings make in faithfulness is not lost. Andy Crouch and N.T. Wright both draw on this verse: cultural engagement matters because culture has a destination.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "TKxoRSfbXqM", title: "Christ and Culture — Niebuhr&rsquo;s Five Models" },
  { videoId: "9FbqQ_NMWIM", title: "Faithful Presence: James Davison Hunter" },
  { videoId: "Gf1JSCK4j9w", title: "Common Grace and Cultural Engagement — Kuyper" },
  { videoId: "z29H_MbOEOk", title: "Makoto Fujimura: Culture Care, Not Culture War" },
  { videoId: "1nEiqNMD-9Q", title: "Christians, Art, and the Cultural Mandate" },
  { videoId: "YYlqhF1XTQM", title: "In the World, Not of It — Faithful Presence" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianCulturePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<CLTEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [culturalEngagement, setCulturalEngagement] = useState("");
  const [faithPerspective, setFaithPerspective] = useState("");
  const [witness, setWitness] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as CLTEntry[]);
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
    if (!culturalEngagement.trim() || !faithPerspective.trim()) return;
    const entry: CLTEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      culturalEngagement: culturalEngagement.trim(),
      faithPerspective: faithPerspective.trim(),
      witness: witness.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setCulturalEngagement("");
    setFaithPerspective("");
    setWitness("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? TEAL : BORDER}`,
    background: active ? "rgba(13, 148, 136, 0.12)" : "transparent",
    color: active ? TEAL : MUTED,
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
    color: TEAL,
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
                color: TEAL,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Faith &amp; Culture
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              In the World, Not of It: Christians and Culture
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              The question of how Christians relate to culture is as old as the church. H. Richard
              Niebuhr mapped five answers; the incarnation models a sixth. This guide explores the
              theology of cultural engagement — from common grace to faithful presence to creation
              care — and the practices that make engagement formative rather than just busy.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${TEAL}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;I do not ask that you take them out of the world, but that you keep them
                from the evil one... As you sent me into the world, so I have sent them into the
                world.&rdquo;
              </p>
              <p style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 600 }}>John 17:15, 18</p>
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
                Seven theological studies on the Christ and culture question — from Niebuhr&rsquo;s
                five models to the incarnation as the model for cultural presence, common grace,
                faithful presence, the Christian artist, and creation care.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: TEAL,
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
                        background: "rgba(13, 148, 136, 0.07)",
                        border: `1px solid rgba(13, 148, 136, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: TEAL,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Incarnation, common grace, faithful presence, culture care, creation care —
                  these are not competing strategies but concentric circles. The God who became
                  culture (in Christ) also blesses culture (through common grace) and redeems it
                  (through resurrection and new creation). The Christian who has internalized this
                  can engage culture with genuine freedom: receiving its beauty without idolizing
                  it, critiquing its idols without contempt for its makers, and making new things
                  without needing them to save anyone. Explore how Christians engage politics in{" "}
                  <Link href="/christian-politics" style={{ color: TEAL, textDecoration: "underline" }}>
                    Christian Faith and Politics
                  </Link>
                  , or go deeper on the call to make things in{" "}
                  <Link href="/christian-vocation" style={{ color: TEAL, textDecoration: "underline" }}>
                    Christian Vocation
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
                Six practices for engaging culture faithfully — from the cultural inventory to
                slow reading, making something, the social media sabbath, attending to
                non-Christian art, and creation care. Start with the one your soul most needs.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: TEAL,
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
                      color: TEAL,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    {practice.anchor}
                  </div>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about the pace of formation
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Cultural formation is slow in both directions: the culture forms you over years
                  before you notice it, and your intentional counter-formation takes years to
                  produce visible change. Do not expect the social media sabbath to rewire your
                  attention in a week, or slow reading to produce a contemplative soul in a month.
                  These practices are investments in a person you will be five years from now.
                  The Journal tab is for tracking the slow work — what you engaged, what you saw,
                  how it became witness.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six thinkers on the Christ and culture question — from Niebuhr&rsquo;s defining
                taxonomy to Fujimura&rsquo;s artist&rsquo;s workshop to Wright&rsquo;s
                eschatological vision of culture redeemed.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>{voice.name}</h2>
                  <div
                    style={{
                      color: TEAL,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: 14,
                      letterSpacing: "0.03em",
                    }}
                    dangerouslySetInnerHTML={{ __html: voice.role }}
                  />
                  <blockquote
                    style={{
                      margin: "0 0 14px 0",
                      padding: "0.9rem 1.1rem",
                      background: "rgba(13, 148, 136, 0.06)",
                      borderLeft: `3px solid ${TEAL}`,
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
                Six passages to read slowly — on the sending into the world, the filter for
                cultural consumption, the cultural mandate, Paul&rsquo;s engagement with Athens,
                creation&rsquo;s future, and the glory of the nations brought into the New
                Jerusalem.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: TEAL,
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
                    dangerouslySetInnerHTML={{ __html: scripture.text }}
                  />
                  <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "0.9rem" }}>
                    {scripture.reflection}
                  </p>
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${TEAL}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  For each text: adoration — what does this verse say about God&rsquo;s
                  relationship to the world he made and the culture human beings build in it?
                  Confession — where have you retreated when you were called to be present, or
                  been absorbed when you were called to be distinct? Petition — ask for the
                  incarnational grace to be sent into your specific cultural context with
                  genuinely good news, genuine excellence, and genuine love.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Name a cultural phenomenon you engaged with, your faith perspective on it, and
                how it became — or could become — witness. Entries are saved privately in your
                browser. No one sees this but you and God.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New journal entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="clt-engagement" style={labelStyle}>
                    Cultural phenomenon you engaged with
                  </label>
                  <input
                    id="clt-engagement"
                    type="text"
                    value={culturalEngagement}
                    onChange={(e) => setCulturalEngagement(e.target.value)}
                    placeholder="e.g. a film, an album, a news cycle, a social media trend, a neighborhood change"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="clt-faith" style={labelStyle}>
                    Your faith perspective on it
                  </label>
                  <textarea
                    id="clt-faith"
                    value={faithPerspective}
                    onChange={(e) => setFaithPerspective(e.target.value)}
                    placeholder="What did the gospel illuminate about this? What common grace was present? What idol was operating?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="clt-witness" style={labelStyle}>
                    How it became or could become witness
                  </label>
                  <textarea
                    id="clt-witness"
                    value={witness}
                    onChange={(e) => setWitness(e.target.value)}
                    placeholder="A conversation it opened, a question it let you ask, a beauty it pointed toward, a creation it prompted"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!culturalEngagement.trim() || !faithPerspective.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background:
                      !culturalEngagement.trim() || !faithPerspective.trim() ? BORDER : TEAL,
                    color:
                      !culturalEngagement.trim() || !faithPerspective.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor:
                      !culturalEngagement.trim() || !faithPerspective.trim()
                        ? "not-allowed"
                        : "pointer",
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
                      Name one cultural thing you engaged, one thing you saw through the lens of
                      faith, one way it pointed toward witness. That is the practice made
                      concrete.
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
                          <div>
                            <h3
                              style={{
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: TEAL,
                                marginBottom: 2,
                              }}
                            >
                              {entry.culturalEngagement}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry for ${entry.culturalEngagement}`}
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

                        <div style={{ marginBottom: entry.witness ? 10 : 0 }}>
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
                            Faith perspective
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.faithPerspective}
                          </p>
                        </div>

                        {entry.witness && (
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
                              Witness
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.witness}
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
                Teaching on the Christ and culture question — Niebuhr&rsquo;s models, faithful
                presence, common grace, Fujimura on culture care, and the eschatological
                significance of cultural engagement.
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
              The glory of the nations
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              Revelation 21 says the kings of the earth will bring their glory and honor into the
              New Jerusalem. This is a breathtaking claim: the best of human culture — redeemed,
              transformed, perfected — has a place in God&rsquo;s eternal city. What you make in
              faithfulness, what you receive with gratitude, what you care for with love is not
              wasted. Be present. Make things. Receive beauty. Care for what God made. The glory
              of the nations is being assembled, one faithful act at a time.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Continue exploring: see how Christians engage politics in{" "}
              <Link href="/christian-politics" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Faith and Politics
              </Link>
              , pursue your particular calling in{" "}
              <Link href="/christian-vocation" style={{ color: TEAL, textDecoration: "underline" }}>
                Christian Vocation
              </Link>
              , or care for the natural world through{" "}
              <Link href="/creation-care" style={{ color: TEAL, textDecoration: "underline" }}>
                Creation Care
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
