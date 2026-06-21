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

export default function Psalm81Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0d1220 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: PURPLE }}>Psalms</span>
            <span style={{ color: BORDER }}>{" > "}</span>
            Book III
            <span style={{ color: BORDER }}>{" > "}</span>
            Asaph Collection
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2 }}>
            Psalm 81 &mdash; Sing Aloud to God Our Strength
          </h1>
          <p style={{ color: MUTED, fontSize: 17, margin: "0 0 20px", lineHeight: 1.6 }}>
            A festal song turned covenant indictment &mdash; from Tabernacles worship to God&rsquo;s aching invitation
          </p>
          <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: 16, margin: 0, color: TEXT, fontStyle: "italic", fontSize: 15 }}>
            &ldquo;Oh, that my people would listen to me, that Israel would walk in my ways!&rdquo; &mdash; Psalm 81:13
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
                color: activeTab === tab ? PURPLE : MUTED,
                borderBottom: activeTab === tab ? `2px solid ${PURPLE}` : "2px solid transparent",
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
              <h2 style={{ color: PURPLE, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Overview</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 81 is one of the most dramatic psalms in the Psalter&mdash;a liturgical piece that pivots without warning from festive celebration to covenant lawsuit. It was almost certainly composed for use at one of Israel's major pilgrimage festivals, most likely the Feast of Tabernacles (Sukkoth) or possibly New Year (Rosh Hashanah), which coincided with the blowing of the trumpet in the seventh month (Leviticus 23:23&ndash;25). The opening verses are unmistakably festive: sing, shout, play instruments, blow the trumpet, celebrate." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "But in verse 5, something shifts. A prophetic voice&mdash;identified as God himself&mdash;breaks through the celebration. What follows is not more worship music but a divine speech recounting the Exodus, the testing at Meribah, and Israel's catastrophic failure to listen. The psalm bifurcates along these two axes: what God has done (Exodus, provision, protection) and what Israel refused to do (hear, walk, trust). Derek Kidner describes it as a psalm in which &ldquo;the mood changes as dramatically as a sudden storm.&rdquo;" }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The divine speech begins by recalling God's identity: &ldquo;I am the LORD your God, who brought you up out of the land of Egypt&rdquo; (v. 10)&mdash;the preamble of the Decalogue itself (Exodus 20:2). This is not accidental. The psalm's structure mirrors the covenant renewal genre, in which God reminds Israel of his saving acts, announces his commands, and calls for decision. The specific echo of the Ten Commandments' preamble reminds Israel that the same God who liberated them from Egypt is the God whose voice they have refused to hear." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The most theologically arresting section comes in verses 11&ndash;16. God describes a paradox of tragic permission: &ldquo;But my people did not listen to my voice; Israel would not submit to me. So I gave them over to their stubborn hearts, to follow their own counsels&rdquo; (vv. 11&ndash;12). This &ldquo;giving over&rdquo; is not abandonment but judicial hardening&mdash;a recurring pattern in Scripture (Romans 1:24, 26, 28) whereby God permits the consequences of persistent rejection to unfold. Israel wanted their own way; God permitted them to have it. This is a devastating judgment." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Then comes the pivot: not a further threat but a lament. &ldquo;Oh, that my people would listen to me, that Israel would walk in my ways! I would soon subdue their enemies and turn my hand against their foes&rdquo; (vv. 13&ndash;14). The language of divine longing here is remarkable. This is God expressing what might be called the unfulfilled potential of covenant: if only&mdash;had you listened&mdash;here is what could have been. John Calvin wrote of this verse: &ldquo;God grieves over Israel's stubbornness as a father grieves when a child refuses the gifts held out to him. The grief is real; the loss is theirs.&rdquo;" }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm ends with staggering promises: enemies subdued, finest wheat, honey from the rock (v. 16)&mdash;language of Edenic abundance. These would have been Israel's portion had they listened. Tragically, they chose otherwise. But the invitation remains open. The NT hears in these words an echo of Christ's own grief over Jerusalem: &ldquo;O Jerusalem, Jerusalem&hellip; how often would I have gathered your children together as a hen gathers her brood under her wings, and you were not willing&rdquo; (Matthew 23:37). The psalm becomes a window into the divine heart&mdash;a God who yearns for the responsiveness of his people and weeps over their refusal." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: PURPLE, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Key Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  ["Author", "Asaph (attributed)"],
                  ["Occasion", "Likely Feast of Tabernacles"],
                  ["Type", "Festival Hymn + Covenant Lawsuit"],
                  ["Accent Color", "Purple -- divine oracle"],
                  ["Key Verse", "\"Oh, that my people would listen\" (v. 13)"],
                  ["NT Echo", "Matthew 23:37 -- Christ's grief over Jerusalem"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: PURPLE, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Two-Part Structure</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: BG, borderRadius: 8, padding: "14px 16px", border: `1px solid ${BORDER}` }}>
                  <div style={{ color: PURPLE, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Part 1: Festive Call (vv. 1&ndash;5a)</div>
                  <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.6 }}>Sing aloud, shout, play the tambourine, lyre, harp. Blow the trumpet at the new moon. This is Israel's appointed feast, a statute for Joseph.</p>
                </div>
                <div style={{ background: BG, borderRadius: 8, padding: "14px 16px", border: `1px solid ${BORDER}` }}>
                  <div style={{ color: ROSE, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Part 2: Divine Oracle (vv. 5b&ndash;16)</div>
                  <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.6 }}>God speaks: Exodus remembered, Meribah tested, stubborn hearts given over, and the aching longing for Israel's return and promised blessing.</p>
                </div>
              </div>
            </div>

            <VideoEmbed videoId="mGJl2XBNRPQ" title="Psalm 81 Commentary" />
          </div>
        )}

        {/* -- THEMES -- */}
        {activeTab === "Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                color: PURPLE,
                title: "Worship as Commanded Response",
                refs: "Psalm 81:1-5; Leviticus 23:23-25; Hebrews 10:25",
                body: `The psalm's opening is a cascade of commands: sing, shout for joy, raise a song, sound the tambourine, the sweet lyre, the harp, the trumpet. This is not optional sentiment but commanded liturgy. Israel was not told "worship if you feel like it"; they were told "this is a statute for Israel, a rule of the God of Jacob" (v. 4). Worship at the feasts was covenant obligation.

This matters for understanding what worship is. In contemporary culture, worship is often understood as an expression of interior emotion&mdash;you worship when you feel worshipful. Psalm 81 reflects a different paradigm: worship is commanded because God's worthiness does not depend on our emotional state. The people are told to sing before the emotional experience arrives; the obedient act precedes and often produces the feeling.

The NT carries this pattern forward. Hebrews 10:25 commands the not "neglecting to meet together," treating corporate worship as a moral obligation, not a lifestyle preference. Paul commands "addressing one another in psalms and hymns and spiritual songs" (Ephesians 5:19). The commanded worship of Psalm 81 is not legalism; it is the appropriate response of creatures to their Creator, and it structures life around the rhythm of remembrance.

Derek Kidner notes that the specific mention of "the new moon," "the full moon," and "our feast day" places worship within the created rhythms of time. God has structured time with appointed moments of celebration&mdash;not to burden his people but to regularly interrupt ordinary life with the reminder of who they are and whom they serve.`,
              },
              {
                color: TEAL,
                title: "The Exodus as Covenant Foundation",
                refs: "Psalm 81:6-7, 10; Exodus 20:2; Deuteronomy 5:6; Romans 6:17-18",
                body: `In verses 6&ndash;7 and 10, God rehearses the foundational saving act: the Exodus from Egypt. "I relieved your shoulder of the burden; your hands were freed from the basket" (v. 6) is a direct reference to the slave labor of Egypt&mdash;making bricks, carrying loads. "In distress you called, and I delivered you; I answered you in the secret place of thunder" (v. 7) recalls the supernatural events of the plagues and the sea crossing.

This recitation serves a specific function: it grounds the following commands in grace. Notice the order in verse 10: "I am the LORD your God, who brought you up out of the land of Egypt. Open your mouth wide, and I will fill it." The indicative precedes the imperative. God states what he has done before he tells Israel what to do. This is the grammar of the Decalogue itself (Exodus 20:2): the preamble is grace; the commandments flow from grace.

Paul uses the same structure in Romans 6: "You who were once slaves of sin have become obedient from the heart to the standard of teaching to which you were committed, and, having been set free from sin, have become slaves of righteousness" (6:17&ndash;18). The indicative of freedom (freed from sin) grounds the imperative of obedience. Psalm 81 is not asking Israel to earn God's favor by obeying; it is calling them to live out what they already are&mdash;a redeemed people.

Tremper Longman III notes that the Meribah reference in verse 7 carries an ominous double note: God answered Israel's prayer at Meribah by providing water (Exodus 17), but he also "tested" them there. The Exodus was not merely a gift; it was a school. Israel was being shaped by the journey, not just delivered from Egypt.`,
              },
              {
                color: GOLD,
                title: "Stubborn Hearts and Divine Permission",
                refs: "Psalm 81:11-12; Romans 1:24-28; Acts 7:42; Hosea 4:17",
                body: `The most theologically sobering passage in Psalm 81 is the double "gave them over" in verses 11&ndash;12: "But my people did not listen to my voice; Israel would not submit to me. So I gave them over to their stubborn hearts, to follow their own counsels." This is not the language of indifference but of judicial action&mdash;God actively permits the consequences of persistent rejection.

This theme recurs in Scripture with alarming regularity. Acts 7:42: "But God turned away and gave them over to worship the host of heaven." Hosea 4:17: "Ephraim is joined to idols; leave him alone." Romans 1 uses the phrase three times: "God gave them up to dishonorable passions" (1:24, 26, 28). The pattern is always the same: humanity insists on worshipping the creature rather than the Creator, and God's judgment begins by allowing them precisely what they want.

This is what Matthew Henry called "the sore judgment of spiritual desertion." To be given over to one's own stubborn heart is a worse fate than many physical calamities, because it removes the very capacity for repentance. The boar may ravage the vineyard (Psalm 80:13); worse still is when the vine itself hardens into wood that bears no fruit.

But Psalm 81 presents this not as God's last word but as a description of what happens in the absence of listening. The very next verse pivots: "Oh, that my people would listen..." (v. 13). The door is still open. The "giving over" is not permanent consignment but a description of the current tragedy&mdash;and a warning about where this road leads. Calvin: "This giving over is not an act of cruelty but a withdrawal of preventing grace&mdash;God steps back and allows the sinner to see where his own heart leads him, in hope that the destination will produce repentance."`,
              },
              {
                color: ROSE,
                title: "God's Unfulfilled Longing",
                refs: "Psalm 81:13-16; Matthew 23:37; Luke 13:34; Isaiah 48:18",
                body: `The most emotionally intense verse in Psalm 81 is verse 13: "Oh, that my people would listen to me, that Israel would walk in my ways!" The phrase "oh that" (lu in Hebrew) expresses a wish that has not been fulfilled&mdash;a divine longing met with human refusal. This is a window into the heart of God that is as startling as any passage in Scripture.

God is not impassive. He does not observe Israel's rebellion with detached indifference. He longs for their responsiveness with something the Bible can only describe in language of parental grief. Isaiah 48:18 contains an exact parallel: "Oh that you had paid attention to my commandments! Then your peace would have been like a river, and your righteousness like the waves of the sea." The counterfactual ("if only you had") implies the tragedy of the actual.

Jesus employs exactly this language in Matthew 23:37: "O Jerusalem, Jerusalem, the city that kills the prophets and stones those who are sent to it! How often would I have gathered your children together as a hen gathers her brood under her wings, and you were not willing!" The divine "would have" colliding with human "were not willing" is the tragedy of Psalm 81 dramatized in the incarnation. The Son of God who gathered straying Israel under his wings was rejected by the very city he came to gather.

The counterpart of this longing is the promise in verses 14&ndash;16 of what obedience would have opened up: enemies subdued, foes turned against, finest wheat, honey from the rock. These images are Edenic in their abundance. The tragedy is not that God withheld blessing but that Israel refused the conditions under which blessing flows. The door to abundance was always unlocked; Israel simply would not walk through it. And yet&mdash;grace: the door remains open. The promise is present tense, not past.`,
              },
              {
                color: GREEN,
                title: "Open Your Mouth Wide: Praying for the Impossible",
                refs: "Psalm 81:10; Matthew 7:7-11; John 16:24; Ephesians 3:20",
                body: `Verse 10 contains one of the most astonishing promises in the Old Testament: "Open your mouth wide, and I will fill it." The image is drawn from feeding a baby bird or a nestling&mdash;the parent waits for the full, wide-open mouth and then fills it. God's promise here is not "ask for small things and I will provide"; it is "open as wide as you possibly can, and I will fill whatever you open."

This promise is set within the Exodus context: the God who multiplied manna in the wilderness, who brought water from the rock, who fed two million people for forty years in a land of no resources is the God who makes this promise. The invitation to open wide is proportioned to divine capacity, not human imagination. The question is not whether God can fill the open mouth but whether we will open wide enough.

Jesus extends this in Matthew 7:7&ndash;11 ("Ask, and it will be given to you") and John 16:24 ("Ask, and you will receive, that your joy may be full"). Paul's doxology in Ephesians 3:20 puts it most extravagantly: "[God] is able to do far more abundantly than all that we ask or think, according to the power at work within us." Whatever width we open, God exceeds it.

But the psalm's context provides the necessary counterpoint. Israel did not open their mouths in faith; they followed their own stubborn hearts. The promise of verse 10 is not unconditional&mdash;it is covenant promise, available to those who listen and walk in God's ways (v. 13). The open mouth that God fills is not a mouth full of self-determined desires but the mouth of a people who have oriented themselves toward God. "Delight yourself in the LORD, and he will give you the desires of your heart" (Psalm 37:4)&mdash;first the delight, then the desires, then the filling.`,
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
              <h2 style={{ color: PURPLE, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Psalm 81 &mdash; 16 verses in two movements: celebration and oracle</p>
            </div>
            {[
              { v: "1-2", ref: "Call to Festal Celebration", color: PURPLE, text: "\"Sing aloud to God our strength; shout for joy to the God of Jacob! Raise a song; sound the tambourine, the sweet lyre with the harp.\" The opening commands are physical and communal: singing at full volume, shouting, making music with multiple instruments. This is not private devotion but corporate festivity. \"God our strength\" identifies the object of worship as the source of all ability; the celebration flows from the worshippers' dependence, not their independence. Jacob's name is significant&mdash;it invokes the patriarch whose name was changed to Israel, tying the festal celebration to the whole story of election and promise." },
              { v: "3", ref: "The New Moon and Trumpet", color: TEAL, text: "\"Blow the trumpet at the new moon, at the full moon, on our feast day.\" The specific timing ties the celebration to the lunar calendar, marking the beginning of months and the festival period. Numbers 10:10 commanded trumpet-blowing at new moons and appointed feasts as memorial offerings before God. The trumpet blast was both a summons (gather!) and a proclamation (God is here!). Tremper Longman III notes that these liturgical observances structured Israel's time around divine encounter, interrupting ordinary life with intentional remembrance." },
              { v: "4-5a", ref: "Statute for Israel", color: PURPLE, text: "\"For it is a statute for Israel, a rule of the God of Jacob. He made it a decree in Joseph when he went out over the land of Egypt.\" The worship is commanded, not optional. &ldquo;Statute&rdquo; and &ldquo;rule&rdquo; are legal terms; this is not a suggestion but a covenant obligation. The reference to &ldquo;Joseph&rdquo; is slightly unusual&mdash;some see it as referring to the northern kingdom; others see it as a reminder that even in Egypt, God was working out the covenant through Joseph&rsquo;s story. Either way, the festival stretches back before Sinai to the very origins of Israel&rsquo;s story." },
              { v: "5b-6", ref: "Divine Speech Begins: Exodus Recalled", color: ROSE, text: "\"I hear a language I had not known: 'I relieved your shoulder of the burden; your hands were freed from the basket.'\" The first-person shift to divine speech in verse 5b marks the psalm's dramatic turn. The slave labor of Egypt&mdash;brick-making, carrying baskets&mdash;is specifically mentioned. This was the daily humiliation of God's people: forced labor in service of a foreign tyrant. God's liberation was not merely spiritual but concretely physical: shoulders relieved, hands freed. The gospel never abstracts salvation from bodily existence." },
              { v: "7", ref: "Tested at Meribah", color: GOLD, text: "\"In distress you called, and I delivered you; I answered you in the secret place of thunder; I tested you at the waters of Meribah.\" God both answered and tested at Meribah (Exodus 17:1&ndash;7; Numbers 20:2&ndash;13). The water miracle proved God's provision; the grumbling before it revealed Israel's faithlessness. &ldquo;The secret place of thunder&rdquo; may refer to the theophanic storm cloud. Kidner notes the double movement: God answers in mercy and simultaneously uses the crisis as a test. Providence works both ways&mdash;the same event can be both rescue and examination." },
              { v: "8-9", ref: "Hear, O Israel", color: PURPLE, text: "\"Hear, O Israel, if you would only listen to me! There shall be no strange god among you; you shall not bow down to a foreign god.\" The language echoes the Shema (Deuteronomy 6:4) and the first two commandments (Exodus 20:3&ndash;6). The command to have no other gods is the foundational covenant requirement. Significantly, God phrases it as a condition of listening: &ldquo;if you would only listen.&rdquo; The problem is not information&mdash;Israel knows the commandments. The problem is willingness to hear and obey them. Idolatry is ultimately a failure of attention: turning the ear from God to competitor voices." },
              { v: "10", ref: "Open Your Mouth Wide", color: TEAL, text: "\"I am the LORD your God, who brought you up out of the land of Egypt. Open your mouth wide, and I will fill it.\" The Decalogue preamble (Exodus 20:2) is quoted verbatim, tying this entire oracle to the Sinai covenant. The promise that follows is extraordinary: not &ldquo;ask small things&rdquo; but &ldquo;open wide.&rdquo; The image of an open mouth waiting to be filled evokes both prayer and feeding&mdash;total dependence and total trust. The width of God&rsquo;s supply matches the width of our asking. Matthew Henry: &ldquo;God&rsquo;s power and bounty are not stinted; the limitation is entirely on our side, in the straitness of our desires.&rdquo;" },
              { v: "11-12", ref: "Given Over to Stubborn Hearts", color: ROSE, text: "\"But my people did not listen to my voice; Israel would not submit to me. So I gave them over to their stubborn hearts, to follow their own counsels.\" The tragic counterpoint to verse 10. The wide-open mouth of faith was not offered; instead Israel followed stubborn hearts. The Hebrew for &ldquo;stubborn&rdquo; (<em>sheriruth</em>) means hardness or self-willed determination. &ldquo;Gave them over&rdquo; is the language of judicial permission: God lifted his restraining hand and allowed Israel to have the idol-chasing life they had chosen. This is not cruelty but love allowing freedom and its consequences. Romans 1:24 uses identical language for Gentile idolatry." },
              { v: "13", ref: "God's Longing: Oh, That My People...", color: PURPLE, text: "\"Oh, that my people would listen to me, that Israel would walk in my ways!\" The emotional peak of the psalm. The word &ldquo;oh that&rdquo; (lu) is a particle of unfulfilled wish&mdash;God's longing for what has not happened. This is divine pathos: the Creator of the universe aching for the responsiveness of his creatures. It mirrors Christ's lament over Jerusalem in Matthew 23:37. Calvin: &ldquo;God does not speak here as one who is indifferent to Israel&rsquo;s choices. He speaks as a father who extends his arms toward a child who refuses to come.&rdquo;" },
              { v: "14-16", ref: "What Could Have Been", color: GOLD, text: "\"I would soon subdue their enemies and turn my hand against their foes. Those who hate the LORD would cringe toward him, and their fate would last forever. But he would feed you with the finest of the wheat, and with honey from the rock I would satisfy you.\" The closing promises are deliberately set in the conditional mode: what would have been Israel&rsquo;s portion had they listened. Enemies subdued, foes conquered, finest wheat, honey from the rock&mdash;the imagery is Edenic and Deuteronomic at once (Deuteronomy 32:13). The honey from the rock recalls Samson&rsquo;s riddle and wilderness provision. These promises are not revoked; they await Israel&rsquo;s return. And in Christ, they are extended to all who walk in the ways of the Servant who did listen perfectly." },
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
              <h2 style={{ color: PURPLE, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Living Psalm 81 Today</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 81 raises uncomfortable questions for every generation of God's people: Are we listening? Are we worshipping because we are commanded to, or only when we feel like it? And beneath those questions lies the most searching one: What have we missed because we chose our own stubborn counsels over God's ways?" }} />
            </div>

            {[
              {
                color: PURPLE,
                title: "1. Worship Whether or Not You Feel It",
                body: `Psalm 81 opens with commands, not invitations. "Sing aloud... shout for joy... raise a song... blow the trumpet." The ancient congregation was told to celebrate before they felt celebratory. This is one of the oldest tensions in Christian worship: the relationship between commanded act and interior experience.

The evangelical tradition has sometimes overcorrected toward the interior, treating worship as authentic only when it wells up spontaneously from felt emotion. Psalm 81 offers a corrective: worship is first a discipline of the will, then a transformation of the feeling. We show up to the feast because it is commanded&mdash;a statute, a rule&mdash;and we discover in the showing up that God is present. The Feast was not merely an emotional outlet; it was a reality-ordering event that placed the community within the story of the Exodus again.

Practically: commit to corporate worship for its own sake, not as a transaction for spiritual feelings. Come when the praise feels hollow. Come when God seems distant. The community's song carries you when your own voice fails. This is why Hebrews 10:25 commands the gathering specifically for people who are tempted to drift away&mdash;the drift is often first felt, but the gathering is an act of will that can reverse it.`,
                prayer: "Lord, I confess that I sometimes wait for the feeling before I will worship. Teach me to come to you because you are worthy, not because I feel worthy to come. May the commanded worship become genuine joy.",
              },
              {
                color: TEAL,
                title: "2. Ground Your Obedience in Grace, Not Law",
                body: `God's speech in Psalm 81 follows the Decalogue's pattern precisely: "I am the LORD your God, who brought you up out of Egypt" (indicative of grace) comes before any command. This ordering is not accidental; it is the grammar of biblical ethics. We obey because we have been redeemed, not in order to be redeemed.

Contemporary Christianity sometimes inverts this order, treating the commands as conditions for divine approval rather than as descriptions of the redeemed life. This produces either pride (look how well I'm obeying!) or despair (I can't obey well enough). Psalm 81's structure prevents both errors: "I brought you out of Egypt; therefore open your mouth and I will fill it." The promise enables the obedience; the grace precedes the command.

Practically: when you struggle with obedience, don't begin with "try harder." Begin with the indicative: What has God already done? In Christ, we are already freed from slavery to sin (Romans 6:17&ndash;18), already seated with Christ in heavenly places (Ephesians 2:6), already recipients of every spiritual blessing (Ephesians 1:3). The commands flow from these realities. Rehearse the gospel before you attempt obedience; let grace fuel the effort.`,
                prayer: "Father, you brought me up out of Egypt&mdash;out of slavery to self and sin. Because of what you have done, I open my mouth wide. Fill it with your word, your will, your ways. Let gratitude be the engine of my obedience.",
              },
              {
                color: GOLD,
                title: "3. Hear the Divine Longing as an Invitation",
                body: `\"Oh, that my people would listen to me\" (v. 13) is an open door, not a closed verdict. God's longing is expressed in the present tense&mdash;not as a retrospective grieving over past failure, but as a living invitation. The door to honey from the rock and finest wheat is still unlocked. The question is whether we will walk through it.

There is a discipline here that the mystics called \"attentiveness\"&mdash;the deliberate practice of turning the ear toward God rather than toward competing voices. Israel's failure was not primarily moral but attentional: they stopped listening. The stubbornness of their hearts showed up first in the ears&mdash;they would not hear (v. 8, 11).

Practically: identify the voices that compete with God's voice in your daily life. The scroll of distraction, the feed of anxious news, the noise of ambient entertainment&mdash;these are not evil in themselves, but they can gradually fill the space where God's voice would otherwise be heard. Set aside deliberate time each day to do what verse 8 commands: \"Hear, O [your name], if you would only listen to me.\" Open the Scripture. Sit with it. Let it speak before you respond. This is what it means to open your mouth wide.`,
                prayer: "Lord, I confess that the noise of my life drowns out your voice. Give me ears to hear. Make your word irresistible to me. Draw me to the Scripture as the deer pants for water.",
              },
              {
                color: ROSE,
                title: "4. Grieve What Stubbornness Costs",
                body: `The closing verses of Psalm 81 are not meant to produce guilt but grief&mdash;a healthy, productive grief over what we have missed by choosing our own stubborn hearts. The finest wheat and honey from the rock were not withdrawn out of spite; they were simply not available to people walking in the other direction. The loss was always preventable.

This sanctified grief is different from shame-based self-condemnation. It is the grief of a recovered prodigal who, eating husks in a far country, remembers that in his father's house there is bread enough to spare (Luke 15:17). The grief is not "I am terrible" but "what I left behind was so good&mdash;and I can go back." It is repentance in its proper form: not self-punishment but reorientation.

If there are areas of your life where you have been following your own stubborn counsels&mdash;in relationships, in finances, in habits, in spiritual practice&mdash;Psalm 81 invites you to grieve the cost honestly, and then to turn. The divine longing of verse 13 is still active. The promise of honey from the rock is still waiting. The God who relieved Israel's shoulders from the brick-baskets is still the same God who says "come to me, all who labor and are heavy laden, and I will give you rest" (Matthew 11:28).`,
                prayer: "Lord, I grieve the honey from the rock I have missed by following my own stubborn heart. I confess [specific area of willfulness]. Turn me; give me the grace to walk in your ways. Let your longing for me become my longing for you.",
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
                dangerouslySetInnerHTML={{ __html: "&ldquo;Oh, that my people would listen to me, that Israel would walk in my ways!&rdquo;<br/>Psalm 81:13" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
