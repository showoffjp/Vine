"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";
const GREEN = "#3a7d56";
const PURPLE = "#6B4FBB";
const GOLD = "#D97706";
const BLUE = "#3B82F6";
const TEAL = "#0D9488";

export default function Proverbs22GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "Kp7TJ3MQHRE", title: "Proverbs 22 -- A Good Name, Child Training, and the Wise Sayings" },
    { videoId: "nL9P4FZLT8c", title: "Train Up a Child -- Proverbs 22:6 in Context" },
    { videoId: "X4mRvFB8zXA", title: "The 30 Sayings of the Wise -- Proverbs 22:17 to 24:22" },
    { videoId: "sGv7Yq2pFkM", title: "Wealth, Poverty, and God&rsquo;s Justice in Proverbs" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "key-themes", label: "Key Themes" },
    { id: "verse-by-verse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: "linear-gradient(180deg, #0e0e1a 0%, #07070F 100%)", borderBottom: `1px solid ${BORDER}`, padding: "56px 20px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 8, padding: "4px 14px", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.08em", marginBottom: 18 }}>
            PROVERBS 22 &mdash; BIBLE STUDY GUIDE
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: TEXT }}>
            A Good Name, Wise Parenting, and the Thirty Sayings
          </h1>
          <p dangerouslySetInnerHTML={{ __html: "Proverbs 22 is a pivot chapter in the book of Proverbs. Its first sixteen verses contain some of the most quoted maxims in the Bible &mdash; on reputation, rich and poor, parenting, debt, and generosity. Then at verse 17, the literary form shifts dramatically as the &ldquo;Thirty Sayings of the Wise&rdquo; begin, a collection that echoes an ancient Egyptian wisdom text and has shaped biblical ethics on justice, speech, and faithful living for millennia." }} style={{ fontSize: 17, color: MUTED, lineHeight: 1.8, maxWidth: 680, margin: "0 auto" }} />
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <div style={{ background: `${GOLD}14`, border: `1px solid ${GOLD}30`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: GOLD, fontWeight: 700 }}>29 Verses</div>
            <div style={{ background: `${BLUE}14`, border: `1px solid ${BLUE}30`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: BLUE, fontWeight: 700 }}>Wisdom Poetry</div>
            <div style={{ background: `${PURPLE}14`, border: `1px solid ${PURPLE}30`, borderRadius: 8, padding: "8px 18px", fontSize: 13, color: PURPLE, fontWeight: 700 }}>Two Literary Sections</div>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "14px 22px",
                background: "none",
                border: "none",
                borderBottom: activeTab === tab.id ? `2px solid ${GOLD}` : "2px solid transparent",
                color: activeTab === tab.id ? GOLD : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ===== OVERVIEW TAB ===== */}
        {activeTab === "overview" && (
          <div>
            {/* Introduction */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>LITERARY CONTEXT</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 14 }}>Where Proverbs 22 Sits in the Book</h2>
              <p dangerouslySetInnerHTML={{ __html: "The book of Proverbs is not a single unified composition but a carefully edited anthology of wisdom materials from different periods and sources. Chapter 22 falls within the major section of &ldquo;Proverbs of Solomon&rdquo; (10:1&ndash;22:16) &mdash; 375 mostly independent two-line sayings attributed to Israel&rsquo;s great wisdom king. This section is the densest concentration of memorable proverbs in the entire book, and chapter 22 brings it to a close with some of its most famous lines." }} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }} />
              <p dangerouslySetInnerHTML={{ __html: "At verse 17, everything changes. The heading &ldquo;Incline your ear and hear the words of the wise&rdquo; (or in some translations, &ldquo;the words of the Wise&rdquo; as a proper title) introduces the &ldquo;Thirty Sayings of the Wise,&rdquo; which runs from 22:17 through 24:22. These sayings are longer than the typical two-line Solomonic proverbs &mdash; they are three-to-six line poems with explicit motivations and applications. Biblical scholars have long noted their remarkable resemblance to an ancient Egyptian wisdom text called the Instructions of Amenemope (c. 1200&ndash;1000 BC), which also contains thirty &ldquo;houses&rdquo; or sections of wisdom. This connection does not undermine the Bible&rsquo;s authority &mdash; it demonstrates that God&rsquo;s wisdom, as the book of Proverbs itself acknowledges, is reflected throughout creation and recognizable across cultures." }} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }} />
            </div>

            {/* Structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <div style={{ color: BLUE, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>CHAPTER STRUCTURE</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 20 }}>The Two Halves of Proverbs 22</h2>
              {[
                { ref: "vv. 1&ndash;16", label: "Proverbs of Solomon (Conclusion)", desc: "The final sixteen verses of the long Solomonic collection, including the famous sayings on a good name (v.1), the shared humanity of rich and poor (v.2), the prudent who foresee danger (v.3), humility and fear of the Lord (v.4), child training (v.6), the borrower as slave (v.7), the generous eye (v.9), and warnings about exploitation of the poor (vv.22&ndash;23)." },
                { ref: "vv. 17&ndash;21", label: "Prologue to the Thirty Sayings", desc: "An introductory section that frames what follows: the student is invited to incline their ear, trust in the Lord, receive wisdom into their heart, and be equipped to respond truthfully to those who question them. This is wisdom education described in terms of formation, not mere information." },
                { ref: "vv. 22&ndash;29", label: "First Sayings of the Thirty", desc: "The opening sayings of the Thirty cover: protection of the poor from legal exploitation, warning against hot-tempered companions, the danger of pledging security for debts, the ancient boundaries set by ancestors, and the excellence of a skilled worker who stands before kings rather than obscure men." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < 2 ? 18 : 0 }}>
                  <div style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}30`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 700, color: GOLD, whiteSpace: "nowrap", height: "fit-content", marginTop: 2 }} dangerouslySetInnerHTML={{ __html: item.ref }} />
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.label}</div>
                    <p dangerouslySetInnerHTML={{ __html: item.desc }} style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }} />
                  </div>
                </div>
              ))}
            </div>

            {/* About Proverbs genre */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 24 }}>
              <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>HOW TO READ PROVERBS</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 14 }}>Proverbs Are Wisdom, Not Promises</h2>
              <p dangerouslySetInnerHTML={{ __html: "A proverb is a compressed observation about how life generally works &mdash; not an unconditional divine guarantee. &ldquo;Train up a child in the way he should go; even when he is old he will not depart from it&rdquo; (v.6) is a wisdom observation about the long-term power of early formation, not a contract that guarantees every child raised in a believing home will remain faithful. &ldquo;A good name is more desirable than great riches&rdquo; (v.1) states a general truth about value, not a claim that godly people will never suffer poverty or that the poor have bad reputations." }} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }} />
              <p dangerouslySetInnerHTML={{ __html: "Reading Proverbs rightly requires this hermeneutical awareness. The book itself acknowledges tensions: Proverbs 26:4 says &ldquo;Do not answer a fool according to his folly&rdquo; and verse 5 immediately says &ldquo;Answer a fool according to his folly.&rdquo; This is not contradiction &mdash; it is the wisdom tradition modeling that different situations call for different applications of general principles. Proverbs teaches you to think wisely; it does not exempt you from thinking." }} style={{ color: TEXT, lineHeight: 1.8, fontSize: 15, margin: 0 }} />
            </div>

            {/* Summary */}
            <div style={{ background: `${GOLD}0a`, border: `1px solid ${GOLD}25`, borderRadius: 14, padding: 26 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>ONE-PARAGRAPH SUMMARY</div>
              <p dangerouslySetInnerHTML={{ __html: "Proverbs 22 closes the longest collection of Solomonic sayings with some of the Bible&rsquo;s most celebrated wisdom on reputation, wealth, poverty, parenting, and generosity, then pivots at verse 17 to introduce the Thirty Sayings of the Wise &mdash; a longer, more discursive wisdom tradition that addresses the education of a young person in truthful speech, just economic practice, and the fear of the Lord. Together the two halves of the chapter present a vision of wisdom as the comprehensive formation of character: how we earn our reputation, raise our children, handle our money, use our words, treat the vulnerable, and cultivate the skill that eventually earns us a place among those who shape the world." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} />
            </div>
          </div>
        )}

        {/* ===== KEY THEMES TAB ===== */}
        {activeTab === "key-themes" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: TEXT, marginBottom: 6 }}>Key Themes in Proverbs 22</h2>
              <p dangerouslySetInnerHTML={{ __html: "Proverbs 22 touches a remarkable range of life domains in just 29 verses. Five major themes thread through the chapter and give it theological coherence beneath its variety." }} style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }} />
            </div>

            {[
              {
                num: "01",
                color: GOLD,
                title: "Reputation Over Riches",
                body1: "The chapter&rsquo;s famous opening &mdash; &ldquo;A good name is more desirable than great riches; to be esteemed is better than silver or gold&rdquo; (v.1) &mdash; sets the tone for everything that follows. &ldquo;Name&rdquo; in Hebrew (shem) carries more weight than in English. It encompasses reputation, character, and the public narrative of your life. In a culture without credit bureaus, social media profiles, or background checks, your name was your biography &mdash; the accumulated record of how you had dealt with others over years and decades.",
                body2: "The proverb is not condemning wealth or saying the poor are more virtuous. Proverbs is quite realistic about the practical advantages of wealth (10:15, 18:11). The claim is comparative: when forced to choose &mdash; when the path to riches requires compromising integrity, or when living with integrity costs you economically &mdash; the wise person chooses the name. Because the name is what you actually have at the end. Silver and gold can be lost; character is portable and lasting.",
                body3: "The New Testament deepens this: &ldquo;A good name is rather to be chosen&rdquo; echoes through Philippians 4:8 (whatever is true, honorable, just, pure, lovely, commendable), and ultimately through the judgment-seat language of 2 Corinthians 5:10, where what is examined is not your net worth but your deeds. The wise build the right account.",
              },
              {
                num: "02",
                color: BLUE,
                title: "Rich and Poor: One Creator, Different Circumstances",
                body1: "Verse 2 offers one of the most egalitarian statements in the wisdom literature: &ldquo;The rich and the poor meet together; the Lord is the maker of them all.&rdquo; The word &ldquo;meet together&rdquo; (paga) suggests an encounter, a crossing of paths &mdash; and the assertion is that when they meet, what they share is far more fundamental than what divides them. Both are image-bearers. Both were crafted by the same hand.",
                body2: "This theology of creation-as-equalizer is foundational to biblical social ethics. It does not collapse economic distinctions or deny that wealth and poverty have very different lived experiences &mdash; Proverbs is brutally honest about that (the poor are avoided by their neighbors, 19:7; the rich have many friends, 14:20). But it insists that these distinctions are circumstantial and penultimate. Before God, who made both, the categories are relativized.",
                body3: "The rich cannot use their wealth to claim a superior humanity. The poor cannot be dismissed as less fully human or less deserving of dignity. The shared Creator is the ground of shared dignity &mdash; which is why the warnings about oppressing the poor that appear later in this chapter (vv.22&ndash;23) are so severe. To exploit the poor is to insult their Maker (cf. 17:5).",
              },
              {
                num: "03",
                color: GREEN,
                title: "The Formation of Children",
                body1: "Verse 6 is perhaps the single most quoted verse in Proverbs: &ldquo;Train up a child in the way he should go; even when he is old he will not depart from it.&rdquo; The Hebrew phrase translated &ldquo;train up&rdquo; (chanak) is the word behind &ldquo;Hanukkah&rdquo; &mdash; it means to dedicate, initiate, or inaugurate. The picture is of formation that begins at the outset, before habits and character are set, and shapes the direction of a whole life.",
                body2: "The phrase &ldquo;in the way he should go&rdquo; (al-pi darko) is theologically rich. Some scholars translate it more literally as &ldquo;according to his way&rdquo; or &ldquo;in keeping with his nature,&rdquo; suggesting that wise formation attends to the particular child &mdash; their temperament, gifts, and calling &mdash; rather than simply conforming them to a generic mold. This reading emphasizes that wisdom training is individualized, not merely institutional.",
                body3: "The promise &mdash; &ldquo;even when he is old he will not depart from it&rdquo; &mdash; is a wisdom observation about the power of early formation, not a guarantee immune to the child&rsquo;s own freedom or the effects of sin and suffering. The wisdom tradition is realistic about children who stray (Proverbs 17:25; 19:13). But it insists that the investment of formation in the early years has long-range power that nothing else can replicate.",
              },
              {
                num: "04",
                color: PURPLE,
                title: "Debt, Generosity, and Economic Wisdom",
                body1: "Verse 7 is stark: &ldquo;The rich rules over the poor, and the borrower is the slave of the lender.&rdquo; Proverbs does not moralize about this as a personal failure &mdash; it states it as a social reality. Debt creates dependency. The one who owes is structurally subordinated to the one who is owed. Whether this describes credit card debt in contemporary America, predatory payday lending, or student loan structures, the dynamic Proverbs names is recognizable in every economy.",
                body2: "Verses 9&ndash;10 present the alternative vision: &ldquo;Whoever has a bountiful eye will be blessed, for he shares his bread with the poor. Drive out a scoffer, and strife will go out, and quarreling and abuse will cease.&rdquo; The generous person &mdash; literally the person with a &ldquo;good eye&rdquo; (tov ayin) &mdash; is the economic opposite of the one whose eye is &ldquo;evil&rdquo; or stingy (23:6). In Jewish tradition, the &ldquo;evil eye&rdquo; denotes miserliness; the &ldquo;good eye&rdquo; denotes generosity. This is about economic vision: what you see as yours to share versus yours to hoard.",
                body3: "The connection between debt, generosity, and wisdom is not accidental. They map onto opposite orientations: the debtor reaches for what he cannot afford; the stingy person clutches what he does not need to keep; the generous person gives from what he has in trust that God&rsquo;s economy of abundance is more reliable than his own hoarding instinct. Proverbs 22 holds these together as dimensions of a unified economic wisdom.",
              },
              {
                num: "05",
                color: TEAL,
                title: "The Thirty Sayings and Wisdom Education",
                body1: "Verses 17&ndash;21 introduce the Thirty Sayings with a remarkable pedagogical self-description: &ldquo;Have I not written for you thirty sayings of counsel and knowledge, to make you know what is right and true, that you may give a true answer to those who sent you?&rdquo; (vv.20&ndash;21). This frames what follows not as a collection of isolated maxims but as a curriculum &mdash; thirty units designed to equip the learner to speak truthfully, judge rightly, and represent wisdom faithfully to others.",
                body2: "The Egyptian parallel, the Instructions of Amenemope, also contains thirty &ldquo;chapters&rdquo; and was apparently used in scribal education. The wisdom teachers of Israel were apparently aware of this tradition and shaped their own collection in dialogue with it &mdash; adapting, correcting, and reorienting it toward the fear of the Lord as wisdom&rsquo;s foundation (9:10). This is wisdom in cross-cultural conversation: learning from the best of human observation while submitting all of it to the sovereignty of the Creator.",
                body3: "The opening exhortation to &ldquo;incline your ear&rdquo; (v.17) and &ldquo;let your heart keep my commandments&rdquo; (v.18) positions the Thirty Sayings as a matter of the whole person: ears, heart, lips, trust. Wisdom is not merely intellectual acquisition &mdash; it is personal formation. The goal is not that you know thirty propositions but that you become the kind of person who naturally does what those propositions describe.",
              },
            ].map((theme, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ background: `${theme.color}18`, border: `1px solid ${theme.color}35`, borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 900, color: theme.color }}>{theme.num}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: TEXT, margin: 0 }}>{theme.title}</h3>
                </div>
                <p dangerouslySetInnerHTML={{ __html: theme.body1 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: theme.body2 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: theme.body3 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            ))}
          </div>
        )}

        {/* ===== VERSE BY VERSE TAB ===== */}
        {activeTab === "verse-by-verse" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: TEXT, marginBottom: 6 }}>Verse-by-Verse Commentary</h2>
              <p dangerouslySetInnerHTML={{ __html: "A close reading of the key verses in Proverbs 22, with attention to Hebrew vocabulary, literary context, and theological depth." }} style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }} />
            </div>

            {/* v.1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${GOLD}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: GOLD, fontWeight: 900, fontSize: 22 }}>v. 1</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>A Good Name</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${GOLD}`, background: `${GOLD}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;A good name is more desirable than great riches; to be esteemed is better than silver or gold.&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "The Hebrew word for &ldquo;name&rdquo; here is <strong style=\"color:" + GOLD + "\">shem</strong>, which carries the full weight of public identity, reputation, and character. In the ancient world &mdash; as in many cultures today &mdash; your name was the summary of your dealings: how you kept your word, how you treated employees and neighbors, how you behaved when no one was watching. The phrase &ldquo;more desirable&rdquo; (tov) uses the most common Hebrew word for good or better, and the comparison is deliberately economic: name versus riches, esteem versus silver and gold." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The word translated &ldquo;esteemed&rdquo; or &ldquo;favor&rdquo; (chen) is the Hebrew word for grace, charm, or winsome approval &mdash; the same word used for Noah finding &ldquo;favor in the eyes of the Lord&rdquo; (Genesis 6:8) and Joseph finding favor with Potiphar (Genesis 39:4). It suggests something deeper than social popularity: the authentic approval that comes when people recognize genuine goodness in a person. This is esteem that has been earned through character, not managed through image." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "Ecclesiastes 7:1 repeats this proverb almost verbatim (&ldquo;A good name is better than precious ointment&rdquo;), suggesting it was a recognized and widely-treasured wisdom saying. The New Testament equivalent is Paul&rsquo;s exhortation to overseers in 1 Timothy 3:7: they must &ldquo;have a good reputation with outsiders.&rdquo; The church leader&rsquo;s name must be the same inside and outside the community &mdash; which is the definition of integrity." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* v.2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${BLUE}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: BLUE, fontWeight: 900, fontSize: 22 }}>v. 2</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Rich and Poor</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${BLUE}`, background: `${BLUE}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;The rich and the poor have this in common: the Lord is the Maker of them all.&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "The verb <strong style=\"color:" + BLUE + "\">&ldquo;meet together&rdquo;</strong> (nifgashu) is the Niphal form of paga, which in some contexts means to intercede or to encounter. The sense here is that when the rich and the poor cross paths &mdash; in the marketplace, in the law court, in the family, in the community &mdash; they do so as creatures of the same Creator. Their meeting is not an encounter between a fully human person and a less-than-human one; it is an encounter between two image-bearers." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The theological anchor is the word <strong style=\"color:" + BLUE + "\">&ldquo;Maker&rdquo;</strong> (oseh): the participle form of asah, &ldquo;to make,&rdquo; with the Lord as subject and both the rich and poor as the object. This is a creation-ethics argument: because God made both, both have the dignity of creaturely status before their Creator. Proverbs 17:5 sharpens the ethical edge: &ldquo;Whoever mocks the poor insults his Maker.&rdquo; To treat the poor as less than human is to implicitly criticize God&rsquo;s workmanship." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "This verse does not suggest that economic differences are morally irrelevant &mdash; much of Proverbs addresses the causes and consequences of poverty and wealth with great realism. But it insists that the economic hierarchy is subordinate to the creation hierarchy: before God, the categories of rich and poor are penultimate. This is the epistemological foundation on which biblical social ethics rests." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* v.3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${TEAL}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: TEAL, fontWeight: 900, fontSize: 22 }}>v. 3</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>The Prudent Foresee Danger</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${TEAL}`, background: `${TEAL}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;The prudent sees danger and hides himself, but the simple go on and suffer for it.&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "This proverb (repeated almost identically in 27:12) contrasts two figures that appear throughout Proverbs: the <strong style=\"color:" + TEAL + "\">prudent</strong> (arum, also translated &ldquo;shrewd&rdquo; or &ldquo;clever&rdquo;) and the <strong style=\"color:" + TEAL + "\">simple</strong> (peti, the naive person, not yet committed to either wisdom or folly). The prudent person has developed the capacity for moral and practical foresight &mdash; the ability to see where a path leads before you are committed to it. The simple person lacks this forward-looking perception." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The word <strong style=\"color:" + TEAL + "\">&ldquo;danger&rdquo;</strong> (ra, often translated &ldquo;evil&rdquo;) is broad in Hebrew. It encompasses moral evil, practical harm, and the consequences of unwise choices. The prudent person sees what is coming &mdash; the natural end of certain associations, habits, financial patterns, or relational dynamics &mdash; and takes evasive action. This is not cowardice; it is wisdom. The simple person, by contrast, keeps moving forward without attending to where the path leads, and suffers the consequences." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "Jesus&rsquo; parable of the two builders (Matthew 7:24&ndash;27) and the two debtors who need to settle before going to court (Luke 12:57&ndash;59) both work with this same wisdom intuition: look ahead, count the cost, anticipate the outcome, act while you can. Prudence is applied eschatology &mdash; living in the present in light of what is coming." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* v.6 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${GREEN}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: GREEN, fontWeight: 900, fontSize: 22 }}>v. 6</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Train Up a Child</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;Train up a child in the way he should go; even when he is old he will not depart from it.&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "The Hebrew verb <strong style=\"color:" + GREEN + "\">chanak</strong> (train up/dedicate) appears only five times in the Old Testament. Its root is connected to the word for palate or mouth &mdash; some scholars connect it to the ancient practice of rubbing the gum of a newborn with oil or date paste to stimulate sucking, a form of initiation into nourishment. Applied to formation, it carries the sense of beginning something at the very start, in the most formative moment, establishing a taste for what is good." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The phrase <strong style=\"color:" + GREEN + "\">&ldquo;in the way he should go&rdquo;</strong> (al-pi darko) literally means &ldquo;according to the mouth of his way&rdquo; or &ldquo;according to his nature/path.&rdquo; Some read this as prescriptive: train the child in the right path (wisdom and fear of the Lord). Others read it as attentive: train the child in a way that fits his particular nature, gifts, and calling. Both readings have warrant and are not mutually exclusive &mdash; the best formation is both directional (toward wisdom) and attentive (to this particular child)." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The second line &mdash; <strong style=\"color:" + GREEN + "\">&ldquo;even when he is old he will not depart from it&rdquo;</strong> &mdash; is the wisdom observation about formation&rsquo;s long-range power. Early formation leaves grooves in the soul that persist even through seasons of rebellion, distance, or confusion. This is empirically recognizable: people who received serious moral and spiritual formation in childhood often return to it even after long detours. The proverb does not deny the detour; it asserts that the formation endures." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* v.7 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${PURPLE}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: PURPLE, fontWeight: 900, fontSize: 22 }}>v. 7</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>The Borrower Is Slave to the Lender</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${PURPLE}`, background: `${PURPLE}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;The rich rules over the poor, and the borrower is the slave of the lender.&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "This is one of Proverbs&rsquo; most sociologically clear-eyed observations. The word translated &ldquo;slave&rdquo; here is <strong style=\"color:" + PURPLE + "\">eved</strong> &mdash; the standard Hebrew word for servant or slave, the same word used for Israel&rsquo;s bondage in Egypt. Proverbs is not speaking in hyperbole: it is naming the structural reality that debt creates. The one who owes is obligated, constrained, and in a subordinate position relative to the one owed. The lender has leverage that can be used coercively." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The proverb does not condemn all borrowing &mdash; the Old Testament law made provision for lending to the poor, with strong protections against exploitation (Deuteronomy 15:7&ndash;11, 24:10&ndash;13). But it is ruthlessly honest about what debt does to power dynamics. This is descriptive wisdom: know what you are entering when you borrow. Know that the transaction creates a structural asymmetry that will shape your freedom until the debt is discharged." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "Paul picks up the language of this verse in Romans 13:8: &ldquo;Owe no one anything, except to love each other.&rdquo; The Christian ethics of money is shaped by this wisdom: freedom from debt is freedom for generosity, for obedience, for risk-taking in God&rsquo;s service. The slave of a lender cannot freely give what the lender has claim on." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* vv.9-10 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${GREEN}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: GREEN, fontWeight: 900, fontSize: 22 }}>vv. 9&ndash;10</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Generous Eye and Driving Out the Scoffer</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;Whoever has a bountiful eye will be blessed, for he shares his bread with the poor. Drive out a scoffer, and strife will go out, and quarreling and abuse will cease.&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "The <strong style=\"color:" + GREEN + "\">&ldquo;bountiful eye&rdquo;</strong> (tov ayin) is the Hebrew idiom for generosity &mdash; literally a &ldquo;good eye.&rdquo; Its opposite, the &ldquo;evil eye&rdquo; (ra ayin), appears in 23:6 as the descriptor of the stingy man. This is economic vision: the generous person looks at what they have and sees resources for sharing; the stingy person looks at what they have and sees resources to protect. The generous person will be &ldquo;blessed&rdquo; &mdash; the language of divine favor and flourishing." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "Verse 10&rsquo;s instruction to &ldquo;drive out a scoffer&rdquo; (scoffer = letz in Hebrew) may seem harsh, but it reflects an important communal wisdom: communities have a character, and that character is shaped by who is given space in them. The scoffer is not merely someone who disagrees or asks hard questions &mdash; the letz is the person who makes a posture of mocking wisdom, mocking correction, mocking the fear of the Lord. Such a person does not merely fail to benefit from community; they actively infect its culture. Removing the toxic presence changes the social chemistry of the group." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* vv.17-21 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: `${TEAL}12`, borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: TEAL, fontWeight: 900, fontSize: 22 }}>vv. 17&ndash;21</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Prologue to the Thirty Sayings</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: `3px solid ${TEAL}`, background: `${TEAL}08`, borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;Incline your ear, and hear the words of the wise, and apply your heart to my knowledge, for it will be pleasant if you keep them within you, if all of them are ready on your lips. That your trust may be in the Lord, I have made them known to you today, even to you. Have I not written for you thirty sayings of counsel and knowledge, to make you know what is right and true, that you may give a true answer to those who sent you?&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "This passage is the editorial hinge of the chapter and of the book. The teacher addresses a specific student (the &ldquo;you&rdquo; is singular throughout) and identifies the purpose of the collection that follows: not merely intellectual enrichment but relational formation. The goal stated in verse 19 is startling in its intimacy: <strong style=\"color:" + TEAL + "\">&ldquo;That your trust may be in the Lord.&rdquo;</strong> The entire wisdom curriculum &mdash; all thirty sayings &mdash; is designed to produce a life of trust in God, not just competent moral reasoning." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;thirty sayings&rdquo; (sheloshim) in verse 20 was textually uncertain for centuries &mdash; earlier translations rendered it as &ldquo;excellent things&rdquo; or &ldquo;officers.&rdquo; The discovery of the Egyptian Instructions of Amenemope, also containing thirty sections, confirmed the reading &ldquo;thirty&rdquo; and illuminated the literary context. The wisdom teachers of Israel were working with an internationally recognized genre and shaping it toward Yahwistic ends." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "Verse 21&rsquo;s stated goal &mdash; &ldquo;that you may give a true answer to those who sent you&rdquo; &mdash; suggests the original audience was scribes or young officials being trained for service in the royal court. But the wisdom is not limited to that context. Anyone who must navigate complex social situations, give honest counsel, resist corruption, and maintain integrity under pressure is the intended beneficiary." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>

            {/* vv.22-23 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
              <div style={{ background: "#E11D4812", borderBottom: `1px solid ${BORDER}`, padding: "14px 24px", display: "flex", alignItems: "baseline", gap: 14 }}>
                <span style={{ color: "#E11D48", fontWeight: 900, fontSize: 22 }}>vv. 22&ndash;23</span>
                <span style={{ color: MUTED, fontSize: 13, fontWeight: 600 }}>Do Not Rob the Poor</span>
              </div>
              <div style={{ padding: 24 }}>
                <blockquote style={{ margin: "0 0 18px", padding: "14px 18px", borderLeft: "3px solid #E11D48", background: "#E11D4808", borderRadius: "0 10px 10px 0", fontStyle: "italic", color: TEXT, fontSize: 15, lineHeight: 1.8 }}>
                  &ldquo;Do not rob the poor, because he is poor, or crush the afflicted at the gate, for the Lord will plead their cause and rob of life those who rob them.&rdquo;
                </blockquote>
                <p dangerouslySetInnerHTML={{ __html: "This is the first of the Thirty Sayings proper, and it immediately addresses the most vulnerable: the poor and the afflicted. The phrase <strong style=\"color:#E11D48\">&ldquo;at the gate&rdquo;</strong> refers to the city gate, where legal proceedings, business transactions, and civic decisions were made in the ancient world. The court was located where all community traffic passed &mdash; which meant the court was public, accessible, but also susceptible to the influence of those with money and social standing." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "The warning is not against robbing generally but against robbing the poor <strong style=\"color:#E11D48\">because he is poor</strong> &mdash; exploiting vulnerability as the occasion for exploitation. The afflicted at the gate are those who cannot buy legal advantage, who have no powerful advocates, who are easy to defraud because they have no recourse. The wisdom tradition is clear: this precise vulnerability is what activates divine protection, not divine indifference." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: "Verse 23 provides the theological foundation: <strong style=\"color:#E11D48\">&ldquo;the Lord will plead their cause.&rdquo;</strong> The Lord himself takes up the legal case of those who cannot press their own. The verb is rib (to plead, contend, or take to court) &mdash; legal language. God enters the courtroom on behalf of the poor. And the consequence for the exploiter is devastating: God will &ldquo;rob of life&rdquo; those who robbed them. The measure-for-measure judgment echoes throughout the Psalms and prophets and culminates in the words of Jesus in Matthew 25:40&ndash;45." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, margin: 0 }} />
              </div>
            </div>
          </div>
        )}

        {/* ===== APPLICATION TAB ===== */}
        {activeTab === "application" && (
          <div>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 900, color: TEXT, marginBottom: 6 }}>Applying Proverbs 22 Today</h2>
              <p dangerouslySetInnerHTML={{ __html: "Proverbs 22 speaks to the deepest structures of everyday life &mdash; how we build reputation, raise children, handle money, and listen to wisdom. Four major applications emerge for the contemporary reader." }} style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }} />
            </div>

            {[
              {
                num: "01",
                color: GOLD,
                title: "Building a Godly Reputation",
                summary: "Your name is being written every day by the choices you make.",
                body1: "The opening verse of Proverbs 22 poses a values question that our culture answers very differently than God&rsquo;s wisdom does. Our culture is obsessed with net worth, with brand-building, with the cultivation of an image that can be monetized. Social media has made reputation management into an art form and an industry. But reputation management is not the same as character formation &mdash; and only one of them produces the &ldquo;good name&rdquo; that Proverbs values.",
                body2: "A good name in the biblical sense is the product of consistent, faithful, visible-and-invisible integrity over time. It is built by keeping promises when it is costly to keep them, by treating people with dignity when no one of significance is watching, by refusing to take shortcuts with other people&rsquo;s trust. This kind of name cannot be managed &mdash; it can only be lived. You cannot manufacture it through shrewd public relations. You can only cultivate it through character.",
                body3: "The application is immediate and daily: what reputation are you building in your neighborhood, your workplace, your family, your church? Not what people think of you &mdash; but what they know from experience with you? The gap between your public image and your private reality is the measure of the gap between reputation and name. The goal of wisdom is to close that gap: to become the kind of person whose private life and public name say the same thing.",
                practice: "Ask three people who know you well: &ldquo;When you think of my name &mdash; my reputation &mdash; what one word comes to mind?&rdquo; Receive their answers with openness. Let the distance between what you hope your name is and what they actually experience be the data for prayer and growth.",
              },
              {
                num: "02",
                color: GREEN,
                title: "Intentional Parenting as Wisdom Formation",
                summary: "The formation you give is the formation that lasts.",
                body1: "Proverbs 22:6 is the most-quoted verse in the chapter &mdash; and often the most misapplied. It is read as a promise to anxious parents: if you do everything right, your child will never stray. This reading has broken many parents who did everything they could and still watched a child walk away. It has produced guilt in places where grace is needed. Reading Proverbs as promises rather than as wisdom observations is a hermeneutical error with real pastoral consequences.",
                body2: "But read correctly, the verse is profoundly encouraging. The power of early formation is real. The habits, rhythms, stories, values, relationships, and practices that children absorb in their formative years leave marks on the soul that persist even through seasons of rebellion, confusion, and distance. This is not a mechanical guarantee but a genuine wisdom observation confirmed by generations of experience: what is planted early grows long.",
                body3: "The application is not anxiety but intentionality. What are you forming in your children in the early years? Not just formal instruction but the culture of your home: Do you pray together? Read Scripture together? Talk about faith as a living reality? Do your children see you trust God under pressure? Do they see you repent when you fail? Do they know that your faith is not performance but relationship? These are the formation practices that chanak &mdash; that dedicate a child to a way of life.",
                practice: "Name three practices or habits you want to establish in your home over the next six months. Be specific: not &ldquo;read the Bible more&rdquo; but &ldquo;read a psalm together before dinner three nights a week.&rdquo; Write them down, discuss them with your spouse or a trusted mentor, and begin this week.",
              },
              {
                num: "03",
                color: PURPLE,
                title: "Wisdom About Money and Debt",
                summary: "Debt is a form of bondage; generosity is a form of freedom.",
                body1: "Proverbs 22:7 needs to be heard in our current economic moment. We live in a culture that normalizes extraordinary levels of consumer debt, student debt, and mortgage debt as simply &ldquo;the way things work.&rdquo; Many Christians carry debt loads that genuinely constrain their freedom &mdash; to give, to relocate for ministry, to take lower-paying work that serves the kingdom more directly, to respond to need without calculating what they can afford. The borrower is the slave of the lender. That is not moralism; it is description.",
                body2: "The wisdom tradition does not forbid all borrowing &mdash; even the Old Testament law assumed borrowing happened. But it calls for extraordinary caution about becoming indebted, particularly for depreciating assets, and for a consistent priority of debt elimination over lifestyle escalation. The freedom that comes from being debt-free is not a financial freedom only; it is a freedom of soul that enables generosity and risk-taking in God&rsquo;s service.",
                body3: "Verses 9&ndash;10 point toward the alternative: the &ldquo;bountiful eye&rdquo; of generosity. The generous person is free with their bread precisely because they are not in bondage to what they have. Generosity is not merely charity &mdash; it is a spiritual discipline that reorders the soul&rsquo;s relationship to money. The person who gives freely is training themselves out of the grip of fear and into the freedom of trust in God&rsquo;s provision. These two &mdash; debt avoidance and generous giving &mdash; are both practices of the same underlying faith.",
                practice: "Do a debt audit. List every form of debt you carry, its interest rate, and its monthly cost. Then pray over the list and ask God for a concrete strategy toward freedom. Consider also identifying one person or ministry you can give to sacrificially this month &mdash; not from what is left over but from what is first set aside.",
              },
              {
                num: "04",
                color: TEAL,
                title: "Listening to Wisdom Teachers",
                summary: "The Thirty Sayings begin by insisting: first, listen.",
                body1: "The prologue to the Thirty Sayings (vv.17&ndash;21) is an instruction in how to receive wisdom before a single piece of wisdom content is delivered. &ldquo;Incline your ear&rdquo; &mdash; physically orient yourself toward the teaching. &ldquo;Apply your heart to my knowledge&rdquo; &mdash; bring your emotional and volitional center to the learning, not just your intellect. &ldquo;Keep them within you&rdquo; &mdash; internalize, not merely memorize. &ldquo;Ready on your lips&rdquo; &mdash; let them be available for the moments when you must speak.",
                body2: "We live in an information-abundant age but a formation-starved one. We have access to more content than any generation in history &mdash; more Bible teaching, more commentaries, more podcasts, more books. But access to content is not the same as formation. The Thirty Sayings model asks for something deeper than content consumption: it asks for the posture of a student who is allowing wisdom to form their character, not merely expand their knowledge.",
                body3: "The goal stated in verse 19 is breathtaking in its intimacy: &ldquo;That your trust may be in the Lord.&rdquo; All the wisdom in chapters 22&ndash;24 is in the service of one thing: a life of genuine, habitual, formed trust in God. The student who emerges from this curriculum is not someone who knows thirty clever things to say &mdash; it is someone whose default orientation toward life&rsquo;s uncertainties is trust in the God who made rich and poor alike, who pleads the cause of the oppressed, and who promises that those who trust him will not be put to shame.",
                practice: "Identify one wisdom teacher in your life &mdash; a pastor, mentor, writer, or older believer whose life demonstrates what wisdom looks like at scale. Make a specific plan to receive from them: read their book, request a meal, ask them three questions you are genuinely wrestling with. Let the Proverbs 22 posture of deliberate, humble reception shape how you approach that relationship.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
                  <div style={{ background: `${item.color}18`, border: `1px solid ${item.color}35`, borderRadius: 10, padding: "6px 12px", fontSize: 13, fontWeight: 900, color: item.color }}>{item.num}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: TEXT, margin: 0 }}>{item.title}</h3>
                </div>
                <p dangerouslySetInnerHTML={{ __html: item.summary }} style={{ color: item.color, fontSize: 14, fontWeight: 600, fontStyle: "italic", marginBottom: 16 }} />
                <p dangerouslySetInnerHTML={{ __html: item.body1 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: item.body2 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 14 }} />
                <p dangerouslySetInnerHTML={{ __html: item.body3 }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.8, marginBottom: 18 }} />
                <div style={{ background: `${item.color}0a`, border: `1px solid ${item.color}20`, borderRadius: 10, padding: 16 }}>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", marginBottom: 6 }}>PRACTICE</div>
                  <p dangerouslySetInnerHTML={{ __html: item.practice }} style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }} />
                </div>
              </div>
            ))}

            {/* Closing */}
            <div style={{ background: `${GOLD}0c`, border: `1px solid ${GOLD}28`, borderRadius: 14, padding: 28 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", marginBottom: 10 }}>CLOSING REFLECTION</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: TEXT, marginBottom: 14 }}>The Wisdom Proverbs 22 Is After</h3>
              <p dangerouslySetInnerHTML={{ __html: "Proverbs 22 is not after behavioral compliance &mdash; it is after character formation. A person who merely memorizes its famous maxims but does not allow them to shape their habits, relationships, economic practices, and parenting is missing the point. The wisdom literature of Israel was always after the transformed person: the one in whom the fear of the Lord is so deeply embedded that wisdom becomes the natural overflow of a reordered life." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }} />
              <p dangerouslySetInnerHTML={{ __html: "The New Testament declares that all the treasures of wisdom and knowledge are hidden in Christ (Colossians 2:3). This is not a replacement of Proverbs but its fulfillment: Jesus is the wisdom of God incarnate (1 Corinthians 1:30), and to know him is to be enrolled in the deepest school of wisdom available. Every proverb in chapter 22 finds its completion in a person &mdash; the one who built the most durable name in history by giving it away, who was both rich and poor simultaneously, who trained up disciples through three years of embodied formation, and who freed the enslaved by taking on their debt at Calvary." }} style={{ color: TEXT, fontSize: 15, lineHeight: 1.85, margin: 0 }} />
            </div>
          </div>
        )}

        {/* ===== VIDEO SECTION ===== */}
        <div style={{ marginTop: 48, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: TEXT, marginBottom: 6 }}>Teaching Videos</h2>
          <p dangerouslySetInnerHTML={{ __html: "Video teachings on Proverbs 22, wisdom about money and parenting, and the Thirty Sayings of the Wise &mdash; for deeper study and group discussion." }} style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 28 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: GREEN, fontWeight: 700, fontSize: 15, margin: 0, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
