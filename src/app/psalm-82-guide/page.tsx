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

export default function Psalm82Guide() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif", paddingTop: "var(--header-height, 80px)" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #1a0f20 0%, #07070F 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 36px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span style={{ color: GOLD }}>Psalms</span>
            <span style={{ color: BORDER }}>{" > "}</span>
            Book III
            <span style={{ color: BORDER }}>{" > "}</span>
            Asaph Collection
          </div>
          <h1 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2 }}>
            Psalm 82 &mdash; God in the Divine Council
          </h1>
          <p style={{ color: MUTED, fontSize: 17, margin: "0 0 20px", lineHeight: 1.6 }}>
            The most theologically arresting psalm in the Psalter &mdash; the corrupt &ldquo;gods&rdquo; condemned, the poor defended, and Jesus&rsquo;s astonishing use of this text in John 10
          </p>
          <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0, color: TEXT, fontStyle: "italic", fontSize: 15 }}>
            &ldquo;I said, you are gods, sons of the Most High, all of you; nevertheless, like men you shall die, and fall like any prince.&rdquo; &mdash; Psalm 82:6&ndash;7
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
                dangerouslySetInnerHTML={{ __html: "Psalm 82 may be the most theologically striking and most debated psalm in the entire Psalter. In eight compressed verses, Asaph describes a scene that has fascinated and challenged readers across millennia: God presiding in judgment over a council of beings called &ldquo;gods&rdquo; (Elohim, plural), condemning them for their failure to do justice for the weak and poor, announcing their death like mortals, and then being addressed by the congregation with a cry for universal judgment. The combination is unique in Scripture." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The psalm opens with a scene reminiscent of ancient Near Eastern divine council imagery (see Job 1&ndash;2, 1 Kings 22:19&ndash;23, Isaiah 6). God (&lsquo;Elohim&rsquo;) takes his stand in the divine council and pronounces judgment on the &lsquo;gods&rsquo; (also &lsquo;Elohim&rsquo;). Who are these &ldquo;gods&rdquo;? Three main interpretations have been advanced throughout church history: (1) they are the angelic or supernatural beings appointed over the nations (Deuteronomy 32:8&ndash;9 in the Septuagint and Dead Sea Scrolls tradition); (2) they are human judges of Israel who held divine authority; (3) they represent the gods of the nations&mdash;beings whose existence is acknowledged but whose status is now being stripped." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The most compelling reading, advanced by Michael Heiser and others drawing on comparative ancient Near Eastern literature, is that these are divine beings&mdash;members of God's heavenly court who were assigned stewardship over the nations at the incident described in Deuteronomy 32:8 (LXX: &ldquo;he fixed the borders of the peoples according to the number of the sons of God&rdquo;). They have been given authority; they have abused it by allowing injustice to flourish; now they are condemned to die &ldquo;like men.&rdquo; Their mortality is the sentence, not their nature." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The indictment in verses 2&ndash;5 is specific: the &ldquo;gods&rdquo; have shown partiality, protected the wicked, failed to defend the weak, the fatherless, the afflicted, the needy. The result is cosmic: &ldquo;all the foundations of the earth are shaken.&rdquo; Injustice is not merely a social problem; it is an ontological one. When those in authority fail the poor, the moral fabric of creation itself is destabilized. This is a profound apologetic for social ethics grounded in theology." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "The NT use of this psalm is decisive and controversial. In John 10:34&ndash;36, Jesus quotes Psalm 82:6 to defend himself against the charge of blasphemy. His argument is: if the Scriptures could call human judges &lsquo;gods&rsquo; (a lesser-to-greater argument), how can it be blasphemy for the one whom the Father has sanctified and sent into the world to say &lsquo;I am the Son of God&rsquo;? Jesus is not endorsing polytheism; he is using rabbinic qal wahomer (lighter to heavier) reasoning to establish that his divine self-claim is far better grounded than the psalm's address to human rulers. The argument assumes the Pharisees understood the psalm to refer to human judges, and uses that concession to press his own superior claim." }} />
              <p style={{ color: TEXT, lineHeight: 1.85, margin: "0 0 16px" }}
                dangerouslySetInnerHTML={{ __html: "Charles Spurgeon preached on Psalm 82 as &ldquo;a divine denunciation of unjust judges and a prayer for the world's rightful king to arise and judge the earth.&rdquo; The psalm ends not with despair but with the boldest possible prayer: &ldquo;Arise, O God, judge the earth; for you shall inherit all the nations!&rdquo; (v. 8). This is eschatological hope in eight words: the God who presides over the divine council will ultimately reclaim what was delegated and corrupted, and the inheritance of all nations belongs to him alone." }} />
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: GOLD, fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>Key Details</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  ["Author", "Asaph (attributed)"],
                  ["Length", "8 verses -- most compressed Asaph psalm"],
                  ["Type", "Prophetic Oracle / Divine Council Scene"],
                  ["Accent Color", "Gold -- divine judgment"],
                  ["NT Fulfillment", "John 10:34-36 -- Jesus quotes v. 6"],
                  ["Key Verse", "\"Arise, O God, judge the earth\" (v. 8)"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k}</div>
                    <div style={{ color: TEXT, fontSize: 14 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "24px 32px" }}>
              <h3 style={{ color: GOLD, fontSize: 17, fontWeight: 700, margin: "0 0 14px" }}>Who Are the &ldquo;Gods&rdquo;? Three Views</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { view: "Divine Beings / Sons of God", desc: "Supernatural members of God's heavenly court assigned to oversee the nations (Deut. 32:8 LXX/DSS). Condemned to die like humans as punishment for injustice. Supported by ancient Near Eastern background and Dead Sea Scrolls." },
                  { view: "Human Judges of Israel", desc: "Israelite magistrates called &lsquo;gods&rsquo; because they exercised divinely delegated authority (Exodus 21:6; 22:8). Jesus appears to use this interpretation in John 10:34. Most common in traditional Jewish and Reformation interpretation." },
                  { view: "Gods of the Nations (Defeated)", desc: "The patron deities of surrounding nations, whose existence is acknowledged but whose power is now stripped. Supported by psalm's universal scope and the cosmic implications of verses 5 and 8." },
                ].map((v) => (
                  <div key={v.view} style={{ background: BG, borderRadius: 8, padding: "12px 16px", border: `1px solid ${BORDER}` }}>
                    <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{v.view}</div>
                    <p style={{ color: TEXT, fontSize: 14, margin: 0, lineHeight: 1.6 }}
                      dangerouslySetInnerHTML={{ __html: v.desc }} />
                  </div>
                ))}
              </div>
            </div>

            <VideoEmbed videoId="3RvKGpZ4Hfk" title="Psalm 82 -- The Divine Council" />
          </div>
        )}

        {/* -- THEMES -- */}
        {activeTab === "Themes" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                color: GOLD,
                title: "The Divine Council and the Sovereignty of God",
                refs: "Psalm 82:1; Job 1:6-12; 1 Kings 22:19-23; Isaiah 6:1-8; Daniel 7:9-14",
                body: `The opening verse of Psalm 82 describes a scene that appears repeatedly in the Old Testament: "God has taken his place in the divine assembly; in the midst of the gods he holds judgment." This is not a casual reference. The divine council&mdash;a heavenly court of supernatural beings surrounding God's throne&mdash;is a fixture of the ancient Near Eastern worldview that the Bible both adopts and radically transforms.

In the surrounding cultures, the divine council was a pantheon of co-equal deities who debated policy and divided authority. In the Hebrew Bible, the council is an assembly of created beings around the uncreated God, who alone holds sovereign authority. Job 1&ndash;2 shows the "sons of God" presenting themselves before YHWH, with the adversary (ha-Satan) among them. Isaiah 6 shows the Lord "high and lifted up" while seraphim attend him. Daniel 7 shows the "Ancient of Days" taking his seat while thousands minister to him.

Psalm 82 depicts the same court, but now in a scene of judgment rather than assembly. God is not presiding over deliberation; he is pronouncing verdict. The beings who have administered the world have failed their charge, and now the sovereign Judge acts against them. This is not polytheism; it is monotheism with a heavenly court. The &ldquo;gods&rdquo; are real beings with real authority; their existence does not compete with God's supremacy but derives from it, and can be revoked by it.

The theological implication is profound: all earthly and heavenly authority is delegated authority. No being in heaven or earth holds power independently of God. And delegated authority carries delegated responsibility. The &ldquo;gods&rdquo; are judged not for being powerful but for misusing power&mdash;specifically by failing the powerless. Tremper Longman III: "Psalm 82 establishes that God holds all rulers, human and supernatural, to account for how they treat the vulnerable."`,
              },
              {
                color: TEAL,
                title: "Justice for the Weak and Poor",
                refs: "Psalm 82:2-4; Proverbs 31:8-9; Isaiah 1:17; Matthew 25:31-46; James 1:27",
                body: `The indictment against the "gods" is entirely focused on their failure to do justice: "How long will you judge unjustly and show partiality to the wicked? Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute. Rescue the weak and the needy; deliver them from the hand of the wicked" (vv. 2&ndash;4). The four commands to do justice (give, maintain, rescue, deliver) are addressed to those with authority, and the four beneficiaries are the least powerful: the weak, fatherless, afflicted, destitute, needy.

This is not peripheral to God's concerns. Throughout the entire Old Testament, the treatment of the vulnerable is a primary metric of covenant faithfulness. The prophets return to it again and again (Isaiah 1:17; Jeremiah 22:3; Amos 5:24; Micah 6:8). The law protected orphans, widows, foreigners, and the poor with specific provisions. And the failure to protect them&mdash;showing partiality to the wicked instead&mdash;is what brings cosmic destabilization in verse 5.

Jesus carries this theology into his teaching about the final judgment. In Matthew 25:31&ndash;46, the sheep and goats are separated on the basis of how they treated "the least of these"&mdash;the hungry, thirsty, stranger, naked, sick, imprisoned. The equivalence drawn in verse 40 ("as you did it to one of the least of these my brothers, you did it to me") echoes Psalm 82's logic: the weak are not merely social statistics; they bear a special relation to the God who defends them. To neglect them is to neglect him.

James 1:27 gives the NT summary: "Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world." The four commands of Psalm 82:3&ndash;4 are not OT ethics replaced by NT spirituality; they are covenant ethics amplified and fulfilled in the new community of Jesus.`,
              },
              {
                color: ROSE,
                title: "Darkness, Shaking Foundations, and Moral Collapse",
                refs: "Psalm 82:5; Isaiah 24:1-6; Romans 1:18-32; Revelation 6:12-17",
                body: `Verse 5 is the consequence: "They have neither knowledge nor understanding, they walk about in darkness; all the foundations of the earth are shaken." The connection between injustice among the powerful and cosmological instability is remarkable. When those with authority fail to protect the weak, the moral order of creation itself becomes unstable.

This is not metaphor for mere social dysfunction. The biblical worldview connects the moral order and the created order in ways that modern materialist assumptions tend to resist. Paul argues in Romans 1:18&ndash;32 that humanity's suppression of the truth about God leads to a spiral of moral disintegration&mdash;not as arbitrary divine punishment but as intrinsic consequence: "God gave them over" to the natural results of their choices. Similarly, Isaiah 24 describes the earth drying up and withering because "they have transgressed the laws, violated the statutes, broken the everlasting covenant" (24:5).

The "foundations" that shake in Psalm 82:5 are the moral structures that make human civilization possible: the protection of the innocent, the accountability of the powerful, the reliability of justice. When these collapse, everything else follows. The strong can prey on the weak; the wicked can operate without consequence; the social fabric tears. This is what happens in a world where the "gods"&mdash;the authorities&mdash;walk in darkness without knowledge.

Revelation 6 depicts a similar cosmological response to earthly injustice: mountains moving, islands fleeing, heaven departing as a scroll. These images of cosmic shaking in the apocalyptic literature are the full unfolding of what Psalm 82:5 announces: injustice in high places has shaking foundations as its consequence. The world does not sustain itself; it is sustained by the God who is the foundation of justice.`,
              },
              {
                color: PURPLE,
                title: "Jesus Quotes Psalm 82: You Are Gods",
                refs: "Psalm 82:6; John 10:34-36; Romans 5:12-21; 2 Peter 1:4",
                body: `The most famous use of Psalm 82 in the NT occurs in John 10:34&ndash;36, when Jesus is confronted by the Pharisees for claiming to be the Son of God: "Jesus answered them, 'Is it not written in your Law, "I said, you are gods"? If he called them gods to whom the word of God came&mdash;and Scripture cannot be broken&mdash;do you say of him whom the Father consecrated and sent into the world, "You are blaspheming," because I said, "I am the Son of God"?'"

This is an argument from the lesser to the greater (qal wahomer). Jesus does not deny the charge of making divine claims; he argues that the charge of blasphemy is incoherent. If even human judges could be called &ldquo;gods&rdquo; because they received God's word, how much more does the one who has been "consecrated" (set apart) and "sent" (commissioned) by the Father have grounds for claiming divine sonship? The argument assumes: (1) Scripture cannot be broken; (2) Psalm 82:6 calls human judges &ldquo;gods&rdquo;; (3) if the lower category (humans) can bear the title, the higher category (the one sent by the Father) can certainly bear a greater claim.

Some have misread this passage as Jesus endorsing the idea that humans can become divine. This is a misreading. Jesus is not saying "you, too, can be gods." He is using rabbinic exegesis to defend his own unique identity against a charge of blasphemy. His argument works precisely because he is claiming something far greater than what the Pharisees were willing to concede Psalm 82 said.

The deeper implication: the entire psalm is a setup for the one who comes as the true judge of the nations, the rightful heir of all peoples, the one to whom verse 8 points: "Arise, O God, judge the earth; for you shall inherit all the nations!" Jesus is that judge (John 5:22; Acts 17:31). The divine council scene of Psalm 82 anticipates the day when the Son of Man takes his seat and inherits all that was given to the failed "gods."`,
              },
              {
                color: GREEN,
                title: "\"Arise, O God\": The Eschatological Cry",
                refs: "Psalm 82:8; Daniel 7:13-14; Revelation 11:15; 1 Corinthians 15:24-28",
                body: `The psalm's final verse is a thunderclap of prayer: "Arise, O God, judge the earth; for you shall inherit all the nations!" After the indictment of the failed "gods," after the announcement of their death, after the cosmological shaking, the congregation does not conclude with despair or resignation. They end with the boldest possible petition: rise, judge, inherit.

This is eschatological hope in its most compressed form. The nations that have been parceled out to the "gods" (who have corrupted their charge) are being reclaimed by the God to whom they rightfully belong. The failed divine administrators will be replaced not by new administrators but by the direct, universal reign of God himself. This is what Paul describes in 1 Corinthians 15:24&ndash;28: "Then comes the end, when [Christ] delivers the kingdom to God the Father after destroying every rule and every authority and power. For he must reign until he has put all his enemies under his feet... that God may be all in all."

Daniel 7:13&ndash;14 provides the closest parallel: "And to him was given dominion and glory and a kingdom, that all peoples, nations, and languages should serve him; his dominion is an everlasting dominion, which shall not pass away." The Son of Man inherits what the "gods" lost. Revelation 11:15 sings: "The kingdom of the world has become the kingdom of our Lord and of his Christ, and he shall reign forever and ever."

To pray "Arise, O God, judge the earth" is to align oneself with the entire arc of Scripture&mdash;from the garden, where God intended to reign through image-bearing humans, through the catastrophic failure of that project, to the redemption in Christ, and forward to the consummation when every knee bows and every tongue confesses. Psalm 82:8 is one of the shortest and most powerful prayers in the Bible: a two-word imperative ("arise, judge") and a covenant certainty ("you shall inherit").`,
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
              <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>Psalm 82 &mdash; 8 verses, four movements: the scene, the indictment, the sentence, the prayer</p>
            </div>
            {[
              { v: "1", ref: "God Presides in the Divine Council", color: GOLD, text: "\"God has taken his place in the divine assembly; in the midst of the gods he holds judgment.\" The verse establishes a courtroom in heaven. &lsquo;Divine assembly&rsquo; ('adat 'El) and &lsquo;gods&rsquo; (Elohim, plural) set the scene: God is presiding over a council of other divine beings. Ancient readers familiar with Near Eastern mythology would recognize the council scene but find it inverted&mdash;in the surrounding culture, the council deliberated together; here, God alone holds judgment. The standing posture (&ldquo;taken his place&rdquo;) conveys judicial authority. Michael Heiser notes that this is a deliberate use of polytheistic council imagery to subordinate all divine beings to the one true God." },
              { v: "2", ref: "Indictment: Unjust Judgment and Partiality", color: ROSE, text: "\"How long will you judge unjustly and show partiality to the wicked?\" The rhetorical question &ldquo;how long&rdquo; implies that the injustice is not new but has been tolerated too long. &lsquo;Show partiality&rsquo; is literally &lsquo;lift the face of the wicked&rsquo;&mdash;a Hebrew idiom for giving preferential treatment. The specific crime is the inverse of what justice requires: rather than protecting the weak (the mandate), the &ldquo;gods&rdquo; have been favoring the wicked (the abuse). This is the founding corruption of every unjust system: the powerful protect the powerful at the expense of the powerless." },
              { v: "3-4", ref: "Four Commands to Do Justice", color: TEAL, text: "\"Give justice to the weak and the fatherless; maintain the right of the afflicted and the destitute. Rescue the weak and the needy; deliver them from the hand of the wicked.\" Four parallel imperatives structured as two pairs. The four categories of beneficiaries&mdash;weak, fatherless, afflicted, destitute/needy&mdash;represent the most powerless members of ancient society, those without legal advocates, without economic resources, without family protection. These four commands appear to have been the job description of the &ldquo;gods&rdquo;; they failed to perform it. Spurgeon: &ldquo;God does not only pity the poor; he commands that justice be done to them. Pity without justice is sentiment; justice without pity is cruelty. God requires both.&rdquo;" },
              { v: "5", ref: "Darkness and Shaking Foundations", color: ROSE, text: "\"They have neither knowledge nor understanding, they walk about in darkness; all the foundations of the earth are shaken.\" The failure of the &ldquo;gods&rdquo; is not merely procedural but epistemic: they walk in darkness, lacking both knowledge (factual understanding) and understanding (moral discernment). The consequence escalates to cosmic scale: the foundations of the earth shake. Biblical cosmology treats the moral order as structurally load-bearing; when justice collapses at the highest levels, the entire created order trembles. This is the spiritual underpinning of Paul&rsquo;s argument in Romans 1&mdash;the rejection of God&rsquo;s truth leads to the collapse of human civilization&rsquo;s foundations." },
              { v: "6", ref: "\"I Said, You Are Gods\"", color: GOLD, text: "\"I said, 'You are gods, sons of the Most High, all of you.'\" God himself declared these beings &ldquo;gods&rdquo; and &ldquo;sons of the Most High.&rdquo; This is crucial: their divine status is derived and declared, not intrinsic and independent. They are &lsquo;gods&rsquo; by divine designation and under divine authority. Jesus quotes this exact verse in John 10:34 in a rabbinic argument to defend his claim to divine sonship. The title &lsquo;sons of the Most High&rsquo; appears in Job 38:7 (&ldquo;sons of God&rdquo;) for heavenly beings, and here anchors the &ldquo;gods&rdquo; firmly within a theistic, hierarchical framework." },
              { v: "7", ref: "Sentence: Death Like Men", color: ROSE, text: "\"Nevertheless, like men you shall die, and fall like any prince.\" The sentence is devastating: though called gods and sons of the Most High, their injustice costs them the privileges of their status. They will die like humans&mdash;like the mortals whose cases they failed to judge fairly. &lsquo;Fall like any prince&rsquo; adds historical specificity: the pattern of powerful rulers falling, of dynasties collapsing, of the mighty being brought low is the recurring verdict of history on those who abuse delegated authority. Calvin: &ldquo;God reminds these judges that however much dignity they have been given, they hold it on loan, and it can be recalled.&rdquo;" },
              { v: "8", ref: "The Eschatological Prayer", color: GREEN, text: "\"Arise, O God, judge the earth; for you shall inherit all the nations!\" The psalm's final verse is an explosion of eschatological petition. Having described the corruption of delegated authority and the sentence against the corrupt &ldquo;gods,&rdquo; the congregation prays that God himself will rise up and take direct possession of what was delegated and abused. &ldquo;Inherit all the nations&rdquo; is the goal of redemption history from Abraham (Genesis 12:3, &ldquo;in you all the families of the earth shall be blessed&rdquo;) through the Psalter (&ldquo;Ask of me, and I will make the nations your heritage,&rdquo; Psalm 2:8) to the Revelation (&ldquo;The kingdom of the world has become the kingdom of our Lord and of his Christ,&rdquo; 11:15). Jesus is the one who inherits the nations; Psalm 82:8 prays for his reign." },
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
              <h2 style={{ color: GOLD, fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>Living Psalm 82 Today</h2>
              <p style={{ color: TEXT, lineHeight: 1.85, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 82 confronts every person who holds any form of authority&mdash;from parents to judges to pastors to employers to governments&mdash;with the same question: Are you defending the weak, or showing partiality to the powerful? And it ends with the prayer that is the proper posture for all who grieve injustice: &ldquo;Arise, O God.&rdquo;" }} />
            </div>

            {[
              {
                color: GOLD,
                title: "1. Understand That All Authority Is Delegated",
                body: `Psalm 82 establishes a truth that every authority-holder needs to hear: you are not sovereign. You are delegated. The "gods" in Psalm 82 were not independent powers; they were designated agents of the one true God, accountable to him for the exercise of their authority. When they abused that authority, God called them to account and revoked their status.

Every parent, employer, church elder, judge, politician, and leader holds authority that derives from a higher source. The Apostle Paul makes this explicit: "There is no authority except from God, and those that exist have been instituted by God" (Romans 13:1). This is not a call to uncritical submission&mdash;it is a call to every authority holder to tremble at the delegated nature of their power. They will answer for how they used it.

The specific test Psalm 82 applies is simple: How did you treat the weak, the fatherless, the afflicted, the destitute? Not how impressive was your organization, not how large was your territory, not how effective was your program&mdash;but: did the most vulnerable people under your care receive justice, protection, and advocacy? This is the divine metric, and it applies in every sphere of life.`,
                prayer: "Lord, show me how I have misused the authority you have given me. Have I shown partiality to the powerful? Have I neglected the weak? Give me grace to exercise every form of authority as a steward who will give account.",
              },
              {
                color: TEAL,
                title: "2. Defend the Vulnerable as a Form of Worship",
                body: `The four commands of verses 3&ndash;4 (give justice, maintain the right, rescue, deliver) are addressed to those who hold formal authority, but the underlying value extends to every believer. James 1:27 and Matthew 25:31&ndash;46 make care for the vulnerable the mark of genuine faith, not a specialized calling for social workers.

In the ancient world, the fatherless were the most vulnerable legal class&mdash;without a father, a child had no one to advocate for them in court, no inheritance, no social protection. The widow was equally exposed. In the modern world, equivalent categories exist: children in foster care, undocumented immigrants without legal standing, the chronically poor without social capital, the disabled who cannot advocate for themselves. Psalm 82's four commands speak directly into these categories.

The apologetics dimension is significant: the biblical case for caring for the vulnerable is rooted not in sentimentality but in theology. God himself is the defender of the fatherless (Psalm 68:5). Justice for the vulnerable is a covenant requirement, not a liberal political preference or a conservative values statement. It transcends political categories because it comes from the character of God himself. The church's witness on these matters should be shaped by Psalm 82, not by party platform.`,
                prayer: "Lord, open my eyes to the weak and fatherless in my community. Make me a defender and advocate. Let my care for the vulnerable be an act of worship to you, the God who defends the weak.",
              },
              {
                color: ROSE,
                title: "3. Grieve Injustice Without Losing Hope",
                body: `Psalm 82 gives language for the grief that comes from watching injustice prevail&mdash;when the courts fail the poor, when the powerful escape accountability, when darkness seems to walk in high places. Verse 5 names the experience: "all the foundations of the earth are shaken." This is not exaggeration; it is the accurate description of what it feels like when systemic injustice is exposed and nothing changes.

But the psalm does not end at verse 5 or verse 7. It ends with verse 8: "Arise, O God, judge the earth; for you shall inherit all the nations!" The proper response to injustice, in the biblical paradigm, is prayer. Not passive resignation, not despair, not violent revenge&mdash;but the prayer that calls the Judge of the universe to exercise his authority. This is what theologians call &ldquo;eschatological patience&rdquo;: not naivete about present evil, but confidence that the final verdict belongs to God.

The Revelation letters to the seven churches address communities experiencing exactly this tension: injustice prevailing, the wicked powerful, the saints suffering. The repeated response is: hold on; the one who holds the seven stars is also the judge who is coming with a sharp two-edged sword. Pray &ldquo;Arise, O God&rdquo; and mean it. The prayer is an act of faith in the justice that is coming.`,
                prayer: "Lord God, I bring to you the injustices I see around me. I grieve the weak who go undefended, the powerful who go unaccountable. Rise, O God; judge the earth. Let your kingdom come. May your reign, not the reign of the wicked, be the final word.",
              },
              {
                color: PURPLE,
                title: "4. Study Jesus's Use of Scripture",
                body: `One of the most rewarding applications of Psalm 82 is the close study of how Jesus uses it in John 10:34&ndash;36. This passage is a masterclass in Jewish biblical interpretation, specifically the qal wahomer argument (from the lighter case to the heavier). Jesus's use of this psalm deserves slow, careful attention.

The argument structure: (1) The Scripture called human judges &ldquo;gods&rdquo; (a concession to the weaker case). (2) Scripture cannot be broken (the irreformable authority of the text). (3) If the weaker case is true (judges can be called &ldquo;gods&rdquo;), the stronger case must be at least as true (the one the Father consecrated and sent&mdash;Jesus&mdash;can claim to be the Son of God).

Jesus is not endorsing polytheism or human deification. He is using his opponents' own Scripture to defend a claim far greater than anything Psalm 82 says about the "gods." His argument is: if you accept the psalm (and you do), you have no logical basis for calling my claim blasphemy. The lesser-to-greater structure means Jesus is claiming to be infinitely more than the "gods" of Psalm 82.

This is an invitation to learn how to read the OT with the same depth that Jesus read it. The NT authors constantly argue from the OT using techniques rooted in the Jewish interpretive tradition. Understanding these techniques&mdash;qal wahomer, gezerah shavah, analogical reasoning&mdash;opens up the NT in profound ways and deepens confidence in Scripture's unity and coherence.`,
                prayer: "Lord Jesus, you knew the Scriptures so thoroughly that you could defend your identity from a single verse of an Asaph psalm. Give me that love for your Word. Let me read the OT with the eyes you used to read it.",
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
                dangerouslySetInnerHTML={{ __html: "&ldquo;Arise, O God, judge the earth; for you shall inherit all the nations!&rdquo;<br/>Psalm 82:8" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
