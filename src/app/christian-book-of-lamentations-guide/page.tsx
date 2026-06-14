"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3B82F6";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Weeping Prophet",
  "The Desolation of Zion",
  "Great Is Your Faithfulness",
  "The Cup of Suffering",
  "Restore Us O Lord",
  "Videos",
] as const;
type Tab = (typeof TABS)[number];

interface Section {
  id: Tab;
  heading: string;
  reference: string;
  paragraphs: string[];
}

const sections: Section[] = [
  {
    id: "The Weeping Prophet",
    heading: "The Weeping Prophet",
    reference: "Lamentations &amp; Jeremiah",
    paragraphs: [
      "The Book of Lamentations is a collection of five poems of grief, written in the smoldering ruins of Jerusalem after the Babylonian army had broken through her walls in 586 BC, burned the Temple of the Lord, and carried her people into exile. It is the cry of a people who have lost everything &mdash; their city, their sanctuary, their freedom, and seemingly their God&rsquo;s favor. Few books in all of Scripture sit so unflinchingly in the presence of suffering.",
      "By long tradition the book is ascribed to Jeremiah, the prophet who had warned Judah for forty years that judgment was coming if she would not turn back to the Lord. He had pleaded and wept and been ignored, beaten, and imprisoned for his message. Now, having watched his warnings come terribly true, he is remembered as &ldquo;the weeping prophet,&rdquo; the one who lived to mourn the very disaster he had foretold. &ldquo;Oh that my head were waters, and my eyes a fountain of tears,&rdquo; he had cried (Jeremiah 9:1).",
      "Lamentations does not turn away from the horror of what happened. It speaks plainly of famine so severe that mothers could not feed their children, of the slaughter of priest and prophet in the sanctuary, of nobles led away in chains, of a city that had been &ldquo;great among the nations&rdquo; now sitting alone like a widow (1:1). The poet refuses to soften the truth or hide the cost of sin and the weight of God&rsquo;s judgment.",
      "Yet this is no mere outpouring of raw emotion. The book is among the most carefully crafted poetry in the Bible. Four of its five chapters are acrostics, each verse or set of verses beginning with the successive letters of the Hebrew alphabet, from aleph to taw. Even in the chaos of grief, the poet imposes an order, working through sorrow from A to Z &mdash; as if to say that there is a way to lament rightly, to give pain a shape and carry it before God.",
      "This is the gift Lamentations offers the church: permission to grieve, and a pattern for grieving faithfully. It does not pretend that everything is well; it does not rush to easy comfort. Instead it teaches God&rsquo;s people how to bring their deepest losses and their hardest questions honestly into the presence of the Lord &mdash; and how, even there, to keep hold of hope.",
      "For all its darkness, Lamentations is ultimately a book of faith. It is addressed to God; it is prayed in his hearing; and at its very center it dares to declare that his mercy has not failed. The weeping prophet weeps before the One he still trusts, and that is what makes his tears a prayer rather than mere despair.",
    ],
  },
  {
    id: "The Desolation of Zion",
    heading: "The Desolation of Zion",
    reference: "Lamentations 1&ndash;2",
    paragraphs: [
      "The first poem opens with a single word of grief &mdash; &ldquo;How!&rdquo; &mdash; the same word that gives the book its Hebrew name. &ldquo;How lonely sits the city that was full of people! How like a widow has she become, she who was great among the nations&rdquo; (1:1). Jerusalem, once crowded and glorious, the joy of the whole earth, now sits abandoned, weeping bitterly in the night with none to comfort her.",
      "The poet personifies the fallen city as a grieving woman, stripped of dignity and friends. &ldquo;Is it nothing to you, all you who pass by? Look and see if there is any sorrow like my sorrow&rdquo; (1:12). Her roads mourn, her gates are desolate, her priests groan, her young women grieve. Those who once honored her now despise her, for they have seen her nakedness. The shame of defeat is as bitter as its loss.",
      "The second poem turns to the hand behind the catastrophe. With unsettling honesty it confesses that this destruction was not merely the work of Babylon but the judgment of God upon his own people. &ldquo;The Lord has become like an enemy; he has swallowed up Israel&rdquo; (2:5). He has broken down the strongholds, laid the ramparts low, and brought down to the ground in dishonor the kingdom and its rulers.",
      "Most painful of all, the Lord has rejected his own sanctuary. &ldquo;He has scorned his altar, disowned his sanctuary&rdquo; (2:7). The Temple that Solomon built, where the glory of God had once descended in a cloud, now lies in ruins, its festivals forgotten, its walls thrown down. The unthinkable has happened: the dwelling place of God among his people has been given over to the flames.",
      "The poet does not flinch from the human cost. Children and infants faint in the streets; they cry to their mothers for bread and pour out their lives in their mothers&rsquo; arms. The elders sit silent on the ground with dust on their heads. It is a portrait of total devastation, and the poet insists that we look at it directly rather than turn our eyes away.",
      "And yet even in this darkest section, the right response begins to emerge: not numbness or denial, but tears poured out before God. &ldquo;Cry aloud to the Lord&hellip; let tears stream down like a torrent day and night&rdquo; (2:18). The poet calls Zion to lift her hands to God for the lives of her children. The desolation is real, but it is carried to the only One who can finally answer it.",
    ],
  },
  {
    id: "Great Is Your Faithfulness",
    heading: "Great Is Your Faithfulness",
    reference: "Lamentations 3",
    paragraphs: [
      "At the very center of the book, in its third and longest poem, the darkness suddenly breaks. The chapter begins in the depths &mdash; &ldquo;I am the man who has seen affliction under the rod of his wrath&rdquo; (3:1) &mdash; describing a soul walled in, weighed down with chains, hunted and broken, with hope perished from the Lord. The lament reaches its lowest point, and the speaker tastes the full bitterness of despair.",
      "Then, like dawn breaking over the ruins, the poet turns: &ldquo;But this I call to mind, and therefore I have hope&rdquo; (3:21). In the very middle of the book stands its beating heart, one of the most beloved passages in all of Scripture: &ldquo;The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness&rdquo; (3:22&ndash;23).",
      "It is a stunning declaration to make from the ashes of a ruined city. The poet does not say that the suffering was not real, nor that the grief was unwarranted. He says rather that beneath and beyond the present darkness, the character of God remains unchanged &mdash; his love still steadfast, his mercies still fresh with every sunrise. Even when everything else has been swept away, the faithfulness of God endures.",
      "From this center the poet draws out a quiet theology of waiting and trust. &ldquo;The Lord is my portion, says my soul, therefore I will hope in him&rdquo; (3:24). &ldquo;It is good that one should wait quietly for the salvation of the Lord&rdquo; (3:26). He counsels patience under God&rsquo;s hand, for &ldquo;the Lord will not cast off forever, but, though he cause grief, he will have compassion according to the abundance of his steadfast love&rdquo; (3:31&ndash;32).",
      "This is the great turning point not only of the chapter but of the whole book. Lamentations is built so that its message of hope sits literally at its center, surrounded on every side by grief. The arrangement preaches its own sermon: hope is found not by escaping sorrow but by passing through the heart of it and discovering that God is still there, still merciful, still faithful.",
      "These verses have given the church a language for hope in its hardest seasons, and they inspired the hymn &ldquo;Great Is Thy Faithfulness,&rdquo; sung by suffering believers for generations. They remind us that the mercies of God are not exhausted by yesterday&rsquo;s troubles; each new morning brings a fresh supply, and his faithfulness is great enough to meet whatever the day may hold.",
    ],
  },
  {
    id: "The Cup of Suffering",
    heading: "The Cup of Suffering",
    reference: "Lamentations 4",
    paragraphs: [
      "The fourth poem returns to the suffering of the siege, contrasting the city&rsquo;s former glory with its present ruin. &ldquo;How the gold has grown dim, how the pure gold is changed!&rdquo; (4:1). The precious sons of Zion, once worth their weight in fine gold, are now reckoned as common clay pots. What was once radiant has been tarnished beyond recognition.",
      "The horrors of the famine are described without flinching. Those who once feasted on delicacies now perish in the streets; those raised in purple cling to ash heaps. The poet says that those slain by the sword were more fortunate than those who wasted away by hunger, pierced for lack of the fruits of the field (4:9). Suffering of this depth is almost beyond words, yet the poet bears witness to it rather than pass over it in silence.",
      "Through it all the book holds firmly to a hard truth: this suffering was the consequence of sin and the righteous judgment of God. &ldquo;The Lord gave full vent to his wrath&hellip; because of the sins of her prophets and the iniquities of her priests&rdquo; (4:11, 13). The leaders who should have guarded the people had led them astray, and the whole nation reaped what had been sown over generations of unfaithfulness.",
      "This honesty about judgment is not cruelty but truthfulness. Lamentations refuses the comfort of blaming everything on Babylon or on bad fortune. It insists that Judah&rsquo;s wounds were self-inflicted through covenant betrayal, and that God&rsquo;s justice is real. Only by naming sin honestly can the poet also hope honestly for mercy, for a God who merely overlooked evil could not truly be trusted to set things right.",
      "Even here, though, the poem does not end without a glance toward the future. It speaks of the punishment of Zion as something that will be accomplished and completed &mdash; &ldquo;the punishment of your iniquity, O daughter of Zion, is accomplished; he will keep you in exile no longer&rdquo; (4:22). The cup of suffering, bitter as it is, will not be poured out forever.",
      "Christians have long heard in this cup of suffering a foreshadowing of another. The grief of Jerusalem, drinking the cup of God&rsquo;s judgment for sin, points ahead to the One who would weep over that same city and then drink the cup of wrath in the place of his people &mdash; bearing in himself the judgment they deserved, so that mercy might finally triumph.",
    ],
  },
  {
    id: "Restore Us O Lord",
    heading: "Restore Us O Lord",
    reference: "Lamentations 5",
    paragraphs: [
      "The fifth and final poem is a community prayer, no longer an acrostic but a direct and urgent appeal to God. &ldquo;Remember, O Lord, what has befallen us; look, and see our disgrace&rdquo; (5:1). The people lay their whole situation before the Lord &mdash; their lost inheritance, their orphaned children, their slavery, their hunger, their shame &mdash; asking him to look and to remember.",
      "The prayer catalogues the bitterness of life under judgment. They must buy their own water and pay for their wood; they are pursued and weary and find no rest; the joy of their hearts has ceased and their dancing has turned to mourning. &ldquo;The crown has fallen from our head; woe to us, for we have sinned!&rdquo; (5:16). Once more sin is confessed openly, and the loss is owned as the fruit of the people&rsquo;s own rebellion.",
      "Yet at the lowest point the prayer rises to a confession of faith that anchors all its grief: &ldquo;But you, O Lord, reign forever; your throne endures to all generations&rdquo; (5:19). However shaken the earthly city may be, the heavenly King is not moved. His reign outlasts every empire, every exile, every disaster. This is the rock on which the final plea is built.",
      "And so the book ends with a cry for restoration: &ldquo;Restore us to yourself, O Lord, that we may be restored! Renew our days as of old&rdquo; (5:21). The deepest longing of the prayer is not merely for the rebuilding of walls or the return of comfort, but for renewed fellowship with God himself &mdash; to be brought back to him, that everything else might be made new.",
      "The very last verse leaves the matter unresolved, hanging on a note of honest uncertainty: &ldquo;unless you have utterly rejected us, and you remain exceedingly angry with us&rdquo; (5:22). Lamentations does not end with a tidy resolution. It ends in the posture of waiting, having voiced both its grief and its hope, and now trusting itself to the mercy of God without yet seeing the answer.",
      "This unfinished ending is itself a kind of faith. The book lays the whole weight of its sorrow and its longing at the feet of the Lord and waits there, refusing both despair and pretense. For the church that prays these words, the answer comes in the gospel: the God who seemed for a time to have hidden his face did not reject his people forever, but in Christ restored them to himself and made all things new.",
    ],
  },
];

const videoItems = [
  { videoId: "p8GtSn0Km1Y", title: "BibleProject - Overview - Lamentations" },
  { videoId: "RSK2sJ4HZdw", title: "Jeremiah the Weeping Prophet - The Fall of Jerusalem" },
  { videoId: "yk2Dr15h0xY", title: "Great Is Your Faithfulness - Lamentations 3 Explained" },
  { videoId: "Qb6lT9r7H3o", title: "Restore Us O Lord - Hope in the Ruins of Lamentations" },
];

export default function ChristianBookOfLamentationsGuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Lamentations
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Five poems of grief over the fall of Jerusalem &mdash; the weeping of Jeremiah, the desolation of Zion, the stunning center of hope that the Lord&rsquo;s mercies are new every morning, the honest confession of suffering under God&rsquo;s righteous judgment, and the closing prayer that God would restore his people to himself.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${activeTab === t ? ACCENT : BORDER}`,
                background: activeTab === t ? ACCENT : CARD,
                color: activeTab === t ? "#fff" : MUTED,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
              dangerouslySetInnerHTML={{ __html: t }}
            />
          ))}
        </nav>

        {currentSection && (
          <section>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: 0 }} dangerouslySetInnerHTML={{ __html: currentSection.heading }} />
            </div>
            <div style={{ color: ACCENT, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {currentSection.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{ color: i === 0 ? TEXT : MUTED, fontSize: "1.05rem", lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Lamentations through visual teaching on the fall of Jerusalem, the grief of the weeping prophet, the hope at the heart of the book, and the prayer for God to restore his people.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((v) => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>His Mercies Are New Every Morning</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Lamentations gives the church a language for grief that does not flinch from suffering or excuse sin, yet refuses to surrender hope. At its very center, from the ashes of a ruined city, it dares to confess that the steadfast love of the Lord never ceases and his mercies are new every morning. It teaches us to weep before the God who is still faithful, and to pray, &ldquo;Restore us to yourself, O Lord, that we may be restored.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
