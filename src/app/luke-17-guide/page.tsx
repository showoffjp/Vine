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
  "Overview",
  "Forgiveness and Faith",
  "The Ten Lepers",
  "The Coming Kingdom",
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
    heading: "Overview of Luke 17",
    reference: "Luke 17:1&ndash;37",
    paragraphs: [
      "Luke chapter 17 gathers a cluster of teachings and one memorable miracle as Jesus presses on toward Jerusalem. The chapter ranges widely &mdash; from the duty of forgiveness to the power of faith, from gratitude amid affliction to the sudden coming of the Son of Man &mdash; yet through it all runs a single thread: the quiet, demanding reality of life lived under the kingdom of God, both in the daily round of service and in the great day still to come.",
      "The chapter opens with Jesus warning his disciples about temptations to sin and the duty of forgiveness (17:1&ndash;4). Stumbling blocks are sure to come, but woe to the one through whom they come; better a millstone around the neck than to cause one of the little ones to fall. And when a brother sins and repents, forgiveness must be ready, even seven times in a day. The disciple is to guard others from falling and to forgive without limit.",
      "When the apostles plead, &ldquo;Increase our faith!&rdquo;, Jesus speaks of faith like a grain of mustard seed (17:5&ndash;6), able to uproot a mulberry tree and plant it in the sea. He follows this with the parable of the unworthy servants (17:7&ndash;10), who, having done all that was commanded, claim no special merit but say simply, &ldquo;We are unworthy servants; we have only done what was our duty.&rdquo; Faith and humble service belong together in the kingdom.",
      "At the heart of the chapter stands the healing of the ten lepers (17:11&ndash;19). Traveling between Samaria and Galilee, Jesus is met by ten men with leprosy who cry out for mercy. He sends them to the priests, and as they go they are cleansed; but only one, a Samaritan, turns back to praise God and fall at Jesus&rsquo; feet in thanks. &ldquo;Were not ten cleansed? Where are the nine?&rdquo; The outsider alone returns to give glory to God.",
      "The chapter closes with Jesus teaching on the coming of the kingdom of God and the days of the Son of Man (17:20&ndash;37). To the Pharisees who ask when the kingdom will come, he replies that it does not come with observable signs, for the kingdom of God is in their midst. To his disciples he describes the suddenness of that day, like the flood in the days of Noah and the fire in the days of Lot, and he warns, &ldquo;Remember Lot&rsquo;s wife.&rdquo;",
      "Taken together, these scenes hold in tension the present and the future of the kingdom. The disciple is called to forgive, to trust, and to serve humbly here and now; the leper is called to gratitude and faith in the moment of mercy; and all are called to readiness for the day of the Son of Man, which will come unannounced and lay bare every heart. Luke 17 teaches that the kingdom is already among us in the person of Jesus, and yet still to be revealed in power and judgment.",
    ],
  },
  {
    id: "Forgiveness and Faith",
    heading: "Stumbling Blocks, Forgiveness, and Faith",
    reference: "Luke 17:1&ndash;10",
    paragraphs: [
      "&ldquo;Temptations to sin are sure to come, but woe to the one through whom they come! It would be better for him if a millstone were hung around his neck and he were cast into the sea than that he should cause one of these little ones to sin&rdquo; (17:1&ndash;2). Jesus speaks soberly of the terrible responsibility of leading others astray. In a fallen world stumbling blocks are inevitable, yet that inevitability excuses no one; the person who becomes the occasion of another&rsquo;s sin stands under a fearful judgment, especially when the wounded are the vulnerable little ones.",
      "From the danger of causing sin Jesus turns to the duty of restoring the sinner: &ldquo;Pay attention to yourselves! If your brother sins, rebuke him, and if he repents, forgive him&rdquo; (17:3). Love does not ignore sin but confronts it honestly, seeking the brother&rsquo;s repentance and restoration. Rebuke and forgiveness belong together; the goal of the loving rebuke is never condemnation but the recovery of the one who has fallen, that he may be set right and welcomed back.",
      "Then the demand widens to a generosity that staggers the natural heart: &ldquo;And if he sins against you seven times in the day, and turns to you seven times, saying, I repent, you must forgive him&rdquo; (17:4). The repetition is deliberate; seven times in a single day is more than patience can easily bear. Yet the disciple of Jesus is to keep no ledger of wrongs, but to extend forgiveness as often as repentance is offered, mirroring the boundless mercy he himself has received.",
      "Overwhelmed by such a calling, &ldquo;the apostles said to the Lord, Increase our faith!&rdquo; (17:5). It is a humble and revealing cry. They sense that forgiveness without limit lies beyond their natural strength and that only a greater faith can sustain it. Their plea is right in instinct, even if it mistakes the matter slightly, for they speak as though faith were a quantity to be enlarged rather than a trust to be exercised in the living God.",
      "Jesus answers, &ldquo;If you had faith like a grain of mustard seed, you could say to this mulberry tree, Be uprooted and planted in the sea, and it would obey you&rdquo; (17:6). The point is not the size of faith but its reality and its object. Even the tiniest genuine faith, resting on the power of God, accomplishes what is humanly impossible. They need not a greater quantity of faith but a true faith, however small, that takes God at his word and depends wholly upon him.",
      "Jesus then tells a parable to guard against pride in service: a servant who has been plowing or keeping sheep is not thanked and seated at table when he comes in from the field, but is told to prepare his master&rsquo;s supper first (17:7&ndash;9). The master owes no special gratitude for the servant&rsquo;s simply doing his appointed work. The picture is meant to humble those who imagine that their obedience places God in their debt.",
      "&ldquo;So you also, when you have done all that you were commanded, say, We are unworthy servants; we have only done what was our duty&rdquo; (17:10). Here is the heart of the lesson. Even our fullest obedience earns no claim upon God, for in serving him we render only what is rightly his due. The disciple labors not to accumulate merit but out of glad submission, content to be an unworthy servant who has simply done his duty, and resting all his hope on grace rather than on his own deserving.",
    ],
  },
  {
    id: "The Ten Lepers",
    heading: "The Healing of the Ten Lepers",
    reference: "Luke 17:11&ndash;19",
    paragraphs: [
      "&ldquo;On the way to Jerusalem he was passing along between Samaria and Galilee. And as he entered a village, he was met by ten lepers, who stood at a distance&rdquo; (17:11&ndash;12). The geography is significant, for this borderland between Jew and Samaritan sets the stage for the surprise to come. The ten stand at a distance, as the law required, cut off from community and worship by their disease &mdash; outcasts bound together by a shared misery that erased even the old divisions between them.",
      "&ldquo;And they lifted up their voices, saying, Jesus, Master, have mercy on us&rdquo; (17:13). Their cry is a model of desperate, believing prayer. They do not presume to dictate the manner of their healing but cast themselves entirely upon his mercy, addressing him by name and as Master. From the distance imposed by their affliction they reach out to the one they trust can help, and their plea rises with the urgency of those who have nowhere else to turn.",
      "&ldquo;When he saw them he said to them, Go and show yourselves to the priests. And as they went they were cleansed&rdquo; (17:14). The command requires faith, for the priests were to certify a cleansing that had not yet occurred; the ten must set out while still visibly diseased, trusting the word of Jesus. And as they obeyed, the healing came &mdash; not before they stepped out, but in the going. Their faith was proved in obedience, and mercy met them on the road.",
      "&ldquo;Then one of them, when he saw that he was healed, turned back, praising God with a loud voice; and he fell on his face at Jesus&rsquo; feet, giving him thanks. Now he was a Samaritan&rdquo; (17:15&ndash;16). One alone interrupts his journey to return. With a loud voice he praises God, the same voice that had cried for mercy now lifted in thanksgiving, and he falls at the feet of Jesus in worship. And Luke adds the arresting detail last: this grateful one was a Samaritan, an outsider to the covenant people.",
      "&ldquo;Then Jesus answered, Were not ten cleansed? Where are the nine? Was no one found to return and give praise to God except this foreigner?&rdquo; (17:17&ndash;18). The questions carry both sorrow and wonder. Nine received the gift and went their way, taking the mercy but forgetting the giver; only the foreigner, least expected to know God&rsquo;s ways, returned to give him glory. The story exposes the ingratitude that so easily follows blessing, and the surprising responsiveness of the outsider.",
      "&ldquo;And he said to him, Rise and go your way; your faith has made you well&rdquo; (17:19). All ten were cleansed of leprosy, but to this one Jesus speaks a deeper word of wholeness. His faith, expressed in returning gratitude, has brought him a salvation that reaches beyond the body. The nine received healing; the one received the Healer. In turning back to give thanks, he found not merely a cured body but a saving relationship with the Lord who showed him mercy.",
      "The episode joins gratitude, faith, and grace into a single lesson. Thanksgiving is not a mere courtesy but the proper response of faith to mercy, and its absence reveals a heart that takes the gift while ignoring the giver. The story also overturns expectations, for the despised Samaritan sees and worships while the insiders go their way unmoved. The kingdom of God draws near to all who cry for mercy, and it is often the outsider who recognizes grace and returns to give God the glory.",
    ],
  },
  {
    id: "The Coming Kingdom",
    heading: "The Coming of the Kingdom of God",
    reference: "Luke 17:20&ndash;37",
    paragraphs: [
      "&ldquo;Being asked by the Pharisees when the kingdom of God would come, he answered them, The kingdom of God is not coming in ways that can be observed, nor will they say, Look, here it is! or There! for behold, the kingdom of God is in the midst of you&rdquo; (17:20&ndash;21). The Pharisees expect a kingdom announced by spectacle and political upheaval, a thing to be charted and timed. Jesus redirects them entirely: the kingdom has already drawn near in his own person, present in their midst though they fail to perceive it.",
      "Turning to his disciples, Jesus speaks of a future day: &ldquo;The days are coming when you will desire to see one of the days of the Son of Man, and you will not see it&rdquo; (17:22). He warns them not to chase after false reports, &ldquo;Look, there! or Look, here!&rdquo;, for the coming of the Son of Man will need no such announcement. &ldquo;For as the lightning flashes and lights up the sky from one side to the other, so will the Son of Man be in his day&rdquo; (17:24) &mdash; sudden, universal, unmistakable.",
      "Yet before that glory comes suffering: &ldquo;But first he must suffer many things and be rejected by this generation&rdquo; (17:25). The path to the day of the Son of Man runs through the cross. Jesus will not be received in triumph but rejected and put to death, and only beyond that rejection lies the revealing of his day. The disciples must hold both together &mdash; the suffering that comes first and the glory that follows.",
      "Jesus then draws two warnings from ancient history. &ldquo;Just as it was in the days of Noah, so will it be in the days of the Son of Man&rdquo; (17:26); people were eating and drinking, marrying and being given in marriage, until the flood came and swept them all away. So too in the days of Lot, they were eating, drinking, buying, selling, planting, building &mdash; until fire fell on Sodom. Ordinary life went on, heedless of the judgment about to break in.",
      "The point is not that eating and building are evil, but that the world was wholly absorbed in them, blind to the coming reckoning. The day of the Son of Man will likewise fall upon a world busy and unprepared. Then comes the urgent call to detachment: on that day, let no one turn back for his possessions. &ldquo;Remember Lot&rsquo;s wife&rdquo; (17:32) &mdash; she looked back toward what she could not bear to leave, and perished on the threshold of deliverance.",
      "&ldquo;Whoever seeks to preserve his life will lose it, but whoever loses his life will keep it&rdquo; (17:33). The paradox stands at the center of discipleship. To clutch at this present life, to make its comforts and securities one&rsquo;s ultimate treasure, is to forfeit life altogether; to surrender it for the sake of Christ is to find it kept safe forever. The coming day will reveal which path each heart has chosen, the grasping or the surrendered.",
      "Jesus describes the dividing nature of that day: &ldquo;In that night there will be two in one bed. One will be taken and the other left&rdquo; (17:34); two women grinding together, one taken and one left. When the disciples ask, &ldquo;Where, Lord?&rdquo;, he answers with a cryptic proverb: &ldquo;Where the corpse is, there the vultures will gather&rdquo; (17:37). The day of the Son of Man will come unannounced yet unmistakable, separating the prepared from the unprepared and revealing the true condition of every heart.",
    ],
  },
];

const videoItems = [
  { videoId: "Lk7vMx3Qb6R", title: "BibleProject - Luke 17 Overview on the Road to Jerusalem" },
  { videoId: "Fg5nTz2Hd4L", title: "Forgive Seventy Times - Faith and the Unworthy Servants" },
  { videoId: "Tn9bRw8Vs1C", title: "Where Are the Nine - The Grateful Samaritan Leper" },
  { videoId: "Kd4dYp0Tx7M", title: "The Days of the Son of Man - Remember Lot&rsquo;s Wife" },
];

export default function Luke17GuidePage() {
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
            The Gospel of Luke, Chapter 17
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Jesus teaches on the duty of forgiveness and faith like a mustard seed, calls his servants to humble duty, heals ten lepers of whom only one Samaritan returns to give thanks, and unveils the coming of the kingdom of God and the days of the Son of Man &mdash; sudden as the flood and the fire, with the warning, &ldquo;Remember Lot&rsquo;s wife.&rdquo;
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
              Deepen your study of Luke 17 through visual teaching on the duty of forgiveness and faith like a mustard seed, the humble service of the unworthy servants, the gratitude of the one Samaritan leper who returned, and the sudden coming of the kingdom of God and the days of the Son of Man.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {videoItems.map((item) => (
                <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
                  <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              ))}
            </div>
          </section>
        )}

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Kingdom Already and Not Yet</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Luke 17 holds together the present and the future of the kingdom of God. Here and now the disciple is called to forgive without limit, to trust the living God with even the smallest faith, and to serve humbly as an unworthy servant; the cleansed leper is called to return in gratitude and worship; and all are summoned to readiness for the day of the Son of Man, which will come unannounced and lay bare every heart. The kingdom is already among us in the person of Jesus, and yet still to be revealed in power and judgment &mdash; so we are to live forgiven and forgiving, thankful, and watchful.
          </p>
        </div>
      </main>
    </div>
  );
}
