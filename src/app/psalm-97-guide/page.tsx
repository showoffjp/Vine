"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm97Guide() {
  const [tab, setTab] = useState("overview");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "MqMHyWE3vx0", title: "Psalms Overview (BibleProject)" },
    { videoId: "RkPQ5RDGI0k", title: "The Holiness of God (Ligonier)" },
    { videoId: "TG_BcS00sVg", title: "The LORD Reigns -- Psalm 97" },
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
            Psalm 97
          </h1>
          <p style={{ fontSize: "1.35rem", color: PURPLE, fontStyle: "italic", marginBottom: "1.3rem" }}
            dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD Reigns, Let the Earth Rejoice&rdquo;" }} />
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: "An enthronement psalm ablaze with theophany &mdash; clouds and fire, lightning and melting mountains &mdash; in which the righteous reign of God puts every idol to shame and sows light and joy for the upright in heart." }} />
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
            {heading("When the King Appears, the Earth Trembles and Rejoices")}
            {para("Psalm 97 belongs to the radiant cluster of enthronement psalms (93, 95-99) that celebrate the kingship of the LORD, and it shares the same opening shout as its companions: &ldquo;The LORD reigns.&rdquo; But where Psalm 93 pictures the King serenely robed above the floods, Psalm 97 sets the throne ablaze. Here the reign of God arrives as a storm of glory &mdash; clouds and thick darkness, devouring fire, lightning that lights up the world, mountains melting like wax. This is theophany: the visible, overwhelming manifestation of the presence of God. And the psalm holds together two responses that only the gospel can finally reconcile &mdash; the earth <em>trembles</em> at his coming, and the earth is summoned to <em>rejoice</em>.")}
            {para("The psalm is anonymous, untitled in the Hebrew, and woven through with echoes of Israel's earlier worship. Its language draws on the great theophany at Sinai (Exodus 19:16-18), on the Song of Moses, and on the imagery of Psalms 18 and 50. It is, in a sense, a tapestry of Israel's memory of meeting God &mdash; gathered up and projected forward to the day when all the earth will see his glory. Many scholars place it within the autumn festival celebrating the LORD's reign, but its true horizon is the final, universal disclosure of God's kingship at the end of the age.")}
            {heading("The Shape of the Psalm", TEAL)}
            {para("Psalm 97 moves in three clear movements. First, the King appears in overwhelming majesty (verses 1-6): the earth rejoices, clouds and fire surround him, righteousness and justice uphold his throne, and the heavens proclaim his glory to all peoples. Second, the idols are put to shame (verses 7-9): every worshipper of images is confounded, the very &ldquo;gods&rdquo; bow down, Zion hears and is glad, and the LORD is exalted far above all rivals. Third, the King's people are addressed directly (verses 10-12): those who love the LORD are called to hate evil, assured of his protecting care, and promised that &ldquo;light is sown for the righteous, and joy for the upright in heart.&rdquo; The psalm ends as it began &mdash; in joy &mdash; but now the joy is personal, planted in the hearts of the redeemed.")}
            {heading("Theological Themes", PURPLE)}
            {para("At the center of the psalm stands the truth that <strong>righteousness and justice are the foundation of God's throne</strong> (verse 2). His reign is not raw power but moral perfection; he governs the world in unimpeachable rightness. From this flows the psalm's sharp polemic against idolatry: in the blaze of the living God's glory, the man-made idols are exposed as &ldquo;worthless&rdquo; (verse 7), and those who trust them are &ldquo;put to shame.&rdquo; The God of Psalm 97 is not one option among many; he is the Lord of all the earth before whom every false god must bow. Calvin saw in this a permanent warning against the idols of every age, for the human heart, in Calvin's famous phrase, is &ldquo;a perpetual factory of idols.&rdquo;")}
            {para("The psalm's final and most tender theme is the <strong>care of God for his saints</strong>. The same fire that consumes his adversaries (verse 3) becomes warmth and light for those who love him: &ldquo;He preserves the lives of his saints; he delivers them from the hand of the wicked&rdquo; (verse 10). And then the luminous promise of verse 11: &ldquo;Light is sown for the righteous, and joy for the upright in heart.&rdquo; Spurgeon loved this image &mdash; light scattered like seed, hidden for a time beneath the soil of present trouble, but certain to spring up in harvest. The reign of God, terrifying to the rebel, is the gladdest news in the world to those who belong to him.")}
            {heading("Significance for the Christian Life", GREEN)}
            {para("The New Testament reads Psalm 97 as a window onto the reign of the exalted Christ. Hebrews 1:6 quotes verse 7 &mdash; &ldquo;Let all God's angels worship him&rdquo; &mdash; and applies it directly to the Son, so that the King whose coming melts the mountains is none other than Jesus. Revelation 19:6 takes up the psalm's opening cry in the church's final hallelujah: &ldquo;the Lord our God the Almighty reigns.&rdquo; For the believer, then, Psalm 97 is both sober and glad. It is sober, because it insists that to meet this King is to meet a consuming holiness before which idols crumble. It is glad, because for those who love him, his appearing means light sown, joy promised, and a name to give thanks to forever.")}
            {para("Below are three short videos to enrich your study, followed by tabs unfolding the psalm's central themes, a verse-by-verse commentary drawing on the great expositors of the church, and practical applications for prayer and life.")}

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
            {heading("Five Flames of a Glorious Reign")}
            {para("Psalm 97 burns with imagery, and each image opens onto the wider witness of Scripture. Here are five major themes, drawn out for study and for life.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.3rem", marginBottom: "0.8rem" }}>1. Theophany: The God Who Comes in Fire and Cloud</h3>
                {para("&ldquo;Clouds and thick darkness are all around him&hellip; fire goes before him&hellip; his lightnings light up the world&rdquo; (verses 2-4). The psalm reaches back to Sinai, where God descended in fire and the mountain trembled (Exodus 19:18; Deuteronomy 4:11), and forward to the day when he will be revealed &ldquo;in flaming fire&rdquo; (2 Thessalonians 1:7). The cloud both conceals and reveals: God draws near, yet remains wrapped in unapproachable majesty (1 Timothy 6:16). <strong>Application:</strong> the nearness of God is never tame. To worship is to come before a holy fire, and the right posture is reverent joy &mdash; gladness that does not forget to tremble.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.3rem", marginBottom: "0.8rem" }}>2. Righteousness and Justice: The Throne's Foundation</h3>
                {para("&ldquo;Righteousness and justice are the foundation of his throne&rdquo; (verse 2). This single line guards the psalm from any notion that God's power is arbitrary. His reign rests on moral perfection; he cannot govern unjustly any more than he can cease to be God (compare Psalm 89:14; Deuteronomy 32:4, &ldquo;all his ways are justice&rdquo;). The cross is where this foundation is most clearly seen: there God is shown to be &ldquo;just and the justifier of the one who has faith in Jesus&rdquo; (Romans 3:26). <strong>Application:</strong> because the King is perfectly just, the believer can entrust every injustice to him, knowing he &ldquo;will by no means clear the guilty&rdquo; and yet has made a way to pardon the repentant.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>3. The Shame of Idolatry</h3>
                {para("&ldquo;All worshipers of images are put to shame, who make their boast in worthless idols&rdquo; (verse 7). In the searing light of the living God, the idols are exposed for what they are &mdash; nothing. The biblical polemic against idolatry is relentless and even witty: idols are made by human hands, must be carried because they cannot walk, and have mouths that cannot speak (Psalm 115:4-8; Isaiah 44:9-20). <strong>Apologetics insight:</strong> the psalm draws a sharp line between a god a person constructs and the God who constructs the cosmos. Idolatry is not merely an ancient error but a perennial temptation &mdash; whenever we give ultimate trust to money, status, power, or self, we boast in &ldquo;worthless idols.&rdquo; <strong>Application:</strong> the cure for idolatry is not willpower but a fresh sight of the glory of God that makes every rival look as cheap as it really is.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.3rem", marginBottom: "0.8rem" }}>4. The Saints Preserved and Loved</h3>
                {para("&ldquo;He preserves the lives of his saints; he delivers them from the hand of the wicked&rdquo; (verse 10). The cosmic King stoops to guard particular people. The fire that consumes his adversaries is the same fire that warms and protects his own. Jesus gives the new-covenant form of this promise: &ldquo;no one will snatch them out of my hand&rdquo; (John 10:28). The call attached to it is moral: &ldquo;O you who love the LORD, hate evil!&rdquo; &mdash; love for God and hatred of evil are two sides of one coin (compare Romans 12:9). <strong>Application:</strong> the love of God is not sentimental indulgence; it makes us hate what would destroy us and cling to the One who keeps us.")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.3rem", marginBottom: "0.8rem" }}>5. Light Sown for the Righteous</h3>
                {para("&ldquo;Light is sown for the righteous, and joy for the upright in heart&rdquo; (verse 11). This is one of the loveliest images in the Psalter. Light and joy are pictured as seed scattered in the ground &mdash; hidden now, buried beneath the soil of present hardship, but certain to spring up in harvest. Spurgeon writes that &ldquo;the sowing time may be dark, but the reaping shall be bright.&rdquo; Jesus is the dawn of this sown light &mdash; &ldquo;the light shines in the darkness&rdquo; (John 1:5); &ldquo;I am the light of the world&rdquo; (John 8:12). <strong>Application:</strong> the believer in a dark season is not in a hopeless one. Light has already been sown, and the God who planted it will bring it to harvest in due time (Galatians 6:9).")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "verse" && (
          <div>
            {heading("Verse by Verse")}
            {para("The commentary below moves through all twelve verses, drawing on Calvin, Spurgeon, Matthew Henry, Derek Kidner, and the wider tradition of the church.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verse 1</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The LORD reigns, let the earth rejoice; let the many coastlands be glad!&rdquo;" }} />
                {para("The psalm opens with the familiar enthronement cry, &ldquo;The LORD reigns,&rdquo; and immediately draws the conclusion: <em>therefore</em> let the earth rejoice. The reign of God is good news, and the only fitting response is gladness. The &ldquo;many coastlands&rdquo; (or &ldquo;isles&rdquo;) are the far-flung, distant lands at the edges of the known world &mdash; a way of saying that no place is too remote to be summoned into the joy of God's kingship. Matthew Henry notes that the joy is universal because the reign is universal: &ldquo;the multitude of the isles&rdquo; are called to be glad because their King is the Lord of all. Kidner observes that this opening, like the gospel itself, comes as an announcement before it becomes a command &mdash; first the fact (the LORD reigns), then the invitation (rejoice). The same pattern runs through the New Testament proclamation of the kingdom (Mark 1:15).")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 2-3</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Clouds and thick darkness are all around him; righteousness and justice are the foundation of his throne. Fire goes before him and burns up his adversaries all around.&rdquo;" }} />
                {para("The scene shifts to theophany. &ldquo;Clouds and thick darkness&rdquo; recall Sinai, where God spoke from the midst of fire and cloud (Deuteronomy 4:11; Exodus 20:21). The darkness is not the absence of God but the veil of his majesty &mdash; he dwells in &ldquo;thick darkness&rdquo; precisely because his glory is unapproachable (1 Kings 8:12). At the very heart of the cloud, the psalmist places the throne's foundation: &ldquo;righteousness and justice.&rdquo; Calvin presses the point that God's power and God's righteousness are never separated; he is mighty, but his might is always in service of what is right. The fire that &ldquo;burns up his adversaries&rdquo; is the holiness of God in action against all that opposes him (compare Hebrews 12:29, &ldquo;our God is a consuming fire&rdquo;). The same God is dreadful to his enemies and a refuge to his people &mdash; a tension the psalm will resolve only at its close.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 4-5</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;His lightnings light up the world; the earth sees and trembles. The mountains melt like wax before the LORD, before the Lord of all the earth.&rdquo;" }} />
                {para("The lightning of the storm-theophany floods the whole world with light, and creation responds with trembling. Then comes one of the most vivid images in the Psalter: the mountains &mdash; the very emblem of permanence and immovability &mdash; &ldquo;melt like wax&rdquo; before the LORD. Spurgeon marvels that &ldquo;the most solid and immovable things in nature are as nothing before the presence of God.&rdquo; If the everlasting hills dissolve like wax in a flame, what can stand against him? The title &ldquo;Lord of all the earth&rdquo; (compare Joshua 3:11; Micah 4:13) underscores that this is no regional deity but the sovereign of the whole creation. Micah uses the same melting imagery (Micah 1:4), and the prophets look forward to a final day when &ldquo;the elements will melt with fervent heat&rdquo; (2 Peter 3:10). The trembling of the earth before its Maker is the only sane response to such glory.")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 6-7</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;The heavens proclaim his righteousness, and all the peoples see his glory. All worshipers of images are put to shame, who make their boast in worthless idols; worship him, all you gods!&rdquo;" }} />
                {para("The heavens themselves become preachers, proclaiming God's righteousness to every people (compare Psalm 19:1). And as the glory of the true God is revealed, the idols collapse. &ldquo;All worshipers of images are put to shame&rdquo; &mdash; their trust is exposed as misplaced, their boast as empty, for idols are &ldquo;worthless&rdquo; (the Hebrew word carries the sense of nothingness, vanity, a mere breath). The final clause, &ldquo;worship him, all you gods,&rdquo; is striking. Whether read as a command to the so-called gods of the nations to bow, or to the angelic host of heaven, the meaning is the same: every power, real or imagined, must do homage to the LORD. The writer of Hebrews quotes this very line and applies it to Christ: &ldquo;Let all God's angels worship him&rdquo; (Hebrews 1:6) &mdash; so that the King before whom idols crumble is revealed as the Son. Matthew Henry comments that the shaming of idols is itself a mercy, for it drives the nations from their lies toward the living God.")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 8-9</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Zion hears and is glad, and the daughters of Judah rejoice, because of your judgments, O LORD. For you, O LORD, are most high over all the earth; you are exalted far above all gods.&rdquo;" }} />
                {para("Now the focus narrows from &ldquo;all the peoples&rdquo; to Zion, the city of God, and to &ldquo;the daughters of Judah&rdquo; &mdash; the towns and villages of the covenant land. They hear of God's judgments and they <em>rejoice</em>. This is a crucial note: God's righteous judgments, terrifying to the idolater, are a cause of gladness to his people, because his judgments mean that wrong will not have the last word and that the world is governed in justice (compare Psalm 48:11). Calvin observes that the saints can rejoice in God's judgments because they know themselves to be sheltered by his mercy. The reason for the joy is then stated in the grandest terms: &ldquo;you, O LORD, are most high over all the earth; you are exalted far above all gods.&rdquo; The title &ldquo;Most High&rdquo; (<em>Elyon</em>) crowns the King as supreme over every rival, real or counterfeit. Zion is glad not merely that God reigns, but that <em>her</em> God is the one who reigns.")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verses 10-11</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;O you who love the LORD, hate evil! He preserves the lives of his saints; he delivers them from the hand of the wicked. Light is sown for the righteous, and joy for the upright in heart.&rdquo;" }} />
                {para("The psalm turns at last to direct exhortation. To love the LORD is, necessarily, to hate evil &mdash; the two cannot be separated, for love of the holy God carries with it a recoil from all that is unholy (compare Proverbs 8:13; Romans 12:9, &ldquo;abhor what is evil; hold fast to what is good&rdquo;). And to such lovers of God comes a double promise: he &ldquo;preserves&rdquo; and he &ldquo;delivers.&rdquo; Then the radiant image of verse 11: &ldquo;Light is sown for the righteous, and joy for the upright in heart.&rdquo; The metaphor of sowing is deliberate &mdash; light and joy are planted now, often invisibly, beneath the dark soil of present trial, and they will surely come up in harvest. Spurgeon writes, &ldquo;Their harvest is to come; they walk by faith, and faith's seed is sown in tears, but reaped in joy.&rdquo; The upright may not feel the light today, but it has been sown for them, and the God who buried it will raise it.")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>Verse 12</h3>
                <p style={{ color: PURPLE, fontStyle: "italic", marginBottom: "0.9rem", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Rejoice in the LORD, O you righteous, and give thanks to his holy name!&rdquo;" }} />
                {para("The psalm ends where it began, in joy &mdash; but the journey from verse 1 to verse 12 has deepened it. The opening called the whole earth and the distant coastlands to rejoice in the fact of God's reign; the close calls the &ldquo;righteous&rdquo; to rejoice in the LORD himself and to give thanks to his &ldquo;holy name.&rdquo; The joy has become personal, grounded in relationship and crowned with gratitude. Matthew Henry notes the fitting climax: &ldquo;holiness&rdquo; is the last word, for it is the holiness of God &mdash; the very quality that makes him a consuming fire to his enemies &mdash; that is the joy and treasure of his people. Paul will echo this very command to the church: &ldquo;Rejoice in the Lord always; again I will say, rejoice&rdquo; (Philippians 4:4). The reign that melts mountains and shames idols ends, for the believer, in thanksgiving and song.")}
              </div>, ROSE
            )}
          </div>
        )}

        {tab === "application" && (
          <div>
            {heading("Living in the Light the King Has Sown")}
            {para("Psalm 97 is meant to shape the way we see God, the world, and ourselves. Here are four areas where its truth presses into daily discipleship, each with a prayer prompt to carry the psalm from the page into the heart.")}

            {card(
              <div>
                <h3 style={{ color: GOLD, fontSize: "1.25rem", marginBottom: "0.7rem" }}>1. Worship a God Who Is Both Glad News and Holy Fire</h3>
                {para("Psalm 97 will not let us choose between a God who is comforting and a God who is awesome. He is both: the earth rejoices and the earth trembles. Much modern worship has lost the trembling, and with it the depth of the joy. Recover a sense of the majesty of God &mdash; clouds, fire, melting mountains &mdash; and your gladness in him will grow, not shrink. <strong>Prayer prompt:</strong> &ldquo;Holy King, robed in cloud and fire, teach me to rejoice in you with reverence. Let me never grow casual before the God who melts the mountains, and never doubt the gladness you give to those who are yours.&rdquo;")}
              </div>, GOLD
            )}

            {card(
              <div>
                <h3 style={{ color: TEAL, fontSize: "1.25rem", marginBottom: "0.7rem" }}>2. Tear Down the Idols of the Heart</h3>
                {para("The psalm declares every idol &ldquo;worthless&rdquo; and every idolater &ldquo;put to shame.&rdquo; Idolatry rarely looks like a carved image today; it looks like the quiet enthroning of money, success, romance, reputation, or self at the center of the heart. <strong>Apologetics insight:</strong> the psalm presses a simple but profound contrast &mdash; a god you can make is a god you can exhaust, but the God who made you is inexhaustible. Everything we trust in place of him will finally fail us and shame us; only the living God will not. <strong>Prayer prompt:</strong> &ldquo;Lord, show me the idols I have been boasting in. In the light of your glory, let them look as worthless as they truly are, and draw my whole trust back to you.&rdquo;")}
              </div>, TEAL
            )}

            {card(
              <div>
                <h3 style={{ color: PURPLE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>3. Love God Enough to Hate Evil</h3>
                {para("&ldquo;O you who love the LORD, hate evil!&rdquo; Genuine love for God is not soft on sin. It is precisely those who treasure the holiness of God who learn to recoil from what offends him &mdash; not with self-righteous disdain for sinners, but with a clear-eyed refusal of evil in our own lives. This is a love that protects: the same verse promises that God &ldquo;preserves the lives of his saints.&rdquo; <strong>Prayer prompt:</strong> &ldquo;Father, give me a love for you so real that I come to hate the evil that grieves you &mdash; first in my own heart. Keep me, preserve me, and deliver me from the hand of what would destroy me.&rdquo;")}
              </div>, PURPLE
            )}

            {card(
              <div>
                <h3 style={{ color: GREEN, fontSize: "1.25rem", marginBottom: "0.7rem" }}>4. Trust the Light That Has Already Been Sown</h3>
                {para("&ldquo;Light is sown for the righteous, and joy for the upright in heart.&rdquo; If you are walking through a dark season, Psalm 97 does not offer cheap comfort; it offers a buried promise. The light is real, and it has already been planted &mdash; you simply have not yet seen it break the surface. The harvest is coming. <strong>Apologetics insight:</strong> Christian hope is not wishful thinking but confidence grounded in the resurrection of Christ, the firstfruits of the harvest (1 Corinthians 15:20); because he was raised, the light sown for his people will certainly be reaped. <strong>Prayer prompt:</strong> &ldquo;Lord, when my days are dark, remind me that you have sown light for me. Help me to wait for the harvest in faith, and to give thanks to your holy name even before the dawn.&rdquo;")}
              </div>, GREEN
            )}

            {card(
              <div>
                <h3 style={{ color: ROSE, fontSize: "1.25rem", marginBottom: "0.7rem" }}>A Closing Meditation</h3>
                {para("&ldquo;Rejoice in the LORD, O you righteous, and give thanks to his holy name!&rdquo; The King has come in fire and cloud; the idols have fallen; the mountains have melted; and yet for you, the one who loves him, the final word is light, joy, and thanksgiving. Let the holiness that consumes his enemies be the very glory you adore. Rejoice in the LORD, and give thanks.")}
              </div>, ROSE
            )}
          </div>
        )}

      </div>
    </div>
  );
}
