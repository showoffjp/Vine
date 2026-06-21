"use client";
import { useState, useEffect } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const TABS = ["Overview", "Themes", "Verse by Verse", "Application"] as const;
type Tab = (typeof TABS)[number];

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER}` }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default function Psalm83Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #1a0808 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: ROSE }}>Psalms</span>
            <span style={{ color: BORDER }}>{" > "}</span>
            Book III
            <span style={{ color: BORDER }}>{" > "}</span>
            Asaph Collection (Final)
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2 }}>
            Psalm 83 &mdash; Do Not Keep Silence, O God
          </h1>
          <p style={{ color: MUTED, fontSize: 17, margin: "0 0 20px", lineHeight: 1.6 }}>
            Asaph&rsquo;s final psalm &mdash; a ten-nation coalition against Israel, the prayer for defeat as at Midian, and the ultimate goal that all nations know God alone is Most High
          </p>
          <blockquote style={{ borderLeft: `3px solid ${ROSE}`, paddingLeft: 16, margin: 0, color: TEXT, fontStyle: "italic", fontSize: 15 }}>
            &ldquo;Let them know that you alone, whose name is the LORD, are the Most High over all the earth.&rdquo; &mdash; Psalm 83:18
          </blockquote>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "14px 22px", background: "none", border: "none", cursor: "pointer",
                color: activeTab === tab ? ROSE : MUTED,
                borderBottom: activeTab === tab ? `2px solid ${ROSE}` : "2px solid transparent",
                fontFamily: "Georgia, serif", fontSize: 14, fontWeight: activeTab === tab ? 700 : 400,
                whiteSpace: "nowrap", transition: "color 0.2s"
              }}
            >{tab}</button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 24px 80px" }}>

        {/* -- OVERVIEW -- */}
        {activeTab === "Overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "28px 32px" }}>
              <h2 style={{ color: ROSE, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Overview</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 83 is the final psalm attributed to Asaph and closes the Elohistic Psalter (Psalms 42&ndash;83). It is a communal lament of unusual scope and specificity: ten named nations have entered into a conspiracy against Israel with the stated goal of erasing it from the earth entirely&mdash;&ldquo;Come, let us wipe them out as a nation; let the name of Israel be remembered no more!&rdquo; (v. 4). The psalm responds to this existential threat with a prayer for divine intervention modeled on specific historical deliverances from Israel&rsquo;s past." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The historical occasion is debated. No recorded biblical event involves exactly this coalition of ten nations simultaneously, which has led some scholars to treat the psalm as an eschatological vision rather than a historical report&mdash;a prophetic anticipation of the final assault on God&rsquo;s people. Others see it as reflecting a moment in the divided monarchy, perhaps the alliance described in 2 Chronicles 20 (Jehoshaphat&rsquo;s prayer against Moab, Ammon, and Mount Seir) or a coalition from the period of the Judges. Still others treat it as a generalized portrait of all the surrounding peoples who have at various times been hostile to Israel." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The ten nations listed are: Edom, Ishmael, Moab, Hagrites (Hagarenes), Gebal, Ammon, Amalek, Philistia, Tyre, and Assyria. Geographically, these represent the compass points: Edom and Ishmael to the south and southeast, Moab and Ammon to the east, the Hagrites to the northeast, Amalek and Philistia to the west, Tyre to the northwest, and Assyria to the north. Israel is surrounded from every direction. This encirclement is intentional literary strategy: no human escape is possible. Only divine intervention can save." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The imprecatory section (vv. 9&ndash;17) is among the most vivid in the Psalter. The psalmist invokes two specific historical precedents: the defeat of the Midianite coalition at the hands of Gideon (Judges 6&ndash;8), where specific commanders&mdash;Oreb, Zeeb, Zebah, and Zalmunna&mdash;were named and defeated; and the defeat at the brook Kishon (Judges 4&ndash;5, Deborah&rsquo;s victory over Sisera). These were moments when Israel was hopelessly outnumbered, and God acted with decisive, supernatural power. The prayer is: &ldquo;Do it again.&rdquo;" }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "What distinguishes Psalm 83 from simple military nationalism is its closing verses. The ultimate goal of the prayer for the enemies' defeat is not Israel's triumph but the nations' recognition of God. Verse 16: &ldquo;Fill their faces with shame, that they may seek your name, O LORD.&rdquo; Verse 18: &ldquo;Let them know that you alone, whose name is the LORD, are the Most High over all the earth.&rdquo; This is missiological imprecatory prayer&mdash;the defeat is sought not for Israel&rsquo;s satisfaction but for the nations&rsquo; illumination. John Calvin wrote: &ldquo;The psalmist prays not for the sake of revenge but that God may be glorified by the confusion of his enemies, and that those very enemies may be brought to repentance.&rdquo;" }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Eschatologically, Psalm 83 resonates with the apocalyptic traditions of Zechariah 12&ndash;14, Ezekiel 38&ndash;39 (Gog and Magog), and Revelation 20. The image of all nations conspiring against Jerusalem recurs in these passages, and the divine response&mdash;direct intervention for the salvation of the remnant and the conversion or destruction of the nations&mdash;is the same. The psalm closes the Asaph collection not with resolution but with a prayer for the eschatological day when the Most High&rsquo;s name is acknowledged over all the earth." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: ROSE, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Key Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  ["Author", "Asaph (attributed)"],
                  ["Position", "Final psalm of Elohistic Psalter"],
                  ["Type", "Communal Lament / Imprecatory Psalm"],
                  ["Accent Color", "Rose -- imprecatory urgency"],
                  ["Historical Model", "Gideon's defeat of Midian (Judges 6-8)"],
                  ["Ultimate Goal", "That all nations know God is Most High"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: ROSE, fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>The Ten-Nation Coalition</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
                {[
                  { name: "Edom", dir: "South/SE", note: "Descendants of Esau" },
                  { name: "Ishmael", dir: "South", note: "Arab tribes" },
                  { name: "Moab", dir: "East", note: "Descendants of Lot" },
                  { name: "Hagrites", dir: "Northeast", note: "Bedouin tribes" },
                  { name: "Gebal", dir: "South", note: "Near Edom or Phoenicia" },
                  { name: "Ammon", dir: "East", note: "Descendants of Lot" },
                  { name: "Amalek", dir: "Southwest", note: "Ancient enemy from Sinai" },
                  { name: "Philistia", dir: "West", note: "Coastal plain enemy" },
                  { name: "Tyre", dir: "Northwest", note: "Phoenician city-state" },
                  { name: "Assyria", dir: "North/NE", note: "Superpower of the era" },
                ].map((n) => (
                  <div key={n.name} style={{ background: BG, borderRadius: 8, padding: "10px 12px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: ROSE, fontSize: 13, fontWeight: 700 }}>{n.name}</div>
                    <div style={{ color: MUTED, fontSize: 11 }}>{n.dir} &mdash; {n.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <VideoEmbed videoId="PJEkPiqvDt8" title="Psalm 83 -- National Lament and Imprecatory Prayer" />
          </div>
        )}

        {/* -- THEMES -- */}
        {activeTab === "Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                color: ROSE,
                title: "The Conspiracy Against God's People",
                refs: "Psalm 83:1-8; Revelation 20:7-9; Zechariah 14:2; Acts 4:25-28",
                body: `The psalm opens with three parallel appeals for God to break his silence: "O God, do not keep silence; do not hold your peace or be still, O God!" (v. 1). The urgency is rooted in the severity of the threat described in verses 2&ndash;8: God's enemies are in tumult, they lift their heads, they lay crafty plans against God's people, they consult together, and they have made a covenant&mdash;all against the one God protects. The enemies are not merely attacking Israel; they are attacking "those you protect" and "your cherished ones."

The stated goal of the coalition is totalizing: "Come, let us wipe them out as a nation; let the name of Israel be remembered no more!" (v. 4). This is not a territorial dispute or a trade conflict; it is genocidal in intent. The conspirators do not merely want Israel's land; they want Israel's name erased from human memory. This is the logic of anti-Semitic persecution throughout history&mdash;not merely conquering Israel but eliminating the people of God entirely.

The NT reads similar conspiracies as directed ultimately against God himself. In Acts 4:25&ndash;28, the early church quotes Psalm 2 (&ldquo;Why do the nations rage?&rdquo;) in response to the conspiracy against Jesus: Herod, Pontius Pilate, and the Gentiles conspired against God's holy servant Jesus. The pattern of Psalm 83 is recapitulated in the crucifixion&mdash;the world's authorities conspiring to eliminate the name of God's anointed. And just as Psalm 83 prays for divine intervention, the church prays for the risen Christ's vindication, which has already been given in the resurrection.

Revelation 20:7&ndash;9 presents the eschatological fulfillment: at the end of the millennium, Satan gathers the nations "Gog and Magog" for a final assault on "the camp of the saints and the beloved city." The pattern of Psalm 83&mdash;total encirclement, genocidal intent, divine intervention&mdash;repeats on the largest scale. But fire comes down from heaven and consumes the attackers. Psalm 83's prayer is ultimately answered in the new creation.`,
              },
              {
                color: TEAL,
                title: "Historical Models of Divine Deliverance",
                refs: "Psalm 83:9-12; Judges 4-5; Judges 6-8; Isaiah 10:26",
                body: `Verses 9&ndash;12 invoke two specific historical precedents for the requested divine intervention: the defeat of Sisera at the Kishon River (Judges 4&ndash;5, Deborah and Barak's victory) and the defeat of Midian under Gideon (Judges 6&ndash;8). In both cases, Israel was vastly outnumbered and humanly hopeless; in both cases, God intervened supernaturally. The commanders Oreb and Zeeb were captured and killed (Judges 7:25); Zebah and Zalmunna, the Midianite kings, were pursued and executed by Gideon himself (Judges 8:12&ndash;21).

The prayer is essentially typological: do now what you did then. The historical precedents are not mere historical curiosities; they are the grammar of divine action. God who defeated Midian is the same God being petitioned now. Isaiah employs the same strategy in 10:26: "And the LORD of hosts will wield against them a whip, as when he struck Midian at the rock of Oreb." The Midian defeat becomes a template for future divine action.

This is the function of Israel's historical memory&mdash;it provides the vocabulary for prayer. When a community knows what God has done before, it can pray with specificity and confidence. The psalms of history (like Psalms 78, 105, 106) rehearse God's deeds precisely so that prayers like Psalm 83 can appeal to them with confidence: "You did it then; do it again now."

Matthew Henry notes that the prayer for the enemies to be "like thistledown" (v. 13), "like fire" consuming the forest (v. 14), and "like the whirling dust" is a series of metaphors for divine winnowing&mdash;all of them describing sudden, complete, irreversible destruction that comes not from Israel's power but from God's wind, God's fire, God's storm. The catastrophe they pray for is entirely supernatural in character.`,
              },
              {
                color: GOLD,
                title: "Imprecatory Prayer and the Love of God's Glory",
                refs: "Psalm 83:13-17; Romans 12:19; Revelation 6:10; Luke 18:7-8",
                body: `The imprecatory section of Psalm 83 is one of the most extended in the Psalter. The psalmist prays for the enemies to be: like whirling dust before the wind (v. 13), like fire consuming a forest and flame setting mountains ablaze (v. 14), to be pursued by God's tempest and terrified by his storm (v. 15), their faces filled with shame (v. 16), to be dismayed and perish (v. 17). These are violent, comprehensive images of destruction.

How do we understand such prayers? Three observations are crucial. First, these prayers are addressed to God, not acted upon by the psalmist. The text does not say "let us go and do this to them"; it says "let them be." The imprecatory psalms function as theodicy: they transfer the desire for justice from human revenge to divine judgment. Paul's command in Romans 12:19 ("Beloved, never avenge yourselves, but leave it to the wrath of God") is precisely the posture of the imprecatory psalms&mdash;the anger is real, but it is channeled into prayer rather than action.

Second, the purpose stated in verses 16 and 18 transforms the character of the prayer. "Fill their faces with shame, that they may seek your name" (v. 16). The shame and defeat are not ends in themselves but instruments of potential conversion. The prayer hopes that the overwhelming evidence of God's power will drive the enemies to seek God's name. Calvin: "Even in praying for judgment, the psalmist retains the missionary hope that the nations might be turned to God through their defeat."

Third, the book of Revelation shows the martyrs praying similarly: "O Sovereign Lord, holy and true, how long before you will judge and avenge our blood on those who dwell on the earth?" (6:10). Jesus himself authorizes this prayer type in Luke 18:7&ndash;8: "Will not God give justice to his elect, who cry to him day and night?" The imprecatory psalms are not sub-Christian; they are the prayers of those who take God's justice seriously and trust him to execute it.`,
              },
              {
                color: PURPLE,
                title: "The Missionary Goal of Judgment",
                refs: "Psalm 83:16, 18; Ezekiel 38:23; Isaiah 45:22-23; Philippians 2:10-11",
                body: `Psalm 83 ends with two verses that reveal the ultimate goal of all the preceding imprecatory prayer. Verse 16: "Fill their faces with shame, that they may seek your name, O LORD." Verse 18: "Let them know that you alone, whose name is the LORD, are the Most High over all the earth." The nations are not being prayed against for Israel's sake alone&mdash;they are being prayed against for the nations' own eventual good and for God's universal glory.

This is what Tremper Longman III calls "the missiological dimension of imprecatory prayer." The defeat of the nations is sought not as an end but as a means: the means by which they might come to know the God they oppose. The phrase "that they may seek your name" in verse 16 is particularly remarkable&mdash;it implies that the desired outcome includes the conversion of the very enemies being judged.

Ezekiel 38:23 makes this explicit in the context of the Gog and Magog oracle: "So I will show my greatness and my holiness and make myself known in the eyes of many nations. Then they will know that I am the LORD." The defeat of the hostile nations is an act of divine self-revelation to those nations. They do not know God; after the judgment, they will know him&mdash;either by turning to him in fear and faith or by experiencing his justice in the final reckoning.

The eschatological fulfillment is the vision of Philippians 2:10&ndash;11: "at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father." The universal acknowledgment of God's supremacy that Psalm 83:18 prays for is given in the exaltation of the crucified and risen Christ. The "Most High over all the earth" is revealed in Jesus.`,
              },
              {
                color: GREEN,
                title: "Closing the Asaph Collection: A Theology of the End",
                refs: "Psalm 83 as conclusion; Psalms 73-83 as a collection; Revelation 7:9-10",
                body: `Psalm 83 does not stand alone; it concludes the eleven-psalm Asaph collection (Psalms 73&ndash;83). Reading it as a conclusion to the collection illuminates both the individual psalm and the collection's theological arc. The Asaph psalms began in Psalm 73 with the near-collapse of faith: Asaph's envy of the wicked, his despair in the sanctuary, and the pivot when he entered the sanctuary and understood their end. The collection ends with Psalm 83's vision of that end&mdash;the nations who conspire against God's people being defeated, their faces filled with shame, the name of the LORD known as the Most High over all the earth.

This arc&mdash;from personal crisis of faith to universal vindication of God's justice&mdash;is the arc of the entire Christian life. We begin in Psalm 73 (why do the wicked prosper?), move through Asaph's laments and communal griefs, and arrive at Psalm 83's confident, if desperate, prayer for God to rise and act. The collection does not end with the answer; it ends with the prayer. But it is a prayer rooted in the sanctuary insight of Psalm 73:17: "I perceived their end."

The NT counterpart to this arc is the book of Revelation, which begins with the churches in various states of crisis (Revelation 2&ndash;3) and ends with the vision of the great multitude from every nation, tribe, people, and language standing before the throne crying "Salvation belongs to our God!" (7:9&ndash;10). Psalm 83 prays for that day; Revelation describes it. The Asaph collection is, in this sense, a miniature theology of eschatological hope: we live between the conspiracy of Psalm 83 and the great multitude of Revelation 7.`,
              },
            ].map((theme) => (
              <div key={theme.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
                <div style={{ color: theme.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Theme</div>
                <h3 style={{ color: TEXT, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>{theme.title}</h3>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 14 }}>{theme.refs}</div>
                {theme.body.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 14px" }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* -- VERSE BY VERSE -- */}
        {activeTab === "Verse by Verse" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 28px" }}>
              <h2 style={{ color: ROSE, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Psalm 83 &mdash; 18 verses: appeal, conspiracy, imprecation, doxology</p>
            </div>
            {[
              { v: "1", ref: "Triple Appeal: Break Your Silence", color: ROSE, text: "\"O God, do not keep silence; do not hold your peace or be still, O God!\" Three negative imperatives in a single verse: do not be silent, do not hold your peace, do not be still. The psalmist experiences God&rsquo;s silence as dangerous inaction in the face of an existential threat. Divine silence is not divine indifference (Psalm 121:4: &ldquo;he who keeps Israel will neither slumber nor sleep&rdquo;), but it can feel that way. The opening appeal models the boldness of covenant prayer: coming to God not with polite requests but urgent, repeated demands that he engage. Kidner: &ldquo;The triple appeal is not impatience but intensity.&rdquo;" },
              { v: "2-4", ref: "The Conspiracy Named", color: ROSE, text: "\"For behold, your enemies make an uproar; those who hate you have raised their heads. They lay crafty plans against your people; they consult together against your cherished ones. They say, 'Come, let us wipe them out as a nation; let the name of Israel be remembered no more!'\" The detail is important: the enemies are not merely geopolitical rivals. They are identified as God&rsquo;s own enemies (&ldquo;those who hate you&rdquo;), and their target is described as God&rsquo;s cherished ones. The goal is total erasure: not defeat but obliteration from memory. The genocidal language echoes the systematic attempts to eliminate Israel throughout history&mdash;Pharaoh&rsquo;s decree, Haman&rsquo;s plot, the 20th-century Holocaust. Each time, the psalmist&rsquo;s prayer has been vindicated." },
              { v: "5-8", ref: "The Ten-Nation Coalition", color: TEAL, text: "\"For they conspire with one accord; against you they make a covenant&mdash;the tents of Edom and the Ishmaelites, Moab and the Hagrites, Gebal and Ammon and Amalek, Philistia with the inhabitants of Tyre; Asshur also has joined them; they are the strong arm of the children of Lot.\" Ten nations in covenant against Israel. The phrase &ldquo;with one accord&rdquo; emphasizes the unity of purpose; this is a coordinated coalition, not independent hostility. &ldquo;Against you they make a covenant&rdquo;&mdash;the conspiracy is ultimately aimed at God himself, not merely Israel. Geographically, Israel is surrounded: south, east, north, west. Humanly, there is no exit. The catalogue of names has a liturgical function: naming the threat before God as a form of pleading." },
              { v: "9-10", ref: "Prayer Modeled on Gideon and Deborah", color: GOLD, text: "\"Do to them as you did to Midian, as to Sisera and Jabin at the river Kishon, who were destroyed at En-dor, who became dung for the ground.\" The imprecatory prayer begins by invoking historical precedents. Midian (Gideon, Judges 6&ndash;8) and Sisera&rsquo;s coalition (Deborah and Barak, Judges 4&ndash;5) are the two paradigm victories of the Judges period. In both, Israel was hopeless by human calculation; in both, God intervened with supernatural power. &ldquo;Destroyed at En-dor&rdquo; may refer to the location of the Kishon battle. &ldquo;Became dung for the ground&rdquo; is graphically harsh&mdash;the bodies of the enemy left unburied became fertilizer. This is the ultimate humiliation in the ancient Near East." },
              { v: "11-12", ref: "Named Commanders Defeated", color: ROSE, text: "\"Make their nobles like Oreb and Zeeb, all their princes like Zebah and Zalmunna, who said, &lsquo;Let us take possession for ourselves of the pastures of God.&rsquo;\" Oreb and Zeeb were Midianite commanders captured and killed (Judges 7:25); Zebah and Zalmunna were the Midianite kings executed by Gideon (Judges 8:21). Their stated ambition (&ldquo;let us take possession of the pastures of God&rdquo;) reveals the cosmic dimension: they were not merely after land but after what belongs to God. This is the logic of all anti-Israel aggression in the Bible: the land is YHWH&rsquo;s inheritance, and to attack it is to attack him. The prayer for their leaders to meet the same fate as Oreb and Zebah is prayer for God to replicate his past judgment." },
              { v: "13-15", ref: "Images of Total Destruction", color: ROSE, text: "\"O my God, make them like whirling dust, like chaff before the wind. As fire consumes the forest, as the flame sets the mountains ablaze, so may you pursue them with your tempest and terrify them with your hurricane!\" Three intensifying images of divine destruction: whirling dust (completely lightweight, entirely at wind&rsquo;s mercy), forest fire (all-consuming, irreversible), and hurricane (the storm of divine wrath). All three are natural forces magnified to divine scale. The psalmist is not prescribing a human military strategy; he is asking God to deploy his own instruments. Charles Spurgeon: &ldquo;The psalmist uses the imagery of nature because God is master of nature and because the language of storm and fire alone approaches the scale of what he is requesting.&rdquo;" },
              { v: "16", ref: "Shame That Leads to Seeking God", color: TEAL, text: "\"Fill their faces with shame, that they may seek your name, O LORD.\" The first statement of the prayer&rsquo;s purpose. The shame is not punitive only; it is potentially salvific. The enemies&rsquo; defeat, humiliation, and shame is intended to drive them toward seeking the very name of the God they opposed. This is a remarkable clause: even in the midst of the harshest imprecatory language, the psalmist leaves open the possibility of the enemies&rsquo; conversion. The defeat is a mercy if it produces seeking. Tremper Longman III notes this as the missionary heart embedded in even the fiercest lament." },
              { v: "17", ref: "Dismay and Perishing", color: ROSE, text: "\"Let them be put to shame and dismayed forever; let them perish in disgrace.\" Verse 17 presents the alternative to verse 16&rsquo;s seeking: if they do not seek God&rsquo;s name, let them perish in disgrace. The two verses together present the two possible outcomes for the enemies: conversion through shame (v. 16) or permanent destruction (v. 17). This reflects the biblical pattern of divine judgment as the final alternative when mercy is refused. The eternal dimension (&ldquo;forever&rdquo;) suggests this is not merely a prayer for a historical battle but for ultimate eschatological resolution." },
              { v: "18", ref: "The Doxological Climax: God Alone is Most High", color: GREEN, text: "\"Let them know that you alone, whose name is the LORD, are the Most High over all the earth.\" The psalm&rsquo;s final verse is both the conclusion and the climax. Everything that preceded it&mdash;the appeal, the indictment of the coalition, the imprecatory prayers&mdash;was in service of this ultimate purpose: that all nations, through whatever means necessary, would come to know that YHWH alone is the Most High over all the earth. The word &ldquo;alone&rdquo; (the Hebrew emphatic) undercuts every competing claim: the gods of the nations, the power of Assyria, the military superiority of the coalition. None of them is Most High; YHWH alone holds that title. This is the final word of the Asaph collection, and it is a word of uncompromised monotheism and universal sovereignty." },
            ].map((item) => (
              <div key={item.v} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ background: item.color, color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: 13, fontWeight: 700, minWidth: 36, textAlign: "center", flexShrink: 0 }}>
                    {item.v}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: item.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>{item.ref}</div>
                    <p style={{ color: TEXT, lineHeight: 1.8, margin: 0, fontSize: 15 }}
                      dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* -- APPLICATION -- */}
        {activeTab === "Application" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h2 style={{ color: ROSE, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Living Psalm 83 Today</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 83 gives language to communities who face what appears to be total encirclement&mdash;no human help, no escape, no ally. It also provides the correct goal for even the harshest prayer: not revenge, not nationalist triumph, but the global acknowledgment that the LORD alone is the Most High." }} />
            </div>

            {[
              {
                color: ROSE,
                title: "1. Pray Against Injustice Without Seeking Personal Revenge",
                body: `The imprecatory psalms, including Psalm 83, offer a discipline that the contemporary church often neglects: the practice of bringing our anger at injustice to God rather than acting on it ourselves. The psalmist does not take up arms against the ten-nation coalition; he prays. "Do to them as you did to Midian." The action is God's; the prayer is the psalmist's.

Romans 12:19 is not a repudiation of the imprecatory psalms; it is their NT counterpart: "Beloved, never avenge yourselves, but leave it to the wrath of God, for it is written, 'Vengeance is mine, I will repay, says the Lord.'" The imprecatory psalms model exactly this: anger that is real and fully expressed, but expressed to the Judge who alone can execute it justly. This is psychologically healthy and theologically sound.

Practically: when you experience genuine injustice&mdash;when you are lied about, when the wicked prosper at your expense, when systems fail the vulnerable&mdash;resist two temptations: the temptation to act in revenge and the temptation to suppress the anger entirely. Instead, bring it to God in the language of the imprecatory psalms. "Do not keep silence, O God." "Fill their faces with shame." "Let them know that you alone are the Most High." This is what Jesus modeled: "He committed no sin, neither was deceit found in his mouth. When he was reviled, he did not revile in return; when he suffered, he did not threaten, but continued entrusting himself to him who judges justly" (1 Peter 2:22&ndash;23).`,
                prayer: "Lord God, I bring to you the injustice of [specific situation]. I am angry, and I am tempted to act in revenge. I choose instead to entrust this to you, the righteous Judge. Do not keep silence. Act in your time and your way.",
              },
              {
                color: TEAL,
                title: "2. Look to Historical Precedents to Build Faith for Prayer",
                body: `Psalm 83's prayer is not generic&mdash;it is specific. "Do to them as you did to Midian, as to Sisera and Jabin at the river Kishon." The psalmist knows his history, and that history becomes the vocabulary of his faith. He can ask for specific things because he knows what God has done before.

This is why the spiritual discipline of studying biblical history is not merely academic but deeply devotional. When you know that God parted the Red Sea, you can pray for impossible deliverances. When you know that God fed Elijah in the wilderness when he was suicidal and ready to die (1 Kings 19:4&ndash;8), you can pray for supernatural sustenance in your own exhaustion. When you know the cross&mdash;the moment that looked most like defeat but was in fact the decisive victory over sin and death&mdash;you can pray in the darkest circumstances with genuine hope.

Build your memory of God's past acts as a resource for prayer. Keep a journal of answered prayers. Read biblical history not as distant narrative but as precedent. The God who did it then is the same God you are addressing now. The psalmists model this constantly: "You who did great things in Egypt... You who split the Red Sea in two... Do it again."`,
                prayer: "Lord, remind me of what you have done: the Red Sea, the manna, the resurrection. Let your past faithfulness be the ground of my present confidence. Do again what you have done before.",
              },
              {
                color: GOLD,
                title: "3. Pray for Enemies with the Goal of Their Conversion",
                body: `Verse 16 is the most important verse in Psalm 83 for the Christian reader: "Fill their faces with shame, that they may seek your name, O LORD." The imprecatory prayer, at its best, hopes for the enemy's conversion. The shame is not punitive satisfaction but merciful instrument&mdash;if the defeat drives the enemies to seek God's name, the defeat was ultimately an act of grace toward them.

Jesus commanded this precisely: "Love your enemies and pray for those who persecute you" (Matthew 5:44). This does not mean praying that your enemies succeed in their evil plans; it means praying for their ultimate good, which may require their plans to fail spectacularly. Paul's missionary prayers regularly included prayers that obstacles to the gospel be removed, that those who opposed the work of God would be stopped (2 Timothy 4:14&ndash;15). These are not un-Christian prayers; they are prayers for God's kingdom to come over the opposition of the enemy.

The specific practice: when you pray against injustice or opposition, include verse 16's hope. "Let this fail&mdash;and let the failure drive them to seek your name." This prevents the imprecatory prayer from degenerating into naked desire for punishment and keeps it anchored in God's ultimate purpose: that all nations know the Most High. Some of God's greatest missionaries were his former enemies: Paul (persecutor become apostle), Augustine (pagan hedonist become church father), and countless others whose opposition was shattered and became the instrument of their seeking.`,
                prayer: "Lord, I pray against [specific opposition or injustice]. But beyond its failure, I pray for the conversion of those who oppose your people and your purposes. Let the shame of their defeat drive them to seek your name.",
              },
              {
                color: GREEN,
                title: "4. Live Between the Conspiracy and the Doxology",
                body: `The final verse of Psalm 83&mdash;and the final verse of the entire Asaph collection (Psalms 73&ndash;83)&mdash;is a declaration of faith about the future: "You alone, whose name is the LORD, are the Most High over all the earth." The present reality is ten nations in conspiracy; the ultimate reality is God's universal sovereignty. The psalm teaches us to live between those two realities without collapsing into either.

Collapsing into the conspiracy (the ten nations) without the doxology produces despair: the enemies are too many, the situation too hopeless, God too silent. Collapsing into the doxology without the conspiracy produces escapism: refusing to name the real danger, pretending the threat is not real, offering spiritual cliches where honest lament is needed.

The Christian life navigates between these. We are "afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed" (2 Corinthians 4:8&ndash;9). The Asaph collection's arc&mdash;from the vertiginous doubt of Psalm 73 to the bold doxology of Psalm 83:18&mdash;is the arc of mature faith. We begin by questioning why the wicked prosper; we end by declaring that the LORD alone is Most High over all the earth. The journey between those two points is the spiritual life.

Psalm 83 closes the Asaph collection without recording God's answer. The enemies are still named; the conspiracy is still described; the prayer is still going up. But the psalm ends with the declaration that the one to whom the prayer is addressed is the Most High over all the earth&mdash;and that declaration is itself the answer.`,
                prayer: "LORD, you alone are the Most High over all the earth. I name before you the conspiracies and threats I see around me. I refuse despair and I refuse false comfort. I choose to live in the tension of honest lament and doxological faith, trusting that you alone are Most High.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
                <div style={{ color: item.color, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Application</div>
                <h3 style={{ color: TEXT, fontSize: 19, fontWeight: 700, margin: "0 0 14px" }}>{item.title}</h3>
                {item.body.split("\n\n").map((p, i) => (
                  <p key={i} style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 14px" }}
                    dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                <div style={{ background: BG, border: `1px solid ${item.color}33`, borderRadius: 8, padding: "14px 18px", marginTop: 8 }}>
                  <div style={{ color: item.color, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Prayer</div>
                  <p style={{ color: MUTED, fontStyle: "italic", margin: 0, lineHeight: 1.7, fontSize: 14 }}
                    dangerouslySetInnerHTML={{ __html: item.prayer }} />
                </div>
              </div>
            ))}

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px", textAlign: "center" }}>
              <p style={{ color: MUTED, fontStyle: "italic", fontSize: 15, margin: 0, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Let them know that you alone, whose name is the LORD, are the Most High over all the earth.&rdquo;<br/>Psalm 83:18" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
