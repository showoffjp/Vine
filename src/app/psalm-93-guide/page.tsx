"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm93Guide() {
  const [tab, setTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "MqMHyWE3vx0", title: "Psalms Overview (BibleProject)" },
    { videoId: "RkPQ5RDGI0k", title: "The Sovereignty of God (Ligonier)" },
    { videoId: "j4rmG2Vc8wg", title: "The LORD Reigns -- Psalm 93" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Themes" },
    { id: "verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  const para = (html: string, color = TEXT) => (
    <p
      style={{ color, lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.1rem" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );

  const heading = (text: string, color = GOLD) => (
    <h2 style={{ color, fontSize: "1.6rem", marginTop: "2.2rem", marginBottom: "1rem", letterSpacing: "0.01em" }}>
      {text}
    </h2>
  );

  const card = (children: React.ReactNode, accent = BORDER) => (
    <div style={{
      background: CARD,
      border: `1px solid ${BORDER}`,
      borderLeft: `4px solid ${accent}`,
      borderRadius: "10px",
      padding: "1.5rem 1.7rem",
      marginBottom: "1.4rem",
    }}>
      {children}
    </div>
  );

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{
        background: `linear-gradient(160deg, ${CARD} 0%, ${BG} 70%)`,
        borderBottom: `1px solid ${BORDER}`,
        padding: "3.5rem 1.5rem 2.8rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <p style={{ color: GOLD, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.82rem", marginBottom: "1rem" }}>
            A Study Guide for The Vine
          </p>
          <h1 style={{ fontSize: "2.7rem", lineHeight: 1.15, marginBottom: "1rem", color: TEXT }}>
            Psalm 93
          </h1>
          <p style={{ fontSize: "1.35rem", color: PURPLE, fontStyle: "italic", marginBottom: "1.3rem" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD Reigns, He Is Robed in Majesty&rdquo;" }} />
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: "The first of the great enthronement psalms &mdash; a coronation hymn in which the eternal King is robed in majesty, the world is held immovable, and the roaring floods of chaos are silenced beneath the mightier voice of the LORD on high." }} />
        </div>
      </div>

      {/* tab bar */}
      <div style={{
        position: "sticky",
        top: "var(--header-height, 80px)",
        background: BG,
        borderBottom: `1px solid ${BORDER}`,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.4rem",
        padding: "0.8rem 1rem",
      }}>
        {tabs.map(t => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            style={{
              background: tab === t.id ? GOLD : "transparent",
              color: tab === t.id ? BG : MUTED,
              border: `1px solid ${tab === t.id ? GOLD : BORDER}`,
              borderRadius: "999px",
              padding: "0.5rem 1.3rem",
              fontFamily: "Georgia, serif",
              fontSize: "0.98rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* tab content */}
      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {tab === "overview" && (
          <div>
            {heading("A Coronation in Five Verses")}
            {para("Psalm 93 is brief &mdash; only five verses &mdash; yet it stands like a granite pillar at the head of the great cluster of &ldquo;enthronement psalms&rdquo; (Psalms 93, 95-99) that form the theological summit of Book IV of the Psalter. Its opening words set the key for everything that follows: &ldquo;The LORD reigns.&rdquo; This is not a wish, a prediction, or a prayer; it is a declaration of present fact. Before a single petition is offered, before a single trouble is named, the psalm plants its flag on the one reality that holds all others in place &mdash; the living God is King, and his reign is robed in majesty.")}
            {para("The Hebrew phrase that opens the psalm, <em>YHWH malak</em>, has been the subject of much study. It can be rendered &ldquo;The LORD reigns,&rdquo; &ldquo;The LORD is King,&rdquo; or even, in a coronation sense, &ldquo;The LORD has become King&rdquo; &mdash; not as though he ever began to reign, but as a herald's cry announcing the King's accession to his throne in the sight of his people. The same shout would later ring through the streets at the crowning of an earthly king (2 Kings 9:13). Here it is lifted to its true and only proper object: the God who was King before the foundation of the world and will be King when the world has passed away.")}
            {heading("Setting and Authorship", TEAL)}
            {para("The psalm carries no superscription in the Hebrew text, though the Greek Septuagint assigns it to &ldquo;the day before the Sabbath, when the land was inhabited,&rdquo; a liturgical note connecting it to the rhythm of temple worship. Many scholars, following Mowinckel, situate the enthronement psalms within Israel's autumn festival, where the kingship of the LORD was celebrated in song and procession. Whatever its precise liturgical home, the psalm's theology is timeless. Derek Kidner observes that its very brevity is part of its power: it &ldquo;says the essential thing and stops,&rdquo; leaving the worshipper to dwell on the towering fact of God's reign without distraction.")}
            {para("Structurally the psalm moves in three swift strokes. First, the King is enthroned and creation is established (verses 1-2). Second, the floods rise and roar in rebellion, only to be overmastered by the LORD on high (verses 3-4). Third, the King's word is shown to be as trustworthy as his throne is secure, and holiness is named as the abiding ornament of his house (verse 5). Sovereignty, conflict, and the reliability of God's word &mdash; the whole drama of the Bible compressed into five lines.")}
            {heading("Theological Themes", PURPLE)}
            {para("At the heart of Psalm 93 is the <strong>kingship of God over chaos</strong>. In the imagination of the ancient Near East, the sea was the realm of disorder, the surging power that threatened to undo the ordered world. Israel's neighbors told myths of a storm-god battling the sea-monster to win his throne. The psalm answers all such myths with a serene confidence: the LORD does not <em>fight</em> for his throne; he simply <em>reigns</em>, and the floods, for all their roaring, are no rival but a backdrop against which his majesty shines. &ldquo;Mightier than the waves of the sea, the LORD on high is mighty!&rdquo;")}
            {para("Alongside this runs the theme of <strong>God's eternity</strong>. &ldquo;Your throne is established from of old; you are from everlasting&rdquo; (verse 2). The created world is firm because it rests on a King who is firmer still &mdash; one who has no beginning and no end. John Calvin draws out the pastoral comfort of this: the stability we crave is not finally located in any earthly institution, but in the changeless God whose reign undergirds all things. The psalm closes by binding God's word to God's throne: &ldquo;Your decrees are very trustworthy&rdquo; (verse 5). The same God whose power holds back the sea has spoken, and his word will no more fail than his throne will fall.")}
            {heading("Significance for the Christian Life", GREEN)}
            {para("Psalm 93 hands the believer an anchor for the soul. When the floods of life lift up their voice &mdash; grief, illness, injustice, the chaos of a world that seems to be coming apart &mdash; the psalm does not deny the roaring. It grants that the waters are real and loud. But it insists, with quiet and unshakable authority, that there is One enthroned above them who is mightier still. The Christian reads this psalm in the light of the One who stood in a storm-tossed boat and said to the wind and the sea, &ldquo;Peace! Be still!&rdquo; (Mark 4:39) &mdash; and the disciples, watching the waves fall flat, asked the question Psalm 93 had answered a thousand years before: &ldquo;Who then is this, that even the wind and the sea obey him?&rdquo;")}
            {para("Below are three short videos to deepen your study, followed by tabs that unfold the psalm's central themes, a verse-by-verse commentary drawing on the great expositors of the church, and practical applications for prayer and daily life.")}

            <div style={{ marginTop: "2.5rem" }}>
              {videoItems.map(v => (
                <div key={v.videoId} style={{ marginBottom: "1.6rem", borderRadius: "10px", overflow: "hidden", border: `1px solid ${BORDER}` }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: "0.9rem", padding: "0.7rem 1rem", margin: 0, background: CARD }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            {heading("Five Pillars of a Kingdom That Cannot Be Moved")}
            {para("Though Psalm 93 is short, every line opens onto a vast horizon. Here are five major themes, each drawing in the wider witness of Scripture and pressing into the life of faith.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.3rem", marginBottom: "0.8rem" }}>1. The LORD Reigns &mdash; Already and Always</h3>
                {para("The psalm opens not with a plea for God to take control but with the announcement that he has never lost it: &ldquo;The LORD reigns.&rdquo; This present, settled kingship is the bedrock of biblical faith. It is echoed across the Psalter (&ldquo;The LORD sits enthroned over the flood; the LORD sits enthroned as king forever,&rdquo; Psalm 29:10) and carried into the New Testament as the gospel itself &mdash; &ldquo;the kingdom of God is at hand&rdquo; (Mark 1:15). Revelation gathers it into a final chorus: &ldquo;Hallelujah! For the Lord our God the Almighty reigns&rdquo; (Revelation 19:6). <strong>Application:</strong> the Christian does not labor to <em>make</em> God king but lives joyfully under a kingship that is already and forever secure.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.3rem", marginBottom: "0.8rem" }}>2. Majesty as the King's Royal Robe</h3>
                {para("&ldquo;He is robed in majesty; the LORD is robed; he has put on strength as his belt&rdquo; (verse 1). An earthly king's authority is signaled by his garments; the LORD's robe is majesty itself, and his belt is strength. These are not borrowed ornaments but the very radiance of his being. Isaiah saw this glory filling the temple and cried, &ldquo;Holy, holy, holy&rdquo; (Isaiah 6:1-3); Moses asked to see it and was hidden in the cleft of a rock (Exodus 33:18-22). <strong>Application:</strong> to worship is to behold and adore this majesty, and worship that has lost its sense of God's grandeur has ceased to be worship at all. The King is clothed in splendor, and his people approach with reverence and awe (Hebrews 12:28-29).")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>3. A Creation That Cannot Be Moved</h3>
                {para("&ldquo;Yes, the world is established; it shall never be moved&rdquo; (verse 1). The stability of the cosmos is grounded not in itself but in the reign of its Maker. The same Hebrew root for &ldquo;established&rdquo; reappears in verse 2 of God's throne &mdash; the world is firm because the throne is firm. This is the biblical answer to the deep human longing for something that will not collapse: &ldquo;The grass withers, the flower fades, but the word of our God will stand forever&rdquo; (Isaiah 40:8). <strong>Apologetics insight:</strong> the psalm's confidence that the cosmos is ordered and intelligible &mdash; not the plaything of warring gods nor the product of blind chaos &mdash; is the very conviction that made the rise of science possible: an orderly creation reflecting a faithful Creator (compare Genesis 8:22; Jeremiah 33:25).")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.3rem", marginBottom: "0.8rem" }}>4. The Floods That Cannot Prevail</h3>
                {para("The dramatic center of the psalm is the rising of the floods: &ldquo;The floods have lifted up, O LORD, the floods have lifted up their voice; the floods lift up their roaring&rdquo; (verse 3). In Scripture the sea often symbolizes the forces of chaos, rebellion, and death that menace God's good order. Yet the threefold roar is answered by a single, towering truth: &ldquo;Mightier than the thunders of many waters, mightier than the waves of the sea, the LORD on high is mighty!&rdquo; (verse 4). Jesus enacts this very sovereignty when he stills the storm (Mark 4:35-41), and Revelation promises a new creation in which &ldquo;the sea was no more&rdquo; (Revelation 21:1) &mdash; chaos abolished forever. <strong>Application:</strong> no flood of circumstance, however loud, is mightier than the God who reigns above it.")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>5. The Trustworthy Word and the Holy House</h3>
                {para("The psalm ends by joining two things we might not expect to find together: the reliability of God's word and the holiness of his dwelling. &ldquo;Your decrees are very trustworthy; holiness befits your house, O LORD, forevermore&rdquo; (verse 5). The God who cannot be moved has also spoken, and his testimonies are as firm as his throne (compare Psalm 19:7, &ldquo;the testimony of the LORD is sure&rdquo;). And the proper response of those who draw near to such a King is holiness &mdash; a life set apart for him. Peter applies this directly to the church: &ldquo;As he who called you is holy, you also be holy in all your conduct&rdquo; (1 Peter 1:15-16). <strong>Application:</strong> we trust God's word because we trust God's throne, and we pursue holiness because we belong to a holy King.")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "verse" && (
          <div>
            {heading("Verse by Verse")}
            {para("The commentary below moves through all five verses, drawing on Calvin, Spurgeon, Matthew Henry, Derek Kidner, and the wider tradition of the church.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verse 1a</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD reigns; he is robed in majesty; the LORD is robed; he has put on strength as his belt.&rdquo;" }} />
                {para("The psalm opens with the herald's cry, <em>YHWH malak</em> &mdash; &ldquo;The LORD reigns!&rdquo; Spurgeon calls this &ldquo;the keynote of the whole psalm, and indeed of the universe.&rdquo; The imagery is that of a coronation: the King steps forward robed not in borrowed cloth but in majesty itself, and girded with strength as a warrior buckles on his belt before battle. Matthew Henry notes the fitness of the picture &mdash; majesty for his glory, strength for his government, &ldquo;for he that is to rule must be both honourable and able.&rdquo; Calvin presses the comfort of it: because God has clothed himself with power, his people need not fear that his purposes can be overthrown. The repetition (&ldquo;he is robed&hellip; the LORD is robed&rdquo;) is the language of awe-struck worship, the worshipper gazing and gazing again at the splendor of the King.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verse 1b</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Yes, the world is established; it shall never be moved.&rdquo;" }} />
                {para("From the King the psalm turns at once to his kingdom &mdash; the created world &mdash; and declares it firm. The connection is deliberate: because the King is strong, the world he upholds is secure. This is not a claim that the earth never trembles or that history never convulses, but that the created order is held in being by a sovereign hand and will not finally collapse into chaos. Kidner observes that the verb &ldquo;established&rdquo; will echo in the next verse of God's own throne, binding the stability of the world to the stability of its Maker. The Christian hears this confirmed in the New Testament: the Son &ldquo;upholds the universe by the word of his power&rdquo; (Hebrews 1:3), and &ldquo;in him all things hold together&rdquo; (Colossians 1:17). The world endures because the King reigns.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verse 2</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Your throne is established from of old; you are from everlasting.&rdquo;" }} />
                {para("Here the psalm reaches its deepest foundation. The world was established (verse 1), but God's throne was established &ldquo;from of old&rdquo; &mdash; before the world existed &mdash; and God himself is &ldquo;from everlasting,&rdquo; without origin or beginning. Spurgeon writes that &ldquo;the throne of God is not of yesterday&hellip; it antedates all time, and shall outlast all duration.&rdquo; Calvin marvels that the eternity of God is the guarantee of his unchanging rule: because he has always reigned, his reign can never be interrupted or overthrown. This verse quietly undergirds the entire psalm. The floods of verse 3 may be ancient and terrible, but they are infants beside the everlasting King. And for the believer it is profound assurance: the God to whom we pray is not a newcomer learning to govern but the eternal Sovereign whose throne was secure before the mountains were brought forth (Psalm 90:2).")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 3-4</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The floods have lifted up, O LORD, the floods have lifted up their voice; the floods lift up their roaring. Mightier than the thunders of many waters, mightier than the waves of the sea, the LORD on high is mighty!&rdquo;" }} />
                {para("Now the psalm lets us hear the roar. Three times the floods &ldquo;lift up&rdquo; &mdash; their swell, their voice, their pounding &mdash; a deliberate crescendo that makes us feel the menace of the deep. In the symbolism of Scripture the sea is the realm of chaos and hostility, the surging power that threatens to engulf the world (compare Psalm 46:3; Jonah 2:3). Pagan myth told of a storm-god who had to battle the sea to win his crown. Psalm 93 will have none of it. The threefold roar of the floods is answered by a single, overwhelming declaration: the LORD &ldquo;on high&rdquo; is mightier than them all. Kidner notes the brilliance of the contrast &mdash; the floods make all their noise <em>below</em>, while the LORD reigns serenely <em>on high</em>. He does not strain or struggle; his supremacy is simply stated. The Christian cannot read these verses without remembering the Lord who rose in a sinking boat, rebuked the wind and the waves, and left his disciples asking who this could be (Mark 4:39-41). The answer of Psalm 93 is plain: this is the LORD on high, mightier than the sea.")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verse 5</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Your decrees are very trustworthy; holiness befits your house, O LORD, forevermore.&rdquo;" }} />
                {para("The psalm ends not with the sea but with the sanctuary, not with raw power but with word and holiness. Having shown that God's throne cannot be shaken, the psalmist draws the obvious conclusion: neither can his word. &ldquo;Your decrees are very trustworthy&rdquo; &mdash; the testimonies of so secure a King are themselves utterly secure (compare Psalm 19:7; Matthew 24:35, &ldquo;heaven and earth will pass away, but my words will not pass away&rdquo;). Matthew Henry comments that &ldquo;the same power that made the world a habitation makes the church a sanctuary,&rdquo; and the fitting response to such a King is holiness. Calvin observes that &ldquo;holiness becometh thine house&rdquo; sets the tone for all true worship: those who draw near to the holy King must themselves be set apart for him. The psalm that began with the King's majesty ends with the worshippers' sanctity, and seals it with &ldquo;forevermore&rdquo; &mdash; for the holiness of God's house, like the throne it surrounds, will never pass away. Peter gathers it up for the church: &ldquo;You yourselves like living stones are being built up as a spiritual house&hellip; a holy priesthood&rdquo; (1 Peter 2:5).")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "application" && (
          <div>
            {heading("Living Beneath an Unshakable Throne")}
            {para("Psalm 93 is meant to be lived, not merely admired. Here are four areas where its truth presses into daily discipleship, each with a prayer prompt to carry the psalm from the page into the heart.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>1. Stand on Stable Ground in an Unstable World</h3>
                {para("The world promises stability and delivers earthquakes &mdash; financial, political, relational, physical. Psalm 93 relocates our security: the world is established because the throne is established. When everything that can be shaken is shaken, the believer holds to &ldquo;a kingdom that cannot be shaken&rdquo; (Hebrews 12:28). This is not denial of upheaval but a deeper foundation beneath it. <strong>Prayer prompt:</strong> &ldquo;Eternal King, when the ground beneath me gives way, fix my heart on your throne, which was established from of old. Let me build my life on what cannot be moved.&rdquo;")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>2. Name the Floods, Then Name the King</h3>
                {para("Psalm 93 does not pretend the floods are quiet. It lets them roar &mdash; three times &mdash; before it declares the LORD mightier still. This is a pattern for honest faith: we may acknowledge the full force of grief, fear, and chaos, and then lift our eyes to the One enthroned above it. Do not minimize the storm; magnify the Savior who rules it. <strong>Prayer prompt:</strong> &ldquo;Lord on high, the floods of my life are lifting up their voice, and I will not pretend they are silent. But you are mightier than the waves of the sea. Speak your peace over my roaring waters.&rdquo;")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>3. Trust the Word of a Trustworthy King</h3>
                {para("Verse 5 binds God's word to God's throne: &ldquo;Your decrees are very trustworthy.&rdquo; The same omnipotence that holds back the sea stands behind every promise of Scripture. To doubt God's word is, in effect, to doubt God's reign. <strong>Apologetics insight:</strong> the reliability of Scripture is not an isolated claim but flows from the character of the God who speaks it; a God eternal and almighty does not make promises he cannot keep, and the historical fulfillment of his word &mdash; in the coming of Christ and the spread of his church &mdash; gives the believer warrant to rest on what he has said. <strong>Prayer prompt:</strong> &ldquo;Faithful God, your testimonies are sure. When I am tempted to trust my fears over your word, remind me that the One who upholds the universe has spoken, and his word cannot fail.&rdquo;")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>4. Let Holiness Befit Your Life</h3>
                {para("&ldquo;Holiness befits your house, O LORD, forevermore.&rdquo; Under the new covenant, the people of God <em>are</em> his house, his temple, his dwelling by the Spirit (1 Corinthians 3:16). The majesty of the King calls for the holiness of his people &mdash; not as a means of earning his favor, but as the fitting response of those who belong to him. A small reverence in daily choices is the natural overflow of having seen the King in his majesty. <strong>Prayer prompt:</strong> &ldquo;Holy Lord, you are robed in majesty, and I am your dwelling place. Make my life fit for your presence; let holiness adorn my thoughts, words, and works, to the glory of your name.&rdquo;")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>A Closing Meditation</h3>
                {para("&ldquo;The LORD reigns; he is robed in majesty.&rdquo; Let these words be the first thought of your morning and the last of your night. The throne was established before the world began and will stand when the floods have spent their fury. The King is robed, the world is held, the word is sure, and his house is holy forever. Whatever roars around you today, the LORD on high is mighty. Rest there.")}
              </div>, ROSE
            )}
          </div>
        )}

      </div>
    </div>
  );
}
