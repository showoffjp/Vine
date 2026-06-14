"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#0D9488";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "The Word of the Lord to Jonah",
  "Jonah Flees to Tarshish",
  "The Storm and the Sailors",
  "Cast Me Into the Sea",
  "The Great Fish",
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
    id: "The Word of the Lord to Jonah",
    heading: "The Word of the Lord to Jonah",
    reference: "Jonah 1:1&ndash;2",
    paragraphs: [
      "The book of Jonah begins with one of the most direct and unadorned commissions in all of Scripture: &ldquo;Now the word of the Lord came to Jonah the son of Amittai, saying, &lsquo;Arise, go to Nineveh, that great city, and call out against it, for their evil has come up before me&rsquo;&rdquo; (1:1&ndash;2). Two verses; a name, a destination, and a reason. There is no preamble, no lengthy vision sequence, no extended negotiation of terms. The word of the Lord came, and it came with a clear and specific command. Jonah knew exactly what was being asked of him.",
      "The destination matters enormously. Nineveh was the capital of Assyria, the most feared military empire of the ancient Near East. It was the nation that had already carried the northern kingdom of Israel into exile and would eventually threaten Jerusalem. For a Jewish prophet to be sent to preach in Nineveh was not merely an inconvenient assignment; it was a mission to the enemy. The evil that had come up before God was the evil of a people who had inflicted tremendous suffering on God&rsquo;s own people. The command was not to denounce them from a safe distance but to go there, into the city, and call out against it.",
      "The phrase &ldquo;that great city&rdquo; appears three times in the book of Jonah (1:2; 3:2; 4:11). It is a marker of divine attention. God sees Nineveh. He notices its greatness, its scale, its population, its evil. The city that seemed to many in Israel like an overwhelming, unreachable power was, from where God stood, simply a city full of people who needed to hear and respond to his word. What looked like an empire was, to the Maker of heaven and earth, a collection of human beings and animals whose fate he was concerned about. The greatness of Nineveh did not diminish God; it only served to underscore the scope of his concern.",
      "The reason given for the command is also important: &ldquo;their evil has come up before me.&rdquo; This language recalls the cry of Sodom that came before God in Genesis 18&ndash;19, and the cry of the Israelites under Egyptian slavery in Exodus 2. God is not indifferent to injustice. He does not miss the suffering that human evil creates. The evil of Nineveh had risen to the level of divine attention, and the divine response was not immediately to destroy but first to warn. Even for the cruelest of empires, God sends a word before he sends judgment. This is itself a kind of mercy.",
      "Jonah the son of Amittai is mentioned in 2 Kings 14:25, where he is described as a prophet from Gath-hepher who had prophesied the restoration of Israel&rsquo;s borders under Jeroboam II. He was, in other words, a prophet who had delivered a favorable word to Israel and had seen it come true. He knew what it was to be used by God for the benefit of his people. And now God was asking him to be used for the benefit of their enemies. That transition &mdash; from prophet of Israel&rsquo;s restoration to herald of Nineveh&rsquo;s warning &mdash; is the tension that drives the entire book.",
      "What the opening two verses establish is a theology of divine initiative and human responsibility. The word of the Lord came. It was not solicited by Jonah. It did not arise from Jonah&rsquo;s own spiritual reflection or ambition. It came from outside him, from the Lord who sees the earth and hears the cry of the afflicted. And it came as a command, not a suggestion. &ldquo;Arise, go.&rdquo; The question the book will spend four chapters exploring is not whether God&rsquo;s word is authoritative but whether Jonah will submit to it &mdash; and what happens both to Jonah and to Nineveh when he does not, and then when he does.",
    ],
  },
  {
    id: "Jonah Flees to Tarshish",
    heading: "Jonah Flees to Tarshish",
    reference: "Jonah 1:3",
    paragraphs: [
      "The third verse of Jonah is one of the most theologically loaded single verses in the Hebrew Bible: &ldquo;But Jonah rose to flee to Tarshish from the presence of the Lord. He went down to Joppa and found a ship going to Tarshish. So he paid the fare and went down into it, to go with them to Tarshish, away from the presence of the Lord&rdquo; (1:3). Everything about this verse rewards close attention. The repetition of &ldquo;Tarshish&rdquo; three times and &ldquo;from the presence of the Lord&rdquo; twice is not accidental. The narrator wants us to feel the completeness and the absurdity of Jonah&rsquo;s attempt.",
      "Tarshish was, in the ancient world, effectively the end of the known world &mdash; a port city, likely in what is now Spain or Sardinia, somewhere in the far western Mediterranean. Nineveh was to the northeast, in the direction of Assyria. Jonah went in the exact opposite direction. He did not go partway and turn back. He did not drag his feet on the road to Nineveh. He actively, deliberately, intentionally boarded a ship headed as far from Nineveh as it was possible to go. The flight was total.",
      "The phrase &ldquo;from the presence of the Lord&rdquo; is the theological key to the verse. How could a prophet of Israel &mdash; a man who knew that God made the sea and the dry land, that God&rsquo;s throne was in heaven and his presence filled the earth &mdash; imagine that he could flee from the presence of the Lord by boarding a ship? The psalmist had already asked this question: &ldquo;Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!&rdquo; (Psalm 139:7&ndash;8). Jonah knew the theology. He knew you could not outrun God.",
      "And yet he ran. This is the deepest form of human self-deception: not ignorance of the truth but the willful suppression of it. Jonah is not fleeing because he does not know that God is everywhere. He is fleeing because he does not want to obey, and flight is the only alternative his disobedient heart can offer. He goes down to Joppa &mdash; the narrator&rsquo;s repeated use of &ldquo;went down&rdquo; (down to Joppa, down into the ship, and soon down to the inner part of the ship) is a narrative signal that Jonah is on a descending trajectory. Running from God is always a going down.",
      "It is worth noting that Jonah&rsquo;s flight was not lazy or half-hearted. He paid the fare. He committed his resources to his disobedience. He made the practical arrangements necessary to sustain his running. This is also a recognizable feature of human sin: it is rarely passive. We do not drift into disobedience without effort. We often invest in it, arrange for it, pay for it. Jonah&rsquo;s willingness to spend his money on a ticket to Tarshish tells us something about the depth of his resistance to the call of God.",
      "But the most searching irony of the verse is what it reveals about Jonah&rsquo;s theology. He is afraid of what God&rsquo;s mercy might do for Nineveh. He would rather the enemy be destroyed than repent and be forgiven. His flight is not the flight of a coward afraid of Nineveh&rsquo;s violence (though that would be understandable). It is, as the book will later reveal (4:2), the flight of a man who knows God is merciful and does not want that mercy extended to his enemies. The disobedience of Jonah has a theological root: he disagrees with God&rsquo;s concern for Nineveh. And rather than argue with God about it, he runs.",
    ],
  },
  {
    id: "The Storm and the Sailors",
    heading: "The Storm and the Sailors",
    reference: "Jonah 1:4&ndash;10",
    paragraphs: [
      "The Lord&rsquo;s response to Jonah&rsquo;s flight is immediate and dramatically scaled. &ldquo;But the Lord hurled a great wind upon the sea, and there was a mighty tempest on the sea, so that the ship threatened to break up&rdquo; (1:4). The word &ldquo;hurled&rdquo; is a word of force and precision &mdash; the same word used for throwing a javelin or casting a weapon. God did not merely allow a storm to arise. He hurled it. The tempest was targeted. The sea was the very thing Jonah had used to flee, and God turned the sea against his flight.",
      "The sailors are introduced with striking sympathy. They are experienced professionals who have seen storms before, and this storm terrifies them. Each cried out to his own god (1:5) &mdash; the plural, polytheistic response of men who called on whatever divine powers they knew when the situation exceeded human control. They did not know the God of Israel, but they knew that the situation required divine help, and they called for it with whatever language and name was available to them. The narrator does not mock this. He simply reports it.",
      "Then comes one of the great comic and tragic images of the book: &ldquo;But Jonah had gone down into the inner part of the ship and had lain down and was fast asleep&rdquo; (1:5). While the pagan sailors cried out to their gods and threw cargo overboard to save the ship, the prophet of the Lord was asleep in the hold. The contrast is devastating. The people who did not know God were on their knees; the man who knew God was unconscious. Whether the sleep was exhaustion, denial, or a kind of spiritual shutdown, it stands as one of the most indicting images in all of the prophetic literature.",
      "The captain&rsquo;s words to Jonah are layered with irony: &ldquo;What do you mean, you sleeper? Arise, call out to your god! Perhaps the god will give a thought to us, that we may not perish&rdquo; (1:6). The pagan captain uses the word &ldquo;arise&rdquo; &mdash; the same word the Lord used when he commissioned Jonah: &ldquo;Arise, go to Nineveh.&rdquo; Jonah had refused to arise at the word of God. Now a Gentile sailor was commanding him to arise and pray. The prophet who should have been calling others to face God&rsquo;s word was himself being called to account by those who did not know it.",
      "The sailors cast lots to determine the cause of the storm, and the lot fell on Jonah (1:7). The text does not explain the mechanism of the lot, but it reflects an ancient understanding that in moments of crisis, casting lots could reveal a hidden truth. The lot fell correctly: Jonah was the cause. When they questioned him, Jonah&rsquo;s confession was remarkable in its clarity: &ldquo;I am a Hebrew, and I fear the Lord, the God of heaven, who made the sea and the dry land&rdquo; (1:9). He confessed his identity, his God, and his God&rsquo;s domain &mdash; including the domain of the very sea that was threatening to kill them all.",
      "The sailors&rsquo; response is described as &ldquo;exceedingly afraid&rdquo; (1:10). And then the text adds: &ldquo;for the men knew that he was fleeing from the presence of the Lord, because he had told them.&rdquo; Jonah had apparently already shared his story. He knew what he was doing, and he told them. This means Jonah&rsquo;s flight was not carried out in secret from other humans; he was quite open about the fact that he was running from God. The sailors were not angry at being deceived. They were afraid because they suddenly understood the nature of the God who was pursuing the man on their ship, and what it might mean for all of them.",
    ],
  },
  {
    id: "Cast Me Into the Sea",
    heading: "Cast Me Into the Sea",
    reference: "Jonah 1:11&ndash;15",
    paragraphs: [
      "With the storm growing worse and the cause identified, the sailors turned to Jonah for a solution: &ldquo;What shall we do to you, that the sea may quiet down for us?&rdquo; (1:11). It is a strange and significant question. These men were under no obligation to Jonah&rsquo;s God or to Jonah&rsquo;s welfare. They could have made their own decision. But they asked. There is something in the way the narrator presents these sailors that emphasizes their moral seriousness &mdash; these were men who wanted to handle the crisis rightly, who recognized that something larger than a storm was happening, and who sought guidance before acting.",
      "Jonah&rsquo;s answer is striking: &ldquo;Pick me up and hurl me into the sea; then the sea will quiet down for you, for I know it is because of me that this great tempest has come upon you&rdquo; (1:12). This is an act of self-sacrifice, though a complicated one. Jonah acknowledges his guilt &mdash; this storm is because of me &mdash; and he takes responsibility for it by offering himself as the solution. He does not ask the sailors to drop him off on shore (there is no shore nearby). He does not suggest that if they pray hard enough God might relent. He tells them to throw him in. Whatever his motives &mdash; genuine repentance, a death wish, or simple pragmatism &mdash; he accepts the consequence of his own disobedience.",
      "The sailors&rsquo; response before they comply is one of the most morally admirable passages in the entire book. They do not immediately throw Jonah overboard. &ldquo;Nevertheless, the men rowed hard to get back to dry land, but they could not, for the sea grew more and more tempestuous against them&rdquo; (1:13). These pagan sailors, with no Torah to instruct them, refused to throw a man into the sea if there was any alternative. They tried. They rowed. They exhausted every other option before they accepted that throwing Jonah overboard was the only way. There is a natural law written on their hearts that made them reluctant to be complicit in a man&rsquo;s death, even at the cost of their own lives.",
      "Then they cried out to the Lord &mdash; not to their own gods, but to the Lord, the God Jonah had named: &ldquo;O Lord, let us not perish for this man&rsquo;s life, and lay not on us innocent blood, for you, O Lord, have done as it pleased you&rdquo; (1:14). This is a prayer of extraordinary theological insight for men who had not previously known the Lord. They acknowledged his sovereignty (&ldquo;you have done as it pleased you&rdquo;), they pled their own innocence, and they asked for mercy. They were praying, in other words, like people who were beginning to understand who God was. The storm had evangelized the sailors.",
      "Then they picked up Jonah and hurled him into the sea, and the sea ceased from its raging (1:15). The word &ldquo;hurled&rdquo; connects back to verse 4: God had hurled the storm; now the sailors hurled Jonah. The two actions are parallel &mdash; God&rsquo;s sovereignty and human action working together to accomplish the same end. The moment Jonah entered the water, the storm stopped. The immediate cessation confirmed to the sailors that this was exactly what the Lord had required. There was no doubt left about which God had sent the storm and which God had stilled it.",
      "The image of Jonah being cast into the sea is one of the most powerful in all of prophetic literature. It is an image of a man receiving the consequence of his own disobedience &mdash; not through divine cruelty but through the simple logic of the choices he had made. He had chosen to go down to Joppa, down into the ship, down into the hold. Now he went further down, into the sea itself. Every step away from God&rsquo;s call had been a step down, and now he was at the bottom. But the bottom, as he would discover in the next chapter, is not where God abandons his prophet. It is sometimes where he meets him.",
    ],
  },
  {
    id: "The Great Fish",
    heading: "The Great Fish",
    reference: "Jonah 1:16&ndash;17",
    paragraphs: [
      "The final two verses of Jonah 1 bring the first chapter to its double conclusion: one on the ship and one in the sea. &ldquo;Then the men feared the Lord exceedingly, and they offered a sacrifice to the Lord and made vows&rdquo; (1:16). The sailors, who had each called on their own gods at the beginning of the story, now worshiped the Lord &mdash; the God of Israel, the God who made the sea and the dry land, the God who had pursued his prophet across the Mediterranean with a targeted storm. Their fear had become faith. They offered sacrifice and made vows. These are covenant acts, the acts of people who are entering into a relationship with the God they have just encountered.",
      "There is a quiet but remarkable irony in this conclusion. Jonah had been sent to call Nineveh to repentance. He refused. And in the course of his refusal, an entire shipload of pagan sailors came to fear the Lord and offer him sacrifice and vows. Jonah accomplished more for the kingdom of God by being thrown overboard than he had by obeying &mdash; though of course that was not his intent. The sovereignty of God is such that even human disobedience becomes, in his hands, an occasion for the extension of his glory among the nations. The sailors who prayed in the storm are the first of many Gentiles in the book of Jonah who respond to God with more faith than the prophet himself.",
      "The theological significance of the sailors&rsquo; conversion cannot be overstated in the context of the book&rsquo;s larger argument. Jonah did not want God to have mercy on Nineveh because they were Gentiles, enemies of Israel. But the very chapter in which he flees from that mission ends with Gentiles &mdash; the sailors of the ship he boarded to flee &mdash; worshiping the Lord with sacrifice and vows. God&rsquo;s concern for the nations is not a threat to his covenant with Israel; it is an extension of it. The God who called Abraham blessed him so that all the families of the earth might be blessed (Genesis 12:3). Jonah had forgotten this, or chosen not to believe it.",
      "The seventeenth verse introduces the most famous element of the story: &ldquo;And the Lord appointed a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights&rdquo; (1:17). The word &ldquo;appointed&rdquo; is crucial. God did not stumble upon a convenient fish. He appointed it. The same sovereign will that appointed the storm, appointed the lot to fall on Jonah, appointed the sea to cease when Jonah entered it &mdash; the same divine intentionality now appointed a great fish to meet Jonah at the bottom of the sea. Every element of creation responds to God&rsquo;s command; only the prophet resists.",
      "The great fish is not an instrument of punishment but of rescue. Jonah was drowning. The fish was the means of his preservation, the improbable vessel of God&rsquo;s mercy toward a disobedient servant. The belly of the fish was not the grave; it was the womb of a second chance. Three days and three nights in darkness and enclosure, but alive. This is the pattern of divine mercy throughout Scripture: God does not waste his servants, even when they waste themselves. He meets them in the consequences of their own choices and holds out the possibility of return.",
      "Jesus himself drew attention to this moment when the Pharisees demanded a sign from him: &ldquo;For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth&rdquo; (Matthew 12:40). The sign of Jonah is the sign of death and resurrection &mdash; of descent into the depths and return. The fish that swallowed Jonah pointed forward to the tomb that would hold the Son of God, and to the morning when the stone would be rolled away. Jonah&rsquo;s three days in the fish are a type of Christ&rsquo;s three days in the earth: the darkest moment, before the impossible reversal.",
      "The first chapter of Jonah ends in the belly of the fish &mdash; suspended between descent and deliverance, between the consequences of disobedience and the possibility of restoration. It is a fitting place to pause the narrative, because it is the place where the whole book turns. Everything that has happened in chapter 1 &mdash; the flight, the storm, the sailors, the sea, the fish &mdash; has been shaped by the pursuing sovereignty of a God who will not let his prophet go, who will not let his word fail, who will not let the nations perish without a warning, and who will not let even a drowning runaway stay drowned when there is still a mission to be accomplished and a city still waiting to hear.",
    ],
  },
];

const videoItems = [
  { videoId: "dLIabZc0O4c", title: "BibleProject - Overview of Jonah" },
  { videoId: "MkETkRv9tG8", title: "Jonah Chapter 1 - The Running Prophet" },
  { videoId: "63r3w5JNuv8", title: "The Sign of Jonah and the Resurrection" },
  { videoId: "HoMGQGVEMJE", title: "Jonah and the Sovereignty of God Over the Nations" },
];

export default function Jonah1GuidePage() {
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
            Jonah 1: The Running Prophet
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The word of the Lord comes to Jonah to go to Nineveh; Jonah flees to Tarshish; a great storm is hurled upon the sea; pagan sailors pray while the prophet sleeps; and a great fish is appointed to swallow the running prophet for three days and three nights.
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
              Deepen your study of Jonah 1 through visual teaching on the fleeing prophet, the sovereign God who pursues him with a storm, the praying sailors, and the sign of Jonah pointing to the resurrection.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>You Cannot Outrun the Word of the Lord</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Jonah 1 is a chapter about the futility of fleeing God and the sovereignty of a Lord who pursues his servants across every sea. The storm that chased Jonah was not punishment alone &mdash; it was also the relentless mercy of a God who had a mission for his prophet and would not abandon it. The fish that swallowed him was not the grave; it was the womb of a second chance.
          </p>
        </div>
      </main>
    </div>
  );
}
