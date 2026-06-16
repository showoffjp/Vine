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
  reference?: string;
  accent: string;
  paragraphs: string[];
}

const overviewBlocks: Block[] = [
  {
    heading: "The Valley of Vision &mdash; Jerusalem Under Judgment",
    reference: "Isaiah 22:1&ndash;4",
    accent: ROSE,
    paragraphs: [
      "Isaiah 22 opens with the jarring address: &ldquo;The oracle concerning the Valley of Vision.&rdquo; The Valley of Vision is Isaiah&rsquo;s name for Jerusalem itself, the city where the prophets received the word of God. Yet the very title is saturated with irony: the city that had been the seat of divine revelation was now blind to the peril descending upon her. She had become a valley &mdash; low, hemmed in, about to be besieged &mdash; precisely because she refused to look upward to the God who had made her great.",
      "The prophet sees the rooftops of Jerusalem alive with commotion: &ldquo;What ails you now, that you have gone up, all of you, to the housetops?&rdquo; The people were not mourning or praying. They were celebrating. The Assyrian army had turned aside from Jerusalem in the days of Hezekiah, whether through diplomacy or the more dramatic deliverance recounted in Isaiah 36&ndash;37, and the city erupted in relief and festivity. From the housetops they cheered as if they had won a great battle by their own cunning.",
      "Isaiah&rsquo;s response is the opposite of the crowd. The prophet weeps: &ldquo;Therefore I said: Look away from me; let me weep bitterly; do not labor to comfort me concerning the destruction of the daughter of my people.&rdquo; He sees what the revelers cannot: the slain of Jerusalem were not fallen on the field of honorable battle. They had fled in panic, abandoned their posts, and been captured without a sword being drawn. The city had been exposed as hollow long before the enemy reached the walls, because its trust had been in anything but God.",
      "These opening verses establish the governing contrast of the entire chapter: a city feasting when God is calling it to weeping, a prophet mourning when the people are shouting for joy. The spiritual diagnosis Isaiah will press throughout the chapter has already been delivered in miniature: Jerusalem does not see what she should see, and she celebrates precisely when repentance is most urgent.",
    ],
  },
  {
    heading: "The Day of Tumult &mdash; Defenses Stripped Away",
    reference: "Isaiah 22:5&ndash;8",
    accent: PURPLE,
    paragraphs: [
      "The Lord of hosts names the moment with a triple phrase of doom: &ldquo;a day of tumult and trampling and confusion.&rdquo; The armies gathered in the Valley of Vision, battering down the walls, crying out toward the mountains. The careful military preparations of the Judean kings &mdash; the great walls, the towers, the armories &mdash; are being systematically dismantled. What had looked like impregnable strength was turning to rubble under the judgment of God.",
      "The text notes that &ldquo;the covering of Judah was taken away.&rdquo; This phrase signals more than military collapse. The &ldquo;covering&rdquo; is a term for the divine protection God extends over his covenant people. When God withdraws that covering, no earthly fortification can supply what only he provides. The very fact that Judah needed her walls exposed was that she had refused to hide under the shadow of the Almighty.",
      "Elam and Kir are summoned against Jerusalem &mdash; mercenary nations and distant warriors enlisted in God&rsquo;s own purposes. Even the enemies arrayed against the city are instruments in the hand of the Lord of hosts. This is the consistent logic of Isaiah&rsquo;s theology of history: the nations are not autonomous forces challenging God but tools in his hand, summoned and dismissed according to his sovereign design.",
      "The section ends with the stark announcement that Judah&rsquo;s defenses were stripped away and the armor in the house of the forest &mdash; the great cedar armory Solomon had built &mdash; was exposed and useless. All that remained was the shell of human preparation, emptied of divine backing, a hollow monument to misplaced confidence.",
    ],
  },
  {
    heading: "Looking to the Walls but Not to the Maker",
    reference: "Isaiah 22:9&ndash;11",
    accent: TEAL,
    paragraphs: [
      "Isaiah now describes the feverish activity of Jerusalem&rsquo;s defense preparations with almost clinical precision. The city broke down houses to strengthen the walls. They counted the houses of Jerusalem and broke them down to repair the breach. They made a reservoir between the two walls for the water of the old pool. Every description highlights human ingenuity, human labor, human calculation.",
      "The condemnation falls like a stone in verse 11: &ldquo;but you did not look to him who did it, or see him who planned it long ago.&rdquo; The antecedent of &ldquo;him&rdquo; is the Lord himself. God had long ago planned the events now unfolding &mdash; the siege, the threat, the crisis &mdash; as a summons to himself. The engineering was admirable, but it had been accomplished in the spirit of men who believed that the right walls and the right reservoir could substitute for the right God.",
      "This is one of Isaiah&rsquo;s most pointed diagnoses of the sin of self-reliance. The problem was not that Jerusalem built walls; walls are reasonable. The problem was the spiritual orientation beneath the building: the same energy devoted to counting bricks was never devoted to calling on the Maker of all things. They &ldquo;looked&rdquo; at the armory, at the water supply, at the fortifications &mdash; everything their eyes could measure &mdash; and never lifted those eyes to the One who holds all things in his hand.",
      "The application for every generation is painfully direct. Human beings are tireless builders of their own security systems &mdash; financial, medical, political, relational &mdash; and there is nothing wrong with prudent planning. The sin Isaiah identifies is the substitution of the plan for the Planner, the strategy for the Sovereign, the reservoir for the Rock. God calls his people not to abandon wisdom but to build it on the foundation of looking to him first.",
    ],
  },
  {
    heading: "The Call to Weeping and the Unpardonable Sin of Revelry",
    reference: "Isaiah 22:12&ndash;14",
    accent: GOLD,
    paragraphs: [
      "The crisis reaches its theological climax in verses 12 through 14. God himself calls Jerusalem to repentance: &ldquo;In that day the Lord God of hosts called for weeping and mourning, for baldness and wearing sackcloth.&rdquo; These were the ancient covenant signs of contrition, the public acknowledgment that the people had sinned and that only divine mercy could save them. The hour demanded tears, not triumph.",
      "Instead, Isaiah reports what he sees and hears: &ldquo;behold, joy and gladness, killing oxen and slaughtering sheep, eating flesh and drinking wine. Let us eat and drink, for tomorrow we die.&rdquo; The quotation is chilling in its context. The people had heard enough to know that death was a genuine possibility &mdash; and they had decided to respond to that knowledge not with repentance but with hedonism. If the end is coming, why not enjoy the present? The philosophy is ancient and it is always the opposite of the gospel.",
      "The divine response is unlike any other in the chapter: &ldquo;Surely this iniquity will not be atoned for you until you die, says the Lord God of hosts.&rdquo; This is among the starkest declarations of judgment in the entire Old Testament. The sin that could not be atoned was not a particular transgression of the ceremonial law. It was the posture of the heart &mdash; the refusal to receive God&rsquo;s call to repentance, the hardening of the will against grief, the choosing of pleasure over prostration before God in the hour of his calling.",
      "Commentators have noted the parallel to what Jesus calls the sin against the Holy Spirit, the blasphemy that will not be forgiven. Both describe not a single act but a settled disposition of the soul: the deliberate rejection of God&rsquo;s summons at precisely the moment when that summons was unmistakably clear. Jerusalem had been given every sign of her need, and she responded by throwing a party. The judgment that follows is not arbitrary; it is the sober consequence of choosing revelry over repentance when repentance was the one door left open.",
    ],
  },
  {
    heading: "Shebna Rebuked and Removed from Office",
    reference: "Isaiah 22:15&ndash;19",
    accent: GREEN,
    paragraphs: [
      "The oracle shifts suddenly from the city as a whole to a single individual: &ldquo;Thus says the Lord God of hosts, &lsquo;Come, go to this steward, to Shebna, who is over the household, and say to him.&rsquo;&rdquo; Shebna was the prime minister of Hezekiah&rsquo;s court, the man &ldquo;over the household,&rdquo; which was the highest administrative office in the kingdom. He appears elsewhere in Isaiah as part of Hezekiah&rsquo;s delegation to the Assyrian field commander, which suggests he was a man of significant real power.",
      "Isaiah&rsquo;s accusation is remarkable: Shebna has been hewing out a tomb for himself in the rock, &ldquo;you who hew a tomb on the height and carve a dwelling for yourself in the rock.&rdquo; In the ancient Near East, a tomb was a statement of permanence and prestige. Nobles and kings were buried in hewn rock tombs in honorable locations, their names carved into stone as a bid for memory. Shebna was spending his energy and influence securing a legacy for himself &mdash; not serving the people of God but feathering his own nest for eternity.",
      "The divine judgment is a grotesque reversal of Shebna&rsquo;s ambitions. God will hurl him away violently, like a ball thrown into a wide land. He will die not in the grand tomb he carved but in a foreign country. The chariots he took such pride in will become his shame. &ldquo;I will thrust you from your office, and you will be pulled down from your station.&rdquo; The very things by which Shebna sought to exalt himself &mdash; position, prestige, permanence &mdash; will be stripped away and he will die a displaced man in a far country.",
      "Shebna stands in the text as the embodiment of the spirit Isaiah has been diagnosing throughout the chapter: the person in a position of sacred trust who uses it for self-advancement rather than for the service of God and his people. His fate is a warning to every steward in God&rsquo;s household that the office is never the property of the one who holds it, and that pride in the position is the surest path to losing it.",
    ],
  },
  {
    heading: "Eliakim &mdash; The Peg in a Sure Place",
    reference: "Isaiah 22:20&ndash;25",
    accent: PURPLE,
    paragraphs: [
      "In place of Shebna, God appoints Eliakim son of Hilkiah: &ldquo;In that day I will call my servant Eliakim the son of Hilkiah, and I will clothe him with your robe, and will bind your sash on him, and will commit your authority to his hand. And he shall be a father to the inhabitants of Jerusalem and to the house of Judah.&rdquo; The contrast with Shebna is total. Shebna was called to be a servant and acted as a master; Eliakim is called to the office and described from the outset as a servant and a father.",
      "The central promise to Eliakim is the key of the house of David: &ldquo;And I will place on his shoulder the key of the house of David. He shall open, and none shall shut; and he shall shut, and none shall open.&rdquo; In the ancient palace administration, the keeper of the keys held the authority of access. He decided who entered the royal presence, who received the king&rsquo;s resources, who was admitted to the inner courts. To give Eliakim this key was to give him the stewardship of the entire covenant household.",
      "Eliakim is promised that he will become &ldquo;a peg in a sure place.&rdquo; In antiquity, tent pegs and household pegs were load-bearing fixtures on which the entire weight of a structure depended. The image is of someone so securely established by God that the whole weight of the family, the office, and the household could hang on him &mdash; glory, vessels, cups, flagons, all the treasure of the household. His position would not be self-made but God-given, which is precisely why it would be secure.",
      "The chapter closes on a note of warning even for the faithful Eliakim: the peg that is now in a sure place will someday be cut down and the burden hanging on it will fall. This sobering coda prevents Eliakim from becoming an idol and points beyond any human steward to the one true Holder of the key of David who will never be cut down. The New Testament explicitly applies this language to the risen Christ in Revelation 3:7, making the Eliakim passage one of the most clearly Messianic figures in all of Isaiah.",
    ],
  },
];

const themeBlocks: Block[] = [
  {
    heading: "False Joy in the Hour of Crisis",
    accent: ROSE,
    paragraphs: [
      "The governing tension of Isaiah 22 is between what God is doing and how Jerusalem is responding. God is bringing judgment &mdash; marshaling armies, stripping defenses, opening a door to repentance &mdash; and Jerusalem is throwing a party. The city has misread the mercy of temporary deliverance as vindication of its own cleverness and worthiness. What should have produced trembling produces triumphalism.",
      "This misreading of God&rsquo;s purposes is not limited to ancient Jerusalem. Whenever God grants relief from a consequence of sin, the temptation is to treat the relief as proof that the sin was not serious, or that God has approved the path we were on. Isaiah 22 refuses this interpretation. The turning away of the Assyrian army was not God blessing Jerusalem&rsquo;s self-confidence; it was God extending a final invitation to return to him before the full weight of judgment fell.",
      "The prophetic call &ldquo;weep and mourn&rdquo; versus the people&rsquo;s response &ldquo;let us eat and drink&rdquo; frames the entire chapter as a contrast between two ways of processing suffering and threat. The way of wisdom receives hard providences as the voice of God calling to repentance. The way of foolishness numbs itself with pleasure and tells itself that the crisis has passed. Jerusalem chose the second way, and the result was the declaration that the iniquity could not be atoned.",
    ],
  },
  {
    heading: "Self-Reliance Without God",
    accent: TEAL,
    paragraphs: [
      "Verses 9 through 11 give Isaiah&rsquo;s most concentrated analysis of human self-reliance. The people did everything right by human standards: they inspected the walls, secured the water supply, mobilized the armory. The engineering was sound. But the spiritual orientation was fatal: &ldquo;you did not look to him who did it, or see him who planned it long ago.&rdquo;",
      "Isaiah&rsquo;s indictment is not of competence but of direction. The question is not whether to take prudent precautions but whom one ultimately trusts to provide security. A city that prays and builds walls is following the wisdom of Scripture. A city that builds walls and stops there &mdash; or that builds walls as an alternative to prayer &mdash; has made walls its god.",
      "This theme resonates through the whole of the prophetic tradition. The psalmist declares that the horse is a vain hope for salvation and no one is saved by great strength. Isaiah himself elsewhere promises that those who trust in chariots and horses will stumble, but those who look to the Holy One of Israel will stand. The specific sin of Isaiah 22 is not that Jerusalem had chariots and walls but that she looked at them instead of at the One who alone could give them meaning.",
    ],
  },
  {
    heading: "The Danger of Refusing God&rsquo;s Call to Repentance",
    accent: GOLD,
    paragraphs: [
      "Verses 12 through 14 contain one of the most solemn theological statements in the Hebrew prophets. When God calls to weeping and the people choose feasting, the Lord declares that this iniquity will not be atoned until they die. The permanence of this judgment signals that something qualitatively different has occurred: not the sin of weakness or ignorance but the deliberate rejection of a divine summons that was unmistakably clear.",
      "The phrase &ldquo;let us eat and drink, for tomorrow we die&rdquo; is quoted by Paul in 1 Corinthians 15:32 as the motto of those who deny the resurrection. In its original context it captures the ultimate nihilism of a people who know judgment is coming and respond with despair dressed up as pleasure. If there is no repentance, no God who receives the penitent, then all that is left is to maximize the moment &mdash; a philosophy that Isaiah exposes as not liberation but the final hardening of the heart.",
      "The pastoral implication is weighty: there are moments in the life of a person or a community when God opens a specific door of repentance, and the response to that opening determines the trajectory of what follows. The Puritan writers called these &ldquo;accepted times,&rdquo; seasons of unusual grace when the Spirit draws with peculiar warmth. To refuse such a moment is not to remain neutral but to move in a direction &mdash; away from God and toward the hardness that Isaiah diagnoses in Jerusalem.",
    ],
  },
  {
    heading: "Eliakim as a Type of the Messiah",
    accent: PURPLE,
    paragraphs: [
      "The figure of Eliakim draws together the Messianic threads running through the whole of Isaiah. The key of the house of David that is placed on his shoulder, the authority to open and shut what none can reverse, the role as father to the inhabitants of Jerusalem &mdash; these are too great for any human prime minister to fully bear. Every commentator who reads Eliakim at face value is confronted with the exaggerated weight of the promises.",
      "John the apostle in Revelation 3:7 quotes Isaiah 22:22 and applies it directly and without qualification to the risen Christ: &ldquo;the words of the holy one, the true one, who has the key of David, who opens and no one will shut, who shuts and no one opens.&rdquo; This application is not an allegorical stretch; it is the completion of what Isaiah&rsquo;s language was already straining to say. Eliakim the son of Hilkiah is the type; the Son of God is the antitype.",
      "The contrast between Shebna and Eliakim maps onto the contrast between the unfaithful steward and the faithful one that runs through the New Testament. Jesus tells parables of stewards who abuse their position and those who serve faithfully, with eternal consequences hinging on the difference. Shebna is the type of every leader who uses sacred office for personal glory; Eliakim is the type of the servant-ruler whose authority comes from God and is exercised on behalf of God&rsquo;s people. Christ alone fulfills the type without remainder, the one whose key of David opens the door of salvation that no power in heaven or earth can shut.",
    ],
  },
];

const verseBlocks: Block[] = [
  {
    heading: "Verses 1 to 4: Jerusalem on the Rooftops &mdash; Isaiah in Mourning",
    reference: "Isaiah 22:1&ndash;4",
    accent: ROSE,
    paragraphs: [
      "The chapter opens with the oracular heading: &ldquo;The oracle concerning the Valley of Vision.&rdquo; Jerusalem, city of prophets and kings, is renamed for what it has become in the hour of crisis &mdash; a valley, hemmed in and unable to see. The first question is pointed: &ldquo;What ails you now, that you have gone up, all of you, to the housetops?&rdquo; The rooftops were the vantage point from which watchmen and citizens looked out; here they are filled with a celebrating populace rather than a praying one.",
      "Verses 2 and 3 deliver the prophet&rsquo;s assessment of what he sees. The city is full of tumult and commotion but the slain who lie there were not killed by the sword in honorable battle. The rulers fled without a bow being drawn; they were taken captive as they tried to escape. The apparent deliverance was not a victory &mdash; it was a near miss that revealed how hollow the city&rsquo;s confidence really was. The fleeing leaders and the captured nobles tell the truth that the rooftop celebrations were hiding.",
      "Verse 4 records the prophet&rsquo;s personal response: &ldquo;Therefore I said: Look away from me; let me weep bitterly; do not labor to comfort me concerning the destruction of the daughter of my people.&rdquo; Isaiah refuses to be comforted by the same false comfort that has seized the city. He sees the coming destruction clearly, and his grief is proportional to his vision. The true prophet does not share the mood of the crowd when the crowd&rsquo;s mood is built on illusion.",
    ],
  },
  {
    heading: "Verses 5 to 8: A Day of Tumult &mdash; Defenses Dismantled",
    reference: "Isaiah 22:5&ndash;8",
    accent: PURPLE,
    paragraphs: [
      "The Lord of hosts names the day with three words: tumult, trampling, confusion. Verse 5 describes the scene of war: armies in the valley, battering walls, calling out toward the mountains. The picture is of organized siege warfare advancing against the city of God. Verse 6 names the instruments God has deployed: Elam with its quiver and its horsemen, Kir with its shield. These were foreign nations whose armies were now serving as the rod of God&rsquo;s anger against his own people.",
      "Verse 7 zeros in on the valleys and gates: the choice valleys were full of chariots and horsemen set themselves at the gates. The whole military infrastructure of Judah was being outflanked and surrounded. And then comes the announcement of verse 8 that strikes at the spiritual heart of the matter: &ldquo;He has taken away the covering of Judah.&rdquo; The covering &mdash; the divine protection that had shielded Jerusalem through all the centuries since David &mdash; was being deliberately removed by God himself as an act of judicial withdrawal.",
      "The final notice of verse 8 about the house of the forest adds a detail of bitter irony. The house of the forest was Solomon&rsquo;s great armory, stocked with the weapons of Judah&rsquo;s military might. You looked to the weapons &mdash; all of this magnificent military preparation was now on display and entirely useless. When God removes his covering, the weapons the people trusted become a monument to their misplaced confidence rather than a means of their salvation.",
    ],
  },
  {
    heading: "Verses 9 to 11: Water and Walls but No Prayer",
    reference: "Isaiah 22:9&ndash;11",
    accent: TEAL,
    paragraphs: [
      "Verses 9 through 11 zoom in on the engineering response of Jerusalem&rsquo;s leaders. They saw that the breaches in the wall of the City of David were many. They collected the water of the lower pool. They counted the houses of Jerusalem and broke them down to fortify the wall. They made a reservoir between the two walls for the water of the old pool. The sheer density of detail &mdash; three verses of infrastructure planning &mdash; emphasizes how thorough the human effort was.",
      "The indictment of verse 11 is therefore all the more devastating for the thoroughness of what precedes it: &ldquo;but you did not look to him who did it, or see him who planned it long ago.&rdquo; The word &ldquo;look&rdquo; (Hebrew nabat) is the same root used in Isaiah to describe the act of looking to God in faith. They looked at everything that could be measured, assessed, and built, and did not once look to the God who was the author of the very crisis they were scrambling to manage.",
      "The phrase &ldquo;him who planned it long ago&rdquo; opens a remarkable theological window. The Assyrian crisis did not catch God by surprise and it was not outside his purposes. He had planned it as a summons to his people. The invitation embedded in the crisis was: &ldquo;turn your eyes from your walls and your reservoirs and look to me.&rdquo; Jerusalem never accepted the invitation. She was too busy counting houses.",
    ],
  },
  {
    heading: "Verses 12 to 14: God Called to Mourning; the People Chose Feasting",
    reference: "Isaiah 22:12&ndash;14",
    accent: GOLD,
    paragraphs: [
      "Verse 12 sets out the divine call with four parallel actions: weeping, mourning, baldness, and wearing sackcloth. These were the covenant-stipulated responses to divine judgment &mdash; the bodily postures of repentance and humility before God. The Lord of hosts was calling through the events of the crisis itself, inviting a response that would have been met with mercy.",
      "Verses 13 and 14 record instead the actual response: joy and gladness, killing of oxen, slaughtering of sheep, eating and drinking. The people have heard the implicit message of the crisis and given the wrong answer. Their slogan &mdash; &ldquo;let us eat and drink, for tomorrow we die&rdquo; &mdash; is a piece of deliberate foolishness. It acknowledges the threat and then treats the acknowledgment as a reason not for prayer but for pleasure.",
      "The Lord&rsquo;s response in verse 14 is a divine soliloquy of stunning gravity: &ldquo;Surely this iniquity will not be atoned for you until you die, says the Lord God of hosts.&rdquo; Atoned (Hebrew kipper) is the great covenant word for the covering of sin. The atonement vocabulary reveals what was at stake: not merely a political crisis but the question of whether God would cover Jerusalem&rsquo;s sin with mercy. The answer, given the people&rsquo;s settled refusal to repent, was that the covering was being withdrawn. The iniquity would remain, uncovered and unforgiven, until death.",
    ],
  },
  {
    heading: "Verses 15 to 19: Shebna the Self-Serving Steward",
    reference: "Isaiah 22:15&ndash;19",
    accent: GREEN,
    paragraphs: [
      "The word &ldquo;thus says the Lord God of hosts&rdquo; introduces a personal oracle against Shebna. The charge is delivered in the form of a question: &ldquo;What have you to do here, and whom do you have here, that you have cut out here a tomb for yourself, you who cut out a tomb on the height and carve a dwelling for yourself in the rock?&rdquo; The threefold repetition of &ldquo;here&rdquo; is sarcastic &mdash; what claim do you have to this city, this people, this place? You are a steward, not the master.",
      "The judgment speech of verses 17 and 18 is vivid and physical. God will hurl Shebna away with a strong throw and wind him up tightly like a ball thrown into a wide land. He will die there and the chariots he was so proud of will become his shame rather than his glory. The man who had carved permanence for himself in rock would find himself discarded like something thrown from a sling. The great tomb would stand empty while Shebna died abroad in obscurity.",
      "Verse 19 states the formal sentence: &ldquo;I will thrust you from your office, and you will be pulled down from your station.&rdquo; Two Hebrew words mark the reversal &mdash; the office of steward and the station of honor. Both will be taken. What Shebna had built through ambition and positioned through political skill would be dismantled in a moment by the word of the Lord of hosts. The steward who made himself master had forgotten whose house he was managing.",
    ],
  },
  {
    heading: "Verses 20 to 25: Eliakim and the Key of the House of David",
    reference: "Isaiah 22:20&ndash;25",
    accent: PURPLE,
    paragraphs: [
      "The new appointment is announced with the honorific title that Shebna had forfeited: &ldquo;my servant Eliakim.&rdquo; God dresses him in the robe and sash of authority, invests him with the power of the office, and declares the purpose of his appointment: &ldquo;he shall be a father to the inhabitants of Jerusalem and to the house of Judah.&rdquo; The contrast with Shebna could not be sharper. Shebna used the office for himself; Eliakim will use it for the people. Shebna was a self-serving steward; Eliakim will be a father.",
      "Verse 22 delivers the central promise: &ldquo;And I will place on his shoulder the key of the house of David. He shall open, and none shall shut; and he shall shut, and none shall open.&rdquo; The key on the shoulder was the literal emblem of the chief steward&rsquo;s authority in the ancient palace. To carry the key was to have the power of access &mdash; to the treasury, the royal chambers, the resources of the household. The irrevocability of the promise &mdash; what he opens none shall shut, what he shuts none shall open &mdash; exceeds what could be said of any mere administrator. It points beyond Eliakim to the one whose authority over the household of God is ultimate.",
      "Verse 23 promises that Eliakim will be a peg fastened in a sure place, on which the whole weight of his father&rsquo;s household will hang &mdash; offspring, issue, small vessels and large vessels alike. The closing verses acknowledge that even this peg will eventually be cut down: &ldquo;the peg that was fastened in a sure place will give way.&rdquo; No human fulfillment of the type is final. The peg of David&rsquo;s household that will never give way is the one named in Revelation 3:7 &mdash; the holy and true one who holds the key of David in resurrection power, the one who was cut down in death and raised so that his authority would never again be cut down or taken away.",
    ],
  },
];

const applicationBlocks: Block[] = [
  {
    heading: "Respond to God&rsquo;s Warnings with Repentance, Not Revelry",
    accent: ROSE,
    paragraphs: [
      "Isaiah 22 confronts us with one of the most uncomfortable questions a person or community can face: When God is calling us to repentance, what are we actually doing? Jerusalem had clear signs &mdash; military crisis, divine warnings through the prophet, the memory of the covenant curses for unfaithfulness &mdash; and she threw a party. The party was not neutral; it was the decisive rejection of the invitation God extended.",
      "The application is not that Christians should be uniformly somber or that celebration is sinful. The application is about timing and orientation: what does this present moment require? When God is calling through difficult providences &mdash; illness, loss, failure, national upheaval &mdash; the first question is not &ldquo;how do I get past this?&rdquo; but &ldquo;what is God saying in this?&rdquo; Isaiah 22 presses us to develop the spiritual alertness to hear the invitation embedded in hardship and to respond before the door closes.",
      "The declaration in verse 14 &mdash; that this iniquity would not be atoned until death &mdash; is a warning about seasons of grace. The Spirit does not always strive with us indefinitely. There are moments when God&rsquo;s invitation is especially clear and the right response is of eternal consequence. The prayer this passage generates is one of humble attentiveness: Lord, if you are calling me to repent of something now, give me the grace to hear and to respond rather than to distract myself with lesser things.",
    ],
  },
  {
    heading: "The Danger of Self-Reliance Without God",
    accent: TEAL,
    paragraphs: [
      "The engineering scene of verses 9 through 11 speaks directly to the modern soul. We live in an era of unprecedented tools for managing risk: financial instruments, medical technology, security systems, political structures. None of these are evil. The sin Isaiah diagnoses is not competence but the substitution of competence for dependence on God. Jerusalem did not fail to plan; she failed to pray. She counted the houses and missed the Maker.",
      "This diagnosis asks hard questions of our personal lives: Where are my reservoirs? What am I counting on to provide security that I have not first brought before God? The pattern of Isaiah 22 suggests that God sometimes allows the very structures we trust to be exposed as insufficient &mdash; not because he is cruel but because he is calling us back to himself as our only true security. The walls that fall, the savings that evaporate, the health that fails can all be invitations to look to the One who planned it long ago.",
      "Building from a posture of dependence looks different than building from a posture of self-sufficiency. The practically obedient response to Isaiah 22 is not to stop taking prudent steps but to ensure that every prudent step is taken in prayerful dependence &mdash; that our eyes are on the Maker even as our hands are on the tools. The reservoir built in prayer is a very different thing from the reservoir built as a substitute for prayer.",
    ],
  },
  {
    heading: "The Messianic Hope of the Key of David",
    accent: PURPLE,
    paragraphs: [
      "The figure of Eliakim and the key of David ultimately points every reader toward Christ. In a chapter full of failure &mdash; Jerusalem&rsquo;s festive sin, Shebna&rsquo;s self-serving ambition, Judah&rsquo;s misplaced trust &mdash; the promise of Eliakim breaks through as a shaft of light. God will not abandon his household. He will provide a faithful steward. And behind the faithful human steward stands the ultimate faithful Servant-Son who holds the key of David with resurrection authority.",
      "Revelation 3:7 takes the language of Isaiah 22:22 and applies it to Christ in his address to the church at Philadelphia: &ldquo;The words of the holy one, the true one, who has the key of David, who opens and no one will shut, who shuts and no one opens.&rdquo; Christ is the one the type was always straining toward. He is the faithful Servant who used his office not for self-enrichment but to lay down his life. He is the Peg that was cut down in death and raised again so that the burden of his household &mdash; every believer who hangs on him by faith &mdash; will never fall.",
      "The practical comfort of this application is immense. We live in the era between the times, between Eliakim&rsquo;s type and the full manifestation of what Christ&rsquo;s key will open at the last day. In that time, we are not left without a steward. The key of David is on the shoulders of the risen Christ, and every door he opens for his people &mdash; access to the Father, entry into the throne room of grace, the final entry into the new creation &mdash; is opened with an authority no power in heaven or earth can reverse. Where Christ opens, none can shut.",
    ],
  },
  {
    heading: "Serving God&rsquo;s People Rather Than Building Your Own Legacy",
    accent: GOLD,
    paragraphs: [
      "Shebna is a portrait of a person in a position of spiritual authority who has confused the office with his own importance. He was managing God&rsquo;s household but he was spending his energy carving his own tomb &mdash; securing his own legacy, impressing his own name on the rock for posterity. The rebuke God delivers through Isaiah is not that Shebna failed at administration; it is that he used the administration for himself.",
      "The question Shebna&rsquo;s story presses on every leader, teacher, pastor, parent, or steward of any kind is this: whose house am I building? The Shebna spirit is present whenever we use positions of trust to advance our own reputation, accumulate our own following, or secure our own comfort. The Eliakim spirit is present whenever we use the office as a father uses a household &mdash; for the sake of those entrusted to our care, not for our own enrichment.",
      "The contrast between the two stewards also illuminates the path of renewal for anyone who recognizes the Shebna spirit in themselves. Isaiah 22 does not end with Shebna; it ends with Eliakim. God is not without a faithful servant. He calls, clothes, and commissions servants who will use his household for his purposes. The invitation is to cross from the Shebna pattern to the Eliakim pattern &mdash; from self-serving stewardship to servant leadership &mdash; and to find in Christ the model of the One who came not to be served but to serve.",
    ],
  },
];

const reflectionQuestions = [
  "Is there a current hardship or warning in your life that God may be using to call you to repentance or deeper dependence on him? How are you responding to that call &mdash; with the sackcloth of honest reckoning or the feast of distraction?",
  "Where do you find yourself counting your own reservoirs and walls while neglecting to look to the One who planned your circumstances long ago? What would it mean to build with the same energy but with your eyes on the Maker?",
  "In your current roles and responsibilities &mdash; at work, at home, at church &mdash; which spirit is more present: Shebna&rsquo;s drive to carve out a legacy for yourself, or Eliakim&rsquo;s posture as a servant and father to those in your care?",
  "The key of David belongs to the risen Christ, who opens what none can shut and shuts what none can open. How would living under that authority &mdash; trusting his access to the Father, his power over circumstance, his final opening of the kingdom &mdash; change the way you face uncertainty today?",
  "Isaiah 22:14 warns that there are moments when God&rsquo;s call to repentance is unmistakably clear and the response to that call is of lasting consequence. Have you sensed such a moment recently? What does faithfulness look like in responding to it?",
];

const videoItems = [
  { videoId: "mT4wK9bXrL2", title: "Isaiah 22 - The Valley of Vision and Jerusalem&rsquo;s Faithlessness" },
  { videoId: "nY7pZ3cQsD8", title: "God&rsquo;s Call to Weep: Repentance vs. Revelry in Isaiah 22" },
  { videoId: "hJ6vB2dNqE5", title: "Shebna and Eliakim - The Two Stewards of Isaiah 22" },
  { videoId: "kR9wC4fMtG1", title: "The Key of David - Eliakim as a Type of Christ (Isaiah 22 and Revelation 3)" },
];

function BlockView({ block }: { block: Block }) {
  return (
    <section style={{ marginBottom: "2.75rem" }}>
      <h3
        style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 6px", color: TEXT }}
        dangerouslySetInnerHTML={{ __html: block.heading }}
      />
      {block.reference && (
        <div
          style={{ color: block.accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.1rem" }}
          dangerouslySetInnerHTML={{ __html: block.reference }}
        />
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", borderLeft: `3px solid ${block.accent}55`, paddingLeft: "1.25rem" }}>
        {block.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Isaiah22GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${PURPLE}22`, color: PURPLE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Isaiah Chapter 22
          </h1>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", color: TEXT, lineHeight: 1.6, margin: "0 0 1rem", fontWeight: 600 }}>
            The Valley of Vision &mdash; Jerusalem&rsquo;s Faithlessness and the Key of David
          </p>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.1rem)", color: MUTED, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;And I will place on his shoulder the key of the house of David. He shall open, and none shall shut; and he shall shut, and none shall open.&rdquo; &mdash; Isaiah 22:22" }}
          />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1rem", paddingTop: "0.5rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? PURPLE : BORDER}`,
                background: activeTab === t ? PURPLE : CARD,
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

        {activeTab === "Overview" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Overview of Isaiah 22</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 22 is among the most searching chapters in all of the prophetic literature &mdash; an oracle addressed not to a foreign nation but to Jerusalem herself, the city of God&rsquo;s own choosing. In the shadow of the Assyrian crisis that dominates Isaiah 1 through 39, God calls his people to weep and repent, and they respond by feasting and celebrating. The chapter moves from the city&rsquo;s rooftop revelry (vv. 1&ndash;4), through the military disaster being prepared (vv. 5&ndash;11), to the solemn declaration that this people&rsquo;s sin will not be atoned (vv. 12&ndash;14), and then to the personal oracle against Shebna and the appointment of Eliakim with the key of the house of David (vv. 15&ndash;25) &mdash; a promise that carries unmistakable Messianic freight." }}
            />
            {overviewBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Key Themes" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Key Themes</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Four major themes run through Isaiah 22 and give the chapter its remarkable theological density. The contrast between false joy and genuine repentance exposes what it means to misread God&rsquo;s purposes. The diagnosis of self-reliance in the face of divine invitation cuts to the heart of human pride. The solemn warning about refusing God&rsquo;s call confronts the danger of hardened hearts. And the Messianic promise embedded in Eliakim&rsquo;s appointment lifts the reader&rsquo;s eyes toward the one Steward whose key no power can wrest away." }}
            />
            {themeBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Verse by Verse" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Verse by Verse</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Walking through Isaiah 22 section by section reveals a tightly structured movement from diagnosis to judgment, from individual rebuke to Messianic promise. The prophet&rsquo;s own grief (v. 4) and the Lord&rsquo;s own declaration (v. 14) frame the whole as a meditation on what it means when God calls and his people refuse to hear." }}
            />
            {verseBlocks.map((b) => <BlockView key={b.heading} block={b} />)}
          </div>
        )}

        {activeTab === "Application" && (
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, margin: "0 0 1.5rem" }}>Application</h2>
            <p
              style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: "0 0 2.25rem" }}
              dangerouslySetInnerHTML={{ __html: "Isaiah 22 is not a chapter about Assyrians and ancient politics. It is a chapter about the posture of the human heart before God in crisis &mdash; and it cuts across every generation with equal force. It asks whether we are the kind of people who hear God&rsquo;s invitations through hardship, or whether we drown them out with noise and feasting. It asks whose house we think we are building. And it ultimately points us to the one faithful Servant who holds the key of David and opens what none can shut." }}
            />
            {applicationBlocks.map((b) => <BlockView key={b.heading} block={b} />)}

            <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${GOLD}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
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
          </div>
        )}

        <section style={{ marginTop: "3.5rem", borderTop: `1px solid ${BORDER}`, paddingTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, margin: "0 0 8px" }}>Video Teaching</h2>
          <p
            style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}
            dangerouslySetInnerHTML={{ __html: "Go deeper into Isaiah 22 with these video teachings on the Valley of Vision, Jerusalem&rsquo;s faithlessness, the two stewards Shebna and Eliakim, and the Messianic key of David that points forward to Christ in Revelation 3:7." }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Key of David Belongs to Christ</h3>
          <p
            style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: "Isaiah 22 ends not in judgment but in hope. Behind every faithless steward God raises a faithful one. Behind the figure of Eliakim stands the one greater than Eliakim &mdash; the risen Christ who holds the key of David, who opens and none can shut, who shuts and none can open. He is the Peg fastened in a sure place that will never be cut down, the one on whom every soul that hangs by faith in him is held secure through death and resurrection into eternal life." }}
          />
        </div>
      </main>
    </div>
  );
}
