"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm47Guide() {
  const [tab, setTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "sOi_wPaCVDs", title: "The Ascension of Jesus (BibleProject)" },
    { videoId: "MqMHyWE3vx0", title: "Psalms Overview (BibleProject)" },
    { videoId: "2v4xjL5bYdM", title: "God Is King -- Psalm 47" },
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
            Psalm 47
          </h1>
          <p style={{ fontSize: "1.35rem", color: PURPLE, fontStyle: "italic", marginBottom: "1.3rem" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;Clap Your Hands, All Peoples&rdquo;" }} />
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: "An enthronement psalm of the Sons of Korah summoning every nation to acclaim the LORD Most High &mdash; the great King over all the earth who has gone up with a shout to take his throne." }} />
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
            {heading("A Psalm That Refuses Borders")}
            {para("Psalm 47 is one of the great enthronement psalms of the Psalter, a short but seismic poem of nine verses that bursts out of the Jerusalem temple and refuses to stay there. It does not address Israel alone; it addresses <em>all peoples</em>. &ldquo;Clap your hands, all peoples!&rdquo; is not a polite invitation extended to the surrounding nations &mdash; it is a royal summons issued to the whole earth to acknowledge the one true King. In a world crowded with tribal deities, each chained to its own territory and its own people, Psalm 47 makes the staggering claim that the God of a small covenant people is in fact the sovereign of every nation that has ever drawn a border on a map.")}
            {para("The psalm is attributed in its superscription to the Sons of Korah, a guild of Levitical singers who served in the temple worship of Israel (compare the headings of Psalms 42, 44-49, 84-85, 87-88). The Korahites were descendants of the rebel Korah of Numbers 16, and the very existence of their praise is itself a quiet testimony to grace: the line that once defied God now leads his people in worship. Their psalms are marked by a deep love for Zion and a wide-angle vision of God's reign over the nations, and Psalm 47 is the clearest example of that vision.")}
            {heading("Occasion and Setting", TEAL)}
            {para("Scholars have long debated the precise liturgical setting of the psalm. Many, following the lead of Hermann Gunkel and Sigmund Mowinckel, have placed it within a festival celebrating the LORD's kingship, perhaps connected to the Feast of Tabernacles or to a commemoration of the ark of the covenant being carried up to Zion (compare 2 Samuel 6 and Psalm 24). The phrase &ldquo;God has gone up with a shout&rdquo; (verse 5) may well evoke the procession of the ark, the visible throne of the invisible King, ascending the temple mount amid trumpet blasts and the roar of the assembled congregation. Derek Kidner notes that whatever the exact occasion, the psalm's theology runs far beyond any single ceremony: it is a celebration of a kingship that is cosmic in scope and eternal in duration.")}
            {para("The historical claim embedded here would have sounded outrageous to Israel's neighbors. Assyria, Egypt, and Babylon were the superpowers of the ancient Near East, each boasting gods of war and empire. For a covenant people often dwarfed and overrun by these empires to sing that <em>their</em> God reigns over the nations was an act of audacious faith &mdash; and, the New Testament insists, an act of prophecy.")}
            {heading("Theological Themes", PURPLE)}
            {para("Three great themes braid together through the psalm. First, the <strong>universal kingship of God</strong>: the LORD is not a local deity but &ldquo;a great king over all the earth&rdquo; (verse 2) and &ldquo;the King of all the earth&rdquo; (verse 7). Second, the <strong>ascension motif</strong>: God &ldquo;has gone up&rdquo; to take his throne (verse 5), an image the early church saw fulfilled in the ascension of the risen Christ. Third, the <strong>ingathering of the nations</strong>: the princes of the peoples are pictured not as crushed captives but as worshippers gathering &ldquo;as the people of the God of Abraham&rdquo; (verse 9), fulfilling the ancient promise that in Abraham all the families of the earth would be blessed (Genesis 12:3).")}
            {para("Augustine read Psalm 47 christologically, hearing in the &ldquo;going up&rdquo; the ascension of Christ into heaven, and in the gathering of the nations the spread of the gospel to the Gentiles. John Calvin, ever attentive to the pastoral edge, drew comfort from the psalm's assurance that the chaotic politics of the nations are not finally in the hands of tyrants but in the hands of God: &ldquo;the shields of the earth belong to God.&rdquo; Charles Spurgeon called it &ldquo;a truly missionary psalm,&rdquo; one that anticipates the day when the kingdoms of this world become the kingdom of our Lord and of his Christ (Revelation 11:15).")}
            {heading("Significance for the Christian Life", GREEN)}
            {para("For the believer, Psalm 47 is both a corrective and a comfort. It is a corrective to a shrunken view of God &mdash; a God who is merely <em>my</em> helper, <em>my</em> personal assistant, a household deity tending only to private needs. The psalm thunders that this King reigns over geopolitics, over empires, over history itself. And it is a comfort precisely for that reason: the same God who holds the nations in his hand holds you. When the news cycle screams that the world is spinning out of control, Psalm 47 calls the people of God to clap their hands and sing, for the throne is occupied and the King is reigning still.")}
            {para("Below you will find three short videos to enrich your study, followed by tabs exploring the psalm's central themes, a verse-by-verse commentary drawing on the great expositors of the church, and practical applications for prayer and life.")}

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
            {heading("Five Movements of Praise")}
            {para("Psalm 47 is compact, but its theology is vast. Here are five major themes, each opening onto the wider witness of Scripture and onto the life of faith today.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.3rem", marginBottom: "0.8rem" }}>1. The Universal Kingship of God</h3>
                {para("The dominant note of the psalm is sounded twice for emphasis: the LORD is &ldquo;a great king over all the earth&rdquo; (verse 2) and &ldquo;the King of all the earth&rdquo; (verse 7). This is not regional rule but cosmic sovereignty. In the ancient world every people assumed their god was bound to their land; cross the border and you crossed out of his jurisdiction. Israel's confession was different. The God of Abraham, Isaac, and Jacob is the Maker of heaven and earth (Genesis 1:1), and therefore his throne is over Assyria as truly as over Zion. Cross-references abound: &ldquo;The LORD has established his throne in the heavens, and his kingdom rules over all&rdquo; (Psalm 103:19); &ldquo;Yours, O LORD, is the kingdom, and you are exalted as head above all&rdquo; (1 Chronicles 29:11). <strong>Application:</strong> no nation, party, or power lies outside the reign of God, and so the Christian fears no headline and bows to no Caesar as ultimate.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.3rem", marginBottom: "0.8rem" }}>2. The Ascension of the King</h3>
                {para("&ldquo;God has gone up with a shout, the LORD with the sound of a trumpet&rdquo; (verse 5). In its first setting this likely pictured the ark of the covenant ascending the temple mount in festal procession. But the New Testament hears something deeper. Paul quotes Psalm 68:18, a sister enthronement text, and applies it directly to Christ: &ldquo;When he ascended on high he led a host of captives&rdquo; (Ephesians 4:8). Luke records the ascension in Acts 1:9-11, the moment the risen Lord is enthroned at the right hand of the Father (compare Psalm 110:1; Hebrews 1:3). The early fathers, Augustine chief among them, read the &ldquo;going up&rdquo; of Psalm 47 as a prophecy of that exaltation. <strong>Application:</strong> the ascension means the King is reigning <em>now</em>, not merely waiting in the wings &mdash; and that he prays for his people from the throne (Hebrews 7:25).")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>3. Election and the Inheritance of Grace</h3>
                {para("&ldquo;He chose our heritage for us, the pride of Jacob whom he loves&rdquo; (verse 4). The psalm holds together two truths that the human mind is forever tempted to split apart: God's particular love for his covenant people and his universal reign over all peoples. Election is never a basis for boasting in the psalm; it is grounded entirely in God's free choice and love (compare Deuteronomy 7:7-8, &ldquo;it was not because you were more in number&hellip; but because the LORD loves you&rdquo;). The heritage was a gift, not a wage. <strong>Application:</strong> believers in Christ have received &ldquo;an inheritance that is imperishable, undefiled, and unfading&rdquo; (1 Peter 1:4), chosen &ldquo;before the foundation of the world&rdquo; (Ephesians 1:4). Grace, not merit, is the soil of every blessing we enjoy.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.3rem", marginBottom: "0.8rem" }}>4. The Nations as Worshippers, Not Merely Vassals</h3>
                {para("The climax of the psalm is breathtaking: &ldquo;The princes of the peoples gather as the people of the God of Abraham&rdquo; (verse 9). The foreign rulers are not dragged in chains; they assemble as worshippers, joining themselves to the covenant family. This is the Abrahamic promise coming to flower &mdash; &ldquo;in you all the families of the earth shall be blessed&rdquo; (Genesis 12:3) &mdash; and it points straight to the Great Commission (Matthew 28:18-20) and to the vision of Revelation 7:9, a countless multitude &ldquo;from every nation, from all tribes and peoples and languages.&rdquo; <strong>Application:</strong> world missions is not an afterthought tacked onto the Bible but the very heartbeat of God's plan, sung in Israel's worship a thousand years before the gospel went to the Gentiles.")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>5. Joyful, Embodied, Corporate Praise</h3>
                {para("The psalm commands a worship that is loud, physical, and communal: clap your hands, shout, sing praises &mdash; the imperative &ldquo;sing praises&rdquo; appears five times in verses 6 and 7 alone. This is not the restrained worship of the merely respectable; it is the abandon of subjects who have glimpsed their King. Spurgeon remarked that &ldquo;the most natural and most appropriate way to express our joy in God is to make a noise about it.&rdquo; Cross-references: &ldquo;Make a joyful noise to the LORD, all the earth&rdquo; (Psalm 100:1); &ldquo;Let everything that has breath praise the LORD&rdquo; (Psalm 150:6). <strong>Application:</strong> praise is meant to engage the whole person &mdash; voice, body, and affections &mdash; and to be offered together with the gathered people of God.")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "verse" && (
          <div>
            {heading("Verse by Verse")}
            {para("The commentary below moves through all nine verses, drawing on Calvin, Spurgeon, Matthew Henry, Derek Kidner, and the wider tradition of the church.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 1-2</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Clap your hands, all peoples! Shout to God with loud songs of joy! For the LORD, the Most High, is to be feared, a great king over all the earth.&rdquo;" }} />
                {para("The psalm opens not in the temple courts of Israel but on the world stage: <em>all peoples</em> are summoned. Clapping and shouting were the homage paid to a newly crowned king (compare 2 Kings 11:12, where the people clapped and cried &ldquo;Long live the king!&rdquo;). The reason for the summons is given at once: the LORD is &ldquo;Most High&rdquo; (Hebrew <em>Elyon</em>), the title that crowns God as supreme above every rival, the very name Melchizedek used of &ldquo;God Most High, Possessor of heaven and earth&rdquo; (Genesis 14:19). Matthew Henry observes that God is &ldquo;to be feared&rdquo; and yet praised with &ldquo;loud songs of joy&rdquo; in the same breath &mdash; awe and gladness are not enemies but the twin responses of the redeemed. Calvin notes the striking universality: the Gentiles, long strangers to the covenants of promise, are here invited into the chorus, a foreshadowing of the day when the gospel would break down the dividing wall (Ephesians 2:14).")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 3-4</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;He subdued peoples under us, and nations under our feet. He chose our heritage for us, the pride of Jacob whom he loves.&rdquo;" }} />
                {para("These verses look back to the conquest and the gift of the land, when God gave Israel victory and a heritage. The crucial word is &ldquo;He&rdquo; &mdash; every triumph is attributed to God, not to Israel's sword or strategy (compare Psalm 44:3, &ldquo;not by their own sword did they win the land&hellip; but your right hand&rdquo;). Kidner cautions against reading these lines as nationalist swagger; they are doxology, ascribing all conquest to the King. The phrase &ldquo;the pride of Jacob whom he loves&rdquo; grounds the whole inheritance in divine affection. Spurgeon writes that the land was Israel's only because God's love chose it for them &mdash; &ldquo;love is the fountain of election.&rdquo; For the Christian, the language is gloriously transposed: in Christ, God puts every enemy &mdash; sin, death, and the devil &mdash; under our feet (Romans 16:20; 1 Corinthians 15:25-27), and gives us an inheritance kept in heaven.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verse 5</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;God has gone up with a shout, the LORD with the sound of a trumpet.&rdquo;" }} />
                {para("This is the hinge of the psalm. The image is of a victorious King ascending to his throne amid the roar of his people and the blast of the trumpet (the <em>shofar</em>, which announced coronations and great festivals). In its original setting it likely depicted the ark of the covenant, the throne of the invisible God, being carried up the temple mount. But the church has always heard more. Augustine read this verse as a direct prophecy of the ascension of Christ: &ldquo;He who descended is the very one who ascended far above all the heavens&rdquo; (Ephesians 4:10). The risen Lord &ldquo;went up&rdquo; from the Mount of Olives (Acts 1:9), and angels announced he would return &ldquo;in the same way.&rdquo; The shout and the trumpet of Psalm 47 will sound again at his coming, when &ldquo;the Lord himself will descend from heaven with a cry of command, with the voice of an archangel, and with the sound of the trumpet of God&rdquo; (1 Thessalonians 4:16).")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 6-7</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Sing praises to God, sing praises! Sing praises to our King, sing praises! For God is the King of all the earth; sing praises with a psalm!&rdquo;" }} />
                {para("The fivefold repetition of &ldquo;sing praises&rdquo; (Hebrew <em>zammeru</em>) is the most insistent command in the psalm, a sustained drumbeat of joy that will not let the worshipper sit still. The final line, &ldquo;sing praises with a psalm,&rdquo; is literally a call to sing with skill or understanding (the Hebrew <em>maskil</em> overtones), echoed in Psalm 47's invitation to thoughtful, intelligent worship &mdash; not mindless noise but joyful comprehension. Matthew Henry comments that the repetition teaches us that we are &ldquo;dull and backward to this duty&rdquo; and need to be roused to it again and again. Calvin draws out the universal scope once more: because God is &ldquo;the King of all the earth,&rdquo; praise cannot be confined to one nation's worship but is owed by every tongue. Paul will later command exactly this kind of worship for the church: &ldquo;singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God&rdquo; (Colossians 3:16).")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 8-9</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;God reigns over the nations; God sits on his holy throne. The princes of the peoples gather as the people of the God of Abraham. For the shields of the earth belong to God; he is highly exalted!&rdquo;" }} />
                {para("The psalm closes with a vision that is nothing less than the goal of redemptive history. &ldquo;God reigns over the nations&rdquo; &mdash; the verb is in a settled, abiding sense; he <em>is reigning</em>, enthroned in holiness. Then comes the astonishing climax: the &ldquo;princes of the peoples,&rdquo; the rulers of the Gentile nations, gather not as defeated captives but &ldquo;as the people of the God of Abraham.&rdquo; They are reckoned among the covenant family. Kidner calls this &ldquo;the widest horizon in the Psalter,&rdquo; the Abrahamic promise of Genesis 12:3 reaching its appointed end. &ldquo;The shields of the earth&rdquo; &mdash; a poetic name for kings and their armies &mdash; &ldquo;belong to God.&rdquo; Every protector, every power, is finally his. Spurgeon exults that &ldquo;the day will come when all earthly powers shall be seen to be the Lord's, held by him and used for his glory.&rdquo; The psalm ends where it must: &ldquo;he is highly exalted!&rdquo; &mdash; the same exaltation Paul ascribes to the risen Christ, given &ldquo;the name that is above every name&rdquo; (Philippians 2:9).")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "application" && (
          <div>
            {heading("Living Under the Reigning King")}
            {para("Psalm 47 is not merely a doctrine to be admired but a reality to be lived. Here are four areas where its truth presses into daily discipleship, with prayer prompts to carry the psalm from the page into your heart.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>1. Find Peace in a World That Feels Out of Control</h3>
                {para("The deepest comfort of Psalm 47 is that history has a throne and the throne is occupied. When elections turn, markets crash, and nations rage, the believer is not naive about danger but is anchored by a conviction: &ldquo;God reigns over the nations; God sits on his holy throne&rdquo; (verse 8). The same hand that holds Assyria and Babylon holds your circumstances. This is the Christian answer to anxiety &mdash; not denial, but a higher allegiance. <strong>Prayer prompt:</strong> &ldquo;Reigning King, when I am tempted to fear the headlines, remind me that you sit enthroned over every power on earth. Quiet my heart with the certainty that nothing escapes your rule.&rdquo;")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>2. Worship With Your Whole Self</h3>
                {para("Clap, shout, sing &mdash; the psalm refuses a worship that is merely tidy and internal. There is a kind of cool reserve that masquerades as reverence but is really just a heart that has not yet seen the King. Psalm 47 invites the embodied, joyful, full-throated praise of people who know whom they are praising. This does not mean every personality must worship identically, but it does challenge us to let the affections engage, not just the intellect. <strong>Prayer prompt:</strong> &ldquo;Lord, thaw any coldness in my worship. Teach me to praise you with gladness and with my whole being, in private and with your gathered people.&rdquo;")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>3. Embrace the Global Mission of God</h3>
                {para("Psalm 47 is, in Spurgeon's phrase, a missionary psalm. The vision of the princes of the peoples gathering as the people of the God of Abraham is the same vision that sends the church to the ends of the earth (Acts 1:8). If God's heart is for every nation, the believer cannot be content with a faith that never looks beyond its own walls. Pray for the unreached, give to gospel work, welcome the stranger, and let your love be as wide as God's reign. <strong>Apologetics insight:</strong> the psalm's bold claim &mdash; that Israel's God rules Assyria and Egypt &mdash; was not the projection of a powerful empire but the confession of a small people often crushed by those very empires. That such a faith survived, and that its central prophecy (the ingathering of the nations) has demonstrably come to pass through the spread of Christianity to every continent, is itself a striking historical witness to the psalm's truth.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>4. Rest in the Ascension of Christ</h3>
                {para("The &ldquo;going up&rdquo; of verse 5, which the church has long read as a prophecy of the ascension, is one of the most under-appreciated comforts of the Christian faith. The ascension means Jesus is not absent but enthroned, ruling all things for the good of his church (Ephesians 1:20-23) and interceding for his people (Hebrews 7:25). The King who clapping nations acclaim is the same Jesus who bore your sin and now reigns on your behalf. <strong>Apologetics insight:</strong> the ascension is anchored in eyewitness testimony (Acts 1:9-11; 1 Corinthians 15:6) and was proclaimed within the lifetime of those who could have refuted it. <strong>Prayer prompt:</strong> &ldquo;Ascended Lord, you have gone up with a shout and taken your throne. Help me to live as the subject of a King who loves me, reigns for me, and prays for me even now.&rdquo;")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>A Closing Meditation</h3>
                {para("&ldquo;For God is the King of all the earth; sing praises with a psalm!&rdquo; Let Psalm 47 be the sound of your soul when the world grows loud. The trumpet has sounded, the King has ascended, the nations are streaming home, and the throne is secure forever. Clap your hands. Lift your voice. He is highly exalted.")}
              </div>, ROSE
            )}
          </div>
        )}

      </div>
    </div>
  );
}
