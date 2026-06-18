"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

export default function Jeremiah23GuidePage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "kGjP2Xm5vLY", title: "Jeremiah 23: False Shepherds and the Righteous Branch" },
    { id: "FbNqR4wJcKo", title: "YHWH Tsidkenu &mdash; The LORD Is Our Righteousness (Jer 23)" },
    { id: "PvMhT9uBxLs", title: "False Prophets in Jeremiah 23 &mdash; How to Tell the Difference" },
    { id: "WxNpQ2yZmRk", title: "The Righteous Branch of David &mdash; Jeremiah 23:5-6 Study" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const verseItems = [
    {
      id: "v1",
      ref: "Jeremiah 23:1-4",
      label: "Woe to the Shepherds",
      body: "The chapter opens with a divine &ldquo;woe&rdquo; oracle, one of Scripture&rsquo;s most solemn pronouncements. In the ancient world, shepherds were a standard image for political rulers and kings, not merely for religious leaders. Jeremiah 23:1 reads: &ldquo;Woe to the shepherds who destroy and scatter the sheep of my pasture! declares the LORD.&rdquo; The indictment is specific &mdash; these leaders have not merely neglected the flock; they have actively destroyed and scattered it. The immediate historical referent is the string of disastrous Judean kings in the decades before the Babylonian exile &mdash; Jehoiakim, Jehoiachin, and Zedekiah &mdash; whose policies of injustice, idolatry, and foolish alliance-making led to the nation&rsquo;s catastrophic unraveling. God&rsquo;s response in 23:2 is a stunning reversal: because these shepherds have scattered the flock, God himself will attend to them in judgment (&ldquo;I will attend to you for your evil deeds&rdquo;). But judgment on false leaders is not the end of the story. Verses 3-4 pivot to promise: &ldquo;Then I myself will gather the remnant of my flock out of all the countries where I have driven them&hellip; I will set shepherds over them who will care for them.&rdquo; God as the true Shepherd will undo what the false shepherds did. The gathered flock will be fruitful and multiply. They will not fear or be dismayed. This is grace operating on the other side of discipline &mdash; the very God who allowed the scattering will orchestrate the ingathering.",
    },
    {
      id: "v2",
      ref: "Jeremiah 23:5-6",
      label: "The Righteous Branch &mdash; YHWH Tsidkenu",
      body: "These two verses constitute one of the most theologically dense messianic promises in the entire Old Testament. &ldquo;Behold, the days are coming, declares the LORD, when I will raise up for David a righteous Branch, and he shall reign as king and deal wisely, and shall execute justice and righteousness in the land. In his days Judah will be saved, and Israel will dwell securely. And this is the name by which he will be called: The LORD is Our Righteousness.&rdquo; The Hebrew word for Branch is tsemach (pronounced tseh-makh), a term that becomes a technical messianic title repeated in Jeremiah 33:15, Zechariah 3:8, 6:12, and Isaiah 11:1 where the related word netser appears. The Branch from David is thus not simply a good king; it is the promised royal descendant who will finally embody all that Davidic kingship was meant to be. What distinguishes this Branch? He will deal wisely (or act prudently), he will execute justice and righteousness, and under his reign both the northern kingdom (Israel) and the southern kingdom (Judah) will be saved and dwell securely. The name YHWH Tsidkenu &mdash; The LORD is Our Righteousness &mdash; is of enormous theological weight. The righteousness that saves Israel does not ultimately come from within Israel; it comes from YHWH himself, applied to the people through this messianic king. The New Testament sees this promise fulfilled in Jesus, who becomes &ldquo;our righteousness&rdquo; in the language of 1 Corinthians 1:30. Believers are declared righteous not on the basis of their own performance but on the basis of YHWH&rsquo;s own righteousness imputed to them through the Messiah.",
    },
    {
      id: "v3",
      ref: "Jeremiah 23:7-8",
      label: "A New Exodus Greater Than the First",
      body: "Immediately following the messianic promise, Jeremiah makes a remarkable comparative claim. There was a day when the defining formula of Israel&rsquo;s identity was: &ldquo;As the LORD lives who brought up the people of Israel out of the land of Egypt.&rdquo; The exodus from Egypt was the constitutive saving act of the Old Testament, the event that defined who God was and what his relationship to Israel meant. But Jeremiah now announces something almost unthinkable: the coming redemption will be so sweeping, so comprehensive, that the exodus formula itself will be displaced. The new formula will be: &ldquo;As the LORD lives who brought up and led the offspring of the house of Israel out of the north country and out of all the countries where he had driven them.&rdquo; This is a typological escalation. The first exodus was geographically specific &mdash; from Egypt in the south. The new exodus will be from every direction, from all the countries of dispersion. The scope is global. The scope of grace is expanding to match the scope of judgment. This pattern of old-type and new-antitype runs throughout the prophets (see also Isaiah 43:18-19: &ldquo;Remember not the former things&hellip; behold, I am doing a new thing&rdquo;). Jeremiah 23:7-8 is the prophetic ground for understanding the new covenant as the fulfillment and surpassing of the Mosaic covenant &mdash; not its abolition but its completion.",
    },
    {
      id: "v4",
      ref: "Jeremiah 23:9-15",
      label: "Jeremiah&rsquo;s Grief &mdash; The Prophets and Priests are Polluted",
      body: "The chapter takes a dramatic tonal shift in verse 9. Jeremiah, who has just delivered soaring messianic poetry, now speaks in his own voice about profound personal anguish: &ldquo;My heart is broken within me; all my bones shake; I am like a drunken man, like a man overcome by wine, because of the LORD and because of his holy words.&rdquo; The prophet is undone &mdash; not by the suffering of the people but by the words of God himself confronting the pollution of Israel&rsquo;s religious leadership. Verses 10-12 describe a land under curse because of the prophets: adultery, abuse of power, paths turned to slipperiness in the dark. Verses 13-14 draw a haunting comparison between the prophets of Samaria (the northern kingdom) and the prophets of Jerusalem. The prophets of Samaria prophesied by Baal and led the people astray &mdash; which was bad enough. But the prophets of Jerusalem are worse: they commit adultery, walk in lies, and strengthen the hands of evildoers, so that no one turns from his evil. The comparison to Sodom and Gomorrah in verse 14 is Jeremiah&rsquo;s most devastating indictment: Jerusalem&rsquo;s prophets have made the holy city as morally reprobate as the cities of the plain. Verse 15 announces the consequence: they will eat bitter food and drink poisoned water. &ldquo;For from the prophets of Jerusalem ungodliness has gone out into all the land.&rdquo; False prophecy is not merely a personal error; it is a moral toxin that spreads through the entire community.",
    },
    {
      id: "v5",
      ref: "Jeremiah 23:16-22",
      label: "Do Not Listen to Them &mdash; The Test of the Council",
      body: "God now speaks directly with the most diagnostic test for distinguishing true from false prophecy in the Old Testament &mdash; the concept of standing in the divine council (sod YHWH). Verse 16: &ldquo;Do not listen to the words of the prophets who prophesy to you, filling you with vain hopes. They speak visions of their own minds, not from the mouth of the LORD.&rdquo; The false prophets are identified by their message of comfort without repentance: &ldquo;They say continually to those who despise the word of the LORD, &lsquo;It shall be well with you&rsquo;; and to everyone who stubbornly follows his own heart, they say, &lsquo;No disaster shall come upon you.&rsquo;&rdquo; (23:17) This is the defining characteristic of false prophecy in every era: it tells people what they want to hear rather than what they need to hear. It disconnects God&rsquo;s blessing from God&rsquo;s moral demands. Verse 18 contains the diagnostic question: &ldquo;For who among them has stood in the council of the LORD to see and to hear his word, or who has paid attention to his word and listened?&rdquo; The sod YHWH (council of the LORD) was the ancient Near Eastern concept of the divine heavenly assembly, in which prophets participated when they received authentic revelation (see also 1 Kings 22, Isaiah 6, Job 1-2). The test is: has this prophet been in God&rsquo;s presence, received his actual word, been confronted by his holiness? The rhetorical implication is clear &mdash; the false prophets have not stood there. Verses 21-22 make it explicit: &ldquo;I did not send the prophets, yet they ran; I did not speak to them, yet they prophesied. But if they had stood in my council, then they would have proclaimed my words to my people, and they would have turned them from their evil way.&rdquo; True prophecy, the text implies, always calls for repentance.",
    },
    {
      id: "v6",
      ref: "Jeremiah 23:23-32",
      label: "I Am a God at Hand &mdash; Dreams vs. the Word",
      body: "Verses 23-24 make a theological point that cuts against any attempt by false prophets to imagine God as distant and uninvolved: &ldquo;Am I a God at hand, declares the LORD, and not a God far away? Can a man hide himself in secret places so that I cannot see him? declares the LORD. Do I not fill heaven and earth? declares the LORD.&rdquo; The rhetorical questions establish divine omniscience and omnipresence as the context for the following indictment. No prophecy made in God&rsquo;s name occurs outside his awareness. If a prophet speaks falsely in YHWH&rsquo;s name, YHWH knows it. Verses 25-28 engage the specific medium of false prophecy: dreams. The false prophets claim, &ldquo;I have dreamed, I have dreamed!&rdquo; God does not deny that dreams can be a medium of revelation (Numbers 12:6), but he sharply distinguishes the straw from the wheat: &ldquo;Let the prophet who has a dream tell the dream, but let him who has my word speak my word faithfully. What has straw in common with wheat? declares the LORD.&rdquo; The false prophets traffic in dreams that communicate only their own unconscious wishes. Against this, God sets the standard: his word is like fire and like a hammer that breaks the rock in pieces (23:29). Authentic divine speech has a quality of confrontation, heat, force. It does not flatter; it fractures. Verses 30-32 accumulate three divine accusations: &ldquo;I am against the prophets&hellip; who steal my words from one another&hellip; who use their tongues and declare &lsquo;declares the LORD&rsquo;&hellip; who prophesy lying dreams.&rdquo; They lead the people astray by their lies and their reckless boasting.",
    },
    {
      id: "v7",
      ref: "Jeremiah 23:33-40",
      label: "The Burden of the LORD",
      body: "The chapter closes with a complex wordplay on the Hebrew word massa, which means both &ldquo;burden&rdquo; and &ldquo;oracle/utterance.&rdquo; In the ancient prophetic tradition, an oracle could be called a massa because it was a weighty message God &ldquo;lifted up&rdquo; and delivered through the prophet. But the people and false prophets have been casually tossing around the phrase &ldquo;What is the burden of the LORD?&rdquo; as a cynical jest, as if asking: what heavy complaint does Jeremiah have for us this time? God&rsquo;s response is both punning and devastating. In verse 33: &ldquo;When one of this people, or a prophet or a priest asks you, &lsquo;What is the burden of the LORD?&rsquo; you shall say to them, &lsquo;You are the burden, and I will cast you off, declares the LORD.&rsquo;&rdquo; The people who have made themselves a burden through their rebellion will be abandoned. Moreover, from this point on, the phrase &ldquo;burden of the LORD&rdquo; is effectively decommissioned as a cynical catchphrase. Each person who uses it will be punished. The emphasis shifts: the word is enough. God&rsquo;s living word itself is sufficient weight and authority. No rhetorical packaging, no dramatic prophetic formula, is needed beyond speaking what God has actually said. The concluding verses (38-40) describe everlasting reproach and shame as the consequence for those who misuse the prophetic word. There is a permanence to the judgment on false speech about God: it shall not be forgotten.",
    },
  ];

  const themeItems = [
    {
      id: "t1",
      color: GREEN,
      label: "Shepherd Imagery for Leadership",
      body: "The metaphor of the shepherd-king is ancient in the Near East &mdash; both Egyptian pharaohs and Mesopotamian rulers bore the title &ldquo;shepherd of the people.&rdquo; Israel&rsquo;s kings inherited this tradition, rooted ultimately in the image of God as the divine Shepherd of his people (Psalm 23, Psalm 80, Ezekiel 34). Jeremiah 23 weaponizes this imagery: the shepherds who were supposed to lead, protect, and feed the flock have instead destroyed and scattered it. The prophetic accusation is not abstract; it targets specific patterns of failed leadership &mdash; exploitation of the weak, indifference to justice, prioritizing personal survival over the welfare of the community. The promise of the righteous Branch and of God himself as Shepherd answers the failure of every human shepherd with a divine Shepherd who will never fail.",
    },
    {
      id: "t2",
      color: GOLD,
      label: "YHWH Tsidkenu &mdash; The LORD Is Our Righteousness",
      body: "The name given to the messianic king in 23:6 is not merely a title; it is a confession of the source of salvation. Tsidkenu derives from the Hebrew root tsedek (righteousness, justice, rightness). The Messiah does not simply teach righteousness or model it; he embodies it and provides it. For the New Testament, this becomes the ground of what Paul calls &ldquo;the righteousness of God&rdquo; made available through faith in Jesus Christ (Romans 3:21-22). The phrase &ldquo;our righteousness&rdquo; is explicitly communal: this is not just the righteousness of a great individual but the righteousness that constitutes and defines a covenant people. To be &ldquo;in Christ&rdquo; (as Paul will later say) is to be in YHWH Tsidkenu, the one in whom the community&rsquo;s standing before God is secure.",
    },
    {
      id: "t3",
      color: PURPLE,
      label: "The Sod YHWH &mdash; The Prophetic Council",
      body: "The concept of the divine council (sod YHWH) is one of the most important and underappreciated frameworks in Old Testament theology. Drawing on ancient Near Eastern traditions of a divine assembly, Israel&rsquo;s prophets understood authentic revelation as participation in God&rsquo;s own deliberations. The false prophets had not been there. They had not stood in God&rsquo;s presence. They had not been confronted by his holiness, his silence, his demand. They ran without being sent. They spoke without listening. Jeremiah 23:18 implies that the test of a true prophet is not primarily external (predictive accuracy) but relational: has this person been genuinely in God&rsquo;s presence? The question echoes across the centuries into the discernment questions every church community must ask of its teachers and prophets.",
    },
    {
      id: "t4",
      color: TEAL,
      label: "False Peace vs. True Peace",
      body: "One of the most culturally resonant themes in Jeremiah 23 is the false peace proclaimed by the lying prophets: &ldquo;It shall be well with you&hellip; no disaster shall come upon you.&rdquo; This is the perennial temptation of religious leadership &mdash; to tell people what they want to hear, to disconnect God&rsquo;s favor from his moral demands, to offer comfort without confrontation. The Hebrew word for peace (shalom) means not merely the absence of conflict but comprehensive well-being, flourishing, right relationship. False prophets counterfeit shalom by promising its surface pleasures &mdash; safety, prosperity, divine approval &mdash; while leaving untouched the broken relationships and disordered loves that shalom is precisely meant to heal. True peace, in Jeremiah&rsquo;s vision, passes through honest confrontation with sin and the genuine experience of God&rsquo;s forgiving justice &mdash; not around them.",
    },
    {
      id: "t5",
      color: ROSE,
      label: "The Tsemach &mdash; The Branch",
      body: "The technical term tsemach (branch, shoot, sprout) becomes in the prophetic literature a concentrated messianic title. Jeremiah 23:5 calls it a &ldquo;righteous branch&rdquo; (tsemach tsaddiq). Jeremiah 33:15 repeats the promise almost verbatim. Zechariah 3:8 calls the messianic figure simply &ldquo;the Branch.&rdquo; Zechariah 6:12 says: &ldquo;Behold, the man whose name is the Branch: for he shall branch out from his place, and he shall build the temple of the LORD.&rdquo; The organic metaphor &mdash; something growing from the stump of David&rsquo;s dynasty &mdash; captures both the apparent death of the Davidic line (the exile terminated the monarchy) and the certainty of its unexpected renewal. Isaiah 11:1 uses the parallel image of a shoot (choter) from the stump of Jesse. The Branch is the answer to political catastrophe: not a restoration of the old monarchy but an unprecedented new growth from what appeared to be a dead root.",
    },
    {
      id: "t6",
      color: GOLD,
      label: "Dreams vs. the Word",
      body: "In the ancient world, dreams were a widely recognized medium of divine communication. The Old Testament itself records significant revelatory dreams (Genesis 20, 37, 40-41; Daniel 2, 7). So why does Jeremiah 23 set dreams so sharply against &ldquo;the word&rdquo;? The distinction is not between two media of revelation but between authentic and counterfeit use of any medium. The false prophets were using dreams &mdash; their own subconscious projections, wishes, and anxieties &mdash; as if they were divine communications. The fire-and-hammer quality of the true prophetic word (23:29) is precisely what their dream-messages lack: the confrontation, the demand, the call to repentance. Any form of supposed divine communication that only confirms what people already believe, that never disturbs or requires anything, should be evaluated carefully in light of Jeremiah&rsquo;s diagnostic.",
    },
  ];

  return (
    <div
      style={{
        background: BG,
        minHeight: "100vh",
        paddingTop: "var(--header-height, 80px)",
        color: TEXT,
        fontFamily: "Georgia, serif",
      }}
    >
      {/* -- HERO --------------------------------------------------------- */}
      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(58,125,86,0.18) 0%, rgba(107,79,187,0.10) 55%, transparent 100%)",
          padding: "72px 24px 56px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(58,125,86,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(58,125,86,0.12)",
            border: "1px solid rgba(58,125,86,0.30)",
            borderRadius: "100px",
            padding: "6px 18px",
            marginBottom: "24px",
            position: "relative",
          }}
        >
          <span
            style={{
              color: GREEN,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            JEREMIAH 23 &mdash; BIBLE STUDY GUIDE
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "20px",
            position: "relative",
            background: "linear-gradient(135deg, #F2F2F8 0%, #C8C8E8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Woe to the Shepherds
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 20px)",
            color: MUTED,
            maxWidth: "680px",
            margin: "0 auto 12px",
            lineHeight: 1.7,
            position: "relative",
          }}
          dangerouslySetInnerHTML={{
            __html:
              "God&rsquo;s shattering indictment of false shepherds, the promise of the righteous Branch of David, and the long exposure of lying prophets who have never stood in the council of the LORD.",
          }}
        />
        <p
          style={{
            fontSize: "13px",
            color: GREEN,
            fontWeight: 600,
            letterSpacing: "0.05em",
            position: "relative",
          }}
        >
          Jeremiah 23:1&ndash;40
        </p>
      </section>

      {/* -- TABS --------------------------------------------------------- */}
      <div
        style={{
          position: "sticky",
          top: "var(--header-height, 80px)",
          zIndex: 20,
          background: BG,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            gap: "0",
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "14px 20px",
                background: "transparent",
                border: "none",
                borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent",
                color: tab === t ? GREEN : MUTED,
                fontWeight: tab === t ? 700 : 500,
                fontSize: "14px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, sans-serif",
                transition: "color 0.15s",
              }}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      {/* -- CONTENT ------------------------------------------------------ */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px 96px" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            {/* Summary card */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `4px solid ${GREEN}`,
                borderRadius: "20px",
                padding: "40px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  color: GREEN,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "16px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                CHAPTER OVERVIEW
              </p>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 30px)",
                  fontWeight: 800,
                  color: TEXT,
                  marginBottom: "24px",
                  lineHeight: 1.25,
                }}
              >
                False Shepherds, the Righteous Branch, and Lying Prophets
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <p
                  style={{ color: "#C0C0D8", fontSize: "16px", lineHeight: 1.85 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Jeremiah 23 opens with a &ldquo;woe&rdquo; oracle against the shepherds &mdash; the political rulers of Judah &mdash; who have scattered and destroyed God&rsquo;s flock (23:1-2). The immediate context is the catastrophic failure of the Judean monarchy in the decades before the Babylonian exile. Kings like Jehoiakim, Jehoiachin, and Zedekiah presided over a nation dissolving into idolatry, injustice, and political catastrophe. God&rsquo;s response is twofold: judgment on the false shepherds and a personal commitment to gather the scattered remnant (23:3-4).",
                  }}
                />
                <p
                  style={{ color: "#C0C0D8", fontSize: "16px", lineHeight: 1.85 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Then, unexpectedly, the chapter pivots from judgment to one of the Old Testament&rsquo;s most luminous messianic promises. In 23:5-6, God announces that he will raise up for David a righteous Branch (tsemach tsaddiq) who will reign wisely, execute justice and righteousness, and bear the extraordinary name YHWH Tsidkenu &mdash; The LORD Is Our Righteousness. The righteousness that Israel so desperately lacked in its political leadership will be found, not in a human achievement, but in the name and person of the coming Messiah.",
                  }}
                />
                <p
                  style={{ color: "#C0C0D8", fontSize: "16px", lineHeight: 1.85 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Verses 7-8 extend the promise into a breathtaking typological claim: the coming redemption will be so comprehensive that it will eclipse even the exodus from Egypt as the defining act of God&rsquo;s saving history. The second half of the chapter (23:9-40) turns to an extended, passionate attack on the lying prophets of Jerusalem, culminating in the fire-and-hammer image of the true word of God (23:29) and the wordplay on &ldquo;burden of the LORD&rdquo; that closes the chapter.",
                  }}
                />
              </div>
            </div>

            {/* Key verse highlight */}
            <div
              style={{
                background: `linear-gradient(135deg, rgba(58,125,86,0.12) 0%, rgba(107,79,187,0.08) 100%)`,
                border: `1px solid rgba(58,125,86,0.25)`,
                borderRadius: "20px",
                padding: "40px",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: GREEN,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                KEY VERSE
              </p>
              <blockquote
                style={{
                  color: TEXT,
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: "0 0 16px 0",
                  maxWidth: "680px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "&ldquo;Behold, the days are coming, declares the LORD, when I will raise up for David a righteous Branch, and he shall reign as king and deal wisely, and shall execute justice and righteousness in the land&hellip; And this is the name by which he will be called: The LORD is Our Righteousness.&rdquo;",
                }}
              />
              <p
                style={{
                  color: GREEN,
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                Jeremiah 23:5-6
              </p>
            </div>

            {/* Two-column context */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "12px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  HISTORICAL CONTEXT
                </p>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Jeremiah ministered from approximately 627 BC through the fall of Jerusalem in 586 BC. Chapter 23 was most likely composed during the reign of Zedekiah (597&ndash;586 BC), the last king of Judah, whose weak leadership and false prophets contributed directly to the nation&rsquo;s final collapse. The &ldquo;shepherds&rdquo; of 23:1-2 almost certainly include the kings who preceded him, particularly Jehoiakim and Jehoiachin.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${PURPLE}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: PURPLE,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "12px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  LITERARY STRUCTURE
                </p>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The chapter divides into two major sections: (1) shepherd and Branch oracles, 23:1-8 &mdash; alternating judgment and promise; (2) false prophet oracles, 23:9-40 &mdash; Jeremiah&rsquo;s personal lament (23:9), comparative indictment (23:13-15), the council test (23:18), dreams vs. word (23:25-29), and the burden wordplay (23:33-40). Both sections are unified by the theme of authentic vs. counterfeit divine leadership.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${TEAL}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: TEAL,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "12px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  NEW TESTAMENT CONNECTIONS
                </p>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The righteous Branch of 23:5-6 is understood as fulfilled in Jesus Christ (Luke 1:32-33; Romans 1:3). YHWH Tsidkenu connects to Paul&rsquo;s doctrine of imputed righteousness (Romans 3:21-22; 1 Corinthians 1:30). The false shepherd/true shepherd contrast underlies John 10. The fire-and-hammer image of 23:29 resonates with Hebrews 4:12 (&ldquo;the word of God is living and active, sharper than any two-edged sword&rdquo;).",
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: TEXT,
                  marginBottom: "8px",
                }}
              >
                Key Themes in Jeremiah 23
              </h2>
              <p
                style={{ color: MUTED, fontSize: "15px", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Six interlocking themes that run through the chapter and connect to the broader arc of Scripture.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {themeItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "22px 28px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      gap: "16px",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: item.color,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: TEXT,
                          fontWeight: 700,
                          fontSize: "16px",
                        }}
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      />
                    </div>
                    <span
                      style={{
                        color: item.color,
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: 1,
                        flexShrink: 0,
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {open === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {open === item.id && (
                    <div
                      style={{
                        padding: "0 28px 28px",
                        borderTop: `1px solid ${BORDER}`,
                        paddingTop: "20px",
                      }}
                    >
                      <p
                        style={{ color: MUTED, fontSize: "15px", lineHeight: 1.85 }}
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {tab === "verse" && (
          <div>
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: TEXT,
                  marginBottom: "8px",
                }}
              >
                Verse by Verse &mdash; Jeremiah 23
              </h2>
              <p
                style={{ color: MUTED, fontSize: "15px", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "A section-by-section walk through the forty verses of Jeremiah 23.",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {verseItems.map((item, idx) => {
                const colors = [GREEN, GOLD, PURPLE, TEAL, ROSE, GREEN, GOLD];
                const c = colors[idx % colors.length];
                return (
                  <div
                    key={item.id}
                    style={{
                      background: CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: "18px",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        padding: "22px 28px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        gap: "16px",
                        textAlign: "left",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            color: c,
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.10em",
                            marginBottom: "4px",
                            fontFamily: "system-ui, sans-serif",
                          }}
                        >
                          {item.ref}
                        </p>
                        <p
                          style={{ color: TEXT, fontWeight: 700, fontSize: "16px" }}
                          dangerouslySetInnerHTML={{ __html: item.label }}
                        />
                      </div>
                      <span
                        style={{
                          color: c,
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: 1,
                          flexShrink: 0,
                          paddingTop: "2px",
                          fontFamily: "system-ui, sans-serif",
                        }}
                      >
                        {open === item.id ? "-" : "+"}
                      </span>
                    </button>
                    {open === item.id && (
                      <div
                        style={{
                          padding: "0 28px 28px",
                          borderTop: `1px solid ${BORDER}`,
                          paddingTop: "20px",
                        }}
                      >
                        <p
                          style={{ color: MUTED, fontSize: "15px", lineHeight: 1.85 }}
                          dangerouslySetInnerHTML={{ __html: item.body }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  color: TEXT,
                  marginBottom: "8px",
                }}
              >
                Applying Jeremiah 23 Today
              </h2>
              <p
                style={{ color: MUTED, fontSize: "15px", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "Four areas where the ancient text presses on the shape of contemporary Christian life.",
                }}
              />
            </div>

            {/* Application cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px", marginBottom: "48px" }}>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GREEN}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: GREEN,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  DISCERNMENT
                </p>
                <h3 style={{ color: TEXT, fontSize: "17px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
                  Distinguishing True from False Teaching
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "Jeremiah 23 offers a cluster of tests: Does the teacher&rsquo;s message produce repentance or merely comfort? Does it confront the specific sins of the community or only affirm them? Does the teacher demonstrate evidence of genuine time in God&rsquo;s presence &mdash; in prayer, in Scripture, in silence? Is the message primarily self-generated (&ldquo;dreams of their own hearts&rdquo;) or genuinely from God? These are not merely ancient questions; every congregation faces them in every generation.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${GOLD}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: GOLD,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  RIGHTEOUSNESS
                </p>
                <h3 style={{ color: TEXT, fontSize: "17px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
                  Receiving Jesus as YHWH Tsidkenu
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The gospel is precisely the announcement that God has kept the promise of Jeremiah 23:6. In Jesus, YHWH&rsquo;s own righteousness is given to the covenant community. The believer&rsquo;s standing before God does not rest on personal moral achievement; it rests on the name and person of the Righteous Branch who is &ldquo;The LORD Is Our Righteousness.&rdquo; To receive the gospel is to receive this name as your own.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${PURPLE}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: PURPLE,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  PRAYER
                </p>
                <h3 style={{ color: TEXT, fontSize: "17px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
                  Standing in God&rsquo;s Council Through Prayer and Scripture
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The diagnostic of the sod YHWH implies that authentic encounter with God is both possible and necessary. Prayer is not merely talking to God; it is the believer&rsquo;s means of entering the divine council &mdash; of genuinely hearing, being confronted, being transformed. Bible study that does not result in encounter is information; prayer that does not result in changed desire is monologue. Jeremiah 23 calls for both together: standing in God&rsquo;s presence until you hear his actual word.",
                  }}
                />
              </div>
              <div
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${ROSE}`,
                  borderRadius: "18px",
                  padding: "28px",
                }}
              >
                <p
                  style={{
                    color: ROSE,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    marginBottom: "10px",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  PEACE
                </p>
                <h3 style={{ color: TEXT, fontSize: "17px", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
                  The Hunger for Peace That Settles for False Peace
                </h3>
                <p
                  style={{ color: MUTED, fontSize: "14px", lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "The false prophets&rsquo; message was not random; it was successful because it met a real hunger. People do want peace. The problem is accepting a counterfeit &mdash; the feelings of peace without the conditions of peace. Real shalom requires truth, repentance, justice, and restored relationship. Pastoral care and Christian teaching that offers emotional reassurance while avoiding the harder work of honest confrontation is, in Jeremiah&rsquo;s terms, prophesying falsehood.",
                  }}
                />
              </div>
            </div>

            {/* Study questions */}
            <div
              style={{
                background: CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: "20px",
                padding: "36px",
                marginBottom: "48px",
              }}
            >
              <p
                style={{
                  color: TEAL,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                STUDY QUESTIONS
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "What would it look like for a modern leader in the church or in society to be a &ldquo;shepherd who destroys and scatters the sheep&rdquo;? What patterns from Jeremiah 23 do you recognize in contemporary contexts?",
                  "The name YHWH Tsidkenu means &ldquo;The LORD Is Our Righteousness.&rdquo; How does this affect the way you relate to your own moral performance and failures? How does it change the basis on which you stand before God?",
                  "What would it practically look like for you to &lsquo;stand in the council of the LORD&rsquo; this week? What adjustments would you need to make to your prayer and Bible-reading practices?",
                  "Can you identify any area of your life where you have been settling for false peace &mdash; emotional comfort that has not required confronting the actual problem? What would genuine shalom look like there?",
                  "The word of God is described as &ldquo;fire&rdquo; and &ldquo;a hammer that breaks the rock in pieces.&rdquo; When have you experienced God&rsquo;s word functioning this way in your life &mdash; not flattering but fracturing? What came through on the other side?",
                ].map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: GREEN,
                        fontWeight: 800,
                        fontSize: "14px",
                        minWidth: "24px",
                        paddingTop: "2px",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    >
                      {i + 1}.
                    </span>
                    <p
                      style={{ color: MUTED, fontSize: "15px", lineHeight: 1.8 }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Video section */}
            <div>
              <p
                style={{
                  color: GREEN,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                VIDEO RESOURCES
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <VideoEmbed key={v.id} videoId={v.id} title={v.title} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
