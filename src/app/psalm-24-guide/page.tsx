"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Psalm24Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "rNcERbkSTXU", title: "Psalm 24 &mdash; The King of Glory Shall Come In" },
    { videoId: "OjJ7GkWCHvA", title: "The Earth Is the LORD&rsquo;s: Creation and Ownership" },
    { videoId: "pHBzJ2dVXgk", title: "Clean Hands and a Pure Heart: The Ethics of Worship" },
    { videoId: "3sO5FH2ybPY", title: "Lift Up Your Heads, O Gates: Christ&rsquo;s Triumphant Entry" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  const overviewBlocks: { heading: string; color: string; html: string }[] = [
    {
      heading: "A Procession of Glory",
      color: PURPLE,
      html:
        "<p>Psalm 24 is one of the grand processional songs of Israel. It begins with the widest possible horizon &mdash; &ldquo;The earth is the LORD&rsquo;s and the fullness thereof&rdquo; (24:1) &mdash; and ends at the gates of the holy city, throwing them open for the arrival of a King: &ldquo;Lift up your heads, O gates&hellip; that the King of glory may come in&rdquo; (24:7). Between those two poles the psalm asks the most searching question a worshiper can face: who is fit to stand in the presence of such a God?</p>" +
        "<p>This is a psalm to be heard with the ear of imagination. We can picture a great company climbing the road to Zion, the ark of the covenant carried before them, voices rising in question and answer, and at last the cry going up at the temple gates for the entrance of the LORD of hosts. It is a song of ascent, of approach, and of triumphant arrival &mdash; and the church has heard in it, from the beginning, the footsteps of the risen Christ entering the gates of heaven in glory.</p>",
    },
    {
      heading: "The Shape of the Psalm",
      color: TEAL,
      html:
        "<p>Psalm 24 falls into three clear movements. <strong>First (24:1&ndash;2), the LORD as Creator and Owner:</strong> the whole earth and everyone in it belongs to Him, for He founded it upon the seas. <strong>Second (24:3&ndash;6), the question of approach:</strong> who may ascend the hill of the LORD and stand in His holy place? The answer is the one with clean hands and a pure heart, who will receive blessing from the LORD. <strong>Third (24:7&ndash;10), the entrance of the King of glory:</strong> a ringing call for the ancient gates to lift up their heads, a question repeated twice &mdash; &ldquo;Who is this King of glory?&rdquo; &mdash; and the answer that He is the LORD, strong and mighty in battle, the LORD of hosts.</p>" +
        "<p>The structure carries a powerful logic. Because the earth belongs to the LORD (movement one), we must ask how sinful people may draw near to Him (movement two); and the glorious answer is that the King of glory Himself comes in to dwell among His people (movement three). Ownership leads to worship, and worship to the coming of the King.</p>",
    },
    {
      heading: "Liturgy and Procession",
      color: GOLD,
      html:
        "<p>Psalm 24 bears every mark of a liturgy meant to be performed. Its question-and-answer form (&ldquo;Who shall ascend?&hellip; He who has clean hands&hellip; Who is this King of glory?&hellip; The LORD of hosts&rdquo;) suggests two groups responding to one another, perhaps a procession outside the gates and a choir within. Many have connected the psalm to the bringing of the ark of the covenant up to Jerusalem in the days of David (2 Samuel 6), when the LORD&rsquo;s throne entered His city with shouting and the sound of the trumpet.</p>" +
        "<p>The psalm thus dramatizes the truth that the LORD does not merely rule the earth from afar; He comes to dwell among His people. The gates that lift up their heads are the gates of Zion welcoming the presence of God. And because the ark represented the throne of the unseen King, the cry &ldquo;Who is this King of glory?&rdquo; is answered not by pointing to a man but to the LORD of hosts Himself, enthroned among His people.</p>",
    },
    {
      heading: "From Zion to the Gates of Heaven",
      color: GREEN,
      html:
        "<p>The Christian church has read Psalm 24 with rich and joyful imagination. Because the psalm celebrates the King of glory entering His gates, it has long been sung at the Ascension of Christ &mdash; the risen and victorious Lord entering the gates of heaven itself, having conquered sin, death, and the grave. It has also been used during Advent and on Palm Sunday, as the church welcomes the King who comes humbly yet gloriously into His own city.</p>" +
        "<p>This reading is not a stretch imposed upon the text; it flows from the text&rsquo;s own logic. The one strong and mighty in battle, the LORD of hosts who comes through the everlasting doors, is revealed in the New Testament to be the Lord Jesus, who &ldquo;disarmed the rulers and authorities and put them to open shame, by triumphing over them&rdquo; (Colossians 2:15). Psalm 24 lifts our eyes from the temple gates of old Jerusalem to the King who has gone before us into the heavenly city, and who will one day bring His people in after Him.</p>",
    },
  ];

  const themeItems: { id: string; title: string; color: string; html: string }[] = [
    {
      id: "t-owns",
      title: "The LORD Owns All Creation",
      color: PURPLE,
      html:
        "<p>&ldquo;The earth is the LORD&rsquo;s and the fullness thereof, the world and those who dwell therein, for he has founded it upon the seas and established it upon the rivers&rdquo; (24:1&ndash;2). The psalm opens with a sweeping declaration of total ownership. Everything that exists &mdash; the land, the seas, the creatures, and every human being &mdash; belongs to the LORD because He made it. There is no square inch of creation, no person, no possession, that lies outside His rightful claim.</p>" +
        "<p>This truth reorders our whole understanding of life. We are not owners but stewards; we hold all things in trust from the One to whom they truly belong. The apostle Paul quotes this very verse in his teaching on Christian freedom and gratitude: &ldquo;For the earth is the Lord&rsquo;s, and the fullness thereof&rdquo; (1 Corinthians 10:26), grounding our liberty to receive God&rsquo;s good gifts with thanksgiving. To confess that the earth is the LORD&rsquo;s is to bow before His sovereign right and to hold every blessing with an open hand. <em>Cross references: 1 Corinthians 10:26; Psalm 50:10&ndash;12; Deuteronomy 10:14; Exodus 19:5.</em></p>",
    },
    {
      id: "t-ascend",
      title: "Who May Ascend the Hill of the LORD?",
      color: ROSE,
      html:
        "<p>&ldquo;Who shall ascend the hill of the LORD? And who shall stand in his holy place?&rdquo; (24:3). This is the urgent question at the heart of the psalm. If the LORD is the holy owner of all things, then on what terms may anyone come near to Him? The question presses upon every worshiper: who is fit to climb the mountain of God and stand in His presence and live?</p>" +
        "<p>The same question echoes through Scripture. &ldquo;O LORD, who shall sojourn in your tent? Who shall dwell on your holy hill?&rdquo; (Psalm 15:1). It is the question that the prophet Isaiah asks: &ldquo;Who among us can dwell with the consuming fire?&rdquo; (Isaiah 33:14). Psalm 24 refuses to let us treat worship casually. To draw near to the living God is the most serious thing a creature can do, and the psalm insists that we reckon honestly with our fitness to do so. <em>Cross references: Psalm 15:1&ndash;5; Isaiah 33:14&ndash;16; Hebrews 12:14; Micah 6:6&ndash;8.</em></p>",
    },
    {
      id: "t-hands",
      title: "Clean Hands and a Pure Heart",
      color: GOLD,
      html:
        "<p>The answer comes with striking moral clarity: &ldquo;He who has clean hands and a pure heart, who does not lift up his soul to what is false and does not swear deceitfully&rdquo; (24:4). The requirement touches both the outward life and the inward person. <em>Clean hands</em> speaks of righteous deeds &mdash; what we do; <em>a pure heart</em> speaks of inward integrity &mdash; who we are. God looks not only at our actions but at the truth of our hearts.</p>" +
        "<p>This is the ethics of worship, and it sets a standard no sinner can meet on his own. Who among us has truly clean hands and a wholly pure heart? Here Psalm 24 drives us to the gospel. The blessing it promises is fulfilled in Christ, who alone had clean hands and a pure heart, and who gives His own righteousness to all who trust Him. &ldquo;Blessed are the pure in heart, for they shall see God&rdquo; (Matthew 5:8), and that purity is created in us by the One who cleanses us with &ldquo;a heart sprinkled clean&rdquo; (Hebrews 10:22). The requirement is real; the supply is grace. <em>Cross references: Matthew 5:8; Hebrews 10:19&ndash;22; Psalm 51:10; James 4:8.</em></p>",
    },
    {
      id: "t-gates",
      title: "Lift Up Your Heads, O Gates",
      color: TEAL,
      html:
        "<p>&ldquo;Lift up your heads, O gates! And be lifted up, O ancient doors, that the King of glory may come in&rdquo; (24:7). With sudden majesty the psalm calls upon the very gates of the city to rise up and make way. The doors are addressed as if they were living things, bowing back their lintels to admit a King too glorious for ordinary entrance. The repetition in verses 7 and 9 builds the drama of a great arrival, a procession reaching its triumphant climax.</p>" +
        "<p>The church has heard in these words the entrance of Christ &mdash; into Jerusalem on Palm Sunday, riding lowly upon a donkey yet hailed as King; and supremely into heaven itself at His Ascension, the everlasting doors flung wide for the conquering Lord. The image speaks to every heart as well: the King of glory asks that the doors of our own lives be lifted up to welcome His reign. Wherever He is given entrance, glory comes in. <em>Cross references: Matthew 21:1&ndash;11; Luke 24:50&ndash;53; Revelation 3:20; Acts 1:9&ndash;11.</em></p>",
    },
    {
      id: "t-king",
      title: "Who Is This King of Glory?",
      color: GREEN,
      html:
        "<p>Twice the psalm asks, &ldquo;Who is this King of glory?&rdquo; and twice it answers. First: &ldquo;The LORD, strong and mighty, the LORD, mighty in battle&rdquo; (24:8). Then, climactically: &ldquo;The LORD of hosts, he is the King of glory&rdquo; (24:10). The repeated question and answer drive home the central revelation of the psalm &mdash; the identity of the One who comes in. He is no earthly monarch but the LORD Himself, the warrior God who fights for His people and the commander of the armies of heaven.</p>" +
        "<p>The title &ldquo;LORD of hosts&rdquo; pictures God enthroned above all the powers of heaven and earth. This is the King who enters Zion, and the New Testament reveals His face: the Lord Jesus Christ, who &ldquo;triumphed&rdquo; over the powers of darkness (Colossians 2:15) and who is &ldquo;the Lord of glory&rdquo; (1 Corinthians 2:8). The psalm&rsquo;s question still rings out to us, and the gospel gives the answer: the King of glory is the risen and reigning Christ. <em>Cross references: 1 Corinthians 2:8; Colossians 2:15; Revelation 19:11&ndash;16; James 2:1.</em></p>",
    },
    {
      id: "t-procession",
      title: "Worship as Procession",
      color: PURPLE,
      html:
        "<p>Psalm 24 was almost certainly composed for a procession &mdash; very possibly the bringing of the ark of the covenant up to Jerusalem in the days of David (2 Samuel 6). The ark was the visible sign of the LORD&rsquo;s throne, and as it ascended Zion the people sang of the King of glory entering His gates. Worship here is not a private mood but a corporate movement, a whole people advancing together toward the presence of God.</p>" +
        "<p>This processional character teaches us something about all true worship: it is a journey toward God, taken in the company of His people, with our eyes fixed on the King at the front. The Christian life itself is a kind of procession &mdash; following the King of glory who has gone before us through the everlasting doors, on our way to the city where He reigns. One day the gates of the New Jerusalem will be opened to receive the whole redeemed company in the train of their triumphant King. <em>Cross references: 2 Samuel 6:12&ndash;19; Psalm 68:24&ndash;25; Hebrews 12:22&ndash;24; Revelation 21:25&ndash;27.</em></p>",
    },
  ];

  const verseItems: { id: string; ref: string; color: string; html: string }[] = [
    {
      id: "v1",
      ref: "Psalm 24:1&ndash;2 &mdash; The Earth Is the LORD&rsquo;s",
      color: PURPLE,
      html:
        "<p>&ldquo;The earth is the LORD&rsquo;s and the fullness thereof, the world and those who dwell therein, for he has founded it upon the seas and established it upon the rivers.&rdquo;</p>" +
        "<p>The psalm begins not at the temple but at the foundations of the world. Before it asks who may approach God, it establishes who God is: the Creator and rightful Owner of everything. &ldquo;The fullness thereof&rdquo; means all that fills the earth &mdash; its riches, its creatures, its peoples. Nothing is excluded from His claim, for He made it all.</p>" +
        "<p>To say that He &ldquo;founded it upon the seas&rdquo; reflects the ancient picture of dry land set firmly above the chaotic waters &mdash; a testimony to God&rsquo;s power to bring stable order out of the deep. The verse sets the stage for everything that follows: if all the earth belongs to this God, then the question of how we may come into His presence becomes the most pressing question of all. Paul cites this opening line in 1 Corinthians 10:26 to ground a life of grateful, free-hearted stewardship.</p>",
    },
    {
      id: "v2",
      ref: "Psalm 24:3&ndash;4 &mdash; Who Shall Ascend?",
      color: ROSE,
      html:
        "<p>&ldquo;Who shall ascend the hill of the LORD? And who shall stand in his holy place? He who has clean hands and a pure heart, who does not lift up his soul to what is false and does not swear deceitfully.&rdquo;</p>" +
        "<p>Now the great question is asked, and answered. To &ldquo;ascend the hill of the LORD&rdquo; is to climb Mount Zion to worship; to &ldquo;stand in his holy place&rdquo; is to remain in God&rsquo;s presence. The answer names four marks of the one fit to come: clean hands (righteous deeds), a pure heart (inward integrity), a soul not given to what is false (no idolatry or vanity), and lips that do not swear deceitfully (truthfulness).</p>" +
        "<p>Together these describe a whole person aligned with God in deed, in heart, in devotion, and in speech. The standard is searching and high &mdash; deliberately so. It exposes our need and points beyond ourselves to the One who alone fulfills it perfectly and shares His purity with us. The requirement humbles every worshiper and drives us to seek the cleansing only God can give. <em>Compare Psalm 15:2&ndash;4; Psalm 51:6&ndash;10.</em></p>",
    },
    {
      id: "v3",
      ref: "Psalm 24:5&ndash;6 &mdash; He Will Receive Blessing",
      color: GOLD,
      html:
        "<p>&ldquo;He will receive blessing from the LORD and righteousness from the God of his salvation. Such is the generation of those who seek him, who seek the face of the God of Jacob.&rdquo;</p>" +
        "<p>The one who comes rightly does not earn a wage; he receives a gift. &ldquo;Blessing&rdquo; and &ldquo;righteousness&rdquo; come <em>from the LORD</em>, from &ldquo;the God of his salvation.&rdquo; This is a vital turn. The clean hands and pure heart of verse 4 are not a ladder we climb to merit God&rsquo;s favor; the favor itself, the very righteousness required, is bestowed by the God who saves. Approach to God is grace from beginning to end.</p>" +
        "<p>And what marks such people? They are &ldquo;the generation of those who seek him, who seek the face of the God of Jacob.&rdquo; The fundamental disposition of the true worshiper is to seek God&rsquo;s face &mdash; to desire His presence above all else. This is the heart that God Himself creates and welcomes. Those who seek Him will not be turned away empty; they will receive His blessing and His righteousness. <em>Compare Psalm 27:8; Hebrews 11:6; Matthew 7:7&ndash;8.</em></p>",
    },
    {
      id: "v4",
      ref: "Psalm 24:7&ndash;8 &mdash; The King of Glory Comes In",
      color: TEAL,
      html:
        "<p>&ldquo;Lift up your heads, O gates! And be lifted up, O ancient doors, that the King of glory may come in. Who is this King of glory? The LORD, strong and mighty, the LORD, mighty in battle!&rdquo;</p>" +
        "<p>The scene shifts dramatically to the gates of the holy city. A commanding voice calls upon the ancient doors to lift up their heads &mdash; to throw themselves open &mdash; for the entrance of the King of glory. The gates are personified, summoned to rise in honor of One greater than any earthly ruler who has ever passed through them.</p>" +
        "<p>From within, a voice answers with the question, &ldquo;Who is this King of glory?&rdquo; And the reply rings out: &ldquo;The LORD, strong and mighty, the LORD, mighty in battle!&rdquo; The King who enters is the divine Warrior, the God who fights and wins for His people. The church has heard here the ascending Christ entering the gates of heaven in triumph, having won the decisive victory over sin and death at the cross. <em>Compare Colossians 2:15; Ephesians 4:8; Psalm 68:18.</em></p>",
    },
    {
      id: "v5",
      ref: "Psalm 24:9&ndash;10 &mdash; The LORD of Hosts",
      color: GREEN,
      html:
        "<p>&ldquo;Lift up your heads, O gates! And lift them up, O ancient doors, that the King of glory may come in. Who is this King of glory? The LORD of hosts, he is the King of glory!&rdquo;</p>" +
        "<p>The call is repeated, and so is the question &mdash; but now the answer rises to its highest pitch. The King of glory is &ldquo;the LORD of hosts,&rdquo; the commander of all the armies of heaven, the sovereign over every power that exists. This is the climactic revelation toward which the whole psalm has been moving: the One entering the gates is the LORD Almighty Himself.</p>" +
        "<p>The doubled summons and the doubled question give the ending the feel of an antiphonal shout, a worshiping crowd answering itself back and forth until the truth fills the air: &ldquo;He is the King of glory!&rdquo; For the church, this is the cry of Ascension and the hope of the last day, when the King of glory will be welcomed by His whole redeemed people, and every gate will be lifted up before the LORD of hosts. <em>Compare 1 Corinthians 2:8; Revelation 19:16; Philippians 2:9&ndash;11.</em></p>",
    },
  ];

  const appBlocks: { heading: string; color: string; html: string }[] = [
    {
      heading: "Hold All Things with an Open Hand",
      color: PURPLE,
      html:
        "<p>&ldquo;The earth is the LORD&rsquo;s and the fullness thereof.&rdquo; If everything belongs to God, then nothing we possess is ultimately our own. This single truth, taken seriously, transforms how we hold our money, our time, our gifts, and even our lives. We are stewards, not owners, accountable to the One who entrusted these things to us and free to enjoy them with gratitude as His good gifts.</p>" +
        "<p>Let this confession loosen the grip of greed and anxiety. The God who owns all things is well able to provide for His children, and He delights to give. Receive every blessing with thanksgiving, hold each one loosely, and use what you have been given for the glory of its true Owner.</p>",
    },
    {
      heading: "Take the Approach to God Seriously",
      color: ROSE,
      html:
        "<p>&ldquo;Who shall ascend the hill of the LORD?&rdquo; Psalm 24 will not let us be casual about coming into God&rsquo;s presence. To worship the holy God is the most serious privilege we have. The psalm calls us to examine ourselves &mdash; our hands and our hearts, our devotion and our speech &mdash; and to come before Him with reverence rather than carelessness.</p>" +
        "<p>Yet this seriousness is never meant to crush us with despair. It is meant to drive us to grace. When the standard of clean hands and a pure heart exposes how far short we fall, we are pointed straight to the One who supplies what He requires. Come, then, with honest self-examination and with confident faith in the God who cleanses those who draw near through Christ.</p>",
    },
    {
      heading: "Seek a Pure Heart in Christ",
      color: GOLD,
      html:
        "<p>The requirement of &ldquo;clean hands and a pure heart&rdquo; finds its answer in the gospel. No sinner produces such purity on his own, but Christ &mdash; who alone had perfectly clean hands and a pure heart &mdash; gives His righteousness to all who trust Him and creates clean hearts within them by His Spirit. &ldquo;Blessed are the pure in heart, for they shall see God&rdquo; (Matthew 5:8).</p>" +
        "<p>So pray with David, &ldquo;Create in me a clean heart, O God&rdquo; (Psalm 51:10). Pursue integrity in your actions and truthfulness in your words, not to earn God&rsquo;s welcome but because you have already been welcomed in Christ. The blessing and the righteousness come from the God of your salvation; let your life increasingly match the cleansing He has freely given.</p>",
    },
    {
      heading: "Open the Gates to the King",
      color: TEAL,
      html:
        "<p>&ldquo;Lift up your heads, O gates&hellip; that the King of glory may come in.&rdquo; The psalm ends not with us climbing up to God but with the King coming down to enter His city &mdash; and His people. The ancient doors swing wide for the LORD of hosts. The personal application is unmistakable: the King of glory asks for the doors of our own lives to be lifted up before Him.</p>" +
        "<p>Where will you welcome His reign today? In the rooms of your life you have kept shut, in the areas you have ruled yourself, the call goes out: lift up your heads, that the King of glory may come in. He who triumphed over sin and death enters not to plunder but to bless. Open every gate to Him, and let His glory fill the whole house.</p>",
    },
  ];

  const questions: string[] = [
    "If &ldquo;the earth is the LORD&rsquo;s and the fullness thereof,&rdquo; how would truly believing this change the way you hold your possessions, your money, and your plans?",
    "The psalm asks, &ldquo;Who shall ascend the hill of the LORD?&rdquo; When you come to worship, do you tend toward casualness or reverence? What would it look like to take the privilege of approaching God more seriously?",
    "&ldquo;Clean hands and a pure heart&rdquo; touches both our deeds and our inner life. Where do your outward actions and your inward heart most need God&rsquo;s cleansing right now?",
    "Psalm 24 promises that the worshiper &ldquo;will receive blessing from the LORD and righteousness from the God of his salvation.&rdquo; How does it free you to know that the righteousness God requires is also the righteousness He gives?",
    "The gates are commanded to lift up their heads for the King of glory. Which doors in your own life have you been slow to open to His reign, and what would it mean to welcome Him there?",
    "The church sings this psalm at the Ascension, celebrating Christ entering heaven&rsquo;s gates in triumph. How does picturing the risen Christ as the victorious King of glory strengthen your hope and your worship?",
  ];

  const prayerHtml =
    "<p>O LORD of hosts, the earth is yours and the fullness thereof, the world and all who dwell in it. You founded it and you rule it; every good thing I hold is a gift from your hand. Teach me to live as a steward and not an owner, holding all things loosely and giving you thanks for all things.</p>" +
    "<p>You alone are holy, and you ask of those who would ascend your hill clean hands and a pure heart. I confess that I cannot produce such purity in myself. Create in me a clean heart, O God; cleanse my hands, purify my desires, and make my words true. Clothe me in the righteousness of Christ, my Savior, who alone fulfilled all that you require and who gives himself to me.</p>" +
    "<p>King of glory, lift up the gates of my life and come in. Reign over every room, every desire, every fear. You are strong and mighty, the Lord mighty in battle, who triumphed over sin and death and entered the everlasting doors of heaven in glory. Lead me at last into your holy presence, in the company of all your people, that I may behold your face and rejoice. In the name of Jesus, the King of glory, Amen.</p>";

  const tabBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: "0.6rem 1.1rem",
    borderRadius: 999,
    border: `1px solid ${active ? PURPLE : BORDER}`,
    background: active ? PURPLE : "transparent",
    color: active ? "#FFFFFF" : MUTED,
    cursor: "pointer",
    fontSize: "0.95rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
    transition: "all 0.15s ease",
  });

  const accordion = (
    items: { id: string; title?: string; ref?: string; color: string; html: string }[]
  ) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {items.map((it) => {
        const isOpen = open === it.id;
        const label = it.title ?? it.ref ?? "";
        return (
          <div
            key={it.id}
            style={{
              background: CARD,
              border: `1px solid ${isOpen ? it.color : BORDER}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(it.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1.1rem 1.3rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: it.color,
                    flexShrink: 0,
                    boxShadow: `0 0 12px ${it.color}`,
                  }}
                />
                <span
                  dangerouslySetInnerHTML={{ __html: label }}
                  style={{ color: TEXT, fontSize: "1.08rem", fontWeight: 600 }}
                />
              </span>
              <span
                style={{
                  color: it.color,
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s ease",
                }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                dangerouslySetInnerHTML={{ __html: it.html }}
                style={{
                  padding: "0 1.3rem 1.3rem",
                  color: MUTED,
                  fontSize: "1.02rem",
                  lineHeight: 1.75,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <style>{`
        .vine-prose p { margin: 0 0 1rem; }
        .vine-prose p:last-child { margin-bottom: 0; }
        .vine-prose strong { color: ${TEXT}; }
        .vine-prose em { color: ${MUTED}; }
      `}</style>

      {/* Hero */}
      <section
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "2.5rem 1.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: PURPLE,
            fontWeight: 700,
            marginBottom: "0.9rem",
          }}
        >
          The Vine &middot; Bible Study
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            margin: "0 0 0.6rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Psalm 24
        </h1>
        <p
          style={{
            color: MUTED,
            fontSize: "1.15rem",
            margin: "0 auto 1.6rem",
            maxWidth: 640,
            lineHeight: 1.6,
          }}
        >
          The psalm of the King of glory &mdash; the earth as the LORD&rsquo;s,
          the question of who may ascend His hill, and the ancient gates lifting
          up their heads for the King to come in.
        </p>
        <div
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderLeft: `4px solid ${GOLD}`,
            borderRadius: 14,
            padding: "1.3rem 1.5rem",
            maxWidth: 660,
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: GOLD,
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Key Verse &middot; Psalm 24:7
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html:
                "&ldquo;Lift up your heads, O gates! And be lifted up, O ancient doors, that the King of glory may come in.&rdquo;",
            }}
            style={{
              margin: 0,
              fontSize: "1.3rem",
              lineHeight: 1.55,
              fontStyle: "italic",
              color: TEXT,
            }}
          />
        </div>
      </section>

      {/* Tab bar */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 20,
          background: "rgba(7,7,15,0.85)",
          backdropFilter: "blur(10px)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "0.85rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            display: "flex",
            gap: "0.6rem",
            overflowX: "auto",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
                setOpen(null);
              }}
              style={tabBtnStyle(tab === t)}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </nav>

      {/* Panels */}
      <main
        style={{
          maxWidth: 920,
          margin: "0 auto",
          padding: "2rem 1.5rem 4rem",
        }}
      >
        {tab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {overviewBlocks.map((b, i) => (
              <article
                key={i}
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${b.color}`,
                  borderRadius: 16,
                  padding: "1.6rem 1.7rem",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 1rem",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: b.color,
                  }}
                >
                  {b.heading}
                </h2>
                <div
                  className="vine-prose"
                  dangerouslySetInnerHTML={{ __html: b.html }}
                  style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.78 }}
                />
              </article>
            ))}
          </div>
        )}

        {tab === "themes" && (
          <div>
            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginTop: 0,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Seven threads run through this processional psalm. Tap each to
              explore the theme and its connections across Scripture.
            </p>
            {accordion(themeItems)}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <p
              style={{
                color: MUTED,
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginTop: 0,
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Walk through Psalm 24 from the foundations of the earth to the gates
              flung wide for the King of glory.
            </p>
            {accordion(verseItems)}
          </div>
        )}

        {tab === "application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {appBlocks.map((b, i) => (
                <article
                  key={i}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `4px solid ${b.color}`,
                    borderRadius: 14,
                    padding: "1.5rem 1.6rem",
                  }}
                >
                  <h2
                    style={{
                      margin: "0 0 0.9rem",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: b.color,
                    }}
                  >
                    {b.heading}
                  </h2>
                  <div
                    className="vine-prose"
                    dangerouslySetInnerHTML={{ __html: b.html }}
                    style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.78 }}
                  />
                </article>
              ))}
            </div>

            {/* Reflection questions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${TEAL}`,
                borderRadius: 16,
                padding: "1.7rem 1.8rem",
              }}
            >
              <h2
                style={{
                  margin: "0 0 1.2rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: TEAL,
                }}
              >
                Questions for Reflection
              </h2>
              <ol
                style={{
                  margin: 0,
                  paddingLeft: "1.3rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {questions.map((q, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: q }}
                    style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7 }}
                  />
                ))}
              </ol>
            </div>

            {/* Videos */}
            <div>
              <h2
                style={{
                  margin: "0 0 1.2rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: PURPLE,
                  textAlign: "center",
                }}
              >
                Watch &amp; Reflect
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.2rem",
                }}
              >
                {videoItems.map((v) => (
                  <div
                    key={v.videoId}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div
                      dangerouslySetInnerHTML={{ __html: v.title }}
                      style={{
                        padding: "0.9rem 1.1rem",
                        color: TEXT,
                        fontSize: "0.98rem",
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Closing prayer */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `3px solid ${GOLD}`,
                borderRadius: 16,
                padding: "1.8rem",
              }}
            >
              <h2
                style={{
                  margin: "0 0 1.1rem",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: GOLD,
                }}
              >
                A Closing Prayer
              </h2>
              <div
                className="vine-prose"
                dangerouslySetInnerHTML={{ __html: prayerHtml }}
                style={{
                  color: MUTED,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
