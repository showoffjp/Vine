"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const GOLD = "#D97706";
const PURPLE = "#6B4FBB";
const TEAL = "#0D9488";
const ROSE = "#E11D48";

const ACCENT = GOLD;

const TABS = [
  "Overview",
  "Key Themes",
  "Verse by Verse",
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
    heading: "Overview of Proverbs 20",
    reference: "Proverbs 20:1&ndash;30",
    paragraphs: [
      "Proverbs 20 belongs to the great central collection of the book, the proverbs of Solomon that run from chapter 10 through chapter 22, a treasury of short, self-contained sayings gathered to instruct the reader in the art of living wisely under God. Unlike the longer discourses of the opening chapters, where wisdom is personified and a father pleads with his son, this section offers wisdom in concentrated bursts, each verse a polished gem that can be turned over and pondered on its own. Chapter 20 gathers some thirty such sayings, ranging across the dangers of drink, the wisdom of avoiding strife, the value of diligence, the universality of human sinfulness, the demand for honesty in business, and the searching power of the conscience, which the chapter names the lamp of the LORD.",
      "The proverbs of this chapter take several literary forms that reward attention. Many are antithetical, setting a wise course against a foolish one with a sharp contrast, as when the honor of keeping aloof from strife is set against the folly of constant quarreling. Others are observational, simply holding up a truth about the way the world works under God&rsquo;s governance, as in the saying that a man&rsquo;s purpose is like deep water that the understanding draw out. Still others are admonitions or warnings, urging a particular action or restraint. To read Proverbs 20 well is to slow down and let each saying do its distinct work, rather than rushing through them as a list.",
      "A unifying note that sounds throughout the chapter is the soberness of true wisdom. The very first verse warns that wine is a mocker and strong drink a brawler, and this concern with clear-eyed self-control echoes through the chapter&rsquo;s repeated attention to the heart, the conscience, and the inner life. Wisdom in Proverbs is never merely cleverness or worldly shrewdness; it is the skill of ordering one&rsquo;s whole life in the fear of the LORD, with a heart that is honest before God and others. The chapter probes beneath outward behavior to the springs of motive and character, insisting that what we are within is finally more decisive than the impression we manage to give.",
      "Two of the chapter&rsquo;s sayings rise to a particular theological weight and deserve to be held at the center of any reading. The first is verse 9, the searching question, &ldquo;Who can say, I have made my heart pure; I am clean from my sin?&rdquo; This rhetorical question, expecting the answer that no one can say such a thing, anchors the chapter in the biblical doctrine of universal human sinfulness. The second is verse 27, &ldquo;The spirit of man is the lamp of the LORD, searching all his innermost parts,&rdquo; the most famous verse in the chapter and one of the great biblical statements on the nature of conscience. Together these two verses set the chapter&rsquo;s practical counsel within a profound vision of the human heart laid open before God.",
      "The chapter also gives sustained attention to the ordinary arenas in which character is tested and revealed: the tavern and the temptation to drink, the marketplace and the temptation to cheat with false weights, the field and the temptation to laziness, the court of the king and the danger of provoking authority, the home and the blessing that flows to the children of a righteous man. Proverbs 20 refuses any divorce between piety and practical life. The fear of the LORD must show itself in sober habits, honest scales, diligent labor, a peaceable spirit, and a clear conscience, in the very places where life is actually lived.",
      "For the reader today, Proverbs 20 is an invitation to a thoroughly integrated wisdom, in which what is believed about God shapes how business is conducted, how strife is handled, how the body is governed, and how the heart is searched. It does not flatter human nature, for it bluntly asks who can claim a pure heart, yet it does not leave the reader in despair, for it points to a God whose lamp searches the innermost parts and whose steadfast love upholds. To take this chapter seriously is to submit the whole of one&rsquo;s daily conduct to the gaze of the God who weighs the heart.",
    ],
  },
  {
    id: "Key Themes",
    heading: "Key Themes in Proverbs 20",
    reference: "Wisdom, Sin, Honesty, and the Searching Lamp",
    paragraphs: [
      "The first theme of the chapter is the danger of strong drink and the soberness of wisdom. &ldquo;Wine is a mocker, strong drink a brawler, and whoever is led astray by it is not wise&rdquo; (20:1). The proverb personifies the drink itself, picturing wine as a scoffer that makes a fool of the one who indulges and strong drink as a brawler that stirs up violence. The point is not a blanket condemnation of every cup but a warning against the loss of self-mastery, for the one who is led astray by drink surrenders precisely that clear-eyed self-control which wisdom requires. Throughout Scripture the wise are those who keep their wits about them, govern their appetites, and refuse to let any substance rule their judgment.",
      "A second theme is the wisdom of avoiding strife and the honor of a peaceable spirit. &ldquo;It is an honor for a man to keep aloof from strife, but every fool will be quarreling&rdquo; (20:3). The chapter consistently prizes restraint over reactivity. To step back from a quarrel is portrayed not as weakness but as dignity, while the fool reveals himself by his eagerness to fight over every slight. This is reinforced by the warning of verse 2 about the dread of a king, whose anger is like the growling of a lion, so that whoever provokes him forfeits his life. Wisdom knows when to withdraw, when to hold the tongue, and when not to provoke, valuing peace and self-possession above the hollow satisfaction of winning an argument.",
      "A third theme is diligence over laziness. &ldquo;The sluggard does not plow in the autumn; he will seek at harvest and have nothing&rdquo; (20:4). The proverb exposes the foolishness of the lazy person who neglects the necessary labor in its proper season and then is left empty-handed when the time of reaping comes. Proverbs everywhere honors steady, timely work and warns against the self-deceptions of the sluggard, who always finds an excuse to delay. The agricultural image is pointed: there is a season for plowing, and the one who will not bend his back to the task when it is required has no right to expect a harvest. Wisdom acts in due season and reaps accordingly.",
      "A fourth and weighty theme is the universality of human sinfulness. &ldquo;Who can say, I have made my heart pure; I am clean from my sin?&rdquo; (20:9). This searching question expects the answer that no one can honestly make such a claim, and it places the chapter squarely within the great biblical witness to the fallen condition of every human heart. It anticipates the apostle Paul&rsquo;s declaration that all have sinned and fall short of the glory of God, and the warning of First John that if we say we have no sin we deceive ourselves. The verse strips away every pretense of self-righteousness and prepares the reader to look beyond personal achievement for cleansing, casting the soul upon the mercy of God rather than the illusion of a self-purified heart.",
      "A fifth theme is honesty in business, expressed in the demand for just weights and measures. &ldquo;Unequal weights and unequal measures are both alike an abomination to the LORD&rdquo; (20:10), a concern repeated in verse 23, &ldquo;Unequal weights are an abomination to the LORD, and false scales are not good.&rdquo; In the ancient marketplace, dishonest merchants kept heavier weights for buying and lighter ones for selling, cheating their neighbors through rigged scales. The law of Moses had already condemned such practices, commanding just balances and honest weights in Leviticus 19. By calling false weights an abomination, the proverb lifts everyday commercial integrity to the level of worship, declaring that how we handle a transaction is a matter of how we stand before a holy God.",
      "The crowning theme of the chapter is the conscience as the lamp of the LORD. &ldquo;The spirit of man is the lamp of the LORD, searching all his innermost parts&rdquo; (20:27). God has placed within every person an inner faculty, the spirit or conscience, which functions like a lamp that he himself uses to search the hidden chambers of the heart. Nothing in the innermost parts escapes that searching light. This profound saying teaches that human beings are never finally hidden from God, who illumines and examines the depths of the soul through the very conscience he has given. Alongside the chapter&rsquo;s honor for every stage of life in verse 29, the splendor of gray hair as well as the strength of youth, it presents a vision of human persons made for openness before their Maker at every age.",
    ],
  },
  {
    id: "Verse by Verse",
    heading: "Verse by Verse Through Proverbs 20",
    reference: "Selected Sayings of Proverbs 20",
    paragraphs: [
      "Verse 1 sets the tone: &ldquo;Wine is a mocker, strong drink a brawler, and whoever is led astray by it is not wise.&rdquo; The proverb personifies intoxicating drink, casting wine as a scoffer and strong drink as a brawler, two figures who bring ridicule and violence in their wake. The one who is led astray by such drink, who allows it to master him, forfeits the clear judgment that wisdom requires. The verse does not lecture about quantity so much as warn about surrender, about the loss of self-government that comes when appetite takes the helm. It stands at the head of the chapter as a banner over the whole, announcing that wisdom is sober, watchful, and in command of itself.",
      "Verses 2 and 3 turn to the realm of authority and conflict. &ldquo;The dread of a king is like the growling of a lion; whoever provokes him to anger forfeits his life&rdquo; (20:2). The wrath of a powerful ruler is as dangerous as the roar of a lion, and wisdom knows better than to needlessly provoke it. Verse 3 then broadens the lesson into a general principle: &ldquo;It is an honor for a man to keep aloof from strife, but every fool will be quarreling.&rdquo; The truly honorable person steps back from needless conflict, while the fool cannot resist the pull of a quarrel. Together these verses commend a disciplined restraint that values peace and prudence over the impulse to provoke or to fight.",
      "Verses 4 and 5 move from conflict to character and counsel. &ldquo;The sluggard does not plow in the autumn; he will seek at harvest and have nothing&rdquo; (20:4) holds up the lazy man who refuses the labor of the plowing season and then finds nothing to gather when harvest comes. Verse 5 offers one of the chapter&rsquo;s most beautiful images: &ldquo;The purpose in a man&rsquo;s heart is like deep water, but a man of understanding will draw it out.&rdquo; Human motives and plans lie deep, like water at the bottom of a well, often hidden even from the person himself, yet the wise and discerning have the patient skill to draw those depths to the surface. The verse honors the gift of understanding that listens, questions gently, and brings hidden purposes to light.",
      "Verses 7 and 9 anchor the chapter in righteousness and the reality of sin. &ldquo;The righteous who walks in his integrity, blessed are his children after him!&rdquo; (20:7) teaches that a life of integrity is not only its own reward but a legacy, for the blessing of an upright parent flows down to the generations that follow. Verse 9 then asks the chapter&rsquo;s most piercing question: &ldquo;Who can say, I have made my heart pure; I am clean from my sin?&rdquo; The expected answer is no one. However diligently a person walks in integrity, no human being can claim to have achieved a perfectly pure heart by his own effort. The verse humbles every reader, exposing the universal need for a cleansing that lies beyond self-improvement.",
      "Verses 10 through 12 gather honesty, the revelation of character, and the gift of the senses. &ldquo;Unequal weights and unequal measures are both alike an abomination to the LORD&rdquo; (20:10) condemns the rigged scales of the dishonest merchant as something God detests. Verse 11 observes that &ldquo;even a child makes himself known by his acts, by whether his conduct is pure and upright,&rdquo; teaching that character reveals itself early and through deeds rather than words. Verse 12 lifts the eyes to the Creator: &ldquo;The hearing ear and the seeing eye, the LORD has made them both.&rdquo; The very faculties by which we perceive the world are gifts of God, which implies an accountability to use them in his service and under his gaze.",
      "Verse 27 stands as the jewel of the chapter: &ldquo;The spirit of man is the lamp of the LORD, searching all his innermost parts.&rdquo; God has set within each person a spirit, a conscience, that functions like a lamp he himself holds to illumine the hidden recesses of the soul. Nothing in the innermost parts is concealed from that searching light. This is the great biblical text on the conscience as the inner witness through which God examines the heart, and it teaches that we are never finally hidden, even from ourselves, because God probes the depths through the very faculty he has placed within us. It is a verse both solemn and gracious, for the light that exposes is also the light that can guide.",
      "Verses 28 and 29 close the survey with the steadiness of love and the glory of every age. &ldquo;Steadfast love and faithfulness preserve the king, and by steadfast love his throne is upheld&rdquo; (20:28) teaches that lasting authority rests not on force but on covenant loyalty and faithfulness, the very qualities that mirror God&rsquo;s own character. Verse 29 then honors the full span of human life: &ldquo;The glory of young men is their strength, but the splendor of old men is their gray hair.&rdquo; Each season has its proper dignity, the vigor of youth and the seasoned wisdom of age, and neither is to be despised. The chapter thus ends with a generous vision in which every stage of life carries its own honor before God.",
    ],
  },
  {
    id: "Application",
    heading: "Living Proverbs 20 Today",
    reference: "Personal and Community Application",
    paragraphs: [
      "Proverbs 20 presses its wisdom into the most ordinary corners of daily life, and its first application concerns the government of our appetites. The warning that wine is a mocker and strong drink a brawler speaks to every age about the danger of allowing any substance or pleasure to master us and rob us of clear judgment. The application is not necessarily total abstinence but vigilant self-control, a refusal to surrender the helm of our lives to appetite. In a culture that often celebrates excess, the believer is called to a sober, watchful wisdom that keeps its wits, guards its judgment, and remains in command of itself for the sake of a life well ordered before God.",
      "The chapter&rsquo;s counsel on strife offers a second, deeply practical application for our relationships and our public discourse. To keep aloof from strife is called an honor, while the fool is always quarreling. In an age of inflamed argument, where conflict is amplified and provocation rewarded, the wisdom of stepping back, holding the tongue, and refusing to be drawn into needless fights is both rare and dignified. This does not mean cowardice or the abandonment of conviction, but the mature restraint that knows which battles are worth fighting and which are merely the fool&rsquo;s appetite for conflict. Cultivating a peaceable spirit, in the home, the workplace, and online, is a concrete way to walk in the wisdom of this chapter.",
      "The searching question of verse 9, who can say I have made my heart pure, lays the axe to the root of all self-righteousness and points the reader toward the gospel. The honest application of this verse is the humble confession that we cannot cleanse ourselves, that beneath our best efforts at integrity there remains a heart we cannot purify by willpower. This drives us out of ourselves and toward the mercy of God, who alone can cleanse the conscience. Read in the light of the New Testament, the question finds its answer not in human achievement but in the blood of Christ, which purifies the heart that no amount of self-effort could make clean. The verse keeps us humble, dependent, and looking to grace.",
      "The repeated demand for honest weights and measures translates directly into the ethics of modern work and commerce. The God who calls false scales an abomination cares about the integrity of our transactions, the accuracy of our reporting, the honesty of our pricing, and the fairness of our dealings with neighbor and stranger alike. To apply this proverb is to refuse every form of the rigged scale, whether in business, taxes, contracts, or the small daily temptations to shade the truth for advantage. It lifts ordinary commercial integrity to the level of worship, teaching that how we conduct a transaction is finally a matter of how we stand before a holy God who sees every weight and every measure.",
      "The image of the spirit of man as the lamp of the LORD invites a disciplined attention to conscience. If God searches our innermost parts through the very spirit he has placed within us, then we are called to keep a clear and sensitive conscience, neither searing it through repeated compromise nor burdening it with false guilt, but tending it as a lamp meant to give light. The practical application is regular self-examination in the presence of God, allowing his light to reach the hidden chambers of motive and desire, welcoming the conviction that exposes sin so that it may be confessed and cleansed. A well-kept conscience is one of the great safeguards of a wise and stable life.",
      "Finally, the chapter&rsquo;s honor for every stage of life, the strength of the young and the gray hair of the old, calls the believing community to value all its members. In a culture that often idolizes youth and discards the aged, Proverbs 20 insists that each season carries its own splendor, the vigor and zeal of the young and the seasoned wisdom of the old. The application is a community that honors its elders, draws on their accumulated understanding, and channels the strength of its young toward worthy ends. Where steadfast love and faithfulness uphold the relationships of such a community, as they uphold the throne of the king in verse 28, the fellowship reflects the very character of the God whose lamp searches every heart and whose love preserves his people.",
    ],
  },
];

const questions = [
  "Where in your life are you tempted to let an appetite or pleasure master you and cloud your judgment, and what would sober, watchful self-control look like in that area?",
  "Verse 3 calls keeping aloof from strife an honor. Which quarrels are you drawn into that wisdom would have you step back from, and how can you cultivate a more peaceable spirit?",
  "The question of verse 9, who can say my heart is pure, exposes self-righteousness. How does honestly admitting you cannot cleanse your own heart drive you toward the mercy of God?",
  "God calls false weights an abomination. Are there places in your work or finances where the small temptations to shade the truth need to be confronted in the light of God&rsquo;s gaze?",
  "If your spirit is the lamp of the LORD searching your innermost parts, how can you keep a clear and sensitive conscience through regular self-examination before God?",
];

const videoItems = [
  { videoId: "AzmYV8GNAIM", title: "BibleProject - Overview: Proverbs" },
  { videoId: "iMtBwtA3MmM", title: "Proverbs 20 - The Lamp of the LORD - Verse by Verse" },
  { videoId: "Mp6xPK_t1Pk", title: "Who Can Say My Heart Is Pure? - Proverbs 20:9 Explained" },
  { videoId: "PpoKMWi_xWY", title: "The Conscience as God's Lamp - Proverbs 20:27" },
];

export default function Proverbs20GuidePage() {
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
            Proverbs 20 &mdash; The Lamp of the LORD
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            &ldquo;The spirit of man is the lamp of the LORD, searching all his innermost parts&rdquo; &mdash; a chapter of polished sayings on the soberness of wisdom, the wisdom of avoiding strife, the diligence that reaps, the sin no one can deny, the honesty of just weights, and the searching light of the conscience God has placed within.
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

            {activeTab === "Application" && (
              <div style={{ marginTop: "2.5rem", background: CARD, border: `1px solid ${PURPLE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
                <h3 style={{ color: PURPLE, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.2rem" }}>Reflection Questions</h3>
                <ol style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {questions.map((q, i) => (
                    <li
                      key={i}
                      style={{ color: MUTED, lineHeight: 1.75, fontSize: "1.02rem" }}
                      dangerouslySetInnerHTML={{ __html: q }}
                    />
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Proverbs 20 through these video teachings on the soberness of wisdom, the universal reality of sin that no one can deny, the demand for honest weights, and the conscience as the searching lamp of the LORD.
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

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Searched by the Lamp of the LORD</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Proverbs 20 refuses any divorce between faith and daily life, pressing the fear of the LORD into the tavern, the marketplace, the field, and the heart. It humbles every reader with the question no one can answer in his own favor, who can say my heart is pure, and then assures us that the God who searches the innermost parts through the lamp of the conscience is the same God whose steadfast love upholds. To take this chapter to heart is to live soberly, deal honestly, walk peaceably, and keep a clear conscience under the searching gaze of God.
          </p>
        </div>
      </main>
    </div>
  );
}
