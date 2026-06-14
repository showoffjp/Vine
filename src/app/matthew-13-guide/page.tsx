"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Parable of the Sower",
  "Kingdom Parables Matthew",
  "Hidden Treasure and Pearl",
  "Application",
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
    id: "Overview",
    heading: "Overview of Matthew 13",
    reference: "Matthew 13:1&ndash;58",
    paragraphs: [
      "Matthew 13 marks a decisive turning point in the ministry of Jesus. He leaves the house where he has been teaching, sits beside the Sea of Galilee, and addresses an enormous crowd from a boat &mdash; a classroom without walls, with the water as his podium and the hillside as his amphitheater. What he delivers is the third of Matthew&rsquo;s five great teaching blocks: a sustained sequence of parables about the kingdom of heaven. The sheer concentration of parabolic teaching in this chapter is without parallel in the Synoptic Gospels.",
      "The word &ldquo;parable&rdquo; translates the Greek word parabolee and the Hebrew word mashal, both of which refer to a short narrative or figure of speech that places two things beside each other in order to illuminate the less familiar by means of the more familiar. But the parables of Matthew 13 are not simply teaching aids. When the disciples ask why Jesus speaks to the crowds in parables, he gives an answer that is startling in its directness: &ldquo;To you it has been given to know the secrets of the kingdom of heaven, but to them it has not been given&rdquo; (13:11). The parables both reveal and conceal, depending on the posture of the listener.",
      "Jesus grounds this in a quotation from Isaiah 6:9&ndash;10, where the prophet is commissioned to a ministry that will harden rather than soften the nation&rsquo;s resistance: &ldquo;hearing they do not hear, and seeing they do not see&rdquo; (13:13). This is not a statement of divine indifference but of judicial seriousness: the repeated rejection of revelation results in a diminishing capacity to perceive it. The parables become a form of mercy &mdash; they convey truth in story form so that those who have ears to hear can still receive it, even while those who have hardened their hearts are not given more of what they will only abuse.",
      "Matthew 13 contains seven parables in total, often described as the Parables of the Kingdom: the Sower, the Weeds among the Wheat, the Mustard Seed, the Leaven, the Hidden Treasure, the Pearl of Great Price, and the Dragnet. Together they form a composite portrait of what the reign of God looks like in the present age &mdash; surprising in its smallness, costly in its reception, mixed in its current composition, and destined for a decisive sorting at the end of the age. Each parable illuminates a different facet of the kingdom that Jesus has come to inaugurate.",
      "The structure of the chapter is itself significant. The first four parables are addressed to the crowds (13:1&ndash;35), while the last three are given privately to the disciples inside the house (13:36&ndash;52). Between the two groups Jesus provides his interpretation of the Sower (13:18&ndash;23) and the Weeds (13:36&ndash;43), making these the two most fully explained parables in the collection. The chapter closes with Jesus visiting his hometown of Nazareth, where he is rejected because of his familiarity (13:54&ndash;58) &mdash; a living illustration of the very truth the parables have been teaching.",
      "What unifies all seven parables is a vision of the kingdom as both present and hidden. The reign of God has arrived in the person of Jesus, but it does not arrive with the overwhelming visible splendor that Jewish expectation anticipated. It comes like a seed, like leaven, like a tiny mustard grain. It is easy to miss, easy to dismiss, and yet it carries within it a transformative power that will ultimately pervade everything. Matthew 13 is the chapter in which Jesus trains his disciples to see through the surface of the world to the quiet, inexorable work of God that is already underway.",
    ],
  },
  {
    id: "Parable of the Sower",
    heading: "The Parable of the Sower",
    reference: "Matthew 13:1&ndash;23",
    paragraphs: [
      "The Parable of the Sower opens the kingdom discourse and stands as the foundational parable of them all &mdash; Jesus himself says, in Mark&rsquo;s account, &ldquo;Do you not understand this parable? How then will you understand all the parables?&rdquo; (Mark 4:13). The image is drawn from ordinary agricultural life: a sower goes out to sow, and his seed falls on four different types of ground &mdash; the path, the rocky ground, the thorny soil, and the good soil. The fate of each seed is determined not by the quality of the seed or the effort of the sower but by the receptiveness of the ground on which it lands.",
      "The seed along the path is immediately eaten by birds. Jesus explains: &ldquo;When anyone hears the word of the kingdom and does not understand it, the evil one comes and snatches away what has been sown in his heart&rdquo; (13:19). This is the person for whom the word never takes root at all &mdash; it is heard but not comprehended, and the adversary removes it before it can germinate. The word &ldquo;understand&rdquo; (suniemi) in Matthew carries the weight of receptive, active comprehension that leads to obedience, not mere intellectual grasp.",
      "The rocky ground produces a quick and enthusiastic response: the hearer &ldquo;immediately receives it with joy&rdquo; (13:20). But there is no depth of soil; roots cannot go down. When tribulation or persecution comes because of the word &mdash; and Jesus says it will come &mdash; the hearer immediately falls away. Matthew uses the word &ldquo;scandalized&rdquo; (skandalizetai): the cross becomes a stumbling block rather than a doorway. The parable is a warning against the excitement of spiritual emotion that is not accompanied by depth of genuine transformation.",
      "The thorny ground represents those who hear the word but where &ldquo;the cares of the world and the deceitfulness of riches choke the word, and it proves unfruitful&rdquo; (13:22). This is perhaps the most insidious category because it involves no open hostility and no dramatic failure &mdash; just a slow suffocation. The competing loves of money and worry crowd out the word over time. The seed is not openly rejected; it is simply overwhelmed by the density of other concerns. Jesus&rsquo; warning here echoes his teaching on the impossibility of serving two masters (Matthew 6:24).",
      "The good soil represents those who hear the word and understand it, and who &ldquo;bear fruit and yield, in one case a hundredfold, in another sixty, and in another thirty&rdquo; (13:23). Even within the good soil there is variation &mdash; the kingdom&rsquo;s fruitfulness is not uniform, but it is real. The key word is again &ldquo;understand&rdquo; (suniemi): genuine comprehension of the word that leads to a life of bearing fruit. The parable does not explain why some soil is good and some is not; that mystery is left in the hands of God. The call it issues to every hearer is to examine the condition of the soil in which the word is landing.",
      "The Parable of the Sower is as much about the sower as about the soils. The sower does not pick and choose where to throw the seed; he sows broadly and extravagantly, casting seed even on the path and the rocky ground. This is a portrait of the gospel ministry &mdash; the word of the kingdom is to be preached widely, without restriction, without too-careful targeting, trusting the Spirit of God to prepare good soil in hearts that the preacher cannot see into. The fruitfulness of the ministry is ultimately in God&rsquo;s hands.",
    ],
  },
  {
    id: "Kingdom Parables Matthew",
    heading: "The Mustard Seed, the Leaven, and the Weeds",
    reference: "Matthew 13:24&ndash;43",
    paragraphs: [
      "The Parable of the Weeds among the Wheat (13:24&ndash;30, interpreted in 13:36&ndash;43) addresses one of the most pressing questions about the kingdom: if Jesus has truly come to establish God&rsquo;s reign, why does evil still persist and even flourish? A man sows good seed in his field, but while his servants sleep, an enemy comes and sows weeds among the wheat. The weeds (zizania, likely darnel, a plant that resembles wheat in its early stages) grow up alongside the wheat. The servants want to pull up the weeds immediately, but the master says to wait until the harvest, when the reapers can separate them without destroying the wheat.",
      "In his interpretation Jesus identifies the field as the world (not the church), the good seed as the sons of the kingdom, the weeds as the sons of the evil one, and the enemy who sowed them as the devil. The harvest is the end of the age, and the reapers are angels. &ldquo;Just as the weeds are gathered and burned with fire, so will it be at the close of the age. The Son of Man will send his angels, and they will gather out of his kingdom all causes of sin and all law-breakers, and throw them into the fiery furnace&rdquo; (13:40&ndash;42). The judgment is real, final, and executed by divine agents &mdash; not by the impatience of the servants.",
      "The theological import of the Weeds parable is substantial. It explains why the church must not attempt to establish a pure community through coercion or violence: the sorting belongs to God at the end of history, not to the church in the middle of history. It also guards against the despair that comes when the advance of the kingdom appears stalled by the persistence of evil. The coexistence of wheat and weeds is not a sign that the kingdom has failed; it is a sign that God&rsquo;s patience is allowing time for the harvest that he will bring at the appointed moment.",
      "The Parable of the Mustard Seed (13:31&ndash;32) addresses a different question: how can the kingdom of God &mdash; arriving in the form of a Galilean carpenter and a handful of disciples &mdash; possibly be the definitive reign promised by the prophets? The mustard seed is among the smallest of all seeds, yet it grows to become the largest of garden plants, so large that birds come and nest in its branches. The contrast between beginning and ending is the whole point: the kingdom that looks insignificant in its present form carries within it a generative power that will produce results disproportionate to its origins.",
      "The Parable of the Leaven (13:33) makes a similar point by different means. A woman takes leaven and hides it in three measures of flour &mdash; enough to make bread for about a hundred people &mdash; and the leaven works silently through the whole batch until all of it is leavened. The kingdom operates like that hidden, pervasive, transforming agent: it cannot always be seen working, but it is working, and its influence will eventually touch everything. Both the mustard seed and the leaven challenge a theology that measures God&rsquo;s success by visible, dramatic, immediate results.",
      "Matthew pauses to note that Jesus told all these things to the crowds in parables, and that &ldquo;without a parable he said nothing to them&rdquo; in this teaching session (13:34). The narrator then quotes Psalm 78:2: &ldquo;I will open my mouth in parables; I will utter what has been hidden since the foundation of the world&rdquo; (13:35). The parables are not a new pedagogical technique; they are the fulfillment of ancient Scripture&rsquo;s expectation that the Messiah would speak hidden wisdom that the prophets glimpsed from afar. Jesus is doing in parables what the whole prophetic tradition pointed toward.",
    ],
  },
  {
    id: "Hidden Treasure and Pearl",
    heading: "Hidden Treasure, Pearl, and the Dragnet",
    reference: "Matthew 13:44&ndash;58",
    paragraphs: [
      "The three parables Jesus gives privately to the disciples inside the house form a tightly linked trio that address the response required by the kingdom and the destiny it is moving toward. The first two &mdash; the Hidden Treasure and the Pearl of Great Price &mdash; are paired deliberately, two versions of the same astonishing truth: the kingdom of heaven is worth everything you have.",
      "&ldquo;The kingdom of heaven is like treasure hidden in a field, which a man found and covered up. Then in his joy he goes and sells all that he has and buys that field&rdquo; (13:44). The discovery is sudden, unlooked-for, perhaps accidental. The man stumbles upon the treasure, covers it again for safekeeping, and then &mdash; here is the hinge of the parable &mdash; &ldquo;in his joy&rdquo; sells everything he possesses to buy the field. The sacrifice is total but the disposition is not grim. Joy drives the divestiture. He is not giving up everything he loves; he is giving up everything he has for what he loves more.",
      "The Parable of the Pearl (13:45&ndash;46) presents a different human figure: not a field worker but a merchant who has been searching deliberately for fine pearls. When he finds one pearl of surpassing value, he goes and sells all that he has and buys it. Here the discovery comes at the end of a long search rather than by unexpected find. Together the two parables say something important: whether the kingdom comes upon a person suddenly or after years of seeking, the response required is the same &mdash; wholehearted, joy-impelled surrender of everything else to possess it. There is no partial commitment to the kingdom; it commands totality.",
      "The question of who is the man who sells all has been debated across church history. On one reading, the man represents the disciple who gladly gives all to gain Christ. On another reading &mdash; suggested by the parallel structure in which Jesus is elsewhere the merchant seeking the lost (Matthew 18:12&ndash;14) &mdash; Jesus himself is the one who sells all (his heavenly glory) to purchase the treasure that is his people. The two readings are not mutually exclusive; the parable may be intentionally capacious enough to hold both. What is certain is that the kingdom creates this kind of radical, total, joyful reorientation of life.",
      "The Parable of the Dragnet (13:47&ndash;50) returns to the theme of the mixed present and the decisive future. A net cast into the sea gathers fish of every kind; when it is full, the fishermen pull it to shore and separate the good fish from the bad, keeping the good and throwing away the bad. Jesus explains: &ldquo;So it will be at the close of the age. The angels will come out and separate the evil from the righteous and throw them into the fiery furnace&rdquo; (13:49&ndash;50). Like the Weeds parable, the Dragnet affirms both the mixed composition of the present age and the certainty of future separation by divine judgment.",
      "The chapter closes with the Parable of the Householder (13:51&ndash;52), addressed to the disciples themselves. Jesus asks, &ldquo;Have you understood all these things?&rdquo; and they answer yes. He then says, &ldquo;Therefore every scribe who has been trained for the kingdom of heaven is like a master of a house, who brings out of his treasure what is new and what is old&rdquo; (13:52). The disciple who has received these kingdom parables is like a householder with a well-stocked storeroom &mdash; able to draw on the old wisdom of Israel&rsquo;s Scriptures and the new revelation of Jesus, both together. Matthew 13 thus ends with a vocation: to be a kingdom-shaped teacher who draws on the full depth of God&rsquo;s revealed wisdom.",
    ],
  },
  {
    id: "Application",
    heading: "Applying Matthew 13 Today",
    reference: "Matthew 13 for the Believer",
    paragraphs: [
      "Matthew 13 asks a question of every reader that is as searching now as it was on the shore of the Sea of Galilee: what kind of soil are you? The Parable of the Sower is not a passive description of the ways people respond to the gospel; it is an invitation to self-examination and a call to cultivate the conditions of receptive hearing. The four soils are not fixed fates but descriptions of dispositions, and the whole trajectory of the Christian life is a journey toward being the kind of person who hears the word, understands it, and bears fruit.",
      "The diagnosis of the three unfruitful soils is painfully accurate in every age. The hard path &mdash; where the word is heard without understanding and immediately snatched away &mdash; is the experience of the distracted, the defended, and the spiritually incurious. The rocky ground &mdash; enthusiastic reception without depth &mdash; is the experience of every generation that embraces a Christianity of feeling and spectacle without putting down roots in prayer, Scripture, community, and costly obedience. The thorny soil &mdash; perhaps the most common in the affluent West &mdash; is the experience of those whose lives are simply too full to give the word the space it needs to bear fruit.",
      "The Mustard Seed and the Leaven parables offer vital encouragement to those discouraged by the apparent smallness and slowness of the kingdom&rsquo;s advance. In an age of instant communication and viral movements, the church can feel pressure to produce rapid, visible, measurable results. These parables call us back to patience and to trust in the God who works through small things &mdash; a mustard seed of a congregation in a hostile city, a small community quietly leavening a neighborhood with sacrificial love, a single faithful teacher sowing the word into the lives of a handful of children. The kingdom measure of success is not scale but faithfulness.",
      "The Hidden Treasure and the Pearl call the church to recover the joy of the gospel. The man who sells all his possessions to buy the field does so &ldquo;in his joy.&rdquo; Christian discipleship is often presented as a set of obligations and sacrifices, which it certainly involves &mdash; but the motive force in these parables is not duty but delight. The person who has truly encountered the kingdom &mdash; who has seen in Jesus the pearl of surpassing value &mdash; does not sell all with gritted teeth and a sense of grim duty but with the joy of someone who has found what they were made for. The church needs to recover this register.",
      "The Weeds and the Dragnet together shape a realistic ecclesiology and eschatology. They prepare the church not to be shocked by the presence of evil within and around its life. The field contains both wheat and weeds; the net catches fish of every kind. The church must resist both the impulse to force a premature separation &mdash; which risks destroying wheat along with weeds &mdash; and the impulse to abandon the seriousness of judgment by pretending the sorting will never come. Both moves are errors: one of impatience, one of sentimentality. The parables call us to patient faithfulness in the present and sober realism about the future.",
      "Finally, Matthew 13 commissions the disciples of Jesus as scribes trained for the kingdom &mdash; householders with a dual treasury of old and new. This means that the Christian teacher, preacher, and reader of Scripture is called to bring the whole weight of the Old Testament&rsquo;s wisdom, prophecy, and narrative to bear on the new revelation of Jesus, and to read the new in light of the old. Matthew&rsquo;s own Gospel is a sustained exercise in this kind of double-treasury teaching. Every believer who sits with these parables and lets them reshape their imagination is being trained for the same vocation: to see the world through the lens of the kingdom, and to live accordingly.",
    ],
  },
];

const videoItems = [
  { videoId: "OOoKPNMndJg", title: "BibleProject - Sermon on the Mount - Matthew Overview" },
  { videoId: "3Dv4-n6OYGI", title: "Parable of the Sower Explained - Matthew 13 Bible Study" },
  { videoId: "GFMbj0R6CEO", title: "The Mustard Seed and the Kingdom of God - Matthew 13" },
  { videoId: "zvK8YTiDNQs", title: "Hidden Treasure and Pearl of Great Price - Kingdom Parables" },
];

export default function Matthew13GuidePage() {
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
            New Testament Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Matthew 13 &mdash; Parables of the Kingdom
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The Parable of the Sower, the Weeds among the Wheat, the Mustard Seed, the Hidden Treasure, and the Pearl of Great Price &mdash; seven kingdom parables that reveal how the reign of God quietly but inexorably pervades and transforms the world.
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

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>He Who Has Ears, Let Him Hear</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 13 invites every reader to become the good soil, to receive the hidden treasure with joy, and to trust in the mustard seed power of God&rsquo;s kingdom. The parables do not answer every question about how and when the kingdom will fully come &mdash; but they train us to see it at work in the small, the hidden, and the patient, and to live as those who have found the pearl worth everything.
          </p>
        </div>
      </main>
    </div>
  );
}
