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
  "Overview",
  "Three Heavenly Visitors",
  "Sarah Laughs",
  "Abraham Intercedes",
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
    heading: "Genesis 18: The Lord Visits Abraham",
    reference: "Genesis 18:1&ndash;33",
    paragraphs: [
      "Genesis 18 stands as one of the richest chapters in all of Scripture, weaving together the themes of divine hospitality, the faithfulness of God&rsquo;s promises, the nature of faith under pressure, and the audacity of intercessory prayer. In a single chapter the reader encounters God himself sharing a meal with Abraham under the oaks of Mamre, the renewal of the promise that seemed impossibly late, Sarah overhearing and laughing with a mixture of delight and disbelief, and then Abraham standing before the LORD and pleading for an entire city.",
      "The chapter is set against the burning heat of a Canaanite midday &mdash; the time when no one moves if they can help it. Abraham sits at the door of his tent at Mamre, the place that has become his home in the land of promise. What happens next is sudden and unexplained: three men appear. The reader, given the narrator&rsquo;s perspective, is told at once that the LORD appears to him (v.1), but Abraham himself does not initially know with whom he is speaking. He sees three travelers and responds with the instinct of a man whose heart is already oriented toward generosity.",
      "What follows is a masterclass in ancient near-eastern hospitality &mdash; and far more. Abraham runs to meet the visitors, bows low, and calls himself their servant. He speaks of a &ldquo;morsel of bread&rdquo; but then rushes to Sarah and calls for the finest flour, hurries to his herd and selects a tender and good calf, and sets before these visitors curds and milk alongside the meal. The extravagance of the welcome &mdash; a whole measure of fine flour, a fatted calf, his own personal service &mdash; signals that Abraham senses something extraordinary about these guests.",
      "The chapter then moves through two pivotal scenes. In the first, the promise of a son is renewed with a specific time-stamp: &ldquo;about this time next year&rdquo; (v.10), and Sarah&rsquo;s laughter exposes the tension between promise and human limitation. In the second, Abraham is drawn into the divine counsel, learns of the impending judgment on Sodom, and engages in the most remarkable negotiation in the Old Testament. Both scenes turn on the same axis: the question of what is possible for God and what response is owed to him.",
      "The theological architecture of Genesis 18 is shaped by two key verses. The first is verse 14: &ldquo;Is anything too hard for the LORD?&rdquo; &mdash; a question that is also a declaration, puncturing every doubt and rebuking every laugh of incredulity. The second is verse 25: &ldquo;Shall not the Judge of all the earth do what is just?&rdquo; &mdash; Abraham&rsquo;s appeal grounded not in sentiment but in the character of God himself. Together these two verses frame the whole chapter: God is the one for whom nothing is impossible, and God is the one whose justice can be trusted and even appealed to.",
      "Genesis 18 does not stand alone. It is the hinge on which the story of Abraham turns from promise to testing, from waiting to near-fulfillment, from faith in the abstract to faith under the weight of real events. It prepares the reader for the birth of Isaac in chapter 21 and for the great test of chapter 22. And it lodges in the memory of the New Testament writers, who will return to Sarah&rsquo;s laughter, to Abraham&rsquo;s friendship with God, and to the practice of entertaining strangers who may be angels (Hebrews 13:2).",
    ],
  },
  {
    id: "Three Heavenly Visitors",
    heading: "Three Heavenly Visitors at Mamre",
    reference: "Genesis 18:1&ndash;8",
    paragraphs: [
      "The scene opens with a deliberate note of time and place: &ldquo;The LORD appeared to him by the oaks of Mamre, as he sat at the door of his tent in the heat of the day&rdquo; (v.1). Mamre had been Abraham&rsquo;s home for some time; it was the place where he had built an altar to the LORD (Genesis 13:18). The oaks of Mamre were not merely a geographical marker but a place of prior meeting with God, giving the scene a sense of accumulated covenant history. Abraham was not seeking a vision &mdash; he was resting in the noon heat. The divine initiative is unmistakable.",
      "When Abraham lifted up his eyes, he saw three men standing in front of him. The text is deliberately layered: the narrator has already said &ldquo;the LORD appeared,&rdquo; but Abraham sees men. As the chapter unfolds it becomes clear that these are no ordinary travelers. Some ancient interpreters and the New Testament letter to the Hebrews (13:2) read this as a visitation by divine messengers; the Christian theological tradition has also read the three visitors as a foreshadowing of the Trinity &mdash; a reading that early church fathers like Augustine found compelling, though it must be held with appropriate care as a typological rather than exegetical claim. What the text itself makes clear is that among the three, one is distinctively identified as &ldquo;the LORD&rdquo; who speaks throughout the rest of the chapter.",
      "Abraham&rsquo;s response to seeing the visitors is immediate and physically vivid: &ldquo;he ran from the tent door to meet them and bowed himself to the earth&rdquo; (v.2). The detail of running is remarkable for a man who is ninety-nine years old. Whatever Abraham perceived about these visitors &mdash; even if he did not yet know their full identity &mdash; something moved him to urgent action and deep reverence. He addresses them with the word &ldquo;my lord,&rdquo; a term of respect, and pleads that they not pass him by.",
      "The hospitality Abraham offers is deliberately extravagant. His offer of &ldquo;a little water&rdquo; and &ldquo;a morsel of bread&rdquo; (v.5) is the language of politeness concealing an intention of great generosity. He does not simply send a servant; he &ldquo;hurried&rdquo; to Sarah and &ldquo;said quickly, &lsquo;Quick&rsquo;&rdquo; (v.6). The flour &mdash; three seahs, roughly forty liters &mdash; would make bread enough to feed many more than three guests. The calf he chose was &ldquo;tender and good,&rdquo; an animal that would have been an expensive offering. The curds and milk alongside the veal represent the full bounty of his household.",
      "The narrative slows to savor the moment of service: Abraham himself stood by them under the tree while they ate (v.8). This detail is poignant and significant. The greatest patriarch of the faith, the man called &ldquo;the friend of God&rdquo; (Isaiah 41:8, James 2:23), took the position of a servant. He did not eat with them but waited upon them. In so doing he became, without knowing the full extent of it, a host who entertained the LORD himself at his table. This resonates with Jesus&rsquo;s later teaching that whatever is done for the least is done for him (Matthew 25:40), and with the promise that he will himself serve those who are ready when he comes (Luke 12:37).",
      "The early church read this hospitality as a pattern and an invitation. The LORD came near not in thunder and smoke but in the vulnerability of travelers needing shade, water, and food. He accepted Abraham&rsquo;s service. There is something here about the nature of incarnation itself &mdash; God entering into the ordinary structures of human life, accepting bread, allowing himself to be served, honoring the welcome of a man whose heart was open. Hebrews 13:2 makes the practical application explicit: &ldquo;Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.&rdquo; The call is not merely to recall Abraham&rsquo;s experience but to inhabit the same posture of generous welcome, because in welcoming others we may welcome the LORD himself.",
    ],
  },
  {
    id: "Sarah Laughs",
    heading: "Sarah Laughs: Is Anything Too Hard for the LORD?",
    reference: "Genesis 18:9&ndash;15",
    paragraphs: [
      "When the visitors have eaten they ask the question that is the hinge of the chapter: &ldquo;Where is Sarah your wife?&rdquo; (v.9). The question itself signals that these are no ordinary travelers. They know her name. They know that she is Abraham&rsquo;s wife and not merely a servant. In the ancient world a woman&rsquo;s place in a household was not always visible to guests; she would typically be behind the screens of the women&rsquo;s quarters or in the tent. The visitors&rsquo; knowledge of her presence and her name identifies them as those who come with a purpose related specifically to her.",
      "Abraham answers simply: &ldquo;She is in the tent.&rdquo; And then the LORD &mdash; now it is explicitly the LORD who speaks &mdash; makes the promise concrete in a way it has never been made before: &ldquo;I will surely return to you about this time next year, and Sarah your wife shall have a son&rdquo; (v.10). The promise has been given before (Genesis 15, Genesis 17), but here it is given a timetable. A year from now. Not &ldquo;in the fullness of time&rdquo; or &ldquo;when the moment is right,&rdquo; but twelve months from this meal under the oaks. The promise is no longer general; it is specific and imminent.",
      "The narrator inserts a crucial parenthetical: &ldquo;Now Abraham and Sarah were old, advanced in years. The way of women had ceased to be with Sarah&rdquo; (v.11). The reader is made to feel the full weight of the impossibility. Sarah was past the age of childbearing by any natural reckoning. She was ninety years old. Whatever Sarah and Abraham may have hoped for in their younger years, those hopes had long since been folded away. The promise had been waiting for decades. Now it was made concrete with a one-year deadline, and the natural order said it could not happen.",
      "Sarah&rsquo;s response is to laugh to herself &mdash; &ldquo;So Sarah laughed to herself, saying, &lsquo;After I am worn out, and my lord is old, shall I have pleasure?&rsquo;&rdquo; (v.12). The laugh is complex, as all genuine human responses to the impossible are complex. It is not quite mockery and not quite faith. It is the laughter of a woman who has waited too long, who has felt the silence of years without a child, who knows what her body is and what it is not, and who is surprised to find hope stirring again unbidden. She laughs because the alternative to laughing is weeping, and she is too old for weeping over this particular grief.",
      "The LORD does not rebuke the laugh as faithlessness worthy of punishment. Instead he addresses it with a question that reframes the entire situation: &ldquo;Why did Sarah laugh and say, &lsquo;Shall I indeed bear a child, now that I am old?&rsquo; Is anything too hard for the LORD?&rdquo; (v.13&ndash;14). This is the pivot of the chapter and one of the great rhetorical questions of Scripture. In the Hebrew, the word translated &ldquo;too hard&rdquo; is &ldquo;pala&rsquo;&rdquo; &mdash; the same root used to describe the &ldquo;wonderful acts&rdquo; of God throughout the Old Testament. The question means: Is anything too wonderful, too extraordinary, too beyond the reach of God&rsquo;s power? The answer is self-evidently no.",
      "Sarah denies that she laughed, and the LORD says simply, &ldquo;No, but you did laugh&rdquo; (v.15). This brief exchange is not a condemnation but a gentle, firm insistence on truth in the presence of God. Sarah laughed; God heard it; the denial does not change what happened. And yet the child will come anyway. Grace does not require perfect faith, only honest faith &mdash; and even honest doubt does not derail the purposes of God. The name Isaac means &ldquo;he laughs,&rdquo; and when he is born Sarah will say, &ldquo;God has made laughter for me; everyone who hears will laugh over me&rdquo; (Genesis 21:6). The laugh of doubt will be transformed into the laugh of joy. This is the pattern of God&rsquo;s redemption: he takes our disbelief and fills it with his faithfulness until it becomes the very source of our praise.",
    ],
  },
  {
    id: "Abraham Intercedes",
    heading: "Abraham Intercedes for Sodom",
    reference: "Genesis 18:16&ndash;33",
    paragraphs: [
      "After the meal, the men rise and look toward Sodom. Abraham walks with them to set them on their way, and then comes one of the most remarkable moments in the entire Old Testament: the LORD pauses and reasons with himself about whether to reveal his plans to Abraham. &ldquo;Shall I hide from Abraham what I am about to do, seeing that Abraham shall surely become a great and mighty nation, and all the nations of the earth shall be blessed in him?&rdquo; (v.17&ndash;18). The decision to share his plans with Abraham is rooted in the covenant itself &mdash; Abraham is not merely a subject of God&rsquo;s plans but a partner in them, the one through whom blessing is to come to all nations.",
      "The LORD tells Abraham that the outcry against Sodom and Gomorrah is great and their sin very grave, and that he is going down to see whether they have done altogether as the outcry has reached him (v.20&ndash;21). The language of &ldquo;going down to see&rdquo; is not a statement of divine ignorance but of divine justice: God does not act on rumor or hearsay but investigates, ensures, and acts with perfect knowledge. His justice is not hasty or arbitrary.",
      "Then the two men &mdash; the angels &mdash; turn toward Sodom, but Abraham remains standing before the LORD (v.22). In the Masoretic text there is a scribal note here called a &ldquo;tiqqun sopherim&rdquo; or correction of the scribes, suggesting that the original text may have said &ldquo;the LORD remained standing before Abraham&rdquo; &mdash; indicating the divine patience and availability to Abraham&rsquo;s prayer. Either way, what follows is an intercession, and Abraham draws near, the text says, to speak with the LORD. The phrase &ldquo;drew near&rdquo; is often used of approaching for prayer or worship; it signals that what Abraham does next is a sacred act.",
      "&ldquo;Will you indeed sweep away the righteous with the wicked?&rdquo; Abraham begins (v.23). The question is bold &mdash; almost shockingly so. Abraham is not asking God to overlook sin or to abandon justice. He is asking whether God&rsquo;s justice can be satisfied in a way that spares the innocent. His argument is grounded in the character of God himself: &ldquo;Far be it from you to do such a thing, to put the righteous to death with the wicked, so that the righteous fare as the wicked! Far be that from you! Shall not the Judge of all the earth do what is just?&rdquo; (v.25). This is one of the most theologically concentrated sentences in the Bible. Abraham does not manipulate God; he appeals to God&rsquo;s own nature. He argues from who God is.",
      "The intercession then proceeds in the most memorable series of negotiations in Scripture. Abraham asks whether fifty righteous in the city would spare it; the LORD says yes. Abraham then presses: what about forty-five? Yes. What about forty? Yes. Thirty? Yes. Twenty? Yes. Ten? &ldquo;For the sake of ten I will not destroy it&rdquo; (v.32). Abraham stops at ten, and the LORD departs. The negotiation reveals several things: the genuine mercy of God, who is willing to spare judgment for the sake of even a small righteous remnant; the power of intercessory prayer, which genuinely engages with God and has real effect; and the limits of Abraham&rsquo;s own courage &mdash; he stops at ten, perhaps fearing to go lower.",
      "The outcome, as the reader will learn in chapter 19, is that not even ten righteous people were found in Sodom. Only Lot and his family are brought out. The city is destroyed. But this does not mean Abraham&rsquo;s prayer was wasted: &ldquo;God remembered Abraham and sent Lot out of the midst of the overthrow&rdquo; (19:29). The intercession did not change the final judgment on the city, but it secured the rescue of those within it who belonged to God&rsquo;s redemptive purposes. Prayer does not overrule God; it becomes the instrument through which God&rsquo;s mercy is channeled.",
      "The intercession of Abraham is the Old Testament&rsquo;s most developed picture of what it means to stand before God on behalf of others. The New Testament sees in it a foreshadowing of Christ, who ever lives to make intercession (Hebrews 7:25) and whose intercession is the ultimate reason any sinner is spared. It is also a pattern for the church, which is called to pray for the world in which it lives &mdash; not as those indifferent to its fate but as those who, like Abraham, stand between the living and the dead, pleading the character of the Judge of all the earth.",
    ],
  },
];

const videoItems = [
  { videoId: "nnrMtdgJwkQ", title: "BibleProject - Abraham and the Three Visitors - Genesis 18" },
  { videoId: "3rPusMo6G60", title: "The Story of Abraham - Genesis Overview" },
  { videoId: "XL3MHTxOaHo", title: "Sodom and Gomorrah - What Actually Happened?" },
  { videoId: "HGbCL-8f-Hg", title: "Is Anything Too Hard for God? - Genesis 18 Teaching" },
];

export default function Genesis18GuidePage() {
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
            Genesis 18
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Three heavenly visitors appear to Abraham at Mamre in the heat of the day. The promise of a son is renewed with a timetable. Sarah overhears and laughs. And then Abraham, standing before the LORD, intercedes with breathtaking boldness for the city of Sodom &mdash; appealing to the justice of the Judge of all the earth.
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
            >
              {t}
            </button>
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

        <div style={{ marginTop: "3rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: 13, textTransform: "uppercase", letterSpacing: 1 }}>Key Verse</h3>
          <p style={{ color: TEXT, lineHeight: 1.8, margin: "0 0 0.5rem", fontSize: "1.1rem", fontStyle: "italic" }}>
            &ldquo;Is anything too hard for the LORD? At the appointed time I will return to you, about this time next year, and Sarah shall have a son.&rdquo;
          </p>
          <p style={{ color: ACCENT, fontSize: 13, fontWeight: 700, margin: 0 }}>Genesis 18:14</p>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 1rem" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.75, margin: "0 0 1.5rem" }}>
            Deepen your study of Genesis 18 with video teaching on Abraham and the three visitors, the promise of Isaac, Sarah&rsquo;s laughter, and Abraham&rsquo;s bold intercession before the Lord.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {videoItems.map((v) => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: "2.5rem" }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <h4 style={{ color: ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 0.6rem" }}>Theological Themes</h4>
            <ul style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.8, margin: 0, paddingLeft: "1.2rem" }}>
              <li>Divine hospitality and incarnation</li>
              <li>Promise and human doubt</li>
              <li>The omnipotence of God</li>
              <li>Intercessory prayer</li>
              <li>God as just judge</li>
              <li>Friendship with God</li>
            </ul>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <h4 style={{ color: ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 0.6rem" }}>New Testament Connections</h4>
            <ul style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.8, margin: 0, paddingLeft: "1.2rem" }}>
              <li dangerouslySetInnerHTML={{ __html: "Hebrews 13:2 &mdash; entertaining angels" }} />
              <li dangerouslySetInnerHTML={{ __html: "Romans 4:19&ndash;21 &mdash; Abraham&rsquo;s faith" }} />
              <li dangerouslySetInnerHTML={{ __html: "Hebrews 7:25 &mdash; Christ&rsquo;s intercession" }} />
              <li dangerouslySetInnerHTML={{ __html: "Luke 1:37 &mdash; nothing impossible with God" }} />
              <li dangerouslySetInnerHTML={{ __html: "James 2:23 &mdash; friend of God" }} />
            </ul>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <h4 style={{ color: ACCENT, fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", margin: "0 0 0.6rem" }}>Key Figures</h4>
            <ul style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.8, margin: 0, paddingLeft: "1.2rem" }}>
              <li>Abraham &mdash; patriarch and intercessor</li>
              <li>Sarah &mdash; the laughing mother-to-be</li>
              <li>The LORD &mdash; present in the three visitors</li>
              <li>Lot &mdash; the one Abraham prays to save</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "1rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Shall Not the Judge of All the Earth Do Right?</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 18 gives the people of God a model for prayer that is bold without being presumptuous, urgent without being faithless. Abraham does not avoid the hard question of judgment; he runs toward it, leans into God&rsquo;s own character, and pleads from it. The same Judge who promised Sarah a son is the Judge whose justice and mercy are held together perfectly &mdash; and who calls his people to stand in the gap.
          </p>
        </div>
      </main>
    </div>
  );
}
