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

const videoItems = [
  { videoId: "rT9kLmWvQ2p", title: "2 Corinthians 7: Godly Grief and True Repentance Explained" },
  { videoId: "bN4hGpXcEoZ", title: "Comforted by the Coming of Titus - 2 Corinthians 7:5-7" },
  { videoId: "wK8sFjDmYtA", title: "Godly Grief vs Worldly Grief - 2 Corinthians 7:10" },
  { videoId: "pV3zLqHnBxR", title: "BibleProject - 2 Corinthians Overview and Reconciliation" },
];

const TABS = ["Overview", "Key Themes", "Verse by Verse", "Application"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${CARD} 0%, #1a1a2e 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: GOLD, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>New Testament Study</p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>2 Corinthians Chapter 7</h1>
          <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: 14, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "&ldquo;For godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death.&rdquo; (2 Corinthians 7:10)" }} />
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Second Corinthians 7 is the chapter where the storm finally breaks into sunlight. After pages of strained relationship, painful letters, and a defense of his ministry, Paul pours out his relief and joy at the news Titus brings: the Corinthians have been restored. The chapter begins by gathering up the promises of the previous chapter into a single urgent summons to cleanse ourselves and bring holiness to completion in the fear of God. It then opens Paul&rsquo;s heart wider than ever &mdash; make room for us, he pleads, for you are in our hearts to die together and to live together. At its very center stands one of the most important pastoral distinctions in all of Scripture: the difference between a godly grief that leads to repentance and life, and a worldly grief that produces only death. Here we learn what genuine repentance looks like, how God comforts the downcast through ordinary people, and how broken relationships in the body of Christ can be healed into overflowing joy." }} />
        </div>
      </div>

      {/* TABS */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} style={{ padding: "14px 24px", background: "none", border: "none", color: activeTab === i ? TEXT : MUTED, fontFamily: "Georgia, serif", fontSize: "0.95rem", cursor: "pointer", borderBottom: activeTab === i ? `2px solid ${GOLD}` : "2px solid transparent", whiteSpace: "nowrap" }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>

        {/* TAB 0: OVERVIEW */}
        {activeTab === 0 && (
          <div>

            {/* Section 1 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Place of 2 Corinthians 7</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Second Corinthians 7 stands as the resolution of a long and painful chapter in Paul&rsquo;s relationship with the church at Corinth. The opening verse reaches back to grasp the magnificent promises that closed chapter 6 &mdash; that God will dwell among his people, be their God, welcome them, and be a Father to them. &ldquo;Since we have these promises, beloved, let us cleanse ourselves from every defilement of body and spirit, bringing holiness to completion in the fear of God&rdquo; (7:1). The promises of grace are not given to leave us unchanged; they are the very ground and motive of a holiness pursued all the way to its completion." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "From this call to holiness Paul returns to the deeply personal thread he had begun in chapter 6: the longing for an open-hearted, reconciled relationship with the Corinthians. The chapter divides into three movements. First (vv.1-4), Paul appeals to the Corinthians to make room for him in their hearts, insisting he has wronged no one and that they are in his heart to die together and to live together. Second (vv.5-7), he recounts the restless affliction he endured in Macedonia and the flood of comfort that came when Titus arrived with good news. Third (vv.8-16), he reflects on the letter he had written that grieved them, explains the difference between godly and worldly grief, traces the fruit of their repentance, and rejoices in his restored confidence in them." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Completing Holiness in the Fear of God</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The first verse is one of the great summons to sanctification in the New Testament. &ldquo;Since we have these promises, beloved, let us cleanse ourselves from every defilement of body and spirit, bringing holiness to completion in the fear of God.&rdquo; Notice the logic: the promises come first, and the pursuit of holiness flows out of them. This is the grammar of the gospel &mdash; the indicative of what God has promised grounds the imperative of how we are to live. Holiness is never the price we pay to earn the promises; it is the fitting response of those who already possess them." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Paul calls for a cleansing &ldquo;from every defilement of body and spirit&rdquo; &mdash; a holiness that reaches the whole person, both the outward conduct of the body and the inward affections of the spirit. The verb &ldquo;bringing holiness to completion&rdquo; pictures sanctification as a work to be carried through to its end, not a single moment but a lifelong perfecting. And it is to be pursued &ldquo;in the fear of God&rdquo; &mdash; not a cringing terror, but the reverent awe of those who know they belong to a holy God who dwells among them. The fear of the Lord is here the engine of holiness, the reverence that takes the promises seriously enough to act upon them." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>Make Room in Your Hearts</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Make room in your hearts for us. We have wronged no one, we have corrupted no one, we have taken advantage of no one&rdquo; (7:2). Paul answers the slanders that had circulated in Corinth with a threefold denial. Far from exploiting the church, he had served it at great personal cost. The appeal is tender and unguarded: he asks not for vindication but for affection, that the Corinthians would open the constricted chambers of their hearts and welcome him in." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Then comes a sentence of astonishing warmth: &ldquo;I do not say this to condemn you, for I said before that you are in our hearts, to die together and to live together&rdquo; (7:3). Paul will not weaponize his defense to shame them. Instead he declares an unbreakable bond &mdash; they are so deeply held in his heart that he is prepared to share their whole destiny, in death and in life alike. He adds, &ldquo;I have great confidence in you; I have great pride in you; I am filled with comfort. In all our affliction, I am overflowing with joy&rdquo; (7:4). The pastor who had written through tears now overflows with confidence, pride, comfort, and joy." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;For godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>2 Corinthians 7:10 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>Comforted by the Coming of Titus</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Paul pulls back the curtain on his own inner turmoil. &ldquo;For even when we came into Macedonia, our bodies had no rest, but we were afflicted at every turn &mdash; fighting without and fear within&rdquo; (7:5). This is one of the most candid windows in all his letters into the cost of pastoral love. He had crossed into Macedonia restless and anxious, hemmed in by conflict on the outside and gripped by fear on the inside, waiting for word about the church he loved. The great apostle is not above the very emotions his readers know so well." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Then the relief breaks in: &ldquo;But God, who comforts the downcast, comforted us by the coming of Titus, and not only by his coming but also by the comfort with which he was comforted by you&rdquo; (7:6-7). The title is precious &mdash; God is the one &ldquo;who comforts the downcast,&rdquo; echoing the opening of the letter where he is the God of all comfort. And notice how the comfort arrived: not by a dramatic vision but by the coming of a friend with good news. Titus reported the Corinthians&rsquo; longing, their mourning, their zeal for Paul, so that Paul&rsquo;s joy was greater than ever. Divine comfort came through a human messenger and a reconciled church." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Grief That Leads to Life</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "At the heart of the chapter is Paul&rsquo;s reflection on the painful letter he had sent. &ldquo;For even if I made you grieve with my letter, I do not regret it &mdash; though I did regret it, for I see that that letter grieved you, though only for a while. As it is, I rejoice, not because you were grieved, but because you were grieved into repenting&rdquo; (7:8-9). Paul does not rejoice in their pain as such; he rejoices because the pain bore fruit. Their sorrow led somewhere &mdash; it led to repentance, and so to salvation rather than loss." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This brings him to the crucial distinction of verse 10: &ldquo;For godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death.&rdquo; Two kinds of sorrow exist, and they run in opposite directions. Godly grief &mdash; sorrow according to God, sorrow that reckons with God and his holiness &mdash; produces repentance and ends in life. Worldly grief &mdash; the mere remorse of being caught, of damaged pride, of consequences &mdash; produces only death. Paul then traces the unmistakable fruit of true repentance in the Corinthians, a sevenfold evidence of grief turned to godly account, before closing in overflowing joy at the restored relationship and at the joy of Titus himself." }} />
            </div>

          </div>
        )}

        {/* TAB 1: KEY THEMES */}
        {activeTab === 1 && (
          <div>

            {/* Theme 1 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GOLD, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Holiness as the Completion of God&rsquo;s Promises</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with one of the clearest statements of the relationship between grace and holiness in the New Testament. &ldquo;Since we have these promises, beloved, let us cleanse ourselves&hellip; bringing holiness to completion in the fear of God&rdquo; (7:1). The word &ldquo;since&rdquo; is everything. Holiness does not earn the promises; it flows from them. Because God has pledged to dwell among us, to be our God, and to welcome us as sons and daughters, we are moved to purity. The promises are the root; sanctification is the fruit." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Paul calls for cleansing &ldquo;from every defilement of body and spirit.&rdquo; True holiness is not merely external propriety or merely inward sentiment; it embraces the whole person. The body, with its appetites and actions, and the spirit, with its thoughts and affections, are both to be cleansed. There is no compartment of life exempt from the claim of the holy God who dwells in his people. This comprehensive vision guards against both a cold legalism that polices only outward acts and a sentimental piety that ignores how we actually live." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The phrase &ldquo;bringing holiness to completion&rdquo; reveals that sanctification is a process to be carried through to its end. Holiness is not a single decision but a lifelong perfecting, a pressing on toward the goal. And the atmosphere of this pursuit is &ldquo;the fear of God&rdquo; &mdash; the reverent awe that takes God seriously, that trembles at his word and treasures his presence. This holy fear is not the opposite of the love and comfort that fill the rest of the chapter; it is their companion. To know God as the comforter of the downcast and the Father who welcomes us is precisely to fear him rightly and to pursue the holiness he loves." }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Open Heart and the Ministry of Reconciliation</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Picking up the plea of chapter 6, Paul cries, &ldquo;Make room in your hearts for us&rdquo; (7:2). The whole chapter is saturated with the language of the heart, affection, longing, and confidence. Paul has held nothing back; his own heart is wide open, and he asks only that the Corinthians would open theirs in return. The reconciliation he seeks is not a cold legal settlement but the restoration of warm, mutual love between a father and his children in the faith." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "His threefold defense &mdash; &ldquo;we have wronged no one, we have corrupted no one, we have taken advantage of no one&rdquo; &mdash; answers the suspicions and slanders that had poisoned the relationship. Yet Paul is careful to add that he does not say this to condemn them (7:3). He refuses to win the argument at the cost of the relationship. His goal is not to score a point but to reclaim a people he loves so deeply that he is bound to them &ldquo;to die together and to live together.&rdquo;" }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme models what reconciliation looks like within the body of Christ. It is costly, vulnerable, and patient. It requires the offended party to keep the heart open even while the relationship is strained, to defend the truth without weaponizing it, and to long for restoration rather than vindication. Paul&rsquo;s overflowing joy at the end of the chapter shows the fruit of this kind of love: a relationship not merely repaired but deepened, with confidence and pride and comfort flowing freely once again between the apostle and the church." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Comfort of God Through Human Agents</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The letter opened with the God of all comfort who comforts us in all our affliction, and chapter 7 returns to that theme with a fresh title: God is the one &ldquo;who comforts the downcast&rdquo; (7:6). Paul does not pretend to be above discouragement; he confesses he was downcast, restless, afflicted at every turn, with fighting without and fear within (7:5). The honesty is striking. The apostle who can speak of always rejoicing is also the man who admits he had no rest until comfort came." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "And notice how God&rsquo;s comfort arrived: &ldquo;God&hellip; comforted us by the coming of Titus&rdquo; (7:6). The comfort of God came not by a vision or an angel but by the arrival of a trusted friend bearing good news. God ordinarily comforts his people through other people &mdash; through their presence, their report, their encouragement. The chain of comfort is beautiful: the Corinthians comforted Titus, Titus carried that comfort to Paul, and behind it all stood the God who comforts the downcast working through every link." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme dignifies ordinary ministry. We may long for dramatic interventions, but God most often comforts the downcast through the faithful presence of a brother or sister, a timely word, an arrival at the door. To be a Titus &mdash; to carry comfort from one part of the body to another &mdash; is to be an instrument of the God of all comfort. And to receive comfort through such ordinary means is to learn that the same God who could speak from heaven chooses, in his kindness, to console us through one another." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Godly Grief Versus Worldly Grief</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Verse 10 is the theological heart of the chapter and one of the most important pastoral distinctions in all of Scripture. &ldquo;For godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death.&rdquo; The Greek phrase behind &ldquo;godly grief&rdquo; is lupe kata theon &mdash; sorrow according to God, sorrow that reckons with God himself. This is grief that flows from seeing our sin in the light of God&rsquo;s holiness and love, and it always moves toward repentance and life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Worldly grief, by contrast, is sorrow that has no reference to God. It is the remorse of being caught, the sting of wounded pride, the dread of consequences, the regret that wishes the sin had never been discovered rather than that it had never been committed. The classic contrast is Peter and Judas. Both sinned grievously against the Lord; both wept bitterly. But Peter&rsquo;s sorrow was godly and drove him back to Christ in repentance and restoration, while Judas&rsquo;s sorrow was worldly remorse that drove him to despair and death. The same external grief led to opposite ends because the two sorrows had opposite roots." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Paul adds a precious phrase: godly grief leads to &ldquo;salvation without regret.&rdquo; True repentance is never something one looks back on with regret; no one ever wishes they had not turned from sin to God. Worldly grief, by contrast, ends in death &mdash; the deadening of the conscience, the hardening of the heart, and ultimately the death that sin always works. The pastoral wisdom here is immense: not all tears are the same. The test of grief is not its intensity but its direction. Does the sorrow drive us toward God and away from sin, or does it merely circle around ourselves and our shame?" }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Sevenfold Fruit of Genuine Repentance</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Paul does not leave repentance as an abstraction; he names its fruit. &ldquo;For see what earnestness this godly grief has produced in you, but also what eagerness to clear yourselves, what indignation, what fear, what longing, what zeal, what punishment!&rdquo; (7:11). This is a portrait of repentance in action, seven marks that show the grief was genuine. Earnestness replaced apathy; the church now took the matter with utmost seriousness. Eagerness to clear themselves showed their desire to set things right and be free of complicity in the wrong." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Indignation marks the holy anger that true repentance feels toward the sin itself. Fear is the reverent awe before God and concern for his honor. Longing is the renewed desire for the restored relationship with Paul. Zeal is the active eagerness to do what is right, and readiness to see justice done addresses the wrong that had been committed. Together these seven evidences show that their sorrow was no mere passing emotion but a transformation that reached into their attitudes, their relationships, and their actions." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Paul concludes, &ldquo;At every point you have proved yourselves innocent in the matter&rdquo; (7:11). Genuine repentance vindicates itself by its fruit. This is the crucial difference between true repentance and mere apology: repentance changes things. It is not enough to feel bad; godly grief produces a repentance that acts &mdash; that clears away the wrong, restores the relationship, and pursues righteousness with zeal. Where these fruits appear, we may be confident the grief was according to God; where sorrow leaves everything unchanged, it was only the grief of the world." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Joy in a Restored Relationship</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter that began in restless affliction ends in overflowing joy. Paul explains that he wrote the painful letter not merely about the offender or the one wronged, but so that the Corinthians&rsquo; own earnestness for him might be revealed in the sight of God (7:12). The deepest purpose of the discipline was relational &mdash; to surface and restore the love between the church and its apostle. And the result exceeded his hopes: &ldquo;Therefore we are comforted&rdquo; (7:13)." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s joy is multiplied by the joy of Titus: &ldquo;we rejoiced still more at the joy of Titus, because his spirit has been refreshed by you all&rdquo; (7:13). Paul had boasted to Titus about the Corinthians, and they had not put him to shame; just as everything Paul said to them was true, so his boasting to Titus proved true as well (7:14). Titus&rsquo;s affection for them only grew as he remembered their obedience and the fear and trembling with which they received him (7:15). The restored relationship rippled outward, refreshing not only Paul but his co-worker too." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter closes on a note of complete confidence: &ldquo;I rejoice, because I have complete confidence in you&rdquo; (7:16). The breach is healed, the trust is restored, and the relationship stands stronger than before. This is the goal toward which all godly discipline and all godly grief are meant to move &mdash; not merely the correction of a fault, but the healing and deepening of a relationship within the body of Christ. The end of repentance is reconciliation, and the fruit of reconciliation is joy." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* v.1 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verse 1: The Call to Complete Holiness</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Cleanse Ourselves in the Fear of God</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;Since we have these promises, beloved, let us cleanse ourselves from every defilement of body and spirit, bringing holiness to completion in the fear of God.&rdquo; The verse reaches back to the promises of chapter 6 &mdash; that God will dwell among his people and be a Father to them. Those promises are the ground of the appeal: because we possess them, we cleanse ourselves." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The cleansing reaches &ldquo;every defilement of body and spirit&rdquo; &mdash; the whole person, outward and inward. &ldquo;Bringing holiness to completion&rdquo; pictures sanctification as a work carried through to its end, and &ldquo;in the fear of God&rdquo; supplies its reverent atmosphere. The tender address &ldquo;beloved&rdquo; shows that this call to holiness comes not from a distant judge but from a father who loves the people he is exhorting." }} />
            </div>

            {/* vv.2-4 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 2-4: Make Room in Your Hearts</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>To Die Together and to Live Together</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2</strong> &mdash; &ldquo;Make room in your hearts for us. We have wronged no one, we have corrupted no one, we have taken advantage of no one.&rdquo; Paul pleads for an enlarged affection and answers the slanders against him with a threefold denial. Far from exploiting the Corinthians, he has served them with integrity at great cost." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.3</strong> &mdash; &ldquo;I do not say this to condemn you, for I said before that you are in our hearts, to die together and to live together.&rdquo; Paul refuses to weaponize his defense. The bond he describes is total: they are so held in his heart that he shares their whole destiny, in death and in life. He will not win the argument at the expense of the relationship." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.4</strong> &mdash; &ldquo;I have great confidence in you; I have great pride in you; I am filled with comfort. In all our affliction, I am overflowing with joy.&rdquo; Four words tumble out &mdash; confidence, pride, comfort, joy. Even in the midst of affliction, the news from Corinth has filled Paul with an overflowing gladness that sets the tone for everything that follows." }} />
            </div>

            {/* vv.5-7 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 5-7: Comforted by the Coming of Titus</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>God Comforts the Downcast</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.5</strong> &mdash; &ldquo;For even when we came into Macedonia, our bodies had no rest, but we were afflicted at every turn &mdash; fighting without and fear within.&rdquo; Paul lays bare his anxiety. He had crossed into Macedonia restless and pressed on every side, with conflict on the outside and fear on the inside, waiting in suspense for news of the church he loved." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6</strong> &mdash; &ldquo;But God, who comforts the downcast, comforted us by the coming of Titus.&rdquo; The title for God is precious &mdash; he comforts the downcast &mdash; and the means of comfort is striking: not a vision but the arrival of a trusted friend. God ordinarily consoles his people through the presence of others." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.7</strong> &mdash; &ldquo;and not only by his coming but also by the comfort with which he was comforted by you, as he told us of your longing, your mourning, your zeal for me, so that I rejoiced still more.&rdquo; Titus reported the Corinthians&rsquo; longing, mourning, and zeal, and the comfort flowed in a chain from the church to Titus to Paul, so that his joy was multiplied." }} />
            </div>

            {/* vv.8-9 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 8-9: The Painful Letter</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Grieved into Repenting</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.8</strong> &mdash; &ldquo;For even if I made you grieve with my letter, I do not regret it &mdash; though I did regret it, for I see that that letter grieved you, though only for a while.&rdquo; Paul speaks with disarming honesty about the painful letter he had sent. He had felt the pastor&rsquo;s reluctance at causing pain, yet now, seeing the outcome, he no longer regrets it, for the grief was temporary and fruitful." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.9</strong> &mdash; &ldquo;As it is, I rejoice, not because you were grieved, but because you were grieved into repenting. For you felt a godly grief, so that you suffered no loss through us.&rdquo; Paul carefully distinguishes the cause of his joy: not the pain itself, but the repentance it produced. Their grief was &ldquo;godly,&rdquo; sorrow according to God, and so they suffered no loss but only gain." }} />
            </div>

            {/* v.10 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verse 10: The Crucial Distinction</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Two Sorrows, Two Destinations</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.10</strong> &mdash; &ldquo;For godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death.&rdquo; This is the theological center of the chapter. Two kinds of sorrow exist, running in opposite directions. Godly grief &mdash; sorrow according to God &mdash; produces repentance and ends in salvation, a salvation one never looks back on with regret." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Worldly grief, by contrast, produces death. It is the remorse of being caught, the sting of wounded pride, the regret over consequences rather than over sin. The classic contrast is Peter, whose godly sorrow drove him back to Christ, and Judas, whose worldly remorse drove him to despair. The test of any grief is not its intensity but its direction &mdash; whether it leads toward God and repentance or only circles around the self." }} />
            </div>

            {/* v.11 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verse 11: The Fruit of Repentance</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Seven Marks of Genuine Grief</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11</strong> &mdash; &ldquo;For see what earnestness this godly grief has produced in you, but also what eagerness to clear yourselves, what indignation, what fear, what longing, what zeal, what punishment!&rdquo; Paul lists a sevenfold fruit of true repentance: earnestness, eagerness to set things right, indignation against the sin, reverent fear, longing for restored fellowship, zeal for what is good, and the readiness to see justice done." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "He concludes, &ldquo;At every point you have proved yourselves innocent in the matter.&rdquo; Genuine repentance vindicates itself by its fruit; it changes things. This is the difference between repentance and mere apology &mdash; repentance acts, clearing away the wrong, restoring the relationship, and pursuing righteousness with zeal. Where such fruits appear, the grief was according to God." }} />
            </div>

            {/* vv.12-16 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 12-16: Joy and Restored Confidence</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Complete Confidence in You</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.12-13</strong> &mdash; &ldquo;So although I wrote to you, it was not for the sake of the one who did the wrong&hellip; but in order that your earnestness for us might be revealed to you in the sight of God. Therefore we are comforted.&rdquo; The deepest purpose of the painful letter was relational &mdash; to surface and restore the church&rsquo;s love for its apostle &mdash; and that purpose was achieved, bringing Paul great comfort." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.13-15</strong> &mdash; &ldquo;And besides our own comfort, we rejoiced still more at the joy of Titus, because his spirit has been refreshed by you all.&rdquo; Paul had boasted about the Corinthians to Titus, and they had not put him to shame; his boasting proved true. Titus&rsquo;s affection for them grew as he remembered their obedience and the fear and trembling with which they received him." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.16</strong> &mdash; &ldquo;I rejoice, because I have complete confidence in you.&rdquo; The chapter closes where godly discipline and godly grief are meant to arrive: a healed and deepened relationship. The breach is mended, trust is restored, and the bond between the apostle and the church stands stronger than before. The end of repentance is reconciliation, and the fruit of reconciliation is joy." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>Pursue Holiness from the Promises</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Since we have these promises&hellip; let us cleanse ourselves.&rdquo; The order of the gospel teaches us to root holiness not in fear of losing God&rsquo;s favor but in the security of his promises. Because God has pledged to dwell among us and welcome us as his children, we are moved to purity of body and spirit alike. Holiness pursued any other way becomes either anxious legalism or empty striving." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is to let the greatness of God&rsquo;s promises fuel a wholehearted and ongoing pursuit of holiness, carried through &ldquo;to completion&rdquo; rather than abandoned halfway. Examine both body and spirit &mdash; the outward conduct and the inward affections &mdash; for the defilements that need cleansing. And do it &ldquo;in the fear of God,&rdquo; with a reverent awe that takes his holiness and his nearness seriously enough to act today." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Keep Your Heart Open</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Make room in your hearts for us&rdquo; calls us to the costly vulnerability of reconciliation. Paul kept his heart wide open even toward those who had wounded and suspected him, defending the truth without weaponizing it and longing for restoration rather than vindication. Our temptation, when wronged, is to close the heart and guard ourselves; the gospel calls us to keep loving while the relationship is still strained." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is to refuse to let conflict harden into permanent estrangement. Is there a relationship in the body of Christ where your heart has narrowed? Paul models defending oneself honestly while insisting, &ldquo;I do not say this to condemn you.&rdquo; To make room in our hearts for others &mdash; even those who have hurt us &mdash; is to imitate the open-hearted love that seeks not to win but to restore." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Discern Godly Grief from Worldly Grief</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Verse 10 gives us a searching test for our own sorrow over sin. Godly grief reckons with God, grieves over the offense against him, and moves toward repentance and life. Worldly grief is the mere remorse of being caught, the regret over consequences and damaged reputation, and it ends only in death. The same tears can flow from opposite roots, as Peter and Judas show." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is to ask, when we are sorry for sin, which way our sorrow is running. Does it drive us back to God in humble repentance, or does it circle around our own shame, image, and self-pity? Worldly grief wishes the sin had not been discovered; godly grief wishes it had never been committed and turns from it to God. Cultivate the sorrow according to God that leads to salvation without regret." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Let Repentance Bear Fruit and Be an Agent of Comfort</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The sevenfold fruit of verse 11 reminds us that genuine repentance changes things. It produces earnestness, eagerness to set wrongs right, holy indignation against sin, reverent fear, longing for restored fellowship, zeal, and a readiness to do justice. True repentance is never content merely to feel bad; it acts to clear away the wrong and pursue righteousness. Apology that leaves everything unchanged is not yet repentance." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The chapter also calls us to be a Titus &mdash; an agent of the God who comforts the downcast. God comforted Paul through the coming of a friend with good news. We may long for dramatic interventions, but God most often comforts his people through the faithful presence of a brother or sister. The application is to carry comfort from one part of the body to another, to be the timely arrival, the encouraging word, the good report that lifts a downcast heart." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Reflection Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Paul grounds holiness in God&rsquo;s promises. Which promise of God most motivates you toward purity, and where in body or spirit is God calling you to bring holiness nearer to completion?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Paul kept his heart open even toward those who had wounded him. Is there a relationship where your heart has narrowed? What would it look like to make room in your heart again?" }} />
                <li dangerouslySetInnerHTML={{ __html: "When you have sorrowed over sin, has it been godly grief that drives you to God, or worldly grief that circles around your own shame and consequences? How can you tell the difference in your own heart?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Look at the sevenfold fruit of repentance in verse 11. Which of these marks &mdash; earnestness, eagerness to set things right, indignation, fear, longing, zeal, justice &mdash; is most evident or most lacking in your own response to sin?" }} />
                <li dangerouslySetInnerHTML={{ __html: "God comforted Paul through the coming of Titus. Who has God used to comfort you in a downcast season? And whom might God be calling you to comfort by your presence and your encouragement?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The chapter ends in restored confidence and overflowing joy. Is there a broken relationship in the body of Christ that God may be calling you to pursue toward reconciliation, that joy might be restored?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Father, you have given me such great promises &mdash; to dwell among your people, to be my God, to welcome me as your child &mdash; and so I ask you to help me cleanse myself from every defilement of body and spirit, bringing holiness to completion in the fear of you. Teach me the difference between godly grief and worldly grief; let my sorrow over sin always run toward you in true repentance and never circle around my own shame. Where I have wronged another, give me the earnestness and zeal that set things right. Where another has wronged me, keep my heart wide open and ready to be reconciled. You are the God who comforts the downcast; comfort me through your people, and make me a Titus who carries comfort to others. And bring me at last to the joy of restored relationships, the joy in which Paul could say he had complete confidence. Through Jesus Christ my Lord, amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of 2 Corinthians 7.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {videoItems.map((item) => (
              <div key={item.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                <VideoEmbed videoId={item.videoId} title={item.title} />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ color: TEXT, fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
