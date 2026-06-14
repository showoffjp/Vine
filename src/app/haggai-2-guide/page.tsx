"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Take Courage I Am With You",
  "The Desired of All Nations",
  "The Shaking of the Nations",
  "Zerubbabel the Signet Ring",
  "Application",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "Overview",
    heading: "Overview of Haggai 2",
    reference: "Haggai 2:1&ndash;23",
    paragraphs: [
      "Haggai 2 is a chapter of four distinct prophetic oracles delivered within a single year &mdash; 520 BC &mdash; to a community of returned exiles who had come back from Babylon to a devastated Jerusalem and were attempting to rebuild the Temple of the Lord. The first chapter of Haggai had already pressed home the charge that the people had been living in their own paneled houses while the house of God lay in ruins, and had called them to go up to the mountain, bring timber, and build. The people obeyed, and the work began. But chapter 2 reveals that the enthusiasm of obedience was quickly shadowed by discouragement when the reality of what they were building stood before them.",
      "The four oracles of the chapter address four distinct but interlocking concerns. The first, delivered on the twenty-first day of the seventh month, speaks directly to the discouraged builders who compare the modest foundations before them with the legendary splendor of Solomon&rsquo;s Temple. God&rsquo;s answer is not to dispute their assessment but to transcend it: &ldquo;Take courage&hellip; I am with you.&rdquo; The second oracle promises that the Desired of All Nations will come and fill this house with a glory greater than the former. The third oracle, delivered on the twenty-fourth day of the ninth month, uses a priestly lesson about ritual contagion to declare that the people&rsquo;s previous work had been defiled by their disobedience, but that from this day forward God will bless them. The fourth oracle, addressed specifically to Zerubbabel the governor, appoints him as the Lord&rsquo;s signet ring &mdash; a compressed messianic image pointing beyond the individual to the one in whom God&rsquo;s royal purposes would ultimately be sealed.",
      "The chapter is a study in the dynamics of faith under discouragement. The returned exiles were not facing persecution but disappointment &mdash; the gap between the glory they had hoped for and the modest reality they were building. Haggai&rsquo;s oracles address this gap not by lowering expectations but by expanding the horizon of promise. The God who filled the tabernacle in the wilderness and the Temple in Jerusalem with his glory was not absent from the small stones being laid in 520 BC. He was at work through them toward an end that would far outstrip both what they had lost and what they had hoped to rebuild.",
      "The theological heart of the chapter is the promise that God&rsquo;s presence and purposes are not ultimately bound to structures, however magnificent. The &ldquo;latter glory&rdquo; that will exceed the former is not primarily architectural but messianic. It will arrive not through their building skill but through the coming of the one whom all nations desire &mdash; the one who will make peace, shake the heavens and earth, and establish a kingdom that cannot be moved. Zerubbabel, the Davidic governor through whom the nation was being reconstituted, stands as a living sign of the lineage through which this promise would be kept.",
      "Reading Haggai 2 alongside the New Testament, the early church understood the &ldquo;Desired of All Nations&rdquo; and the &ldquo;shaking of the nations&rdquo; as finding their fulfillment in Jesus Christ, who entered the Temple courts built by Herod &mdash; a successor to Zerubbabel&rsquo;s modest structure &mdash; and filled it not with the visible cloud of the Shekinah but with the presence of the Son of God himself. The writer to the Hebrews quotes Haggai 2:6 directly, identifying the shaking of the nations with the inauguration of an unshakeable kingdom through the resurrection of Christ (Hebrews 12:26&ndash;28). The chapter that begins with a small, discouraged group of builders ends with one of the Old Testament&rsquo;s most expansive visions of what God is doing in history.",
    ],
  },
  {
    id: "Take Courage I Am With You",
    heading: "Take Courage &mdash; I Am With You",
    reference: "Haggai 2:1&ndash;5",
    paragraphs: [
      "The second oracle of Haggai is addressed on the twenty-first day of the seventh month &mdash; the last day of the Feast of Tabernacles, a feast laden with memories of the wilderness journey and the presence of God among his people in tents and tabernacles. On this particular feast day the people had gathered, and it was impossible not to notice what stood before them. The foundations of the new Temple were small, its proportions modest, its materials nothing like the cedar and cypress and overlaid gold that the biblical accounts associated with Solomon&rsquo;s house. The elders who remembered the former Temple from before the Babylonian exile wept when they saw these foundations (Ezra 3:12). The word of the Lord through Haggai addresses this grief with directness and compassion.",
      "&ldquo;Who is left among you who saw this house in its former glory? How do you see it now? Is it not as nothing in your eyes?&rdquo; (2:3). The prophet does not dismiss or minimize the emotional reality of what the people are feeling. The gap between what had been and what was being built was real, and the Lord acknowledges it. The former Temple, built by Solomon with the accumulated wealth of David&rsquo;s kingdom, the forced labor of tens of thousands, and the skilled craftsmen sent by Hiram of Tyre, was one of the architectural wonders of the ancient world. What stood before the returning exiles must have seemed, by comparison, heartbreakingly inadequate.",
      "But the divine response does not remain at the level of comparison. God pivots immediately from the acknowledgment of discouragement to a threefold command: &ldquo;Yet now be strong, O Zerubbabel, declares the Lord. Be strong, O Joshua son of Jehozadak, the high priest. Be strong, all you people of the land, declares the Lord. Work, for I am with you, declares the Lord of hosts&rdquo; (2:4). The repetition of &ldquo;be strong&rdquo; &mdash; to the governor, to the high priest, to the whole people &mdash; is a deliberate echo of the language God used with Joshua when sending him to lead the conquest of the land (Joshua 1:6, 7, 9). The command to be strong is grounded not in an assessment of their own resources but in the character of the one who stands with them.",
      "The ground of this courage is made explicit in verse 5: &ldquo;according to the covenant that I made with you when you came out of Egypt. My Spirit remains in your midst. Fear not.&rdquo; The covenant with Israel at Sinai, when God declared himself to be their God and promised to dwell among them, was still in force. The exile had not annulled it; the Babylonian destruction had not revoked it. The Spirit of God who had led Israel through the wilderness, who had filled the craftsmen Bezalel and Oholiab to build the tabernacle, who had descended in glory upon Solomon&rsquo;s Temple &mdash; that same Spirit remained in the midst of this discouraged, small-resourced community of builders.",
      "The pastoral significance of this word is immense. What the returned exiles needed was not a plan for sourcing better materials or a strategy for making their building look more impressive. They needed to know that the God who had been present in spectacular splendor in the former house was equally and really present in the modest construction underway before their eyes. The glory was not in the cedar or the gold; it was in the covenant-keeping God who had promised to dwell among his people. The instruction to &ldquo;fear not&rdquo; flows directly from this: when the God of heaven and earth says &ldquo;I am with you,&rdquo; the inadequacy of one&rsquo;s resources becomes a secondary question.",
      "For the Christian reader, this oracle resonates deeply with the experience of serving God with limited means and often modest visible results. The temptation to evaluate the significance of one&rsquo;s work by comparison with what others have accomplished, or with what a previous generation achieved, is a form of the same discouragement Haggai addresses. The answer is not a more favorable comparison but a firmer grasp of the divine presence. The Spirit of God remains in the midst of his people &mdash; not as a nostalgic memory of past glory but as a living, active, covenant-keeping reality. Work, for I am with you.",
    ],
  },
  {
    id: "The Desired of All Nations",
    heading: "The Desired of All Nations",
    reference: "Haggai 2:6&ndash;9",
    paragraphs: [
      "The second oracle of Haggai continues into the most theologically arresting passage in the book. Having assured the people of the divine presence and called them to courage, the Lord of hosts now extends the horizon of promise far beyond the immediate project of temple construction. The oracle begins with a remarkable announcement: &ldquo;For thus says the Lord of hosts: Yet once more, in a little while, I will shake the heavens and the earth and the sea and the dry land. And I will shake all nations, so that the treasures of all nations shall come in, and I will fill this house with glory, says the Lord of hosts&rdquo; (2:6&ndash;7).",
      "The phrase translated &ldquo;the treasures of all nations&rdquo; in older versions &mdash; particularly the King James Version, which rendered it &ldquo;the Desire of all nations&rdquo; &mdash; has generated centuries of discussion about whether it refers to material wealth or to a messianic person. The Hebrew word (chemdah) is singular in form but the verb is plural, which has led most modern translators to prefer &ldquo;treasures&rdquo; or &ldquo;desired things.&rdquo; Yet the messianic reading has deep roots in the church&rsquo;s understanding of this text, and the passage is susceptible to a dual fulfillment: in the short term, nations would bring their wealth to honor the Lord&rsquo;s house, while in the ultimate fulfillment, the one whom all nations will recognize as their rightful Lord &mdash; the Messiah &mdash; would enter this house in his own person.",
      "The phrase &ldquo;silver is mine, and gold is mine, declares the Lord of hosts&rdquo; (2:8) cuts through the anxiety about resources in a single stroke. The material limitation that discouraged the builders was not a problem God had failed to notice; it was a circumstance he was sovereignly overseeing. The wealth of the nations that had not been available to the returned exiles was not beyond his reach; it was his. When the time came for the house to be filled with the glory he intended, neither Zerubbabel&rsquo;s treasury nor the generosity of the Persian king would be the ultimate source &mdash; the Lord of hosts, the owner of all things, would supply what was needed.",
      "The climactic promise of the passage is in verse 9: &ldquo;The latter glory of this house shall be greater than the former, says the Lord of hosts. And in this place I will give peace, declares the Lord of hosts.&rdquo; This is one of the most striking prophetic promises in the Old Testament. The &ldquo;former glory&rdquo; was Solomon&rsquo;s Temple, which the cloud of God&rsquo;s glory had filled until the priests could not stand to minister. The &ldquo;latter glory&rdquo; would surpass even that. How could any building surpass the dwelling place that Solomon had constructed with the full resources of the most powerful Israelite kingdom?",
      "The New Testament answer is that the &ldquo;latter glory&rdquo; was not primarily architectural at all. When Jesus entered the Temple courts &mdash; a building that Herod had expanded and beautified on the modest foundations of Zerubbabel&rsquo;s work &mdash; the presence of God in flesh walked through its gates. The one whom the Letter to the Hebrews calls &ldquo;the radiance of the glory of God and the exact imprint of his nature&rdquo; (Hebrews 1:3) was present in this house. Whatever gold and marble Herod had lavished on the building, its greatest glory was that the Son of God himself taught within its precincts, overturned the tables of the money changers, healed the blind and the lame, and declared it to be his Father&rsquo;s house.",
      "The promise of peace at the end of verse 9 anticipates the ultimate gift that the Desired of All Nations will bring. The Hebrew word shalom encompasses more than the absence of conflict &mdash; it is wholeness, flourishing, right-relatedness with God and with one another. It is precisely this peace that the New Testament announces as the gift of the one who &ldquo;is our peace&rdquo; (Ephesians 2:14), who has broken down the dividing wall of hostility and reconciled all things to God through the blood of his cross.",
    ],
  },
  {
    id: "The Shaking of the Nations",
    heading: "The Shaking of the Nations",
    reference: "Haggai 2:6&ndash;7, 21&ndash;22",
    paragraphs: [
      "The image of God shaking the heavens and earth, the sea, the dry land, and all nations appears twice in Haggai 2 &mdash; first in the second oracle (verses 6&ndash;7) and again in the fourth oracle addressed to Zerubbabel (verses 21&ndash;22). This repetition marks the shaking as one of the chapter&rsquo;s central theological emphases. It is not incidental imagery but a deliberate prophetic announcement about how God accomplishes his purposes in history: through dramatic, cosmos-level intervention that disrupts and overturns the established order of human power.",
      "The language of divine shaking draws on a long tradition in the Old Testament. The Exodus itself was a shaking &mdash; the plagues of Egypt, the dividing of the sea, the drowning of Pharaoh&rsquo;s army &mdash; in which the most powerful empire in the ancient world was overturned by the God of a nation of slaves. The giving of the law at Sinai was accompanied by the shaking of the mountain (Exodus 19:18). The Psalms frequently invoke the trembling of the earth as a response to the Lord&rsquo;s appearing (Psalm 68:8; 97:4; 114:7). The prophets of the eighth century had spoken of coming judgments in the language of cosmic upheaval. Haggai stands in this tradition, applying it to a new historical moment.",
      "In the context of 520 BC, the &ldquo;shaking of the nations&rdquo; may have referred to the political instability that accompanied the accession of Darius I to the Persian throne, a period of revolts and military campaigns across the empire that would have been felt as earth-shaking by those living through it. The returned exiles, a tiny community in a backwater province, might have asked how their modest temple-building project could possibly matter in a world dominated by the vast Persian empire. Haggai&rsquo;s answer is that the political convulsions of the nations are not unrelated to what God is doing &mdash; they are part of the divine shaking that will result in the wealth of nations coming to the Lord&rsquo;s house and in the establishment of his purposes.",
      "The second occurrence of the shaking image in verses 21&ndash;22 is addressed specifically to Zerubbabel in connection with his appointment as the Lord&rsquo;s signet ring: &ldquo;I am about to shake the heavens and the earth, and to overthrow the throne of kingdoms. I am about to destroy the strength of the kingdoms of the nations, and overthrow the chariots and their riders. And the horses and their riders shall go down, every one by the sword of his brother.&rdquo; This language echoes the destruction of Pharaoh&rsquo;s army in the Exodus (Exodus 15:1&ndash;10) and points to a future moment of decisive divine intervention that will shatter the military and political power of those who oppose the kingdom of God.",
      "The writer of the Letter to the Hebrews applies Haggai 2:6 directly to the coming of Christ and the inauguration of the new covenant: &ldquo;Yet once more I will shake not only the earth but also the heavens. This phrase, &lsquo;Yet once more,&rsquo; indicates the removal of things that are shaken &mdash; that is, things that have been made &mdash; in order that the things that cannot be shaken may remain. Therefore let us be grateful for receiving a kingdom that cannot be shaken&rdquo; (Hebrews 12:26&ndash;28). For the New Testament, the definitive &ldquo;once more&rdquo; shaking was the death and resurrection of Jesus Christ, through which the old order of sin, death, and the law was shaken to its foundations, and the unshakeable kingdom of God was established.",
      "The theological implication for the believer is one of radical reorientation toward history. The kingdoms, empires, and powers that appear fixed and permanent are, in the perspective of Haggai, temporary structures that stand under the decree of divine shaking. What cannot be shaken &mdash; the word of God, the covenant of grace, the kingdom of Christ &mdash; is what will remain when the shaking is complete. The community that builds on the unshakeable foundation need not be intimidated by the apparent permanence of the powers arrayed against it, however vast those powers may appear.",
    ],
  },
  {
    id: "Zerubbabel the Signet Ring",
    heading: "Zerubbabel the Signet Ring",
    reference: "Haggai 2:20&ndash;23",
    paragraphs: [
      "The final oracle of Haggai 2 is addressed not to the whole people but to a single individual: Zerubbabel son of Shealtiel, the governor of Judah. Zerubbabel was a man of remarkable lineage. He was a grandson of King Jehoiachin, the penultimate king of Judah before the Babylonian exile, and thus stood in the direct line of the Davidic dynasty. The prophet Jeremiah had pronounced a devastating word over Jehoiachin: &ldquo;Write this man down as childless, a man who shall not succeed in his days, for none of his offspring shall succeed in sitting on the throne of David and ruling again in Judah&rdquo; (Jeremiah 22:30). Yet here stands Zerubbabel, Jehoiachin&rsquo;s grandson, as the recognized leader of the restored community &mdash; and Haggai&rsquo;s final oracle reverses the curse of Jeremiah and transforms the grandson into a messianic sign.",
      "&ldquo;On that day, declares the Lord of hosts, I will take you, O Zerubbabel my servant, the son of Shealtiel, declares the Lord, and make you like a signet ring, for I have chosen you, declares the Lord of hosts&rdquo; (2:23). The imagery of the signet ring is dense with significance. In the ancient world, a signet ring was the instrument through which a king or official stamped his authority upon a document &mdash; it was the seal of his identity, the mark of his power and authorization. When Jeremiah pronounced the curse on Jehoiachin, he used this very image in reverse: &ldquo;As I live, declares the Lord, though Coniah the son of Jehoiakim, king of Judah, were the signet ring on my right hand, yet I would tear you off&rdquo; (Jeremiah 22:24). God had torn the signet ring of the Davidic dynasty from his hand in the exile.",
      "Now, to Zerubbabel, God declares the reversal: &ldquo;I will make you like a signet ring.&rdquo; The dynasty that appeared to have been discarded in judgment was being restored. The seal of divine authorization was being re-impressed upon the line of David. Zerubbabel himself may not have become king &mdash; the text calls him governor, not king, and there is no record of his establishing an independent monarchy &mdash; but the oracle was not exhausted in his person. It was a declaration about what God was doing through the Davidic line, and it pointed beyond Zerubbabel to the one in whom the seal of God&rsquo;s authority would be displayed in its fullness.",
      "Matthew&rsquo;s genealogy of Jesus includes Zerubbabel explicitly (Matthew 1:12&ndash;13), tracing the line of descent from Abraham through David, through the exile, and through Zerubbabel to Joseph, the husband of Mary, of whom Jesus was born. Luke&rsquo;s genealogy also includes Zerubbabel (Luke 3:27). The New Testament thus understands Zerubbabel not merely as a historical figure who oversaw the rebuilding of the Temple but as an ancestor of the Messiah in whom the signet-ring promise found its ultimate fulfillment. Jesus Christ is the one whom the Father has sealed with his authority (John 6:27), appointed as the heir of all things (Hebrews 1:2), and designated as Lord and King over all creation.",
      "The ground of Zerubbabel&rsquo;s appointment is stated in the simplest and most profound of terms: &ldquo;for I have chosen you.&rdquo; Election, not achievement, is the basis of his standing before God. This language of divine choice, applied to a Davidic figure who stood as the representative of the whole restored community, becomes in the New Testament the language applied to the church: &ldquo;chosen in him before the foundation of the world&rdquo; (Ephesians 1:4), &ldquo;a chosen race, a royal priesthood, a holy nation&rdquo; (1 Peter 2:9). The pattern of grace established in Haggai&rsquo;s oracle to Zerubbabel &mdash; restored from judgment, appointed by divine choice, made a bearer of God&rsquo;s seal &mdash; is the pattern that the gospel applies to all who are united to the one in whom Zerubbabel&rsquo;s hope was fully realized.",
      "The oracle closes the book of Haggai in a manner that perfectly balances its opening concern. The book began with a rebuke for building personal houses while God&rsquo;s house lay in ruins; it ends with the promise that the God for whom the house is being built is himself at work to establish, through the Davidic line, a house &mdash; a dynasty, a kingdom, a dwelling &mdash; that no shaking of the nations can destroy. The signet ring that was torn off in the exile is being pressed again into the clay of history, marking the world with the seal of the covenant-keeping God who does not abandon his purposes.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Haggai 2 Today",
    reference: "Haggai 2 &mdash; For the Life of the Believer",
    paragraphs: [
      "Haggai 2 speaks with fresh urgency to anyone who has undertaken something for God and been stopped short by the gap between the vision they held at the beginning and the modest reality that stands before them. The returned exiles were not lazy or faithless; they had obeyed the prophetic word and put their hands to the work. But then the reality of limited resources, the memory of former glory, and the sheer smallness of what they were achieving combined to produce the particular kind of discouragement that comes not from failure to begin but from the inability to match what was begun with what one had hoped to achieve. This is a deeply human experience, and Haggai&rsquo;s oracles address it with both honesty and hope.",
      "The first and most fundamental application of the chapter is the absolute priority of the divine presence over the visible impressiveness of the work. God does not tell the builders that their temple is actually better than they think, or that their assessment of its modesty is mistaken. He tells them that he is with them. The same Spirit who filled the former house remains in their midst. The measuring stick of significance in the kingdom of God is not the splendor of the building but the faithfulness of the obedience, and the faithfulness of the God who makes his home among his people regardless of the architectural quality of what they offer him.",
      "The promise of the Desired of All Nations entering the latter house points to the irreversibly christological character of all genuine worship. When Christians gather in buildings that are, by any worldly standard, unimpressive &mdash; store-front churches, house churches, poorly-heated chapels in the global South, underground fellowships in lands hostile to the gospel &mdash; they gather in the name and presence of the one whose entry into the Temple of Zerubbabel&rsquo;s successors fulfilled the promise that &ldquo;the latter glory of this house shall be greater than the former.&rdquo; The glory is not in the building; it is in the one who is present among his people by his Spirit.",
      "The theology of the divine shaking in Haggai 2 provides a resource for thinking about history that resists both naive optimism and cynical despair. The powers of this world &mdash; political, military, economic, cultural &mdash; are real, but they are not final. They stand under the decree of a God who shakes what can be shaken in order to reveal what cannot be shaken. The believer who has grasped this is freed from the particular anxiety of living in an age when the kingdoms of the world appear stable and the kingdom of God appears marginal. History, in Haggai&rsquo;s perspective, is moving toward the establishment of the unshakeable kingdom, and the apparently mighty forces that resist it are themselves the things that will be shaken.",
      "The image of Zerubbabel as the Lord&rsquo;s signet ring offers a word of immense encouragement to anyone who feels that their history is marked by failure, loss, or the consequences of others&rsquo; sins. Zerubbabel stood under the shadow of Jehoiachin&rsquo;s curse &mdash; a dynasty that appeared to have been definitively cut off. Yet God reversed the curse and chose the grandson as the bearer of his seal and the ancestor of his Son. No family history of failure, no personal record of sin and its consequences, and no generational pattern of unfaithfulness lies beyond the reach of the God who chooses whom he will choose and seals whom he will seal. The reversal of Jehoiachin&rsquo;s curse in Zerubbabel&rsquo;s appointment is a microcosm of the gospel&rsquo;s great reversal of the curse of Adam in the appointment of Christ.",
      "The cumulative message of Haggai 2 for today&rsquo;s believer can be stated simply: God is not finished. The work that appears small is part of a larger divine project whose scope is cosmic. The one who has come to fill the house with glory has come and will come again. The nations are being shaken toward a kingdom that cannot be moved. The signet ring of divine authority is pressed upon the church in the name of Jesus Christ, through whom all the promises of God find their yes and amen. The call to courage that the Lord addressed to Zerubbabel, Joshua, and all the people of the land is the same call that echoes through every generation of builders who labor under the weight of discouragement: &ldquo;Be strong&hellip; work, for I am with you.&rdquo;",
    ],
  },
];

const videoItems = [
  { videoId: "juPvv_f9ANs", title: "BibleProject Overview - Haggai" },
  { videoId: "kE6SZ1ogOVU", title: "Haggai Chapter 2 - The Desired of All Nations" },
  { videoId: "9Xd8IZFzO6k", title: "Haggai - Rebuilding the Temple and the Messianic Hope" },
  { videoId: "F3TNBb1C__A", title: "Zerubbabel the Signet Ring - Messianic Prophecy in Haggai" },
];

export default function Haggai2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Haggai 2 &mdash; The Glory of the Latter House
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            God encourages a discouraged band of builders with a promise that transcends their small foundations &mdash; &ldquo;Take courage&hellip; I am with you.&rdquo; The Desired of All Nations will come, the nations will be shaken, and the latter glory of this house shall be greater than the former.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Haggai 2 through visual teaching on the encouragement to the returning exiles, the promise of the Desired of All Nations, the shaking of the nations, and Zerubbabel the signet ring.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Be Strong &mdash; I Am With You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Haggai 2 lifts the eyes of a small, discouraged community of builders beyond the modesty of what they can accomplish to the greatness of what God has promised. The Desired of All Nations has come, the nations are being shaken toward an unshakeable kingdom, and the signet ring of divine authority has been pressed upon the line of Zerubbabel and fulfilled in Jesus Christ. The glory of the latter house exceeds the former, not in gold and cedar, but in the presence of the Son of God himself.
          </p>
        </div>
      </main>
    </div>
  );
}
