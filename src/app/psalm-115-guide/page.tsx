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

export default function Psalm115Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #1a100a 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: GOLD }}>Psalms</span>
            <span style={{ color: BORDER }}>{" > "}</span>
            Book V
            <span style={{ color: BORDER }}>{" > "}</span>
            Egyptian Hallel (113-118)
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2 }}>
            Psalm 115 &mdash; Not to Us, O LORD, Not to Us
          </h1>
          <p style={{ color: MUTED, fontSize: 17, margin: "0 0 20px", lineHeight: 1.6 }}>
            The great anti-idolatry psalm &mdash; the futility of dumb idols versus the living God who does whatever he pleases
          </p>
          <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0, color: TEXT, fontStyle: "italic", fontSize: 15 }}>
            &ldquo;Not to us, O LORD, not to us, but to your name give glory, for the sake of your steadfast love and your faithfulness!&rdquo; &mdash; Psalm 115:1
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
                color: activeTab === tab ? GOLD : MUTED,
                borderBottom: activeTab === tab ? `2px solid ${GOLD}` : "2px solid transparent",
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
              <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Overview</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 115 opens the second half of the Egyptian Hallel (Psalms 115-118) and is one of the most theologically comprehensive psalms in Book V. It moves through three distinct movements: a doxological declaration (vv. 1-2), a satire of idols contrasted with the living God (vv. 3-8), and a liturgical blessing of Israel and her priests with a concluding Hallel (vv. 9-18). This structure makes it simultaneously an act of worship, an apologetic against idolatry, and a priestly blessing ceremony." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The opening petition is one of the most humble and God-centered prayers in Scripture: &ldquo;Not to us, O LORD, not to us, but to your name give glory, for the sake of your steadfast love and your faithfulness!&rdquo; The double negation (&ldquo;not to us... not to us&rdquo;) reflects the psalm's likely liturgical origin in a moment of national crisis where Israel appeared weak before the nations. The nations taunted: &ldquo;Where is their God?&rdquo; (v. 2). The response is not defensive boasting but a redirection of all glory to God's own name, grounded in his two great covenant attributes: steadfast love (hesed) and faithfulness (emet)." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The idol satire in verses 4-8 is devastating in its precision. The idols have the sensory equipment of living beings but cannot use them: mouths that cannot speak, eyes that cannot see, ears that cannot hear, noses that cannot smell, hands that cannot feel, feet that cannot walk, throats that make no sound. Then comes the most chilling verse in the section: &ldquo;Those who make them become like them; so do all who trust in them&rdquo; (v. 8). This is the ultimate danger of idolatry&mdash;not merely worshipping something false but becoming conformed to its image. Worshippers become like their gods." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Over against the dead idols, the psalm contrasts the living God: &ldquo;Our God is in the heavens; he does all that he pleases&rdquo; (v. 3). Six words that contain the entire philosophy of divine sovereignty: God is transcendent (in the heavens), and God is free (does all that he pleases). The idols are constrained by their materials, immovable, speechless, dependent on their makers. YHWH is limited by nothing, constrained by nothing, dependent on no one. He does whatever he pleases." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The blessing section (vv. 9-15) follows a liturgical pattern, possibly antiphonal: a leader calls each group to trust in the LORD, and the congregation responds with the assurance that &ldquo;he is their help and their shield.&rdquo; Three groups are addressed: Israel, the house of Aaron (priests), and those who fear the LORD (proselytes or all worshippers). The threefold blessing echoes the Aaronic blessing of Numbers 6:24-26 and reinforces the covenant structure of Israel's worship." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm's conclusion (vv. 16-18) makes a striking statement about the distribution of creation: &ldquo;The heavens are the LORD's heavens, but the earth he has given to the children of man.&rdquo; This is not a declaration of human autonomy but of divine generosity. God sovereignly occupies the heavens; he has entrusted the earth to human stewardship. The closing verses are a vow to praise God &ldquo;from this time forth and forevermore,&rdquo; and the psalm closes as the Hallel opened -- with Hallelu-Yah." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: GOLD, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Key Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  ["Collection", "Egyptian Hallel -- sung after Passover meal"],
                  ["Type", "Doxology, Satire, Blessing Liturgy"],
                  ["Accent Color", "Gold -- God's glory, not ours"],
                  ["Key Verse", "\"Not to us... but to your name give glory\" (v. 1)"],
                  ["NT Echo", "Romans 1:23 -- idol worship / image exchange"],
                  ["Key Danger", "Those who make idols become like them (v. 8)"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: GOLD, fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>The Idol Satire: What Idols Cannot Do</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
                {[
                  { organ: "Mouths", lack: "Do not speak", irony: "Their makers speak for them" },
                  { organ: "Eyes", lack: "Do not see", irony: "Yet Israel trusted their 'vision'" },
                  { organ: "Ears", lack: "Do not hear", irony: "Yet prayers were addressed to them" },
                  { organ: "Noses", lack: "Do not smell", irony: "Yet incense was burned for them" },
                  { organ: "Hands", lack: "Do not feel", irony: "Yet gifts were placed in them" },
                  { organ: "Feet", lack: "Do not walk", irony: "Yet carried in processions" },
                ].map((row) => (
                  <div key={row.organ} style={{ background: BG, borderRadius: 8, padding: "10px 12px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: GOLD, fontSize: 13, fontWeight: 700 }}>{row.organ}</div>
                    <div style={{ color: ROSE, fontSize: 12 }}>{row.lack}</div>
                    <div style={{ color: MUTED, fontSize: 11, marginTop: 2 }}>{row.irony}</div>
                  </div>
                ))}
              </div>
            </div>

            <VideoEmbed videoId="EjO7PkK8PsE" title="Psalm 115 -- Not to Us O Lord" />
          </div>
        )}

        {/* -- THEMES -- */}
        {activeTab === "Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                color: GOLD,
                title: "Soli Deo Gloria: Not to Us But to Your Name",
                refs: "Psalm 115:1-2; Isaiah 42:8; 48:11; John 17:4; 1 Corinthians 10:31",
                body: `"Not to us, O LORD, not to us, but to your name give glory, for the sake of your steadfast love and your faithfulness!" This opening petition is one of the most exquisitely crafted prayers in the Psalter. The double negation ("not to us...not to us") is emphatic and deliberate: whatever is happening, the glory must not accrue to Israel. The redirection of glory to God's name is the substance of the Reformation's Soli Deo Gloria ("glory to God alone") -- and it is anchored in God's own character, specifically in his hesed (steadfast love) and emet (faithfulness).

The context appears to be national humiliation -- the nations are asking "Where is their God?" (v. 2), suggesting that Israel's circumstances are causing Gentile mockery of YHWH. But the psalmist's response is remarkable: he does not defend Israel's reputation; he asks God to defend his own name. The concern is not "restore our dignity" but "glorify your name." This is the posture of mature faith: to be more concerned with God's reputation than one's own.

Isaiah twice states God's own motivation: "I am the LORD; that is my name; my glory I give to no other, nor my praise to carved idols" (42:8). "For my own sake, for my own sake, I do it, for how should my name be profaned?" (48:11). God himself is committed to his own glory not as vanity but as the ontological truth that the infinite Being is the proper end of all things. Jesus prays "I glorified you on earth, having accomplished the work that you gave me to do" (John 17:4). Paul commands: "Whether you eat or drink, or whatever you do, do all to the glory of God" (1 Cor. 10:31).

Psalm 115:1 is thus not merely a petition but a theology of motivation: the reason for all action, all prayer, all service is that God's name be glorified. Not our name, not our church's reputation, not our ministry brand. "Not to us, not to us -- to your name."`,
              },
              {
                color: ROSE,
                title: "The Living God Versus Dead Idols",
                refs: "Psalm 115:3-8; Isaiah 44:9-20; Romans 1:21-23; Habakkuk 2:19",
                body: `The contrast between "our God" (v. 3) and "their idols" (v. 4) is the theological heart of Psalm 115. The contrast is total: God is in the heavens, does whatever he pleases, is free and sovereign; the idols are made of silver and gold, fashioned by human hands, and have every organ needed for life but are unable to use any of them.

The idol satire is one of the most common and powerful rhetorical strategies in the OT. Isaiah 44:9-20 develops it at length: the craftsman cuts down a tree, uses half to warm himself and cook food, then with the other half makes a god and falls down before it and says "Deliver me, for you are my god!" The absurdity is total. Habakkuk 2:19 cries: "Woe to him who says to a wooden thing, Awake; to a silent stone, Arise! Can this teach?" The idol cannot teach, hear, respond, or help.

But the most devastating critique in Psalm 115 is verse 8: "Those who make them become like them; so do all who trust in them." This is the psychological and spiritual logic of idolatry. You become like what you worship. If you worship something dead -- a stock portfolio, a sexual image, a political ideology, an entertainment franchise -- you become progressively less alive in the ways that matter. Your capacity for wonder, for genuine love, for truth-telling, for God-awareness atrophies.

Romans 1:21-23 describes the inverse process: "For although they knew God, they did not honor him as God or give thanks to him, but they became futile in their thinking, and their foolish hearts were darkened. Claiming to be wise, they became fools, and exchanged the glory of the immortal God for images resembling mortal man and birds and animals and creeping things." The exchange of the living God for idols produces darkness in the mind and futility in the heart. Conversely, to worship the living God is to become more fully human, more fully alive -- conformed to his image.`,
              },
              {
                color: TEAL,
                title: "God Does Whatever He Pleases: Divine Sovereignty",
                refs: "Psalm 115:3; Psalm 135:6; Daniel 4:35; Ephesians 1:11; Romans 11:33-36",
                body: `"Our God is in the heavens; he does all that he pleases" (v. 3). These six words contain one of the most comprehensive statements of divine sovereignty in the entire Psalter. God does "all" -- not most, not some -- that he "pleases" -- not what circumstances allow, not what human choices permit. His will is the only constraint on his action.

Psalm 135:6 echoes identically: "Whatever the LORD pleases, he does, in heaven and on earth, in the seas and all deeps." Daniel 4:35 puts it even more absolutely: "He does according to his will among the host of heaven and among the inhabitants of the earth; and none can stay his hand or say to him, 'What have you done?'" Paul in Ephesians 1:11 describes God as "working all things according to the counsel of his will." Romans 11:33-36 closes with: "For who has known the mind of the Lord, or who has been his counselor? Or who has given a gift to him that he might be repaid? For from him and through him and to him are all things."

The practical import of this sovereignty is enormous for prayer and for suffering. When Psalm 115:3 says God does whatever he pleases, it demolishes the anxiety that God might be surprised, outmaneuvered, or prevented from acting in our lives. The idols of verse 4-7 are constrained by their materials; they can only do what silver and gold can do. But YHWH is constrained by nothing. He can speak -- and creation comes into being. He can part a sea -- and Israel walks through on dry ground. He can make a barren woman a joyful mother. He can raise the dead.

This is not a cold philosophical assertion but the foundation of trust. Charles Spurgeon: "Whenever you begin to fear that God cannot do what you need, return to verse 3: 'Our God is in the heavens; he does all that he pleases.' Nothing is impossible for a God who is entirely free and entirely powerful."`,
              },
              {
                color: PURPLE,
                title: "You Become What You Worship",
                refs: "Psalm 115:8; Romans 8:29; 2 Corinthians 3:18; Colossians 3:10",
                body: `Verse 8 is one of the most psychologically penetrating observations in Scripture: "Those who make them become like them; so do all who trust in them." Idolatry is not merely error; it is formation. You are shaped by what you worship, conformed to the image of what you trust. The idol-maker who pours his love and attention into a speechless silver image begins to develop, over time, the idol's attributes: silence, deadness, inability to respond to reality.

This is the dark side of the image-of-God theology. Humans are designed to reflect whatever they are oriented toward. If we are oriented toward the living God, we are renewed in his image -- growing in love, wisdom, creativity, and life (Colossians 3:10; 2 Corinthians 3:18). If we are oriented toward dead things, we are conformed to their image -- growing in lovelessness, foolishness, sterility, and spiritual death.

The NT positive formulation makes this transformative dynamic explicit. Romans 8:29: "those whom he foreknew he also predestined to be conformed to the image of his Son." The goal of salvation is not merely rescue from punishment but positive transformation into the likeness of Christ. 2 Corinthians 3:18: "And we all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another." The mechanism is worship: we behold, and we become.

This is why Psalm 115 presents the choice between the living God and dead idols not merely as a theological but as an anthropological issue. The question of what you worship is the question of what you are becoming. Worship the idol, become the idol: speechless, sightless, unresponsive, dead. Worship the living God, become more alive: more responsive to reality, more capable of love, more genuinely human. The psalmist does not leave the point theoretical; he turns immediately to "O Israel, trust in the LORD! He is their help and their shield" (v. 9). Trust is the activated form of worship.`,
              },
              {
                color: GREEN,
                title: "Blessed by God Who Made Heaven and Earth",
                refs: "Psalm 115:12-16; Genesis 1:28; Numbers 6:24-26; Ephesians 1:3",
                body: `The blessing section of Psalm 115 (vv. 12-16) is liturgically rich, echoing the Aaronic blessing of Numbers 6:24-26. Three groups receive blessing: Israel, the house of Aaron, and those who fear the LORD -- covering the whole covenant community, both hereditary members and those who have joined by faith. The repetition creates a litanic pattern: "He will bless... he will bless... he will bless" -- the blessing is assured and abundant.

The blessing comes from the one "who made heaven and earth" (v. 15) -- a creation formula that anchors the blessing in the Creator's unlimited capacity. The God who blessed cannot run out of blessings; the God who made heaven and earth has inexhaustible resources. This is the NT foundation for Paul's declaration in Ephesians 1:3: "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places."

The phrase "both small and great" (v. 13) is inclusive: the blessing is not proportioned to social rank or religious accomplishment. God's blessing reaches both the priest and the poorest member of the congregation, both the elder and the child. This democratic generosity of grace is one of the consistent characteristics of God's covenant dealing.

Verse 16 adds an important clarification: "The heavens are the LORD's heavens, but the earth he has given to the children of man." This is not a dualistic division of spiritual versus material; it is a statement about stewardship. God is sovereign over all, but he has graciously entrusted the earth to human care. This is the foundation of the creation mandate (Genesis 1:28) and the basis for Christian engagement with earthly life -- we are blessed and entrusted, not abandoned in a God-forsaken material world.`,
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
              <h2 style={{ color: GOLD, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Psalm 115 -- 18 verses: doxology, satire, blessing liturgy, vow of praise</p>
            </div>
            {[
              { v: "1-2", ref: "Not to Us: Prayer for God's Glory", color: GOLD, text: "\"Not to us, O LORD, not to us, but to your name give glory, for the sake of your steadfast love and your faithfulness! Why should the nations say, 'Where is their God?'\" The double negation is emphatic and liturgically structured for corporate recitation. The redirection of glory to God's name is grounded in his two covenant attributes: steadfast love (hesed) and faithfulness (emet) -- the attributes proclaimed in Exodus 34:6. The nations' taunt (&ldquo;Where is their God?&rdquo;) implies that Israel's distress has given occasion for mockery of YHWH himself. The response is not vindication of Israel but glorification of God. Calvin: &ldquo;This prayer is the most God-centered request that can be made -- not 'restore us' but 'glorify your name.'&rdquo;" },
              { v: "3", ref: "Our God Is in the Heavens", color: GOLD, text: "\"Our God is in the heavens; he does all that he pleases.\" The counter-assertion to the nations' taunt. Their god is in their midst -- tangible, present, visible; our God is in the heavens -- transcendent, sovereign, free. But the transcendence is not absence; it is freedom. The phrase &ldquo;does all that he pleases&rdquo; asserts absolute divine sovereignty. No circumstance, no power, no human decision limits what God can do. This is the direct contradiction of the idols: they cannot do anything, because they have no will; God can do everything, because his will is omnipotent. Spurgeon: &ldquo;Let the nations say where is your God? We answer: he is where he pleases to be, doing what he pleases to do, and nothing can prevent him.&rdquo;" },
              { v: "4-7", ref: "The Idol Satire: Silver, Gold, and Silence", color: ROSE, text: "\"Their idols are silver and gold, the work of human hands. They have mouths, but do not speak; eyes, but do not see. They have ears, but do not hear; noses, but do not smell. They have hands, but do not feel; feet, but do not walk; and they do not make a sound in their throat.\" The list is methodical and devastating. The idols are constructed of valuable materials -- silver and gold -- yet are made by &ldquo;human hands,&rdquo; making them dependent on their creators. The list of sense organs (mouth, eyes, ears, nose, hands, feet, throat) covers the full sensory range of a living being -- but each organ is rendered null. The idol has the form of life without its function. Isaiah 44:18 makes the same critique: &ldquo;They know not, nor do they discern, for he has shut their eyes, so that they cannot see, and their hearts, so that they cannot understand.&rdquo;" },
              { v: "8", ref: "You Become What You Worship", color: ROSE, text: "\"Those who make them become like them; so do all who trust in them.\" The most penetrating verse in the psalm. Not merely wrong but formative: idolatry conforms the worshipper to the idol's image. The one who trusts in something speechless will lose the capacity for meaningful speech. The one who trusts in something blind will lose spiritual perception. The one who trusts in something immovable will become spiritually paralyzed. This is the anthropological cost of idolatry -- the progressive dehumanization of those who devote themselves to what is less than human. It explains why entire cultures that develop elaborate idolatry exhibit, over time, the deadening effects that Paul describes in Romans 1:21-32." },
              { v: "9-11", ref: "Trust in the LORD: The Threefold Call", color: TEAL, text: "\"O Israel, trust in the LORD! He is their help and their shield. O house of Aaron, trust in the LORD! He is their help and their shield. You who fear the LORD, trust in the LORD! He is their help and their shield.\" After the idol satire, the positive call comes in liturgical triplicate. Three groups: Israel (the covenant nation), the house of Aaron (the priestly class), those who fear the LORD (including Gentile proselytes and all worshippers). The refrain &ldquo;he is their help and their shield&rdquo; is the covenant assurance. &ldquo;Help&rdquo; implies active assistance in time of need; &ldquo;shield&rdquo; implies protective defense from attack. Together they cover the full spectrum of human vulnerability. Matthew Henry: &ldquo;Both our offensive and defensive needs are met in God.&rdquo;" },
              { v: "12-15", ref: "The Threefold Blessing", color: GREEN, text: "\"The LORD has remembered us; he will bless us; he will bless the house of Israel; he will bless the house of Aaron; he will bless those who fear the LORD, both the small and the great.\" The blessing echoes the Aaronic blessing (Numbers 6:24-26) and Israel's covenant promises. &ldquo;He will bless&rdquo; appears four times -- the emphasis is on the certainty and abundance of the blessing. &ldquo;Both the small and the great&rdquo; is inclusively democratic: the blessing is not proportioned to rank or status. Verse 14 expands: &ldquo;May the LORD give you increase, you and your children!&rdquo; -- the blessing is generational, flowing from present generation to the next. Verse 15: &ldquo;May you be blessed by the LORD, who made heaven and earth!&rdquo; The Creator's unlimited resources guarantee the blessing." },
              { v: "16-18", ref: "The Earth Given to Man; Vow of Praise", color: GOLD, text: "\"The heavens are the LORD's heavens, but the earth he has given to the children of man. The dead do not praise the LORD, nor do any who go down into silence. But we will bless the LORD from this time forth and forevermore. Praise the LORD!\" The cosmic distribution: God owns the heavens; he has entrusted the earth to humanity. This undergirds both creation care and active engagement with earthly life. Verses 17-18 provide the rationale for praise: the dead cannot praise, but the living can and must. Therefore, NOW -- &ldquo;from this time forth and forevermore&rdquo; -- is the time to praise. The closing Hallelu-Yah closes the inclusion with the Hallel's opening call, completing the liturgical frame. Kidner: &ldquo;The argument is simple: while we live, we praise; when we die, that opportunity is gone. The urgency of praise is the urgency of life itself.&rdquo;" },
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
              <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Living Psalm 115 Today</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 115 confronts us with the two alternatives that face every human being: the living God who does whatever he pleases, or the dead idols fashioned by human hands. It also warns us that the choice of what to worship is the choice of what to become. And it grounds everything in the conviction that God's glory -- not ours -- is the proper goal of all existence." }} />
            </div>

            {[
              {
                color: GOLD,
                title: "1. Give God the Glory He Is Due",
                body: `The prayer of verse 1 -- "Not to us, O LORD, not to us, but to your name give glory" -- is one of the most important prayers a person can learn to pray sincerely. It is also one of the most counter-cultural. The entire architecture of modern life is built around personal glory: personal brands, social media followings, career achievements, reputation management. The double negation of Psalm 115:1 cuts against all of this with surgical precision.

This prayer has a special application for Christian ministry. When God uses us to help someone, to preach effectively, to serve with impact, the temptation is immediate: to take some of the credit, to accept the praise, to build a platform on God's work. Psalm 115:1 pre-empts this with its double negation. The glory belongs to God's name, grounded in his hesed and emet -- the covenant attributes that are entirely his.

Practically: begin your day with this prayer. Before you check your phone, before you plan your schedule, before you put on your professional identity, say these words: "Not to me, O LORD, not to me, but to your name give glory." Let it be the orienting sentence of the day. Then, at the end of the day, ask: where did I take back the glory? Where did I redirect praise to myself? Confess it. Return the glory where it belongs.`,
                prayer: "Not to me, O LORD, not to me -- but to your name give glory. Let everything I do today be oriented toward your reputation, not mine. Strip me of the desire for human praise. Fill me with the desire to see your name honored.",
              },
              {
                color: ROSE,
                title: "2. Identify and Repent of Modern Idolatry",
                body: `The idol satire of Psalm 115 is often dismissed as a critique of primitive ancient religion with no application to sophisticated modern life. This is exactly wrong. The functional definition of an idol is anything you trust for ultimate help and security that is not God. By this definition, modern people are as idol-addled as any ancient culture.

Timothy Keller has noted that the most powerful idols are not bizarre fetishes but good things elevated to ultimate things: career success (a mouth that can speak for you), financial security (a hand that can provide for you), a romantic relationship (a heart that can complete you), health (a body that will never fail you). These are not wrong in themselves; they become idols when they occupy the place that only God can fill.

The warning of verse 8 is the key: "Those who make them become like them." Ask yourself: what are you becoming conformed to? If your life is organized around career advancement, are you becoming more compassionate -- or more like a silver idol that has eyes for metrics alone? If your security is financial, are you becoming more generous -- or more like a gold idol that hoards and cannot speak life to the poor? The idol diagnostic is not just "what do I worship?" but "what am I becoming?"`,
                prayer: "Lord, expose my idols. Show me where I have placed my ultimate trust in things that cannot speak, see, or help. I repent of [specific idol]. You alone are my help and my shield.",
              },
              {
                color: TEAL,
                title: "3. Trust the God Who Does Whatever He Pleases",
                body: `Verse 3 is the antidote to anxiety: "Our God is in the heavens; he does all that he pleases." Anxiety is rooted in the fear that circumstances are out of control -- that the sea is uncrossable, the enemy too strong, the diagnosis too dire. Psalm 115:3 is not a prescription to ignore reality but to view reality in the light of the one who governs it.

The nations mock: "Where is their God?" (v. 2). The answer is: in the heavens, doing whatever he pleases -- which includes, for those who trust him, working all things together for good (Romans 8:28). The God who "does whatever he pleases" is pleased to bless those who trust him (vv. 12-13). He is pleased to be "their help and their shield" (vv. 9-11). He is pleased to give increase to them and their children (v. 14).

The practical application: when you face a situation that seems completely out of control, return to verse 3. Not as a formula to suppress worry, but as a theological reality to inhabit. The God who made heaven and earth and does all that he pleases is the God who has committed himself by covenant to be your help and your shield. The uncrossable sea is not beyond the God who made it flee. The impossible circumstance is not beyond the God who does whatever he pleases.`,
                prayer: "Lord, you are in the heavens. You do all that you please. I bring to you what seems out of control in my life: [specific situation]. I trust not in circumstances but in the one who governs them.",
              },
              {
                color: GREEN,
                title: "4. Praise While You Have the Breath to Do It",
                body: `Verses 17-18 make a striking argument for urgent praise: "The dead do not praise the LORD, nor do any who go down into silence. But we will bless the LORD from this time forth and forevermore. Praise the LORD!" The logic is simple: the opportunity to praise God belongs to the living, not the dead. Therefore, now -- while you have breath -- is the time to praise.

This is not morbid but motivating. The psalmist is not dwelling on death; he is insisting on the preciousness of life. Every moment you are alive is a moment you can praise the God who made heaven and earth and does all that he pleases. The opportunity is not permanent. Use it.

James 4:13-14 makes the same point about time: "Come now, you who say, 'Today or tomorrow we will go into such and such a town and spend a year there and trade and make a profit' -- yet you do not know what tomorrow will bring. What is your life? For you are a mist that appears for a little time and then vanishes." The mist has a window in which to praise. Psalm 115 closes by insisting that the window be used: "from this time forth and forevermore." Start now. Let the Hallelu-Yah that closes this psalm be the genuine response of a life that has seen the contrast between the dead idols and the living God and chosen to trust the living one.`,
                prayer: "Lord, while I have breath, I will bless your name. Not to me -- to you. I choose to praise you now, in this moment, with this life that you have given me. Hallelu-Yah.",
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
                dangerouslySetInnerHTML={{ __html: "&ldquo;Not to us, O LORD, not to us, but to your name give glory, for the sake of your steadfast love and your faithfulness!&rdquo;<br/>Psalm 115:1" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
