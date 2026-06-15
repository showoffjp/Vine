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

const ACCENT = GREEN;

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
  "Application",
] as const;
type Tab = (typeof TABS)[number];

interface Block {
  heading: string;
  reference: string;
  paragraphs: string[];
}

interface TabContent {
  id: Tab;
  intro: string;
  blocks: Block[];
}

const tabContent: TabContent[] = [
  {
    id: "Overview",
    intro:
      "Isaiah 5 opens with a tender love song that turns, without warning, into a courtroom indictment and a thunderclap of judgment. A vineyard lovingly planted yields only wild grapes, and the gardener who lavished every care upon it now asks what more he could possibly have done.",
    blocks: [
      {
        heading: "A Love Song With a Sting",
        reference: "Isaiah 5:1&ndash;2",
        paragraphs: [
          "The chapter begins disarmingly: &ldquo;Let me sing for my beloved my love song concerning his vineyard.&rdquo; Isaiah takes up the posture of a friend of the bridegroom, singing on behalf of his beloved. The original hearers, gathered perhaps at a harvest festival, would have leaned in expecting a song of romance and abundance. The prophet uses the familiar imagery of love poetry to draw the crowd close before the trap is sprung.",
          "The owner of the vineyard spares no expense. He plants it &ldquo;on a very fertile hill,&rdquo; literally a horn of oil, the choicest and richest of soils. He digs it and clears it of stones, the backbreaking labor of preparing rocky Judean ground for cultivation. Then he plants it with the choicest vines, the very best stock available, leaving no excuse for failure.",
          "He goes further still, building a watchtower in the midst of it and hewing out a wine vat. The watchtower signals that he intends to guard and protect it; the wine vat signals his confident expectation of a vintage. Every detail communicates investment, intention, and hope. This is no casual planting but the careful work of one who loves what he has made and fully expects it to flourish.",
          "And then the song darkens in a single devastating line: &ldquo;he looked for it to yield grapes, but it yielded wild grapes.&rdquo; The Hebrew word beushim suggests stinking, rotten, worthless fruit, the sour and useless berries of a wild vine. Everything had been provided; the only thing lacking was the fruit itself. The contrast between lavish care and worthless return sets the whole chapter in motion.",
        ],
      },
      {
        heading: "What More Could I Have Done?",
        reference: "Isaiah 5:3&ndash;4",
        paragraphs: [
          "Now the singer turns and addresses the audience directly, and the song becomes a trial. &ldquo;And now, O inhabitants of Jerusalem and men of Judah, judge between me and my vineyard.&rdquo; The hearers, who had been enjoying a pleasant ballad, are suddenly summoned as jurors. The rhetorical move is brilliant: they will pronounce the verdict before they realize the verdict falls on themselves.",
          "The owner poses the question that hangs over the entire chapter: &ldquo;What more was there to do for my vineyard, that I have not done in it?&rdquo; It is an unanswerable question. The hearers cannot name a single further provision the owner ought to have made. The fault cannot lie with the gardener, the soil, the vines, or the protection. The fault lies entirely in the fruit.",
          "This question reframes the entire relationship between God and his people. The God of Israel is not a negligent or absent landlord but a tireless, generous keeper who has poured out every blessing. He gave the land, the law, the prophets, the covenants, and his own abiding presence. When his people fail to bear righteous fruit, the failure is theirs alone, never his.",
          "The owner then asks a second question that pivots from past care to coming consequence: &ldquo;Why, when I looked for it to yield grapes, did it yield wild grapes?&rdquo; The repetition drives home the bewildering wrongness of the outcome. Love met with rejection, investment met with ruin. The stage is now set for the owner to declare what he will do with a vineyard that has betrayed his every hope.",
        ],
      },
      {
        heading: "The Verdict Pronounced",
        reference: "Isaiah 5:5&ndash;7",
        paragraphs: [
          "The owner announces his sentence. &ldquo;I will remove its hedge, and it shall be devoured; I will break down its wall, and it shall be trampled down.&rdquo; The very protections that distinguished this vineyard as cherished and secure will be stripped away. Without its hedge and wall, the vineyard lies open to every beast and every passing foot. The judgment is not the addition of harm but the withdrawal of protective grace.",
          "&ldquo;I will make it a waste; it shall not be pruned or hoed, and briers and thorns shall grow up.&rdquo; The garden will revert to wilderness, choked with thorns, the ancient sign of a land under curse. Most strikingly, the owner adds, &ldquo;I will also command the clouds that they rain no rain upon it.&rdquo; Only the LORD himself can command the clouds, and here the song quietly reveals that the beloved owner is God.",
          "Then the parable is unveiled with unmistakable clarity: &ldquo;For the vineyard of the LORD of hosts is the house of Israel, and the men of Judah are his pleasant planting.&rdquo; The crowd that agreed to judge the vineyard now hears that they are the vineyard. The pleasant planting of God has become a disappointment, and the verdict they would have pronounced upon another falls squarely upon themselves.",
          "The verse climaxes in two of the most famous wordplays in all of Scripture. God &ldquo;looked for justice (mishpat), but behold, bloodshed (mispach); for righteousness (tsedaqah), but behold, an outcry (tseaqah).&rdquo; The sound of the right word and the sound of the wrong word are nearly identical, separated by a single letter, yet a world apart in meaning. God expected the fruit of a just society and found instead violence and the cry of the oppressed.",
        ],
      },
    ],
  },
  {
    id: "Key Themes",
    intro:
      "Beneath the vivid imagery, Isaiah 5 develops a handful of themes that echo across the whole of Scripture: the loving investment of God, the demand for fruit, the meaning of justice and righteousness, and the terrible logic by which a people who reject light are given over to darkness.",
    blocks: [
      {
        heading: "The Vineyard Across Scripture",
        reference: "Psalm 80; Isaiah 27; John 15",
        paragraphs: [
          "The image of Israel as God&rsquo;s vineyard is woven throughout the Bible, and Isaiah 5 stands at the center of that tapestry. Psalm 80 pleads with God to remember the vine he brought out of Egypt and planted in the land, whose walls have now been broken down. Isaiah himself returns to the image in chapter 27 with a song of redemption, where God keeps his vineyard night and day and promises that Jacob will take root and fill the world with fruit.",
          "Jesus deliberately takes up this same imagery in his parable of the wicked tenants in Matthew 21:33&ndash;46. He describes a man who planted a vineyard, put a fence around it, dug a winepress, and built a tower, echoing Isaiah 5 almost word for word. But where Isaiah indicts the vineyard for bad fruit, Jesus indicts the tenants for killing the owner&rsquo;s servants and finally his son, pointing directly at himself.",
          "The richest fulfillment comes in John 15, where Jesus declares, &ldquo;I am the true vine, and my Father is the vinedresser.&rdquo; Where national Israel failed to bear fruit, Jesus is the faithful vine who never disappoints the Father. Believers, grafted into him by faith, become the branches who finally bear the fruit that Isaiah&rsquo;s vineyard could not. Apart from him we can do nothing; abiding in him, we bear much fruit.",
          "This trajectory transforms Isaiah 5 from a tale of bare judgment into a chapter pregnant with hope. The vineyard that fails in Isaiah 5 is not God&rsquo;s final word. Through the true vine, the Father at last receives the harvest of justice and righteousness he sought all along, and the cleared, watered, and tended people of God finally yield the vintage of his love.",
        ],
      },
      {
        heading: "Justice and Righteousness",
        reference: "Isaiah 5:7",
        paragraphs: [
          "At the heart of the chapter stand two words that Isaiah pairs again and again: justice (mishpat) and righteousness (tsedaqah). Justice is the practice of fair judgment and right treatment, especially of the weak and vulnerable. Righteousness is the quality of life lived in faithful conformity to God&rsquo;s covenant character. Together they describe a community ordered by the will of God toward the good of all its members.",
          "These are the grapes the owner expected from his vineyard. God did not plant Israel merely to enjoy religious ceremony but to embody his own character before the watching nations. A people clothed in justice and righteousness would be a light, a witness, and a blessing. The fruit God seeks is never abstract; it is measured in how the powerful treat the powerless and how the whole society reflects his heart.",
          "The famous Hebrew wordplay seals the indictment with bitter irony. Instead of mishpat there was mispach, bloodshed; instead of tsedaqah there was tseaqah, the outcry of the victimized. The words almost rhyme, as if the people had aimed at the right target and missed by an inch, producing a grotesque counterfeit. What looked from a distance like a covenant society was, on closer hearing, a den of violence and oppression.",
          "This pairing of justice and righteousness becomes a refrain through Isaiah and the prophets. God will not be satisfied by sacrifices, festivals, and crowded assemblies if they are not matched by just and righteous lives. The vineyard parable insists that worship divorced from justice is worthless fruit, stinking grapes that the owner of the vineyard cannot abide.",
        ],
      },
      {
        heading: "The Structure of the Woes",
        reference: "Isaiah 5:8&ndash;23",
        paragraphs: [
          "Following the song, Isaiah delivers a series of six woe oracles, a recognizable prophetic form. The Hebrew word translated &ldquo;woe&rdquo; is a cry of grief and alarm, the sound made over the dead, and it announces both lament and impending doom. Each woe names a specific sin that constitutes the wild grapes of the vineyard, giving concrete shape to the failure of justice and righteousness.",
          "These six woes function as the bill of particulars in God&rsquo;s lawsuit against his people. They move from sins of greed and excess to sins of arrogance and corruption, exposing how every layer of society had turned from the owner&rsquo;s purposes. Taken together they paint a portrait of a nation drunk on its own appetites, blind to its own evil, and confident in its own wisdom.",
          "The woe form is not mere scolding; it is a summons to grief. Isaiah wants his hearers to feel the funeral atmosphere hanging over a people who have forsaken their God. Each woe is a tolling bell, announcing that the trajectory of sin leads inevitably to death. To hear the woes rightly is to be moved not to defensiveness but to repentance.",
          "Significantly, the woes are addressed to the prosperous and the powerful, the very people who imagined themselves secure. Prophetic woe pierces the illusion that wealth, pleasure, and influence place a person beyond the reach of God&rsquo;s judgment. The vineyard that thought itself flourishing is in fact on the verge of being handed over to ruin.",
        ],
      },
      {
        heading: "Light and Darkness Inverted",
        reference: "Isaiah 5:20",
        paragraphs: [
          "The fourth woe names a sin that lies beneath all the others: &ldquo;Woe to those who call evil good and good evil, who put darkness for light and light for darkness, who put bitter for sweet and sweet for bitter.&rdquo; This is moral inversion, the deliberate scrambling of the categories God established at creation. It is the attempt to redefine reality so that sin may be embraced without shame.",
          "This inversion is the deepest corruption because it disables the very capacity to repent. As long as a person can call evil what it is, conscience can still do its work and grace can still find a foothold. But when a society relabels its evils as goods, it severs the line that would lead it home. Darkness called light becomes a darkness that no longer knows it is dark.",
          "Isaiah pairs this woe closely with the fifth: &ldquo;Woe to those who are wise in their own eyes, and shrewd in their own sight.&rdquo; The two go hand in hand. It takes a certain self-confident cleverness to overturn the moral order and feel justified in doing so. Pride in one&rsquo;s own wisdom is the engine that drives the redefinition of good and evil.",
          "The relevance of this woe to every age is plain. Cultures perennially rebrand their sins with flattering names and shame those who refuse to play along. Isaiah&rsquo;s warning stands as a permanent guardrail: the people of God must keep their definitions of good and evil anchored in God&rsquo;s word, not in the shifting verdicts of a society wise in its own eyes.",
        ],
      },
    ],
  },
  {
    id: "Verse by Verse",
    intro:
      "After the song and its verdict, Isaiah lays out six woes and then the gathering storm of judgment. Walking through them in order shows how the abstract charge of bad fruit is filled in with the concrete sins of a real and recognizable society.",
    blocks: [
      {
        heading: "The First and Second Woes",
        reference: "Isaiah 5:8&ndash;17",
        paragraphs: [
          "The first woe falls on greed: &ldquo;Woe to those who join house to house, who add field to field, until there is no more room.&rdquo; This is the relentless accumulation of land by the powerful, swallowing up the inheritances of small farmers until the wealthy dwell alone in the midst of the land. It violates the covenant vision in which every family held its own portion as a gift from God. The judgment fits the crime: those grasping houses will be left desolate, and ten acres of vineyard will yield only a single bath of wine.",
          "The second woe falls on those who &ldquo;rise early in the morning, that they may run after strong drink, who tarry late into the evening as wine inflames them.&rdquo; Here is a life organized entirely around pleasure and intoxication, with lyre, tambourine, and wine at their feasts. The tragedy is not merely indulgence but blindness: &ldquo;they do not regard the deeds of the LORD, or see the work of his hands.&rdquo; Consumed by appetite, they are oblivious to the God who stands behind all things.",
          "The consequence is exile born of ignorance: &ldquo;Therefore my people go into exile for lack of knowledge.&rdquo; A people too busy feasting to perceive God will be carried off, and Sheol itself opens wide its mouth to swallow the revelers in their pomp. The proud are brought low and humbled, while the LORD of hosts is exalted in justice. Where flocks once grazed in ruined estates, the reversal of fortunes is complete.",
          "These first two woes target the appetites of the comfortable: the hunger for more land and the thirst for more pleasure. Both reveal hearts that treat the gifts of God as ends in themselves and the giver of those gifts as irrelevant. The vineyard of God was meant to be a community of shared blessing and grateful worship; instead it had become a scramble for property and a haze of indulgence.",
        ],
      },
      {
        heading: "The Third and Fourth Woes",
        reference: "Isaiah 5:18&ndash;20",
        paragraphs: [
          "The third woe exposes those who &ldquo;draw iniquity with cords of falsehood, who draw sin as with cart ropes.&rdquo; The image is vivid and almost comic: people harnessing themselves to their sin like draft animals, dragging it along with deliberate effort. Sin here is not a sudden stumble but a chosen burden, hauled willingly through life. These are people who have made a project of their wrongdoing.",
          "Their defiance is captured in their mocking demand: &ldquo;Let him be quick, let him speed his work that we may see it; let the counsel of the Holy One of Israel draw near, and let it come, that we may know it.&rdquo; They taunt God to make good on his threats, scoffing at the very idea of judgment. It is the sneer of hardened unbelief that dares the Almighty to act, certain in its heart that he never will.",
          "The fourth woe is the great inversion already noted: &ldquo;Woe to those who call evil good and good evil, who put darkness for light and light for darkness, who put bitter for sweet and sweet for bitter.&rdquo; Having dragged their sin into the open and dared God to judge it, they now rewrite the dictionary of morality so their sin appears as virtue. The corruption of action is completed by the corruption of language and conscience.",
          "Together these two woes trace a downward spiral. First sin is chosen and hauled along; then judgment is mocked; then evil itself is renamed as good. Each step hardens the heart further against the very possibility of repentance. The people are not drifting into ruin by accident but marching toward it with their eyes deliberately closed.",
        ],
      },
      {
        heading: "The Fifth and Sixth Woes",
        reference: "Isaiah 5:21&ndash;23",
        paragraphs: [
          "The fifth woe is brief and piercing: &ldquo;Woe to those who are wise in their own eyes, and shrewd in their own sight.&rdquo; This is the pride of self-sufficient cleverness, the conviction that one needs no instruction from God and no correction from his word. It is the spiritual root from which the inversion of good and evil grows, for only those certain of their own wisdom would dare to overturn the moral order.",
          "The sixth woe returns to the theme of drink but adds the bitter fruit of corrupt justice: &ldquo;Woe to those who are heroes at drinking wine, and valiant men in mixing strong drink.&rdquo; Isaiah mocks the perverse heroism of a culture that celebrates its champions of intoxication. These are not warriors valiant in battle but men who win their victories at the banquet table, their courage measured by how much they can consume.",
          "Their drunkenness is tied directly to injustice: they &ldquo;acquit the guilty for a bribe, and deprive the innocent of his right.&rdquo; The very justice that God planted his vineyard to produce has been sold to the highest bidder. Judges drunk on wine and greedy for bribes overturn the verdicts of heaven, freeing the wicked and condemning the righteous. Here the failure of mishpat and tsedaqah reaches the courts themselves, where it does the most damage.",
          "With this final woe the indictment is complete. From the greedy landgrabber to the drunken pleasure-seeker, from the defiant sinner to the inverter of morality, from the self-wise to the corrupt judge, every part of the vineyard has yielded wild grapes. The bill of particulars is read in full, and nothing remains but the sentence to be carried out.",
        ],
      },
      {
        heading: "The Gathering Storm",
        reference: "Isaiah 5:24&ndash;30",
        paragraphs: [
          "The judgment now bursts forth in fire and fury. &ldquo;As the tongue of fire devours the stubble, and as dry grass sinks down in the flame, so their root will be as rottenness, and their blossom go up like dust.&rdquo; The reason is stated plainly: &ldquo;they have rejected the law of the LORD of hosts, and have despised the word of the Holy One of Israel.&rdquo; The wild grapes spring from a rejected word. So the anger of the LORD is kindled, his hand is stretched out, and the mountains quake.",
          "Then Isaiah unveils the instrument of judgment: &ldquo;He will raise a signal for nations far away, and whistle for them from the ends of the earth.&rdquo; God summons a distant empire as easily as a shepherd whistles for his dog. The foreign nation comes at his bidding, an unwitting agent of divine purpose. This is one of the great prophetic insights, that the LORD wields even pagan armies to accomplish his holy will against his own wayward people.",
          "The approaching army is described with terrifying speed and discipline: &ldquo;none is weary, none stumbles, none slumbers or sleeps.&rdquo; Their arrows are sharp, their bows bent, their horses&rsquo; hooves like flint, and their wheels like the whirlwind. Their roaring is &ldquo;like the roaring of the sea,&rdquo; an unstoppable tide bearing down on the land. The vineyard whose hedge has been removed now lies exposed to this devouring flood.",
          "The chapter closes in deepening gloom: &ldquo;and if one looks to the land, behold, darkness and distress; and the light is darkened by its clouds.&rdquo; The people who called darkness light are now plunged into literal darkness. The bright harvest festival where the song began has ended in shadow and dread. Yet even here, in the unrelieved darkness of chapter 5, the reader is meant to long for a light that Isaiah will soon promise, the great light that will dawn on those who walk in darkness.",
        ],
      },
    ],
  },
  {
    id: "Application",
    intro:
      "Isaiah 5 was preached to ancient Judah, but its searching questions reach every reader. The God who planted a vineyard still looks for fruit, still desires justice and righteousness, and still calls his people to examine whether their lives yield the harvest he seeks.",
    blocks: [
      {
        heading: "Examine the Fruit",
        reference: "Isaiah 5:1&ndash;4",
        paragraphs: [
          "The owner&rsquo;s question, &ldquo;What more was there to do for my vineyard?&rdquo; turns the spotlight on every recipient of God&rsquo;s grace. We too have been planted on fertile ground, cleared, tended, and given every spiritual advantage. The honest question is whether our lives are yielding the fruit that such care should produce, or whether we are returning sour grapes for lavish love.",
          "It is striking that the vineyard had everything it needed and still failed. Privilege is no guarantee of fruitfulness; in fact, the greater the blessing, the greater the accountability. A church, a family, or an individual richly supplied with Scripture, teaching, and the means of grace can still bear nothing if the heart is not surrendered to God. Fruitfulness is the true test, not the abundance of our resources.",
          "Jesus presses this same point when he says, &ldquo;By their fruit you will know them,&rdquo; and when he curses a fig tree that bore only leaves. The Christian life is not measured by appearances or activity but by the genuine fruit of the Spirit and the fruit of justice and righteousness in how we live. We are invited to take an honest inventory, asking whether our private and public lives match the care God has shown us.",
          "Crucially, the chapter drives us beyond self-effort to the true vine. We cannot manufacture good fruit by trying harder, for the problem lies in the root. Only by being grafted into Christ and abiding in him can our barren branches bear the vintage God desires. The right response to the owner&rsquo;s question is not despair but a flight to the vine in whom alone we can be fruitful.",
        ],
      },
      {
        heading: "Pursue Justice and Righteousness",
        reference: "Isaiah 5:7",
        paragraphs: [
          "If justice and righteousness are the grapes God seeks, then his people cannot be content with private piety while ignoring the cry of the oppressed. Isaiah refuses to let worship and justice be separated. The same God who desires our songs and prayers desires that we treat the vulnerable with fairness and defend the rights of those who have no voice.",
          "This challenges every tendency to reduce faith to ritual and feeling. A community may have lively worship and sound doctrine and still produce wild grapes if it tolerates oppression, exploitation, and indifference to the weak. The wordplay of mishpat and mispach warns us how easily the genuine article is replaced by a near-counterfeit that misses the mark by a single, fatal step.",
          "Practically, this means asking where the cry of the outcry, the tseaqah, may be sounding around us, and whether we are contributing to it or silencing it. It means examining how we treat employees, neighbors, strangers, and the poor. The fruit God seeks is concrete and measurable in the everyday decisions that either honor or harm the people around us.",
          "The gospel deepens rather than dilutes this call. Having been shown infinite mercy by God, we become channels of his justice and righteousness to others. The vine into which we are grafted is the very Servant who will, Isaiah later promises, bring forth justice to the nations. To abide in him is to be drawn into his passion for a world set right.",
        ],
      },
      {
        heading: "Guard Against Inversion",
        reference: "Isaiah 5:20&ndash;21",
        paragraphs: [
          "The woe against calling evil good and good evil is perhaps the most urgent for any age that prides itself on its own enlightenment. The temptation to rename our sins with flattering labels, and to shame those who still call them sins, is perennial. Isaiah warns that this inversion is not a minor error but a spiritual catastrophe, for it disables the conscience and blocks the path to repentance.",
          "Guarding against inversion requires keeping our definitions of good and evil anchored in God&rsquo;s unchanging word rather than the shifting moods of the culture. It calls for humility over against being wise in our own eyes, a readiness to receive correction from Scripture even when it cuts across our preferences. The self-confident cleverness that overturns the moral order is precisely the pride that precedes destruction.",
          "This is not a call to harshness but to clarity married to love. We are to hold fast to God&rsquo;s categories of light and darkness while extending his mercy to those caught in the dark, remembering that we too were once blind. The aim is never self-righteous condemnation but the recovery of truth that makes genuine grace possible.",
          "In our own hearts, the same vigilance is needed. We are skilled at justifying our private compromises, putting sweet for bitter when it suits us. Regular, honest confession in the light of Scripture keeps us from the slow drift in which darkness is gradually mistaken for light, and it keeps the door of repentance open and unobstructed.",
        ],
      },
      {
        heading: "Questions for Reflection",
        reference: "Isaiah 5 as a Whole",
        paragraphs: [
          "First, consider the care God has poured into your life. What spiritual advantages, what clearing of stones and planting of choice vines, has God invested in you? In light of such care, what fruit is your life actually yielding, and where might you be returning sour grapes for his lavish love?",
          "Second, weigh the demand for justice and righteousness. Where might God be looking for justice in your relationships, your work, or your community and finding instead something that only sounds like it? Whose outcry might you be in a position to hear and answer rather than ignore?",
          "Third, examine your vulnerability to inversion. In what areas are you tempted to call evil good or good evil, to put sweet for bitter to soothe your conscience? How can you keep your moral compass anchored in God&rsquo;s word rather than your own wisdom or the verdicts of the culture around you?",
          "Finally, turn from the failing vineyard to the true vine. Since you cannot bear good fruit by your own effort, how will you abide more deeply in Christ this week? What would it look like to draw your life from him, trusting that the branch which remains in the vine cannot fail to bear the fruit the Father is seeking?",
        ],
      },
    ],
  },
];

const videoItems = [
  { videoId: "d0A6Uchb1F8", title: "BibleProject - Overview of Isaiah 1-39" },
  { videoId: "Lm0pQ3R7sWh", title: "The Song of the Vineyard - Isaiah 5 Explained" },
  { videoId: "Kx7Tn2vQ9bM", title: "The Six Woes of Isaiah 5 - A Verse by Verse Study" },
  { videoId: "Zr4Yh8Wj2cP", title: "Justice and Righteousness in the Prophets" },
];

const tabAccent: Record<Tab, string> = {
  "Overview": GREEN,
  "Key Themes": GOLD,
  "Verse by Verse": PURPLE,
  "Application": TEAL,
};

export default function Isaiah5GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const current = tabContent.find((t) => t.id === activeTab);
  const accent = tabAccent[activeTab];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2.25rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Isaiah 5
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The Song of the Vineyard and the Six Woes &mdash; a love song that becomes a lawsuit. God planted a vineyard, cleared it, and tended it with every care, yet it yielded only wild grapes. He looked for justice but saw bloodshed, for righteousness but heard a cry &mdash; and the storm of judgment gathers over a people who called darkness light." }} />
        </header>

        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 5, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, padding: "0.75rem 0 1.25rem", background: BG }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? tabAccent[t] : BORDER}`,
                background: activeTab === t ? tabAccent[t] : CARD,
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

        {current && (
          <section>
            <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.85, margin: "0 0 2.5rem", borderLeft: `3px solid ${accent}`, paddingLeft: "1.25rem" }} dangerouslySetInnerHTML={{ __html: current.intro }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {current.blocks.map((block, bi) => (
                <div key={bi}>
                  <h2 style={{ fontSize: "1.6rem", fontWeight: 700, margin: "0 0 6px" }} dangerouslySetInnerHTML={{ __html: block.heading }} />
                  <h3 style={{ color: accent, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 1.5rem" }} dangerouslySetInnerHTML={{ __html: block.reference }} />
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
            </div>

            {activeTab === "Application" && (
              <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>What More Could He Have Done?</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Isaiah 5 leaves us standing in the vineyard with the owner&rsquo;s question ringing in our ears. The God who spared no cost still looks for the fruit of justice and righteousness. We cannot produce it by striving, but grafted into the true vine, our barren branches can finally yield the vintage of his love. Run to Christ, abide in him, and bear the fruit the Father has sought all along." }} />
              </div>
            )}
          </section>
        )}

        <section style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: `1px solid ${BORDER}` }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Isaiah 5 through visual teaching on the Song of the Vineyard, the six woes, and the prophetic vision of justice and righteousness that runs from the prophets to the true vine, Jesus Christ." }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
