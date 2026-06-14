"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Jealous God",
  "The Fall of Nineveh",
  "Woe to the Bloody City",
  "Comfort for Judah",
  "Gods Justice and Mercy",
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
    id: "The Jealous God",
    heading: "The Jealous God",
    reference: "Nahum 1:1&ndash;8",
    paragraphs: [
      "The Book of Nahum opens with one of the most awe-filled portraits of God&rsquo;s character in all of Scripture. Its title declares it &ldquo;an oracle concerning Nineveh,&rdquo; the great capital of the Assyrian Empire &mdash; but before a single word of judgment falls on that city, the prophet lifts our eyes to the One who judges. &ldquo;The Lord is a jealous and avenging God; the Lord is avenging and wrathful; the Lord takes vengeance on his adversaries and keeps wrath for his enemies&rdquo; (1:2). This is a God who does not shrug at evil, but who is rightly stirred against it.",
      "The jealousy of God is not the petty envy of a rival but the holy zeal of a Bridegroom for the honor of his name and the welfare of his people. It is the burning earnestness of perfect love, which cannot remain indifferent when the helpless are crushed and the proud trample the innocent. A God who could look upon Assyria&rsquo;s cruelty without anger would be a God unworthy of worship; it is precisely because he is good that he opposes evil with all the weight of his being.",
      "Yet in the same breath, the prophet holds together what we are so quick to tear apart. &ldquo;The Lord is slow to anger and great in power, and the Lord will by no means clear the guilty&rdquo; (1:3). Here is the divine balance: God is patient, slow to anger, not hasty to strike &mdash; and yet he is great in power, and he will by no means leave the guilty unpunished. His patience is not weakness, and his power is not cruelty. The long delay of judgment is the space he gives for repentance, not a sign that justice will never come.",
      "The prophet then paints the Lord in the language of the storm. &ldquo;His way is in whirlwind and storm, and the clouds are the dust of his feet. He rebukes the sea and makes it dry; he dries up all the rivers&hellip; The mountains quake before him; the hills melt; the earth heaves before him&rdquo; (1:3&ndash;5). Before this God, the whole created order trembles. The seas that seem so vast and the mountains that seem so permanent are nothing before the One who treads the clouds like dust beneath his feet.",
      "And then comes the searching question that lies at the heart of the chapter: &ldquo;Who can stand before his indignation? Who can endure the heat of his anger? His wrath is poured out like fire, and the rocks are broken into pieces by him&rdquo; (1:6). No fortress, no army, no empire can withstand the fury of the Almighty when it is finally unleashed. The same power that holds the universe in being can shatter the proudest city to dust.",
      "Yet woven into this overwhelming display of power is a tender refuge for the trusting heart. &ldquo;The Lord is good, a stronghold in the day of trouble; he knows those who take refuge in him&rdquo; (1:7). The very God whose wrath breaks the rocks is a fortress for those who flee to him. To his enemies he is a consuming storm; to those who trust him he is a stronghold and a shelter. The whole message of Nahum hangs upon this twofold truth.",
    ],
  },
  {
    id: "The Fall of Nineveh",
    heading: "The Fall of Nineveh",
    reference: "Nahum 1:9&ndash;15",
    paragraphs: [
      "To grasp the force of Nahum&rsquo;s prophecy, one must remember the story that came before it. Roughly a century and a half earlier, the prophet Jonah had been sent, reluctantly, to that same city of Nineveh. At his preaching the Assyrians had repented in sackcloth and ashes, and God in his mercy had spared them. But the generations that followed forgot that mercy. Nineveh returned to its violence and idolatry, and it became the terror of the ancient world, swallowing nation after nation, including the northern kingdom of Israel.",
      "Nahum prophesies that the day of reckoning for this resurgent cruelty has at last arrived. The repentance of Jonah&rsquo;s day had bought Nineveh a long reprieve, but it had not bought a permanent pardon, for the city had returned to its sins with a vengeance. Now the patience of God, slow to anger but not without end, gives way to the justice of God. The empire that had seemed eternal would fall, and fall completely.",
      "The prophet addresses the city directly with the certainty of doom: &ldquo;What do you plot against the Lord? He will make a complete end; trouble will not rise up a second time&rdquo; (1:9). Whatever schemes Nineveh devised against God and his people would come to nothing. The blow, when it fell, would be decisive and final &mdash; not a wound from which the city might recover, but a complete end from which there would be no rising again.",
      "Out of Nineveh, the prophet says, has come one &ldquo;who plotted evil against the Lord, a worthless counselor&rdquo; (1:11) &mdash; a reference to the arrogant Assyrian kings who blasphemed the God of Israel and boasted that no deity could deliver from their hand. &ldquo;Though they are at full strength and many, they will be cut down and pass away&rdquo; (1:12). However mighty Assyria appeared, however vast its armies, it would be mown down like grass and vanish from the earth.",
      "For the oppressed people of Judah, this same word of doom against Nineveh is a word of release. &ldquo;Now I will break his yoke from off you and will burst your bonds apart&rdquo; (1:13). The heavy yoke of Assyrian domination, which had bowed the necks of God&rsquo;s people for generations, would be shattered. The chains that had bound them would be snapped, and the burden lifted from their shoulders forever.",
      "And so the first chapter ends not with terror but with celebration: &ldquo;Behold, upon the mountains, the feet of him who brings good news, who publishes peace! Keep your feasts, O Judah; fulfill your vows, for never again shall the worthless pass through you; he is utterly cut off&rdquo; (1:15). The fall of the tyrant is gospel &mdash; good news &mdash; for those who languished under his hand. Judah is summoned to keep her feasts again in freedom, for the destroyer will never march through her land again.",
    ],
  },
  {
    id: "Woe to the Bloody City",
    heading: "Woe to the Bloody City",
    reference: "Nahum 2&ndash;3",
    paragraphs: [
      "In the second and third chapters, Nahum&rsquo;s prophecy becomes a vivid, almost cinematic depiction of the siege and sack of Nineveh. The poetry races with the speed of the attack: &ldquo;The chariots race madly through the streets; they rush to and fro through the squares; they gleam like torches; they dart like lightning&rdquo; (2:4). One can almost hear the thunder of hooves and the clash of steel as the prophet describes the assault that will overwhelm the proud city.",
      "The defenses of Nineveh, however formidable, will crumble. &ldquo;The river gates are opened; the palace melts away&rdquo; (2:6). The city built upon the Tigris, secure behind its waters and its mighty walls, will be undone as the very rivers it trusted in are turned against it. The plunder begins: &ldquo;Plunder the silver, plunder the gold! There is no end of the treasure or of the wealth of all precious things&rdquo; (2:9). The empire that had looted the nations is itself stripped bare.",
      "Then comes the prophet&rsquo;s great cry of woe: &ldquo;Woe to the bloody city, all full of lies and plunder&mdash;no end to the prey!&rdquo; (3:1). This is the moral heart of the indictment. Nineveh is condemned not merely because it is an enemy of Israel but because it is a &ldquo;bloody city,&rdquo; built upon cruelty, deceit, and endless plunder. Its greatness was raised on the suffering of others, and the blood it shed cries out to heaven for justice.",
      "The battle scene resumes in horror: &ldquo;The crack of the whip, and rumble of the wheel, galloping horse and bounding chariot! Horsemen charging, flashing sword and glittering spear, hosts of slain, heaps of corpses, dead bodies without end&mdash;they stumble over the bodies!&rdquo; (3:2&ndash;3). The violence Nineveh had inflicted upon countless cities now returns upon her own streets. The measure she dealt out is measured back to her in full.",
      "Nahum reminds the city of a precedent it cannot forget: Thebes, the great Egyptian capital, had also seemed unconquerable, surrounded by waters and defended by mighty allies, yet she too fell and went into captivity. &ldquo;Are you better than Thebes?&rdquo; (3:8) the prophet asks. If even Thebes was not spared, Nineveh has no ground for confidence. Her allies will desert her, her defenses will fail, and her fortresses will fall &ldquo;like the first-ripe figs&mdash;if shaken they fall into the mouth of the eater&rdquo; (3:12).",
      "The book closes with a final, devastating verdict upon the fallen city: &ldquo;There is no easing your hurt; your wound is grievous. All who hear the news about you clap their hands over you. For upon whom has not come your unceasing evil?&rdquo; (3:19). So universal had been Nineveh&rsquo;s cruelty that the whole world will rejoice at her fall. None will mourn the tyrant; all will applaud the justice that has at last overtaken the bloody city.",
    ],
  },
  {
    id: "Comfort for Judah",
    heading: "Comfort for Judah",
    reference: "Nahum 1:7, 1:12&ndash;15",
    paragraphs: [
      "It is no accident that the name &ldquo;Nahum&rdquo; means &ldquo;comfort&rdquo; or &ldquo;consolation.&rdquo; Though the book is filled with thunderous judgment, its purpose toward God&rsquo;s people is tender: it is a message of comfort to a nation long crushed beneath the heel of an oppressor. For decades the Assyrian Empire had been a nightmare to Judah, exacting tribute, deporting populations, and surrounding Jerusalem itself with armies. To such a people, the news that Nineveh would fall was balm to a wounded soul.",
      "The comfort of Nahum is grounded first in the goodness of God himself: &ldquo;The Lord is good, a stronghold in the day of trouble; he knows those who take refuge in him&rdquo; (1:7). In the long years of suffering, it could seem as though God had forgotten his people, as though the wicked would prosper forever. Nahum answers that the Lord has not forgotten &mdash; he knows those who take refuge in him, and he is their stronghold even when the day of trouble is darkest.",
      "The most beautiful expression of this comfort is the announcement of the herald upon the mountains: &ldquo;Behold, upon the mountains, the feet of him who brings good news, who publishes peace!&rdquo; (1:15). The image is of a runner cresting the hills, racing toward the besieged city with the news that the enemy is defeated and the danger past. His very feet are beautiful to those who have waited in fear, for he carries on his lips the word they have longed to hear: peace.",
      "This same picture is taken up by the prophet Isaiah and, in the New Testament, is applied to the proclamation of the gospel itself: &ldquo;How beautiful upon the mountains are the feet of him who brings good news.&rdquo; The deliverance of Judah from Assyria becomes a foreshadowing of a far greater deliverance &mdash; the good news of salvation and peace published to a world held captive by a crueler tyranny than any earthly empire could impose.",
      "So Judah is told to take up its life again in freedom and gladness: &ldquo;Keep your feasts, O Judah; fulfill your vows&rdquo; (1:15). The festivals that had perhaps been abandoned in the grim years of oppression are to be restored. The people are called to worship again, to rejoice again, to live again as the free people of God, for the yoke is broken and the bonds are burst apart. The God of justice is also the God who comforts his own.",
    ],
  },
  {
    id: "Gods Justice and Mercy",
    heading: "Gods Justice and Mercy",
    reference: "Nahum 1:3, 1:7",
    paragraphs: [
      "The enduring power of the Book of Nahum lies in the way it holds together two truths that the human heart is forever tempted to separate: the justice of God and the mercy of God. We are prone to imagine a God who is all severity, terrifying and remote, or else a God who is all indulgence, who winks at evil and never calls anyone to account. Nahum will let us do neither. In a single short book it shows us the storm and the stronghold, the wrath and the refuge.",
      "On the side of justice, Nahum insists that God &ldquo;will by no means clear the guilty&rdquo; (1:3). A world in which Nineveh could shed innocent blood forever and never answer for it would be a moral horror, a universe without justice at its core. The fall of the bloody city is the proof that the moral order of creation is real, that cruelty does not have the last word, and that the cries of the oppressed are heard by a God who acts. His justice is the guarantee that evil is taken seriously.",
      "On the side of mercy, Nahum is equally clear: &ldquo;The Lord is good, a stronghold in the day of trouble; he knows those who take refuge in him&rdquo; (1:7). The very same God whose wrath shatters the rocks is a fortress for the trusting heart. His goodness is not in tension with his justice but flows from the same holy character. He is severe toward the unrepentant oppressor precisely because he is good toward the oppressed who flee to him.",
      "And lest we forget, the long backstory of Jonah reminds us that this God delights in mercy whenever there is repentance. Nineveh fell at last not because God was eager to destroy but because, after generations of warning and a century of reprieve, the city refused to turn. The same patience that spared Nineveh in Jonah&rsquo;s day proves, in Nahum, that God&rsquo;s slowness to anger is real &mdash; but also that it is not endless, and that the door of repentance, though long held open, can finally close.",
      "For the reader today, Nahum poses a searching question and offers a sure refuge. The question is the one that echoes from the first chapter: &ldquo;Who can stand before his indignation?&rdquo; (1:6). The answer is no one &mdash; no one on the ground of their own strength or innocence. But the refuge is just as sure: the Lord is good, a stronghold in the day of trouble, and he knows those who take refuge in him. The God of perfect justice is also the God of perfect mercy, and in him alone the trembling sinner finds a place to stand.",
    ],
  },
];

const videoItems = [
  { videoId: "Y30DanA5EhU", title: "BibleProject - Overview - Nahum" },
  { videoId: "wA7bDDArqzA", title: "The Book of Nahum Explained - The Fall of Nineveh" },
  { videoId: "JqOqJlFF_eU", title: "Jonah and Nahum - Mercy and Judgment on Nineveh" },
  { videoId: "dPpV5GfqUWE", title: "The Justice and Mercy of God in the Minor Prophets" },
];

export default function ChristianBookOfNahumGuidePage() {
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
            The Book of Nahum
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The God who is slow to anger but great in power &mdash; the prophesied fall of Nineveh, capital of Assyria, the woe pronounced upon the bloody city, the comfort published to oppressed Judah by the feet of him who brings good news, and the perfect balance of God&rsquo;s justice and mercy.
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
              Deepen your study of Nahum through visual teaching on the character of God, the prophesied fall of Nineveh, the connection to Jonah, and the balance of divine justice and mercy in the Minor Prophets.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>A Stronghold in the Day of Trouble</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Nahum refuses to let us tear apart what God holds together. The same Lord whose wrath breaks the rocks and topples the bloody city of Nineveh is a stronghold for all who take refuge in him. Slow to anger yet great in power, he is the God of perfect justice and perfect mercy &mdash; and his enduring call still sounds: flee from the storm of judgment to the shelter of his goodness, for the Lord is good.
          </p>
        </div>
      </main>
    </div>
  );
}
