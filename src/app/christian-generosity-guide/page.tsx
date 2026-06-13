"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = ["The Theology of Giving", "The Cheerful Giver", "Tithing and Proportional Giving", "The Danger of Greed", "Generosity as Freedom", "Videos"] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Theology of Giving",
    heading: "The Theology of Giving: Rooted in the Character of God",
    paragraphs: [
      "Christian generosity begins not with human duty but with the character of God himself. Before any command to give is ever issued, the Bible reveals a God who is the supreme giver. The most famous verse in all of Scripture declares this at its heart: &ldquo;For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life&rdquo; (John 3:16). The defining act of God toward the world is an act of giving &mdash; and not the giving of something peripheral, but the giving of his own Son. Generosity is woven into the very nature of the God Christians worship. To understand Christian giving, one must begin here: with a God whose love overflows in self-giving.",
      "Both creation and salvation are, at root, gifts. The world itself was not owed to anyone; it was brought into being by a God who delights to give existence, life, beauty, and abundance. The sun and rain, the harvest and the breath in our lungs &mdash; all are gifts from a generous Creator who &ldquo;gives to all mankind life and breath and everything&rdquo; (Acts 17:25). And salvation, the greatest gift of all, comes not as a wage to be earned but as grace to be received: &ldquo;For by grace you have been saved through faith. And this is not your own doing; it is the gift of God&rdquo; (Ephesians 2:8). The Christian stands at every moment as a recipient of unearned gifts, from the first gift of life to the final gift of eternal life.",
      "The apostle James anchors this truth in the unchanging goodness of God: &ldquo;Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change&rdquo; (James 1:17). Whatever good a person possesses &mdash; talents, resources, relationships, opportunities &mdash; has been received from a generous Father. This reframes the entire question of giving. The Christian does not give from what is fundamentally their own; they give from what has been entrusted to them by a God who gave it freely in the first place. Stewardship, not ownership, becomes the governing posture of the heart.",
      "Because generosity flows from God&rsquo;s character, Christian giving is fundamentally a response to and a reflection of God&rsquo;s lavish grace. We give because we have first received. Jesus made this explicit when he sent out his disciples: &ldquo;Freely you have received; freely give&rdquo; (Matthew 10:8). The logic is unmistakable. The grace that has flowed to us is meant to flow through us. A heart that has truly grasped how much it has been given cannot remain tightly closed; it opens naturally toward others, becoming a channel of the same generosity it has received.",
      "This means that generosity is not primarily a financial transaction but a spiritual one &mdash; an act of worship and gratitude. When Christians give, they are not merely transferring money; they are imitating their Father, reflecting his character to a watching world, and acknowledging that everything they have comes from his hand. Giving becomes a way of saying with one&rsquo;s whole life that God is generous, that grace is real, and that the gifts received have not been forgotten. In this way, the act of giving preaches the gospel: it displays in miniature the self-giving love of a God who held nothing back.",
      "There is also a profound dignity in being invited to participate in God&rsquo;s generosity. The God who needs nothing &mdash; who could accomplish all his purposes without any human contribution &mdash; nonetheless invites his people to share in the joy of giving. To give is to be drawn into the very life and mission of God, to become a small reflection of his abundant heart. The believer who gives is not diminishing themselves but joining in something far larger than themselves: the outpouring of divine grace into a needy world.",
      "Thus the theology of giving turns the whole matter on its head. Generosity is not finally a burden laid upon reluctant believers but a privilege flowing from the gospel. It is the natural fruit of hearts that have encountered the generosity of God in Christ. The more deeply one understands that &ldquo;God so loved the world that he gave,&rdquo; the more one&rsquo;s own hands begin to open. Christian giving, at its best, is simply grace received becoming grace released &mdash; the love of a generous God flowing outward through the lives of his grateful people.",
    ],
  },
  {
    id: "The Cheerful Giver",
    heading: "The Cheerful Giver: Joy at the Heart of Generosity",
    paragraphs: [
      "When the apostle Paul wrote to the Corinthian church about giving, he offered a principle that has shaped Christian generosity ever since: &ldquo;The point is this: whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully. Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver&rdquo; (2 Corinthians 9:6-7). Here Paul lifts giving above mere obligation. What matters to God is not only the amount but the heart &mdash; the spirit in which the gift is offered. God loves a cheerful giver, one whose giving springs from joy rather than coercion.",
      "The emphasis on giving &ldquo;as he has decided in his heart, not reluctantly or under compulsion&rdquo; is striking. Christian generosity is not extracted by guilt, pressure, or manipulation. It flows from a heart that has freely chosen to give. This protects giving from becoming a grim duty performed under a cloud of resentment. The God who gave his Son freely and joyfully desires that his people give in the same spirit &mdash; not because they must, but because they delight to. Reluctant, pressured giving misses the very point; it offers the gift while withholding the heart.",
      "Paul continues with a promise of God&rsquo;s sufficiency: &ldquo;And God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work&rdquo; (2 Corinthians 9:8). The cheerful giver gives in confidence, trusting that God is able to provide for every need. This frees the giver from the anxious calculation that fears there will not be enough. Because God is the source of all sufficiency, the believer can give generously without dread, resting in the abundance of a God who supplies what is needed to keep doing good.",
      "Paul points the Corinthians to a living example of joyful generosity: the churches of Macedonia. &ldquo;We want you to know, brothers, about the grace of God that has been given among the churches of Macedonia, for in a severe test of affliction, their abundance of joy and their extreme poverty have overflowed in a wealth of generosity. For they gave according to their means, as I can testify, and beyond their means, of their own accord, begging us earnestly for the favor of taking part in the relief of the saints&rdquo; (2 Corinthians 8:1-4). This is generosity at its most astonishing &mdash; people in extreme poverty who gave beyond their means, and did so with overflowing joy.",
      "What makes the Macedonian example so powerful is that their giving defied every worldly expectation. They were poor, yet they gave abundantly. They were afflicted, yet they gave joyfully. And they did not give under pressure &mdash; they begged for the privilege of participating. Their secret is revealed in the next verse: &ldquo;they gave themselves first to the Lord and then by the will of God to us&rdquo; (2 Corinthians 8:5). Their generosity flowed from hearts already surrendered to God. Having given themselves first, the giving of their resources followed naturally and gladly.",
      "The deep truth running through this passage is that generosity is meant to be joyful, not grudging. Giving was never intended to feel like loss; in God&rsquo;s economy it is a participation in grace and a source of joy. The cheerful giver discovers that there is more happiness in giving than in keeping, that an open hand is lighter than a clenched fist. This is why Jesus himself taught that &ldquo;it is more blessed to give than to receive&rdquo; (Acts 20:35). Joy and generosity are not opposites but companions; the more freely one gives, the more one tastes the blessedness of God&rsquo;s own giving heart.",
      "To become a cheerful giver, then, is not first a matter of giving more but of receiving more deeply &mdash; of grasping the grace of God so fully that gratitude overflows into generosity. The Macedonians gave joyfully because they had encountered grace; their poverty could not quench the joy that grace had produced. The invitation to every believer is to give from that same wellspring: not under compulsion, not reluctantly, but cheerfully, as those who have received much and delight to share it. For God loves a cheerful giver, and the cheerful giver discovers, in giving, a joy that no amount of hoarding could ever provide.",
    ],
  },
  {
    id: "Tithing and Proportional Giving",
    heading: "Tithing and Proportional Giving",
    paragraphs: [
      "The practice of giving a portion of one&rsquo;s income to God has deep roots in the Old Testament, where the tithe &mdash; the giving of a tenth &mdash; was central to the life of God&rsquo;s people. The prophet Malachi delivers God&rsquo;s call with striking directness: &ldquo;Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the Lord of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need&rdquo; (Malachi 3:10). The tithe was a tangible way of acknowledging that all one possessed came from God, and of giving back to him the first and best portion of one&rsquo;s increase.",
      "The tithe in Israel served multiple purposes: it supported the priests and Levites who had no land of their own, it provided for the worship life of the nation, and it cared for the poor, the foreigner, the orphan, and the widow. To withhold the tithe was, in Malachi&rsquo;s framing, to rob God himself. The principle behind the tithe was clear: God&rsquo;s people honor him with their wealth, returning to him a recognized portion as an act of worship, trust, and obedience. The tithe trained the heart to hold possessions loosely and to put God first in the realm of money.",
      "In the New Testament, the emphasis shifts in an important way. Rather than mandating a strict percentage, the New Testament calls for giving that is proportional, sacrificial, and willing. Paul instructs the Corinthians, &ldquo;On the first day of every week, each of you is to put something aside and store it up, as he may prosper&rdquo; (1 Corinthians 16:2). The phrase &ldquo;as he may prosper&rdquo; establishes proportion as the governing principle: those who have been given much are to give much, and giving is to rise in keeping with one&rsquo;s means. The focus is less on a fixed number and more on a generous, willing heart that gives in proportion to what God has provided.",
      "This New Testament emphasis does not diminish generosity but in many ways heightens it. The tithe could become a ceiling &mdash; a box to check after which one&rsquo;s obligation was discharged. Proportional, sacrificial giving knows no such ceiling. It asks not merely &ldquo;Have I given my ten percent?&rdquo; but &ldquo;Am I giving in a way that reflects God&rsquo;s generosity to me, in proportion to all I have received?&rdquo; For some, generous proportional giving will exceed a tithe; the principle of grace tends to expand the heart rather than confine it to a minimum.",
      "Jesus himself gave the most memorable lesson on the true measure of giving in the account of the widow&rsquo;s mite. &ldquo;And he sat down opposite the treasury and watched the people putting money into the offering box. Many rich people put in large sums. And a poor widow came and put in two small copper coins, which make a penny&rdquo; (Mark 12:41-42). By every external measure, the rich gave far more. But Jesus saw differently. &ldquo;Truly, I say to you, this poor widow has put in more than all those who are contributing to the offering box. For they all contributed out of their abundance, but she out of her poverty has put in everything she had, all she had to live on&rdquo; (Mark 12:43-44).",
      "The widow&rsquo;s mite overturns every worldly calculation of generosity. In God&rsquo;s eyes, the value of a gift is measured not by its size but by its cost to the giver &mdash; by the proportion it represents and the heart behind it. The widow gave two tiny coins, yet she gave more than all the wealthy, because she gave everything she had. The rich gave out of their surplus and felt no loss; the widow gave sacrificially and held nothing back. Jesus praised her not for the amount but for the totality of her trust. Her gift was small in the eyes of men but immense in the eyes of God.",
      "Together, the tithe of the Old Testament and the proportional, sacrificial giving of the New Testament point toward a single heart posture: that of holding all things as stewards before a generous God. Whether one begins with the discipline of a tithe or measures giving by proportion and sacrifice, the deeper call is the same &mdash; to give willingly, generously, and as one has prospered, in joyful response to the God who has given everything. The widow&rsquo;s two coins remain the enduring image of what God treasures most: not the size of the gift, but the love and trust that fill it.",
    ],
  },
  {
    id: "The Danger of Greed",
    heading: "The Danger of Greed and the Love of Money",
    paragraphs: [
      "Alongside its call to generosity, Scripture issues stern and repeated warnings about the spiritual peril of greed and the love of money. Jesus himself spoke about money more than almost any other subject, and his words leave no room for compromise: &ldquo;No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money&rdquo; (Matthew 6:24). Here money is portrayed not as a neutral tool but as a rival master, a competing god that demands allegiance. The human heart cannot be devoted to both God and wealth; one will always win.",
      "The apostle Paul issues an equally pointed warning: &ldquo;For the love of money is a root of all kinds of evils. It is through this craving that some have wandered away from the faith and pierced themselves with many pangs&rdquo; (1 Timothy 6:10). It is crucial to note what Paul actually says &mdash; not that money itself is evil, but that the love of money is a root of all kinds of evils. The danger lies in the heart&rsquo;s craving, in the disordered desire that places money at the center of one&rsquo;s hopes and affections. This craving has the power to lead people away from faith and to inflict deep wounds upon the soul.",
      "Jesus illustrated the folly of greed in the parable of the rich fool. A wealthy man, blessed with an abundant harvest, decided to tear down his barns and build larger ones to store all his goods, saying to himself, &ldquo;Soul, you have ample goods laid up for many years; relax, eat, drink, be merry&rdquo; (Luke 12:19). But God said to him, &ldquo;Fool! This night your soul is required of you, and the things you have prepared, whose will they be?&rdquo; (Luke 12:20). The man had stored up treasure for himself but was, in Jesus&rsquo;s devastating phrase, &ldquo;not rich toward God&rdquo; (Luke 12:21). His error was not wealth itself but the self-centered hoarding that left God entirely out of the picture.",
      "The parable of the rich fool exposes the deception at the heart of greed. The man assumed that his security lay in his accumulated goods, that his future was guaranteed by his full barns, that his soul could feast on possessions. Yet his life was demanded that very night, and all his careful storing proved worthless. Greed promises security and satisfaction but cannot deliver either. It blinds a person to their own mortality and to the God before whom they must finally give account. The rich fool gained the whole harvest yet lost his soul.",
      "Jesus warned about wealth so frequently because he understood its peculiar power to capture the human heart. He cautioned that &ldquo;it is easier for a camel to go through the eye of a needle than for a rich person to enter the kingdom of God&rdquo; (Matthew 19:24). He told the rich young ruler to sell his possessions and give to the poor, and watched him walk away sorrowful because he had great wealth (Matthew 19:21-22). Again and again, Jesus exposed how riches can harden the heart, breed self-reliance, and crowd out the kingdom of God. Wealth is not condemned, but its spiritual dangers are taken with utmost seriousness.",
      "Paul goes so far as to identify greed with idolatry. He instructs believers to put to death &ldquo;covetousness, which is idolatry&rdquo; (Colossians 3:5). This is a profound diagnosis. Greed is not merely a financial flaw or a personality weakness; it is a form of false worship. The covetous heart looks to money for what only God can provide &mdash; security, identity, satisfaction, and hope. It bows before wealth and serves it as a god. To name greed as idolatry is to reveal that it is fundamentally a spiritual problem, a misdirection of worship that robs God of his rightful place at the center of the heart.",
      "The biblical warnings about greed are therefore not a condemnation of money or material things, but a summons to guard the heart. The question is not whether one possesses wealth but whether wealth possesses the soul. Greed enslaves; it promises freedom and delivers bondage, promises life and delivers death, promises security and delivers ruin. Against this idolatry stands the call to be rich toward God, to serve the true Master rather than the false one, and to find one&rsquo;s security and joy not in barns full of goods but in the God who alone can satisfy the soul. The antidote to greed, fittingly, is the very generosity to which the whole of Scripture calls God&rsquo;s people.",
    ],
  },
  {
    id: "Generosity as Freedom",
    heading: "Generosity as Freedom",
    paragraphs: [
      "Generosity, in the Christian vision, is not finally about money at all &mdash; it is about freedom. The act of giving has a unique power to break the grip that money exerts over the human heart. When a person gives freely and sacrificially, they declare in deed that money is not their master, that their security does not rest in their bank account, that the rival god of wealth has no claim on them. Each act of generosity loosens the chains of greed and strikes a blow against the idolatry of money. In giving, the heart is liberated from the very thing that so easily enslaves it.",
      "Jesus revealed the deep connection between treasure and the heart when he said, &ldquo;For where your treasure is, there your heart will be also&rdquo; (Matthew 6:21). This is a profound spiritual truth: the heart follows the treasure. Where we invest our resources, there our affections, our attention, and our hopes will flow. This means that giving is not only an expression of the heart but a means of shaping it. By directing our treasure toward God and his purposes, we draw our hearts toward him as well. Generosity becomes a way of training the soul to love the right things.",
      "Jesus contrasts two kinds of treasure and two kinds of investment: &ldquo;Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven, where neither moth nor rust destroys and where thieves do not break in and steal&rdquo; (Matthew 6:19-20). Earthly treasure is fragile and fleeting; it decays, rusts, and can be stolen. Heavenly treasure is secure and eternal. The generous person is, in Jesus&rsquo;s teaching, the truly shrewd investor &mdash; transferring wealth from a perishing account into one that can never be lost. Giving, far from being loss, is the wisest investment a person can make.",
      "The freedom of generosity is captured in the image of open-handed living. The clenched fist that grasps and hoards is a picture of bondage and anxiety; the open hand that gives and receives is a picture of freedom and trust. Open-handed living refuses to let possessions become possessors. It holds wealth loosely, ready to share, unafraid to release what God has provided. This posture brings a deep and surprising joy &mdash; the lightness of a heart no longer enslaved to stuff, the freedom of a life no longer organized around getting and keeping.",
      "Paul instructs the rich &ldquo;to do good, to be rich in good works, to be generous and ready to share, thus storing up treasure for themselves as a good foundation for the future, so that they may take hold of that which is truly life&rdquo; (1 Timothy 6:18-19). Notice the striking phrase &mdash; that the generous take hold of &ldquo;that which is truly life.&rdquo; A grasping, hoarding existence is not real life at all; it is a counterfeit. True life is found in the open-handed generosity that reflects the heart of God. To be rich in good works, generous and ready to share, is to step into the abundant life for which we were made.",
      "Beyond the freedom it brings to the individual, a generous life reflects the gospel and participates in God&rsquo;s mission in the world. When Christians give &mdash; to the poor, to the work of the church, to those in need &mdash; they become visible signs of the self-giving love of God. Their generosity preaches; it displays in tangible form the grace that gave Christ for the world. And it advances God&rsquo;s purposes, feeding the hungry, supporting the spread of the gospel, and bringing relief to the suffering. The generous Christian becomes a partner in the divine mission, a conduit of God&rsquo;s love to a needy world.",
      "In the end, generosity is about the heart&rsquo;s liberation from the tyranny of self and stuff. The grasping life is a small and anxious life, curved inward upon itself, enslaved to possessions that can never satisfy. The generous life is large and free, turned outward toward God and neighbor, released from the burden of accumulation. To give is to be set free &mdash; free from greed, free from anxiety, free from the false promises of wealth, and free to love, to serve, and to live as those who have received everything from a generous God. This is the great paradox at the heart of Christian generosity: in giving, we are the ones who are truly enriched, and in releasing our treasure, we ourselves are set free.",
    ],
  },
];

const videoItems = [
  { videoId: "wYHffizACg8", title: "The Christian Theology of Generosity" },
  { videoId: "Y9Jz4Xw7Q0E", title: "God Loves a Cheerful Giver - 2 Corinthians 9" },
  { videoId: "xZB3Hf6Hj6E", title: "Money, Greed, and Generosity - A Biblical View" },
];

export default function ChristianGenerosityGuidePage() {
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
            Faith &amp; Generosity
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1rem" }}>
            Christian Guide to Generosity
          </h1>
          <p style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem", maxWidth: 700 }}>
            Generosity through a Christian lens &mdash; the theology of giving rooted in the character of God, the cheerful giver, tithing and proportional giving, the danger of greed and the love of money, and generosity as the freedom of an open-handed life.
          </p>
          <div style={{ marginTop: "1.75rem", background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <p style={{ fontStyle: "italic", lineHeight: 1.7, marginBottom: 8 }}>&ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;</p>
            <p style={{ color: ACCENT, fontSize: "0.85rem", fontWeight: 600 }}>2 Corinthians 9:7</p>
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
          <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>Generosity Is the Heart Set Free</h3>
          <p style={{ color: MUTED, lineHeight: 1.78, fontSize: "0.93rem" }}>God so loved the world that he gave. The cheerful giver gives with joy. The widow gave everything she had. The Christian faith does not call you to give grudgingly or out of fear &mdash; it invites you to reflect the generosity of God, to break the power of money over your heart, and to discover the freedom of an open-handed life where your treasure, and your heart, are stored up in heaven.</p>
        </div>
      </main>
    </div>
  );
}
