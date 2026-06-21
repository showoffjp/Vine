"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GOLD = "#D97706";

const STORAGE_KEY = "vine_hospitalityguide_entries";

interface HSPEntry {
  id: string;
  date: string;
  whoIHosted: string;
  whatHappened: string;
  godMoment: string;
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
    badge: "Romans 12:13 / Hebrews 13:2",
    title: "Philoxenia &mdash; Love of Strangers",
    paragraphs: [
      "The Greek word translated &ldquo;hospitality&rdquo; in the New Testament is &ldquo;philoxenia&rdquo; &mdash; literally, &ldquo;love of the stranger&rdquo; (philos, love; xenos, stranger or foreigner). Paul commands it in Romans 12:13: &ldquo;Contribute to the needs of the saints and seek to show hospitality.&rdquo; The word &ldquo;seek&rdquo; is important: Paul is not describing a natural inclination to be affirmed but a practice to be pursued, a discipline of welcome that must be actively cultivated rather than passively exercised when convenient. The hospitable person is the one who goes looking for the opportunity to welcome, not the one who welcomes only when welcome is easy.",
      "Hebrews 13:2 adds a remarkable incentive: &ldquo;Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.&rdquo; The reference is to Abraham and the three visitors at the oaks of Mamre (Genesis 18), but the Hebrews author extends the principle beyond that narrative: the stranger who arrives at the door may be more than they appear. Not every stranger is a divine messenger &mdash; but the Christian who practices hospitality as a discipline rather than a preference is available for those occasions when the guest turns out to be the bearer of unexpected gift. The one who closes the door preemptively closes it not only on ordinary strangers but on whatever extraordinary grace may have been with them.",
      "Philoxenia stands in sharp contrast to xenophobia &mdash; fear of the stranger &mdash; which is its exact opposite and the default posture of cultures under pressure. The Christian community is called to be a philoxenic community: one whose default orientation is love toward the outsider, welcome for the unexpected guest, table open to those who do not yet belong. This is not naive; it does not ignore the need for wisdom and discernment. But it reverses the default: instead of &ldquo;closed until proven safe,&rdquo; the posture is &ldquo;open until wisdom requires otherwise.&rdquo;",
    ],
    callout: {
      label: "The word",
      text: "Philoxenia &mdash; love of the stranger &mdash; is the New Testament&rsquo;s word for hospitality, and it names the transformation required. It is not the love of the familiar, the comfortable, or the socially advantageous; it is the love that goes toward what is unfamiliar, uninvited, and potentially inconvenient. This is the hospitality to which the church is called.",
    },
  },
  {
    badge: "Luke 24:13-35",
    title: "The Emmaus Road &mdash; The Stranger Revealed in the Breaking of Bread",
    paragraphs: [
      "Luke 24:13-35 is one of the most theologically dense hospitality stories in Scripture. Two disciples are walking from Jerusalem to Emmaus, grief-stricken after the crucifixion, when a stranger joins them on the road. They do not recognize him. He opens the scriptures to them as they walk, explaining &ldquo;beginning with Moses and all the Prophets&rdquo; what the scriptures said about the Messiah who must suffer. When they arrive at Emmaus, the stranger appears to be going further &mdash; and the two disciples urge him: &ldquo;Stay with us, for it is toward evening and the day is now far spent&rdquo; (v. 29). They extend hospitality to a stranger. He accepts.",
      "And then: &ldquo;When he was at table with them, he took the bread and blessed and broke it and gave it to them. And their eyes were opened, and they recognized him. And he vanished from their sight&rdquo; (vv. 30-31). The stranger is the risen Christ. He is revealed not in the scriptural exposition that preceded the meal &mdash; however profound &mdash; but in the breaking of bread at a table to which he had been invited as a guest. The moment of recognition is the moment of table-fellowship: the ordinary act of sharing a meal becomes the sacramental point of encounter with the living Lord.",
      "The Emmaus story encodes something essential about Christian hospitality: the host may not know who the guest is. The disciples did not invite Jesus; they invited a stranger, who turned out to be Jesus. The Christ who comes in the guise of the unexpected guest &mdash; the one whose identity is disclosed at table &mdash; is the Christ of Matthew 25 (&ldquo;I was a stranger and you welcomed me&rdquo;), the Christ of Hebrews 13 (the entertained angel), the Christ who receives hospitality in the forms that the hospitable host did not anticipate and could not have arranged. To practice hospitality is to remain available for the revelation that ordinary welcome can bring.",
    ],
  },
  {
    badge: "Genesis 18",
    title: "Abraham and the Three Visitors &mdash; Entertaining Angels",
    paragraphs: [
      "Genesis 18 opens at the heat of the day, when Abraham is sitting at the door of his tent at the oaks of Mamre. Three men appear. Abraham&rsquo;s response is immediate, comprehensive, and generous: he runs to meet them, bows to the ground, and urges them to stay. He fetches water to wash their feet, promises them bread, and then &mdash; far exceeding the promise &mdash; runs to Sarah to prepare cakes from choice flour, runs to the herd and selects a tender calf and gives it to a servant to prepare in haste, and brings curds, milk, and the calf to set before them. He stands under a tree while they eat. The hospitality is urgent, abundant, personal, and costly.",
      "The three visitors turn out to be the Lord and two angels. The promise they bring &mdash; that Sarah, at ninety, will have a son within the year &mdash; is the fulfillment of the promise that had waited twenty-five years. Abraham&rsquo;s hospitality is not the condition of the promise; the promise was already coming. But the hospitality creates the context in which the promise is delivered. Abraham does not entertain divine visitors because he knows who they are; he entertains strangers because that is who he is. The revelation follows the welcome.",
      "The Hebrews author draws the explicit lesson: &ldquo;for thereby some have entertained angels unawares.&rdquo; The phrase &ldquo;unawares&rdquo; is crucial: Abraham did not recognize his guests as divine until the encounter was already underway. The hospitality that creates the space for the extraordinary is the hospitality that has already been given to the ordinary. The Christian who waits to be hospitable until they are sure the guest merits it will miss the occasions when the guest is more than they appear.",
    ],
    callout: {
      label: "The pattern",
      text: "Abraham runs, prepares the best, and stands in attendance while guests eat &mdash; and the guests turn out to be divine. The hospitality that creates the space for the extraordinary is always hospitality already given to the apparently ordinary. Welcome the stranger first; discover who they are later.",
    },
  },
  {
    badge: "Luke 5:27-32",
    title: "The Open Table of Jesus &mdash; Eating with Sinners",
    paragraphs: [
      "When Jesus calls Levi the tax collector, Levi &ldquo;left everything and rose and followed him&rdquo; (Luke 5:28) &mdash; and then immediately threw a great feast in his house for Jesus, inviting &ldquo;a large company of tax collectors and others reclining at table with them&rdquo; (v. 29). The Pharisees and scribes grumble: &ldquo;Why do you eat and drink with tax collectors and sinners?&rdquo; (v. 30). Jesus&rsquo; answer reframes the table entirely: &ldquo;Those who are well have no need of a physician, but those who are sick. I have not come to call the righteous but sinners to repentance&rdquo; (vv. 31-32).",
      "Jesus&rsquo; table practice was, by the standards of his culture, scandalous. Table fellowship in first-century Judaism implied solidarity, approval, and social alignment; to eat with someone was to say something significant about who you considered to be your people. The religious establishment had drawn tight lines around the table: the impure could not eat with the pure. Jesus drew different lines &mdash; or rather, he drew no lines at all on the side of exclusion. The table he kept was open to the people the religious establishment had written off, precisely because his mission was to the people who knew they needed him.",
      "The open table of Jesus is not a model of indiscriminate hospitality without moral content. Jesus does not pretend that Levi&rsquo;s tax-collecting ways are inconsequential; he calls him to follow, which means leaving the tax booth. But the hospitality precedes the call to change; the welcome precedes the invitation to repentance. The table is the place where the sick come to the physician, not where they present their medical history in advance to see if they are eligible. Christian hospitality that follows Jesus&rsquo; table practice welcomes the difficult guest and trusts the one who can actually bring the transformation.",
    ],
  },
  {
    badge: "Matthew 25:35",
    title: "&ldquo;I Was a Stranger and You Welcomed Me&rdquo; &mdash; Christ in the Guest",
    paragraphs: [
      "In Matthew 25:31-46, Jesus describes the final judgment in terms of six acts of mercy: feeding the hungry, giving drink to the thirsty, welcoming the stranger, clothing the naked, visiting the sick, and coming to the prisoner. The righteous are surprised: when did we see you hungry, thirsty, a stranger, naked, sick, or imprisoned? The answer is the most searching statement in all of Jesus&rsquo; teaching about the poor and the outsider: &ldquo;Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me&rdquo; (v. 40).",
      "The fifth item in the list &mdash; &ldquo;I was a stranger and you welcomed me&rdquo; &mdash; places hospitality among the works of mercy that will be called to account. The stranger who is welcomed is Christ, received in the disguise of need. This is not merely a metaphor or a sentimental identification; it is Jesus&rsquo; own claim about the way he is present in the world. He appears in the unexpected visitor, in the person whose presence creates inconvenience, in the guest who does not fit the category of &ldquo;our kind of people.&rdquo;",
      "The theological weight of Matthew 25 for hospitality is this: the guest who is welcomed is not merely a human being in need of a meal or a room. They are the occasion for an encounter with Christ himself. The Christian who practices hospitality as a discipline is not primarily doing a social good, though it is that. They are making themselves available for the encounter with Jesus that Jesus himself says happens in the welcome of the stranger. The host serves Christ by serving the guest; the welcome of the one is the welcome of the other.",
    ],
    callout: {
      label: "The claim",
      text: "&ldquo;I was a stranger and you welcomed me.&rdquo; The stranger at the door is not merely a person in need; they are the occasion for an encounter with Christ. The hospitality that welcomes the inconvenient guest welcomes Christ in the inconvenient guest. This is the theological foundation on which Christian hospitality rests.",
    },
  },
  {
    badge: "Acts 2:46",
    title: "Early Church Hospitality as Evangelism",
    paragraphs: [
      "Luke&rsquo;s description of the Jerusalem church in Acts 2:42-47 includes a daily practice of hospitality that was central to the community&rsquo;s identity and growth: &ldquo;And day by day, attending the temple together and breaking bread in their homes, they received their food with glad and generous hearts, praising God and having favor with all the people. And the Lord added to their number day by day those who were being saved&rdquo; (vv. 46-47). The daily breaking of bread in homes was not a supplement to the church&rsquo;s mission; it was part of its fabric.",
      "The early church&rsquo;s hospitality was notable enough to be remarked upon by pagan observers. Tertullian, writing in the late second century, reported that Romans said of Christians: &ldquo;See how they love one another.&rdquo; Julian the Apostate, the fourth-century emperor who tried to revive paganism, complained that Christian charitable care for their own poor and for pagan poor alike was undermining his efforts: &ldquo;the impious Galileans support not only their poor but ours as well.&rdquo; The early church&rsquo;s open table and generous provision for the needy were sufficiently distinctive to be noticed, envied, and identified as a primary cause of Christian growth.",
      "The connection between hospitality and evangelism in the early church was not primarily strategic but organic: a community that practices genuine welcome, generous provision, and care for the needy creates the conditions in which the gospel can be heard. People come to the table hungry &mdash; not only for bread but for the belonging that the table embodies. The community where that belonging is real is the community whose message is credible. The gospel proclaimed by a church of closed tables and maintained distances is the gospel contradicted by its own context.",
    ],
  },
  {
    badge: "The Lost Art",
    title: "Recovering the Lost Art of the Christian Home",
    paragraphs: [
      "Something has been lost in contemporary Western Christianity that earlier generations of Christians would have found strange and alarming: the Christian home as a place of regular, intentional welcome. The home as the primary site of hospitality &mdash; of guests received at table, of the traveler given a room, of the lonely or struggling given an evening in community &mdash; has given way to the managed entertainment of the occasional dinner party and the outsourcing of care to professional services and church programs. Christians live in larger homes than ever before and use them less for others than at any previous point in the tradition.",
      "The causes are multiple: the privatization of home as a sanctuary from the outside world rather than a porous threshold between inside and outside; the professionalization of hospitality, which has made people ashamed to offer the simple meal and the plain room; the busyness that leaves no margin for the unplanned guest; the anxiety about performance that turns hosting into entertaining and entertaining into an exercise in presentation rather than service. Karen Mains&rsquo; distinction is decisive: hospitality serves others, and entertaining impresses them. Most of what passes for &ldquo;entertaining&rdquo; in contemporary culture is the latter. The former has largely been lost.",
      "Recovering the lost art of the Christian home requires not a program but a reorientation: to see the home as a place held in stewardship for God&rsquo;s purposes, available for whatever guest God brings, prepared to offer not the perfect meal but the present welcome, not the impressive setting but the genuine attention. Christine Pohl, whose work on hospitality is the most theologically thorough in recent evangelical writing, argues that recovering this art requires recovering the theological vision that underlies it: hospitality as a practice of recognizing the image of God in the stranger and making space for Christ in the guest.",
    ],
  },
  {
    badge: "The Crucial Distinction",
    title: "Hospitality vs. Entertaining &mdash; Serving Others vs. Impressing Them",
    paragraphs: [
      "The most practically useful distinction in contemporary writing about Christian hospitality was made by Karen Mains in &ldquo;Open Heart, Open Home&rdquo; (1976): &ldquo;Entertaining says, &lsquo;I want to impress you with my home, my cleverness, my cooking.&rsquo; Hospitality says, &lsquo;This home is not mine. It is Christ&rsquo;s, and he wants me to share it with you.&rsquo; Entertaining always puts things before people. Hospitality puts people first.&rdquo; The distinction cuts at the root of the anxiety that prevents most people from practicing hospitality: the anxiety about the condition of the house, the quality of the food, and the impression made on the guest.",
      "Entertaining is fundamentally self-oriented: the host&rsquo;s primary concern is what the guest thinks of them. This is why entertaining requires preparation, performance, and a home that meets a certain standard before guests can be invited. The person who entertains cannot have people over when the house is messy, when the meal would be simple, or when they have no impressive thing to offer. The bar is the host&rsquo;s self-presentation, and when the bar cannot be met, the door stays closed.",
      "Hospitality is fundamentally other-oriented: the host&rsquo;s primary concern is the guest&rsquo;s wellbeing, comfort, and belonging. This means hospitality can happen in a messy house with a simple meal, because neither of those things is the point. What the guest most needs is not an impressive house or an expertly prepared dinner; they need to be seen, welcomed, and included in a community of belonging. The Christian home that offers this &mdash; that makes the guest feel that they have been genuinely received, that their presence was desired, that they belong here &mdash; is practicing hospitality in the full New Testament sense, regardless of whether the decor is impressive or the food is elaborate.",
    ],
    callout: {
      label: "The distinction",
      text: "Entertaining asks: what will the guest think of me? Hospitality asks: what does the guest need from me? Entertaining puts things before people; hospitality puts people first. The anxiety that prevents most Christians from opening their homes is the anxiety of entertaining. Release it, and the door opens.",
    },
  },
];

const practiceCards: PracticeCard[] = [
  {
    number: "01",
    title: "The Open Table Practice",
    summary:
      "The regular practice of inviting people to your table is the simplest and most foundational hospitality discipline. This practice establishes the rhythm of welcome that makes Christian hospitality a way of life rather than an occasional event.",
    steps: [
      "Commit to having someone to your table at least once a week &mdash; not for an impressive dinner party but for a meal. It can be a family in your church, a neighbor you barely know, a colleague, someone who is alone. The meal can be simple; the welcome is what matters. The question to ask is not &ldquo;is my house ready?&rdquo; but &ldquo;who needs a table this week?&rdquo;",
      "Deliberately include one person in every table gathering who is outside your normal social circle: a newcomer to the church who doesn&rsquo;t yet know anyone, a neighbor of a different background, a person going through a difficult season who may feel awkward about asking for connection. The Levi principle: the person most likely to need the table is often the person least likely to be on the default guest list.",
      "Practice the simple meal. The anxiety about hospitality is almost always about food and setting; reduce both to the minimum and see what remains. Bread, soup, and a salad can be a genuinely hospitable meal if the welcome is genuine. The elaborate meal prepared in anxiety and presented in pride is a less hospitable meal than the simple one prepared in freedom and shared in joy.",
      "After the meal, use the Journal tab to record who was there, what happened, and any &ldquo;God moment&rdquo; &mdash; any place where the presence of Christ seemed to show up in the conversation, in the connection, in an unexpected word or moment. Over time these records become a testimony to what the open table produces.",
    ],
    anchor: "Luke 14:13 &mdash; But when you give a feast, invite the poor, the crippled, the lame, the blind.",
  },
  {
    number: "02",
    title: "Releasing the Entertaining Anxiety",
    summary:
      "The primary obstacle to hospitality for most Christians is not lack of willingness but the anxiety that their home, their cooking, or their social performance is not adequate to the standard required for guests. This practice addresses the anxiety directly.",
    steps: [
      "Identify your specific hospitality anxiety: Is it the condition of your house? The quality of your cooking? The awkwardness of conversation? The fear of not having enough? Name the specific fear, because unnamed fears are more powerful than named ones. The fear that prevents hospitality is almost always a form of the entertaining anxiety &mdash; concern about your own performance &mdash; rather than a genuine concern about the guest.",
      "Invite someone over when your house is not fully clean, and prepare a simple meal you are confident in rather than an ambitious meal you are anxious about. Do this intentionally as a practice of releasing the entertaining anxiety. Notice what happens: the guest who comes for genuine welcome does not care about the dust on the shelf; they care about whether they were actually wanted.",
      "Pray before guests arrive, not primarily for the logistics of the meal but for the spirit of welcome: &ldquo;Lord, may the people coming through this door tonight feel genuinely received. May they leave having experienced something of your welcome. May I be so focused on them that I forget to be focused on myself.&rdquo; The prayer reorients the host from self-presentation to other-service.",
      "Recruit help from family members or housemates in the actual hosting &mdash; not in preparing the impressive meal but in making the guest feel genuinely welcomed: greeting at the door, asking real questions, noticing when someone is on the edge of the conversation and drawing them in. Hospitality is a communal practice, not a solo performance.",
    ],
    anchor: "Romans 12:13 &mdash; Seek to show hospitality.",
  },
  {
    number: "03",
    title: "Hospitality to the Stranger &mdash; Welcome Beyond Your Comfort Zone",
    summary:
      "The philoxenia that the New Testament commands is specifically love of the &ldquo;xenos&rdquo; &mdash; the stranger, the outsider, the one who does not belong to your existing community. This practice pushes the welcome beyond what is comfortable and familiar.",
    steps: [
      "Identify one person or category of people whom you have not welcomed and whom you find it difficult to welcome: the person from a very different background, the person with a history that makes you uncomfortable, the person whose neediness or difficulty makes you feel inadequate as a host. Name the barrier honestly.",
      "Invite one such person to your table. Not to a church program or a ministry event &mdash; to your home, to your table, to the personal space where genuine welcome happens. The difference between institutional hospitality (the church&rsquo;s welcome ministry) and personal hospitality (your table in your home) is significant; the latter communicates a depth of acceptance that the former cannot fully replicate.",
      "Prepare to be changed by the guest. The stranger who is welcomed brings a perspective, a story, and a life that will be different from yours &mdash; and that difference is part of the gift. Rosaria Butterfield, whose story of conversion came through the hospitality of a Presbyterian pastor and his wife, writes that genuine hospitality requires being willing to have your comfort and your categories disturbed by the guest you welcome. The host is not always the one who gives; sometimes they are the one who receives.",
      "Follow up the initial welcome. Hospitality that happens once is a gesture; hospitality that is repeated becomes a relationship. The Emmaus disciples urged the stranger to stay; the relationship that began on the road deepened at the table. The follow-up invitation &mdash; &ldquo;come back next week&rdquo; &mdash; is where the initial hospitality becomes something with the power to genuinely change a life.",
    ],
    anchor: "Hebrews 13:2 &mdash; Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.",
  },
  {
    number: "04",
    title: "The Listening Table &mdash; Hospitality as Genuine Attention",
    summary:
      "The most important thing the hospitable host offers is not food or space but attention &mdash; genuine, unhurried, present attention to the person in front of them. This practice cultivates the quality of attention that makes hospitality more than a social convention.",
    steps: [
      "When a guest is in your home, practice the discipline of full presence: phone face-down or in another room, no email-checking, no distracted hosting. The guest who has been fully attended to &mdash; who feels that you actually wanted them there, that their story was genuinely heard, that they were not competing with your agenda for your attention &mdash; has been genuinely welcomed. This is rarer than it should be and more powerful than we recognize.",
      "Ask the real questions. Surface conversation at a table is easier and less hospitable than the questions that go deeper: &ldquo;What&rsquo;s been the hardest thing about this season?&rdquo; &ldquo;What are you most hopeful about right now?&rdquo; &ldquo;What do you wish more people understood about your situation?&rdquo; These questions communicate that the guest is worth knowing, not merely worth feeding.",
      "Practice what Henri Nouwen called &ldquo;creating a free and friendly space&rdquo; &mdash; the conversational space in which the guest can say what is actually true for them, without feeling that they need to perform or present themselves favorably. The hospitable table is the table where it is safe to be honest, because the host is not judging but receiving.",
      "After guests leave, resist the urge to evaluate the evening by the standard of entertainment (&ldquo;Did the food go well? Did the conversation flow?&rdquo;) and evaluate it instead by the standard of hospitality (&ldquo;Did the people who came feel genuinely welcomed? Did anyone seem to leave with less loneliness than they arrived with? Was Christ present in any of the moments of genuine connection?&rdquo;).",
    ],
    anchor: "Luke 24:29 &mdash; But they urged him strongly, saying, &ldquo;Stay with us.&rdquo;",
  },
  {
    number: "05",
    title: "The Hospitality of Margin &mdash; Keeping Space for the Unexpected Guest",
    summary:
      "Much of contemporary Christian inhospitality is not deliberate refusal but structural impossibility: lives so full that there is no margin for the unplanned welcome. This practice addresses the structural conditions that make hospitality possible.",
    steps: [
      "Audit your weekly schedule for margin: Is there a time when you could have an unexpected guest without the entire day collapsing? Is there food in the house that could be extended to one more person if someone showed up? Is there a room or a couch available for someone who needs a night? Margin for hospitality must be built, not hoped for; it is not there by default in a busy life.",
      "Build one &ldquo;open&rdquo; evening per week into your schedule &mdash; an evening without a commitment that could become a meal with an unexpected guest, a neighbor who needs conversation, a friend going through a difficult time. The open evening is not a vacancy to be filled but a space held in readiness for whatever welcome the week brings.",
      "Keep a simple hospitality pantry: the ingredients for a quick, good meal that can be put together on short notice. The host who can always put bread, soup, and something substantial on the table without advance preparation is the host who can welcome the unexpected guest. The elaborate hospitality that requires three days of preparation can only happen for the planned guest; the simple hospitality that requires thirty minutes can happen for anyone.",
      "Practice saying yes before you think about whether you are ready. The reflex of &ldquo;let me check my schedule&rdquo; applied to every hospitality opportunity is the reflex of the person who is managing their comfort rather than serving the guest. Not every opportunity can be accepted; but the pattern of the yes and the no reveals the actual priority.",
    ],
    anchor: "Matthew 25:35 &mdash; I was a stranger and you welcomed me.",
  },
  {
    number: "06",
    title: "Community Hospitality &mdash; The Church as Hospitable Body",
    summary:
      "Personal hospitality and community hospitality are both necessary; neither replaces the other. This practice builds the hospitable culture of a small group, a ministry team, or a local congregation.",
    steps: [
      "Advocate within your church community for specific practices of welcome: a culture in which newcomers are intentionally seated with existing members rather than left to find their own way, in which the Sunday gathering ends not with people dispersing to their cars but with people lingering, talking, inviting. The hospitable church is not the church with the best welcome program; it is the church whose members have been formed to notice the person standing alone and to go toward them.",
      "Organize your small group, life group, or ministry team around regular shared meals rather than meetings with refreshments. The table changes the dynamic of community: people who eat together speak differently than people who meet together. The shared meal is the ancient and irreplaceable context for the kind of community that genuine hospitality builds.",
      "Identify the people in your congregation who are structurally excluded from hospitality networks: the single person who is never included in family gatherings, the elderly person who no longer has the energy to host but longs to be hosted, the new family that has not yet found their place. Build deliberate systems to include them, not as charity cases but as guests whose presence at the table enriches the community.",
      "Pray together as a community for the grace of welcome &mdash; for the church to be known in the neighborhood as a community of genuine openness, where people outside the faith feel safe coming before they believe, where the searching are received before they arrive, where the table is set before the guest shows up. The hospitable church does not wait for people to come and then welcome them; it practices the posture of welcome so consistently that people can feel it before they enter.",
    ],
    anchor: "Acts 2:46 &mdash; And day by day, attending the temple together and breaking bread in their homes, they received their food with glad and generous hearts.",
  },
];

const voiceCards: VoiceCard[] = [
  {
    name: "Christine Pohl",
    role: "Making Room &mdash; Recovering Hospitality as a Christian Tradition",
    quote:
      "Hospitality is about more than being nice to people who come to our homes. When practiced as a Christian discipline, it involves recognizing the stranger as a person made in the image of God, and making space for them in our lives and communities.",
    bio: "Christine Pohl is a professor of social ethics at Asbury Theological Seminary and the author of &ldquo;Making Room: Recovering Hospitality as a Christian Tradition&rdquo; (1999), which is widely regarded as the most theologically thorough account of Christian hospitality in contemporary evangelical scholarship. Pohl researched the book by spending extended time with communities that practice hospitality seriously &mdash; Catholic Worker houses, L&rsquo;Arche communities, various intentional Christian communities &mdash; and her account combines historical theology with ethnographic observation. Her central argument is that hospitality was central to the early church&rsquo;s identity and mission and has been gradually marginalized from contemporary Christianity, replaced by either the professionalized hospitality industry or the entertainment of the dinner party. Recovering it requires recovering the theological vision that underlies it: the image of God in the stranger, the presence of Christ in the guest, the community-forming power of the table. Pohl is particularly attentive to the challenges and dangers of hospitality &mdash; the vulnerability it requires, the boundaries it needs, the ways it can be co-opted by the need to maintain power &mdash; and her realism makes her account more practically useful than idealized treatments of the subject.",
  },
  {
    name: "Rosaria Butterfield",
    role: "The Gospel Comes with a House Key &mdash; Radical Hospitality as Evangelism",
    quote:
      "Hospitality is not a gift that some people have and others don&rsquo;t. It is a Christian practice that requires obedience, sacrifice, and the willingness to have your life disturbed by the stranger who comes through your door.",
    bio: "Rosaria Butterfield (b. 1962) was a tenured professor of English and queer theory at Syracuse University and a self-described &ldquo;leftist lesbian&rdquo; when she was invited to dinner at the home of Ken and Floy Smith, a Presbyterian pastor and his wife. The Smiths practiced what Butterfield later called &ldquo;radically ordinary hospitality&rdquo; &mdash; having people to their table regularly, including people very different from themselves, for years. Over three years of meals and conversations at their table, Butterfield came to faith in Christ. She documented this story in &ldquo;The Secret Thoughts of an Unlikely Convert&rdquo; (2012) and later developed the theology of hospitality at its center in &ldquo;The Gospel Comes with a House Key&rdquo; (2018). Butterfield&rsquo;s account of hospitality is demanding: it requires the home to be genuinely open, not selectively open; it requires the host to be available to people whose lives are messy, complicated, and challenging; it requires the patience to share many meals before anything transformative happens. Her argument is that this kind of ordinary, sustained, costly welcome is one of the primary means by which the gospel advances &mdash; and that the church&rsquo;s failure to practice it is a significant factor in its cultural marginalization.",
  },
  {
    name: "Henri Nouwen",
    role: "Reaching Out &mdash; Creating Free and Friendly Space for the Stranger",
    quote:
      "Hospitality means primarily the creation of free space where the stranger can enter and become a friend instead of an enemy. Hospitality is not to change people, but to offer them space where change can take place.",
    bio: "Henri Nouwen (1932-1996) was a Dutch Catholic priest, psychologist, and spiritual director whose work on hospitality in &ldquo;Reaching Out&rdquo; (1975) offered a contemplative account of welcome that complemented his broader theology of the spiritual life. For Nouwen, hospitality is not primarily about the logistics of welcome but about the interior disposition of the host: the capacity to create &ldquo;free and friendly space&rdquo; in which the guest can be themselves without pressure, performance, or the fear of judgment. This kind of space cannot be manufactured by good intentions; it requires the host to have first found the space within themselves &mdash; the inner spaciousness that comes from being at home in God and therefore not needing the guest to confirm or threaten their identity. Nouwen&rsquo;s own life illustrated both the gift and the difficulty of this: he was extraordinarily hospitable in some dimensions and struggled throughout his life with loneliness, anxiety, and the need for affirmation that complicated his capacity to give the unconditional welcome he described. His honesty about this difficulty makes his work on hospitality more useful than a more idealized account would be &mdash; he writes from inside the struggle, not above it.",
  },
  {
    name: "Alexander Strauch",
    role: "The Hospitality Commands &mdash; Hospitality as Elder Qualification",
    quote:
      "The elder who is not hospitable is the elder who has lost touch with the mission of Christ. Hospitality is not an optional quality for church leaders; it is the quality that distinguishes a shepherd from a manager, a servant from an administrator.",
    bio: "Alexander Strauch is a Bible teacher and author whose work on church leadership and eldership has shaped a generation of evangelical church planters and pastors. His treatment of the hospitality commands &mdash; including the requirement that elders and overseers be &ldquo;hospitable&rdquo; (1 Tim 3:2, Tit 1:8) &mdash; places hospitality at the center of Christian leadership qualification rather than at its periphery. Strauch argues that the New Testament&rsquo;s requirement of hospitality for church leaders reflects the early church&rsquo;s understanding of the home as a primary site of mission, discipleship, and community formation. The leader whose home is not open to the church&rsquo;s mission is the leader who has privatized their most important resource. His practical guidance on hospitality &mdash; beginning small, building habits, viewing the home as a ministry tool rather than a personal sanctuary &mdash; has helped many Christians who found the New Testament&rsquo;s hospitality commands more demanding than they had previously recognized.",
  },
  {
    name: "Karen Mains",
    role: "Open Heart, Open Home &mdash; The Hospitality vs. Entertaining Distinction",
    quote:
      "Entertaining says, &lsquo;I want to impress you with my home, my cleverness, my cooking.&rsquo; Hospitality says, &lsquo;This home is not mine. It is Christ&rsquo;s, and he wants me to share it with you.&rsquo; Entertaining always puts things before people. Hospitality puts people first.",
    bio: "Karen Mains is an author and speaker whose &ldquo;Open Heart, Open Home&rdquo; (1976) became one of the most influential evangelical books on hospitality of the twentieth century. The book&rsquo;s central contribution &mdash; the distinction between hospitality (which serves others) and entertaining (which impresses others) &mdash; cut through the primary anxiety that prevents Christians from opening their homes: the anxiety about whether the house is impressive enough, the food is elaborate enough, and the social performance is polished enough. Mains argued that this anxiety is not a failure of hospitality but a symptom of the wrong orientation: it is the orientation of entertainment, which puts the host&rsquo;s self-presentation at the center, rather than the orientation of hospitality, which puts the guest&rsquo;s need at the center. Her practical counsel &mdash; set aside the need to impress, lower the bar for the meal, focus on the person rather than the presentation &mdash; freed a generation of Christians to open their homes who had been prevented by the impossible standard of entertainment. Her work remains the most practically useful single-volume treatment of the subject for ordinary Christian households.",
  },
  {
    name: "Edith Schaeffer",
    role: "The Hidden Art of Homemaking &mdash; The Christian Home as Sanctuary and Mission",
    quote:
      "The home should be a place of creativity, love, and beauty &mdash; a place where the image of the Creator God is reflected in the way the family lives together and the way they receive those who come in from the outside. The home is one of the most powerful apologetics the Christian has.",
    bio: "Edith Schaeffer (1914-2013) co-founded L&rsquo;Abri Fellowship in Switzerland with her husband Francis Schaeffer in 1955, and for the next decades their home in the Swiss Alps was a place of legendary hospitality for students, intellectuals, artists, and seekers from around the world. Many thousands of people passed through L&rsquo;Abri, most coming with serious intellectual and spiritual questions, and many coming to faith. Edith&rsquo;s contribution to this was concrete and irreplaceable: she created a home that was genuinely beautiful, genuinely welcoming, and genuinely attentive to the person in front of her. Her books &ldquo;L&rsquo;Abri&rdquo; and &ldquo;The Hidden Art of Homemaking&rdquo; describe the theology and practice behind this: the Christian home as a place where the creativity, love, and beauty of God are made visible and tangible; where the guest encounters not merely human welcome but the reality that points beyond it. Schaeffer&rsquo;s vision of the home as apologetic &mdash; as a place whose existence is a kind of argument for the truth of the Christian account of reality &mdash; has influenced generations of Christians in their understanding of the relationship between homemaking, hospitality, and mission.",
  },
];

const scriptureCards: ScriptureCard[] = [
  {
    reference: "Romans 12:13",
    text: "Contribute to the needs of the saints and seek to show hospitality.",
    reflection:
      "Paul&rsquo;s word &ldquo;seek&rdquo; implies active pursuit rather than passive availability. The hospitable person is not simply the person who opens the door when someone knocks; they are the person who goes looking for the opportunity to open the door. Hospitality in the New Testament is a discipline of pursuit, not a natural inclination of the comfortable.",
  },
  {
    reference: "Hebrews 13:2",
    text: "Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.",
    reflection:
      "The word &ldquo;unawares&rdquo; is theologically decisive. Abraham did not know his guests were divine when he ran to meet them; the revelation followed the welcome. The hospitality that is conditional on knowing who the guest is will miss the occasions when the guest is more than they appear. Welcome the stranger first; discover who they are later.",
  },
  {
    reference: "Matthew 25:35",
    text: "I was a stranger and you welcomed me.",
    reflection:
      "Among the works of mercy that will be called to account at the judgment, the welcome of the stranger is specifically listed. The stranger who is welcomed is Christ, received in the guise of need. The theological weight of this is not merely that welcoming the stranger is a kind thing to do; it is that welcoming the stranger is welcoming Christ, and refusing the stranger is refusing Christ.",
  },
  {
    reference: "Luke 24:31",
    text: "And their eyes were opened, and they recognized him. And he vanished from their sight.",
    reflection:
      "The risen Christ is revealed at the table, in the breaking of bread, in the ordinary act of meal-sharing with a stranger they had welcomed. The Emmaus road teaches that the encounter with the living Christ can happen in the context of ordinary hospitality &mdash; but only to the host who had already extended the welcome before they knew who the guest was.",
  },
  {
    reference: "1 Peter 4:9",
    text: "Show hospitality to one another without grumbling.",
    reflection:
      "Peter&rsquo;s qualifier &ldquo;without grumbling&rdquo; suggests that the early Christians were practicing hospitality but sometimes doing it with reluctance &mdash; the hospitality of obligation rather than delight. The command is not merely to open the door but to open it with a spirit that communicates genuine welcome rather than managed duty. The ungrudging host is the hospitable host.",
  },
  {
    reference: "Genesis 18:3-5",
    text: "O Lord, if I have found favor in your sight, do not pass by your servant. Let a little water be brought, and wash your feet, and rest yourselves under the tree, while I bring a morsel of bread, that you may refresh yourselves.",
    reflection:
      "Abraham&rsquo;s first offer is modest &mdash; a little water, a morsel of bread, a rest under a tree. What he then provides is far more: a feast of cakes, veal, curds, and milk. The pattern of the hospitable host is to offer more than they promised and to give more than they pledged. The initial offer is not the measure of the hospitality; the actual giving is.",
  },
];

const videoItems: VideoItem[] = [
  { videoId: "UThkoBFBFec", title: "Christine Pohl on Making Room: Christian Hospitality" },
  { videoId: "1FXC7fkxANo", title: "Rosaria Butterfield: The Gospel Comes with a House Key" },
  { videoId: "3RXhxYoZyYU", title: "Henri Nouwen: Creating Free and Friendly Space for the Stranger" },
  { videoId: "n4pLkWQHxEA", title: "Hospitality vs. Entertaining — Serving Others vs. Impressing Them" },
  { videoId: "V8YJ2aGTbuk", title: "The Open Table of Jesus: Eating with Sinners" },
  { videoId: "vEaKKHe5UJQ", title: "Edith Schaeffer: The Christian Home as Sanctuary and Mission" },
];

const TABS = ["Theology", "Practices", "Voices", "Scripture", "Journal", "Videos"] as const;
type Tab = (typeof TABS)[number];

export default function ChristianHospitalityGuidePage() {
  const [tab, setTab] = useState<Tab>("Theology");
  const [entries, setEntries] = useState<HSPEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  const [whoIHosted, setWhoIHosted] = useState("");
  const [whatHappened, setWhatHappened] = useState("");
  const [godMoment, setGodMoment] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setEntries(parsed as HSPEntry[]);
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
    if (!whoIHosted.trim() || !whatHappened.trim()) return;
    const entry: HSPEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      whoIHosted: whoIHosted.trim(),
      whatHappened: whatHappened.trim(),
      godMoment: godMoment.trim(),
    };
    setEntries((prev) => [entry, ...prev]);
    setWhoIHosted("");
    setWhatHappened("");
    setGodMoment("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const tabButtonStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.5rem 1.1rem",
    borderRadius: 8,
    border: `1px solid ${active ? GOLD : BORDER}`,
    background: active ? "rgba(217, 119, 6, 0.10)" : "transparent",
    color: active ? GOLD : MUTED,
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
    color: GOLD,
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
                color: GOLD,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.6rem",
              }}
            >
              Community &amp; Welcome
            </div>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Love of the Stranger: A Guide to Christian Hospitality
            </h1>
            <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
              Philoxenia &mdash; love of the stranger &mdash; is the New Testament&rsquo;s word for
              hospitality, and it names something more demanding and more transformative than the
              dinner party. This guide traces the theology of welcome from Abraham&rsquo;s tent
              through the Emmaus road and the open table of Jesus, addresses the crucial distinction
              between hospitality and entertaining, and offers practices for recovering the lost art
              of the Christian home as a place where Christ is met in the guest.
            </p>

            <div
              style={{
                marginTop: "1.75rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: 12,
                padding: "1.25rem 1.5rem",
              }}
            >
              <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>
                &ldquo;Do not neglect to show hospitality to strangers, for thereby some have
                entertained angels unawares.&rdquo;
              </p>
              <p style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 600 }}>
                Hebrews 13:2
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
                Eight studies on the theology of Christian hospitality &mdash; from philoxenia and
                Abraham&rsquo;s tent, through the Emmaus road and the open table of Jesus, to the
                Matthew 25 encounter with Christ in the stranger, early church hospitality as
                evangelism, and the crucial distinction between hospitality and entertaining. Each
                section illuminates a dimension of the welcome to which the church is called.
              </p>

              {theologySections.map((section) => (
                <article key={section.title} style={cardStyle}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: GOLD,
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
                        background: "rgba(217, 119, 6, 0.07)",
                        border: `1px solid rgba(217, 119, 6, 0.25)`,
                        borderRadius: 8,
                        padding: "0.9rem 1.1rem",
                      }}
                    >
                      <span
                        style={{
                          color: GOLD,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  Where the threads meet
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Philoxenia, the Emmaus revelation, the open table of Jesus, Christ in the stranger
                  &mdash; all converge on the same truth: the welcome of the guest is an encounter
                  with Christ, and the table is one of the primary places where the kingdom becomes
                  visible. Explore the community that hospitality builds in{" "}
                  <Link
                    href="/christian-community"
                    style={{ color: GOLD, textDecoration: "underline" }}
                  >
                    Christian Community
                  </Link>{" "}
                  or deepen the love that hospitality expresses in{" "}
                  <Link href="/christian-love-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                    Christian Love
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
                Six practices for recovering the art of Christian hospitality &mdash; from the open
                table and releasing the entertaining anxiety, through welcome beyond the comfort zone
                and the listening table, to building the margin that makes hospitality possible and
                the hospitable culture of the whole community. Use the Journal tab to record who you
                hosted and what happened.
              </p>

              {practiceCards.map((practice) => (
                <article key={practice.number} style={cardStyle}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 10 }}>
                    <span
                      style={{
                        color: GOLD,
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {practice.number}
                    </span>
                    <h2
                      style={{ fontSize: "1.12rem", fontWeight: 700, lineHeight: 1.35 }}
                      dangerouslySetInnerHTML={{ __html: practice.title }}
                    />
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
                      color: GOLD,
                      fontSize: "0.85rem",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: practice.anchor }}
                  />
                </article>
              ))}

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  A word about imperfection
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  The hospitable home does not need to be the impressive home. The guest who is
                  genuinely welcomed in a simple, honest space has been more deeply received than
                  the guest who is entertained in a polished but anxious one. The most hospitality-
                  preventing lie is &ldquo;my home isn&rsquo;t ready yet.&rdquo; The home that is
                  ready for genuine welcome is the home where the person who lives there is oriented
                  toward the guest rather than toward their own presentation. That orientation is
                  available now, in whatever state your house is in.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Voices ---------- */}
          {tab === "Voices" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                Six voices on Christian hospitality &mdash; from Christine Pohl&rsquo;s theological
                account of making room to Rosaria Butterfield&rsquo;s radical ordinary hospitality,
                from Henri Nouwen&rsquo;s free and friendly space to Karen Mains&rsquo; decisive
                distinction between hospitality and entertaining, and Edith Schaeffer&rsquo;s vision
                of the Christian home as apologetic. Each practiced what they preached.
              </p>

              {voiceCards.map((voice) => (
                <article key={voice.name} style={cardStyle}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 4 }}>
                    {voice.name}
                  </h2>
                  <div
                    style={{
                      color: GOLD,
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
                      background: "rgba(217, 119, 6, 0.06)",
                      borderLeft: `3px solid ${GOLD}`,
                      borderRadius: 6,
                      fontStyle: "italic",
                      color: TEXT,
                      lineHeight: 1.7,
                      fontSize: "0.92rem",
                    }}
                  >
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>
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
                Six passages on hospitality &mdash; from Paul&rsquo;s command to seek philoxenia
                and the Hebrews warning about entertained angels, through Matthew 25&rsquo;s Christ
                in the stranger and the Emmaus recognition, to Peter&rsquo;s ungrudging welcome and
                Abraham&rsquo;s extravagant reception. Read one per week alongside the Journal
                practice.
              </p>

              {scriptureCards.map((scripture) => (
                <article key={scripture.reference} style={cardStyle}>
                  <div
                    style={{
                      color: GOLD,
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

              <div style={{ ...cardStyle, borderLeft: `3px solid ${GOLD}` }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>
                  How to pray these
                </h3>
                <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
                  Turn each text into a three-part prayer: adoration (&ldquo;Lord, you are the one
                  who ran to meet the prodigal, who set a table in the wilderness, who broke bread
                  with strangers on the Emmaus road&rdquo;), confession (&ldquo;I have kept my door
                  closed out of anxiety, comfort, and the busyness that leaves no margin for the
                  unexpected guest&rdquo;), and petition (&ldquo;give me the love of the stranger
                  that philoxenia names &mdash; the love that goes toward the unfamiliar, that makes
                  room before it knows who is coming, that practices the welcome before it sees the
                  face&rdquo;). The home that prays these prayers tends to become the home that
                  practices them.
                </p>
              </div>
            </section>
          )}

          {/* ---------- Journal ---------- */}
          {tab === "Journal" && (
            <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>
                The hospitality journal records who you hosted or welcomed, what happened in the
                conversation or moment, and any &ldquo;God moment&rdquo; &mdash; any place where you
                sensed Christ in the guest or in what took place between you. Over time these records
                become a testimony to what the open table produces. Entries are saved privately in
                your browser.
              </p>

              <div style={cardStyle}>
                <h2 style={{ fontSize: "1.12rem", fontWeight: 700, marginBottom: 18 }}>
                  New hospitality entry
                </h2>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hsp-who" style={labelStyle}>
                    Who I hosted or welcomed
                  </label>
                  <input
                    id="hsp-who"
                    type="text"
                    value={whoIHosted}
                    onChange={(e) => setWhoIHosted(e.target.value)}
                    placeholder="Name or describe who came &mdash; a neighbor, a newcomer, a colleague, a stranger, a family in need"
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="hsp-what" style={labelStyle}>
                    What happened &mdash; the conversation or moment
                  </label>
                  <textarea
                    id="hsp-what"
                    value={whatHappened}
                    onChange={(e) => setWhatHappened(e.target.value)}
                    placeholder="What did you talk about? What was the atmosphere? What surprised you? What was hard?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="hsp-god" style={labelStyle}>
                    A &ldquo;God moment&rdquo; &mdash; where I sensed Christ in the guest
                  </label>
                  <textarea
                    id="hsp-god"
                    value={godMoment}
                    onChange={(e) => setGodMoment(e.target.value)}
                    placeholder="Was there a moment where something beyond ordinary conversation happened? A word that landed unexpectedly, a connection that felt like more than coincidence, a sense of Christ present in the welcome?"
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </div>

                <button
                  type="button"
                  onClick={addEntry}
                  disabled={!whoIHosted.trim() || !whatHappened.trim()}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: 8,
                    border: "none",
                    background: !whoIHosted.trim() || !whatHappened.trim() ? BORDER : GOLD,
                    color: !whoIHosted.trim() || !whatHappened.trim() ? MUTED : "#07070F",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    cursor: !whoIHosted.trim() || !whatHappened.trim() ? "not-allowed" : "pointer",
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
                      Record a hospitality moment &mdash; who you welcomed, what happened, and any
                      place you sensed Christ in the guest. Over time the journal becomes a testimony
                      to the pattern: who you welcomed, what the table produced, and what was revealed
                      in the breaking of bread.
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
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: GOLD }}>
                              {entry.whoIHosted}
                            </h3>
                            <span style={{ color: MUTED, fontSize: "0.78rem" }}>{entry.date}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteEntry(entry.id)}
                            aria-label={`Delete entry: ${entry.whoIHosted}`}
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
                            What happened
                          </span>
                          <p style={{ color: TEXT, lineHeight: 1.65, fontSize: "0.92rem" }}>
                            {entry.whatHappened}
                          </p>
                        </div>

                        {entry.godMoment && (
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
                              God moment
                            </span>
                            <p
                              style={{
                                color: MUTED,
                                lineHeight: 1.65,
                                fontSize: "0.9rem",
                                fontStyle: "italic",
                              }}
                            >
                              {entry.godMoment}
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
                Teaching to watch on Christian hospitality &mdash; Christine Pohl on making room,
                Rosaria Butterfield on the gospel that comes with a house key, Henri Nouwen on free
                and friendly space, the hospitality versus entertaining distinction, the open table
                of Jesus, and Edith Schaeffer on the Christian home as mission.
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
              Open the door
            </h2>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem", marginBottom: 12 }}>
              The hospitable life is not the life of the perfect host in the perfect home with the
              perfect meal. It is the life of the person oriented toward the guest &mdash; who goes
              looking for the stranger to welcome, who holds the home in stewardship rather than in
              private possession, who has learned to release the entertaining anxiety and practice
              the simple welcome that serves rather than impresses. That life is available to
              anyone who begins it, today, with whoever is nearest.
            </p>
            <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>
              Keep growing: explore the love that hospitality expresses in{" "}
              <Link href="/christian-love-guide" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Love
              </Link>
              , understand the community that hospitality builds in{" "}
              <Link href="/christian-community" style={{ color: GOLD, textDecoration: "underline" }}>
                Christian Community
              </Link>
              , or practice the discipline that sustains a life of welcome in{" "}
              <Link
                href="/christian-discipline"
                style={{ color: GOLD, textDecoration: "underline" }}
              >
                Christian Discipline
              </Link>
              .
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
