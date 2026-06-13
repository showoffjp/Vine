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
  "The Reluctant Prophet",
  "Fleeing from God",
  "The Great Fish",
  "The Repentance of Nineveh",
  "The Scandal of Grace",
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
    id: "The Reluctant Prophet",
    heading: "The Reluctant Prophet",
    reference: "Jonah 1",
    paragraphs: [
      "Jonah stands apart from the other prophetic books of the Old Testament. Where Isaiah, Jeremiah, and the rest are collections of oracles &mdash; the words the prophet spoke &mdash; Jonah is almost entirely a narrative about a prophet. We hear only one sentence of Jonah&rsquo;s actual preaching in the whole book. The story is not finally about the message Jonah delivers but about Jonah himself, and through him about the surprising, scandalous breadth of God&rsquo;s mercy.",
      "The book opens with a familiar formula: &ldquo;Now the word of the LORD came to Jonah the son of Amittai, saying, &lsquo;Arise, go to Nineveh, that great city, and call out against it, for their evil has come up before me&rsquo;&rdquo; (1:1&ndash;2). What follows that call, however, is anything but familiar. Where every other prophet, however reluctantly, obeys, Jonah does the unthinkable: he runs.",
      "To grasp the force of this, we must understand what Nineveh was. It was the capital of Assyria, the most feared and brutal empire of the ancient world, infamous for its savage cruelty in war. Assyria was the great enemy of Israel, a power that would later destroy the northern kingdom. To be sent to preach to Nineveh was to be sent into the heart of enemy territory, to a people Jonah and his countrymen had every reason to hate.",
      "Jonah&rsquo;s response is to flee in the opposite direction. &ldquo;But Jonah rose to flee to Tarshish from the presence of the LORD&rdquo; (1:3). Nineveh lay to the east; Tarshish, probably at the far western edge of the known world, lay as far in the other direction as one could go. Jonah does not merely decline the mission; he tries to put the entire breadth of the world between himself and the God who called him.",
      "Here the book introduces its central and delicious irony: a prophet running from God. The man whose calling is to carry God&rsquo;s word fleeing from God&rsquo;s presence; the one who should know better than anyone that the Lord cannot be escaped, booking passage to the ends of the earth to try. The story invites us to smile at Jonah even as we recognize ourselves in him &mdash; for who has not, at some point, fled from a call we did not wish to obey?",
      "We are not told at the outset why Jonah runs; that revelation is saved for the end, and it is the key that unlocks the whole book. For now we are left only with the strange spectacle of a prophet in flight, and with the dawning sense that the real drama will not be Nineveh&rsquo;s wickedness but Jonah&rsquo;s own heart. The book that begins with a command to go to Israel&rsquo;s enemies will end by exposing the reader&rsquo;s resistance to the mercy God longs to show them.",
      "In this way the reluctant prophet becomes a mirror. Jonah is not a villain but a deeply sympathetic figure &mdash; a believer who knows God truly yet cannot bring himself to want what God wants. His reluctance sets up the question the whole book will press upon us: are we willing for God to be as merciful as he actually is, even to those we would rather see judged?",
    ],
  },
  {
    id: "Fleeing from God",
    heading: "Fleeing from God",
    reference: "Jonah 1",
    paragraphs: [
      "Jonah&rsquo;s flight does not go unanswered. &ldquo;But the LORD hurled a great wind upon the sea, and there was a mighty tempest on the sea, so that the ship threatened to break up&rdquo; (1:4). The God whom Jonah is fleeing is the God who made the sea, and the sea itself becomes the instrument that turns him back. The very element Jonah hoped would carry him to freedom rises up at the Lord&rsquo;s command to halt his escape.",
      "The scene that follows is full of pointed contrasts. The pagan sailors are terrified; each cries out to his own god and they throw the cargo overboard to lighten the ship. They are praying for their lives. And where is the prophet of the true God? &ldquo;But Jonah had gone down into the inner part of the ship and had lain down and was fast asleep&rdquo; (1:5). While the heathen mariners pray, the prophet sleeps. The man who should be interceding is unconscious to the danger he himself has caused.",
      "The captain rouses him with a rebuke that stings precisely because it comes from a pagan: &ldquo;What do you mean, you sleeper? Arise, call out to your god!&rdquo; The sailors cast lots to discover who is responsible for the storm, and the lot falls on Jonah. Pressed to explain himself, Jonah makes a confession whose words condemn his own flight: &ldquo;I am a Hebrew, and I fear the LORD, the God of heaven, who made the sea and the dry land&rdquo; (1:9).",
      "It is a devastating irony. Jonah confesses with his lips that the Lord made the sea and the dry land &mdash; the very God he is at that moment trying to escape by sea. His theology is impeccable; his obedience is in ruins. He knows exactly who God is and is fleeing him anyway. The sailors, hearing this, are &ldquo;exceedingly afraid,&rdquo; grasping better than the prophet does the folly of running from such a God.",
      "Jonah&rsquo;s solution is striking. He does not repent and ask God to still the storm; he asks to be thrown overboard. &ldquo;Pick me up and hurl me into the sea; then the sea will quiet down for you, for I know it is because of me that this great tempest has come upon you&rdquo; (1:12). There is a kind of integrity here &mdash; he will not let others perish for his sin &mdash; but also a hint of his despair, a man who would rather sink into the deep than turn and go to Nineveh.",
      "The sailors, remarkably, try everything else first. They row hard to bring the ship back to land, unwilling to take an innocent-seeming man&rsquo;s life. Only when they cannot prevail do they cry out to the Lord &mdash; not to their own gods now, but to Jonah&rsquo;s God &mdash; begging not to be held guilty, and then throw Jonah into the sea. At once the sea grows calm.",
      "The result is a conversion. &ldquo;Then the men feared the LORD exceedingly, and they offered a sacrifice to the LORD and made vows&rdquo; (1:16). The pagan sailors, who began by crying to their idols, end by worshiping the true God. Even in his disobedience, Jonah becomes the unlikely occasion of Gentiles turning to the Lord &mdash; a quiet foreshadowing of the book&rsquo;s great theme, that God&rsquo;s mercy reaches far beyond the borders of Israel.",
    ],
  },
  {
    id: "The Great Fish",
    heading: "The Great Fish",
    reference: "Jonah 2",
    paragraphs: [
      "When Jonah is thrown into the raging sea, it is not the end of him. &ldquo;And the LORD appointed a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights&rdquo; (1:17). The fish is not punishment but rescue; the same God who hurled the storm now appoints the fish to save the drowning prophet. What looks like the grave becomes, in God&rsquo;s hands, the means of deliverance.",
      "From the belly of the fish &mdash; from the very depths of the sea and of his own despair &mdash; Jonah prays. The second chapter is given over almost entirely to this prayer, and it takes the form of a psalm of thanksgiving and repentance. &ldquo;I called out to the LORD, out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice&rdquo; (2:2). The prophet who fled God&rsquo;s presence now finds that even there, in the heart of the sea, God hears him.",
      "The prayer is woven through with the language of the Psalms, the prayer book of Israel. Jonah describes the waters closing over him, the weeds wrapping around his head, his life sinking down to the roots of the mountains. He had gone as far from God as a man could go, yet from that uttermost depth he turns back: &ldquo;When my life was fainting away, I remembered the LORD, and my prayer came to you, into your holy temple&rdquo; (2:7).",
      "The prayer reaches its climax in a confession that gathers up the whole meaning of the book in a single line: &ldquo;Salvation belongs to the LORD&rdquo; (2:9). It is the truth Jonah has been resisting from the first verse. Salvation is the Lord&rsquo;s to give, to whomever he wills &mdash; to drowning prophets and pagan sailors alike, and, as Jonah will soon be forced to see, even to the people of Nineveh. The lesson learned in the deep is the lesson the rest of the book will test.",
      "Then &ldquo;the LORD spoke to the fish, and it vomited Jonah out upon the dry land&rdquo; (2:10). The deliverance is complete; the prophet who sank into the depths is set again on solid ground, given a second chance to obey the call he had fled. God&rsquo;s patience with his runaway servant is itself a small picture of the mercy the book proclaims &mdash; the Lord does not abandon Jonah to the consequences of his flight.",
      "Centuries later, Jesus would reach back to this story and make it his own. When the religious leaders demanded a sign, he answered, &ldquo;For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth&rdquo; (Matthew 12:40). Jonah&rsquo;s descent into the deep and his emergence on the third day became, for Jesus, a sign pointing forward to his own death and resurrection.",
      "This is what Jesus called &ldquo;the sign of Jonah.&rdquo; As Jonah was swallowed by death and given back to life, so the Son of Man would go down into the grave and rise again on the third day. The strange story of the prophet in the fish thus becomes a prophecy of the gospel itself &mdash; and a reminder that the One greater than Jonah would go willingly to the depths, not fleeing his mission, but fulfilling it, to bring salvation to the very nations Jonah despised.",
    ],
  },
  {
    id: "The Repentance of Nineveh",
    heading: "The Repentance of Nineveh",
    reference: "Jonah 3",
    paragraphs: [
      "&ldquo;Then the word of the LORD came to Jonah the second time&rdquo; (3:1). The call is renewed, word for word as before, and this time Jonah goes. He travels to Nineveh, &ldquo;an exceedingly great city, three days&rsquo; journey in breadth,&rdquo; the capital of the empire he had crossed the world to avoid. The God of second chances sends his reluctant prophet once more to the city he most dreads.",
      "What Jonah preaches there is almost comically brief. In the Hebrew it is just five words: &ldquo;Yet forty days, and Nineveh shall be overthrown!&rdquo; (3:4). There is no call to repent, no offer of mercy, no eloquence &mdash; only a bare announcement of doom. It is the sermon of a man doing the minimum, delivering his warning without a hint of compassion, perhaps half-hoping it will fall on deaf ears so that judgment may come.",
      "The response is astonishing, and it is the great surprise of the book. &ldquo;And the people of Nineveh believed God. They called for a fast and put on sackcloth, from the greatest of them to the least of them&rdquo; (3:5). At the barest, most grudging sermon ever preached, the whole vast city turns to God. The contrast with Israel, which heard prophet after eloquent prophet and did not repent, could hardly be sharper.",
      "The repentance reaches all the way to the throne. The king of Nineveh rises from his seat, removes his royal robes, covers himself with sackcloth, and sits in ashes. He issues a decree that not only the people but even the animals should fast and be covered in sackcloth, and that everyone should &ldquo;turn from his evil way and from the violence that is in his hands&rdquo; (3:8). The whole city, from king to cattle, humbles itself before God.",
      "Their repentance is marked by humility rather than presumption. &ldquo;Who knows? God may turn and relent and turn from his fierce anger, so that we may not perish&rdquo; (3:9). They do not claim God owes them mercy; they simply throw themselves on the possibility of it. It is a model of genuine repentance &mdash; turning from evil, casting oneself wholly on the mercy of God without any claim of right.",
      "And God responds. &ldquo;When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it&rdquo; (3:10). The threatened judgment is withheld. The most violent and feared people of the ancient world, Israel&rsquo;s mortal enemies, are spared because they turned to God and God is merciful. The doom Jonah announced becomes, by repentance and grace, a deliverance.",
      "This is the climax the whole story has been building toward, and it is meant to stagger us. God&rsquo;s mercy is shown not to the deserving but to the violent, not to Israel but to her cruelest enemy. The repentance of Nineveh demonstrates that the compassion of God reaches even to those we would consider beyond its bounds &mdash; a truth that thrills the reader, even as it will send Jonah into a fury that exposes the real subject of the book.",
    ],
  },
  {
    id: "The Scandal of Grace",
    heading: "The Scandal of Grace",
    reference: "Jonah 4",
    paragraphs: [
      "The final chapter delivers the twist that reframes the entire book. We might expect Jonah to rejoice at Nineveh&rsquo;s deliverance; instead, &ldquo;it displeased Jonah exceedingly, and he was angry&rdquo; (4:1). The salvation of a great city, the repentance of countless souls, is to Jonah not a joy but an outrage. And now, at last, he tells us why he fled in the first place.",
      "&ldquo;O LORD, is not this what I said when I was yet in my country? That is why I made haste to flee to Tarshish; for I knew that you are a gracious God and merciful, slow to anger and abounding in steadfast love, and relenting from disaster&rdquo; (4:2). Here is the stunning admission. Jonah did not flee because he doubted God&rsquo;s mercy but because he was certain of it. He ran precisely because he knew God might forgive Nineveh &mdash; and he did not want his enemies forgiven.",
      "The words Jonah quotes are among the most cherished in all of Scripture, God&rsquo;s own self-description first given to Moses: gracious, merciful, slow to anger, abounding in steadfast love. What Israel sang as her greatest comfort, Jonah throws back as a complaint. The very mercy that saved him from the depths he cannot bear to see extended to those he hates. He would rather die than watch God love his enemies: &ldquo;please take my life from me, for it is better for me to die than to live&rdquo; (4:3).",
      "God answers Jonah not with a rebuke but with a question and a lesson. &ldquo;Do you do well to be angry?&rdquo; Jonah, still hoping for Nineveh&rsquo;s destruction, goes outside the city to watch. God appoints a plant to grow up and shade him, and Jonah is glad of it. Then God appoints a worm to attack the plant so that it withers, and a scorching wind, until Jonah, faint and miserable, again wishes to die &mdash; now over the loss of a mere plant.",
      "The lesson is drawn with gentle precision. &ldquo;You pity the plant, for which you did not labor, nor did you make it grow, which came into being in a night and perished in a night&rdquo; (4:10). Jonah grieves over a withered weed that cost him nothing. How then, God asks, should the Maker of Nineveh not grieve over a city of countless living souls? Jonah&rsquo;s misplaced pity exposes the smallness of his heart against the vastness of God&rsquo;s.",
      "And so the book ends, astonishingly, with a question from God&rsquo;s own lips: &ldquo;And should not I pity Nineveh, that great city, in which there are more than 120,000 persons who do not know their right hand from their left, and also much cattle?&rdquo; (4:11). There is no reply from Jonah, no tidy resolution. The story simply stops, leaving the question hanging &mdash; and it hangs not only over Jonah but over every reader who hears it.",
      "That open ending is the book&rsquo;s masterstroke. By leaving Jonah&rsquo;s answer unwritten, it presses the question onto us. Jonah&rsquo;s story is a challenge to all our nationalism and tribalism, to our quiet desire to keep God&rsquo;s grace for ourselves and our kind. It reveals a God whose heart is for all peoples, even our enemies, and it confronts us with our own resistance to that grace. The book ends with a question because the question is finally ours to answer: are we willing for God to be this merciful?",
    ],
  },
];

const videoItems = [
  { videoId: "yA8czhWBLOU", title: "BibleProject - Book of Jonah Overview" },
  { videoId: "tjor7-Bp8a0", title: "Jonah and the Scandal of Gods Mercy" },
  { videoId: "PXJ8gZ2wL9w", title: "The Sign of Jonah - Jesus and the Resurrection" },
];

export default function ChristianBookOfJonahGuidePage() {
  const [tab, setTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === tab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ACCENT}22`, color: ACCENT, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            The Book of Jonah
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The reluctant prophet who fled from God &mdash; the storm and the great fish, the astonishing repentance of Nineveh, Jonah&rsquo;s anger at God&rsquo;s mercy, and the scandalous question of God&rsquo;s compassion for all peoples, even our enemies.
          </p>
        </header>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1.25rem" }}>
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: `1px solid ${tab === t ? ACCENT : BORDER}`,
                background: tab === t ? ACCENT : CARD,
                color: tab === t ? "#fff" : MUTED,
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

        {tab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Jonah through visual teaching on the structure of the book, the scandal of God&rsquo;s mercy toward enemies, and the sign of Jonah that points to the resurrection.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Question That Remains</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Jonah ends not with an answer but with a question from God&rsquo;s own lips, and that question still searches every reader. It confronts our nationalism and our resistance to grace shown to enemies, and reveals a God who is gracious and merciful, slow to anger, abounding in steadfast love &mdash; whose heart is for all peoples. The unfinished story asks each of us: are we willing for God to be this merciful?
          </p>
        </div>
      </main>
    </div>
  );
}
