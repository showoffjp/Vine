"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const TEXT = "#F2F2F8", MUTED = "#9898B3", GREEN = "#3a7d56";
const PURPLE = "#6B4FBB", GOLD = "#D97706", TEAL = "#0D9488";
const ROSE = "#E11D48";

const videos = [
  { videoId: "A2YrLpXZP0w", title: "Psalm 76 -- God Known in Judah" },
  { videoId: "oBOmfXmsMh4", title: "Divine Warrior Psalms: God Fights for His People" },
];

const tabs = ["overview", "themes", "verse", "application"] as const;
type Tab = typeof tabs[number];

export default function Psalm76Guide() {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", background: BG, color: TEXT, minHeight: "100vh", fontFamily: "var(--font-geist-sans, system-ui, sans-serif)" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg, #050e07 0%, #0a1a0e 50%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <Link href="/psalms-guide" style={{ color: MUTED, fontSize: "0.78rem", textDecoration: "none" }}>Psalms Guide</Link>
            <span style={{ color: BORDER }}>{">"}</span>
            <span style={{ color: GREEN, fontSize: "0.78rem" }}>Psalm 76</span>
          </div>
          <div style={{ display: "inline-block", background: "rgba(58,125,86,0.12)", border: `1px solid rgba(58,125,86,0.3)`, borderRadius: 4, padding: "0.25rem 0.75rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "1rem" }}>Song of Zion &mdash; Divine Warrior</div>
          <h1 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 300, color: "#f2e6c8", lineHeight: 1.1, margin: "0 0 1rem" }}>
            Psalm 76: God Is Known<br /><em style={{ fontStyle: "italic", color: "#c9a227" }}>in Judah and in Salem</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: MUTED, lineHeight: 1.75, maxWidth: 680, margin: "0 0 1.5rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 76 is one of Scripture&rsquo;s most majestic Divine Warrior hymns &mdash; a celebration of God&rsquo;s devastating defeat of his enemies without the deployment of a single human army. God&rsquo;s rebuke alone silences horses and riders; his wrath, properly directed, becomes the praise of nations. Asaph writes not as a man who has escaped battle but as one who has watched God fight and been humbled by the sight." }} />
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["Asaph", "Divine Warrior", "God&rsquo;s Judgment", "Songs of Zion", "Fear of God"].map(t => (
              <span key={t} style={{ background: "rgba(58,125,86,0.08)", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 999, padding: "0.2rem 0.75rem", fontSize: "0.72rem", color: GREEN }} dangerouslySetInnerHTML={{ __html: t }} />
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: "#09090F", position: "sticky", top: "var(--header-height, 80px)", zIndex: 20 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem", display: "flex", gap: 0 }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ background: "none", border: "none", borderBottom: tab === t ? `2px solid ${GREEN}` : "2px solid transparent", color: tab === t ? TEXT : MUTED, padding: "0.9rem 1.1rem", fontSize: "0.82rem", fontWeight: tab === t ? 600 : 400, cursor: "pointer", textTransform: "capitalize", transition: "all 0.2s", letterSpacing: "0.02em" }}>
              {t === "verse" ? "Verse-by-Verse" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>

        {/* OVERVIEW */}
        {tab === "overview" && (
          <div>
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>Overview: The God Who Fights Without an Army</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 76 is an Asaph psalm assigned in the superscription to the chief musician, to be played with stringed instruments. It belongs to the genre of the Divine Warrior hymn &mdash; psalms that celebrate God&rsquo;s victorious intervention in battle not through conventional military might but through his sheer presence and word." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The psalm opens (vv. 1&ndash;3) by locating God&rsquo;s fame in Judah and Israel, his dwelling in Salem (Jerusalem) and Zion. This is significant: Asaph does not begin with the defeat of enemies but with the <em>reputation</em> of God that precedes defeat. God is already known before the battle begins. The weapons of war (v. 3 &mdash; flashing arrows, shield, sword, battle) have been broken not in combat but by God&rsquo;s sovereign decree." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The central section (vv. 4&ndash;9) describes God&rsquo;s majestic silence and its effect: &ldquo;At your rebuke, O God of Jacob, both rider and horse lay stunned.&rdquo; Tremper Longman III notes this is one of the Bible&rsquo;s most economical descriptions of divine power &mdash; a single rebuke accomplishes what armies cannot. The &ldquo;sleep&rdquo; that falls on the mighty men is not natural sleep but divine judgment, the same stupor that fell on the enemies of Israel throughout Exodus and Conquest." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "The remarkable theological turn comes in verse 10: &ldquo;Surely the wrath of man shall praise you; the remnant of wrath you will put on like a belt.&rdquo; John Calvin found this verse among the most profound in the Psalter: God does not merely <em>restrain</em> human wrath &mdash; he <em>co-opts</em> it. The rage of nations becomes the material of God&rsquo;s glory. This is not merely a statement about history but about God&rsquo;s sovereign ability to turn opposition into occasion for praise. Charles Spurgeon called this &ldquo;the most astonishing exercise of divine sovereignty in the Psalter.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: "The psalm concludes with a summons to universal submission and vow-keeping (vv. 11&ndash;12): all surrounding peoples are called to bring gifts to the God who is terrible to kings. Matthew Henry notes that the psalm moves from local event to universal application &mdash; what God does in Judah is meant to instruct the whole earth about who governs it." }} />
            </section>

            <div style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.08), rgba(201,162,39,0.06))", border: `1px solid rgba(201,162,39,0.2)`, borderRadius: 10, padding: "1.5rem", marginBottom: "2.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#c9a227", marginBottom: "0.75rem" }}>The Text: Psalm 76 (ESV)</h3>
              <div style={{ color: MUTED, lineHeight: 2, fontSize: "0.92rem" }}>
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>1</sup> In Judah God is known; his name is great in Israel. <sup>2</sup> His abode has been established in Salem, his dwelling place in Zion. <sup>3</sup> There he broke the flashing arrows, the shield, the sword, and the weapons of war." }} />
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>4</sup> Glorious are you, more majestic than the mountains full of prey. <sup>5</sup> The stouthearted were stripped of their spoil; they sank into sleep; all the men of war were unable to use their hands. <sup>6</sup> At your rebuke, O God of Jacob, both rider and horse lay stunned." }} />
                <p style={{ margin: "0 0 0.5rem", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>7</sup> But you, you are to be feared! Who can stand before you when once your anger is roused? <sup>8</sup> From the heavens you uttered judgment; the earth feared and was still, <sup>9</sup> when God arose to establish judgment, to save all the humble of the earth." }} />
                <p style={{ margin: "0", fontStyle: "italic", color: TEXT }} dangerouslySetInnerHTML={{ __html: "<sup>10</sup> Surely the wrath of man shall praise you; the remnant of wrath you will put on like a belt. <sup>11</sup> Make your vows to the LORD your God and perform them; let all around him bring gifts to him who is to be feared, <sup>12</sup> who cuts off the spirit of princes, who is to be feared by the kings of the earth." }} />
              </div>
            </div>

            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>New Testament Fulfillment</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Psalm 76&rsquo;s Divine Warrior imagery finds its ultimate fulfillment in the crucifixion and resurrection of Jesus Christ. The cross appears to be the ultimate defeat &mdash; the powers assembling against God&rsquo;s anointed. But Paul declares that at the cross, God &ldquo;disarmed the rulers and authorities and put them to open shame, by triumphing over them in him&rdquo; (Col 2:15). The wrath assembled against Jesus became the praise of God." }} />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: "Revelation 19:11&ndash;16 completes the picture: the returning Christ is the Divine Warrior on a white horse, his eyes like flame, the wrath of God on his lips, the sword of his word proceeding from his mouth. The nations&rsquo; wrath &mdash; centuries of opposition to God &mdash; will indeed praise him as he finally subdues every enemy." }} />
              <p style={{ color: MUTED, lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: "Verse 10 (&ldquo;the wrath of man shall praise you&rdquo;) is the psalm&rsquo;s most Christ-shaped verse: what looked like annihilation at Calvary was in fact the turning point of all history &mdash; human rage against God becoming, through the cross, the vehicle of divine glory and human salvation." }} />
            </section>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Book", value: "Book III (Psalms 73-89)" },
                { label: "Author", value: "Asaph" },
                { label: "Type", value: "Divine Warrior / Zion Psalm" },
                { label: "Key Theme", value: "God fights; wrath becomes praise" },
                { label: "Key Verse", value: "v. 10 -- Wrath of man shall praise you" },
                { label: "NT Echo", value: "Colossians 2:15; Rev 19:11-16" },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "0.4rem" }}>{label}</div>
                  <div style={{ fontSize: "0.9rem", color: TEXT }}>{value}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.6rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "1rem" }}>Video Commentary</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {videos.map(v => <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />)}
            </div>
          </div>
        )}

        {/* THEMES */}
        {tab === "themes" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Major Themes</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }}>Five dominant themes give Psalm 76 its theological depth and devotional power.</p>

            {[
              {
                color: GREEN, title: "1. God&rsquo;s Name and Reputation in Covenant History",
                body: "The psalm opens with God being &ldquo;known&rdquo; in Judah and his name being &ldquo;great in Israel.&rdquo; This is not mere fame &mdash; it is covenant reputation. In the ancient world, a name was a person&rsquo;s character made audible; God&rsquo;s name being great in Israel means his covenant character has been displayed repeatedly and is known. Calvin notes that God&rsquo;s self-disclosure is always purposeful: he reveals himself so that he may be worshipped and his people may live in security. For the Christian, God&rsquo;s name is fully revealed in Jesus (Phil 2:9-11), the name above every name &mdash; the one before whom every knee will bow. Psalm 76 trains us to treasure the name of God not abstractly but as the specific character of the covenant Lord who has fought for us."
              },
              {
                color: GOLD, title: "2. The Terror of Divine Encounter",
                body: "Verse 7 is one of the Psalter&rsquo;s most arresting questions: &ldquo;Who can stand before you when once your anger is roused?&rdquo; This is the holy dread that is entirely absent from much contemporary Christianity. Spurgeon wrote: &ldquo;The question is unanswerable. No creature, however mighty, can face the anger of the Almighty.&rdquo; Matthew Henry observes that Psalm 76 is a needed corrective for religious presumption: we approach God on the basis of covenant mercy, but we must never forget that we approach a God before whom horses and their riders lay stunned. The New Testament does not eliminate this: &ldquo;It is a fearful thing to fall into the hands of the living God&rdquo; (Heb 10:31). Healthy Christian devotion holds together intimacy and awe &mdash; and Psalm 76 cultivates the awe."
              },
              {
                color: PURPLE, title: "3. God Saves the Humble of the Earth",
                body: "Verse 9 is the psalm&rsquo;s pivot: God arises &ldquo;to save all the humble of the earth.&rdquo; This is the stunning reversal at the heart of the Divine Warrior tradition. God does not fight to display power for its own sake; he fights for the vulnerable. The same God before whom kings are cut off in verse 12 is the God who stoops to save the humble. Tremper Longman III argues this is the key to understanding why the fear of God and the love of God are compatible &mdash; God&rsquo;s terrifying wrath falls specifically on those who oppress the humble; the humble themselves experience his wrath as deliverance. This is the logic of the cross: God&rsquo;s wrath against sin was the means of salvation for sinners. The humble who flee to him find that his terrifying power is entirely for them."
              },
              {
                color: TEAL, title: "4. Human Wrath Co-Opted for Divine Praise",
                body: "Verse 10 (&ldquo;Surely the wrath of man shall praise you; the remnant of wrath you will put on like a belt&rdquo;) is one of the most theologically dense verses in all the Psalter. Calvin calls it &ldquo;a remarkable testimony to divine sovereignty&rdquo; &mdash; not only does God defeat human wrath, he uses it. The wrath of Pilate, of the chief priests, of the crowds that cried &lsquo;Crucify him&rsquo; &mdash; all of it became, on the cross, the occasion for the mightiest display of divine love and power in history. What they intended for destruction God wore like a belt &mdash; it equipped him for the work of redemption. This has immense pastoral application: the persecutions and injustices the church has suffered throughout history have not defeated the gospel; they have, again and again, advanced it."
              },
              {
                color: ROSE, title: "5. Universal Accountability Before the Divine King",
                body: "The psalm ends with a universal summons (vv. 11&ndash;12): make vows to God and keep them; all surrounding nations bring gifts; God cuts off the spirit of princes and is feared by kings. Derek Kidner notes that Psalm 76&rsquo;s ending is missional in the deepest sense &mdash; the terror of God that destroyed enemies is the same revelation that should draw the nations to worship. This is the Old Testament&rsquo;s version of what Paul declares in Romans 11:32: &ldquo;God has consigned all to disobedience, that he may have mercy on all.&rdquo; The God who is terrible to kings is not a God who excludes the nations &mdash; he is a God who summons them. The appropriate response to God&rsquo;s displayed power is not cowering but vow-making, gift-bringing, worship."
              },
            ].map(({ color, title, body }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${color}`, borderRadius: "0 10px 10px 0", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.25rem", color: "#f2e6c8", marginBottom: "0.75rem" }} dangerouslySetInnerHTML={{ __html: title }} />
                <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        )}

        {/* VERSE */}
        {tab === "verse" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Verse-by-Verse Commentary</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }}>A careful walk through each section of Psalm 76 with commentary from the Reformed tradition.</p>

            {[
              {
                ref: "Verses 1&ndash;3", heading: "God Known in His City",
                text: "&ldquo;In Judah God is known; his name is great in Israel. His abode has been established in Salem, his dwelling place in Zion. There he broke the flashing arrows, the shield, the sword, and the weapons of war.&rdquo;",
                comment: "The opening establishes God&rsquo;s self-revelation within historical geography. &ldquo;Known&rdquo; is the covenant knowledge of ongoing relationship, not merely intellectual awareness. Salem is an archaic name for Jerusalem (Gen 14:18 &mdash; Melchizedek&rsquo;s city), connecting this psalm to the oldest promises about God&rsquo;s dwelling place. The weapons of war broken in verse 3 are broken at rest &mdash; past tense, permanently settled. Calvin: &ldquo;God has not established his seat in Zion merely to gratify his people with a pleasant dwelling, but to protect them with invincible power.&rdquo; Spurgeon: &ldquo;In Salem God has his palace, and all the weapons aimed against his people are shivered there as if against a mountain.&rdquo;"
              },
              {
                ref: "Verses 4&ndash;6", heading: "Majestic More Than Mountains of Prey",
                text: "&ldquo;Glorious are you, more majestic than the mountains full of prey. The stouthearted were stripped of their spoil; they sank into sleep; all the men of war were unable to use their hands. At your rebuke, O God of Jacob, both rider and horse lay stunned.&rdquo;",
                comment: "The comparison to &ldquo;mountains full of prey&rdquo; is striking &mdash; God is more fearsome than a mountain range full of lions (a metaphor for unassailable earthly power). The sleeping warriors echo the deep sleep God put on Adam (Gen 2:21) and on the Canaanite armies throughout Joshua. Most powerfully: verse 6 specifies the divine weapon &mdash; a <em>rebuke</em>. Not an army, not a plague, not a storm &mdash; a rebuke. Kidner: &ldquo;A single word from God achieves what no amount of human effort could accomplish.&rdquo; Matthew Henry sees here the ultimate comfort for the persecuted church: the same divine rebuke that silenced the Assyrian army can silence any enemy arrayed against God&rsquo;s people."
              },
              {
                ref: "Verses 7&ndash;9", heading: "The God Who Saves the Humble",
                text: "&ldquo;But you, you are to be feared! Who can stand before you when once your anger is roused? From the heavens you uttered judgment; the earth feared and was still, when God arose to establish judgment, to save all the humble of the earth.&rdquo;",
                comment: "The rhetorical question of verse 7 is answered by the earth&rsquo;s response: fear and stillness. When God speaks from heaven, creation itself holds its breath. But the purpose clause of verse 9 is the psalm&rsquo;s great inversion: God arises to judge &mdash; and the goal of the judgment is salvation. The humble (<em>anavim</em> &mdash; the poor, the meek, those bent low by oppression) are the beneficiaries of divine wrath against their oppressors. Spurgeon: &ldquo;Never let the lowly fear for God&rsquo;s anger is not against them; they are his charge, his jewels; he rebukes kings for their sakes.&rdquo; This is the theological logic of the Beatitude: &ldquo;Blessed are the meek, for they shall inherit the earth.&rdquo;"
              },
              {
                ref: "Verses 10&ndash;12", heading: "Wrath Becomes Praise &mdash; Universal Submission",
                text: "&ldquo;Surely the wrath of man shall praise you; the remnant of wrath you will put on like a belt. Make your vows to the LORD your God and perform them; let all around him bring gifts to him who is to be feared, who cuts off the spirit of princes, who is to be feared by the kings of the earth.&rdquo;",
                comment: "Verse 10 is the psalm&rsquo;s theological summit. Calvin called it &ldquo;the peculiar prerogative of God &mdash; that he turns the wickedness of men to serve his own purposes and to advance his glory.&rdquo; The &ldquo;belt&rdquo; image is military: God girds himself with human wrath as a warrior girds himself for battle &mdash; using the enemy&rsquo;s very energy against them. The concluding summons to vow-making and gift-bringing is not coercive tribute but covenant worship: those who have witnessed what God can do with human opposition should bring their best in voluntary surrender. The final verse &mdash; &ldquo;who cuts off the spirit of princes&rdquo; &mdash; closes with an image of sovereign authority over even the most powerful human rulers. Kidner: &ldquo;This is not a God who exists at the pleasure of kings; kings exist at the pleasure of this God.&rdquo;"
              },
            ].map(({ ref, heading, text, comment }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: "0.3rem" }} dangerouslySetInnerHTML={{ __html: ref }} />
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "0.75rem" }}>{heading}</h3>
                <blockquote style={{ borderLeft: `3px solid ${GOLD}`, background: "rgba(201,162,39,0.04)", borderRadius: "0 6px 6px 0", padding: "0.75rem 1rem", margin: "0 0 1rem", fontStyle: "italic", color: "#c9b98a", fontSize: "0.92rem", lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: text }} />
                <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: comment }} />
              </div>
            ))}
          </div>
        )}

        {/* APPLICATION */}
        {tab === "application" && (
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.8rem", fontWeight: 600, color: "#f2e6c8", marginBottom: "0.5rem" }}>Application & Reflection</h2>
            <p style={{ color: MUTED, marginBottom: "2rem" }}>Psalm 76 equips believers to face opposition with calm confidence, cultivate proper fear of God, and trust that even hostility against the gospel serves the gospel.</p>

            {[
              {
                color: GREEN, title: "Standing Calm When Enemies Assemble",
                body: "Psalm 76 describes armies rendered helpless by a divine rebuke. What &ldquo;enemies&rdquo; are assembled against you or your community right now &mdash; illness, false accusation, financial ruin, relational breakdown, persecution? The psalm does not offer false comfort that these are not real threats. It offers something better: the assurance that the God who silenced chariot armies with a word is the same God who stands between you and every threat. Your job is not to fight your way out &mdash; it is to do what the humble of the earth do: place yourself under his protection and trust that his rebuke will accomplish what your striving cannot.",
                prayer: "God of Jacob, when I am surrounded and outgunned, remind me of Psalm 76. You broke the weapons before the battle was joined. You silenced the armies with a rebuke. Do for me what you have done for your people across the centuries &mdash; stand between me and that which threatens to undo me, and let your rebuke be sufficient."
              },
              {
                color: GOLD, title: "Recovering the Fear of God",
                body: "Verse 7 asks an unanswerable question: &ldquo;Who can stand before you when once your anger is roused?&rdquo; The modern church has largely lost its sense of divine majesty. We speak of God as friend and companion &mdash; which is biblically true &mdash; but rarely as the One before whom horses lay stunned at a word. Psalm 76 is a corrective: a healthy fear of God does not drive us away from him but drives us to him as the only One whose power can protect us. Isaiah had this experience (Isa 6:5) and it led not to destruction but to commissioning. The more we understand God&rsquo;s absolute sovereignty, the more extraordinary his grace to us becomes.",
                prayer: "Holy God, restore in me a proper fear of you. Not the slavish fear of one who dreads condemnation, but the reverent awe of one who stands before unimaginable power and knows it to be entirely for them. Let me never take your mercy cheap because I have forgotten how holy you are."
              },
              {
                color: PURPLE, title: "When Your Suffering Becomes God&rsquo;s Praise",
                body: "&ldquo;The wrath of man shall praise you.&rdquo; This verse may be the most comfort-giving in all of Psalm 76 for those who are suffering unjustly. Joseph&rsquo;s brothers&rsquo; wrath against him became the instrument of salvation for a nation. The rage of Rome against Jesus became the foundation of the church. The persecution of Christians in the early centuries spread the gospel to every province of the empire. Your specific suffering &mdash; the thing that feels like it should not be happening to you &mdash; is not outside the sovereign economy of God. He will put it on like a belt. He will wear it as the very thing that advances his purposes. This does not require you to minimize your pain; it requires you to trust the One who recycles pain into praise.",
                prayer: "Lord, I confess that I cannot see how this suffering could ever praise you. It feels like waste, like defeat, like something that should have been stopped. By faith I hold onto Psalm 76:10 &mdash; that you co-opt what was meant to crush. Wear my suffering like a belt. Use it for your glory and for someone else&rsquo;s salvation."
              },
              {
                color: TEAL, title: "Making and Keeping Vows Before the Fearsome God",
                body: "The psalm ends with a call to vow-making. In the ancient world, vows to God were made in times of crisis: &ldquo;If you deliver me, I will&hellip;&rdquo; The call to &ldquo;perform them&rdquo; is the sober counterpart &mdash; once God acts, follow through. In Christian life, this pattern plays out in commitments made to God in times of trouble that are then quietly abandoned when the trouble passes. Consider: are there vows or commitments you made to God &mdash; in a prayer, at a retreat, during a crisis &mdash; that you have let slip? The God of Psalm 76 who cut off the spirit of princes is the God to whom you made those commitments. His faithfulness to you demands your faithfulness to your word.",
                prayer: "God who is to be feared by kings, I confess that I have not always kept the commitments I made to you in seasons of need. Forgive me. Restore to me the seriousness that befits someone who has encountered your power. Let me make vows with honesty and keep them with integrity, not as a way to earn favor but as a response to your faithfulness."
              },
            ].map(({ color, title, body, prayer }) => (
              <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "0.75rem" }}>{title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: body }} />
                <div style={{ background: `rgba(${color === GREEN ? "58,125,86" : color === GOLD ? "217,119,6" : color === PURPLE ? "107,79,187" : "13,148,136"},0.06)`, border: `1px solid rgba(${color === GREEN ? "58,125,86" : color === GOLD ? "217,119,6" : color === PURPLE ? "107,79,187" : "13,148,136"},0.2)`, borderRadius: 8, padding: "1rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: "0.4rem" }}>Prayer</div>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic", margin: 0 }} dangerouslySetInnerHTML={{ __html: prayer }} />
                </div>
              </div>
            ))}

            <div style={{ background: "linear-gradient(135deg, rgba(58,125,86,0.08), rgba(107,79,187,0.06))", border: `1px solid rgba(58,125,86,0.2)`, borderRadius: 10, padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "1.2rem", color: "#f2e6c8", marginBottom: "1rem" }}>Continue the Songs of Zion</h3>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {[
                  { label: "Psalm 46 Guide", href: "/psalm-46-guide" },
                  { label: "Psalm 48 Guide", href: "/psalm-48-guide" },
                  { label: "Psalm 87 Guide", href: "/psalm-87-guide" },
                  { label: "Psalm 122 Guide", href: "/psalm-122-guide" },
                  { label: "Psalms Overview", href: "/psalms-guide" },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} style={{ background: "rgba(58,125,86,0.1)", border: "1px solid rgba(58,125,86,0.25)", borderRadius: 6, padding: "0.5rem 1rem", fontSize: "0.82rem", color: GREEN, textDecoration: "none" }}>{label}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
