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
  { id: "verse", label: "Verse by Verse" },
  { id: "application", label: "Application" },
];

const videoItems = [
  { videoId: "MkETxg_n5Bg", title: "Gospel of Matthew Overview (Chapters 1-13)" },
  { videoId: "GGCF3OPWN14", title: "The Birth of Jesus the Messiah" },
  { videoId: "qjUTBKHk1Ow", title: "The Visit of the Magi and the Flight to Egypt" },
  { videoId: "1MgQGdMmRBk", title: "Out of Egypt I Called My Son" },
];

const THEME_ITEMS = [
  {
    color: GOLD,
    title: "Gentiles Seek While Jerusalem Trembles",
    body: "The most arresting irony of the chapter is who comes and who stays away. Pagan astrologers from a distant land travel hundreds of miles to worship the newborn King, while the religious capital of Israel does not stir from its own streets. &ldquo;When Herod the king heard this, he was troubled, and all Jerusalem with him&rdquo; (2:3). The very people entrusted with the Scriptures react with fear rather than faith, foreshadowing the gospel pattern in which outsiders embrace Jesus and insiders reject him. Matthew thus signals from the opening pages that the good news is for the nations.",
  },
  {
    color: GREEN,
    title: "The Fulfillment of Prophecy",
    body: "Matthew structures the chapter around his characteristic fulfillment formula, the refrain that an event happened &ldquo;to fulfill what the Lord had spoken by the prophet.&rdquo; Four Old Testament citations punctuate the narrative: Micah 5:2 on Bethlehem, Hosea 11:1 on Egypt, Jeremiah 31:15 on Rachel weeping, and the prophetic word that he would be called a Nazarene. By weaving these texts into the story, Matthew presents the infancy of Jesus not as a series of accidents but as the unfolding of a divine script written centuries in advance. The whole history of Israel converges upon this child.",
  },
  {
    color: PURPLE,
    title: "The Worship of the Christ Child",
    body: "When the star halts over the place where the child was, the magi &ldquo;fell down and worshiped him&rdquo; (2:11). This is the heart of the chapter, the moment toward which the journey has been moving. Their gifts of gold, frankincense, and myrrh have been read for centuries as a confession in symbol: gold for a king, frankincense for one worthy of priestly and divine honor, and myrrh for the burial that awaited him. The first to bow before the King of the Jews are foreigners, kneeling in a humble house, offering their treasures to a child.",
  },
  {
    color: ROSE,
    title: "Earthly Kings Against the True King",
    body: "Herod represents the perennial collision between the kingdoms of this world and the kingdom of God. Threatened by the rumor of a rival born king, he resorts first to deceit and then to murder, slaughtering the infants of Bethlehem in a futile attempt to destroy the child (2:16). The contrast could not be sharper: an aging tyrant clinging to power by violence, and a true King who comes in vulnerability and will one day reign by laying down his life. Every Herod since has feared the cradle that he cannot control.",
  },
  {
    color: TEAL,
    title: "The New Moses and the New Israel",
    body: "Matthew layers the story with echoes of the exodus. Herod plays the role of Pharaoh, slaughtering male children just as Pharaoh once did, while the child Jesus is rescued, carried into Egypt, and called back out of it. Hosea&rsquo;s words, &ldquo;Out of Egypt I called my son&rdquo; (2:15), originally spoke of the nation Israel, but Matthew sees Jesus recapitulating and embodying Israel&rsquo;s entire story. He is the new Moses who will deliver his people and the faithful Son who succeeds where the old Israel failed.",
  },
  {
    color: GOLD,
    title: "Suffering and Providence Intertwined",
    body: "The chapter holds together joy and horror without flinching. The worship of the magi gives way to the flight by night and the weeping of Ramah, where Rachel mourns her children and refuses to be comforted (2:18). Yet through warnings in dreams and the obedience of Joseph, God preserves his Son in the midst of a violent world. Matthew teaches that divine providence does not exempt the holy family from danger and grief but guides them through it, weaving even the cruelty of tyrants into the saving purpose of God.",
  },
];

const VERSE_ITEMS = [
  {
    ref: "Matthew 2:1-2",
    heading: "The Magi Arrive Seeking the King",
    body: "&ldquo;Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, wise men from the east came to Jerusalem&rdquo; (2:1). These magi were learned men, likely astrologers and counselors from the region of Persia or Babylon, far outside the covenant people. Their question is bold and political: &ldquo;Where is he who has been born king of the Jews? For we saw his star when it rose and have come to worship him&rdquo; (2:2). That Gentiles should read the heavens and travel so far to honor a Jewish King is Matthew&rsquo;s opening hint that this child belongs to the whole world.",
  },
  {
    ref: "Matthew 2:3-6",
    heading: "Herod Troubled and Bethlehem Foretold",
    body: "The arrival of the magi sends a tremor through the palace: &ldquo;When Herod the king heard this, he was troubled, and all Jerusalem with him&rdquo; (2:3). Herod assembles the chief priests and scribes to learn where the Christ is to be born, and they answer from Micah 5:2: &ldquo;And you, O Bethlehem, in the land of Judah, are by no means least among the rulers of Judah; for from you shall come a ruler who will shepherd my people Israel&rdquo; (2:6). The Davidic city is named, binding this child to the ancient promise of a shepherd-king from the line of David.",
  },
  {
    ref: "Matthew 2:7-8",
    heading: "Herod's Secret Deceit",
    body: "Herod now reveals his true character. He &ldquo;summoned the wise men secretly and ascertained from them what time the star had appeared&rdquo; (2:7), gathering intelligence for a darker purpose. He sends them on to Bethlehem with a velvet command: &ldquo;Go and search diligently for the child, and when you have found him, bring me word, that I too may come and worship him&rdquo; (2:8). The word worship drips with hypocrisy, for his intent is not adoration but assassination. The contrast between Herod&rsquo;s feigned reverence and the magi&rsquo;s sincere worship frames the entire scene.",
  },
  {
    ref: "Matthew 2:9-12",
    heading: "The Star, the Worship, and the Gifts",
    body: "The star reappears and goes before them &ldquo;until it came to rest over the place where the child was&rdquo; (2:9), filling them with overwhelming joy. Entering the house, they see the child with Mary his mother, and they fall down and worship him, opening their treasures to offer &ldquo;gold and frankincense and myrrh&rdquo; (2:11). These three gifts have long been read as a portrait of his identity: gold for the King, frankincense for the divine and priestly, and myrrh anticipating his death. Warned in a dream not to return to Herod, they depart to their own country by another way.",
  },
  {
    ref: "Matthew 2:13-15",
    heading: "The Flight to Egypt",
    body: "An angel of the Lord appears to Joseph in a dream with an urgent charge: &ldquo;Rise, take the child and his mother, and flee to Egypt&rdquo; (2:13), for Herod is about to seek the child to destroy him. Joseph obeys at once, rising by night to carry his family to safety in the very land that once enslaved Israel. Matthew sees in this the fulfillment of Hosea: &ldquo;Out of Egypt I called my son&rdquo; (2:15). The infant King relives the journey of his people, and the Egypt that once meant bondage becomes, for a season, a place of refuge for the world&rsquo;s deliverer.",
  },
  {
    ref: "Matthew 2:16-18",
    heading: "The Slaughter of the Innocents",
    body: "Realizing he has been outwitted by the magi, Herod erupts in fury and orders the killing of &ldquo;all the male children in Bethlehem and in all that region who were two years old or under&rdquo; (2:16). The atrocity fulfills the lament of Jeremiah: &ldquo;A voice was heard in Ramah, weeping and loud lamentation, Rachel weeping for her children; she refused to be comforted, because they are no more&rdquo; (2:18). Matthew does not soften the horror; he lets the cry of bereaved mothers stand alongside the joy of the magi, reminding us that the coming of the King provoked the rage of a dying age.",
  },
  {
    ref: "Matthew 2:19-21",
    heading: "The Return from Egypt",
    body: "After Herod dies, the angel of the Lord again appears to Joseph in Egypt and tells him to take the child and his mother back to the land of Israel, &ldquo;for those who sought the child&rsquo;s life are dead&rdquo; (2:20). The wording deliberately echoes God&rsquo;s words to Moses in Midian, casting Jesus once more in the pattern of the great deliverer who returns to lead his people. Joseph again obeys without hesitation, rising and bringing the child back into the land of promise, his quiet faithfulness threading through the whole narrative.",
  },
  {
    ref: "Matthew 2:22-23",
    heading: "Settling in Nazareth",
    body: "Warned in yet another dream and afraid of Archelaus who now reigns in Judea, Joseph withdraws to the district of Galilee and settles in a town called Nazareth (2:22-23). Matthew rounds off his infancy account with a final fulfillment: &ldquo;he shall be called a Nazarene.&rdquo; No single Old Testament verse reads exactly this way, so Matthew likely gathers the broad prophetic witness that the Messiah would be despised and lowly, since Nazareth was an obscure and slighted village. The King of the Jews grows up not in a palace but in a place from which people doubted anything good could come.",
  },
];

const APPLICATION_ITEMS = [
  {
    color: GREEN,
    title: "Seek Him as the Magi Did",
    body: "The wise men model a costly, persistent search for Christ that puts the complacency of Jerusalem to shame. They followed the light they were given, traveled far, asked honest questions, and would not rest until they had found the King and bowed before him. Their example calls every reader to a wholehearted seeking that does not settle for secondhand religion but presses on to genuine worship. Those who have far less knowledge than the scribes may yet outrun them in devotion if they will simply follow the light God provides.",
  },
  {
    color: PURPLE,
    title: "Offer Your Treasures in Worship",
    body: "When the magi found the child, they did not merely admire him; they opened their treasures and gave (2:11). Worship in Matthew 2 is embodied, costly, and generous, expressed in kneeling and in gifts laid down. The believer is invited to bring not only words but resources, time, and life itself to lay before the King. True adoration always moves the hand to give, for what we treasure most belongs at the feet of the One who is worthy.",
  },
  {
    color: ROSE,
    title: "Beware the Herod Within",
    body: "Herod shows how the heart resists a King it cannot control, masking hostility behind the language of worship. The same impulse can hide in any of us when the lordship of Christ threatens our comfort, our plans, or our grip on power. The chapter calls for honest self-examination: are we surrendering to the true King, or quietly defending a throne of our own? Allegiance to Christ means dethroning every rival ambition that would rather destroy him than yield to him.",
  },
  {
    color: TEAL,
    title: "Trust Providence Through Suffering",
    body: "The flight to Egypt and the grief of Ramah remind us that following God does not guarantee a path free of danger or sorrow. Joseph obeyed in the dark, acting on dreams and trusting a God he could not see, and through that obedience the Son was preserved. When our own circumstances feel chaotic or cruel, Matthew 2 assures us that God is at work even in the night journeys, weaving his redemptive purpose through the hardest providences. Faithfulness often looks like rising at once to obey, even when the road leads into exile.",
  },
];

const REFLECTION_QUESTIONS = [
  "The magi traveled far to worship a King they had only glimpsed in a star; what is your own search for Christ costing you, and where is it leading?",
  "The scribes knew exactly where the Messiah would be born yet never went to find him; where might knowledge have replaced devotion in your own life?",
  "What treasures has God given you that you might lay before the King as the magi laid down their gifts?",
  "In what ways do you, like Herod, resist surrendering some throne to the rightful King while outwardly professing worship?",
  "How does the picture of God guiding the holy family through danger and grief shape your trust in his providence over your own night journeys?",
];

export default function Matthew2GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => setLoaded(true), []);

  if (!loaded) return null;

  return (
    <div
      style={{
        paddingTop: "var(--header-height, 80px)",
        background: BG,
        color: TEXT,
        minHeight: "100vh",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      {/* Hero */}
      <header
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2rem",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: GOLD,
            border: `1px solid ${BORDER}`,
            borderRadius: "999px",
            padding: "0.4rem 1rem",
            marginBottom: "1.5rem",
          }}
        >
          Chapter Guide
        </span>
        <h1
          style={{
            fontSize: "2.6rem",
            lineHeight: 1.15,
            margin: "0 0 1rem",
            fontWeight: 700,
          }}
        >
          Matthew 2
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: MUTED,
            margin: "0 0 1.5rem",
            fontStyle: "italic",
          }}
        >
          The Magi, the Flight to Egypt, and the Slaughter of the Innocents
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            color: TEXT,
            maxWidth: "640px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
          dangerouslySetInnerHTML={{
            __html:
              "&ldquo;Where is he who has been born king of the Jews? For we saw his star when it rose and have come to worship him.&rdquo; &mdash; Matthew 2:2",
          }}
        />
      </header>

      {/* Sticky tab nav */}
      <nav
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 10,
          background: `${BG}EE`,
          backdropFilter: "blur(8px)",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? GREEN : "transparent",
                color: activeTab === tab.id ? "#FFFFFF" : MUTED,
                border: `1px solid ${activeTab === tab.id ? GREEN : BORDER}`,
                borderRadius: "999px",
                padding: "0.5rem 1.1rem",
                fontSize: "0.95rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main
        style={{
          maxWidth: "880px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem 1rem",
        }}
      >
        {/* Overview */}
        {activeTab === "overview" && (
          <section>
            <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: GOLD }}>
              A King Worshiped and a King Enraged
            </h2>
            <p
              style={{ lineHeight: 1.75, fontSize: "1.05rem", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "Matthew 2 carries the reader from the wonder of distant stargazers kneeling before a child to the anguish of mothers weeping in Bethlehem, all within a single tightly woven chapter. Matthew has already established in chapter 1 that Jesus is the son of David and the son of Abraham, conceived by the Spirit and named for the salvation he would bring. Now he shows how the world responds to the arrival of this King, and the responses could not be more opposed. Foreign magi come to worship while the reigning king of Judea plots murder, and Jerusalem itself trembles rather than rejoices.",
              }}
            />
            <p
              style={{ lineHeight: 1.75, fontSize: "1.05rem", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "The chapter is built around movement and geography: from the east to Jerusalem, from Jerusalem to Bethlehem, from Bethlehem down to Egypt, and from Egypt back to Nazareth. Each stage is anchored to an Old Testament text, so that the journey of the holy family becomes a tapestry of fulfilled prophecy. Matthew wants his readers, especially those steeped in the Scriptures of Israel, to see that nothing here is random; the hand of God is directing every step, even through the schemes of a tyrant and the flight of refugees by night.",
              }}
            />
            <h3 style={{ fontSize: "1.35rem", marginTop: "2rem", color: TEAL }}>
              The Shape of the Chapter
            </h3>
            <p
              style={{ lineHeight: 1.75, fontSize: "1.05rem", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "The narrative unfolds in clear scenes: the coming of the magi and their question, Herod&rsquo;s troubled inquiry and the prophecy of Bethlehem, the deceitful commission, the star and the worship with gifts, the angelic warning and the flight to Egypt, the slaughter of the innocents, and finally the return and the settling in Nazareth. Threaded through these scenes are four fulfillment citations drawn from Micah, Hosea, Jeremiah, and the broad prophetic witness. Together they present the infancy of Jesus as the convergence of Israel&rsquo;s whole hope upon one vulnerable child.",
              }}
            />
            <p
              style={{ lineHeight: 1.75, fontSize: "1.05rem", color: TEXT }}
              dangerouslySetInnerHTML={{
                __html:
                  "Beneath the surface runs a profound typology that links Jesus to Moses and to Israel itself. As Pharaoh once slaughtered Hebrew infants and Moses escaped, so Herod slaughters the children of Bethlehem and the true deliverer is preserved. As Israel was once called out of Egypt, so the Son is called out of Egypt, recapitulating the nation&rsquo;s story and beginning to fulfill it. To read Matthew 2 well is to watch the new Moses and the faithful Israel step quietly onto the stage of history, surrounded by both worship and violence.",
              }}
            />
          </section>
        )}

        {/* Key Themes */}
        {activeTab === "themes" && (
          <section>
            <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: GOLD }}>
              Key Themes of Matthew 2
            </h2>
            <p
              style={{ lineHeight: 1.7, fontSize: "1.05rem", color: MUTED }}
              dangerouslySetInnerHTML={{
                __html:
                  "Six great themes rise from this chapter, moving from the surprising worship of the nations to the deep typology of the new Moses and the providence of God in the midst of suffering. Each repays slow and prayerful reflection.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.75rem" }}>
              {THEME_ITEMS.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `4px solid ${item.color}`,
                    borderRadius: "10px",
                    padding: "1.4rem 1.6rem",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.6rem", fontSize: "1.3rem", color: item.color }}>
                    {item.title}
                  </h3>
                  <p
                    style={{ margin: 0, lineHeight: 1.7, fontSize: "1.02rem", color: TEXT }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Verse by Verse */}
        {activeTab === "verse" && (
          <section>
            <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: GOLD }}>
              Verse by Verse Through Matthew 2
            </h2>
            <p
              style={{ lineHeight: 1.7, fontSize: "1.05rem", color: MUTED }}
              dangerouslySetInnerHTML={{
                __html:
                  "Following the chapter scene by scene reveals how Matthew binds narrative and prophecy together, drawing on Micah, Hosea, Jeremiah, and the prophetic witness to frame every movement of the story.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.75rem" }}>
              {VERSE_ITEMS.map((item) => (
                <div
                  key={item.ref}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "10px",
                    padding: "1.5rem 1.7rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: PURPLE,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.ref}
                  </span>
                  <h3 style={{ margin: "0 0 0.7rem", fontSize: "1.35rem", color: TEXT }}>
                    {item.heading}
                  </h3>
                  <p
                    style={{ margin: 0, lineHeight: 1.75, fontSize: "1.03rem", color: TEXT }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Application */}
        {activeTab === "application" && (
          <section>
            <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: GOLD }}>
              Living Out Matthew 2
            </h2>
            <p
              style={{ lineHeight: 1.7, fontSize: "1.05rem", color: MUTED }}
              dangerouslySetInnerHTML={{
                __html:
                  "The drama of Matthew 2 is not merely ancient history; it presses upon the reader with searching invitations to worship, to give, to surrender, and to trust. Here are four ways the chapter calls us to respond.",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.75rem" }}>
              {APPLICATION_ITEMS.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderLeft: `4px solid ${item.color}`,
                    borderRadius: "10px",
                    padding: "1.4rem 1.6rem",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.6rem", fontSize: "1.3rem", color: item.color }}>
                    {item.title}
                  </h3>
                  <p
                    style={{ margin: 0, lineHeight: 1.7, fontSize: "1.02rem", color: TEXT }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2.5rem",
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "12px",
                padding: "1.8rem 1.8rem 1.4rem",
              }}
            >
              <h3 style={{ margin: "0 0 1rem", fontSize: "1.4rem", color: GOLD }}>
                Reflection Questions
              </h3>
              <ol style={{ margin: 0, paddingLeft: "1.2rem", color: TEXT }}>
                {REFLECTION_QUESTIONS.map((q, i) => (
                  <li
                    key={i}
                    style={{ marginBottom: "0.9rem", lineHeight: 1.65, fontSize: "1.02rem" }}
                    dangerouslySetInnerHTML={{ __html: q }}
                  />
                ))}
              </ol>
            </div>
          </section>
        )}
      </main>

      {/* Always-visible video section */}
      <section
        style={{
          maxWidth: "880px",
          margin: "1.5rem auto 0",
          padding: "2.5rem 1.5rem 4rem",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <h2 style={{ fontSize: "1.9rem", marginTop: 0, color: TEAL, textAlign: "center" }}>
          Watch and Go Deeper
        </h2>
        <p
          style={{ lineHeight: 1.7, fontSize: "1.05rem", color: MUTED, textAlign: "center", maxWidth: "620px", margin: "0 auto 2rem" }}
          dangerouslySetInnerHTML={{
            __html:
              "These teaching videos open up the Gospel of Matthew and the story of the magi, the flight to Egypt, and the fulfillment of prophecy in chapter 2.",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {videoItems.map((video) => (
            <div
              key={video.videoId}
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <VideoEmbed videoId={video.videoId} title={video.title} />
              <p
                style={{
                  margin: 0,
                  padding: "0.9rem 1.1rem",
                  fontSize: "0.98rem",
                  color: TEXT,
                  lineHeight: 1.5,
                }}
              >
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
