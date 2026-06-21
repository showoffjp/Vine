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

export default function Psalm80Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #0f1a14 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: GREEN }}>Psalms</span>
            <span style={{ color: BORDER }}>{" > "}</span>
            Book III
            <span style={{ color: BORDER }}>{" > "}</span>
            Asaph Collection
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2 }}>
            Psalm 80 &mdash; Restore Us, O God
          </h1>
          <p style={{ color: MUTED, fontSize: 17, margin: "0 0 20px", lineHeight: 1.6 }}>
            A Maskil of Asaph &mdash; the shepherd of Israel, the vine from Egypt, and the threefold cry for restoration
          </p>
          <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 16, margin: 0, color: TEXT, fontStyle: "italic", fontSize: 15 }}>
            &ldquo;Restore us, O God; let your face shine, that we may be saved!&rdquo; &mdash; Psalm 80:3, 7, 19
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
                color: activeTab === tab ? GREEN : MUTED,
                borderBottom: activeTab === tab ? `2px solid ${GREEN}` : "2px solid transparent",
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
              <h2 style={{ color: GREEN, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Overview</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Psalm 80 is one of the most moving communal laments in the entire Psalter. Attributed to Asaph, it belongs to the Elohistic Psalter (Psalms 42&ndash;83) where <em>Elohim</em> predominates over <em>YHWH</em>, though here both names appear. The psalm was composed in the shadow of catastrophe&mdash;most likely the fall of the northern kingdom to Assyria in 722 BC&mdash;and it pleads with the God of Israel to turn back and save the remnant of his people before it is too late." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm is structured around a haunting, threefold refrain that appears in verses 3, 7, and 19 with slight escalation: <em>&ldquo;Restore us, O God; let your face shine, that we may be saved!&rdquo;</em> Each repetition intensifies the divine title&mdash;from &ldquo;God&rdquo; (v. 3), to &ldquo;God of hosts&rdquo; (v. 7), to &ldquo;LORD God of hosts&rdquo; (v. 19)&mdash;as if the psalmist, growing more desperate, reaches for a more exalted name with each cry. Derek Kidner notes that this is one of the most carefully crafted refrains in the Psalter, functioning almost like liturgical responses in a congregational lament." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm opens (vv. 1&ndash;3) with an appeal to God as the Shepherd of Israel who sits enthroned upon the cherubim. This imagery reaches back to the ark of the covenant, the portable throne of God in the wilderness. Israel was led by this Shepherd through forty years of desert; surely the same God could lead them now through present darkness. The appeal to &ldquo;Ephraim, Benjamin, and Manasseh&rdquo; in verse 2 points specifically to Rachel&rsquo;s descendants and suggests this psalm originated in a northern context where those tribes predominated." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The central section (vv. 4&ndash;7) agonizes over divine anger. The psalmist asks: &ldquo;O LORD God of hosts, how long will you be angry with your people&rsquo;s prayers?&rdquo; There is piercing irony here&mdash;even their prayers seem to provoke rather than appease God&rsquo;s wrath. John Calvin observes that true prayer does not always receive immediate response, and that the delay itself becomes an occasion to plead more urgently. Their neighbors have made them a source of strife and mockery, and their &ldquo;bread of tears&rdquo; constitutes a grotesque feast of affliction." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The vine metaphor dominates verses 8&ndash;16 and constitutes the theological heart of the psalm. God brought a vine out of Egypt, cleared the ground before it, and planted it in the Promised Land. The vine thrived under divine care, spreading its tendrils from the Mediterranean to the River, from the mountains to the cedars. But now the same God who tended it has broken down its protective walls, leaving it exposed to every passing boar and browsing beast. The imagery of the vine for Israel is prominent throughout Scripture: Isaiah 5, Jeremiah 2, Ezekiel 17, and ultimately Jesus in John 15, who declares himself &ldquo;the true vine.&rdquo;" }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm concludes (vv. 17&ndash;19) with a mysterious reference to &ldquo;the man of your right hand, the son of man whom you have made strong for yourself.&rdquo; Commentators from Tremper Longman III to Franz Delitzsch have noted the Messianic resonance of this verse. In its original context it likely referred to the king of Israel as God&rsquo;s vice-regent; but the language of &ldquo;son of man&rdquo; combined with divine strengthening and the people&rsquo;s dependence on this figure points forward to the one who would call himself the Son of Man, stand at the right hand of God (Acts 7:56), and be the true vine in whom Israel&rsquo;s hope is finally fulfilled. Charles Spurgeon wrote: &ldquo;We may without violence apply this verse to our Lord Jesus Christ, the Son of Man, who stands at God&rsquo;s right hand for our salvation.&rdquo;" }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: GREEN, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Key Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  ["Author", "Asaph (attributed)"],
                  ["Collection", "Elohistic Psalter (Book III)"],
                  ["Type", "Communal Lament with Refrain"],
                  ["Accent Color", "Green -- vine / restoration"],
                  ["Key Theme", "The vine of Israel, divine shepherd"],
                  ["NT Fulfillment", "John 15:1 -- the true vine"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: GREEN, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>The Threefold Refrain</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { verse: "Verse 3", text: "Restore us, O God; let your face shine, that we may be saved!", title: "God (Elohim)" },
                  { verse: "Verse 7", text: "Restore us, O God of hosts; let your face shine, that we may be saved!", title: "God of Hosts" },
                  { verse: "Verse 19", text: "Restore us, O LORD God of hosts; let your face shine, that we may be saved!", title: "LORD God of Hosts (climax)" },
                ].map((r) => (
                  <div key={r.verse} style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 14, padding: "10px 14px", background: BG, borderRadius: "0 8px 8px 0" }}>
                    <div style={{ color: GREEN, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{r.verse} &mdash; {r.title}</div>
                    <div style={{ color: TEXT, fontStyle: "italic", fontSize: 15 }}>&ldquo;{r.text}&rdquo;</div>
                  </div>
                ))}
              </div>
            </div>

            <VideoEmbed videoId="GNhVc3yNlKc" title="Psalm 80 Explained" />
          </div>
        )}

        {/* -- THEMES -- */}
        {activeTab === "Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                color: GREEN,
                title: "God as Shepherd and King",
                refs: "Psalm 80:1-2; John 10:11-18; Ezekiel 34:11-16",
                body: `The psalm opens with two stacked images: God is both Shepherd and enthroned King. "Give ear, O Shepherd of Israel, you who lead Joseph like a flock. You who are enthroned upon the cherubim, shine forth." These are not competing images but complementary: the God who dwells in transcendent glory (cherubim throne) also stoops to lead the flock through the wilderness. Matthew Henry notes that "the name Shepherd implies tenderness, care, and condescension; the throne implies sovereignty and power. Both together speak of a God who is almighty in mercy."

The cherubim throne recalls the ark of the covenant in the Most Holy Place&mdash;the dwelling of divine glory in Israel's midst. When the psalmist invokes this image in a time of national collapse, he is essentially saying: "The same God whose glory dwelt among us has not departed; we appeal to that abiding presence." This is faith under fire&mdash;not denial of the crisis, but insistence that the covenant God remains accessible.

The Shepherd of Israel metaphor runs through Scripture in a great arc. In Ezekiel 34, God indicts the false shepherds of Israel who scatter rather than gather the flock, then promises: "I myself will search for my sheep and will seek them out" (34:11). This divine self-shepherding reaches its climax in Jesus, who declares "I am the good shepherd" (John 10:11) and lays down his life for the sheep. Psalm 80's cry to the Shepherd of Israel is thus a prayer that finds its ultimate answer not in national restoration but in the incarnation.

Tremper Longman III comments that the combination of Shepherd and King in verse 1 is unusual and intentional&mdash;Asaph is stacking every available title to persuade the divine Patron to act. This is the language of holy desperation: the people are not being clever; they are being honest about how badly they need God to show up.`,
              },
              {
                color: TEAL,
                title: "Bread of Tears and Answered Prayer",
                refs: "Psalm 80:4-7; Romans 8:26; Hebrews 5:7",
                body: `Verses 4&ndash;7 contain one of the most theologically disturbing observations in the Psalter: "O LORD God of hosts, how long will you be angry with your people's prayers?" The psalmist is not questioning whether to pray; he is noting that prayer itself seems to be meeting divine disapproval. The covenant people pray&mdash;and God appears to burn against those prayers. This is the dark night of the soul at a national level.

The phrase "bread of tears" (v. 5) is a vivid image of sustained, unrelieved sorrow. Bread is the basic staple of life; to eat bread of tears means that grief has saturated the most fundamental level of existence. The people are not crying occasionally&mdash;they are so saturated with sorrow that it has become their daily nourishment. And they drink tears "in full measure," which in Hebrew implies an abundance that overwhelms.

Calvin notes that this passage should not discourage prayer but rather deepen it: "Even when God seems to be angry with our prayers, we must not cease to pray, but must acknowledge that our prayers are unworthy and throw ourselves more entirely upon his mercy." The proper response to unanswered prayer is not silence but deeper pleading&mdash;which is exactly what the refrain models. After noting that prayer seems to provoke God's anger, the psalmist immediately repeats the refrain: "Restore us, O God of hosts."

The NT deepens this understanding. The Spirit "intercedes for us with groanings too deep for words" (Romans 8:26) precisely because there are moments when our prayers do not know what to ask. Jesus himself "offered up prayers and supplications, with loud cries and tears, to him who was able to save him from death" (Hebrews 5:7)&mdash;and was heard, though not delivered from death but through it. The bread of tears does not mean God has abandoned the one who weeps; it means God is working a salvation deeper than escape.`,
              },
              {
                color: GOLD,
                title: "The Vine from Egypt",
                refs: "Psalm 80:8-16; Isaiah 5:1-7; John 15:1-8",
                body: `The vine metaphor of verses 8&ndash;16 is perhaps the most extended and elaborate use of the image in the Psalter. God is pictured as a divine vintner who brought a vine out of Egypt, prepared the soil by driving out the Canaanite nations before it, and planted it in the best land available. The vine thrived under his care&mdash;it covered mountains, its shade fell on the mighty cedars, its shoots reached the Mediterranean Sea and its tendrils the Euphrates. The whole Promised Land became a vast vineyard of God's people.

Then the scene inverts. In verses 12&ndash;13, the same God who built the wall around the vineyard has now broken it down: "Why then have you broken down its walls, so that all who pass along the way pluck its fruit? The boar from the forest ravages it, and all that move in the field feed on it." The imagery is deliberately brutal&mdash;Israel, once a protected and thriving vine, is now exposed to every predator. The destruction of the vineyard is not natural disaster but divine removal of protection.

Isaiah 5 uses the same vineyard imagery and makes the interpretation explicit: "For the vineyard of the LORD of hosts is the house of Israel, and the men of Judah are his pleasant planting; and he looked for justice, but behold, bloodshed; for righteousness, but behold, an outcry!" (5:7). The vineyard was destroyed because it produced the wrong fruit.

The vine imagery reaches its culmination in John 15, where Jesus says "I am the true vine, and my Father is the vinedresser." The Israel that failed to produce the fruit of righteousness is transformed&mdash;the true vine is now the incarnate Son, and the branches are all who abide in him. Psalm 80's plea for the vine to be restored is answered not by the rehabilitation of national Israel but by the planting of a new vine in the person of Christ, into which all the nations are grafted (Romans 11:17).`,
              },
              {
                color: PURPLE,
                title: "The Son of Man at God's Right Hand",
                refs: "Psalm 80:17-19; Daniel 7:13-14; Acts 7:55-56; Matthew 26:64",
                body: `The psalm's conclusion makes an unexpected turn to a specific individual: "But let your hand be on the man of your right hand, the son of man whom you have made strong for yourself! Then we shall not turn back from you; give us life, and we will call upon your name!" (vv. 17&ndash;18). After the long address to God as shepherd of the flock and vintner of the vine&mdash;collectivist language throughout&mdash;suddenly a singular person appears as the pivot of salvation.

In its original historical context this likely referred to the Davidic king as YHWH's vice-regent. The phrase "man of your right hand" echoes royal ideology (Psalm 110:1; Psalm 45:9). But the language is suggestive far beyond this immediate referent. "Son of man" in the Hebrew Bible is sometimes simply a generic term for human being, but in Daniel 7:13 it becomes a throne-room figure who approaches the Ancient of Days and receives "dominion and glory and a kingdom, that all peoples, nations, and languages should serve him."

Jesus appropriated this title "Son of Man" more frequently than any other self-designation in the Gospels. And he specifically applied it to himself in ways that evoke both Daniel 7 and Psalm 80. At his trial, he declared: "You will see the Son of Man seated at the right hand of Power and coming on the clouds of heaven" (Matthew 26:64). Stephen, dying as the first martyr, "saw the glory of God, and Jesus standing at the right hand of God" (Acts 7:55&ndash;56).

Spurgeon wrote of verse 17: "We may refer this to our Lord Jesus without straining the text. He is the man of God's right hand, the Benjamin (son of the right hand) of the Father's love, strengthened for our sake that through him we might be saved. The whole psalm is, in fact, a prayer for the coming of the Messiah." Psalm 80's cry for the son of man at God's right hand is ultimately answered in the ascension and exaltation of Jesus Christ.`,
              },
              {
                color: ROSE,
                title: "Turn Us Again: The Theology of Restoration",
                refs: "Psalm 80:3, 7, 19; Lamentations 5:21; Jeremiah 31:18; 1 John 1:9",
                body: `The refrain of Psalm 80 carries a profound theological weight that English translations sometimes obscure. The Hebrew word translated "restore us" (&scaron;ub, or in the Hiphil form, "cause us to return") is the word for repentance, return, and conversion. The psalmist is asking God to turn them back to himself&mdash;but in a way that acknowledges that even the turning must be God's work.

This is the paradox of biblical repentance: Israel must return to God, but only God can make Israel return. Jeremiah 31:18 captures this perfectly: "Bring me back that I may be restored, for you are the LORD my God. For after I had turned away, I relented, and after I was instructed, I struck my thigh; I was ashamed, and I was confounded." And Lamentations 5:21: "Restore us to yourself, O LORD, that we may be restored! Renew our days as of old."

The refrain's threefold repetition is not mere liturgical padding. Each recurrence follows a section of complaint and lament&mdash;and each time, rather than wallowing in despair, the congregation returns to the same anchor point: divine restoration through the shining of God's face. The face of God (Num. 6:24&ndash;26, the Aaronic blessing) shining upon the people is the biblical shorthand for full covenant favor&mdash;not just rescue from trouble but the renewed presence of God among them.

This is grace theology embedded in lament. The people do not earn restoration by the quality of their prayer; they receive it when God shines his face upon them. The shining face that makes people safe is the very glory that dwelt in the Most Holy Place, that appeared on Sinai, and that John's Gospel says "we have seen" in the face of Jesus Christ (John 1:14). To see God's face and live is not possible in the old covenant (Exodus 33:20); it becomes possible in the new, because the face that shines upon us in the gospel has borne the hiding of God's face on the cross (Matthew 27:46) so that it need never be hidden from us again.`,
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
              <h2 style={{ color: GREEN, fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Verse by Verse Commentary</h2>
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Psalm 80 &mdash; 19 verses in three movements</p>
            </div>
            {[
              { v: "1-2", ref: "Superscription & Opening Address", color: GREEN, text: "\"Give ear, O Shepherd of Israel, you who lead Joseph like a flock! You who are enthroned upon the cherubim, shine forth. Before Ephraim and Benjamin and Manasseh, stir up your might and come to save us!\" The address opens with two titles: Shepherd (pastoral intimacy) and the one enthroned upon the cherubim (transcendent sovereignty). Ephraim, Benjamin, and Manasseh are the sons and grandsons of Rachel&mdash;all northern tribes, confirming this psalm's northern provenance. The prayer \"shine forth\" anticipates the refrain's \"let your face shine.\" Kidner notes the movement from hearing (\"give ear\") to shining (\"shine forth\") to coming (\"come to save\")&mdash;a complete theology of divine engagement in three verbs." },
              { v: "3", ref: "First Refrain", color: TEAL, text: "\"Restore us, O God; let your face shine, that we may be saved!\" The refrain appears first with the simple title \"God\" (Elohim). The shining face echoes the Aaronic blessing (Numbers 6:25) and represents full covenant favor. Three elements constitute salvation in this refrain: turning (restoration), divine presence (shining face), and deliverance (saved). Notably, the people cannot save themselves; they depend entirely on divine initiative. Calvin: \"The prayer for God's face to shine is a prayer for God to be what he already is&mdash;to let his glory and grace be visible to us in our distress.\"" },
              { v: "4-6", ref: "Complaint: Prayer Apparently Rejected", color: ROSE, text: "\"O LORD God of hosts, how long will you be angry with your people's prayers? You have fed them with the bread of tears and given them tears to drink in full measure. You make us an object of contention for our neighbors, and our enemies laugh among themselves.\" The escalation to \"LORD God of hosts\" signals heightened urgency. The complaint is striking: even prayer seems to provoke divine anger. \"Bread of tears\" is a merism for total saturation in grief&mdash;the most basic activity of life (eating) has been transformed into weeping. That neighbors mock and enemies laugh compounds the shame." },
              { v: "7", ref: "Second Refrain", color: TEAL, text: "\"Restore us, O God of hosts; let your face shine, that we may be saved!\" The divine title escalates to \"God of hosts,\" the commander of heaven's armies. Having described bread of tears and divine anger, the congregation refuses despair and returns to the same plea. The repetition is not mere liturgy&mdash;it is theological stubbornness, the insistence that God's covenant character has not changed even if his face is hidden. Spurgeon: \"There is holy boldness in repeating the same prayer with greater urgency. The more we are pressed, the louder we cry.\"" },
              { v: "8-009", ref: "The Vine from Egypt (part 1)", color: GOLD, text: "\"You brought a vine out of Egypt; you drove out the nations and planted it. You cleared the ground for it; it took deep root and filled the land.\" The vine metaphor is introduced with Exodus theology as its foundation. God did not find Israel planted in Canaan; he transplanted her from Egypt. The driving out of nations is a reminder that God went before Israel in conquest (Joshua 24:18). The vine \"took deep root\"&mdash;a word of patient, established growth that implies permanence. The filling of the land evokes the promises of Genesis 1 and Deuteronomy 28." },
              { v: "10-11", ref: "The Vine from Egypt (part 2)", color: GOLD, text: "\"The mountains were covered with its shade, the mighty cedars with its branches. It sent out its branches to the sea and its shoots to the River.\" The vine grew to cosmic proportions: shade covering mountains and the great cedars of Lebanon, branches reaching the Mediterranean and the Euphrates. This is a picture of Solomonic-era Israel at the height of its territorial extent (1 Kings 4:24). Matthew Henry observes that this was not Israel's doing but God's: \"It was God who gave them this extent; it is therefore to God they must apply when it is reduced.\"" },
              { v: "12-13", ref: "The Broken Wall", color: ROSE, text: "\"Why then have you broken down its walls, so that all who pass along the way pluck its fruit? The boar from the forest ravages it, and all that move in the field feed on it.\" The turning point is marked by \"Why then?\"&mdash;a classic lament question that does not seek information but forces a confrontation with the incongruity of God's past care and present abandonment. The broken wall imagery means the protective boundary has been deliberately removed. In vineyard terms (Isaiah 5), the hedge protects the vineyard; its removal is judgment. The boar (an unclean animal to Israel) and the moving creatures represent foreign armies and opportunistic neighbors." },
              { v: "14-16", ref: "Plea for the Vine's Restoration", color: GREEN, text: "\"Turn again, O God of hosts! Look down from heaven, and see; have regard for this vine, the stock that your right hand planted, and for the son whom you made strong for yourself. They have burned it with fire; they have cut it down; may they perish at the rebuke of your face!\" The word \"turn\" is the same as \"restore\" in the refrain&mdash;God himself must return his attention to the vine. The plea asks God to \"see\" and \"have regard\"&mdash;the attentiveness of the divine gardener. The phrase \"son whom you made strong\" introduces a royal figure, anticipating verse 17's fuller reference to the son of man. Tremper Longman III notes the corporate/individual oscillation: \"the vine\" (collective Israel) and \"the son\" (individual king) blur into one another." },
              { v: "17-18", ref: "The Son of Man at God's Right Hand", color: PURPLE, text: "\"But let your hand be on the man of your right hand, the son of man whom you have made strong for yourself! Then we shall not turn back from you; give us life, and we will call upon your name!\" This is the psalm's most Messianic verse. The \"man of your right hand\" is a royal figure&mdash;Psalm 110:1 places the king at God's right hand. \"Son of man\" echoes Daniel 7:13, where the exalted figure receives an everlasting kingdom. The conditional promise \"then we shall not turn back\" is remarkable: the people's faithfulness is tied to God's action, not their independent willpower. Matthew Henry: \"Their resolution to call upon God's name is not a bargain they bring; it is a fruit they expect from God's restoring work.\"" },
              { v: "19", ref: "Third and Final Refrain (Climax)", color: TEAL, text: "\"Restore us, O LORD God of hosts; let your face shine, that we may be saved!\" The refrain reaches its climax: both the covenantal name YHWH and the title God of hosts are now combined. This is the fullest possible invocation of God's name&mdash;a theological crescendo. Three times the same prayer has been lifted; three times the congregation has returned to this anchor. The psalm ends not with resolution but with petition. There is no answer recorded, no oracle of deliverance. But the very fact of the prayer's continuation is itself a form of trust. Kidner: \"To keep praying when God seems absent is itself a form of faith.\"" },
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
              <h2 style={{ color: GREEN, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Living Psalm 80 Today</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 80 speaks to any community that has seen the walls come down&mdash;any church, family, or individual that once thrived under God's evident blessing and now finds itself exposed to every passing wound. Its theology of the vine, the shepherd, and the son of man gives language to the deepest cries of communal grief, and its threefold refrain models the discipline of returning to God even when his face seems hidden." }} />
            </div>

            {[
              {
                color: GREEN,
                title: "1. Learn the Language of Lament",
                body: `Psalm 80 gives communities a vocabulary for corporate grief that contemporary Christianity often lacks. When the church&mdash;or a family&mdash;experiences sustained suffering, there is enormous pressure to perform faith by speaking only of God's goodness and suppressing the experience of divine absence. Psalm 80 refuses this performance. It names the "bread of tears," the neighbors' mockery, the broken walls. It asks "how long?"

But notice: the lament is not addressed to the air. Every complaint is directed to God himself&mdash;"O LORD God of hosts, how long...?" This is the crucial distinction between biblical lament and mere complaint. Lament accuses God in God's presence; complaint merely accuses God to others. Lament trusts that God can handle our honest grievance; mere complaint evacuates that trust.

Bring your community's real grief to God in prayer. If your church has shrunk, if a family has fractured, if ministry has born no visible fruit&mdash;bring that to God in the language of Psalm 80. "The boar from the forest ravages it." Name the damage honestly. The refrain will meet you on the other side.`,
                prayer: "Lord God of hosts, I bring to you the broken walls I see around me. I name [specific loss or grief] honestly before you. Restore us, O God; let your face shine, that we may be saved.",
              },
              {
                color: TEAL,
                title: "2. Repeat Your Core Prayer Until Saved",
                body: `The threefold refrain of Psalm 80 models a discipline that modern prayer culture struggles with: returning to the same prayer with increasing intensity rather than treating silence as reason to stop. The congregation prays the same words in verse 3, verse 7, and verse 19&mdash;but each time, God's name grows larger. There is theological deepening in the repetition.

Jesus modeled this in Gethsemane (Matthew 26:39, 42, 44), praying three times with the same petition: "My Father, if it be possible, let this cup pass from me." He was heard, not by being delivered from the cup but by being sustained through it. Paul prayed three times for his thorn to be removed (2 Corinthians 12:8); he was answered, not by removal but by the gift of God's sufficient grace.

The practice: identify the core petition you are carrying&mdash;the one thing you most need from God right now. Write it in the threefold pattern: first with a basic address (O God...), then with a fuller title (O Lord of Hosts...), then with the fullest possible acknowledgment of who God is. Return to that petition daily, expanding the title each time you find yourself tempted to give up.`,
                prayer: "O God, [my petition]. O Lord of Hosts, [my petition]. O LORD God of Hosts, [my petition]. Let your face shine upon me, that I may be saved.",
              },
              {
                color: GOLD,
                title: "3. Abide in the True Vine",
                body: `Psalm 80's vine imagery reaches its fulfillment in John 15. The vine of Israel, which repeatedly failed to produce righteous fruit and repeatedly needed the vinedresser to restore it, is now replaced by the true vine&mdash;Jesus Christ himself. The Father is the vinedresser; the branches are those who abide in Jesus. And the fruit that the old vine failed to produce&mdash;justice, righteousness, love&mdash;is now made possible by the sap of the Spirit flowing through the new vine.

John 15:4&ndash;5: "Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me. I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing."

The implication for daily life is concrete: bearing fruit is not a matter of trying harder but of staying connected. The Psalm 80 vine dried up and was ravaged when God removed his protection; the John 15 branches wither when they detach from the vine. The Christian's daily task is not self-improvement but abiding&mdash;reading the Word, praying, gathering with the community, receiving the sacraments, walking in obedience. These are not merit-generators but root-deepeners.`,
                prayer: "Lord Jesus, true vine, I confess that I try to produce fruit by my own strength. Teach me what it means to abide. Let your word remain in me. Keep me attached to you when the winds blow and the walls come down.",
              },
              {
                color: PURPLE,
                title: "4. Look to the Son of Man at God's Right Hand",
                body: `The man of God's right hand, the son of man, is the pivot of Psalm 80's salvation hope. In its original context, this was the Davidic king; in its fulfillment, it is Jesus Christ, who ascended and "sat down at the right hand of God" (Hebrews 10:12). This is not merely a theological fact to affirm; it is a place to look when prayer seems unanswered.

Hebrews 7:25 says of the ascended Christ: "He is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them." The man at God's right hand is interceding. When we cry "Restore us, O LORD God of hosts," we are not crying into a void; we are joining a prayer that is already being made at the right hand of the Father by the one whose intercession never fails.

In moments when you feel like the vine with broken walls&mdash;exposed, ravaged, mocked by neighbors&mdash;look up. The Shepherd who led Joseph like a flock, who was himself the sheep led to slaughter (Isaiah 53:7), now stands (Acts 7:56) and sits (Hebrews 10:12) at the right hand of the Father, making intercession for you by name. The psalm's cry has already been heard in him.`,
                prayer: "Lord Jesus, man at God's right hand, thank you that your intercession for me never fails. When I am tempted to believe that my prayers go unanswered and your face is hidden, remind me that you are praying on my behalf at this very moment. Let your face shine through your intercession.",
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
                dangerouslySetInnerHTML={{ __html: "&ldquo;Restore us, O LORD God of hosts; let your face shine, that we may be saved!&rdquo;<br/>Psalm 80:19" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
