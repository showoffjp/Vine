"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "The Opening of Passion Week",
    reference: "Mark 11:1&ndash;11",
    accent: GOLD,
    paragraphs: [
      "Mark chapter eleven marks the decisive turn of the whole Gospel. For ten chapters Jesus has moved through Galilee and the surrounding regions, healing, teaching, and gathering disciples, repeatedly charging those who recognized him to keep silent about his identity. Now he arrives at Jerusalem, the city of the great King, and the secrecy is over. The events of this chapter unfold in the final week before the crucifixion, the week the church has always called Holy Week or Passion Week, and Mark slows his fast-moving narrative down to chronicle these days with unusual care.",
      "The chapter opens with the entry into Jerusalem riding on a young colt, an event so charged with messianic meaning that the crowds spontaneously erupt into the language of the Psalms. From there Mark weaves together the strange episode of the cursed fig tree, the dramatic confrontation in the temple courts, and a series of challenges to the authority of Jesus from the religious leadership. Every scene is a public claim, and every scene provokes the establishment that will soon move to destroy him.",
      "What unites these episodes is the theme of arrival and reckoning. The long-awaited King has come to his city and to his Father&rsquo;s house, and his coming is not a gentle homecoming but a searching judgment. He inspects the fig tree and finds no fruit. He inspects the temple and finds a den of robbers where there should be a house of prayer for all nations. The week that begins with shouts of Hosanna will end with the cross, and Mark eleven sets every piece of that collision in motion.",
      "Readers who come to Mark eleven expecting only triumph are often unsettled by what they find. The triumphal entry is real, but it is immediately followed by acts of prophetic severity. This is characteristic of Mark, who never lets his readers rest in an easy or sentimental picture of Jesus. The Messiah who weeps over the city also overturns its tables, and the King who is praised on Sunday is the King who pronounces judgment on fruitless religion by Monday morning.",
    ],
  },
  {
    heading: "The Triumphal Entry",
    reference: "Mark 11:1&ndash;11",
    accent: GREEN,
    paragraphs: [
      "As Jesus approaches Jerusalem near Bethphage and Bethany at the Mount of Olives, he sends two disciples ahead with precise instructions. They will find a colt tied, one on which no one has ever sat, and they are to untie it and bring it. If anyone questions them, they are to say, &ldquo;The Lord has need of it,&rdquo; and it will be sent at once (11:1&ndash;3). The disciples find everything exactly as he described, a quiet sign of the sovereign foreknowledge that runs throughout Mark&rsquo;s account of this final week.",
      "The detail that the colt is one on which no one has ever sat is not incidental. In the Old Testament, animals set apart for sacred purposes were to be ones that had never been put to ordinary use (Numbers 19:2; Deuteronomy 21:3; 1 Samuel 6:7). The unridden colt is fit for a holy task, consecrated by its very newness to carry the King into the holy city. Mark expects his readers to feel the weight of this consecration even before the crowd begins to shout.",
      "The disciples throw their cloaks on the colt, and Jesus sits on it. Many spread their cloaks on the road, while others spread leafy branches they had cut from the fields (11:7&ndash;8). The spreading of garments before a royal figure recalls the acclamation of Jehu as king, when the people took their cloaks and spread them under him on the steps and blew the trumpet and shouted that Jehu was king (2 Kings 9:13). The crowd is treating Jesus as royalty, enacting a coronation procession into the capital.",
      "Then comes the cry that gives the scene its name: &ldquo;Hosanna! Blessed is he who comes in the name of the Lord! Blessed is the coming kingdom of our father David! Hosanna in the highest!&rdquo; (11:9&ndash;10). The words are drawn from Psalm 118, one of the Hallel psalms sung at the great festivals. Hosanna means &ldquo;save now,&rdquo; a prayer for deliverance that has become a shout of praise. The crowd is hailing the arrival of the Davidic kingdom, even if their understanding of what that kingdom would be remains far from the cross that lay ahead.",
      "Mark&rsquo;s telling of the entry ends on a strikingly quiet note. Jesus enters Jerusalem and goes into the temple, and when he has looked around at everything, since it is already late, he goes out to Bethany with the twelve (11:11). There is no immediate action, only a survey, a long deliberate look at the temple and all that is in it. This inspection is the hinge between the entry and the cleansing that will come the next day. The King has seen his Father&rsquo;s house, and what he has seen will not be left unaddressed.",
    ],
  },
  {
    heading: "The Fig Tree and the Temple",
    reference: "Mark 11:12&ndash;25",
    accent: ROSE,
    paragraphs: [
      "The center of the chapter is occupied by one of Mark&rsquo;s most famous literary structures, the so-called intercalation or sandwich. Mark begins the story of the fig tree, interrupts it with the cleansing of the temple, and then returns to finish the fig tree story the next morning. The two events are meant to interpret one another. The barren fig tree, all leaves and no fruit, is a living parable of the temple, all activity and no genuine worship, and the withering of the tree foreshadows the judgment coming upon the temple itself.",
      "On the morning after the entry, as they return from Bethany, Jesus is hungry. Seeing in the distance a fig tree in leaf, he goes to find fruit on it, but when he comes he finds nothing but leaves, for it is not the season for figs (11:12&ndash;13). The parenthetical note that it was not the season for figs has puzzled readers for centuries, but it underscores the symbolic nature of the act. Jesus is not throwing a tantrum over breakfast; he is performing a prophetic sign. The tree in full leaf made a promise of fruit that it could not keep, just as the temple in full ceremonial splendor made a promise of true devotion to God that it failed to deliver.",
      "Jesus says to the tree, &ldquo;May no one ever eat fruit from you again&rdquo; (11:14), and the disciples hear it. Then he enters the temple and begins to drive out those who were buying and selling, overturning the tables of the money-changers and the seats of those who sold pigeons. He will not even allow anyone to carry anything through the temple as a shortcut (11:15&ndash;16). This is the act of a prophet acting out the word of the Lord with his own hands, claiming an authority over the temple that belongs to its Lord.",
      "His justification fuses two scriptures fused together: &ldquo;Is it not written, My house shall be called a house of prayer for all the nations? But you have made it a den of robbers&rdquo; (11:17). The first half is from Isaiah 56:7, where God promises that the foreigner and the outcast will be welcomed to his holy mountain so that his house may be a house of prayer for all peoples. The second half is from Jeremiah 7:11, where the prophet condemns those who treat the temple as a hideout, sinning freely and then sheltering behind its walls. The combination is devastating: the place that was meant to draw the nations to God has become a refuge for the corrupt.",
      "The next morning, passing by, the disciples see the fig tree withered away to its roots, and Peter says, &ldquo;Rabbi, look! The fig tree that you cursed has withered&rdquo; (11:20&ndash;21). The sign is complete. The tree that bore no fruit is dead from the roots up, and the lesson is unmistakable for those with eyes to see. Religious display without the fruit of righteousness is under the judgment of God, and the magnificent temple that has become a den of robbers is, like the fig tree, already condemned, though its outward splendor remains for a season.",
      "Jesus turns the withered tree into a lesson on faith and prayer. &ldquo;Have faith in God,&rdquo; he says. &ldquo;Truly, I say to you, whoever says to this mountain, Be taken up and thrown into the sea, and does not doubt in his heart, but believes that what he says will come to pass, it will be done for him&rdquo; (11:22&ndash;23). And he adds a word about forgiveness: &ldquo;Whenever you stand praying, forgive, if you have anything against anyone, so that your Father also who is in heaven may forgive you your trespasses&rdquo; (11:25). The judgment on the fruitless leads directly to teaching on the kind of faith and forgiveness that bears genuine fruit.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "Jesus the Prophetic Messiah",
    reference: "Zechariah 9:9 and the King who comes",
    accent: GOLD,
    paragraphs: [
      "The entry into Jerusalem is steeped in the prophecy of Zechariah 9:9, even though Mark, unlike Matthew and John, does not quote the verse directly. The prophet had announced, &ldquo;Rejoice greatly, O daughter of Zion! Behold, your king is coming to you; righteous and having salvation is he, humble and mounted on a donkey, on a colt, the foal of a donkey.&rdquo; By deliberately riding the unridden colt into the city, Jesus is enacting this prophecy with his body, presenting himself as the promised king of Zion in the very manner Zechariah foretold.",
      "The kind of king Zechariah describes is crucial. He is not a war-horse conqueror but a humble king riding a donkey, a king who comes in peace and yet brings salvation. In the verses that follow in Zechariah, this king cuts off the chariot and the battle bow and speaks peace to the nations, and his rule extends to the ends of the earth. Jesus chooses the donkey rather than the warhorse precisely to define the nature of his kingship. He is a King, but his kingdom does not come by the sword.",
      "This prophetic self-presentation is the key to understanding the whole chapter. Jesus is not merely a teacher who happens to attract a crowd; he is the Messiah deliberately fulfilling the Scriptures of Israel in a series of public, symbolic acts. The entry, the cursing of the tree, and the cleansing of the temple are all prophetic sign-acts in the tradition of Isaiah walking barefoot, Jeremiah smashing a clay jar, and Ezekiel lying on his side. Each is a sermon preached not in words alone but in deeds that carry the word of God.",
      "Mark wants his readers to see that the suffering and rejection that follow are not the defeat of the Messiah but the path of the Messiah. The King who enters humbly on a colt is the same King who will be lifted up on a cross. The kingdom of God comes not in spite of the cross but through it, and the prophetic Messiah of Mark eleven is the one who knows exactly what awaits him in the city he is entering and goes in anyway, openly and on purpose.",
    ],
  },
  {
    heading: "The Markan Intercalation",
    reference: "The fig tree framing the temple",
    accent: PURPLE,
    paragraphs: [
      "One of Mark&rsquo;s signature literary techniques is the intercalation, where he begins one story, interrupts it with a second, and then returns to finish the first. He uses this sandwich structure throughout the Gospel, and the fig tree wrapped around the temple cleansing is the most theologically loaded example. The interruption is never accidental; the inner story and the outer story illuminate each other, and the reader is meant to interpret each in light of the other.",
      "In this case the meaning is sharp and unsettling. The fig tree that has leaves but no fruit is a picture of the temple, which has all the outward signs of life and worship but lacks the fruit of true devotion and justice. When Jesus curses the tree and it withers, the reader is meant to understand that the same judgment hangs over the temple. The cleansing in the middle is not a reform meant to fix the temple but a prophetic act of judgment announcing its end.",
      "The fig tree had long served in Israel&rsquo;s Scriptures as an image of the nation and its relationship to God. The prophets spoke of finding no grapes on the vine and no figs on the fig tree as a sign of coming judgment (Jeremiah 8:13; Hosea 9:10; Micah 7:1). By choosing a fig tree for his sign-act, Jesus places his action squarely within this prophetic tradition. The barrenness of the tree is the barrenness of a religion that has the appearance of fruitfulness but produces nothing that God can accept.",
      "The intercalation also teaches us how to read Mark. The evangelist is not a careless compiler stringing together incidents in random order; he is a careful theologian arranging his material so that its structure carries meaning. When two stories are interwoven like this, the reader who notices the pattern is rewarded with a deeper understanding than the surface narrative alone provides. The temple cleansing is not merely cleansing; framed by the dead tree, it is a sentence of judgment.",
    ],
  },
  {
    heading: "A House of Prayer for All Nations",
    reference: "Isaiah 56:7 and the excluded Gentiles",
    accent: TEAL,
    paragraphs: [
      "When Jesus quotes Isaiah 56:7, he includes the phrase that the other Gospels sometimes abbreviate: a house of prayer for all the nations. This detail is essential to understanding why his anger burns so hot. The buying and selling and money-changing took place in the outer court of the temple, the Court of the Gentiles, the one area where non-Jews were permitted to come and pray. By turning this court into a marketplace, the temple authorities had crowded out the very people God had promised to welcome.",
      "Isaiah 56 is one of the most expansive visions in the Old Testament of God&rsquo;s welcome to the outsider. In that chapter God promises that the foreigners who join themselves to the Lord and the eunuchs who keep his covenant will be brought to his holy mountain and made joyful in his house of prayer, for his house shall be called a house of prayer for all peoples. The temple was always meant to be a beacon drawing the nations to the living God, not a fortress of national and ethnic privilege.",
      "By cleansing the Court of the Gentiles, Jesus restores, even if only for a moment, the temple&rsquo;s true purpose. He clears away the commerce that had crowded out the nations and makes a space for prayer. The act is a vivid enactment of the mission that will explode after the resurrection, when the gospel goes out from Jerusalem to Judea and Samaria and to the ends of the earth, gathering in the very nations the marketplace had pushed aside.",
      "This theme also indicts every form of religion that builds walls where God intends doors. The temple authorities had monetized access to God and reserved the holy place for those who could pay and those who belonged. Jesus tears down that arrangement with his own hands. The house of God is for prayer, and it is for all peoples, and any system that obscures either of those truths stands under the same judgment that fell on the fig tree and the temple.",
    ],
  },
  {
    heading: "Faith, Prayer, and Forgiveness",
    reference: "Mark 11:22&ndash;25",
    accent: GREEN,
    paragraphs: [
      "Out of the withered fig tree Jesus draws a remarkable teaching on faith. &ldquo;Have faith in God,&rdquo; he says, and then promises that the one who tells a mountain to be cast into the sea and does not doubt but believes will see it done. The mountain imagery is striking when we remember that he speaks within sight of the temple mount itself. The faith Jesus describes is not a technique for getting what we want but a trust so anchored in God that it aligns itself with God&rsquo;s purposes, even purposes as world-shaking as the removal of the old order centered on that mountain.",
      "Jesus immediately ties this faith to prayer: &ldquo;Whatever you ask in prayer, believe that you have received it, and it will be yours&rdquo; (11:24). This is not a blank check for selfish desire; it is a description of the confidence that belongs to those who pray in line with the will of the God they trust. The whole context is the kingdom of God advancing in judgment and mercy, and prayer in that context is participation in what God is doing, not manipulation of God to do what we want.",
      "Then comes the crucial qualification that guards this teaching from abuse: &ldquo;Whenever you stand praying, forgive, if you have anything against anyone&rdquo; (11:25). The faith that moves mountains cannot coexist with an unforgiving heart. The one who comes to God asking forgiveness must come ready to forgive, for the Father&rsquo;s forgiveness and our forgiveness of others are bound together throughout the teaching of Jesus, most famously in the Lord&rsquo;s Prayer.",
      "Set against the backdrop of the cleansed temple, this teaching is profoundly significant. The temple was the place where Israel sought forgiveness through sacrifice, and Jesus is now teaching that true access to the Father comes through faith-filled prayer and a forgiving heart. He is quietly pointing beyond the temple system to the new way of approaching God that his own death will open. The fruit the fig tree lacked, the fruit the temple lacked, is exactly this: living faith, believing prayer, and a heart that forgives.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "The Colt and the King",
    reference: "Mark 11:1&ndash;6",
    accent: GOLD,
    paragraphs: [
      "The careful instructions Jesus gives about the colt reveal his sovereign command over the events of his final week. He knows where the animal is tied, knows that no one has ridden it, and knows what the bystanders will say. The phrase he tells the disciples to use, &ldquo;The Lord has need of it,&rdquo; can be heard two ways: either as a reference to the owner who is the colt&rsquo;s lord, or as the bold claim that Jesus himself is the Lord with a right to requisition it. The double meaning is surely intentional.",
      "Everything happens exactly as Jesus said. The disciples go away and find the colt tied at a door outside in the street, and they untie it. Some of those standing there ask what they are doing, the disciples answer as Jesus told them, and they are let go (11:4&ndash;6). The smooth fulfillment of his words underscores that Jesus is not swept along by circumstances but is the master of them. He goes to the cross not as a victim of forces beyond his control but as one who lays down his life of his own accord.",
      "This emphasis on Jesus&rsquo; foreknowledge prepares the reader for the larger drama. If he knows the location of an unridden colt, he also knows what awaits him in Jerusalem. The same authority that arranges the details of the entry will, in a few days, hand him over to be crucified, and the reader is meant to understand that even the betrayal and the cross unfold within the sovereign plan he has long foreseen and freely embraced.",
    ],
  },
  {
    heading: "Hosanna in the Highest",
    reference: "Mark 11:7&ndash;11",
    accent: GREEN,
    paragraphs: [
      "The crowd&rsquo;s acclamation draws directly on Psalm 118, the climactic psalm of the Hallel sung at Passover and the other great feasts. &ldquo;Blessed is he who comes in the name of the Lord&rdquo; is a line pilgrims would sing as they approached the temple, but on the lips of this crowd, applied to this man riding this colt, it becomes a coronation hymn. They add, &ldquo;Blessed is the coming kingdom of our father David,&rdquo; making explicit the messianic hope that the entry awakens.",
      "Yet there is a poignant gap between what the crowd expects and what Jesus has come to do. They are hoping for the restoration of David&rsquo;s political kingdom, the throwing off of Roman occupation, the return of national glory. Jesus comes to establish a kingdom that arrives through suffering, death, and resurrection. The same crowds, or others like them, will cry out for his crucifixion within the week, and the hosannas of Sunday will give way to the shouts of Friday.",
      "Mark ends the scene with quiet restraint. Jesus enters the temple, looks around at everything, and, since it is already late, departs for Bethany with the twelve (11:11). There is no climactic cleansing on this first day, only an inspection. The King surveys his Father&rsquo;s house in silence, and his long deliberate look is itself a kind of verdict. What he has seen will determine the action he takes when he returns the next morning.",
    ],
  },
  {
    heading: "The Cursing of the Fig Tree",
    reference: "Mark 11:12&ndash;14",
    accent: ROSE,
    paragraphs: [
      "On the way back into the city, Jesus is hungry and sees a fig tree in leaf. The presence of leaves was a natural promise of fruit, since on a fig tree small early figs typically appear with or before the leaves. The tree advertised fruitfulness it did not possess. When Jesus finds nothing but leaves, he addresses the tree directly: &ldquo;May no one ever eat fruit from you again&rdquo; (11:14). The disciples hear his words, and Mark notes this so that the lesson the next morning will land with full force.",
      "The parenthetical remark that it was not the season for figs has troubled many readers, but it actually confirms the symbolic intent of the act. Jesus is not naively expecting a harvest out of season; he is performing a prophetic sign. The tree, like the nation it represents, displays the foliage of religion while failing to produce the fruit God seeks. The curse is a dramatized prophecy of the judgment that fruitless religion invites upon itself.",
      "This sign-act stands in a long prophetic tradition. The prophets repeatedly used the image of the fruitless fig tree and the empty vine to depict a covenant people who had the forms of worship without its substance. Jesus takes up that imagery and embodies it. The tree will be found withered to its roots the next day, and the disciples, and the readers, are meant to apply the lesson to the whole religious system whose heart they are about to see Jesus disturb.",
    ],
  },
  {
    heading: "Cleansing the Temple",
    reference: "Mark 11:15&ndash;19",
    accent: TEAL,
    paragraphs: [
      "Entering the temple, Jesus begins to drive out those who sold and those who bought, overturning the tables of the money-changers and the seats of those who sold pigeons. The money-changers were needed because temple dues had to be paid in a particular coinage, and the pigeon-sellers supplied the offerings of the poor, so the trade had a religious rationale. But it had grown into a system of profit that filled the one court open to the nations with the noise and greed of a marketplace, and Jesus will not tolerate it.",
      "He goes further, refusing to allow anyone to carry goods through the temple as a shortcut (11:16). This reclaims the holiness of the whole precinct, insisting that it is not a thoroughfare or a market but the house of God. Then he teaches, grounding his action in Scripture: &ldquo;Is it not written, My house shall be called a house of prayer for all the nations? But you have made it a den of robbers&rdquo; (11:17), joining Isaiah 56:7 and Jeremiah 7:11 into a single charge.",
      "The reaction is immediate and ominous. The chief priests and the scribes hear it and seek a way to destroy him, for they fear him because the whole crowd is astonished at his teaching (11:18). The cleansing of the temple is the act that seals his fate. The authorities cannot move openly because of his popularity, but from this moment their resolve to kill him hardens. When evening comes, Jesus and his disciples go out of the city, withdrawing again to the safety of Bethany.",
    ],
  },
  {
    heading: "The Withered Tree and Mountain-Moving Faith",
    reference: "Mark 11:20&ndash;25",
    accent: PURPLE,
    paragraphs: [
      "In the morning, as they pass by, they see the fig tree withered away to its roots, and Peter, remembering, exclaims, &ldquo;Rabbi, look! The fig tree that you cursed has withered&rdquo; (11:20&ndash;21). The completeness of the withering, all the way to the roots, signals that the judgment is total. The sign-act has reached its conclusion, and the disciples now see in the dead tree a picture of what awaits a religion that bears leaves but no fruit.",
      "Jesus responds not with an explanation of the symbolism but with a call to faith: &ldquo;Have faith in God. Truly, I say to you, whoever says to this mountain, Be taken up and thrown into the sea, and does not doubt in his heart, but believes that what he says will come to pass, it will be done for him&rdquo; (11:22&ndash;23). The faith he describes is confident, settled, and aligned with the purposes of God, the kind of faith that can participate in the very acts of judgment and renewal that God is bringing about.",
      "He concludes with a word on forgiveness that anchors all of this teaching in the heart: &ldquo;Whenever you stand praying, forgive, if you have anything against anyone, so that your Father also who is in heaven may forgive you your trespasses&rdquo; (11:25). The faith that moves mountains and the prayer that receives must flow from a heart reconciled to others. The fruit that the tree and the temple lacked is precisely this kind of believing, forgiving, prayerful life.",
    ],
  },
  {
    heading: "By What Authority?",
    reference: "Mark 11:27&ndash;33",
    accent: GOLD,
    paragraphs: [
      "Back in the temple, the chief priests, the scribes, and the elders, the three groups that together made up the Sanhedrin, come to Jesus and demand, &ldquo;By what authority are you doing these things, or who gave you this authority to do them?&rdquo; (11:28). The question is provoked by the cleansing of the previous day. They want him to make a claim they can use against him, to declare openly that he acts by divine authority so they can charge him with blasphemy or sedition.",
      "Jesus answers their question with a question, a rabbinic move that exposes the dishonesty of their inquiry. &ldquo;The baptism of John, was it from heaven or from man? Answer me&rdquo; (11:30). The question is a trap that springs back on them. If they say from heaven, he will ask why they did not believe John, who pointed to Jesus. If they say from man, they fear the crowd, who hold that John was truly a prophet. They are caught between their unbelief and their cowardice.",
      "So they answer, &ldquo;We do not know,&rdquo; and Jesus replies, &ldquo;Neither will I tell you by what authority I do these things&rdquo; (11:33). The refusal is not evasion but exposure. The leaders who demand his credentials have just admitted, in front of the crowd, that they cannot or will not render a verdict even on John the Baptist. Their authority to judge Jesus is shown to be hollow. The one true Authority stands before them, and they have neither the honesty nor the faith to recognize him.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Bearing Real Fruit",
    reference: "Living beyond the leaves",
    accent: GREEN,
    paragraphs: [
      "The cursed fig tree confronts every reader with a searching question: is my faith all leaves, or does it bear fruit? The tree looked alive and promising from a distance, and only on closer inspection did its barrenness appear. It is possible to have an impressive outward display of religion, the foliage of attendance, vocabulary, and activity, while producing nothing that God can accept. The chapter calls us to examine whether our profession of faith is matched by the fruit of love, justice, mercy, and obedience.",
      "This is not a counsel of despair but a call to honesty before the God who sees beyond appearances. Jesus did not curse the tree to terrify but to teach, and the lesson is meant to drive us toward genuine fruitfulness rather than to leave us anxious about our leaves. The same Jesus who inspects the tree also teaches the way of faith, prayer, and forgiveness that produces the fruit he seeks. The remedy for barrenness is not more leaves but deeper roots in the God who alone can make us fruitful.",
      "In a culture that prizes image and performance, the warning is timely. We can curate an appearance of spiritual vitality on the outside while remaining empty within. Mark eleven urges us to care more about the fruit than the foliage, to seek the substance of devotion rather than its appearance, and to let our religion be measured not by how it looks to others but by what it actually produces in a life surrendered to God.",
    ],
  },
  {
    heading: "Reclaiming the House of Prayer",
    reference: "Cleansing what crowds out God",
    accent: TEAL,
    paragraphs: [
      "When Jesus cleansed the temple, he removed everything that crowded out prayer and excluded the nations. The application is searching for the church and for the individual heart, both of which Scripture also calls temples of God. We are forced to ask what has crept into the sacred space and crowded out communion with God, what commerce or distraction or self-interest has turned the place of prayer into a place of noise. Jesus still longs to clear away whatever obstructs genuine worship.",
      "The detail that the marketplace had filled the Court of the Gentiles speaks to the church&rsquo;s mission. Anything that makes the people of God a closed circle rather than an open door betrays the purpose of the house of prayer for all nations. The chapter calls communities of faith to examine whether their structures welcome the outsider or push him aside, whether they draw the nations toward God or guard the holy place for the comfortable insider.",
      "On the personal level, the cleansing invites a regular inventory of the heart. What has accumulated in the inner temple that needs to be overturned? Jesus does not cleanse gently when the matter is urgent; he overturns tables. We can welcome that searching work, asking him to drive out whatever has displaced prayer, so that our lives may again become what they were made to be, a dwelling place for the presence and praise of God.",
    ],
  },
  {
    heading: "Faith, Prayer, and a Forgiving Heart",
    reference: "Mark 11:22&ndash;25 applied",
    accent: PURPLE,
    paragraphs: [
      "The teaching on mountain-moving faith is often quoted in isolation, but Mark binds it tightly to forgiveness. The faith that receives from God flows from a heart that has forgiven others. We cannot hold grudges in one hand and reach out for God&rsquo;s mercy with the other. The application is direct: before we presume on the promises of believing prayer, we must let go of every grievance we are clutching against another person.",
      "This linking of faith and forgiveness protects the teaching from becoming a formula for getting whatever we want. Jesus is not promising that strong belief guarantees the fulfillment of selfish desires. He is describing the confident, God-aligned prayer of a heart at peace with God and neighbor. Such prayer participates in God&rsquo;s purposes and receives what those purposes intend, which is far better than the trinkets our untransformed desires might request.",
      "Practically, this calls us to make forgiveness a regular part of our praying. Whenever we stand to pray, Jesus says, we are to forgive. The discipline of releasing others is woven into the very act of approaching God, because the Father who forgives us calls us to extend that same forgiveness onward. A prayer life that ignores this command will be hindered, but a forgiving heart opens the door to the kind of faith that can move mountains.",
    ],
  },
  {
    heading: "Reckoning with the Authority of Jesus",
    reference: "Mark 11:27&ndash;33 applied",
    accent: GOLD,
    paragraphs: [
      "The question of the religious leaders, &ldquo;By what authority are you doing these things?&rdquo;, is one that every reader must finally answer for himself. The leaders asked it in bad faith, hoping to trap rather than to learn, and so they received no answer. The chapter exposes the difference between an honest seeker who wants to know the truth and a hostile critic who only wants ammunition. We are invited to examine our own motives when we come to Jesus with our questions.",
      "Jesus refuses to give his credentials to those who will not even commit themselves about John the Baptist. The lesson is that there is no neutral ground from which to assess his claims while keeping ourselves uncommitted. To ask about his authority honestly is to be confronted by the demand for a response, for the one whose authority we question is the very Lord before whom we must one day stand. The fence we imagine we can sit on does not exist.",
      "The deepest application of Mark eleven is this question of authority over our own lives. Jesus entered Jerusalem as King, inspected the temple as its Lord, and judged the fruitless tree by his own word. The same Lord asks whether we will receive his authority or resist it. The chapter calls us not to the cowardly evasion of the leaders, who said &ldquo;We do not know,&rdquo; but to the glad surrender of the disciples, who spread their cloaks before him and welcomed the King who comes in the name of the Lord.",
    ],
  },
];

const reflectionQuestions = [
  "Where in my life is there foliage without fruit, an appearance of devotion that is not matched by the substance God seeks?",
  "What has crowded into the temple of my heart and pushed out genuine prayer, and what would it mean for Jesus to overturn those tables?",
  "Am I holding any grievance that hinders my prayers, and what would it look like to forgive as I have been forgiven?",
  "When I come to Jesus with my questions, am I an honest seeker or a hostile critic looking for an excuse to keep my distance?",
  "If Jesus is the King who comes in the name of the Lord, in what specific area of my life do I still need to welcome his authority?",
];

const videoItems = [
  { videoId: "Lm0pQ3R7sWh", title: "The Triumphal Entry - Mark 11 and Zechariah 9" },
  { videoId: "Kx7bN2vT9dM", title: "The Fig Tree and the Temple - Mark 11 Explained" },
  { videoId: "Wp4cR8sQ1zA", title: "A House of Prayer for All Nations - Isaiah 56 in Mark 11" },
  { videoId: "Hb6tY3nL5vC", title: "By What Authority - The Confrontation in Mark 11" },
];

function blocksForTab(tab: Tab): Block[] {
  if (tab === "Overview") return overviewBlocks;
  if (tab === "Key Themes") return themeBlocks;
  if (tab === "Verse by Verse") return verseBlocks;
  return applicationBlocks;
}

export default function Mark11GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const blocks = blocksForTab(activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${GOLD}22`, color: GOLD, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Mark 11 &mdash; The Triumphal Entry and the Temple
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Hosanna! Blessed is he who comes in the name of the Lord!&rdquo; The King enters Jerusalem on a colt that no one had ridden, curses a fig tree that bears only leaves, cleanses his Father&rsquo;s house as a house of prayer for all nations, teaches mountain-moving faith and forgiveness, and silences those who question his authority." }} />
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem", position: "sticky", top: "var(--header-height, 80px)", background: BG, zIndex: 5 }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? GOLD : BORDER}`,
                background: activeTab === t ? GOLD : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </nav>

        <section>
          {blocks.map((block, bi) => (
            <div key={bi} style={{ marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: block.accent, flexShrink: 0, display: "inline-block" }} />
                <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: block.heading }} />
              </div>
              <div style={{ color: block.accent, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {block.paragraphs.map((para, pi) => (
                  <p
                    key={pi}
                    style={{ color: pi === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          ))}

          {activeTab === "Application" && (
            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 12, padding: "1.75rem 2rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.3rem" }}>Questions for Reflection</h3>
              <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {reflectionQuestions.map((q, i) => (
                  <li key={i} style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.03rem" }} dangerouslySetInnerHTML={{ __html: q }} />
                ))}
              </ol>
            </div>
          )}
        </section>

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Mark 11 through visual teaching on the triumphal entry, the fig tree and the temple, the house of prayer for all nations, and the question of authority that hardened the leaders against Jesus." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: GOLD, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The King Has Come to His House</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Mark 11 is the threshold of the cross. The King enters his city to the cry of Hosanna, inspects his Father&rsquo;s house and finds a den of robbers where there should be a house of prayer for all nations, and curses the fruitless fig tree as a sign of judgment on barren religion. He calls his followers to mountain-moving faith, believing prayer, and a forgiving heart, and he stands before the rulers as the one whose authority comes from heaven. The week that begins with palm branches will end with a cross, and the cross will become the throne." }} />
        </div>
      </main>
    </div>
  );
}
