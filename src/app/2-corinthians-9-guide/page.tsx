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
const ROSE = "#E11D48";

const videoItems = [
  { videoId: "3sDVTBGAZKc", title: "2 Corinthians Overview &ndash; The Bible Project" },
  { videoId: "MRPbKBH6OyY", title: "Cheerful Giving &ndash; 2 Corinthians 9 Explained" },
  { videoId: "kF_-KdWg7uI", title: "The Jerusalem Collection &ndash; Paul and Generosity" },
  { videoId: "vmx4UjRFp0M", title: "God Loves a Cheerful Giver &ndash; 2 Corinthians 9:6-15" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, #07070F 0%, #0e1a14 60%, #07070F 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1rem 2.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GREEN}22`, border: `1px solid ${GREEN}55`, borderRadius: 24, padding: "0.35rem 1rem", marginBottom: "1.2rem" }}>
            <span style={{ color: GREEN, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>2 Corinthians Chapter 9</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, color: TEXT, marginBottom: "1rem", lineHeight: 1.2 }}>
            The Cheerful Giver
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(1rem, 2.5vw, 1.15rem)", lineHeight: 1.75, maxWidth: 680, margin: "0 auto 1.5rem", fontFamily: "system-ui, sans-serif" }}
            dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s definitive theology of Christian generosity &mdash; the Jerusalem collection, sowing and reaping, God&rsquo;s inexhaustible sufficiency, and the joyful giver whose giving becomes an act of worship and thanksgiving." }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", fontFamily: "system-ui, sans-serif" }}>
            {[["Key Verse", "2 Cor 9:7"], ["Author", "Paul the Apostle"], ["Written", "c. AD 55&ndash;56"], ["Theme", "Cheerful Generosity"]].map(([k, v]) => (
              <div key={k} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.5rem 1rem", textAlign: "center" }}>
                <div style={{ color: MUTED, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>{k}</div>
                <div style={{ color: TEXT, fontWeight: 700, fontSize: "0.9rem" }} dangerouslySetInnerHTML={{ __html: v }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0, fontFamily: "system-ui, sans-serif" }}>
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "0.9rem 1.4rem",
                border: "none",
                borderBottom: activeTab === i ? `3px solid ${GREEN}` : "3px solid transparent",
                background: "transparent",
                color: activeTab === i ? GREEN : MUTED,
                fontWeight: activeTab === i ? 700 : 400,
                cursor: "pointer",
                fontSize: "0.9rem",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem", fontFamily: "system-ui, sans-serif" }}>

        {/* ===== TAB 0: OVERVIEW ===== */}
        {activeTab === 0 && (
          <div>
            {/* Key verse card */}
            <div style={{ background: `${GREEN}14`, border: `1px solid ${GREEN}44`, borderLeft: `4px solid ${GREEN}`, borderRadius: 12, padding: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.6rem" }}>Key Verse &mdash; 2 Corinthians 9:7</div>
              <blockquote style={{ color: TEXT, fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.8, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: "&ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;" }}
              />
            </div>

            {/* Historical context */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.8rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Historical Context: The Jerusalem Collection</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "Second Corinthians 9 is part of the most sustained treatment of Christian giving in the entire New Testament, spanning chapters 8 and 9. The immediate occasion was a relief fund Paul had organized across his Gentile churches &mdash; Corinth, Philippi, Thessalonica, Galatia &mdash; to support the impoverished Jewish believers in Jerusalem. This collection was not a peripheral project; Paul mentions it in Galatians 2:10, 1 Corinthians 16:1&ndash;4, Romans 15:25&ndash;28, and both chapters of 2 Corinthians 8&ndash;9. It consumed years of his ministry attention." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "The Jerusalem church was suffering under famine, economic pressure, and the social exclusion that accompanied conversion from Judaism. Paul saw the collection as a concrete expression of Gentile gratitude &mdash; Gentiles had received the spiritual blessings of Israel&rsquo;s Messiah, and now they were returning material blessing to Jerusalem (Romans 15:27). It was a living embodiment of the unity of Jew and Gentile in the one body of Christ." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "By chapter 9, Paul is commending the Corinthians for their readiness and eagerness, while also urging them to complete what they had promised. A delegation of brothers has been sent ahead to arrange the gift before Paul himself arrives &mdash; sparing the Corinthians any embarrassment if Paul found them unprepared (9:3&ndash;5). The pastoral sensitivity here is remarkable: Paul does not shame them but motivates them through the theology of grace." }}
              />
            </div>

            {/* Chapter structure */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.8rem", marginBottom: "1.5rem" }}>
              <h2 style={{ color: TEAL, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Chapter Structure</h2>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {[
                  ["9:1&ndash;5", "Commendation and the Delegation", TEAL],
                  ["9:6", "The Sowing and Reaping Principle", GREEN],
                  ["9:7", "The Cheerful Giver &mdash; God Loves Hilaron", GOLD],
                  ["9:8&ndash;10", "God&rsquo;s Sufficiency and Multiplication", BLUE],
                  ["9:11&ndash;14", "Enriched for Generosity, Producing Thanksgiving", PURPLE],
                  ["9:15", "The Indescribable Gift &mdash; Final Doxology", ROSE],
                ].map(([ref, desc, color]) => (
                  <div key={ref as string} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.75rem", background: BG, borderRadius: 8, border: `1px solid ${BORDER}` }}>
                    <span style={{ color: color as string, fontWeight: 700, minWidth: 70, fontSize: "0.85rem" }} dangerouslySetInnerHTML={{ __html: ref as string }} />
                    <span style={{ color: MUTED, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: desc as string }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Introduction paragraph */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.8rem" }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>Why This Chapter Matters</h2>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "Second Corinthians 9 is not a fundraising technique &mdash; it is a theology of economics rooted in the character of God. Paul does not argue for the collection on the basis of obligation, guilt, or reciprocity. He argues from the nature of God: God is a giver, God is sufficient, God multiplies what is given, and God is glorified through generosity. The motive for giving is not duty to the needy but gratitude to the divine Giver." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "The Greek word <em>hilaron</em> in verse 7 &mdash; from which we get the English word &ldquo;hilarious&rdquo; &mdash; describes the inner disposition of the giver that God delights in. This is not a forced smile while writing a check; it is the spontaneous overflow of a heart that has understood grace. When believers grasp what God has given in Christ, cheerful generosity becomes the natural response. The chapter ends in doxology (9:15): &ldquo;Thanks be to God for his indescribable gift!&rdquo; That final word is the only proper conclusion to a theology of Christian giving." }}
              />
            </div>
          </div>
        )}

        {/* ===== TAB 1: KEY THEMES ===== */}
        {activeTab === 1 && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.5rem" }}>Key Theological Themes in 2 Corinthians 9</h2>

            {/* Theme 1: Hilaron */}
            <div style={{ background: CARD, border: `1px solid ${GOLD}44`, borderLeft: `4px solid ${GOLD}`, borderRadius: 14, padding: "1.8rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.8rem" }}>1. Hilaron &mdash; The Cheerful Giver (v. 7)</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "The word translated &ldquo;cheerful&rdquo; in verse 7 is the Greek <em>hilaron</em>, the same root from which English derives &ldquo;hilarious.&rdquo; In the Septuagint (the Greek Old Testament), <em>hilaron</em> and its cognates are used to describe the kind of bright, radiant goodwill that lights up a face. The cheerful giver is not one who grudgingly complies but one whose inner disposition is genuinely glad. Paul is quoting and applying Proverbs 22:8a (LXX): &ldquo;God blesses a cheerful and giving man.&rdquo;" }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "The cheerfulness Paul describes is not manufactured enthusiasm but the fruit of theological conviction. The giver who has understood that all they have is itself a gift from God, that God supplies seed to the sower, and that God is able to make all grace abound &mdash; this person gives joyfully because they are not giving out of their own sufficiency but out of God&rsquo;s. The pressure to perform or deplete is removed when the source is infinite." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "Paul explicitly contrasts <em>hilaron</em> giving with two corrupted forms: giving &ldquo;reluctantly&rdquo; (<em>ek lupas</em> &mdash; out of grief or pain) and giving &ldquo;under compulsion&rdquo; (<em>ek anagkes</em> &mdash; under necessity or external pressure). Both of these modes miss what giving is meant to be. Giving out of grief is giving because you feel you must; giving under compulsion is giving because someone forced you. The cheerful giver gives because they genuinely want to &mdash; because grace has freed them from the fear of scarcity." }}
              />
            </div>

            {/* Theme 2: Sowing and Reaping */}
            <div style={{ background: CARD, border: `1px solid ${GREEN}44`, borderLeft: `4px solid ${GREEN}`, borderRadius: 14, padding: "1.8rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.8rem" }}>2. Sowing and Reaping (v. 6)</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "Verse 6 introduces one of Scripture&rsquo;s most memorable agricultural metaphors: &ldquo;Whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully.&rdquo; The Greek for &ldquo;bountifully&rdquo; is <em>ep&rsquo; eulogiais</em> &mdash; literally &ldquo;with blessings&rdquo; or &ldquo;upon blessings.&rdquo; The farmer who scatters seed widely does so in confident expectation of a proportional harvest. The farmer who hoards his seed gets a proportional harvest of nothing." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "The metaphor is not a prosperity-gospel formula &mdash; Paul is not promising financial returns on donations. The reaping is God&rsquo;s doing, and it encompasses spiritual fruit: righteousness, thanksgiving, the praise of God among the nations. Verse 10 expands the imagery: God &ldquo;will supply and multiply your seed for sowing and increase the harvest of your righteousness.&rdquo; The harvest is moral and spiritual formation, not material gain." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "Psalm 112:9, quoted in verse 9, illuminates the point: &ldquo;He has distributed freely, he has given to the poor; his righteousness endures forever.&rdquo; The original context is the righteous person whose character is marked by open-handed generosity. Paul applies this to the Corinthians&rsquo; giving: their righteousness &mdash; their just and faithful living before God &mdash; endures. The money given to Jerusalem will be gone; the character formed through cheerful giving abides." }}
              />
            </div>

            {/* Theme 3: Autarkeia */}
            <div style={{ background: CARD, border: `1px solid ${BLUE}44`, borderLeft: `4px solid ${BLUE}`, borderRadius: 14, padding: "1.8rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: BLUE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.8rem" }}>3. Autarkeia &mdash; Divine Sufficiency (v. 8)</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "Verse 8 is one of the most comprehensive statements of divine sufficiency in the New Testament: &ldquo;And God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work.&rdquo; The word translated &ldquo;sufficiency&rdquo; is the Greek <em>autarkeia</em> &mdash; a term the Stoic philosophers used for self-sufficiency, the inner contentment of the wise man who needs nothing from outside himself. Paul radically redefines the concept: true <em>autarkeia</em> is not self-generated but God-given." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "The five &ldquo;all&rdquo; words in verse 8 are striking: all grace, all sufficiency, all things, all times, every good work. Paul is not offering a narrow economic guarantee but a comprehensive promise of divine adequacy. God&rsquo;s sufficiency covers every dimension of need so that believers can give freely without fear of running out &mdash; because the source is inexhaustible. The same word <em>autarkeia</em> appears in Philippians 4:11, where Paul says he has learned contentment in all circumstances. Both uses locate sufficiency in God, not in personal resources." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "The logic of <em>autarkeia</em> liberates the giver. If I am dependent on my own resources, generosity is threatening &mdash; every gift reduces my reserves. But if God is the ultimate source who supplies seed to the sower (v. 10), then generous giving is an act of trust in divine replenishment. This is not naive: Paul is not promising that givers will always be materially prosperous. He is promising that they will always have &ldquo;enough&rdquo; &mdash; the modest sufficiency that enables continued giving and faithful living." }}
              />
            </div>

            {/* Theme 4: Haploteti */}
            <div style={{ background: CARD, border: `1px solid ${TEAL}44`, borderLeft: `4px solid ${TEAL}`, borderRadius: 14, padding: "1.8rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: TEAL, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.8rem" }}>4. Haploteti &mdash; Generosity as Simplicity (v. 11, 13)</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "Verse 11 states: &ldquo;You will be enriched in every way to be generous in every way, which through us will produce thanksgiving to God.&rdquo; The word translated &ldquo;generous&rdquo; is <em>haploteta</em> (from <em>haplos</em>) &mdash; meaning singleness, simplicity, or liberality. It carries the sense of undivided, uncomplicated giving: the open hand that does not calculate returns or hold back for self-protection. It is the opposite of duplicity (<em>diplous</em> &mdash; double-minded, divided)." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "Paul uses <em>haploteta</em> in Romans 12:8 as well: &ldquo;the one who gives, in generosity.&rdquo; In both places the word points to a wholehearted, uncomplicating liberality that flows from a single-minded trust in God. The <em>haplos</em> giver does not give with mixed motives &mdash; to be seen, to get tax benefits, to manipulate goodwill. They give simply because they want to participate in what God is doing and because they trust God to supply what they need." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "The result of <em>haploteta</em> giving is stated in verses 12&ndash;14: the collection supplies the needs of the saints, overflows in thanksgivings to God, and causes the recipients to glorify God because of the Corinthians&rsquo; obedience to the gospel. Generosity is therefore a form of proclamation &mdash; it demonstrates that the gospel has taken root and transformed how believers relate to money, possessions, and brothers and sisters in need. The gift is itself a gospel word." }}
              />
            </div>

            {/* Theme 5: Generosity as Worship */}
            <div style={{ background: CARD, border: `1px solid ${PURPLE}44`, borderLeft: `4px solid ${PURPLE}`, borderRadius: 14, padding: "1.8rem" }}>
              <h3 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.8rem" }}>5. Generosity as Worship and Thanksgiving</h3>
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "Throughout 2 Corinthians 9, Paul frames the collection not as charity but as <em>leitourgia</em> (v. 12) &mdash; the word used for priestly liturgical service in the temple. The Corinthians&rsquo; gift is not merely humanitarian relief; it is an act of sacred service, a liturgical offering that glorifies God. This priestly framework elevates everyday generosity: when Christians give to meet the needs of fellow believers, they are functioning as priests offering gifts that ascend to God as worship." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85, marginBottom: "1rem" }}
                dangerouslySetInnerHTML={{ __html: "The cascade of thanksgiving that the gift produces (verses 12, 13, 15) reinforces this: the recipient saints &ldquo;will glorify God because of your submission that comes from your confession of the gospel of Christ, and the generosity of your contribution for them and for all others&rdquo; (v. 13). Notice: the generosity is evidence of gospel submission. Giving is proof that the gospel is believed &mdash; that the giver has genuinely received grace and is now reflecting it outward." }}
              />
              <p style={{ color: MUTED, lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: "Paul closes the chapter with one of the most compressed doxologies in his letters: &ldquo;Thanks be to God for his indescribable gift!&rdquo; (v. 15). The &ldquo;indescribable gift&rdquo; (<em>anekdiegetos</em> &mdash; literally &lsquo;too great for words&rsquo;) is the gift of Christ himself &mdash; the one whose poverty made us rich (8:9), the one whose self-giving is the template for all Christian generosity. Every financial gift, however small, is a participation in and a reflection of the greatest gift ever given. Generosity is ultimately Christological." }}
              />
            </div>
          </div>
        )}

        {/* ===== TAB 2: VERSE BY VERSE ===== */}
        {activeTab === 2 && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.3rem", marginBottom: "1.5rem" }}>Verse by Verse Commentary</h2>

            {[
              {
                ref: "9:1&ndash;2",
                color: TEAL,
                heading: "Paul Commends Their Eagerness",
                verse: "&ldquo;Now it is superfluous for me to write to you about the ministry for the saints, for I know your readiness, of which I boast about you to the people of Macedonia, saying that Achaia has been ready since last year. And your zeal has stirred up most of them.&rdquo;",
                body: "Paul opens with a deft rhetorical move: he says it is &ldquo;superfluous&rdquo; to write about the collection &mdash; while writing about it. This is praeteritio, a device that commends the Corinthians while simultaneously reminding them of their commitment. He has already held them up as a model to the Macedonians (whose own generosity Paul will celebrate in 8:1&ndash;5), meaning their reputation has already been staked. The words &ldquo;your zeal has stirred up most of them&rdquo; are remarkable: the Corinthians&rsquo; enthusiastic pledge had inspired the Macedonians to give before the Corinthians themselves had completed their gift. One church&rsquo;s eagerness catalyzed another&rsquo;s generosity. The social dynamics of Christian community mean that one person&rsquo;s faithful giving encourages others.",
              },
              {
                ref: "9:3&ndash;5",
                color: BLUE,
                heading: "The Delegation of Brothers",
                verse: "&ldquo;But I am sending the brothers so that our boasting about you may not prove empty in this matter, so that you may be ready, as I said you would be &mdash; lest if some Macedonians come with me and find you not ready, we would be humiliated &mdash; to say nothing of you &mdash; in this matter.&rdquo;",
                body: "Paul sends Titus and two other unnamed brothers ahead of his own arrival to help the Corinthians finalize the collection. The stated reason is protective: to spare everyone the embarrassment of an incomplete gift when Paul arrives with Macedonian companions. Paul is pastorally wise here &mdash; he does not shame them but frames the advance arrangements as provision for their honor, not as distrust. The word &ldquo;voluntary&rdquo; (v. 5 &mdash; <em>eulogia</em>, literally &ldquo;blessing&rdquo;) contrasts with &ldquo;extortion&rdquo; (<em>pleonexia</em>, covetousness). The collection should arrive as a blessing &mdash; something freely and joyfully given &mdash; not as something grudgingly extracted. The pre-arrangement ensures the gift retains its character as genuine.",
              },
              {
                ref: "9:6",
                color: GREEN,
                heading: "Whoever Sows Bountifully Reaps Bountifully",
                verse: "&ldquo;The point is this: whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully.&rdquo;",
                body: "This agricultural proverb would have been immediately intelligible in an ancient agricultural economy. Every farmer understood that seed withheld is harvest lost. Paul applies the principle spiritually: stingy giving produces sparse spiritual fruit; generous giving produces an abundant harvest. The word <em>ep&rsquo; eulogiais</em> (&ldquo;bountifully&rdquo; or &ldquo;with blessings&rdquo;) appears twice &mdash; surrounding the verse like bookends. The harvest is primarily moral and spiritual: righteousness, thanksgiving, the glory of God. This verse is sometimes misread as a material prosperity promise. But the harvest Paul describes throughout 9:8&ndash;14 is consistently described in spiritual terms: the multiplication of seed for sowing, the increase of righteousness, the overflow of thanksgiving. God is not a vending machine; he is a farmer who multiplies seed and produces righteous character.",
              },
              {
                ref: "9:7",
                color: GOLD,
                heading: "God Loves a Cheerful Giver",
                verse: "&ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;",
                body: "This is the most quoted verse in the chapter and rightly so: it describes the interior disposition that makes giving genuinely Christian. The giving Paul envisions begins &ldquo;in the heart&rdquo; (<em>en te kardia</em>) &mdash; it is not externally imposed but internally motivated. The contrast with &ldquo;reluctantly&rdquo; (<em>ek lup&#275;s</em>) and &ldquo;under compulsion&rdquo; (<em>ek anank&#275;s</em>) is absolute. Both rejected modes are coerced in different ways: one by guilt, one by social pressure. The <em>hilaron</em> giver is free from both. The word <em>hilaron</em> is deliberately chosen over other Greek words for joy because it suggests an outward brightness, a visible gladness. The cheerful giver&rsquo;s giving shows on their face. Paul is quoting a version of Proverbs 22:8 (LXX) where &ldquo;God loves a cheerful and giving man.&rdquo; God&rsquo;s love is drawn to this character.",
              },
              {
                ref: "9:8&ndash;10",
                color: BLUE,
                heading: "God Is Able to Make All Grace Abound",
                verse: "&ldquo;And God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work.&rdquo;",
                body: "This is the theological engine of the chapter &mdash; the foundation that makes cheerful generosity possible. The emphasis on &ldquo;able&rdquo; (<em>dunatos</em>) recalls Paul&rsquo;s similar language in Ephesians 3:20 and Romans 16:25: God who is able to do far more abundantly than we ask or think. The five &ldquo;all&rdquo; words (&ldquo;all grace&rdquo;, &ldquo;all sufficiency&rdquo;, &ldquo;all things&rdquo;, &ldquo;all times&rdquo;, &ldquo;every good work&rdquo;) are a comprehensive statement of divine adequacy. Verse 9 quotes Psalm 112:9 to show that the righteous person who gives freely to the poor has a righteousness that endures. God does not merely restore what was given &mdash; he multiplies: &ldquo;He who supplies seed to the sower and bread for food will supply and multiply your seed for sowing and increase the harvest of your righteousness&rdquo; (v. 10, echoing Isaiah 55:10). The farmer who trusts God gives from a bottomless supply.",
              },
              {
                ref: "9:11&ndash;14",
                color: PURPLE,
                heading: "Enriched for Generosity, Producing Thanksgiving",
                verse: "&ldquo;You will be enriched in every way to be generous in every way, which through us will produce thanksgiving to God.&rdquo;",
                body: "Paul draws out the cascading effects of the Corinthians&rsquo; generosity. The enrichment God provides is not for accumulation but for redistribution: &ldquo;enriched in every way to be generous in every way.&rdquo; The Greek word <em>ploutizomenoi</em> (being enriched) is a present passive participle &mdash; it is ongoing, not a one-time event. God continually enriches those who give so they can continually give more. Verses 12&ndash;14 trace the chain: the gift supplies the saints&rsquo; needs; it overflows in thanksgivings to God; the recipients glorify God for the Corinthians&rsquo; obedience to the gospel; and the recipients &ldquo;long for&rdquo; the Corinthians because of the surpassing grace of God in them. A financial gift creates bonds of love, thanksgiving, and prayer across geographic and ethnic boundaries. The collection is not just economics &mdash; it is ecclesiology.",
              },
              {
                ref: "9:15",
                color: ROSE,
                heading: "Thanks Be to God for His Indescribable Gift",
                verse: "&ldquo;Thanks be to God for his indescribable gift!&rdquo;",
                body: "The chapter ends not with a request or a further argument but with an exclamation of pure gratitude. The word <em>anekdi&#275;g&#275;tos</em> (&ldquo;indescribable&rdquo;) appears only here in the New Testament &mdash; Paul coins or employs a word strong enough to indicate that language fails before the gift of Christ. Every sentence in the chapter has been building toward this: God gives, God supplies, God enriches, God multiplies &mdash; all because he first gave the Son. The Jerusalem collection is a tiny reflection of the incarnation. The Corinthians&rsquo; <em>hilaron</em> giving mirrors the cheerful self-giving of Christ, who &ldquo;though he was rich, yet for your sake he became poor, so that you through his poverty might become rich&rdquo; (8:9). The indescribable gift is the reason for and the model of all Christian generosity.",
              },
            ].map(({ ref, color, heading, verse, body }) => (
              <div key={ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${color}`, borderRadius: 14, padding: "1.8rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.6rem", flexWrap: "wrap" }}>
                  <span style={{ color: color, fontWeight: 800, fontSize: "0.85rem" }} dangerouslySetInnerHTML={{ __html: ref }} />
                  <h3 style={{ color: TEXT, fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>{heading}</h3>
                </div>
                <blockquote style={{ color: `${TEXT}cc`, fontStyle: "italic", lineHeight: 1.75, margin: "0 0 1rem", borderLeft: `2px solid ${color}44`, paddingLeft: "0.75rem" }}
                  dangerouslySetInnerHTML={{ __html: verse }}
                />
                <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>
        )}

        {/* ===== TAB 3: APPLICATION ===== */}
        {activeTab === 3 && (
          <div>
            <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>Application for Christians Today</h2>
            <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "2rem" }}
              dangerouslySetInnerHTML={{ __html: "Second Corinthians 9 addresses not just first-century Corinthians but every Christian who handles money. The principles here &mdash; cheerful giving, sowing and reaping, divine sufficiency, generosity as worship &mdash; are perennial because they are grounded in the unchanging character of God." }}
            />

            {/* Application cards */}
            {[
              {
                num: "01",
                color: GOLD,
                title: "Examine the State of Your Heart in Giving",
                body: "Paul&rsquo;s insistence that giving must be &ldquo;decided in your heart&rdquo; (v. 7) invites self-examination. The question is not merely how much you give but from what inner disposition. Is your giving characterized by <em>hilaron</em> &mdash; genuine gladness &mdash; or by <em>lup&#275;</em> (grief/reluctance) and <em>ananke</em> (compulsion)? The <em>hilaron</em> disposition is cultivated, not assumed. It grows as believers meditate on what they have received in Christ: forgiveness, adoption, inheritance, the indwelling Spirit, eternal life. When grace becomes large in a person&rsquo;s vision, money becomes small. The discipline of regular meditation on the gospel is the most effective path to joyful generosity.",
              },
              {
                num: "02",
                color: GREEN,
                title: "Trust the God Who Supplies Seed to the Sower",
                body: "The anxiety that underlies reluctant giving is ultimately a failure to trust God&rsquo;s promise of sufficiency. <em>Autarkeia</em> &mdash; divine adequacy &mdash; means that the Christian never gives from a position of depletion but from a position of ongoing replenishment. The practical implication: give before you feel financially comfortable enough to give. Wait for the &ldquo;right time&rdquo; to be generous and you will never arrive. Paul commends the Macedonians in 8:2 because they gave &ldquo;beyond their means&rdquo; in &ldquo;extreme poverty.&rdquo; They gave not from surplus but from faith in the God who multiplies seed. This posture of trust &mdash; giving first and trusting God to supply &mdash; is itself a spiritual practice that strengthens faith.",
              },
              {
                num: "03",
                color: TEAL,
                title: "Give Systematically and Proportionally",
                body: "While 2 Corinthians 9 focuses on the Corinthians&rsquo; specific gift for Jerusalem, the broader Pauline framework in 1 Corinthians 16:1&ndash;2 establishes a pattern: &ldquo;On the first day of every week, each of you should set aside a sum of money in keeping with your income.&rdquo; Systematic, proportional giving is the practical structure that enables cheerful generosity to be consistent rather than sporadic. The Old Testament tithe (10% as a starting place) provides a concrete benchmark that many believers find helpful. The New Testament does not legislate a percentage but increases the motivation from legal obligation to grace-rooted gratitude. Whether 10% or 20% or more, the practice of consistent, proportion-based giving embodies the sowing-and-reaping principle in everyday financial life.",
              },
              {
                num: "04",
                color: PURPLE,
                title: "Connect Giving to the Body of Christ Globally",
                body: "Paul&rsquo;s collection was explicitly about connecting Gentile churches to Jewish believers in Jerusalem &mdash; crossing ethnic, geographic, and cultural lines through material generosity. The same impulse should characterize Christian giving today. The &ldquo;saints&rdquo; who need support are not only in our local congregation but in persecuted churches, in majority-world communities without adequate resources, in mission organizations proclaiming the gospel where it has not yet been heard. When Christians give to global needs, they are participating in the same <em>leitourgia</em> (sacred service) Paul described &mdash; they are priests offering gifts that create bonds of prayer, love, and thanksgiving across the entire body of Christ.",
              },
              {
                num: "05",
                color: BLUE,
                title: "Let the Indescribable Gift Reframe Your Relationship with Money",
                body: "The final verse of the chapter &mdash; &ldquo;Thanks be to God for his indescribable gift!&rdquo; (v. 15) &mdash; is the key that unlocks the entire chapter. When Christ himself is your greatest treasure, the grip of money loosens. The person who deeply knows that they are &ldquo;enriched in him in all speech and all knowledge&rdquo; (1 Cor 1:5) and &ldquo;heirs of God and fellow heirs with Christ&rdquo; (Rom 8:17) holds earthly wealth with an open hand. Practical steps: regularly give thanks for specific non-material gifts &mdash; forgiveness, the Word, the church, the Spirit, prayer. As gratitude for the indescribable gift grows, cheerful generosity becomes less an obligation and more a natural outflow.",
              },
              {
                num: "06",
                color: ROSE,
                title: "Understand That Your Giving Glorifies God in Others",
                body: "Verses 13&ndash;14 describe an extraordinary chain reaction: the Corinthians give &rarr; the Jerusalem saints receive &rarr; the saints glorify God &rarr; the saints pray for the Corinthians &rarr; bonds of love form between communities that never met. Your financial generosity, when directed toward genuine needs in the body of Christ, participates in this chain. Every check written, every recurring gift set up, every spontaneous act of generosity to a brother or sister in need &mdash; these travel further than you can trace. They produce thanksgiving in hearts you will never know on this side of eternity. This eschatological perspective &mdash; giving whose effects extend beyond the transaction into the eternal harvest of God&rsquo;s glory &mdash; should deepen and dignify every act of giving.",
              },
            ].map(({ num, color, title, body }) => (
              <div key={num} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.8rem", marginBottom: "1.5rem", display: "flex", gap: "1.2rem" }}>
                <div style={{ flexShrink: 0, width: 42, height: 42, borderRadius: "50%", background: `${color}22`, border: `1px solid ${color}55`, display: "flex", alignItems: "center", justifyContent: "center", color: color, fontWeight: 800, fontSize: "0.85rem", fontFamily: "system-ui, sans-serif" }}>{num}</div>
                <div>
                  <h3 style={{ color: color, fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.7rem" }}>{title}</h3>
                  <p style={{ color: MUTED, lineHeight: 1.85, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              </div>
            ))}

            {/* Reflection questions */}
            <div style={{ background: `${GOLD}11`, border: `1px solid ${GOLD}33`, borderRadius: 14, padding: "1.8rem", marginTop: "2rem" }}>
              <h3 style={{ color: GOLD, fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>Study Questions for Personal Reflection or Group Discussion</h3>
              <ol style={{ color: MUTED, lineHeight: 2.0, paddingLeft: "1.2rem", margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "When you give, which best describes your inner state: <em>hilaron</em> (cheerful), <em>lup&#275;</em> (reluctant), or <em>ananke</em> (compelled)? What does that reveal?" }} />
                <li dangerouslySetInnerHTML={{ __html: "How does the concept of <em>autarkeia</em> (divine sufficiency) in verse 8 challenge or comfort your current approach to financial security?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Paul says the collection created bonds of prayer and love between communities that had never met (v. 13&ndash;14). How does this motivate cross-cultural or global giving?" }} />
                <li dangerouslySetInnerHTML={{ __html: "What would it look like to give &ldquo;as you have decided in your heart&rdquo; &mdash; to make a deliberate, planned commitment rather than waiting to see what is left over?" }} />
                <li dangerouslySetInnerHTML={{ __html: "How does Paul&rsquo;s closing doxology (&ldquo;Thanks be to God for his indescribable gift!&rdquo;) connect the theology of giving to the person of Christ? How does understanding the gospel change how you hold your money?" }} />
              </ol>
            </div>

            {/* Video section */}
            <div style={{ marginTop: "3rem" }}>
              <h2 style={{ color: TEXT, fontWeight: 800, fontSize: "1.25rem", marginBottom: "1.2rem" }}>Video Teaching Resources</h2>
              <p style={{ color: MUTED, lineHeight: 1.75, marginBottom: "1.5rem" }}
                dangerouslySetInnerHTML={{ __html: "Deepen your study of 2 Corinthians 9 with these video resources covering the theology of cheerful giving, the Jerusalem collection, and the biblical framework for Christian generosity." }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                {videoItems.map((v) => (
                  <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden" }}>
                    <VideoEmbed videoId={v.videoId} title={v.title} />
                    <div style={{ padding: "1rem" }}>
                      <p style={{ color: TEXT, fontWeight: 600, fontSize: "0.9rem", margin: 0 }}
                        dangerouslySetInnerHTML={{ __html: v.title }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
