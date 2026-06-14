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
  "The Pride of Edom",
  "The Brother Betrayal",
  "The Day of the Lord",
  "Judgment on Edom",
  "The Kingdom Restored",
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
    id: "The Pride of Edom",
    heading: "The Pride of Edom",
    reference: "Obadiah 1&ndash;4",
    paragraphs: [
      "The Book of Obadiah is the shortest book in the Old Testament &mdash; a single chapter of just twenty-one verses &mdash; yet it carries the weight of a thunderclap. It is a vision concerning Edom, the nation descended from Esau, that dwelt in the rugged highlands south of the Dead Sea. The prophet&rsquo;s message opens not with greeting or comfort but with a summons to battle: &ldquo;We have heard a report from the Lord, and a messenger has been sent among the nations: &lsquo;Rise up! Let us rise against her for battle!&rsquo;&rdquo; (v. 1). From its first breath the book announces that Edom&rsquo;s day of reckoning has come.",
      "The heart of Edom&rsquo;s sin is named at once: pride. &ldquo;The pride of your heart has deceived you, you who live in the clefts of the rocks, in your lofty dwelling, who say in your heart, &lsquo;Who will bring me down to the ground?&rsquo;&rdquo; (v. 3). Edom had carved its strongholds into the high red cliffs of Petra and Sela, fortress-cities approached only through narrow gorges, seemingly impregnable. Perched among the eagles of the crags, the Edomites believed themselves untouchable, beyond the reach of any army and beyond the reach of God himself.",
      "It is the deception of every proud heart &mdash; to mistake natural advantage for divine favor, and to imagine that height of dwelling means safety from judgment. Edom looked down from its mountain fastness upon the nations below and concluded that no power could dislodge it. But the prophet exposes the lie at the center of this confidence: a heart deceived by its own pride has already begun to fall, for it has cut itself off from the only One who could truly secure it.",
      "Against this towering self-assurance the Lord speaks a word of devastating reversal: &ldquo;Though you soar aloft like the eagle, though your nest is set among the stars, from there I will bring you down, declares the Lord&rdquo; (v. 4). No height is too high for the God who set the stars in their places. The very loftiness in which Edom trusted becomes the measure of how far it will fall. The God who humbles the proud and exalts the lowly will reach into the clefts of the rock and pull Edom down to the ground.",
      "Obadiah&rsquo;s opening is a permanent warning to every nation, every people, and every heart that builds its security on anything other than the living God. The eagle&rsquo;s nest among the stars offers no refuge from the One who made the stars. Pride that says &ldquo;Who will bring me down?&rdquo; has already pronounced its own sentence, for the answer rings back from heaven with terrible certainty: the Lord will bring you down.",
    ],
  },
  {
    id: "The Brother Betrayal",
    heading: "The Brother Betrayal",
    reference: "Obadiah 5&ndash;14",
    paragraphs: [
      "To understand the fierceness of Obadiah&rsquo;s indictment, one must reach back to the very beginning of these two nations. Edom and Israel were not strangers but brothers. Edom descended from Esau, and Israel from Jacob &mdash; the twin sons of Isaac and Rebekah, who struggled together even in the womb. &ldquo;Two nations are in your womb,&rdquo; the Lord had told Rebekah, &ldquo;and two peoples from within you shall be divided.&rdquo; The grudge between these peoples was an ancient one, born when Esau sold his birthright and lost his blessing to his younger brother Jacob.",
      "What the Lord condemns is that this brotherhood was utterly betrayed in the day of Israel&rsquo;s greatest need. &ldquo;Because of the violence done to your brother Jacob, shame shall cover you, and you shall be cut off forever&rdquo; (v. 10). The word &ldquo;brother&rdquo; lands like a hammer. Edom did not merely oppose a rival nation; it turned upon its own kin. The sin is not only cruelty but treachery against blood, the cold hostility of one who should have shown the loyalty of family.",
      "The prophet paints the scene with painful precision. &ldquo;On the day that you stood aloof, on the day that strangers carried off his wealth and foreigners entered his gates and cast lots for Jerusalem, you were like one of them&rdquo; (v. 11). When Jerusalem fell and her enemies plundered her, Edom did not lift a hand to help. It stood by, arms folded, watching the destruction of its brother with quiet satisfaction. To stand aloof while the innocent suffer is, in God&rsquo;s eyes, to share the guilt of those who strike the blow.",
      "But Edom did more than watch. A series of solemn warnings reveals its active malice: &ldquo;Do not gloat over the day of your brother in the day of his misfortune&hellip; do not boast in the day of distress&hellip; do not enter the gate of my people in the day of their calamity&hellip; do not loot his wealth&hellip; do not stand at the crossroads to cut off his fugitives&hellip; do not hand over his survivors in the day of distress&rdquo; (vv. 12&ndash;14). Edom rejoiced at Jerusalem&rsquo;s ruin, joined the looting, and hunted down the refugees who fled, handing the survivors over to their enemies.",
      "This is the betrayal that God will not overlook. There is a particular bitterness in cruelty shown to one&rsquo;s own family, in gloating over a brother&rsquo;s downfall, in profiting from a kinsman&rsquo;s calamity. Edom stood at the crossroads not to rescue but to capture, turning the day of Jacob&rsquo;s sorrow into an occasion for plunder and slaughter. The Lord saw every act, and he names each one in turn.",
      "The principle that runs beneath these verses reaches far beyond Edom. God holds nations and individuals accountable not only for the harm they do but for the help they withhold, not only for active cruelty but for cold indifference to suffering they could have eased. To stand aloof, to gloat, to profit from another&rsquo;s ruin &mdash; these are sins that cry out to heaven, and Obadiah declares that they will be answered.",
    ],
  },
  {
    id: "The Day of the Lord",
    heading: "The Day of the Lord",
    reference: "Obadiah 15&ndash;16",
    paragraphs: [
      "At the midpoint of the book the vision widens dramatically. What began as an oracle against one small nation suddenly opens onto a cosmic horizon: &ldquo;For the day of the Lord is near upon all the nations&rdquo; (v. 15). Edom&rsquo;s judgment is not an isolated event but a foretaste of a universal reckoning, the great Day of the Lord when every nation will be brought before the throne of the righteous Judge of all the earth.",
      "The Day of the Lord is one of the central themes of the prophets &mdash; the appointed time when God will set right what is wrong, when the proud will be humbled and the oppressed vindicated, when the moral order of the universe, so often hidden behind the apparent triumph of the wicked, will be made plain for all to see. It is a day of darkness for the rebellious and a day of deliverance for the faithful, the day when the patience of God gives way at last to the justice of God.",
      "The governing principle of that day is stated with stark simplicity: &ldquo;As you have done, it shall be done to you; your deeds shall return on your own head&rdquo; (v. 15). This is the law of divine recompense, the boomerang of judgment. Edom stood aloof, looted, and cut down the fugitives &mdash; and the very same measure will be meted out to Edom. The harvest a nation reaps is the seed it has sown; the cup it forced upon others will be pressed to its own lips.",
      "That image of the cup is made explicit: &ldquo;For as you have drunk on my holy mountain, so all the nations shall drink continually; they shall drink and swallow, and shall be as though they had never been&rdquo; (v. 16). Edom had drunk in celebration on Zion in the day of Jerusalem&rsquo;s fall, reveling on God&rsquo;s holy mountain over the ruin of his people. Now the nations will drink the cup of wrath until they stagger and vanish, swallowed up as if they had never existed.",
      "The Day of the Lord therefore stands as both warning and promise. To every proud and violent power it warns that the deeds done in darkness will return upon their own heads, that no fortress in the clefts of the rock can shelter a guilty nation from the God who judges with perfect justice. And to every suffering and faithful soul it promises that the wrongs of history are not forgotten, that the Judge of all the earth will surely do right, and that the day of his reckoning draws near.",
    ],
  },
  {
    id: "Judgment on Edom",
    heading: "Judgment on Edom",
    reference: "Obadiah 5&ndash;9, 17&ndash;18",
    paragraphs: [
      "The judgment pronounced upon Edom is total and irreversible. Using a striking comparison, the prophet declares that ordinary destruction at least leaves something behind: &ldquo;If thieves came to you, if plunderers came by night&mdash;how you have been destroyed!&mdash;would they not steal only enough for themselves? If grape gatherers came to you, would they not leave gleanings?&rdquo; (v. 5). Thieves take only what they want; harvesters leave gleanings for the poor. But Edom&rsquo;s ruin will be so thorough that nothing remains. &ldquo;How Esau has been pillaged, his treasures sought out!&rdquo; (v. 6).",
      "Edom&rsquo;s downfall will come, fittingly, through betrayal &mdash; the very sin it practiced against its brother. &ldquo;All your allies have driven you to your border; those at peace with you have deceived you; they have prevailed against you&rdquo; (v. 7). The nation that abandoned its kinsman in his hour of need will itself be abandoned by its friends, deceived by those it trusted, ambushed by those who ate its bread. The treachery Edom dealt out returns upon Edom in full measure.",
      "Edom was renowned in the ancient world for its wisdom and its mighty men, but neither will avail in the day of judgment. &ldquo;Will I not on that day, declares the Lord, destroy the wise men out of Edom, and understanding out of Mount Esau? And your mighty men shall be dismayed, O Teman, so that every man from Mount Esau will be cut off by slaughter&rdquo; (vv. 8&ndash;9). The famed counselors and warriors of Edom will be stripped of all their strength, for no human wisdom or might can stand against the purpose of God.",
      "The contrast with the fate of God&rsquo;s people could not be sharper. &ldquo;But in Mount Zion there shall be those who escape, and it shall be holy&rdquo; (v. 17). Where Edom is consumed, Zion endures; where the proud are cut off, the humble find refuge. The mountain that Edom had trampled in the day of Jerusalem&rsquo;s fall will become a place of deliverance and holiness, a sanctuary for the survivors of God&rsquo;s people.",
      "The final image of Edom&rsquo;s judgment is one of fire and stubble: &ldquo;The house of Jacob shall be a fire, and the house of Joseph a flame, and the house of Esau stubble; they shall burn them and consume them, and there shall be no survivor for the house of Esau, for the Lord has spoken&rdquo; (v. 18). The roles are completely reversed. The brother once plundered becomes the consuming flame; the proud nation once perched among the stars becomes dry stubble swept away by fire. And the certainty of it rests on the surest of all foundations: the Lord has spoken.",
    ],
  },
  {
    id: "The Kingdom Restored",
    heading: "The Kingdom Restored",
    reference: "Obadiah 19&ndash;21",
    paragraphs: [
      "For all its words of judgment, the Book of Obadiah does not end in destruction. The closing verses turn from the falling of Edom to the rising of God&rsquo;s people, sketching a vision of restoration in which the dispossessed reclaim their inheritance and the boundaries of God&rsquo;s kingdom expand. Those who were driven from their homes and scattered among the nations will return to possess the land &mdash; the Negeb, the Shephelah, the fields of Ephraim and Samaria, and even the territory of Esau itself.",
      "&ldquo;The exiles of this host of the people of Israel shall possess the land of the Canaanites as far as Zarephath, and the exiles of Jerusalem who are in Sepharad shall possess the cities of the Negeb&rdquo; (v. 20). The very scattering that seemed to mark the end of God&rsquo;s people becomes the prelude to their gathering. The God who let his people be exiled is the God who will bring them home, restoring to them more than they had lost and overturning the verdict that their enemies had pronounced.",
      "The book reaches its climax in a single, soaring promise: &ldquo;Saviors shall go up to Mount Zion to rule Mount Esau, and the kingdom shall be the Lord&rsquo;s&rdquo; (v. 21). Here is the true destination of the whole prophecy. The conflict between Jacob and Esau, the ancient grudge between the brothers, the rise and fall of nations &mdash; all of it resolves into the establishment of one universal reign. The kingdoms of this world give way to the kingdom of our God.",
      "This is the hope that lifts Obadiah above its grim catalog of judgment. Behind the rise and fall of Edom and Israel stands a higher purpose: the coming of a kingdom that cannot be shaken. The proud powers that exalt themselves among the stars will be brought down, and in their place will rise the everlasting rule of the Lord, whose throne is established in righteousness and whose dominion has no end.",
      "And so the shortest book in the Old Testament closes with one of its grandest declarations. Whatever empires rise in their pride, whatever nations betray and plunder and gloat, the final word does not belong to them. It belongs to the King of kings, on whose holy mountain the saved shall stand. The kingdom &mdash; the whole of it, in heaven and on earth &mdash; shall be the Lord&rsquo;s.",
    ],
  },
];

const videoItems = [
  { videoId: "i4ogCrEoG5s", title: "BibleProject - Overview - Obadiah" },
  { videoId: "yYHQpls2u-Q", title: "The Book of Obadiah Explained - Pride and the Fall of Edom" },
  { videoId: "5SBQQVZdF6Q", title: "Edom and Israel - The Ancient Grudge Between Esau and Jacob" },
  { videoId: "WiM6E9poEvU", title: "The Day of the Lord and the Kingdom Restored - Obadiah" },
];

export default function ChristianBookOfObadiahGuidePage() {
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
            The Book of Obadiah
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The shortest book in the Old Testament &mdash; a single chapter of fierce judgment against Edom for its pride dwelling in the high rocks, its betrayal of its brother Israel in the day of Jerusalem&rsquo;s fall, and the coming Day of the Lord when &ldquo;the kingdom shall be the Lord&rsquo;s.&rdquo;
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
              Deepen your study of Obadiah through visual teaching on the pride of Edom, the ancient grudge between Esau and Jacob, the betrayal of Jerusalem, and the coming Day of the Lord when the kingdom shall be his.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Kingdom Shall Be the Lord&rsquo;s</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Obadiah strips away every false security, exposing the pride that imagines itself beyond the reach of God and the cold betrayal that turns against its own brother. Yet its final word is not judgment but hope: the proud are brought down from their nests among the stars, the scattered are restored to their inheritance, and over the ruins of every earthly empire there rises the everlasting reign of the King &mdash; for the kingdom shall be the Lord&rsquo;s.
          </p>
        </div>
      </main>
    </div>
  );
}
