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
  "You Have Searched Me",
  "Where Shall I Flee",
  "Fearfully and Wonderfully Made",
  "Your Thoughts Are Precious",
  "Search Me and Know Me",
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
    id: "You Have Searched Me",
    heading: "You Have Searched Me and Known Me",
    reference: "Psalm 139:1&ndash;6",
    paragraphs: [
      "Psalm 139 opens not with a doctrine but with a confession of intimacy: &ldquo;O Lord, you have searched me and known me&rdquo; (v. 1). The Hebrew word for &ldquo;searched&rdquo; carries the sense of digging deep, of exploring a thing to its very bottom. David is not describing a God who glances at the surface of his life, but one who has examined every layer of his being and found it fully known. Before the psalm ever asks anything of God, it stands in awe of how completely God already knows the psalmist.",
      "The knowledge unfolds in concrete, daily terms. &ldquo;You know when I sit down and when I rise up; you discern my thoughts from afar&rdquo; (v. 2). God knows the ordinary rhythm of David&rsquo;s waking and resting, and more astonishingly, he reads the thoughts of the heart while they are still &ldquo;from afar&rdquo; &mdash; before they have even fully formed. &ldquo;You search out my path and my lying down and are acquainted with all my ways&rdquo; (v. 3). There is no compartment of life, no path taken or rest sought, that lies outside God&rsquo;s attentive care.",
      "Then comes one of the most piercing lines in all of Scripture: &ldquo;Even before a word is on my tongue, behold, O Lord, you know it altogether&rdquo; (v. 4). God knows the unspoken word, the sentence half-formed, the thought that never reaches speech. This is the omniscience of God brought down to the level of a single human soul &mdash; not abstract, but personal. He knows me, all the way down.",
      "&ldquo;You hem me in, behind and before, and lay your hand upon me&rdquo; (v. 5). The image is of a person surrounded on every side, enclosed by the knowledge and presence of God. For the guilty conscience this is a terror; for the trusting heart it is a fortress. To be hemmed in by God is to be held, kept, and protected &mdash; never able to wander beyond the reach of his hand.",
      "David&rsquo;s response is not pride but humble wonder: &ldquo;Such knowledge is too wonderful for me; it is high; I cannot attain it&rdquo; (v. 6). He does not pretend to comprehend the God who comprehends him. The proper posture before such intimate knowledge is worship, not mastery. The One who knows us exhaustively is greater than our capacity to know him in return.",
      "For anyone who has ever felt unseen, overlooked, or invisible, these opening verses are balm. The God of the universe is not distant or indifferent; he attends to your sitting and rising, your words and your silences. You are not lost in the crowd of humanity. You are searched, known, and held by a love that misses nothing.",
    ],
  },
  {
    id: "Where Shall I Flee",
    heading: "Where Shall I Flee From Your Presence",
    reference: "Psalm 139:7&ndash;12",
    paragraphs: [
      "Having marveled at how completely God knows him, David turns to a second great truth: God is everywhere present. &ldquo;Where shall I go from your Spirit? Or where shall I flee from your presence?&rdquo; (v. 7). The questions are rhetorical. There is no destination beyond the reach of God, no corner of creation where his Spirit does not already dwell. To imagine an escape from God is to imagine escaping from existence itself.",
      "David surveys the farthest extremes the ancient mind could conceive. &ldquo;If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!&rdquo; (v. 8). The highest height and the deepest depth, the place of God&rsquo;s glory and the place of the dead &mdash; both are filled with his presence. There is no above and no below that can take a soul beyond God&rsquo;s nearness.",
      "&ldquo;If I take the wings of the morning and dwell in the uttermost parts of the sea, even there your hand shall lead me, and your right hand shall hold me&rdquo; (vv. 9&ndash;10). The &ldquo;wings of the morning&rdquo; evoke the dawn light racing across the earth at impossible speed to the most distant western horizon. Even if David could travel as fast as the sunrise to the ends of the earth, he would find God already there &mdash; not merely present, but leading and holding him. God&rsquo;s omnipresence is not cold surveillance; it is a guiding, steadying hand.",
      "Then David tests the limits another way &mdash; not by distance but by darkness. &ldquo;If I say, Surely the darkness shall cover me, and the light about me be night, even the darkness is not dark to you; the night is bright as the day, for darkness is as light with you&rdquo; (vv. 11&ndash;12). The instinct to hide in shadow is as old as Eden, but no shadow can conceal us from God. To him the blackest night shines like noon.",
      "This truth cuts two ways. For the one running from God in shame or sin, there is no hiding place &mdash; a sobering reality. But for the one walking through the darkness of grief, fear, or depression, these verses are profound comfort: even there, in the place that feels most God-forsaken, his hand still leads and holds. The darkness that overwhelms us does not overwhelm him.",
      "For the anxious heart that fears being alone, and for the suffering soul who feels abandoned in the dark, Psalm 139 answers: you have never been alone, and you are not alone now. There is no pit so deep, no night so black, no distance so far that God&rsquo;s steadying right hand cannot reach you. Wherever you go, he is already there, waiting to lead you home.",
    ],
  },
  {
    id: "Fearfully and Wonderfully Made",
    heading: "Fearfully and Wonderfully Made",
    reference: "Psalm 139:13&ndash;16",
    paragraphs: [
      "At the heart of the psalm lies its most beloved passage, where David traces God&rsquo;s intimate knowledge back to its source: the womb. &ldquo;For you formed my inward parts; you knitted me together in my mother&rsquo;s womb&rdquo; (v. 13). The verb &ldquo;knitted&rdquo; pictures the careful, deliberate work of weaving &mdash; God as craftsman, personally fashioning each person thread by thread in the hidden place. We are not accidents of biology but the handiwork of God.",
      "From this flows one of Scripture&rsquo;s great declarations of human worth: &ldquo;I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well&rdquo; (v. 14). To be &ldquo;fearfully made&rdquo; is to be made in a way that inspires awe; to be &ldquo;wonderfully made&rdquo; is to be set apart, distinguished, marvelously crafted. The right response to your own existence is not contempt but praise &mdash; for you are the work of a wise and loving God.",
      "&ldquo;My frame was not hidden from you, when I was being made in secret, intricately woven in the depths of the earth&rdquo; (v. 15). Even in the unseen darkness of the womb, where no human eye could watch the forming of a child, God was present and at work. The phrase &ldquo;intricately woven&rdquo; echoes the embroiderer&rsquo;s art &mdash; a body composed with skill and beauty by the hands of its Maker.",
      "Then David reaches the staggering truth of God&rsquo;s foreknowledge over a whole life: &ldquo;Your eyes saw my unformed substance; in your book were written, every one of them, the days that were formed for me, when as yet there was none of them&rdquo; (v. 16). Before David drew a single breath, before his body was even complete, God had already written the story of his days. Every life is foreseen, intended, and held within the providence of God from its very first moment.",
      "These verses speak with quiet power to the sanctity and dignity of every human life. The child in the womb is not a thing but a someone &mdash; already known, already loved, already written into God&rsquo;s book before a single day is lived. The worth of a person does not depend on age, ability, achievement, or the approval of others; it is grounded in the One who knit them together and called them his own work.",
      "For the one who struggles to believe they have any value, who battles self-loathing, who feels like a mistake, Psalm 139 offers an answer that no human voice can give. You were made on purpose, by a God who does not make mistakes. Your existence is wonderful to him, your frame is his craftsmanship, and your days are written in his book. You are not an accident. You are fearfully and wonderfully made.",
    ],
  },
  {
    id: "Your Thoughts Are Precious",
    heading: "How Precious Are Your Thoughts",
    reference: "Psalm 139:17&ndash;22",
    paragraphs: [
      "David has marveled that God knows all his thoughts; now he turns the wonder around and contemplates God&rsquo;s thoughts toward him. &ldquo;How precious to me are your thoughts, O God! How vast is the sum of them!&rdquo; (v. 17). The God who searches us is not merely watching; he is thinking of us, and his thoughts toward his people are precious beyond counting.",
      "&ldquo;If I would count them, they are more than the sand. I awake, and I am still with you&rdquo; (v. 18). David imagines trying to number God&rsquo;s thoughts the way one might count grains of sand on the shore &mdash; an impossible task. And the tender final line carries a beautiful intimacy: when he falls asleep wrestling with such thoughts and wakes again, God is still there. The communion never breaks. The presence does not depart in the night.",
      "Then the psalm takes a hard and sudden turn. &ldquo;Oh that you would slay the wicked, O God! O men of blood, depart from me!&rdquo; (v. 19). This is the imprecatory turn &mdash; a cry against the wicked that can startle modern readers. David goes on: &ldquo;Do I not hate those who hate you, O Lord, and loathe those who rise up against you? I hate them with complete hatred; I count them my enemies&rdquo; (vv. 21&ndash;22).",
      "These verses must be read carefully and honestly. David is not nursing personal spite; he is identifying himself wholly with God&rsquo;s cause against those who openly defy and blaspheme God &mdash; the &ldquo;men of blood&rdquo; who shed innocent life. His zeal flows from love for God&rsquo;s name and grief over evil. It is the cry of a heart that cannot be neutral about wickedness because it has been gripped by the holiness of God.",
      "Yet the psalm does not leave us simply to echo David&rsquo;s words. In the light of Christ, who taught us to love our enemies and pray for those who persecute us, we learn to hate the evil while we long for the sinner&rsquo;s repentance. The deepest desire is not the destruction of persons but the destruction of evil itself &mdash; a longing that finds its true answer at the cross, where sin was condemned so that sinners might be saved.",
      "Crucially, David does not trust his own heart even in his zeal. Having voiced his strong words against the wicked, he immediately turns the searchlight back on himself in the verses that follow. The one who hates evil so fiercely knows that the line between good and evil runs through his own heart too &mdash; and so he asks God to examine him first.",
    ],
  },
  {
    id: "Search Me and Know Me",
    heading: "Search Me, O God, and Know My Heart",
    reference: "Psalm 139:23&ndash;24",
    paragraphs: [
      "The psalm that began with &ldquo;you have searched me&rdquo; now closes with a prayer: &ldquo;Search me, O God, and know my heart! Try me and know my thoughts!&rdquo; (v. 23). What was a statement of fact in verse 1 becomes a request in verse 23. David does not merely accept that God knows him; he invites that searching gaze, throwing open every door of his inner life to divine examination.",
      "This is the mark of a heart that loves God more than it loves its own comfort. To pray &ldquo;search me&rdquo; is to surrender the right to self-deception. We are masters at hiding from ourselves, at excusing our sins and burying our motives. David asks God to do what he cannot do for himself &mdash; to expose what is truly there, even the things he would rather not see.",
      "&ldquo;And see if there be any grievous way in me, and lead me in the way everlasting!&rdquo; (v. 24). The searching is not an end in itself; it is for the sake of cleansing and guidance. David wants any &ldquo;grievous way&rdquo; &mdash; any offensive path, any hidden idolatry &mdash; brought to light so that it can be forsaken. And then he asks to be led in &ldquo;the way everlasting,&rdquo; the path that endures into eternity.",
      "There is profound grace in the order of this psalm. God&rsquo;s exhaustive knowledge of us, declared at the start, is precisely what makes this closing prayer safe to pray. We can ask the One who already knows everything to search us, because there is nothing he will discover that he has not already seen and chosen to love us through. The searching of God is the searching of a Father, not a prosecutor.",
      "For the anxious soul, this prayer is also a release. Rather than the exhausting work of self-examination spiraling into endless worry, David hands the task to God: you search me, you try me, you lead me. We are not left alone to untangle the knots of our own hearts. We give them to the One who knit us together and trust him to lead us home.",
      "Psalm 139 ends, then, where the Christian life is meant to be lived: in open, trusting surrender to the God who knows us completely and loves us still. The path of life is not found by hiding from God but by inviting his light into every corner. &ldquo;Lead me in the way everlasting&rdquo; is the prayer of every soul that has stopped running and finally come home to be fully known and fully loved.",
    ],
  },
];

const videoItems = [
  { videoId: "GswSg2ohqmA", title: "BibleProject - The Book of Psalms - Overview" },
  { videoId: "3oVPENBcjqs", title: "Psalm 139 - Fearfully and Wonderfully Made Explained" },
  { videoId: "l9vn5UvsHvM", title: "The Omniscience and Omnipresence of God in Psalm 139" },
  { videoId: "7e2dN5Mb3FE", title: "Search Me O God - Pastoral Reflection on Psalm 139" },
];

export default function Psalm139GuidePage() {
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
            Psalms Study
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            Psalm 139
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Fearfully and wonderfully made &mdash; David&rsquo;s soaring meditation on the God who searches and knows us completely, who is present in every height and depth, who knit us together in the womb, whose thoughts toward us outnumber the sand, and who leads the surrendered heart in the way everlasting.
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
              Deepen your study of Psalm 139 through visual teaching on the omniscience and omnipresence of God, the dignity of every human life, and the prayer that asks God to search and lead the heart.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Known, and Loved</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Psalm 139 answers the deepest fears of the human heart &mdash; that we are unseen, unwanted, alone, or without worth. To the anxious it says you are held; to the one in darkness it says he is there; to the one who feels like a mistake it says you are fearfully and wonderfully made. And to every soul it offers the same homecoming prayer: &ldquo;Search me, O God, and know my heart&hellip; and lead me in the way everlasting.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
