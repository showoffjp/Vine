"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#6B4FBB";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "One Body One Spirit",
  "Christ's Gifts",
  "Growing to Maturity",
  "The Old and New Self",
  "Holy Living",
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
    heading: "Overview of Ephesians 4",
    reference: "Ephesians 4:1&ndash;32",
    paragraphs: [
      "Ephesians 4 stands at the great hinge of the letter. The first three chapters have been a sustained doxology &mdash; Paul&rsquo;s soaring account of the eternal purposes of God, the cosmic reconciliation accomplished in Christ, the mystery of the one body formed from Jew and Gentile, and the immeasurable riches of grace lavished on the people of God. Now the letter turns. The word &ldquo;therefore&rdquo; that opens chapter 4 is one of the most consequential transitions in all of Paul&rsquo;s writing: &ldquo;I therefore, a prisoner for the Lord, urge you to walk in a manner worthy of the calling to which you have been called&rdquo; (4:1). Doctrine becomes the ground of duty; the indicative of grace becomes the imperative of gospel living.",
      "The chapter addresses three interlocking concerns. The first (vv. 1&ndash;16) is the unity and growth of the church: the seven unities that bind the body together, the gifts Christ gave when he ascended, the goal of maturing together into the fullness of Christ, and the organic image of a body in which every part works properly and builds itself up in love. The second concern (vv. 17&ndash;24) is the transformation of the individual: the contrast between the darkened mind of the old life and the renewed mind of the new self, created after the likeness of God in true righteousness and holiness. The third concern (vv. 25&ndash;32) is the ethics of the new community: specific commands about truth-telling, anger, honest labor, wholesome speech, and the grieving of the Spirit.",
      "What holds all three together is the vision of a community that corresponds to its calling &mdash; a people whose common life visibly embodies the reconciliation that Christ has accomplished. The church is not merely a gathering of individuals who have each been saved; it is the body of Christ in the world, the community in which the powers and principalities are meant to see the manifold wisdom of God (3:10). Ephesians 4 is the practical argument for why this visible embodiment demands both unity and transformation.",
      "The pastoral weight of the chapter is felt throughout. Paul is writing from prison, and he describes himself as &ldquo;a prisoner for the Lord&rdquo; &mdash; a title that carries both pathos and authority. He writes not from a position of ease but from chains, urging the Ephesians to live out the freedom that his imprisonment is meant to secure. The chapter&rsquo;s call to worthy living is not a set of abstract duties but the summons of a man who has staked his life on the truth of the gospel he preaches.",
      "Ephesians 4 has shaped Christian thought on ecclesiology, sanctification, and ethics for two millennia. Its image of the body growing into the fullness of Christ provides a vision of the church that is both organic and theological: the church is not a human organization but a living body, and its maturity is not a human achievement but the gift of the ascended Lord distributed through the ministries he has given. To understand Ephesians 4 is to understand Paul&rsquo;s vision of what the church is for.",
    ],
  },
  {
    id: "One Body One Spirit",
    heading: "The Seven Unities of the Body",
    reference: "Ephesians 4:1&ndash;6",
    paragraphs: [
      "Paul begins the practical section of the letter with a description of the virtues that make unity possible: humility, gentleness, patience, and bearing with one another in love. These are not peripheral graces &mdash; they are the relational fabric without which the unity of the Spirit cannot be maintained. &ldquo;Eager to maintain the unity of the Spirit in the bond of peace&rdquo; (4:3) &mdash; the word &ldquo;eager&rdquo; or &ldquo;making every effort&rdquo; suggests that the unity of the church is both a gift and a task, something given by the Spirit and something that must be actively preserved by the community.",
      "Paul then grounds this call to unity in what has become one of the most celebrated passages in all of his letters &mdash; the sevenfold enumeration of the unities that belong to the people of God: &ldquo;one body and one Spirit &mdash; just as you were called to the one hope that belongs to your call &mdash; one Lord, one faith, one baptism, one God and Father of all, who is over all and through all and in all&rdquo; (4:4&ndash;6). The seven unities form a Trinitarian pattern: one body and one Spirit and one hope (the Spirit&rsquo;s work), one Lord and one faith and one baptism (the Son&rsquo;s lordship confessed and entered), one God and Father (the source of all).",
      "The &ldquo;one body&rdquo; is the church, the community of all who have been incorporated into Christ. The &ldquo;one Spirit&rdquo; is the Holy Spirit who indwells and animates the entire body. The &ldquo;one hope&rdquo; is the confident expectation of the glory to which the body is called &mdash; a hope that levels every distinction of status or background because all are headed toward the same destination. These three unities describe the body&rsquo;s present experience and future orientation.",
      "The &ldquo;one Lord&rdquo; is Jesus Christ, whose lordship is the defining reality of the church&rsquo;s existence. The &ldquo;one faith&rdquo; is both the act of trusting in Christ and the body of truth entrusted to the church. The &ldquo;one baptism&rdquo; is the initiatory rite by which every member of the body has been incorporated &mdash; a visible, public, unrepeatable event that marks the common entrance of all believers. These three point to the confession and commitment that unite all members under a single Lord.",
      "The &ldquo;one God and Father of all, who is over all and through all and in all&rdquo; is the ultimate foundation of all unity. The threefold &ldquo;all&rdquo; underscores the comprehensiveness of the Father&rsquo;s sovereignty: he is over all (transcendence), through all (immanence and agency), and in all (indwelling presence). The seven unities do not describe a unity that the church must create; they describe the unity that already exists in God and into which the church is called to live. The task is not to manufacture unity but to maintain and manifest a unity that is already real.",
      "This passage has been foundational for ecumenical theology and has served as a touchstone for discussions of Christian unity for centuries. Its challenge to the contemporary church is clear: every division, every schism, every wall of hostility between believers is a contradiction of the sevenfold reality that defines the body of Christ. The call to maintain the unity of the Spirit is a call to let the theological reality of who we are reshape the social reality of how we live together.",
    ],
  },
  {
    id: "Christ's Gifts",
    heading: "The Ascended Christ and His Gifts",
    reference: "Ephesians 4:7&ndash;13",
    paragraphs: [
      "After the vision of unity in verses 1 through 6, Paul introduces a complementary truth: within the one body, grace has been given to each member individually. &ldquo;But grace was given to each one of us according to the measure of Christ&rsquo;s gift&rdquo; (4:7). The transition from &ldquo;one&rdquo; to &ldquo;each one&rdquo; is deliberate: the body is one, but it is a body of many members, and each member has received a particular measure of grace from the ascended Lord. Unity and diversity are not in tension; they are complementary aspects of the body&rsquo;s design.",
      "Paul substantiates this by citing Psalm 68:18, which celebrates the triumphant ascent of a warrior-king who has conquered his enemies and taken them captive: &ldquo;When he ascended on high he led a host of captives, and he gave gifts to men&rdquo; (4:8). The christological interpretation is striking: the victorious king of Psalm 68 is now identified as Christ, who after his descent into the earth (his incarnation and death) ascended far above all the heavens, leading captivity captive. The gifts that flow from this victory are not spoils of war distributed to the victor&rsquo;s friends; they are the means by which the ascended king continues to rule and build his body.",
      "The gifts that Christ gives when he ascends are not abstract spiritual endowments but specific people placed within the church for the sake of its growth: &ldquo;And he gave the apostles, the prophets, the evangelists, the shepherds and teachers&rdquo; (4:11). This list of four (or five, depending on how &ldquo;shepherds and teachers&rdquo; is read) has generated enormous discussion about the nature and present function of each role. What is clear is that all four are speech ministries &mdash; their common work is the ministry of the word, addressed to the whole body for its building up.",
      "The apostles and prophets are the foundational ministries whose work is described elsewhere in Ephesians as the foundation of the church (2:20) &mdash; the authoritative witnesses to whom the mystery of Christ was revealed and whose testimony gave birth to the community. The evangelists are those whose particular gift is the proclamation of the gospel to those who have not yet heard it, extending the body by bringing new members into it. The shepherds and teachers are those who nurture and instruct the existing community, feeding it with the truth and guiding it through the dangers of false teaching.",
      "The purpose of all four ministries is stated with precision in verse 12: &ldquo;to equip the saints for the work of ministry, for building up the body of Christ.&rdquo; This sentence has had incalculable influence on Christian thinking about ministry. The gifted leaders of the church are not the sole agents of ministry; they are the equippers who prepare every member of the body to do ministry. The &ldquo;work of ministry&rdquo; belongs to all the saints; the task of the pastors and teachers is to equip all the saints for that work. Ministry is not the preserve of the few; it is the vocation of the whole body.",
      "The goal of all this equipping and building is stated in verse 13: &ldquo;until we all attain to the unity of the faith and of the knowledge of the Son of God, to mature manhood, to the measure of the stature of the fullness of Christ.&rdquo; Three phrases describe the destination: the unity of the faith (the whole body coming into a common knowledge of Christ), mature manhood (the image of an adult who has reached full growth), and the measure of the stature of the fullness of Christ (the extraordinary claim that the body is moving toward nothing less than the completeness of Christ himself). The goal is not modest improvement but the fullness of God made visible in a community.",
    ],
  },
  {
    id: "Growing to Maturity",
    heading: "No Longer Infants: Growing Into Christ",
    reference: "Ephesians 4:13&ndash;16",
    paragraphs: [
      "The contrast Paul draws between immaturity and maturity in verses 13 through 16 is one of the most vivid in all of his letters. The goal of the body&rsquo;s growth is &ldquo;mature manhood&rdquo; and &ldquo;the measure of the stature of the fullness of Christ&rdquo; (4:13) &mdash; and the alternative to that maturity is described with arresting imagery: &ldquo;so that we may no longer be children, tossed to and fro by the waves and carried about by every wind of doctrine, by human cunning, by craftiness in deceitful schemes&rdquo; (4:14). The child in the storm-tossed boat is a powerful image of doctrinal instability &mdash; the community that has not grown into a secure knowledge of Christ is at the mercy of every new teaching that comes its way.",
      "The phrase &ldquo;human cunning&rdquo; and &ldquo;craftiness in deceitful schemes&rdquo; signals that the danger is not merely intellectual confusion but spiritual predation. There are teachers whose aim is not to build up the body but to exploit it, who use the appearance of wisdom to lead the unstable away from the truth. The antidote to this vulnerability is not suspicion of all teaching but growth into the knowledge of the Son of God &mdash; a settled, mature, communal knowing of Christ that makes the counterfeit recognizable by contrast with the real.",
      "The positive alternative to infantile instability is described in verse 15: &ldquo;Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ.&rdquo; &ldquo;Speaking the truth in love&rdquo; has entered Christian vocabulary as a description of mature communication, but its meaning in context is richer than the common usage suggests. It is not merely about being honest while being kind; it is about holding fast to the truth of the gospel in the context of loving relationships within the community. Truth and love are not competing values to be balanced; they are both expressions of the Christ into whom the body is growing.",
      "The organic image of growth is sustained throughout: the body grows &ldquo;in every way&rdquo; into Christ, who is the head. The head provides direction, coherence, and life to the body; growth &ldquo;into him&rdquo; means that every aspect of the body&rsquo;s life &mdash; its beliefs, its practices, its relationships, its worship &mdash; is being conformed to Christ. This is not a growth that some members achieve and others do not; it is the growth of the whole body, every part contributing to the whole.",
      "The climactic verse of this section, verse 16, presents one of the most remarkable images of the church in all of Scripture: &ldquo;from whom the whole body, joined and held together by every joint with which it is equipped, when each part is working properly, makes the body grow so that it builds itself up in love.&rdquo; The body&rsquo;s growth is not managed from outside; it is the organic product of each part working properly in its place. Every joint, every ligament, every member contributes to the body&rsquo;s self-construction in love. The church that is growing into the fullness of Christ is the church in which every member is functioning &mdash; not the church with a gifted few doing the work of the many.",
      "This vision of the church as a self-building body carries profound implications for how Christian community is structured and experienced. It rules out the model in which a talented minority performs ministry for a passive majority. It insists that the body grows only when each part works properly &mdash; which means that the growth of the community depends on the engagement and contribution of every member. The small contribution of the least prominent member is not a peripheral nicety; it is part of what the body needs to grow.",
    ],
  },
  {
    id: "The Old and New Self",
    heading: "Put Off the Old, Put On the New",
    reference: "Ephesians 4:17&ndash;24",
    paragraphs: [
      "With verse 17 Paul turns from the corporate dimension of the church&rsquo;s growth to the personal transformation of each member. The command is introduced with unusual solemnity: &ldquo;Now this I say and testify in the Lord, that you must no longer walk as the Gentiles do, in the futility of their minds.&rdquo; The phrase &ldquo;testify in the Lord&rdquo; invokes apostolic authority for what follows, signaling that this is not a matter of preference but of gospel necessity. The life left behind at conversion is not merely different from the new life; it is incompatible with it.",
      "Paul&rsquo;s description of the old Gentile life is stark: futility of mind, darkened understanding, alienated from the life of God through ignorance and hardness of heart, past feeling, given over to sensuality and every kind of impurity with a greedy appetite for more (4:17&ndash;19). The moral descent is traced to its root in the darkened mind: when the knowledge of God is suppressed or lost, the mind becomes futile and the conscience becomes calloused, and the person is handed over to the desires of a nature that has no anchor in truth or love.",
      "Against this bleak portrait Paul places the reality of what the Ephesians have learned in Christ: &ldquo;But that is not the way you learned Christ! &mdash; assuming that you have heard about him and were taught in him, as the truth is in Jesus&rdquo; (4:20&ndash;21). The phrase &ldquo;learned Christ&rdquo; is unique in Paul &mdash; not learning about Christ but learning Christ himself, as though Christ is both the teacher and the curriculum. What has been learned in him is a way of living, not merely a set of propositions, and that way of living is called &ldquo;the truth as it is in Jesus.&rdquo;",
      "The content of what was learned is expressed in the famous threefold pattern of verses 22 through 24: &ldquo;to put off your old self, which belongs to your former manner of life and is corrupt through deceitful desires, and to be renewed in the spirit of your minds, and to put on the new self, created after the likeness of God in true righteousness and holiness.&rdquo; Put off, be renewed, put on &mdash; this is not a one-time act but an ongoing pattern of Christian life, a continual process of laying aside the habits of the old nature and clothing oneself with the new.",
      "The &ldquo;old self&rdquo; is described as corrupt &ldquo;through deceitful desires&rdquo; &mdash; desires that promise satisfaction but deliver corruption, desires that lie about what they will produce. The renewal of the mind is the antidote: when the mind is renewed by the Spirit of God and by the truth of the gospel, the desires are reordered and the old patterns of behavior lose their hold. The new self is &ldquo;created after the likeness of God in true righteousness and holiness&rdquo; &mdash; a striking echo of Genesis 1:26&ndash;27, as though the new creation in Christ is the restoration of the image that was marred at the fall.",
      "This passage has been central to Christian understandings of sanctification for two millennia. The act of &ldquo;putting on&rdquo; the new self is a vivid metaphor drawn from the language of clothing &mdash; a daily, deliberate, repeated action. Every morning is an occasion for the believer to put on Christ, to choose the new self over the old, to act from the renewed mind rather than the corrupted desire. Sanctification in Ephesians is not passive but actively participatory: the believer co-operates with the work of the Spirit by deliberately putting off what belongs to the old life and putting on what belongs to the new.",
    ],
  },
  {
    id: "Holy Living",
    heading: "The Ethics of the New Community",
    reference: "Ephesians 4:25&ndash;32",
    paragraphs: [
      "The final section of Ephesians 4 moves from the theological pattern of the old and new self to specific ethical commands that give that pattern concrete form. The commands are not random; they flow directly from the reality of what the church is. Because the body is one body whose members belong to each other, specific practices of speech and behavior are required. Each command is grounded in a theological reason &mdash; &ldquo;for&hellip;&rdquo; or &ldquo;because&hellip;&rdquo; &mdash; making the ethics inseparable from the doctrine.",
      "The first command addresses speech: &ldquo;Therefore, having put away falsehood, let each one of you speak the truth with his neighbor, for we are members one of another&rdquo; (4:25). The reason for truth-telling within the community is not merely moral &mdash; it is ontological. We are members of one another. A lie told to a fellow believer is a lie told to one&rsquo;s own body. The body cannot function in health if its members are feeding each other false information; truth is the nervous system of the community.",
      "The command about anger (4:26&ndash;27) is characteristically nuanced: &ldquo;Be angry and do not sin; do not let the sun go down on your anger, and give no opportunity to the devil.&rdquo; Anger is not simply condemned; it is regulated. The quotation of Psalm 4:4 acknowledges that there is a place for righteous anger &mdash; anger at injustice, anger at sin, anger that mirrors God&rsquo;s own anger at what destroys his image-bearers. But unresolved anger becomes a foothold for the devil, a wound in the body&rsquo;s relationships that, left untended, becomes infected. The urgency of &ldquo;do not let the sun go down&rdquo; is pastoral wisdom about the dynamics of conflict: what is unresolved overnight tends to harden.",
      "The command about labor and generosity in verse 28 is one of the most striking in the passage: &ldquo;Let the thief no longer steal, but rather let him labor, doing honest work with his own hands, so that he may have something to share with anyone in need.&rdquo; The command does not merely prohibit stealing; it redirects the energy that drove the stealing toward its opposite. The purpose of work is not self-sufficiency but generosity: one works in order to have something to give. The convert from theft is called not merely to stop taking but to become a giver &mdash; a radical transformation of the relationship to possessions.",
      "The command about speech in verse 29 provides what has become one of the most memorable formulations in all of Paul: &ldquo;Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.&rdquo; &ldquo;Corrupting talk&rdquo; &mdash; literally &ldquo;rotten&rdquo; or &ldquo;decaying&rdquo; speech &mdash; is contrasted with speech that builds up and gives grace. Every word spoken within the community is either decay or construction, either corruption or grace. The test for every utterance is whether it gives grace to those who hear it.",
      "The section culminates in the great call to forgiveness in verses 30 through 32: &ldquo;And do not grieve the Holy Spirit of God, by whom you were sealed for the day of redemption. Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice. Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.&rdquo; The mention of grieving the Spirit is the passage&rsquo;s most searching phrase: the Spirit who seals us for redemption is grieved by the very behaviors that corrupt the community &mdash; bitterness, rage, slander, malice. And the ground of all forgiveness is the forgiveness we have ourselves received: &ldquo;as God in Christ forgave you.&rdquo; Forgiveness in the community is not a human achievement; it is a participation in the divine act.",
    ],
  },
];

const videoItems = [
  { videoId: "Eph4WalkWorthy", title: "Walk Worthy of Your Calling - Ephesians 4 Sermon" },
  { videoId: "Eph4UnityBody1", title: "The Seven Unities of the Body - Ephesians 4:1-6 Study" },
  { videoId: "Eph4GiftsChrc", title: "Christ's Gifts to the Church - Apostles, Prophets, Evangelists" },
  { videoId: "Eph4OldNewSlf", title: "Put Off the Old Self, Put On the New - Ephesians 4:17-32" },
];

export default function Ephesians4GuidePage() {
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
            Ephesians 4 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Walk worthy &mdash; the seven unities that bind the body together, Christ&rsquo;s gifts of apostles and prophets and pastors and teachers to equip the saints, growing to the measure of the fullness of Christ, putting off the old self and putting on the new, and the ethics of a community that gives grace to those who hear.
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
              Deepen your study of Ephesians 4 through these video teachings on the worthy walk, the seven unities of the body, the gifts Christ gave the church, and the renewal of the mind that transforms the old self into the new.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Walk Worthy of the Calling</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ephesians 4 holds together the unity of the body, the diversity of gifts, the growth of every member into Christ, and the transformation of the individual conscience &mdash; all flowing from the &ldquo;therefore&rdquo; of chapter 4 verse 1. The one who has been raised with Christ and seated in the heavenly places (ch. 2) is now called to walk on earth in a manner worthy of that exaltation, putting off every trace of the old life and putting on the new self created after the likeness of God.
          </p>
        </div>
      </main>
    </div>
  );
}
