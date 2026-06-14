"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#D97706";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Locust Plague",
  "Return to the Lord",
  "The Day of the Lord",
  "I Will Pour Out My Spirit",
  "Judgment and Blessing",
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
    id: "The Locust Plague",
    heading: "The Locust Plague",
    reference: "Joel 1",
    paragraphs: [
      "The Book of Joel opens with a catastrophe so total that the prophet summons the whole land to attention: &ldquo;Hear this, you elders; give ear, all inhabitants of the land! Has such a thing happened in your days, or in the days of your fathers?&rdquo; (1:2). A devastating invasion of locusts has swept across Judah, wave upon wave, stripping the land bare. &ldquo;What the cutting locust left, the swarming locust has eaten. What the swarming locust left, the hopping locust has eaten, and what the hopping locust left, the destroying locust has eaten&rdquo; (1:4). The successive armies of insects leave nothing behind.",
      "The destruction is described with vivid and mounting horror. The vine is laid waste and the fig tree splintered; the locusts have stripped off the bark and thrown it down, so that the branches are made white (1:7). The fields are wasted, the ground mourns, the grain is destroyed, the wine dries up, the oil languishes. Even the beasts of the field cry out to God, for the brooks are dried up and there is no pasture (1:18&ndash;20). The whole created order groans under the weight of the calamity.",
      "Joel calls every group in the land to lamentation. He summons the drunkards to weep and wail, for the sweet wine is cut off from their mouths (1:5). He calls the farmers and vinedressers to be ashamed, for the harvest of the field has perished (1:11). Most pointedly, he commands the priests, the ministers of the altar, to put on sackcloth and lament, for the grain offering and the drink offering are cut off from the house of the Lord (1:9, 13). The very worship of God has ground to a halt because there is nothing left to offer.",
      "The locust plague, terrible in itself, is presented by Joel as something more than a natural disaster. It is a summons, a sign, a wake-up call from God to a complacent people. The prophet sees in the devouring swarms a picture of divine judgment, and he hears in the silenced sanctuary a warning of something far greater still to come. The plague becomes a window through which Joel teaches the nation to read its history and to tremble before the living God.",
      "And so Joel issues the central command of the book&rsquo;s opening: &ldquo;Consecrate a fast; call a solemn assembly. Gather the elders and all the inhabitants of the land to the house of the Lord your God, and cry out to the Lord&rdquo; (1:14). The disaster is meant to drive the people not into mere despair but into earnest, corporate seeking of God. The locusts have eaten everything, but they have not eaten the door of repentance, which still stands open.",
    ],
  },
  {
    id: "Return to the Lord",
    heading: "Return to the Lord",
    reference: "Joel 2:12&ndash;17",
    paragraphs: [
      "At the heart of Joel&rsquo;s message lies one of the most tender calls to repentance in all the prophets. &ldquo;Yet even now,&rdquo; declares the Lord &mdash; even now, after the locusts, even now in the shadow of greater judgment &mdash; &ldquo;return to me with all your heart, with fasting, with weeping, and with mourning&rdquo; (2:12). The door is not yet shut. The God who sent the warning is the same God who pleads for his people to come home to him.",
      "Joel insists that this return must be inward and not merely outward. &ldquo;Rend your hearts and not your garments&rdquo; (2:13). It was the custom in Israel to tear one&rsquo;s clothing as a sign of grief, but Joel warns against a repentance of torn cloth and untouched hearts. God is not deceived by ceremony. He looks for a heart broken over its sin, a contrition that goes deeper than any visible ritual of mourning.",
      "The motive for this return is the very character of God: &ldquo;Return to the Lord your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love; and he relents over disaster&rdquo; (2:13). Joel reaches back to the great revelation of God&rsquo;s name to Moses at Sinai. The people are invited to turn not to a tyrant but to a God whose deepest disposition is mercy, who takes no pleasure in judgment and is ready to forgive the moment his people turn.",
      "Joel even dares to hold out a humble hope: &ldquo;Who knows whether he will not turn and relent, and leave a blessing behind him&rdquo; (2:14) &mdash; a blessing of grain and drink offerings restored to the house of the Lord. There is no presumption here, only a reverent confidence that the merciful God may yet pour out good where there had been only ruin. Repentance is offered not as a bargain but as a casting of the whole nation upon the kindness of God.",
      "The prophet then calls for the most solemn assembly imaginable, sparing no one. &ldquo;Blow the trumpet in Zion; consecrate a fast; call a solemn assembly; gather the people&rdquo; (2:15&ndash;16). The elders, the children, even nursing infants are to be gathered; the bridegroom is to come out of his chamber and the bride from her room. Between the vestibule and the altar the priests are to weep and plead, &ldquo;Spare your people, O Lord, and make not your heritage a reproach&rdquo; (2:17). The whole community is summoned to throw itself upon the mercy of God.",
    ],
  },
  {
    id: "The Day of the Lord",
    heading: "The Day of the Lord",
    reference: "Joel 2:1&ndash;11",
    paragraphs: [
      "Running like a thread through the whole prophecy is the great theme of the Day of the Lord &mdash; that decisive day when God breaks into history to judge the wicked and vindicate his own. Joel proclaims it with urgency: &ldquo;Blow a trumpet in Zion; sound an alarm on my holy mountain! Let all the inhabitants of the land tremble, for the day of the Lord is coming; it is near&rdquo; (2:1). The locust plague was a foretaste; the Day itself is a reckoning of cosmic scale.",
      "Joel describes the coming day as a day of darkness and gloom, a day of clouds and thick darkness (2:2). He paints the advancing judgment in the imagery of an unstoppable army &mdash; whether a heightened vision of the locusts or a literal invading host, it sweeps forward like blackness spread upon the mountains. Before it the land is like the garden of Eden, but behind it lies a desolate wilderness, and nothing escapes (2:3).",
      "The army of the Day of the Lord is irresistible and disciplined. They run like mighty men and scale the wall like soldiers; each marches in his path and does not swerve (2:7). They leap upon the city, run upon the walls, climb into the houses, and enter through the windows like a thief (2:9). At their coming the earth quakes, the heavens tremble, the sun and the moon are darkened, and the stars withdraw their shining (2:10). The created order itself convulses before the advancing judgment of God.",
      "Above this terrible host stands the Lord himself: &ldquo;The Lord utters his voice before his army, for his camp is exceedingly great; he who executes his word is powerful&rdquo; (2:11). This is the heart of the dread. The locusts, the army, the darkening heavens &mdash; all of it is under the command of God, who is leading the charge. And Joel presses the unanswerable question home to every conscience: &ldquo;For the day of the Lord is great and very awesome; who can endure it?&rdquo; (2:11).",
      "Yet the Day of the Lord in Joel is never only terror. It is great precisely because God is acting in it, and the same Day that brings ruin upon the unrepentant brings deliverance to those who call upon his name. The whole purpose of the trumpet blast is to drive the people to repentance before the Day arrives, so that when it comes it may find them sheltered in the mercy of the God who is slow to anger and abounding in steadfast love.",
    ],
  },
  {
    id: "I Will Pour Out My Spirit",
    heading: "I Will Pour Out My Spirit",
    reference: "Joel 2:28&ndash;32",
    paragraphs: [
      "From the depths of judgment Joel rises to the mountaintop of promise, and here the book reaches its glory. &ldquo;And it shall come to pass afterward, that I will pour out my Spirit on all flesh; your sons and your daughters shall prophesy, your old men shall dream dreams, and your young men shall see visions&rdquo; (2:28). What had once been the privilege of a few prophets and kings is now promised to the whole people of God, poured out like a flood upon all.",
      "The sweep of the promise is breathtaking in its inclusiveness. &ldquo;Even on the male and female servants in those days I will pour out my Spirit&rdquo; (2:29). Sons and daughters, old and young, slave and free &mdash; no barrier of age, gender, or social standing will exclude anyone from this outpouring. The Spirit, once given in measure, is now to be lavished &ldquo;on all flesh,&rdquo; anticipating a community in which the knowledge of God floods every heart.",
      "Joel surrounds this promise with the cosmic signs of the Day of the Lord: wonders in the heavens and on the earth, blood and fire and columns of smoke; the sun turned to darkness and the moon to blood, before the great and awesome day of the Lord comes (2:30&ndash;31). The outpouring of the Spirit and the coming of the Day are bound together, for the gift of the Spirit is itself a sign that the last days, the days of fulfillment, have begun.",
      "Then comes the gospel promise that crowns it all: &ldquo;And it shall come to pass that everyone who calls on the name of the Lord shall be saved&rdquo; (2:32). In the midst of judgment a way of salvation stands wide open, available to all who simply call upon God. On Mount Zion and in Jerusalem there shall be those who escape, a remnant whom the Lord calls. Grace is offered freely to every soul that turns to him.",
      "This promise found its great fulfillment on the Day of Pentecost. When the Spirit fell upon the disciples and they spoke in tongues, the apostle Peter stood and declared, &ldquo;This is what was uttered through the prophet Joel&rdquo; (Acts 2:16), quoting these very verses to the astonished crowd. The pouring out of the Spirit upon the church, and the offer of salvation to all who call on the name of the Lord, is Joel&rsquo;s prophecy come to life &mdash; the harvest of the Spirit succeeding the years the locusts had eaten.",
    ],
  },
  {
    id: "Judgment and Blessing",
    heading: "Judgment and Blessing",
    reference: "Joel 2:18&ndash;27; 3",
    paragraphs: [
      "When the people return to the Lord, his answer is swift and tender. &ldquo;Then the Lord became jealous for his land and had pity on his people&rdquo; (2:18). He promises to send grain, wine, and oil, to satisfy them fully and make them no more a reproach among the nations (2:19). The Lord drives away the invading host and reverses the desolation, and the land that had mourned is told to be glad and rejoice, for the Lord has done great things (2:21).",
      "At the center of this restoration stands one of the most beloved promises of grace in all of Scripture: &ldquo;I will restore to you the years that the swarming locust has eaten&rdquo; (2:25). The very years that seemed devoured and lost are not beyond God&rsquo;s power to redeem. The God who sent the locusts as a warning now promises to undo their ruin, to fill the threshing floors with grain and the vats to overflow with wine and oil (2:24).",
      "The aim of this restoration is more than full barns; it is the renewed knowledge of God. &ldquo;You shall eat in plenty and be satisfied, and praise the name of the Lord your God, who has dealt wondrously with you&hellip; You shall know that I am in the midst of Israel, and that I am the Lord your God and there is none else&rdquo; (2:26&ndash;27). The blessing is designed to lead the heart back to the Giver, that his people may never again be put to shame.",
      "The final chapter turns to the nations and the great assize of the Day of the Lord. God will gather all nations into the Valley of Jehoshaphat and enter into judgment with them there on behalf of his people (3:2). The instruments of war are summoned with terrible irony: &ldquo;Beat your plowshares into swords, and your pruning hooks into spears&rdquo; (3:10) &mdash; a reversal of Isaiah&rsquo;s vision of peace, as the nations are called up to meet their reckoning. &ldquo;Multitudes, multitudes, in the valley of decision! For the day of the Lord is near in the valley of decision&rdquo; (3:14).",
      "Joel closes with a vision of overflowing blessing upon the people of God. &ldquo;In that day the mountains shall drip sweet wine, and the hills shall flow with milk, and all the streambeds of Judah shall flow with water; and a fountain shall come forth from the house of the Lord&rdquo; (3:18). The Lord himself dwells in Zion, the land is cleansed, and the final word is one of security and presence: &ldquo;The Lord dwells in Zion&rdquo; (3:21). The book that began amid stripped fields and silenced altars ends with a fountain flowing from the house of God and his people dwelling safely in his midst forever.",
    ],
  },
];

const videoItems = [
  { videoId: "uOPN-l5Ixns", title: "BibleProject - Overview - Joel" },
  { videoId: "9fnJSLG3rwo", title: "The Day of the Lord in the Book of Joel" },
  { videoId: "f8ldQUPcmlk", title: "Rend Your Hearts - Repentance in Joel" },
  { videoId: "Ozkb1Nb1RkI", title: "I Will Pour Out My Spirit - Joel and Pentecost" },
];

export default function ChristianBookOfJoelGuidePage() {
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
            The Book of Joel
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            A devastating locust plague becomes a trumpet call to repentance &mdash; the warning of the Day of the Lord, the tender plea to rend the heart and return to a gracious God, the great promise of the Spirit poured out on all flesh, and the final restoration of the years the locusts had eaten.
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
              Deepen your study of Joel through visual teaching on the locust plague, the call to return to the Lord, the Day of the Lord, and the great outpouring of the Spirit on all flesh.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>I Will Restore the Years</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Joel takes a ruined land and turns it into a sermon, teaching that disaster is meant to drive us back to a God who is gracious and merciful, slow to anger, and abounding in steadfast love. Its enduring promise still stands: rend your heart and return, for everyone who calls on the name of the Lord shall be saved, and the years the locusts have eaten he is able to restore.
          </p>
        </div>
      </main>
    </div>
  );
}
