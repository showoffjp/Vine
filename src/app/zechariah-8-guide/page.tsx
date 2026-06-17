"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";

export default function Zechariah8Guide() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "Hy5C7xwkaqY", title: "Zechariah 8: Ten Promises of God&rsquo;s Restoration" },
    { id: "q8JuoF-vH6o", title: "Zechariah 8 Explained -- Old Men and Children in the Streets" },
    { id: "wDR1MOF7UXI", title: "Fasts to Feasts -- Zechariah 8 Bible Study" },
    { id: "Gi4I8IWjxXo", title: "God&rsquo;s Jealousy for Zion -- Zechariah 8 Commentary" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };

  const toggle = (id: string) => setOpen(open === id ? null : id);

  const cardStyle: React.CSSProperties = {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: 12,
    padding: "1.5rem",
    marginBottom: "1.25rem",
  };

  const h2Style: React.CSSProperties = {
    fontSize: "1.4rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: TEXT,
  };

  const h3Style: React.CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: TEXT,
  };

  const pStyle: React.CSSProperties = {
    color: MUTED,
    lineHeight: 1.75,
    marginBottom: "1rem",
    fontSize: "1rem",
  };

  const quoteStyle: React.CSSProperties = {
    borderLeft: `4px solid ${TEAL}`,
    paddingLeft: "1rem",
    color: TEXT,
    fontStyle: "italic",
    margin: "1rem 0",
    lineHeight: 1.7,
  };

  const tagStyle = (color: string): React.CSSProperties => ({
    display: "inline-block",
    background: color + "22",
    color: color,
    border: `1px solid ${color}44`,
    borderRadius: 999,
    padding: "0.2rem 0.75rem",
    fontSize: "0.8rem",
    fontWeight: 600,
    marginRight: "0.4rem",
    marginBottom: "0.4rem",
  });

  const verseItems = [
    {
      id: "v1",
      ref: "Zechariah 8:1-2",
      title: "Jealous for Zion with Great Jealousy",
      text: "And the word of the LORD of hosts came, saying: Thus says the LORD of hosts: I am jealous for Zion with great jealousy, and I am jealous for her with great wrath.",
      body: "The chapter opens with an emphatic double statement of divine jealousy &mdash; the Hebrew word &lsquo;qin&rsquo;ah&rsquo; appears twice in the same sentence for emphasis. This is not the petty jealousy of insecurity but the fierce, protective jealousy of a husband for his wife, a father for his child, a God who has committed himself entirely to his people. The phrase &ldquo;great wrath&rdquo; here is not directed at Israel but at Israel&rsquo;s enemies &mdash; at all the forces that have tried to separate God from Zion. Jealousy of this kind is not an emotion to be managed or suppressed; it is the fullness of love asserting itself against every rival and every threat. When God says he is jealous for Zion with great jealousy, he is declaring that nothing can make him give up on Jerusalem. The exile felt like abandonment. Zechariah 8 begins by insisting it was not.",
    },
    {
      id: "v2",
      ref: "Zechariah 8:3",
      title: "I Will Return to Zion and Dwell",
      text: "Thus says the LORD: I have returned to Zion and will dwell in the midst of Jerusalem, and Jerusalem shall be called the faithful city, and the mountain of the LORD of hosts, the holy mountain.",
      body: "Verse 3 is the pivot on which everything else in the chapter turns. God returns. He dwells. The Hebrew is deliberate: this is not a visit or a temporary arrangement but a settled, permanent dwelling. The exile had felt like God&rsquo;s departure &mdash; indeed, Ezekiel had seen the glory of God leave the temple (Ezek 10-11) before the Babylonian destruction. But now God announces his return. Jerusalem will be given two new names: the faithful city (&lsquo;ir ha-emet&rsquo;, the city of truth or faithfulness) and the holy mountain. These names describe transformation, not just relocation. God&rsquo;s presence does not merely return to an unchanged city; his presence reconstitutes the city around his own character. Truth and holiness become the new civic identity of Jerusalem. This is the pattern throughout Scripture: wherever God dwells, the environment is transformed to reflect his nature.",
    },
    {
      id: "v3",
      ref: "Zechariah 8:4-5",
      title: "Old Men and Children in the Streets",
      text: "Thus says the LORD of hosts: Old men and old women shall again sit in the streets of Jerusalem, each with staff in hand because of great age. And the streets of the city shall be full of boys and girls playing in its streets.",
      body: "This vision of restoration is deliberately, beautifully ordinary. Zechariah does not describe a spectacular military triumph or a temple filled with supernatural fire. He describes old people with walking sticks sitting in the sun and children playing in the streets. These two images together encompass the whole arc of human life &mdash; from the very young to the very old &mdash; and declare that in the restored city, both generations have a place of safety, dignity, and joy. For the post-exilic community, this would have been a quietly devastating promise. The exile had broken families, separated generations, cut off children from their heritage. The Babylonian siege had killed the young and the old first. Now God says: both will be there. The streets will be full and safe. Children will play without fear. This is the vision of shalom &mdash; not the absence of conflict alone, but the full, flourishing presence of every good thing life was meant to hold.",
    },
    {
      id: "v4",
      ref: "Zechariah 8:6",
      title: "Marvelous in the Eyes of the Remnant",
      text: "Thus says the LORD of hosts: Even though it seems impossible to the remnant of this people in those days, should it also seem impossible to me? declares the LORD of hosts.",
      body: "This verse is an honest acknowledgment of the gap between divine promise and human perception. The remnant has lived through exile, trauma, and the slow discouragement of a partial return. The city walls are broken. The temple lies in ruins. The community is small, poor, and surrounded by hostile neighbors. When God describes old people sitting peacefully in the streets and children playing freely, the remnant&rsquo;s internal response is: &ldquo;This seems impossible.&rdquo; God does not rebuke this reaction. He acknowledges it with striking pastoral directness: &ldquo;Even though it seems impossible to the remnant &mdash; should it also seem impossible to me?&rdquo; The question reframes everything. The impossibility is calculated from human resources and human history. God calculates from his own nature and his own word. What is impossible for the remnant is not only possible but certain for the LORD of hosts. This verse is a gift to every believer who has stared at a promise and felt the weight of impossibility.",
    },
    {
      id: "v5",
      ref: "Zechariah 8:7-8",
      title: "Gathering from East and West",
      text: "Thus says the LORD of hosts: Behold, I will save my people from the east country and from the west country, and I will bring them and they shall dwell in the midst of Jerusalem. And they shall be my people and I will be their God, in faithfulness and in righteousness.",
      body: "The scope of restoration widens. God will gather his scattered people from every direction &mdash; east and west encompassing the whole breadth of the Diaspora, from Babylon and Persia to Egypt and beyond. The promise culminates in one of the most repeated covenantal formulas in Scripture: &ldquo;they shall be my people and I will be their God.&rdquo; This phrase, found also in Jeremiah 31:33, Ezekiel 37:27, and Revelation 21:3, is the heartbeat of the entire biblical story. It names the relationship God has always desired and always pursued: mutual belonging, personal commitment, covenant love. But Zechariah adds two crucial qualifiers: &ldquo;in faithfulness and in righteousness.&rdquo; This restored relationship will not be casual or conditional. It will be grounded in God&rsquo;s own character &mdash; his &lsquo;emet&rsquo; (faithfulness, truth) and his &lsquo;tsedeqah&rsquo; (righteousness, justice). The restored covenant is not fragile. It is founded on what God is, not merely what he promises.",
    },
    {
      id: "v6",
      ref: "Zechariah 8:9-13",
      title: "Let Your Hands Be Strong",
      text: "Thus says the LORD of hosts: Let your hands be strong, you who in these days have been hearing these words from the mouth of the prophets who were present on the day that the foundation of the house of the LORD of hosts was laid, that the temple might be built.",
      body: "The chapter shifts from promise to exhortation. The community has been hearing prophetic words &mdash; from Haggai and Zechariah &mdash; since the day the temple foundation was laid. God says: &ldquo;Let your hands be strong.&rdquo; This phrase appears twice in this section (vv. 9 and 13) for emphasis. The hands are weak because the work is hard and the discouragement is real. The early years of restoration were marked by opposition, poverty, drought, and communal conflict (v. 10: &ldquo;there was no safety from the foe for him who went out or came in, for I set every man against his neighbor&rdquo;). But now &mdash; because God is with them &mdash; the land will yield its fruit, the heavens will give their dew, and the remnant will be a blessing among the nations. The theological logic is clear: the strength of the hands follows from the presence of God. You work hard not to earn God&rsquo;s blessing but because God&rsquo;s presence has already arrived and is empowering the work.",
    },
    {
      id: "v7",
      ref: "Zechariah 8:14-17",
      title: "Fear Not; Do Truth and Peace",
      text: "For thus says the LORD of hosts: As I purposed to bring disaster to you when your fathers provoked me to wrath, and I did not relent, says the LORD of hosts, so again have I purposed in these days to bring good to Jerusalem and to the house of Judah; fear not.",
      body: "God uses the symmetry of his own past actions as the ground for present comfort. He was as committed to judgment as he was to grace &mdash; and he followed through on both. The same inflexibility that brought disaster (because he had purposed it and did not relent) now guarantees restoration (because he has purposed good and will not relent). This is a God who means what he says in both directions. Then comes a set of four ethical commands (vv. 16-17): speak truth each to his neighbor; render in your gates judgments that are true and make for peace; do not devise evil in your hearts against one another; and love no false oath. These are not arbitrary rules. They are the behavioral shape of a restored community. When God dwells among his people, the character of that community reflects his character. Truth-telling, just courts, peaceful hearts, and honest oaths &mdash; these are what faithfulness and righteousness look like in daily civic and relational life.",
    },
    {
      id: "v8",
      ref: "Zechariah 8:18-19",
      title: "Fasts Become Festivals of Joy",
      text: "Thus says the LORD of hosts: The fast of the fourth month and the fast of the fifth and the fast of the seventh and the fast of the tenth shall be to the house of Judah seasons of joy and gladness and cheerful feasts. Therefore love truth and peace.",
      body: "This promise is astonishing in its specificity. The four fasts mentioned (fourth month, fifth, seventh, tenth) were all commemorations of tragedies connected to the fall of Jerusalem and the Babylonian exile: the breaching of the walls, the destruction of the temple, the assassination of Gedaliah, and the beginning of the siege. Every year the community rehearsed its grief. God now announces that these same dates &mdash; the annual memorials of devastation &mdash; will become festivals of joy and gladness. Not because the trauma is being forgotten or minimized, but because restoration is so complete that what was mourned can now be celebrated. The theology here is profound: God does not merely heal the wound; he transforms the scar into a place of testimony. The dates that once marked loss become the dates that mark God&rsquo;s faithfulness. And the final command &mdash; &ldquo;love truth and peace&rdquo; &mdash; grounds the celebration not in sentimentality but in the ethical character that makes community life sustainable and beautiful.",
    },
    {
      id: "v9",
      ref: "Zechariah 8:20-23",
      title: "Many Nations Come to Seek the LORD",
      text: "Thus says the LORD of hosts: Peoples shall yet come, even the inhabitants of many cities. The inhabitants of one city shall go to another, saying, Let us go at once to entreat the favor of the LORD and to seek the LORD of hosts; I myself am going.",
      body: "The chapter closes with a vision of universal pilgrimage. Peoples from many cities and nations will stream toward Jerusalem. The Hebrew word for &ldquo;entreat the favor&rdquo; is &lsquo;challah&rsquo; &mdash; to seek the face of God, to make supplication. These are not tourists. They are seekers. They come because they have heard what God has done. And then comes the climactic scene of verse 23: &ldquo;In those days ten men from the nations of every tongue shall take hold of the robe of a Jew, saying, Let us go with you, for we have heard that God is with you.&rdquo; The number ten signifies completeness &mdash; from every nation, every language group, a full representation of humanity will come. They grab the robe (the hem, the border of the garment &mdash; the sign of covenant authority) of a Jew, saying not &ldquo;we have heard about your religion&rdquo; but &ldquo;we have heard that God is with you.&rdquo; The attraction is not theological argument but divine presence. The nations come because they smell life. This is the missionary vision of the Old Testament at its most expansive: not Israel going out to convert the nations, but the nations being drawn in by the reality of God&rsquo;s presence among his people.",
    },
  ];

  const themeItems = [
    {
      id: "t1",
      color: TEAL,
      title: "Divine Jealousy as Passionate Love",
      body: "The opening of Zechariah 8 must be understood correctly or it will be misread. Divine jealousy (&lsquo;qin&rsquo;ah&rsquo;) is not a character flaw projected onto God. It is the inevitable expression of a love that has made an exclusive covenant. When God says he is jealous for Zion with &ldquo;great jealousy,&rdquo; he is asserting that his commitment to Jerusalem is total, exclusive, and fiercely protective. The emotion is closer to what a rescuer feels toward someone being unjustly held captive than to what an insecure person feels when they suspect a rival. God is jealous for Zion because Zion belongs to him and he will not surrender that claim to any foreign power, any competing deity, or any force of history. Paul echoes this language in 2 Corinthians 11:2 when he says, &ldquo;I feel a divine jealousy for you, since I betrothed you to one husband.&rdquo; The Church is invited to understand God&rsquo;s jealousy not as a threat but as the ultimate assurance: nothing can take us from him.",
    },
    {
      id: "t2",
      color: GOLD,
      title: "The Ten Promises and the Name of the LORD of Hosts",
      body: "Zechariah 8 is structured around ten divine promises, each introduced by the formula &ldquo;Thus says the LORD of hosts.&rdquo; The repetition is deliberate &mdash; it drives home both the authority behind the promises (the LORD of armies, the commander of heaven&rsquo;s forces) and their cumulative weight. By the time ten promises have been delivered, the listener is standing in a landscape entirely different from where they started. The promises move from God&rsquo;s jealousy (8:2) through his return (8:3) and the restoration of normal life (8:4-5), through the gathering of the exiles (8:7-8) and the ethical demands of restored community (8:16-17), to the transformation of fasts to feasts (8:19) and the pilgrimage of the nations (8:20-23). The name &ldquo;LORD of hosts&rdquo; (&lsquo;Yahweh tseva&rsquo;ot&rsquo;) occurs fourteen times in this short chapter &mdash; more than in almost any other chapter of the Bible. The God who promises is the God who commands armies. The promises have teeth.",
    },
    {
      id: "t3",
      color: GREEN,
      title: "Restoration of Normal Life",
      body: "The vision of old men with staffs and children playing (8:4-5) is one of the most humanly moving images in all prophetic literature. After the catastrophe of exile &mdash; when families were broken, children were taken, and the elderly were left to die &mdash; God&rsquo;s promise of restoration does not begin with geopolitical realignment or temple ritual. It begins with the image of ordinary human life being given back: the safety to grow old publicly, the security for children to play in the open. Theologically, this reveals something important about what God considers &ldquo;good.&rdquo; The kingdom of God is not merely a spiritual or ecclesiastical reality &mdash; it encompasses the full range of human life, including the ordinary rhythms of aging and childhood. Isaiah 65:20-23 paints a similar picture: long lives, children who do not die in infancy, satisfying work. The restoration that God promises is comprehensive. It holds nothing back from the scope of redemption.",
    },
    {
      id: "t4",
      color: PURPLE,
      title: "The Returning Remnant and Covenant Renewal",
      body: "Zechariah 8:7-8 announces the gathering of the scattered. God will bring his people from east and west &mdash; from all the nations of the Diaspora &mdash; and the covenant formula &ldquo;they shall be my people and I will be their God&rdquo; will be renewed. This gathering is not merely geographical but relational. The exile was a covenant rupture &mdash; not final (as Hosea, Jeremiah, and Ezekiel all insisted), but real. What is being restored in Zechariah 8 is not just the population of Jerusalem but the covenant itself, grounded now in &ldquo;faithfulness and righteousness.&rdquo; The returning remnant is not the same community that went into exile. They have been through fire and water. The survivors carry a different weight, a different texture of faith. God meets them not with recrimination for the past but with the renewed declaration: &ldquo;You are mine. I am yours.&rdquo;",
    },
    {
      id: "t5",
      color: GOLD,
      title: "Ethical Demands in a Restored Community",
      body: "The ethical commands in Zechariah 8:16-17 are not an appendix to the promises. They are the natural consequence of God&rsquo;s dwelling among his people. When the holy God takes up residence in a community, that community must take on his character. Four practices are specifically named: truthful speech between neighbors, true and peaceable judgment in the courts, no devising of evil against one another in the heart, and no love of false oaths. These four commands cover the entire range of communal integrity &mdash; private speech, public legal processes, interior attitudes, and solemn agreements. What strikes is the interior command: &ldquo;do not devise evil in your hearts.&rdquo; God is not merely legislating external behavior. He is asking for a community whose inner life has been transformed. This anticipates the Sermon on the Mount: Jesus also moves from external command to interior transformation, from the act to the heart that produces it.",
    },
    {
      id: "t6",
      color: TEAL,
      title: "Fasts Turned to Feasts",
      body: "The transformation of fasts to feasts in Zechariah 8:19 is one of the most pastorally powerful moments in the prophets. The four fasts were not arbitrary religious observances. They were annual memorials of specific tragedies &mdash; the breach of Jerusalem&rsquo;s walls, the destruction of the temple, the assassination of Gedaliah, the beginning of the Babylonian siege. These were the dates that defined Israel&rsquo;s identity as a people of loss. God does not say these dates no longer matter. He says they will be transformed. The same calendar that once organized grief will reorganize around joy. The dates that told the story of destruction will be retold as the dates when God turned things around. This is the theological structure of the resurrection: the day of crucifixion does not become irrelevant; it becomes the starting point of the greatest reversal in history. Good Friday leads to Easter Sunday. The fasts become feasts not by forgetting the suffering but by standing on the other side of the divine intervention that redeems it.",
    },
    {
      id: "t7",
      color: PURPLE,
      title: "Universal Pilgrimage and God With You",
      body: "The final scene of Zechariah 8 is breathtaking. Ten men from every nation grab the robe of a Jew, saying: &ldquo;Let us go with you, for we have heard that God is with you.&rdquo; The number ten (signifying completeness) from every tongue (signifying universality) suggests nothing less than the eschatological gathering of humanity around the dwelling of God. But what draws them is not an argument, not an invitation campaign, not a program. It is the simple, irresistible reality: &ldquo;God is with you.&rdquo; Emmanuel. The same name Isaiah proclaimed (Isa 7:14) and that Matthew uses to frame the entire ministry of Jesus (Matt 1:23; 28:20). The God who is with his people becomes visible to the nations in the quality of life that presence produces. This is the Church&rsquo;s greatest evangelistic resource: not better arguments or more attractive events, but genuine, visible, transforming divine presence.",
    },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* hero */}
      <div style={{ background: `linear-gradient(135deg, ${TEAL}22, ${GOLD}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <span style={tagStyle(TEAL)}>Minor Prophets</span>
          <span style={tagStyle(GOLD)}>Post-Exilic Prophecy</span>
          <span style={tagStyle(GREEN)}>Old Testament</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem" }}>Zechariah 8 &mdash; I Am Jealous for Zion with Great Jealousy</h1>
        <p style={{ color: MUTED, maxWidth: 640, margin: "0 auto", fontSize: "1.1rem" }}>
          God&rsquo;s passionate commitment to restore Jerusalem &mdash; ten promises of blessing, old men and children in the streets,
          and many nations streaming to seek the LORD.
        </p>
        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: TEAL }}>~518 BC</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Prophetic Date</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: GOLD }}>10 Promises</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>Divine Declarations</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: PURPLE }}>14x</div>
            <div style={{ fontSize: "0.8rem", color: MUTED }}>LORD of Hosts</div>
          </div>
        </div>
      </div>

      {/* tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400 }}>{TAB_LABELS[t]}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>One of the Most Hope-Saturated Chapters in the Prophets</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 8 arrives in the context of the post-exilic community &mdash; a small, struggling group of returnees who have come back from Babylon to find Jerusalem in ruins, the temple not yet rebuilt, and the surrounding nations hostile. The previous chapters of Zechariah have brought visions of divine activity: the angel of the LORD interceding, Joshua the high priest being cleansed, Zerubbabel promised that the mountain will become a plain. But chapter 8 moves into a sustained series of verbal promises that build on one another like a tidal wave of grace." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The chapter is structured around ten divine promises, each introduced by the formula &ldquo;Thus says the LORD of hosts&rdquo; &mdash; a phrase that occurs fourteen times in this single chapter. The repetition is not accidental. It drives home the authority and the cumulative weight of what God is saying. By the time the chapter ends, the listener has been immersed in a vision of restored community, ethical renewal, and universal pilgrimage so comprehensive that the present circumstances become almost irrelevant in comparison to the announced future." }} />
              <div style={quoteStyle} dangerouslySetInnerHTML={{ __html: "&ldquo;Thus says the LORD of hosts: Old men and old women shall again sit in the streets of Jerusalem, each with staff in hand because of great age. And the streets of the city shall be full of boys and girls playing in its streets.&rdquo; &mdash; Zechariah 8:4-5" }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "What is striking about this vision of restoration is its ordinariness. The greatest thing God promises in Zechariah 8 is not a spectacular military victory or a celestial light show. It is old people sitting in the sun and children laughing in the streets. This is what shalom looks like: every generation safe, every stage of life honored, the ordinary rhythms of human existence restored and protected." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>The Ten Promises at a Glance</h2>
              {[
                { ref: "8:2", color: TEAL, num: "1", title: "Jealous for Zion", body: "God declares great jealousy for Zion &mdash; a fierce, protective passion that will not let Jerusalem go." },
                { ref: "8:3", color: GOLD, num: "2", title: "Return to Dwell", body: "God returns to Zion and dwells in Jerusalem. The city is renamed: the faithful city, the holy mountain." },
                { ref: "8:4-5", color: GREEN, num: "3", title: "Old and Young in the Streets", body: "Old men and women with staffs; children playing freely. Normal life restored in all its generations." },
                { ref: "8:6", color: PURPLE, num: "4", title: "Not Impossible for God", body: "What seems marvelous and impossible to the remnant is not impossible to the LORD of hosts." },
                { ref: "8:7-8", color: TEAL, num: "5", title: "Gathering from East and West", body: "God saves and gathers his people from every direction. The covenant formula renewed: &lsquo;my people / their God.&rsquo;" },
                { ref: "8:9-13", color: GOLD, num: "6", title: "Hands Be Strong", body: "Let your hands be strong. The land will yield, the heavens will give dew. The remnant will be a blessing." },
                { ref: "8:14-15", color: GREEN, num: "7", title: "Purposed to Do Good", body: "As God purposed disaster when provoked, so now he has purposed good. Fear not." },
                { ref: "8:16-17", color: PURPLE, num: "8", title: "Ethical Commands", body: "Speak truth; judge rightly; love no false oath; devise no evil. These are the things God hates." },
                { ref: "8:18-19", color: TEAL, num: "9", title: "Fasts to Feasts", body: "The four annual fasts will become seasons of joy and gladness. Love truth and peace." },
                { ref: "8:20-23", color: GOLD, num: "10", title: "Nations Seek the LORD", body: "Peoples from many nations will come seeking the LORD. Ten men grab the robe of a Jew: &lsquo;God is with you.&rsquo;" },
              ].map(item => (
                <div key={item.ref} style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", padding: "0.75rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                  <div style={{ minWidth: 52, height: 52, borderRadius: 8, background: item.color + "22", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: item.color, fontWeight: 700, fontSize: "0.75rem", textAlign: "center", flexShrink: 0 }}>
                    <div style={{ fontSize: "0.65rem", color: MUTED }}>{item.ref}</div>
                    <div>#{item.num}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: TEXT, marginBottom: "0.25rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                    <div style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Historical Context: The Post-Exilic Community</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah ministered alongside Haggai in Jerusalem around 520-518 BC &mdash; roughly two decades after the first wave of exiles returned under Zerubbabel and Joshua (Ezra 1-3). The community that had returned was small and discouraged. They had begun rebuilding the temple but stopped under opposition (Ezra 4). The land was not prospering. There were crop failures and drought. The surrounding peoples were hostile. The glorious promises of Isaiah 40-66 seemed impossibly far away." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Into this context, Zechariah 8 arrives with ten declarations from &ldquo;the LORD of hosts&rdquo; &mdash; the divine title that emphasizes God&rsquo;s command over all armies, both earthly and heavenly. The community&rsquo;s discouragement is explicitly acknowledged in verse 6: &ldquo;Even though it seems impossible to the remnant of this people in those days, should it also seem impossible to me?&rdquo; God is not unaware of the gap between promise and present reality. He is naming it &mdash; and then overriding it with his own infinite capacity." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Canonically, Zechariah 8 resonates with Isaiah 2:2-4 (the nations streaming to the mountain of the LORD), Isaiah 60:1-3 (nations coming to the light), Micah 4:1-4 (swords to plowshares, every man under his vine and fig tree), and finally Revelation 21:3 (&ldquo;Behold, the dwelling place of God is with man&rdquo;). The chapter is a middle movement in a long symphony whose final chord sounds in the new Jerusalem." }} />
            </div>
          </div>
        )}

        {/* THEMES TAB */}
        {tab === "themes" && (
          <div>
            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${TEAL}11, ${CARD})` }}>
              <h2 style={h2Style}>Key Themes in Zechariah 8</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 8 is dense with theological themes that have shaped Jewish and Christian understanding of restoration, community, and the universal scope of God&rsquo;s salvation. Each theme below has deep roots in the broader prophetic tradition and clear branches into the New Testament." }} />
            </div>
            {themeItems.map(theme => (
              <div key={theme.id} style={{ ...cardStyle, borderLeft: `4px solid ${theme.color}` }}>
                <h3 style={{ ...h3Style, color: theme.color }}>{theme.title}</h3>
                <p style={pStyle} dangerouslySetInnerHTML={{ __html: theme.body }} />
              </div>
            ))}
            <div style={cardStyle}>
              <h2 style={h2Style}>Thematic Connections Across Scripture</h2>
              {[
                { color: TEAL, from: "Zechariah 8:2", to: "2 Corinthians 11:2", note: "Divine jealousy as protective covenant love &mdash; Paul uses the same language for his pastoral care of the Corinthians." },
                { color: GOLD, from: "Zechariah 8:3", to: "Revelation 21:3", note: "God dwelling in the midst of his people &mdash; the Zechariah promise finds its ultimate fulfillment in the new Jerusalem." },
                { color: GREEN, from: "Zechariah 8:4-5", to: "Isaiah 65:20-23", note: "Ordinary life restored in full &mdash; long-lived generations, safe children, satisfying work." },
                { color: PURPLE, from: "Zechariah 8:7-8", to: "Romans 9:25-26", note: "The covenant renewal formula &lsquo;you are my people / I am your God&rsquo; &mdash; Paul applies to Gentile inclusion." },
                { color: TEAL, from: "Zechariah 8:19", to: "John 16:20", note: "Sorrow turned to joy &mdash; fasts to feasts; Jesus promises the disciples&rsquo; grief will turn to joy." },
                { color: GOLD, from: "Zechariah 8:23", to: "Matthew 1:23", note: "&lsquo;God is with you&rsquo; &mdash; Emmanuel, the name Isaiah proclaimed and that Matthew uses to define Jesus&rsquo;s entire ministry." },
              ].map((conn, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                  <div style={{ width: 3, minHeight: 40, background: conn.color, borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                      <span style={tagStyle(conn.color)}>{conn.from}</span>
                      <span style={{ color: MUTED, fontSize: "0.85rem", alignSelf: "center" }}>-&gt;</span>
                      <span style={tagStyle(conn.color)}>{conn.to}</span>
                    </div>
                    <p style={{ ...pStyle, marginBottom: 0, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: conn.note }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VERSE BY VERSE TAB */}
        {tab === "verse" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>Verse by Verse Commentary</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Walk through Zechariah 8 promise by promise. Each section is introduced by &ldquo;Thus says the LORD of hosts&rdquo; &mdash; a formula that carries both divine authority and communal weight. Click each passage to open the commentary." }} />
            </div>
            {verseItems.map(item => (
              <div key={item.id} style={{ ...cardStyle, padding: 0, overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", textAlign: "left", gap: "1rem" }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                      <span style={tagStyle(TEAL)}>{item.ref}</span>
                    </div>
                    <div style={{ fontWeight: 700, color: TEXT, fontSize: "1.05rem" }}>{item.title}</div>
                    <div style={{ color: MUTED, fontSize: "0.9rem", marginTop: "0.35rem", fontStyle: "italic", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                  <div style={{ color: TEAL, fontSize: "1.4rem", fontWeight: 700, flexShrink: 0, marginTop: 4 }}>{open === item.id ? "-" : "+"}</div>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid ${BORDER}` }}>
                    <p style={{ ...pStyle, marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
            <div style={cardStyle}>
              <h2 style={h2Style}>The Rhetorical Architecture of Zechariah 8</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The ten promises of Zechariah 8 are not random. They move in a deliberate order: from God&rsquo;s inner life (jealousy and love for Zion) outward to his action (return, dwell, gather) and then to the community&rsquo;s response (ethical commands, communal life) and finally to the cosmic scope (nations streaming to Jerusalem). This is the pattern of all true restoration: it begins in the heart of God, moves into the circumstances of his people, transforms their interior and communal life, and ends by embracing the whole world." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;Thus says the LORD of hosts&rdquo; functions as more than a rhetorical formula. It is a claim about the nature of these promises. They are not Zechariah&rsquo;s opinions or optimistic projections. They come from the one who commands the armies of heaven. When the LORD of hosts speaks, history moves. The post-exilic community was meant to hear these ten promises and calibrate their expectations not by looking at the rubble around them but by listening to the One whose word called the universe into existence." }} />
            </div>
          </div>
        )}

        {/* APPLICATION TAB */}
        {tab === "application" && (
          <div>
            <div style={cardStyle}>
              <h2 style={h2Style}>Living Zechariah 8 Today</h2>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 8 was written for a small, discouraged community rebuilding in the ruins of their former greatness. The Church in many parts of the world today occupies a structurally similar position &mdash; a minority community, often marginalized, living amid the ruins of cultural influence it once enjoyed, tempted to discouragement by the gap between the promises of God and the present realities of life. Zechariah 8 speaks directly into this situation." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ ...h3Style, color: TEAL }}>1. Receiving God&rsquo;s Passionate Commitment</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The opening declaration of Zechariah 8 &mdash; &ldquo;I am jealous for Zion with great jealousy&rdquo; &mdash; is an invitation before it is a promise. God is not asking the community to generate more faith or try harder. He is asking them to receive a declaration of his own character. He is jealous for them. His commitment is not measured by their performance but by his own nature." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For many believers, the deepest spiritual obstacle is not unbelief in God&rsquo;s existence but unbelief in God&rsquo;s personal commitment to them. We abstract the promises &mdash; &ldquo;God is good&rdquo; in general &mdash; without receiving them personally: &ldquo;God is jealous for me with great jealousy.&rdquo; Zechariah 8 does not allow that abstraction. The jealousy is for Zion &mdash; for the specific community, the specific city, the specific people. In Christ, you are Zion. The jealousy is for you." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Practically, this means spending time with the opening of Zechariah 8 not as information to be processed but as love to be received. Sit with verse 2: &ldquo;I am jealous for Zion with great jealousy.&rdquo; Let it address you directly. Ask the Spirit to make it personal. The entire chapter flows from that posture of receiving, not striving." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GOLD}` }}>
              <h3 style={{ ...h3Style, color: GOLD }}>2. Living Ethically in Community</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 8:16-17 plants four ethical commands in the middle of the promises: speak truth, judge rightly, love no false oath, devise no evil in your heart. These are not arbitrary additions to a hopeful text. They are the practical shape of life in a community where God dwells. When the holy God returns to dwell among his people, the community must take on his character." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Truth-telling in verse 16 means more than not lying. The Hebrew &lsquo;emet&rsquo; carries connotations of reliability, faithfulness, and integrity &mdash; the kind of speech that people can build their lives on because they know you mean what you say. In a culture saturated with spin, strategic communication, and performative authenticity, being genuinely trustworthy in speech is a countercultural act of extraordinary power." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The command to render &ldquo;judgments that are true and make for peace&rdquo; (v. 16) has implications for how Christian communities handle conflict, discipline, and disagreement. It is not enough for a decision to be technically correct &mdash; it must also be oriented toward shalom, toward the restoration of relationship and community. Justice and peace are not opposites in the prophetic vision; they are partners." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The interior command &mdash; &ldquo;do not devise evil in your hearts against one another&rdquo; (v. 17) &mdash; is the most searching. Zechariah is asking for a transformation of the imagination, the place where resentments are nursed and schemes are hatched. The restored community is not only externally peaceful; it is internally clean. This is the work of the Spirit described in Ezekiel 36:26: &ldquo;I will remove the heart of stone from your flesh and give you a heart of flesh.&rdquo;" }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${GREEN}` }}>
              <h3 style={{ ...h3Style, color: GREEN }}>3. Turning Seasons of Mourning into Hope</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The promise of Zechariah 8:19 &mdash; that the four annual fasts will become festivals of joy &mdash; has immediate application to our own seasons of grief and mourning. Every community, and every individual, carries anniversaries of loss: the date a loved one died, the year a marriage ended, the season a community was broken. These dates on the calendar can become the organizing principle of a life &mdash; a way of measuring time by its worst moments." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "Zechariah 8 does not say the suffering was not real or that the grief was not legitimate. The four fasts commemorated genuine catastrophe. But in the light of God&rsquo;s restoration, those same dates are transformed into opportunities for testimony. The anniversary of the temple&rsquo;s destruction becomes the festival that celebrates its rebuilding. The date of the city&rsquo;s fall becomes the date that remembers God&rsquo;s faithfulness in return." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For Christians, this is the logic of testimony: &ldquo;I was in that dark place in the spring of 2019, and here is what God did.&rdquo; The date does not lose its weight, but it gains a new meaning. The fasts become feasts not by forgetting but by remembering differently &mdash; from the other side of the divine intervention. Zechariah 8 invites every believer to reread their own calendar with this hermeneutic." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${PURPLE}` }}>
              <h3 style={{ ...h3Style, color: PURPLE }}>4. Welcoming All Nations into God&rsquo;s Family</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The vision of Zechariah 8:20-23 is one of the most missionally generative texts in the Old Testament. The nations do not come to Jerusalem because of a sophisticated outreach strategy. They come because they have &ldquo;heard that God is with you.&rdquo; The attraction is the reality of divine presence made visible in the life of the community." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "This has profound implications for how the Church thinks about mission. The missionary engine of Zechariah 8 is not better programs or more persuasive evangelism (though these have their place) &mdash; it is the quality of life that genuine divine presence produces. A community that practices truth-telling (v. 16), that turns its fasts to feasts (v. 19), that has old people honored and children playing freely (vv. 4-5) &mdash; this community will attract the nations not by marketing but by being." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The image of ten men grabbing the robe of a Jew also carries a note of surprising humility. The nations are not coming to be conquered or absorbed; they are coming with urgent request: &ldquo;Let us go with you.&rdquo; They want to be part of what God is doing, and they recognize that they need the people who already know him. This is a vision of the Church as a community so visibly alive with God&rsquo;s presence that outsiders become insiders not by compulsion but by genuine longing." }} />
            </div>

            <div style={{ ...cardStyle, borderLeft: `4px solid ${TEAL}` }}>
              <h3 style={{ ...h3Style, color: TEAL }}>5. The Invitation to Come and Seek the LORD</h3>
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The repeated phrase in Zechariah 8:21-22 &mdash; &ldquo;Let us go at once to entreat the favor of the LORD and to seek the LORD of hosts&rdquo; &mdash; is the invitation at the heart of the chapter. The inhabitants of one city say it to another. The nations repeat it among themselves. It becomes a viral declaration: come and seek the LORD." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "The word &ldquo;seek&rdquo; (&lsquo;baqash&rsquo;) in Hebrew carries the sense of earnest searching, of making inquiry, of pursuing with intention. This is not casual God-browsing. It is the kind of seeking described in Jeremiah 29:13: &ldquo;You will seek me and find me, when you seek me with all your heart.&rdquo; The nations who come in Zechariah 8 are not curious observers &mdash; they are people who have heard something that has undone their self-sufficiency and sent them looking for the living God." }} />
              <p style={pStyle} dangerouslySetInnerHTML={{ __html: "For the individual reader of this chapter, the final application is simply this: are you seeking the LORD with this kind of earnestness? The post-exilic community was surrounded by discouragement, partial fulfillment, and long waiting. Zechariah 8 calls them &mdash; and calls us &mdash; to reorient toward the one who says, &ldquo;I am jealous for you with great jealousy,&rdquo; and let that declaration be the beginning and the end of our seeking." }} />
            </div>

            <div style={cardStyle}>
              <h2 style={h2Style}>Questions for Reflection and Discussion</h2>
              {[
                { num: "1", q: "Zechariah 8:2 says God is jealous for Zion with &ldquo;great jealousy.&rdquo; Have you ever experienced this as a personal reality &mdash; not just a doctrinal statement? What would it mean to let that declaration shape how you see your relationship with God today?" },
                { num: "2", q: "The vision of old men and children in the streets (8:4-5) is deliberately ordinary. What ordinary goods in your community are being denied to people &mdash; and how might your church participate in restoring them?" },
                { num: "3", q: "The four commands of 8:16-17 include an interior command: &ldquo;do not devise evil in your hearts against one another.&rdquo; Is there anyone you have been devising evil against in your imagination? What would repentance and reconciliation look like?" },
                { num: "4", q: "Which of your &ldquo;fast days&rdquo; &mdash; anniversaries of loss or grief &mdash; might God be inviting you to begin reimagining as a &ldquo;feast day&rdquo; of testimony and hope?" },
                { num: "5", q: "The nations in 8:23 say, &ldquo;We have heard that God is with you.&rdquo; What would someone who spent a month with your church community &ldquo;hear&rdquo; about the presence of God among you? What would make them want to come?" },
              ].map(item => (
                <div key={item.num} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", padding: "0.75rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: TEAL + "22", color: TEAL, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.85rem", flexShrink: 0 }}>{item.num}</div>
                  <p style={{ ...pStyle, marginBottom: 0, alignSelf: "center", fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.q }} />
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <h2 style={{ ...h2Style, marginBottom: "1.5rem" }}>Video Resources</h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {videoItems.map(v => (
                  <div key={v.id}>
                    <div style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "0.5rem", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: v.title }} />
                    <VideoEmbed videoId={v.id} title={v.title} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...cardStyle, background: `linear-gradient(135deg, ${TEAL}11, ${GOLD}11)`, textAlign: "center" }}>
              <h2 style={h2Style}>A Prayer from Zechariah 8</h2>
              <p style={{ ...pStyle, fontStyle: "italic", maxWidth: 560, margin: "0 auto 1rem" }} dangerouslySetInnerHTML={{ __html: "LORD of hosts, you are jealous for us with great jealousy &mdash; and we confess how little we have received that. You have returned to dwell among us in Christ, and we have so often lived as if you were absent. Restore in us the vision of Zechariah 8: old people honored, children laughing, streets full of life. Make our community a place so saturated with your presence that those who wander in say, &lsquo;We have heard that God is with you.&rsquo; Turn our fast days into feast days. Give us strong hands for the work of your kingdom, and teach us to love truth and peace. Amen." }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
