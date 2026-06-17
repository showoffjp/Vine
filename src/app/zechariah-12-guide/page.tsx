"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";

export default function Zechariah12GuidePage() {
  const [tab, setTab] = useState("overview");
  const [open, setOpen] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { id: "pFVAJcXR2YQ", title: "Zechariah 12: They Shall Look on Me Whom They Have Pierced" },
    { id: "S8BQ7YVZF5I", title: "The Spirit of Grace - Zechariah 12:10 Explained" },
    { id: "0v1uNKFt9cM", title: "Jerusalem as a Cup of Staggering - Zechariah 12 Study" },
    { id: "aM0cZk3HvGU", title: "Zechariah 12 and the Crucifixion - Bible Commentary" },
  ];

  const TABS = ["overview", "themes", "verse", "application"];
  const TAB_LABELS: Record<string, string> = {
    overview: "Overview",
    themes: "Key Themes",
    verse: "Verse by Verse",
    application: "Application",
  };
  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div style={{ background: BG, minHeight: "100vh", paddingTop: "var(--header-height, 80px)", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${TEAL}22, ${PURPLE}22)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: `${TEAL}22`, color: TEAL, borderRadius: 6, padding: "4px 14px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1rem" }}>
          Old Testament Study
        </div>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.15 }}>
          Zechariah 12 &mdash; They Will Look on Me Whom They Have Pierced
        </h1>
        <p style={{ color: MUTED, maxWidth: 660, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.75 }}>
          Jerusalem as a cup of staggering and a heavy stone for all nations &mdash; and the astonishing outpouring of the Spirit of grace that produces genuine mourning over the one who was pierced.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "1.5rem 1rem", flexWrap: "wrap" }}>
        {TABS.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: `1px solid ${tab === t ? TEAL : BORDER}`, background: tab === t ? TEAL : "transparent", color: tab === t ? "#fff" : MUTED, cursor: "pointer", fontWeight: tab === t ? 700 : 400, fontFamily: "inherit", fontSize: 14 }}>
            {TAB_LABELS[t]}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {tab === "overview" && (
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>
              Overview: The Burden of the Word of the LORD
            </h2>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }}>
              Zechariah 12:1&ndash;14
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Zechariah 12 opens the second major oracle of the book &mdash; chapters 12 through 14 &mdash; with a title that sets the tone for everything that follows: &ldquo;The burden of the word of the LORD concerning Israel.&rdquo; The Hebrew word translated &ldquo;burden&rdquo; (<em>massa</em>) carries the sense of a weighty, oracular pronouncement &mdash; something that presses down on the prophet with divine urgency. What follows is some of the most theologically concentrated and Christologically significant material in the entire Old Testament." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The oracle begins by grounding itself in the most fundamental theological reality: the identity of the God who speaks it. &ldquo;Thus declares the LORD, who stretched out the heavens and laid the foundation of the earth and formed the spirit of man within him&rdquo; (12:1). Before a single prediction is made, the reader is reminded who is speaking. This is not a human oracle about political possibilities; it is the word of the Creator of the cosmos &mdash; the one who stretched out the sky like a curtain and set the earth on its foundations and breathed life into the spirit of every human being. The authority of what follows rests entirely on the character and power of the one speaking it." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The central image of the opening section (12:2&ndash;9) is Jerusalem as an instrument of divine judgment against the surrounding nations. God declares that he will make Jerusalem &ldquo;a cup of staggering to all the surrounding peoples&rdquo; (12:2). The image is of a cup so potent that those who drink from it cannot stand; they stagger and fall. The nations who besiege Jerusalem will themselves be the ones overcome. Then the metaphor shifts: &ldquo;On that day I will make Jerusalem a heavy stone for all the peoples. All who lift it will surely hurt themselves. And all the nations of the earth will gather against it&rdquo; (12:3). A stone too heavy to lift will injure those who try. The nations who come against Jerusalem come against the stone that God himself has set, and they are broken against it." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Within this framework of divine protection, the oracle also addresses a potential internal tension: the relationship between Jerusalem and the clans of Judah. There is a danger that Judah might feel overlooked or overshadowed by God&rsquo;s particular protection of the city. So God declares that he will protect Judah first: &ldquo;The clans of Judah shall say to themselves, &lsquo;The inhabitants of Jerusalem have strength through the LORD of hosts, their God.&rsquo;&rdquo; (12:5). When Judah recognizes that Jerusalem&rsquo;s strength is God&rsquo;s strength, the tension dissolves into unity. The clans of Judah will be &ldquo;like a blazing pot in the middle of wood, like a flaming torch among sheaves. And they shall devour to the right and to the left all the surrounding peoples&rdquo; (12:6)." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "But the oracle&rsquo;s most stunning and historically consequential moment comes in 12:10, where the register shifts entirely. After all the language of military protection and national victory, God suddenly speaks of an inner spiritual transformation: &ldquo;And I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and pleas for mercy, so that, when they look on me, on him whom they have pierced, they shall mourn for him, as one mourns for an only son, and weep bitterly over him, as one weeps over a firstborn.&rdquo; The grammatical shift &mdash; from &ldquo;me&rdquo; to &ldquo;him&rdquo; within a single clause &mdash; has puzzled interpreters for centuries. The most natural reading, especially in light of the New Testament, is that it refers to a divine figure who is both God himself and one who was pierced by the people who now mourn him." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The New Testament makes the connection explicit. John&rsquo;s Gospel cites Zechariah 12:10 at the crucifixion, when a soldier pierces Jesus&rsquo;s side with a spear: &ldquo;And again another Scripture says, &lsquo;They will look on him whom they have pierced&rsquo;&rdquo; (John 19:37). And Revelation 1:7 echoes it at the Second Coming: &ldquo;Behold, he is coming with the clouds, and every eye will see him, even those who pierced him, and all tribes of the earth will wail on account of him.&rdquo; Zechariah 12:10 is therefore a passage of extraordinary prophetic precision &mdash; it envisions the very event that John witnesses at Golgotha, and it interprets that event as both a divine and a human act: the one who was pierced is the LORD himself, and those who pierced him will one day look on him with tears of genuine repentance." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The chapter closes (12:11&ndash;14) with an extended description of the mourning that follows &mdash; a mourning so intense and so pervasive that it spreads through all the families of Jerusalem, with men and women mourning separately, each family apart. The individualized nature of the mourning is theologically significant: genuine repentance is never merely corporate. It must be personal. The Spirit of grace produces not a generalized sentiment of regret but a specific, individual grief over the one who was pierced." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "1.75rem 2rem", marginTop: "1rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.15rem" }}>
                The Hinge of the Chapter
              </h3>
              <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "1rem" }} dangerouslySetInnerHTML={{ __html: "Zechariah 12:10 is one of the most remarkable verses in the Hebrew Bible &mdash; a prophecy of piercing spoken by the LORD in the first person, fulfilled at the cross, and awaiting its final fulfillment at the return of Christ. Every major movement of redemptive history turns on this single verse." }} />
            </div>
          </div>
        )}

        {tab === "themes" && (
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>
              Key Themes
            </h2>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "2rem" }}>
              The Theological Heart of Zechariah 12
            </div>

            {[
              {
                id: "cup",
                title: "Jerusalem as a Cup of Staggering",
                content: "The image of Jerusalem as a &ldquo;cup of staggering&rdquo; (12:2) draws on one of the most potent metaphors in prophetic literature. The cup of divine wrath is a recurring image in the prophets (Isaiah 51:17; Jeremiah 25:15; Ezekiel 23:32&ndash;33; Habakkuk 2:16) &mdash; a cup that God causes the nations to drink, leaving them reeling and unable to stand. What is striking in Zechariah 12 is that Jerusalem herself becomes the instrument by which the nations drink this cup. God is not simply defending Jerusalem; he is using Jerusalem as the vehicle of his judgment against the nations that gather against it. The cup that the nations expect to empty over God&rsquo;s people instead turns against them. This reversal is characteristic of the prophetic eschatology in the second half of Zechariah &mdash; what the nations intend as destruction becomes the occasion of their own undoing. The cup of staggering is also a reminder that in the end, it is not military might or political maneuvering that determines the outcome of history; it is the sovereign purpose of the God who controls the cup."
              },
              {
                id: "stone",
                title: "The Heavy Stone &mdash; Nations Broken Against Jerusalem",
                content: "The second major image of Zechariah 12:3 &mdash; Jerusalem as a heavy stone &mdash; is distinctive and memorable. A stone so heavy that no one can lift it will injure those who try. The nations who come against Jerusalem come against something immovable, set in place by the God of heaven. The image conveys both the futility of opposition to God&rsquo;s purposes and the danger of trying. Those who gather against Jerusalem are not merely frustrated in their plans; they &ldquo;surely hurt themselves.&rdquo; This is the language of self-inflicted injury &mdash; the injury that comes from opposing what God has established. The New Testament picks up a related image in a different context: Jesus describes himself as the stone that the builders rejected, which became the cornerstone, and warns that &ldquo;everyone who falls on that stone will be broken to pieces, and when it falls on anyone, it will crush him&rdquo; (Luke 20:18). The stone that cannot be moved will accomplish its purpose regardless of the nations&rsquo; opposition, and those who oppose it will be found to have opposed God himself."
              },
              {
                id: "protection",
                title: "God&rsquo;s Protection of the Weak",
                content: "One of the most theologically rich passages in Zechariah 12 is the promise of 12:8: &ldquo;On that day the LORD will protect the inhabitants of Jerusalem, so that the feeblest among them on that day shall be like David, and the house of David shall be like God, like the angel of the LORD, going before them.&rdquo; The escalation is remarkable: the feeblest will be like David, and David&rsquo;s house will be like God. The reference point for the feeble is David &mdash; the greatest warrior and king in Israel&rsquo;s history &mdash; and even that standard is exceeded by the house of David, who will be like the angel of the LORD, the divine representative who led Israel through the wilderness and into Canaan. God&rsquo;s power in the end times is not reserved for the strong; it is distributed even to the most vulnerable. This principle runs throughout Scripture: God chooses the weak things of the world to shame the strong (1 Corinthians 1:27), and his power is made perfect in weakness (2 Corinthians 12:9). Zechariah 12:8 envisions a day when that principle is fully and visibly enacted."
              },
              {
                id: "spirit",
                title: "The Spirit of Grace and Supplication",
                content: "The pivot of Zechariah 12 is the outpouring described in 12:10: &ldquo;And I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and pleas for mercy.&rdquo; The phrase &ldquo;spirit of grace and pleas for mercy&rdquo; (or &ldquo;spirit of grace and supplication&rdquo;) points to a divine gift that produces two responses in its recipients: an experience of grace received (the grace itself is poured out) and an outpouring of earnest prayer and petition. The Hebrew word for &ldquo;pleas for mercy&rdquo; (<em>tachanun</em>) refers to the kind of earnest, beseeching prayer that arises from genuine awareness of need and unworthiness. The Spirit does not produce self-congratulation; it produces supplication. This is consistent with the broader New Testament theology of the Spirit, who convicts the world of sin (John 16:8) and helps us in our weakness with groanings too deep for words (Romans 8:26). The Spirit of grace is not given to make people comfortable; it is given to produce genuine repentance, prayer, and dependence on God."
              },
              {
                id: "piercing",
                title: "The Piercing &mdash; Prophetic Precision and Christological Fulfillment",
                content: "The central prophetic claim of Zechariah 12:10 is one of the most theologically charged statements in the Hebrew Bible. God speaks in the first person and says that &ldquo;they shall look on me, on him whom they have pierced.&rdquo; The shift from &ldquo;me&rdquo; to &ldquo;him&rdquo; within a single clause has generated enormous discussion. The most straightforward reading is that the one who is pierced is simultaneously divine (&ldquo;me&rdquo;) and a distinct person (&ldquo;him&rdquo;) &mdash; a distinction within the divine life that Christian theology will later identify as a distinction of persons within the one God. John&rsquo;s Gospel cites this verse explicitly at the crucifixion (John 19:37), identifying Jesus as the one who was pierced. Revelation 1:7 applies it to the Second Coming: &ldquo;every eye will see him, even those who pierced him.&rdquo; The word &ldquo;pierced&rdquo; in Zechariah 12:10 (Hebrew <em>daqar</em>) means to pierce through with a weapon &mdash; a violent, lethal piercing. This was not fulfilled in any of the historical events of Zechariah&rsquo;s own time. Its fulfillment awaited the Roman soldier&rsquo;s spear at Golgotha, when the Son of God was pierced and the one who had cried &ldquo;It is finished&rdquo; was confirmed to be dead."
              },
              {
                id: "mourning",
                title: "Mourning as True Repentance &mdash; Hadad-rimmon and Josiah",
                content: "The mourning described in Zechariah 12:10&ndash;14 is not mere sorrow; it is mourning that has been produced by the Spirit of grace, and it is therefore genuine repentance. The text compares it to two of the most intense public mournings in Israel&rsquo;s history. The first is the mourning &ldquo;as one mourns for an only son&rdquo; (12:10) &mdash; the grief of a parent for a child who cannot be replaced. The second is the mourning of Hadad-rimmon in the valley of Megiddon (12:11), which is associated in Jewish tradition with the mourning for King Josiah, who was killed at Megiddo by Pharaoh Neco (2 Chronicles 35:20&ndash;25). Josiah was the last genuinely righteous king of Judah, the great reformer who had torn his clothes and wept when the Book of the Law was rediscovered &mdash; and his death at Megiddo was experienced as a national catastrophe. The mourning for the pierced one will be at least as intense as the mourning for Josiah. And it will be deeply personal: the text specifies that each clan mourns separately, and within each clan, the men and women mourn apart (12:12&ndash;14). True repentance, however communally it may begin, must always become personal."
              },
              {
                id: "families",
                title: "Individual and Communal Dimensions of Repentance",
                content: "The closing verses of Zechariah 12 (12:11&ndash;14) describe the mourning in terms of specific families: &ldquo;The land shall mourn, each family by itself: the family of the house of David by itself, and their wives by themselves; the family of the house of Nathan by itself, and their wives by themselves; the family of the house of Levi by itself, and their wives by themselves; the family of the Shimeites by itself, and their wives by themselves&rdquo; (12:12&ndash;13). The naming of specific families &mdash; royal, prophetic, priestly, and clans of lesser prominence &mdash; suggests that the mourning will encompass every stratum of society, from the highest (David, Levi) to the more ordinary. And within each family group, men and women mourn separately &mdash; a detail that points to the interior and personal nature of genuine grief. The movement of the passage is from the corporate to the individual: the whole land mourns, but within that general mourning, each family grieves separately, and within each family, each person stands before God in their own grief. Genuine repentance over the one who was pierced cannot be outsourced to the community; it must be personal. This is the consistent teaching of Scripture: &lsquo;each of us will give an account of himself to God&rsquo; (Romans 14:12), and each person must individually look on the one they have pierced and mourn."
              },
            ].map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontWeight: 700, fontSize: "1rem", fontFamily: "Georgia, serif", textAlign: "left" }}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.title }} />
                  <span style={{ color: TEAL, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.25rem 1.25rem" }}>
                    <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "verse" && (
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>
              Verse by Verse
            </h2>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "2rem" }}>
              Zechariah 12:1&ndash;14 &mdash; Detailed Exposition
            </div>

            {[
              {
                id: "v1",
                ref: "Zechariah 12:1",
                heading: "The Creator Speaks &mdash; The Oracle&rsquo;s Foundation",
                body: "Verse 1 establishes the authority and scope of everything that follows: &ldquo;The burden of the word of the LORD concerning Israel: Thus declares the LORD, who stretched out the heavens and laid the foundation of the earth and formed the spirit of man within him.&rdquo; Three acts of creation are named &mdash; the stretching of the heavens, the laying of the earth&rsquo;s foundations, and the forming of the human spirit within the body. These are not random examples; they represent the full scope of creation: the cosmos above, the physical world below, and the inner life of the human person. The God who speaks this oracle is the God who made all of these. His word is not one human perspective on the future; it is the sovereign declaration of the one who made heaven and earth and breathed life into every human being. The title &ldquo;burden&rdquo; (<em>massa</em>) signals that what follows is a weighty divine oracle, and the description of the speaker signals that its weight is not negotiable. Readers must reckon with who is speaking before they can properly hear what is spoken."
              },
              {
                id: "vv2-3",
                ref: "Zechariah 12:2&ndash;3",
                heading: "Jerusalem as Cup and Stone for the Nations",
                body: "Verses 2 and 3 introduce the two governing images for God&rsquo;s use of Jerusalem against the nations. &ldquo;Behold, I am about to make Jerusalem a cup of staggering to all the surrounding peoples. The siege of Jerusalem will also be against Judah. On that day I will make Jerusalem a heavy stone for all the peoples. All who lift it will surely hurt themselves. And all the nations of the earth will gather against it&rdquo; (12:2&ndash;3). The cup of staggering does not merely symbolize the nations&rsquo; defeat; it suggests that their assault on Jerusalem will itself be the intoxicating cup from which they cannot recover. The gathering of all nations against Jerusalem is one of the most frequently repeated eschatological themes in the prophets (Joel 3:2; Zephaniah 3:8; Zechariah 14:2; Revelation 19:19) &mdash; and in each case, the gathering results not in the destruction of Jerusalem but in the nations&rsquo; own undoing. The heavy stone image adds a note of irony: the nations who come to remove this obstacle will injure themselves in the attempt. God&rsquo;s purposes cannot be lifted and discarded by human effort, however organized and determined."
              },
              {
                id: "vv4-5",
                ref: "Zechariah 12:4&ndash;5",
                heading: "God Strikes the Horses &mdash; Judah Recognizes Divine Strength",
                body: "The military imagery continues in verses 4 and 5, but now the focus turns to the mechanism of the nations&rsquo; defeat: &ldquo;On that day, declares the LORD, I will strike every horse with panic, and its rider with madness. But for the sake of the house of Judah I will keep my eyes open, when I strike every horse of the peoples with blindness&rdquo; (12:4). In the ancient world, cavalry was decisive military technology &mdash; the equivalent of tanks and artillery in modern warfare. The nation with the most effective horses and chariots held a decisive advantage. God&rsquo;s response to the nations&rsquo; assembled cavalry is to strike the horses with panic and blindness and the riders with madness. The military superiority of the nations is instantly neutralized by the God who made the horses. Verse 5 describes Judah&rsquo;s response to what they observe: &ldquo;Then the clans of Judah shall say to themselves, &lsquo;The inhabitants of Jerusalem have strength through the LORD of hosts, their God.&rsquo;&rdquo; Judah recognizes that Jerusalem&rsquo;s deliverance is not a matter of superior human strategy but of divine power. This recognition is itself a gift &mdash; it is the Spirit of grace beginning to work, producing the humility that acknowledges dependence on God rather than taking credit for the victory."
              },
              {
                id: "vv6-8",
                ref: "Zechariah 12:6&ndash;8",
                heading: "Judah Like a Firepot &mdash; Even the Feeblest Like David",
                body: "The description of Judah&rsquo;s role in the deliverance escalates dramatically in verses 6 through 8. &ldquo;On that day I will make the clans of Judah like a blazing pot in the middle of wood, like a flaming torch among sheaves. And they shall devour to the right and to the left all the surrounding peoples, while Jerusalem shall again be inhabited in its place, in Jerusalem&rdquo; (12:6). The imagery of fire consuming wood and sheaves conveys irresistible destructive power &mdash; but it is a power that God bestows, not one that Judah possesses inherently. God acts first to save Judah (before Jerusalem, to prevent boasting: 12:7), so that the house of David and the inhabitants of Jerusalem &ldquo;may not surpass Judah&rdquo; (12:7). The final verse of this section contains the chapter&rsquo;s most remarkable statement about the transformation of human weakness: &ldquo;On that day the LORD will protect the inhabitants of Jerusalem, so that the feeblest among them on that day shall be like David, and the house of David shall be like God, like the angel of the LORD, going before them&rdquo; (12:8). The feeble becomes like the greatest warrior; the royal house becomes like the divine representative. This escalation points beyond any historical event in Zechariah&rsquo;s own time to a final divine intervention in which God&rsquo;s power flows through his people in ways that utterly transcend their natural limitations."
              },
              {
                id: "v9",
                ref: "Zechariah 12:9",
                heading: "God Seeks to Destroy the Nations",
                body: "Verse 9 is a brief but important transitional statement: &ldquo;And on that day I will seek to destroy all the nations that come against Jerusalem.&rdquo; The verse summarizes the military dimension of the oracle and prepares for the dramatic spiritual pivot of verse 10. Several things are worth noting. First, the verb &ldquo;seek&rdquo; (<em>baqash</em>) is unusual &mdash; it could be translated &ldquo;I will endeavor&rdquo; or &ldquo;I will set my face to&rdquo; &mdash; and it underscores the intentionality and determination of God&rsquo;s action. Second, the object of destruction is &ldquo;all the nations that come against Jerusalem&rdquo; &mdash; the criterion is their posture toward Jerusalem, not their ethnic or political identity. Nations that align themselves against God&rsquo;s city align themselves against God, and the consequence is destruction. Third, the verse&rsquo;s brevity is itself significant: it dispatches the military crisis in a single sentence, because the real drama of the chapter lies not in the defeat of the nations but in what happens within Jerusalem in verse 10. The external victory is given; the internal transformation is the oracle&rsquo;s climax."
              },
              {
                id: "v10",
                ref: "Zechariah 12:10",
                heading: "&ldquo;They Will Look on Me Whom They Have Pierced&rdquo; &mdash; The Christological Climax",
                body: "Verse 10 is one of the most theologically dense and prophetically precise verses in the entire Old Testament: &ldquo;And I will pour out on the house of David and the inhabitants of Jerusalem a spirit of grace and pleas for mercy, so that, when they look on me, on him whom they have pierced, they shall mourn for him, as one mourns for an only son, and weep bitterly over him, as one weeps over a firstborn.&rdquo; The verse requires careful attention at every point. &ldquo;I will pour out&rdquo; &mdash; the language of Pentecost; God takes initiative. &ldquo;A spirit of grace and pleas for mercy&rdquo; &mdash; the Spirit does not produce pride or self-sufficiency; it produces awareness of need and earnest petition. &ldquo;When they look on me, on him whom they have pierced&rdquo; &mdash; the grammatical shift from first to third person within a single clause has been explained in various ways, but the most theologically coherent explanation, confirmed by the New Testament&rsquo;s application of this verse, is that the one who speaks (&ldquo;me&rdquo;) is God, and the one who was pierced (&ldquo;him&rdquo;) is a divine figure distinct from yet identified with God &mdash; the Son, whom John identifies as Jesus of Nazareth (John 19:37). The mourning that follows is described in the most intense possible terms: the grief of a parent for an only son, of a family for a firstborn. The Spirit produces not casual regret but shattering, transformative grief over what was done to the one who was pierced."
              },
              {
                id: "vv11-14",
                ref: "Zechariah 12:11&ndash;14",
                heading: "The Mourning Spreads &mdash; Individual and Corporate Repentance",
                body: "The final verses describe the spread of mourning through all the families of Jerusalem, using the mourning at Hadad-rimmon in the valley of Megiddon as a historical reference point: &ldquo;On that day the mourning in Jerusalem will be as great as the mourning for Hadad-rimmon in the plain of Megiddo&rdquo; (12:11). This is almost certainly a reference to the lamentation over Josiah, who was killed at Megiddo (2 Chronicles 35:22&ndash;25). The comparison is precise: the coming mourning over the pierced one will be as intense and as widely shared as the national grief over the last righteous king of Judah. Verses 12 through 14 enumerate the families who mourn: the house of David (royal), the house of Nathan (prophetic, either David&rsquo;s son or the prophet), the house of Levi (priestly), and the family of the Shimeites (a Levitical subclan). Royal, prophetic, priestly &mdash; no stratum of society is exempt. And within each family, men and women mourn separately, each in their own grief. The individuation of the mourning is the text&rsquo;s final and most important point: genuine repentance cannot be merely institutional or communal. It must become personal. Each person must individually stand before the pierced one and weep."
              },
            ].map(item => (
              <div key={item.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, marginBottom: "0.75rem", overflow: "hidden" }}>
                <button
                  onClick={() => toggle(item.id)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.25rem", background: "transparent", border: "none", color: TEXT, cursor: "pointer", fontFamily: "Georgia, serif", textAlign: "left", gap: "1rem" }}
                >
                  <div>
                    <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: TEXT }} dangerouslySetInnerHTML={{ __html: item.heading }} />
                  </div>
                  <span style={{ color: TEAL, fontSize: "1.2rem", flexShrink: 0 }}>{open === item.id ? "-" : "+"}</span>
                </button>
                {open === item.id && (
                  <div style={{ padding: "0 1.25rem 1.25rem" }}>
                    <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "application" && (
          <div>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.5rem", color: TEXT }}>
              Application
            </h2>
            <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "2rem" }}>
              Living the Truths of Zechariah 12
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Zechariah 12 is not merely a chapter about the future; it is a chapter about what the future reveals and what it calls for now. The truths embedded in this oracle &mdash; about God&rsquo;s sovereign power over hostile nations, about the Spirit of grace that produces genuine repentance, about the grief over the one who was pierced &mdash; are not truths to be admired from a distance but truths to be inhabited in the present. They have transformative power when they are received not merely as theological propositions but as realities that shape how we live." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The first application is the call to trust God&rsquo;s sovereign plan over hostile powers. Zechariah 12 describes a situation in which all the nations of the earth are gathered against Jerusalem &mdash; a picture of total, overwhelming opposition. And yet God&rsquo;s response is utterly calm: he will make Jerusalem a cup of staggering and a heavy stone. He will strike every horse with panic. He will seek to destroy all who come against his people. The lesson is not that God&rsquo;s people will never face overwhelming opposition; the chapter presupposes that they will. The lesson is that overwhelming opposition does not change the outcome when the Creator of the heavens and the earth is on the side of his people. For Christians today, facing opposition to the faith &mdash; whether cultural, political, or personal &mdash; Zechariah 12 is a reminder that the ultimate trajectory of history is not determined by the strength of opposition but by the purpose of the one who stretched out the heavens." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The second application flows directly from Zechariah 12:10: receiving the Spirit of grace that produces genuine mourning over sin. The mourning described in this chapter is not the mourning of self-pity or the despair of those who feel they have failed; it is the mourning of those who have been given a Spirit of grace and who see, for the first time or with new clarity, what their sin cost the one who was pierced. This is the deep work of the Holy Spirit described in John 16:8 &mdash; the conviction of sin, of righteousness, and of judgment. It is not a comfortable work. But it is a gracious one. The Spirit does not produce this mourning to crush; he produces it to transform. Those who mourn in this way are, as Jesus says in Matthew 5:4, blessed &mdash; &ldquo;for they shall be comforted.&rdquo; The comfort that follows the mourning is the assurance that the one who was pierced was pierced for precisely this reason: to bear the sin that produces the mourning, so that the mourner might be released from its guilt." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The third application is to allow grief over Christ&rsquo;s suffering to lead to genuine transformation. The mourning in Zechariah 12 is not an end in itself; it is the beginning of a new life. In the Jewish liturgical tradition, this passage is read at Yom Kippur &mdash; the Day of Atonement &mdash; precisely because grief over sin and confidence in divine forgiveness belong together. The mourning that the Spirit produces is the mourning that opens a person to receive the forgiveness that God has already provided. For Christians who have been formed in traditions that rush past the suffering of Christ to the resurrection, Zechariah 12 is a corrective. The cross is not a brief episode to be minimized; it is the event in which the one who was pierced bore the sin of the world. Dwelling honestly with what that piercing cost &mdash; allowing the grief that the Spirit produces &mdash; is not morbid; it is the pathway to the deepest and most stable joy." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "The fourth application concerns the communal and individual dimensions of repentance. Zechariah 12:12&ndash;14 describes mourning that is simultaneously communal (the whole land mourns) and intensely individual (each family separately, men and women apart). This is a pattern that appears throughout Scripture: the covenant is made with a people, but its terms are received and lived out by persons. The church gathers for communal worship, communal confession, and communal prayer &mdash; and those communal practices are essential and irreplaceable. But the mourning over sin, the reception of forgiveness, and the transformation of life must also happen in the interior of each individual person. No one else can weep your repentance for you. No communal service of confession can substitute for the moment in which you, personally, look on the one who was pierced and know that he was pierced for you. Zechariah 12 calls both dimensions into play simultaneously, and a healthy Christian life holds both together." }} />
              <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Finally, Zechariah 12 invites a sustained meditation on the identity of the one who was pierced. That the LORD speaks in the first person and says &ldquo;on me, on him whom they have pierced&rdquo; is one of the most striking statements in the entire Old Testament. It points to a mystery at the heart of the divine life that the New Testament will call the Trinity &mdash; the one God subsisting in three persons, such that when the Son is pierced, the Father can say &ldquo;me.&rdquo; This is not a contradiction; it is the depth of divine self-giving. The God who created the heavens and the earth and formed the spirit of every human being within them is the same God who, in the person of his Son, submitted to being pierced by those he had made. That is the gospel in miniature: the Creator pierced by the creature, so that the creature might be restored to the Creator." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.5rem 2rem", marginBottom: "2.5rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>
                Practical Steps for This Week
              </h3>
              <ul style={{ color: MUTED, lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
                <li>Read Zechariah 12 aloud in one sitting, letting the full arc from military protection to spiritual transformation sink in.</li>
                <li>Spend time with 12:10 &mdash; ask the Spirit of grace to produce in you the mourning that leads to transformation, not the grief that leads to despair.</li>
                <li>Find a quiet moment to personally look on the one who was pierced &mdash; not as a doctrinal concept but as a historical reality with personal implications for you.</li>
                <li>Identify one area of your life where you are tempted to trust human strength rather than the God who strikes horses with panic.</li>
                <li>Consider how your church community practices both communal and individual repentance. What would it look like to deepen both dimensions?</li>
              </ul>
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.25rem", color: TEXT }}>
              Video Teaching
            </h3>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }} dangerouslySetInnerHTML={{ __html: "Deepen your study of Zechariah 12 through these video teachings on Jerusalem as God&rsquo;s instrument, the Spirit of grace, the piercing fulfilled at the cross, and the nature of genuine repentance." }} />
            <div style={{ display: "grid", gap: "1.5rem" }}>
              {videoItems.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.id} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${TEAL}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEAL, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            The Pierced One and the Spirit of Grace
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }} dangerouslySetInnerHTML={{ __html: "Zechariah 12:10 stands at the intersection of prophecy, history, and eschatology. Spoken by the LORD in the first person, fulfilled at Golgotha in the piercing of Jesus, and awaiting its final fulfillment at his return &mdash; this verse encompasses the whole of redemptive history in a single sentence. The Spirit of grace that produces mourning over the pierced one is the same Spirit that produces faith, repentance, and new life. He does not bring condemnation; he brings transformation." }} />
        </div>
      </div>
    </div>
  );
}
