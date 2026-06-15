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
  "Repent or Perish",
  "The Fig Tree",
  "Healing the Bent Woman",
  "The Narrow Door",
  "Jerusalem Lament",
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
    id: "Overview",
    heading: "Overview of Luke 13",
    reference: "Luke 13:1&ndash;35",
    paragraphs: [
      "Luke 13 is a chapter of urgent reckoning. It presses the reader &mdash; and the crowds who first heard Jesus speak &mdash; with questions that cannot be deferred: Will you repent before it is too late? Will you be healed before the Sabbath controversy becomes more important to you than the power of God? Will you enter by the narrow door before it closes? The urgency is not the urgency of panic but of love &mdash; the urgency of a physician who sees a patient in danger, or a gardener who gives a fig tree one more year.",
      "The chapter opens with a stark reminder that human tragedy does not always signal divine judgment on the victim. Two disturbing incidents are mentioned: Galileans whose blood Pilate had mingled with their sacrifices, and eighteen people on whom the tower of Siloam had fallen. Jesus refuses the easy conclusion that these people suffered because they were worse sinners than others. Instead he turns the question back on his hearers: &ldquo;Unless you repent, you will all likewise perish&rdquo; (vv. 3, 5). Death is not only for the conspicuously wicked; it is the condition of all who do not turn to God.",
      "The parable of the unfruitful fig tree (vv. 6&ndash;9) extends the call to repentance with a note of extraordinary mercy. The owner of the vineyard has been patient for three years, waiting for fruit from a tree that produces none. He is ready to cut it down. But the vinedresser pleads for one more year &mdash; let me dig around it and fertilize it, and perhaps it will bear fruit. The parable embodies the tension between divine patience and divine justice, between the God who is slow to anger and the God who will not be mocked forever.",
      "The healing of the bent woman (vv. 10&ndash;17) brings the chapter to its most human and most revealing moment. A woman who has been bent double for eighteen years &mdash; a &ldquo;daughter of Abraham&rdquo; bound by Satan, Jesus says &mdash; is set free with a word and a touch on a Sabbath day. The synagogue ruler objects. Jesus rebukes him with devastating logic: you untie your ox or donkey on the Sabbath; should this woman not be untied after eighteen years? The crowd rejoices; the opponents are put to shame.",
      "The parables of the mustard seed and the yeast (vv. 18&ndash;21) offer hope in the midst of the chapter&rsquo;s urgency. The kingdom of God begins small &mdash; a single seed, a pinch of leaven &mdash; but its end is great beyond proportion: a tree large enough for birds to nest in, dough permeated through and through. The chapter then closes with the question of the narrow door (vv. 22&ndash;30) and Jesus&rsquo;s heartbroken lament over Jerusalem (vv. 31&ndash;35), a city that kills its prophets and will not be gathered under the wings of the one who loves it.",
    ],
  },
  {
    id: "Repent or Perish",
    heading: "Repent or Perish",
    reference: "Luke 13:1&ndash;5",
    paragraphs: [
      "The opening verses of Luke 13 arise from a specific occasion. Some people in the crowd bring Jesus news of a recent atrocity: Pilate had killed a group of Galileans while they were offering sacrifices, mingling their blood with the blood of their animals. The news carried an implicit theological question &mdash; one that first-century Jewish thought often raised in response to tragedy: were these people worse sinners than other Galileans? Did their violent death indicate a specific divine judgment on their specific sins?",
      "Jesus flatly rejects this interpretation: &ldquo;Do you think that these Galileans were worse sinners than all the other Galileans, because they suffered in this way? No, I tell you; but unless you repent, you will all likewise perish&rdquo; (vv. 2&ndash;3). The force of his answer is twofold. First, it refuses to use the suffering of others as a comfortable proof that we ourselves are in good standing before God. The people who were killed were not uniquely guilty; their death does not tell us anything about their moral condition relative to other people. Second, and more pointedly, it refuses to let the crowd remain spectators of tragedy. Jesus turns the story into a mirror: you will all likewise perish &mdash; unless you repent.",
      "He makes the same point with a second example, drawn from recent local history: the eighteen people on whom the tower of Siloam fell and killed them. Were they worse offenders than all the others in Jerusalem? Again, no. And again the word of warning follows without softening: &ldquo;But unless you repent, you will all likewise perish&rdquo; (v. 5). The repetition is deliberate and important. Jesus is not making a minor pastoral correction; he is making a central, urgent declaration about the human condition. Everyone who does not repent will perish.",
      "What does Jesus mean by &ldquo;likewise perish&rdquo;? The Galileans were killed by a tyrant; the Siloam victims were killed by a structural collapse. Jesus is not predicting that his hearers will die in similarly violent accidents. He is speaking of ultimate perishing &mdash; spiritual death, final separation from God, the consequence of remaining in one&rsquo;s sins without turning to the God who offers forgiveness. The disasters he cites are not divine judgments on those particular victims; they are wake-up calls to everyone who hears about them. If mortality is always near, so is the need for repentance.",
      "The theological implication is profound and counter-cultural in every age. We instinctively look at those who suffer misfortune and assume that their suffering reveals something about their guilt. Jesus dismantles this assumption and turns it into an occasion for self-examination. The question is not: what did they do to deserve this? The question is: have I repented? Am I ready to meet God? The urgency of repentance is not because God is cruel but because he is just &mdash; and because he is also merciful, offering to all who turn to him the forgiveness they could never earn.",
    ],
  },
  {
    id: "The Fig Tree",
    heading: "The Parable of the Unfruitful Fig Tree",
    reference: "Luke 13:6&ndash;9",
    paragraphs: [
      "The brief parable of the unfruitful fig tree is one of the most theologically rich parables in the Gospels, though it is easy to pass over it quickly. A man has planted a fig tree in his vineyard and has come looking for fruit on it for three years. He finds none. His response is entirely reasonable by the standards of ancient agriculture: &ldquo;Cut it down. Why should it use up the ground?&rdquo; (v. 7). An unproductive tree takes nutrients from the soil, occupies space that could support a fruitful plant, and offers nothing in return. The owner&rsquo;s judgment is economically sound and entirely just.",
      "But then the vinedresser speaks: &ldquo;Sir, let it alone this year also, until I dig around it and put on manure. Then if it should bear fruit next year, well and good; but if not, you can cut it down&rdquo; (vv. 8&ndash;9). The vinedresser does not dispute the owner&rsquo;s right to cut the tree down; he does not claim the tree has some hidden fruit that the owner missed. He simply asks for one more year, and he offers to do the hard work himself &mdash; breaking up the compacted soil, fertilizing the roots, giving the tree every possible advantage to produce what it was created to produce.",
      "The identity of the figures in the parable has been widely discussed. Most naturally, the vineyard owner represents God the Father, the vinedresser represents Jesus himself, and the fig tree represents Israel &mdash; or more broadly, any person or community that has received God&rsquo;s patient attention without bearing the fruit of repentance and righteousness. The three years during which the owner waited may echo the three years of Jesus&rsquo;s ministry, though the parable should not be pressed too literally as an allegory.",
      "What the parable most clearly communicates is the mercy of the vinedresser in the face of the owner&rsquo;s justice. The owner is not wrong; a fruitless tree deserves to be cut down. But the vinedresser intercedes &mdash; not by arguing that the tree deserves better treatment, but by offering his own labor on the tree&rsquo;s behalf and by appealing for one more year of patience. This is a portrait of intercessory grace: the one who stands between the judgment deserved and the mercy offered.",
      "The parable also carries a quiet urgency in its final clause: &ldquo;if not, you can cut it down.&rdquo; The one more year is genuinely one more year, not an indefinite extension. The patience of God is real, but it is not without limit. The tree that receives the vinedresser&rsquo;s attention and still produces no fruit will be cut down. The parable is not a promise that God will always wait longer; it is a gift of time and grace that calls for a response. The appropriate response to such mercy is not complacency but the fruit that the vinedresser&rsquo;s labor was intended to produce &mdash; genuine repentance, genuine faith, genuine transformation.",
    ],
  },
  {
    id: "Healing the Bent Woman",
    heading: "Healing the Bent Woman",
    reference: "Luke 13:10&ndash;17",
    paragraphs: [
      "The account of the healing of the bent woman is among the most vivid and moving miracle stories in the Gospels. Jesus is teaching in a synagogue on the Sabbath when he sees a woman who has been bent double for eighteen years, unable to straighten herself. Luke tells us she had &ldquo;a disabling spirit&rdquo; (v. 11) &mdash; a spiritual bondage that had taken a physical form. Jesus does not wait for her to come to him, does not wait for her to ask. He calls her to him, speaks a word of release, and lays his hands on her. &ldquo;And immediately she was made straight, and she glorified God&rdquo; (v. 13).",
      "The synagogue ruler&rsquo;s response is as immediate as the healing, though entirely different in character. He is indignant &mdash; not, apparently, at the woman&rsquo;s eighteen years of suffering, but at the fact that the healing happened on the Sabbath. He addresses the crowd rather than Jesus directly: &ldquo;There are six days in which work ought to be done. Come on those days and be healed, and not on the Sabbath day&rdquo; (v. 14). The logic is impeccable by the standards of a certain kind of religious administration. Rules exist for a reason; they should be applied consistently; exceptions create problems.",
      "Jesus calls him and those like him &ldquo;hypocrites&rdquo; &mdash; a sharp word that Luke uses rarely &mdash; and he applies a reductio ad absurdum: &ldquo;Does not each of you on the Sabbath untie his ox or his donkey from the manger and lead it away to water it?&rdquo; (v. 15). Even the most scrupulous observer of the Sabbath performed this act of mercy for his animals without scruple. If an animal can be untied on the Sabbath to be given water, ought not a daughter of Abraham, whom Satan has bound for eighteen years, be loosed from her bondage on the Sabbath?",
      "The description of the woman as &ldquo;a daughter of Abraham&rdquo; is theologically significant. She was not a Gentile outsider, not someone beyond the covenant community &mdash; she was a daughter of the people of God, a member of the family that carried the promise. And yet she had been bound &mdash; by a spirit, yes, but also, implicitly, by a religious culture that was more concerned with the administration of Sabbath rules than with the liberation of God&rsquo;s children from bondage. Jesus&rsquo;s healing was not a violation of the Sabbath but its fulfillment &mdash; a day of rest, a day of liberation, a day when the heavy burdens are lifted.",
      "The crowd&rsquo;s response captures the right reaction: &ldquo;All the people rejoiced at all the glorious things that were done by him&rdquo; (v. 17). The opponents were put to shame; the people rejoiced. Luke is showing us two ways of relating to Jesus &mdash; the way that is scandalized by his disregard for boundary maintenance, and the way that glorifies God for what he has done. The woman herself was the first to glorify God; the crowd followed. The synagogue ruler and those who shared his indignation are left standing outside the celebration, choosing shame over joy because they could not see past the rule to the God who was at work behind the healing.",
    ],
  },
  {
    id: "The Narrow Door",
    heading: "The Narrow Door",
    reference: "Luke 13:22&ndash;30",
    paragraphs: [
      "As Jesus travels toward Jerusalem, teaching in town after town, someone in the crowd poses a question that has occupied theologians ever since: &ldquo;Lord, will those who are saved be few?&rdquo; (v. 23). It is a question born of curiosity, perhaps also of anxiety or of a desire to locate oneself favorably within some divine accounting. Jesus refuses to answer the question as asked. He does not offer a number or a percentage. Instead he turns the speculative question into a personal imperative: &ldquo;Strive to enter through the narrow door. For many, I tell you, will seek to enter and will not be able&rdquo; (v. 24).",
      "The image of the narrow door is immediately followed by a parable of a closed door. The master of the house rises and shuts the door. Those who stand outside begin to knock: &ldquo;Lord, open to us.&rdquo; But he answers, &ldquo;I do not know where you come from&rdquo; (v. 25). They protest: they ate and drank in his presence; he taught in their streets. The protest is essentially a claim of proximity &mdash; we were near you, we had contact with you. But the master&rsquo;s response is devastating: &ldquo;I do not know where you come from. Depart from me, all you workers of evil!&rdquo; (v. 27).",
      "The parable challenges the assumption that religious proximity equals salvation. Those who are locked outside have a real connection to the master &mdash; they ate at his table, they heard his teaching in the public square. Their relationship was genuine in some respects. But what they lacked was the relationship of known and knowing, the mutual recognition that the master describes as &ldquo;knowing where you come from.&rdquo; In the Gospel of John, Jesus will make the same point differently: &ldquo;I am the good shepherd. I know my own and my own know me&rdquo; (John 10:14). To be known by Jesus is not a matter of religious affiliation or proximity but of genuine faith and following.",
      "The result of exclusion from the feast is not merely disappointment but anguish: &ldquo;There you will weep and gnash your teeth, when you see Abraham and Isaac and Jacob and all the prophets in the kingdom of God but you yourselves cast out&rdquo; (v. 28). The contrast makes the pain more acute: the patriarchs and prophets are inside; the people who had opportunity to enter are outside. And to deepen the reversal, Jesus adds that people will come from east and west and north and south &mdash; from the farthest ends of the Gentile world &mdash; to recline at the table in the kingdom of God while the expected insiders are cast out.",
      "The saying &ldquo;And behold, some are last who will be first, and some are first who will be last&rdquo; (v. 30) gathers up the whole reversal into a single maxim. Those who assumed their priority &mdash; by ancestry, by religious observance, by proximity to Jesus in Galilee &mdash; will find themselves last. Those who seemed to have no claim at all &mdash; Gentiles from the ends of the earth, tax collectors and sinners who came to Jesus in desperation &mdash; will be first. The kingdom of God does not sort people by the criteria that human communities use; it sorts them by faith and repentance and the grace of the one who opens and shuts the door.",
    ],
  },
  {
    id: "Jerusalem Lament",
    heading: "The Lament over Jerusalem",
    reference: "Luke 13:31&ndash;35",
    paragraphs: [
      "The final scene of Luke 13 is one of the most emotionally charged in the entire Gospel. Some Pharisees &mdash; apparently not hostile ones in this case &mdash; come to Jesus with a warning: &ldquo;Get away from here, for Herod wants to kill you&rdquo; (v. 31). Whether the warning was genuine concern or an attempt to deflect Jesus from his mission, his response is calm, ironic, and utterly undeflected. He calls Herod a fox &mdash; a crafty but ultimately small and contemptible creature &mdash; and declares that he will continue his work of casting out demons and performing cures today and tomorrow, and on the third day he will finish his course.",
      "The reference to &ldquo;the third day&rdquo; carries obvious resonance for Luke&rsquo;s readers, who know that the third day is the day of resurrection. Jesus is not intimidated by Herod&rsquo;s threat because he already knows the shape of his story: he will die, but death will not have the last word. His mission will be completed. And the completion will happen not in Galilee but in Jerusalem: &ldquo;Nevertheless, I must go on my way today and tomorrow and the day following, for it cannot be that a prophet should perish away from Jerusalem&rdquo; (v. 33). The bitter irony is clear: Jerusalem, the city of God, the city of the temple, the city where sacrifice was offered and atonement was made &mdash; Jerusalem is where prophets come to die.",
      "Then comes the lament &mdash; one of the most tender and grief-stricken passages in all the Gospels: &ldquo;O Jerusalem, Jerusalem, the city that kills the prophets and stones those who are sent to it! How often would I have gathered your children together as a hen gathers her brood under her wings, and you were not willing!&rdquo; (v. 34). The image is arresting in its domesticity and its vulnerability. Jesus does not liken himself to an eagle or a lion but to a hen &mdash; a mother bird who spreads her wings to shelter her chicks, who is exposed and vulnerable herself in the act of sheltering, who calls and calls and calls.",
      "The phrase &ldquo;how often&rdquo; implies a long history of divine reaching-out, not just Jesus&rsquo;s three-year ministry but the whole sweep of Israel&rsquo;s history &mdash; every prophet sent, every word spoken, every call to return. God had been gathering, wooing, warning, pleading across centuries. And Jerusalem had been resisting across centuries. The tragedy is not that God failed to reach out; the tragedy is that his children were not willing. Unwillingness, not inability, is what bars the door. The hen was there; the wings were open; the chicks chose the exposed place.",
      "The lament closes with a word of desolation and a promise: &ldquo;Behold, your house is forsaken. And I tell you, you will not see me until you say, &lsquo;Blessed is he who comes in the name of the Lord!&rsquo;&rdquo; (vv. 35). The house &mdash; the temple, the seat of Israel&rsquo;s worship &mdash; will be left to them. The presence that the temple was meant to house will depart. But the final word is not abandonment; it is a veiled promise of return. The crowds will one day cry &ldquo;Blessed is he who comes in the name of the Lord&rdquo; &mdash; as they will at the triumphal entry (Luke 19:38). And beyond that, some read in this saying a promise of ultimate restoration, when at last the city that rejected its Messiah will welcome him. The lament ends not in final darkness but in the grief of love that has not yet given up.",
    ],
  },
];

const videoItems = [
  { videoId: "Tn8vDqBmK5r", title: "Luke 13 - Repentance, the Narrow Door, and Jerusalem's Lament" },
  { videoId: "Vp4cFbNsJ7w", title: "The Bent Woman and the Sabbath Controversy - Luke 13 Bible Study" },
  { videoId: "Xm6gBcPtR9q", title: "The Narrow Door - Luke 13:22-30 Sermon" },
  { videoId: "Zk3nWdQvM8s", title: "O Jerusalem, Jerusalem - Luke 13 Explained" },
];

export default function Luke13GuidePage() {
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
            Luke 13 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Repentance, healing, and the narrow door &mdash; the urgency of turning to God before it is too late, the parable of the unfruitful fig tree, the healing of a woman bent double for eighteen years, the parables of mustard seed and yeast, the warning of the narrow door, and Jesus&rsquo;s grief-stricken lament over Jerusalem.
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

        {currentSection && activeTab !== "Videos" && (
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
              Deepen your study of Luke 13 through these video teachings on repentance, the healing on the Sabbath, the narrow door, and Jesus&rsquo;s heartbroken lament over Jerusalem.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>How Often I Have Longed to Gather Your Children</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Luke 13 is a chapter of urgent mercy. Its warnings about repentance and the narrow door are not the words of a harsh judge but of a vinedresser who digs and fertilizes, a hen who spreads her wings, a healer who calls the bent woman to himself before she can even ask. The urgency of Luke 13 is the urgency of love &mdash; love that knows time is short and refuses to let us remain comfortably unaware of it.
          </p>
        </div>
      </main>
    </div>
  );
}
