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
  "Vanity of Vanities",
  "The Search for Meaning",
  "A Time for Everything",
  "Life Under the Sun",
  "Fear God",
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
    id: "Vanity of Vanities",
    heading: "Vanity of Vanities",
    reference: "Ecclesiastes 1",
    paragraphs: [
      "Of all the books in the Bible, Ecclesiastes may be the most surprising and the most strangely modern. It reads less like a sermon than like the journal of a restless, brilliant mind refusing to settle for easy comfort. It belongs to the wisdom literature of Israel, but where Proverbs offers confident maxims, Ecclesiastes interrogates them, testing every claim against the hard facts of experience and death.",
      "The voice that speaks is called &ldquo;the Preacher&rdquo; &mdash; in Hebrew Qoheleth, one who gathers or assembles, perhaps a teacher addressing an assembly. Tradition has long associated this figure with Solomon, the king famed for unmatched wisdom, wealth, and opportunity, who would have been uniquely positioned to test whether any of it could satisfy the human heart. Whoever holds the pen, the persona is that of someone who has had everything and asks whether it added up to anything.",
      "The book&rsquo;s thesis crashes in at the very start: &ldquo;Vanity of vanities, says the Preacher, vanity of vanities! All is vanity&rdquo; (1:2). It is a verdict delivered before the argument, a refrain that will return again and again like a tolling bell. Everything the Preacher will examine &mdash; wisdom, pleasure, labor, wealth &mdash; will be weighed against this stark and unsettling summary.",
      "Much depends on that word &ldquo;vanity.&rdquo; The Hebrew is hevel, and it does not mean &ldquo;conceit&rdquo; in the modern sense. It means vapor, breath, mist &mdash; something insubstantial, fleeting, impossible to grasp. Life, the Preacher says, is like trying to catch your breath on a cold morning: you can see it, but you cannot hold it. The word names not worthlessness exactly, but transience, elusiveness, the way everything slips through our fingers.",
      "What gives the book its peculiar honesty is its unflinching gaze at death. The Preacher cannot stop noticing that the same end awaits the wise and the fool, the righteous and the wicked, human and animal alike. The grave levels every distinction and erases every achievement. This refusal to look away from mortality is what makes Ecclesiastes feel so contemporary &mdash; it asks the questions a thoughtful skeptic asks today.",
      "The opening poem sets the mood: generations come and go, the sun rises and sets and hurries back, the wind circles, the streams run to a sea that is never full. &ldquo;There is nothing new under the sun&rdquo; (1:9). The world turns in weary cycles, and human striving seems to leave no lasting mark upon it. It is a vision of life as a treadmill, full of motion but apparently going nowhere.",
      "Yet we must not mistake Ecclesiastes for mere pessimism or despair. The Preacher is not trying to talk us out of faith; he is clearing away false foundations for it. By refusing every illusion that earthly things can bear the weight of ultimate meaning, he prepares the heart to look beyond the sun &mdash; to the God who alone can give life a significance that death cannot erase. The bracing honesty of the opening is the first step on that road.",
    ],
  },
  {
    id: "The Search for Meaning",
    heading: "The Search for Meaning",
    reference: "Ecclesiastes 1&ndash;2",
    paragraphs: [
      "Having announced his verdict, the Preacher sets out to prove it by experiment. In chapters 1 and 2 he becomes a kind of philosopher-scientist of the human condition, deliberately testing every avenue by which people seek meaning and satisfaction. He has the resources of a king at his disposal, and he spares nothing. If fulfillment can be found anywhere under the sun, he intends to find it.",
      "He begins with wisdom itself, applying his heart &ldquo;to seek and to search out by wisdom all that is done under heaven&rdquo; (1:13). But he discovers that greater knowledge brings greater sorrow: &ldquo;in much wisdom is much vexation, and he who increases knowledge increases sorrow&rdquo; (1:18). To understand the world more deeply is also to see its futility more clearly. Wisdom illuminates the problem without solving it.",
      "So he turns to pleasure. &ldquo;I said in my heart, come now, I will test you with pleasure; enjoy yourself&rdquo; (2:1). He gives himself to wine, to laughter, to every delight. He undertakes great works: he builds houses, plants vineyards, lays out gardens and parks and pools, gathers servants and herds and treasure. He becomes greater than all who were before him in Jerusalem, withholding from his eyes nothing they desired.",
      "And yet the result is always the same. &ldquo;Then I considered all that my hands had done and the toil I had expended in doing it, and behold, all was vanity and a striving after wind, and there was nothing to be gained under the sun&rdquo; (2:11). The phrase &ldquo;striving after wind&rdquo; captures it perfectly: you can chase the wind, you can run yourself ragged after it, but your hands close on nothing. Achievement gives a momentary thrill and then evaporates.",
      "The reason it all fails comes back, relentlessly, to death. The wise man dies just like the fool, and both are soon forgotten. Worse, the fruit of a lifetime&rsquo;s labor must be left to someone else &mdash; someone who did not earn it and may squander it. &ldquo;You cannot take it with you&rdquo; is not a cliche here but a piercing observation: everything we accumulate stays behind, passing to hands we cannot control. The grave makes a mockery of the relentless accumulator.",
      "This is where Ecclesiastes feels almost uncannily contemporary. Strip away the ancient setting and the Preacher sounds like a modern soul who has acquired the career, the house, the experiences, the achievements, and still lies awake wondering what it was all for. His existential honesty speaks directly to a culture that has more than any in history and yet aches with a quiet sense of emptiness.",
      "The Preacher refuses to lie to us about this. He will not pretend that any earthly pursuit &mdash; not knowledge, not pleasure, not work, not wealth &mdash; can finally fill the God-shaped void in the human heart. His search comes up empty by design, so that we will stop expecting the creation to do what only the Creator can do. The dead ends he maps are a mercy, sparing us a lifetime of chasing the wind.",
    ],
  },
  {
    id: "A Time for Everything",
    heading: "A Time for Everything",
    reference: "Ecclesiastes 3",
    paragraphs: [
      "At the center of the book stands one of the most beloved and most quoted passages in all of Scripture, the poem that begins, &ldquo;For everything there is a season, and a time for every matter under heaven&rdquo; (3:1). What follows is a litany of opposites held in rhythmic balance: a time to be born, and a time to die; a time to plant, and a time to pluck up what is planted; a time to weep, and a time to laugh; a time to mourn, and a time to dance.",
      "The poem sweeps across the whole range of human experience &mdash; killing and healing, breaking down and building up, embracing and refraining, keeping silence and speaking, love and hate, war and peace. Far from a counsel of despair, it is a recognition that human life moves through seasons, that there is a fitness to things, a rightness to weeping when it is time to weep and to dancing when it is time to dance.",
      "But the Preacher draws from it a humbling lesson. These times are not ours to set. They are appointed; God has woven them into the fabric of existence. We do not choose the season of our birth or the season of our death; we cannot make it spring by an act of will when it is winter in our lives. The rhythms of life run by a wisdom higher than our own, and much of our suffering comes from raging against seasons we cannot change.",
      "Then comes the verse that gives the whole poem its depth: God &ldquo;has made everything beautiful in its time. Also, he has put eternity into man&rsquo;s heart, yet so that he cannot find out what God has done from the beginning to the end&rdquo; (3:11). Here is the great tension of the human condition stated with breathtaking economy. We are creatures of time, bound to the seasons &mdash; and yet eternity stirs within us, a longing for something beyond the passing moment.",
      "That longing is precisely the problem and the dignity of being human. We cannot be content with mere transience because something in us reaches for the everlasting; yet we cannot grasp the eternal, cannot see the whole pattern, cannot find out what God has done from beginning to end. We are caught between a hunger for meaning that nothing in time can satisfy and a knowledge too limited to supply the meaning ourselves.",
      "This is the Preacher&rsquo;s most profound diagnosis of our restlessness. The ache we feel when achievement disappoints us, when pleasure fades, when even love is shadowed by loss &mdash; it is the ache of eternity in a heart confined to time. We were made for more than the sun-bound world can give, and the mismatch is felt as a kind of homesickness for which no earthly remedy exists.",
      "And so this central poem does not resolve the book&rsquo;s tension; it deepens it and points beyond itself. If God has set the times and planted eternity in us, then meaning must be sought not by mastering the seasons but by trusting the One who appoints them. The proper response to a world we cannot control or fully understand is not despair but humility &mdash; and, as the next movement of the book will show, a grateful enjoyment of the present moment as it is given.",
    ],
  },
  {
    id: "Life Under the Sun",
    heading: "Life Under the Sun",
    reference: "Ecclesiastes 4&ndash;11",
    paragraphs: [
      "One phrase echoes through Ecclesiastes more than any other: &ldquo;under the sun.&rdquo; It appears dozens of times, and it is the key to reading the book rightly. &ldquo;Under the sun&rdquo; names life observed within purely earthly horizons &mdash; existence considered on its own terms, without reference to heaven. When the Preacher says all is vanity, he is speaking of life as it appears from that vantage point, hemmed in by the sky and bounded by the grave.",
      "From that vantage, his observations are bracingly realistic. He sees the tears of the oppressed who have no comforter, and power on the side of their oppressors (4:1). He sees the loneliness of the workaholic who toils endlessly, &ldquo;yet his eyes are never satisfied with riches,&rdquo; asking at last, &ldquo;for whom am I toiling?&rdquo; (4:8). He observes that the lover of money is never satisfied with money, that wealth multiplies cares, and that riches are sometimes hoarded to their owner&rsquo;s harm.",
      "He refuses to flinch from the injustices that puncture every neat theory of life. The race is not always to the swift, nor bread to the wise; time and chance happen to them all. The righteous sometimes perish in their righteousness and the wicked prosper in their evil. Seen under the sun alone, the world does not reliably reward virtue, and this hard truth the Preacher states without softening.",
      "And yet, woven through these sober observations is a recurring and unexpected refrain of joy. Again and again the Preacher counsels his readers to enjoy the simple gifts of life. &ldquo;There is nothing better for a person than that he should eat and drink and find enjoyment in his toil. This also, I saw, is from the hand of God&rdquo; (2:24). Food, drink, honest work, the love of a companion &mdash; these ordinary goods are to be received with gladness.",
      "This counsel returns like a steady drumbeat: enjoy your portion (3:12&ndash;13); eat your bread with joy and drink your wine with a merry heart (9:7); enjoy life with the one whom you love (9:9); whatever your hand finds to do, do it with your might (9:10). The Preacher who has exposed the vanity of grasping for ultimate meaning in earthly things now urges us to receive those same things, held loosely, as gifts.",
      "The difference lies entirely in how we hold them. To clutch at wealth, pleasure, or achievement as the source of meaning is to chase the wind and end in disillusionment. But to receive food, drink, work, and love from the hand of God as gifts &mdash; gratefully, in the present moment, without demanding that they bear a weight they were never meant to bear &mdash; is the secret of a contented life. Gratitude transforms the very things that frustrate the grasper into quiet joys for the trusting.",
      "So the Preacher teaches a kind of sanctified contentment. He is no ascetic urging us to despise the world, and no hedonist urging us to devour it. He calls us to enjoy the day God has given, to savor the bread on the table and the companion at our side, precisely because life is fleeting. The brevity that makes life vapor is the very reason to treasure each ordinary gift before it, too, passes away.",
    ],
  },
  {
    id: "Fear God",
    heading: "Fear God",
    reference: "Ecclesiastes 12",
    paragraphs: [
      "After all the searching, all the experiments, all the unflinching observation of a world that slips through our fingers, Ecclesiastes arrives at its destination. The Preacher gathers up everything he has learned and presses it into a single, weighty conclusion: &ldquo;The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man&rdquo; (12:13).",
      "The phrase &ldquo;the whole duty of man&rdquo; signals that we have reached the bottom line. Everything else has been tested and found wanting as a foundation for life. Wisdom apart from God, pleasure apart from God, work and wealth apart from God &mdash; all proved to be vapor. What remains, what alone gives the human story coherence, is a life oriented toward the Creator in reverence and obedience.",
      "To &ldquo;fear God&rdquo; in this sense is not cringing terror but reverent awe &mdash; a recognition that we are creatures and not the Creator, that there is a God to whom we are accountable and before whom the seasons of our lives unfold. This fear is the beginning of wisdom, the posture that finally makes sense of a world we cannot master. It is the opposite of the proud autonomy that tries to wring ultimate meaning from things under the sun.",
      "The Preacher anchors this command in coming judgment: &ldquo;For God will bring every deed into judgment, with every secret thing, whether good or evil&rdquo; (12:14). However tangled and unjust life appears now &mdash; the righteous suffering, the wicked prospering, time and chance scattering rewards seemingly at random &mdash; the account is not yet closed. There is a final reckoning in which every hidden thing will be weighed, and this gives moral seriousness to even our fleeting days.",
      "The book closes, fittingly, with a poem on aging and death (12:1&ndash;7), urging the young to &ldquo;remember your Creator in the days of your youth, before the evil days come.&rdquo; In vivid images it pictures the body&rsquo;s decline, the silver cord snapped, the golden bowl broken, the dust returning to the earth as it was and the spirit returning to God who gave it. The honest gaze at mortality that opened the book closes it as well &mdash; but now pointing us homeward, to the God who gave the spirit and will receive it back.",
      "Read within the whole sweep of Scripture, Ecclesiastes performs an indispensable service. It demonstrates, with merciless honesty, the futility of life lived apart from God &mdash; the dead end of every attempt to find lasting meaning under the sun alone. It refuses every cheap consolation and brings us face to face with death and emptiness, so that we will stop looking to the creation for what only the Creator can give.",
      "In this way the book prepares the heart for the gospel. The Preacher could see the disease &mdash; the vapor of life, the sting of death, the eternity aching in a heart it cannot satisfy &mdash; but he could only point toward the cure. The answer to the meaninglessness and mortality he so honestly exposed comes at last in Christ, who conquers death by resurrection and fills the longing for eternity with himself. Ecclesiastes asks the deepest question of human life; the gospel answers it.",
    ],
  },
];

const videoItems = [
  { videoId: "lrsQ1tc-2wk", title: "BibleProject - Book of Ecclesiastes Overview" },
  { videoId: "tcjuIWMHbCw", title: "Ecclesiastes and the Meaning of Life" },
  { videoId: "n6Pdp73P6X0", title: "Vanity of Vanities - Ecclesiastes Explained" },
];

export default function ChristianBookOfEcclesiastesGuidePage() {
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
            The Book of Ecclesiastes
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Wisdom literature&rsquo;s most surprising and modern-sounding book &mdash; the Preacher&rsquo;s search for meaning, vanity of vanities, the limits of wisdom and wealth and pleasure, a time for everything, enjoying life as a gift from God, and the call to fear God and keep his commandments.
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
              Deepen your study of Ecclesiastes through visual teaching on the structure of the book, the Preacher&rsquo;s search for meaning, and the call to fear God under the sun.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The End of the Matter</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ecclesiastes strips away every illusion that life under the sun can satisfy the eternity God has set in our hearts. Its honesty about vanity and death is not despair but preparation &mdash; clearing the ground for the only conclusion that holds: fear God, receive each day as his gift, and find in him the meaning the world could never give.
          </p>
        </div>
      </main>
    </div>
  );
}
