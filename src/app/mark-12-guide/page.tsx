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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "themes", label: "Key Themes" },
  { id: "verses", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "g_igCcWAMAM", title: "Mark 12 - The Wicked Tenants and the Cornerstone" },
  { videoId: "HGHqu9-DtXk", title: "Render to Caesar - The Two Kingdoms" },
  { videoId: "BBJsCfmEbnQ", title: "The Greatest Commandment - Loving God and Neighbor" },
  { videoId: "Pgs5l_kuoFI", title: "The Widow's Two Coins - Total Devotion" },
];

const THEMES = [
  {
    color: GOLD,
    title: "Judgment on Israel's Leaders",
    html: "The chapter opens with the parable of the wicked tenants, a thinly veiled indictment of the chief priests, scribes, and elders who challenged Jesus&rsquo; authority at the close of chapter 11. They perceive that the parable is told against them, and their murderous response in verse 12 confirms the very point of the story. Mark frames the whole chapter as a series of hostile questions designed to entrap Jesus, each one exposing the spiritual bankruptcy of the leadership rather than trapping him. The God who planted a vineyard and entrusted it to tenants now comes to reckon with stewards who have refused him fruit and killed his messengers."
  },
  {
    color: PURPLE,
    title: "The Rejected Cornerstone",
    html: "At the heart of the parable Jesus quotes Psalm 118: &ldquo;The stone that the builders rejected has become the cornerstone.&rdquo; This is one of the great Christological texts of the New Testament, applied to Jesus by Peter in Acts 4 and 1 Peter 2. The builders are the religious experts who, charged with building the house of God, reject the very stone God has chosen to be the foundation. The rejection that looks like Jesus&rsquo; defeat becomes, in God&rsquo;s sovereign reversal, the basis of a new structure: a temple not made with hands, with the rejected Son as its load-bearing cornerstone."
  },
  {
    color: TEAL,
    title: "The Two Kingdoms - Caesar and God",
    html: "When the Pharisees and Herodians ask whether it is lawful to pay taxes to Caesar, Jesus exposes their hypocrisy by asking whose image is on the coin. &ldquo;Render to Caesar the things that are Caesar&rsquo;s, and to God the things that are God&rsquo;s.&rdquo; The coin bears Caesar&rsquo;s image and so belongs to Caesar; but human beings bear the image of God and so belong wholly to him. Jesus neither endorses zealot revolt nor collapses God&rsquo;s claim into Caesar&rsquo;s. He establishes a layered loyalty in which the state has real but limited authority, while God&rsquo;s claim on the whole person is total and unconditional."
  },
  {
    color: GREEN,
    title: "The God of the Living and the Resurrection",
    html: "The Sadducees, who denied the resurrection, pose a riddle about a woman married to seven brothers in succession, asking whose wife she will be in the resurrection. Jesus answers that they are wrong on two counts: they know neither the Scriptures nor the power of God. In the resurrection life people neither marry nor are given in marriage but are like the angels. Then he grounds resurrection in the very name of God revealed at the burning bush: &ldquo;I am the God of Abraham, and the God of Isaac, and the God of Jacob.&rdquo; He is not God of the dead but of the living, for the patriarchs live to him."
  },
  {
    color: ROSE,
    title: "The Greatest Commandment",
    html: "A scribe asks which commandment is first of all, and Jesus answers with the Shema of Deuteronomy 6: &ldquo;Hear, O Israel: The Lord our God, the Lord is one. And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.&rdquo; To this he binds a second from Leviticus 19: &ldquo;You shall love your neighbor as yourself.&rdquo; The whole law and the prophets hang on these two inseparable loves. The scribe affirms that this is more than all whole burnt offerings and sacrifices, and Jesus declares him not far from the kingdom of God."
  },
  {
    color: GOLD,
    title: "True versus Ostentatious Devotion",
    html: "The chapter closes by contrasting two postures of religion. Jesus warns against the scribes who love long robes, marketplace greetings, and the best seats, who devour widows&rsquo; houses while making long prayers for show. Immediately he watches a poor widow drop two tiny copper coins into the temple treasury and declares that she has put in more than all the wealthy donors. The rich gave out of their abundance; she gave out of her poverty everything she had to live on. Genuine devotion is measured not by the size of the gift but by the totality of the surrender behind it."
  },
];

const VERSES = [
  {
    ref: "Mark 12:1-12",
    color: GOLD,
    title: "The Parable of the Wicked Tenants",
    html: "Jesus tells of a man who planted a vineyard, put a fence around it, dug a pit for the winepress, built a tower, and leased it to tenants before going into another country. This opening deliberately echoes the Song of the Vineyard in Isaiah 5, where the vineyard is the house of Israel and God looks for the fruit of justice but finds bloodshed. The owner sends servant after servant to collect his fruit, and the tenants beat them, strike them on the head, and kill them; these servants are the prophets whom Israel persecuted across the generations. Last of all the owner sends his beloved son, saying, &ldquo;They will respect my son,&rdquo; but the tenants kill him and throw him out of the vineyard, hoping to seize the inheritance."
  },
  {
    ref: "Mark 12:10-12",
    color: PURPLE,
    title: "The Stone the Builders Rejected",
    html: "Jesus presses the parable to its conclusion: the owner will come, destroy the tenants, and give the vineyard to others. Then he cites Psalm 118: &ldquo;The stone that the builders rejected has become the cornerstone; this was the Lord&rsquo;s doing, and it is marvelous in our eyes.&rdquo; The image shifts from vineyard to building, but the message is one: the leaders who reject the Son will themselves be set aside, and the rejected one will be vindicated and exalted as the foundation of God&rsquo;s new house. The leaders understand that he has spoken the parable against them, yet because they fear the crowd they leave him and go away, postponing but not abandoning their murderous intent."
  },
  {
    ref: "Mark 12:13-17",
    color: TEAL,
    title: "Paying Taxes to Caesar",
    html: "The leaders send Pharisees and Herodians, unlikely allies, to catch Jesus in his words about the deeply divisive issue of the imperial tax. They flatter him and then spring the trap: &ldquo;Is it lawful to pay taxes to Caesar, or not? Should we pay them, or should we not?&rdquo; A yes would discredit him with the patriotic crowd; a no would mark him as a rebel against Rome. Jesus asks for a denarius and asks whose image and inscription it bears; they answer, Caesar&rsquo;s. &ldquo;Render to Caesar the things that are Caesar&rsquo;s, and to God the things that are God&rsquo;s,&rdquo; he says, and they marvel at him, their snare broken by a wisdom that refuses both revolt and idolatry."
  },
  {
    ref: "Mark 12:18-27",
    color: GREEN,
    title: "The Sadducees and the Resurrection",
    html: "The Sadducees, who say there is no resurrection, construct a story about seven brothers who each in turn marry the same childless widow under the law of levirate marriage; whose wife will she be when they rise? Jesus tells them they are wrong because they know neither the Scriptures nor the power of God. In the resurrection people neither marry nor are given in marriage but are like the angels in heaven, so the riddle dissolves. Then he turns to their own authority, the books of Moses, citing God&rsquo;s words at the bush: &ldquo;I am the God of Abraham, and the God of Isaac, and the God of Jacob.&rdquo; God is not the God of the dead but of the living, so the patriarchs must live to him, and the Sadducees are quite wrong."
  },
  {
    ref: "Mark 12:28-34",
    color: ROSE,
    title: "The Greatest Commandment",
    html: "One scribe, impressed by Jesus&rsquo; answers, asks sincerely which commandment is first of all. Jesus answers with the Shema: &ldquo;Hear, O Israel: The Lord our God, the Lord is one. And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.&rdquo; The second is like it: &ldquo;You shall love your neighbor as yourself.&rdquo; The scribe agrees warmly, adding that to love God and neighbor is much more than all burnt offerings and sacrifices. Seeing that he answered wisely, Jesus tells him, &ldquo;You are not far from the kingdom of God,&rdquo; and after that no one dared to ask him any more questions."
  },
  {
    ref: "Mark 12:35-37",
    color: PURPLE,
    title: "Whose Son Is the Christ",
    html: "Now Jesus takes the initiative, posing a question of his own while teaching in the temple. How can the scribes say that the Christ is the son of David, when David himself, inspired by the Holy Spirit, says in Psalm 110, &ldquo;The Lord said to my Lord, Sit at my right hand, until I put your enemies under your feet&rdquo;? If David himself calls the Messiah Lord, in what sense is the Messiah merely his son? The riddle points beyond a purely nationalistic, militaristic expectation toward a Messiah who is both David&rsquo;s descendant and David&rsquo;s sovereign Lord, enthroned at God&rsquo;s right hand. The great crowd hears him gladly, sensing that he has touched something deeper than their leaders ever taught."
  },
  {
    ref: "Mark 12:38-40",
    color: GOLD,
    title: "Beware the Scribes",
    html: "In his teaching Jesus warns the crowd to beware of the scribes, who like to walk around in long robes and to be greeted with honor in the marketplaces. They covet the best seats in the synagogues and the places of honor at feasts, hungering for status rather than service. Worse, they devour widows&rsquo; houses, exploiting the very people the law commanded them to protect, and for a pretense they make long prayers. These men will receive the greater condemnation, for they have turned religion into a stage for self-display and a tool for plunder. The warning prepares the reader to see clearly the contrast that follows in the temple treasury."
  },
  {
    ref: "Mark 12:41-44",
    color: GREEN,
    title: "The Widow's Two Copper Coins",
    html: "Jesus sits down opposite the treasury and watches the crowd putting money in; many rich people put in large sums. Then a poor widow comes and puts in two small copper coins, the smallest currency in circulation, together worth a fraction of a day&rsquo;s wage. Calling his disciples, Jesus declares that this poor widow has put in more than all those who are contributing to the treasury. For they all gave out of their abundance, but she out of her poverty has put in everything she had, all she had to live on. Heaven&rsquo;s arithmetic is not the size of the gift but the cost to the giver, and her two coins outweigh every glittering offering of the wealthy."
  },
];

const REFLECTION = [
  "The wicked tenants withheld from the owner the fruit that was rightfully his. In what areas of your life are you tempted to treat what belongs to God as if it were your own to keep?",
  "Jesus says to render to God the things that are God's. Since you bear the image of God, what would it look like to render your whole self, and not merely a portion, to him?",
  "The greatest commandment binds love of God and love of neighbor inseparably. Where in your life is one of these loves growing strong while the other is being neglected?",
  "The scribe was told he was not far from the kingdom. What is the difference between being near the kingdom and entering it, and what might be keeping you at the threshold?",
  "The widow gave everything she had to live on. What would it mean for your giving to be measured by sacrifice and trust rather than by surplus and comfort?",
];

type MarkTab = "overview" | "themes" | "verses" | "application";

export default function Mark12GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<MarkTab>("overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 880, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* Hero */}
        <header style={{ marginBottom: 36 }}>
          <div style={{ display: "inline-block", background: `${GOLD}20`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 14px", fontSize: 12, color: GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
            Gospel of Mark - Chapter 12
          </div>
          <h1 style={{ color: TEXT, fontSize: 36, fontWeight: 900, margin: "0 0 14px", lineHeight: 1.2 }}>
            Mark 12: Confrontation and Devotion in the Temple
          </h1>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, margin: 0, maxWidth: 700, fontStyle: "italic" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;The stone that the builders rejected has become the cornerstone; this was the Lord&rsquo;s doing, and it is marvelous in our eyes.&rdquo; &mdash; Mark 12:10-11, citing Psalm 118" }} />
        </header>

        {/* Sticky tab nav */}
        <nav style={{ position: "sticky", top: "var(--header-height, 80px)", zIndex: 10, background: BG, paddingTop: 8, paddingBottom: 12, marginBottom: 24, borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TABS.map(t => (
              <button type="button" key={t.id} onClick={() => setActiveTab(t.id as MarkTab)}
                style={{ padding: "9px 18px", borderRadius: 20, border: `1px solid ${activeTab === t.id ? GOLD : BORDER}`, background: activeTab === t.id ? `${GOLD}20` : "transparent", color: activeTab === t.id ? GOLD : MUTED, fontWeight: activeTab === t.id ? 700 : 500, fontSize: 14, cursor: "pointer" }}>
                {t.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Overview */}
        {activeTab === "overview" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
                {[["Book", "Mark"], ["Chapter", "12"], ["Setting", "Temple, Jerusalem"], ["Period", "Passion Week"], ["Theme", "Confrontation and Devotion"], ["Key Verse", "Mark 12:30-31"]].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 10, padding: "12px 16px" }}>
                    <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14, fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>A Chapter of Questions in the Temple Courts</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Mark 12 unfolds during the final week of Jesus&rsquo; earthly ministry, set entirely within the courts of the Jerusalem temple in the days between his triumphal entry and his crucifixion. Having cleansed the temple and silenced the demand for his credentials at the end of chapter 11, Jesus now faces a coordinated assault from every faction of the religious establishment. Pharisees, Herodians, Sadducees, and scribes each take their turn, posing questions engineered to discredit him before the watching crowd. The chapter is a masterclass in Jesus&rsquo; wisdom, but more than that it is a revelation of the spiritual condition of Israel&rsquo;s leaders on the eve of his death." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "The chapter opens with the parable of the wicked tenants, a story that reaches back to Isaiah 5 and forward to the cross, exposing the leaders as those who would kill the owner&rsquo;s beloved son to seize his inheritance. From there the questions come in waves: taxes to Caesar, the resurrection of the dead, the greatest commandment, and the identity of the Messiah. In each exchange Jesus turns the trap back upon his questioners and lifts the discussion to a higher plane, moving from political entanglement to the worship of God, from clever riddles to the power of the living God." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The chapter ends not with another debate but with two quiet observations: a warning against the showy, predatory religion of the scribes, and the praise of a poor widow who gave two copper coins. After all the verbal sparring with the powerful, Mark leaves us watching the powerless. The widow&rsquo;s offering becomes the interpretive key to the whole chapter: against leaders who devour and display, here is one who gives everything she has out of love for God. She embodies the devotion that the greatest commandment requires." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 12px" }}>The Structure of the Chapter</h3>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: "0 0 12px" }}
                dangerouslySetInnerHTML={{ __html: "Mark arranges the chapter as a deliberate sequence. First comes Jesus&rsquo; own parable of judgment (verses 1-12), then three hostile questions from his opponents (verses 13-34), then Jesus&rsquo; counter-question about David&rsquo;s son (verses 35-37), and finally two scenes of contrast between false and true devotion (verses 38-44). The movement is from accusation to interrogation to vindication to revelation, and the cumulative effect is to leave Jesus standing unanswerable in the temple while his enemies fall silent." }} />
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Each section advances a single argument: the leaders of Israel have failed in their stewardship and now reject the Son, while the kingdom of God belongs to those who love God with their whole being and give themselves wholly to him. Reading the chapter as a unity, rather than a string of disconnected episodes, reveals Mark&rsquo;s pastoral aim. He wants disciples in every age to choose the way of the widow over the way of the scribe, the cornerstone over the building of human pride." }} />
            </div>
          </section>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Key Themes of Mark 12</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Beneath the surface of these temple debates run several deep theological currents that bind the chapter together. Each question Jesus answers becomes a window onto the character of God, the nature of his kingdom, and the kind of devotion he desires. These themes carry the reader from judgment on false stewards to the vindication of total, sacrificial love." }} />
            </div>
            {THEMES.map(t => (
              <div key={t.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <h3 style={{ color: t.color, fontWeight: 800, fontSize: 17, margin: "0 0 10px" }}>{t.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: t.html }} />
              </div>
            ))}
          </section>
        )}

        {/* Verse by Verse */}
        {activeTab === "verses" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Verse by Verse Through Mark 12</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Walking through the chapter section by section reveals how tightly Mark has woven these episodes together. Watch how each confrontation builds upon the last, and how Jesus repeatedly turns hostile questions into occasions for revealing the heart of God and the shape of true worship." }} />
            </div>
            {VERSES.map(v => (
              <div key={v.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ background: `${v.color}20`, border: `1px solid ${v.color}40`, borderRadius: 8, padding: "3px 10px", fontSize: 11, color: v.color, fontWeight: 700 }}>{v.ref}</span>
                  <span style={{ color: TEXT, fontWeight: 700, fontSize: 15 }}>{v.title}</span>
                </div>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.8, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: v.html }} />
              </div>
            ))}
          </section>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <section>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 12px" }}>Living Mark 12 Today</h2>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: "0 0 14px" }}
                dangerouslySetInnerHTML={{ __html: "Mark 12 is not merely a record of ancient arguments; it presses a set of urgent questions onto every reader. Where do our ultimate loyalties lie when the claims of Caesar and the claims of God seem to compete? Do we love God with the whole of our being, or do we offer him only the leftovers of our attention, our time, and our money? The chapter calls us to examine whether our religion is a performance for human eyes or a self-giving devotion that God alone may see." }} />
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "The widow at the treasury becomes the living portrait of what Jesus has been teaching all chapter long. She loves God with heart, soul, mind, and strength, and she proves it by giving everything she has to live on. Her two coins challenge every disciple to ask not how little we may give and still be respectable, but how completely we may surrender ourselves to the God who gave his beloved Son for us. To live this chapter is to move from the way of the scribe to the way of the widow." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}55`, borderRadius: 14, padding: 28 }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: 18, margin: "0 0 16px" }}>Reflection Questions</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFLECTION.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: `${PURPLE}25`, border: `1px solid ${PURPLE}55`, color: PURPLE, fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                    <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Always-visible video section */}
        <section style={{ marginTop: 40 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
            <h2 style={{ color: GOLD, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>Teaching Videos on Mark 12</h2>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 22px" }}>
              Sermons and teachings on the wicked tenants, rendering to Caesar, the greatest commandment, and the widow&apos;s offering.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              {videoItems.map(v => (
                <div key={v.videoId} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "12px 14px" }}>
                    <h4 style={{ color: TEXT, fontWeight: 700, fontSize: 14, margin: 0, lineHeight: 1.4 }}>{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
