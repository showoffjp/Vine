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
  { videoId: "qN4tKpWmBcX", title: "2 Corinthians 6: Now Is the Day of Salvation Explained" },
  { videoId: "vR2yZdLnGmH", title: "The Paradoxes of Ministry - 2 Corinthians 6:1-10" },
  { videoId: "jT7wGhXpAkF", title: "Do Not Be Unequally Yoked - 2 Corinthians 6:14-18" },
  { videoId: "pM3sNbVtJrE", title: "BibleProject - 2 Corinthians Overview and Reconciliation" },
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
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>2 Corinthians Chapter 6</h1>
          <p style={{ color: TEXT, fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: 14, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, now is the favorable time; behold, now is the day of salvation.&rdquo; (2 Corinthians 6:2)" }} />
          <p style={{ color: MUTED, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 650 }} dangerouslySetInnerHTML={{ __html: "Second Corinthians 6 is one of the most emotionally charged chapters in all of Paul&rsquo;s letters &mdash; a chapter that begins with an urgent appeal not to receive the grace of God in vain, presses upon its readers the staggering nearness of salvation in the present moment, and then unfolds a catalog of suffering and a chain of paradoxes that together define the very shape of authentic gospel ministry. Paul lays his heart open to the Corinthians, declaring that his mouth is open and his heart is wide, and pleads with them to widen their own affections in return. The chapter then turns to a searching call to holiness and separation: do not be unequally yoked with unbelievers, for the church is nothing less than the temple of the living God. Few chapters move so rapidly between tender pastoral pleading, the litany of a cruciform life, and the solemn summons to be a people set apart for the Lord Almighty." }} />
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
              <h2 style={{ fontSize: "1.5rem", color: GOLD, marginBottom: 12 }}>The Place of 2 Corinthians 6</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Second Corinthians 6 stands at the heart of the great section on the ministry of reconciliation that begins in chapter 5. Paul has just declared that God was in Christ reconciling the world to himself and that he has entrusted to his apostles the message and the ministry of reconciliation (5:18-20). He closes chapter 5 with the breathtaking statement that God made Christ, who knew no sin, to be sin for us, so that in him we might become the righteousness of God (5:21). Chapter 6 picks up directly from this: as those who work together with God, Paul appeals to the Corinthians not to receive such an extraordinary grace in vain." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The chapter naturally divides into three movements. The first (vv.1-10) is the urgent appeal grounded in the citation of Isaiah 49:8, followed by Paul&rsquo;s defense and commendation of his own ministry through a remarkable list of sufferings and a sequence of paradoxes. The second (vv.11-13) is an intensely personal plea: Paul&rsquo;s heart is wide open to the Corinthians, and he begs them to open their own hearts to him in return. The third (vv.14-18) is the famous warning against being unequally yoked with unbelievers, supported by a chain of Old Testament quotations and culminating in the promise that God will be a Father to a separated and holy people." }} />
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: ROSE, marginBottom: 12 }}>Now Is the Day of Salvation</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The chapter opens with a note of profound urgency. &ldquo;Working together with him, then, we appeal to you not to receive the grace of God in vain&rdquo; (6:1). To receive grace in vain is to have heard the gospel, even to have professed it, and yet to allow it to come to nothing through unbelief, drift, or unrepentance. Paul then supports his appeal with a quotation from Isaiah 49:8: &ldquo;In a favorable time I listened to you, and in a day of salvation I have helped you.&rdquo; This word, originally spoken to the Servant and to the exiles, Paul applies to the present gospel moment." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Then comes the great pastoral exclamation that gives the chapter its enduring title: &ldquo;Behold, now is the favorable time; behold, now is the day of salvation&rdquo; (6:2). The repeated &ldquo;now&rdquo; and the double &ldquo;behold&rdquo; collapse the prophetic future into the present moment. The day that Isaiah anticipated has arrived; the favorable season is not deferred to some uncertain future but is open and available in the present. This is the language of decisive opportunity &mdash; the kind of time the Greek New Testament elsewhere calls kairos, an appointed and pregnant moment that must be seized while it lasts." }} />
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: PURPLE, marginBottom: 12 }}>A Ministry Beyond Reproach</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Paul is deeply concerned that nothing in his conduct should discredit the message he carries. &ldquo;We put no obstacle in anyone&rsquo;s way, so that no fault may be found with our ministry&rdquo; (6:3). The integrity of the messenger is bound up with the credibility of the gospel itself; a stumbling block placed by careless or compromised conduct can hinder others from receiving the very grace Paul has just urged them not to neglect. This concern for blamelessness is not self-righteousness but a love that refuses to let personal failure obstruct the saving work of God in others." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Paul then commends himself, not by listing credentials or comparing himself favorably with rivals, but by recounting what his ministry has cost him. &ldquo;As servants of God we commend ourselves in every way: by great endurance, in afflictions, hardships, calamities&rdquo; (6:4). The commendation that follows is unlike anything a self-promoting teacher would offer. The marks of true apostleship, in Paul&rsquo;s reckoning, are not power and prestige but endurance through suffering &mdash; a pattern conformed to the cross of the One he proclaims." }} />
            </div>

            {/* Section 4 - Key Verse */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 40 }}>
              <h3 style={{ color: GOLD, marginBottom: 12, fontSize: "1.1rem" }}>Key Verse</h3>
              <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 16, margin: 0 }}>
                <p style={{ color: TEXT, fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Behold, now is the favorable time; behold, now is the day of salvation.&rdquo;" }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", margin: 0 }}>2 Corinthians 6:2 (ESV)</p>
              </blockquote>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: GREEN, marginBottom: 12 }}>The Paradoxes of the Cruciform Life</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The heart of the opening movement is a sequence of stunning paradoxes (vv.8-10) that describe the lived reality of gospel ministry. Paul says he serves &ldquo;through honor and dishonor, through slander and praise. We are treated as impostors, and yet are true; as unknown, and yet well known; as dying, and behold, we live; as punished, and yet not killed; as sorrowful, yet always rejoicing; as poor, yet making many rich; as having nothing, yet possessing everything.&rdquo; Each pairing holds together an apparent contradiction that is resolved only in the light of the cross and resurrection." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "These paradoxes are not rhetorical flourishes; they are the very signature of the cruciform life &mdash; a life patterned after the crucified and risen Christ. The world sees an apostle dying and assumes defeat; Paul says, &ldquo;behold, we live.&rdquo; The world sees poverty and assumes lack; Paul says he is &ldquo;making many rich&rdquo; with the unsearchable riches of Christ. To live this way is to embrace the great reversal of the gospel, in which the way down is the way up, weakness is the venue of power, and death is the doorway to life. This is the same pattern Paul will develop in chapters 11 and 12, where he boasts in his weaknesses so that the power of Christ may rest upon him." }} />
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: "1.5rem", color: TEAL, marginBottom: 12 }}>The Open Heart and the Holy Temple</h2>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Having defended his ministry, Paul drops the formal register and speaks with raw tenderness. &ldquo;We have spoken freely to you, Corinthians; our heart is wide open. You are not restricted by us, but you are restricted in your own affections. In return &mdash; I speak as to children &mdash; widen your hearts also&rdquo; (6:11-13). The restriction in the relationship is not on Paul&rsquo;s side; he holds nothing back. The narrowness is in the Corinthians, whose affections have contracted under the influence of rival teachers and suspicion." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "From this plea Paul moves into the call to holiness (vv.14-18). &ldquo;Do not be unequally yoked with unbelievers,&rdquo; he writes, and then asks a series of rhetorical questions that expose the incompatibility of righteousness with lawlessness, light with darkness, Christ with Belial, and the temple of God with idols. The climax is the declaration: &ldquo;For we are the temple of the living God&rdquo; (6:16). The community indwelt by the Spirit cannot be casually fused with idolatry; it is the dwelling place of God himself, and so it is summoned to come out, to be separate, and to receive the promise of being welcomed as sons and daughters by the Lord Almighty." }} />
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
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Urgency of Now: Kairos and the Day of Salvation</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The double &ldquo;now&rdquo; of verse 2 is the theological heartbeat of the chapter. Paul takes Isaiah&rsquo;s promise of a &ldquo;favorable time&rdquo; and a &ldquo;day of salvation&rdquo; and declares that the awaited season has dawned in Christ. The Greek behind &ldquo;favorable time&rdquo; is closely related to kairos &mdash; not mere chronological time (chronos), but the appointed, decisive moment heavy with opportunity. The gospel does not offer an indefinite, open-ended invitation that can always be deferred; it presses a present claim that demands a present response." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "This urgency is grounded in the structure of redemptive history. The day of salvation is &ldquo;now&rdquo; because the great saving acts of God in Christ &mdash; his death, resurrection, and the outpouring of the Spirit &mdash; have already occurred. We live in the overlap of the ages, after the decisive turn of the cross and before the final consummation. The window is genuinely open; the help promised by Isaiah is genuinely available. But the very word &ldquo;now&rdquo; implies a corresponding warning: a moment that is open now may not remain open indefinitely." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s pastoral aim is not to manipulate through fear but to awaken through love. He does not want the Corinthians to treat the immeasurable gift of reconciliation as something that can be received casually or held loosely. To &ldquo;receive the grace of God in vain&rdquo; is to let the favorable moment pass without the wholehearted response it deserves. The theme of the present and pressing day of salvation runs straight through the New Testament, from John&rsquo;s &ldquo;the hour is coming, and is now here&rdquo; to the writer of Hebrews who quotes the Psalm: &ldquo;Today, if you hear his voice, do not harden your hearts.&rdquo;" }} />
            </div>

            {/* Theme 2 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Integrity of Gospel Ministry</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Paul refuses to put an obstacle in anyone&rsquo;s way so that no fault may be found with the ministry (6:3). This concern threads through the entire chapter and the whole letter. The credibility of the message and the conduct of the messenger are not separable in Paul&rsquo;s thinking. A minister whose life contradicts his words places a stumbling block before those who might otherwise believe; a life that matches the message removes hindrances and commends the gospel by its consistency." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Notice how Paul commends himself: not by power, eloquence, or success, but &ldquo;by purity, knowledge, patience, kindness, the Holy Spirit, genuine love; by truthful speech, and the power of God&rdquo; (6:6-7). These are moral and spiritual qualities, not credentials. The weapons of righteousness Paul wields are &ldquo;for the right hand and for the left&rdquo; &mdash; an image of being fully armed and equipped, ready for both attack and defense, in offense and in patient endurance. The integrity of the minister is itself a form of armor in the spiritual battle." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This theme directly confronts the false apostles who had infiltrated Corinth, peddling the word of God for profit and commending themselves by external impressiveness. Paul&rsquo;s counter-commendation is the long list of his sufferings and the inner graces of the Spirit. He proves the authenticity of his apostleship not by what he has gained but by what he has endured, and not by self-display but by the manifest presence of the Holy Spirit, genuine love, and truthful speech. The minister beyond reproach is the minister whose blamelessness protects the gospel he carries." }} />
            </div>

            {/* Theme 3 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: PURPLE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Cruciform Paradoxes of Authentic Ministry</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The paradoxes of verses 8-10 are the most concentrated expression in the New Testament of what scholars call the cruciform life &mdash; a life shaped like the cross. &ldquo;As dying, and behold, we live; as sorrowful, yet always rejoicing; as poor, yet making many rich; as having nothing, yet possessing everything.&rdquo; Each pairing places the world&rsquo;s assessment alongside the gospel&rsquo;s reality. To outward appearance Paul is a defeated, suffering, impoverished figure; in the light of Christ he is alive, rejoicing, enriching, and possessing all things." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "These are not contradictions to be resolved by choosing one side over the other. They are held together simultaneously. Paul really is sorrowful &mdash; he weeps over the churches, he carries daily anxiety, he grieves over sin &mdash; and at the very same time he is &ldquo;always rejoicing&rdquo; because his joy is anchored in Christ and not in circumstances. He really has nothing the world prizes, and yet he possesses everything because he possesses Christ, in whom are hidden all the treasures of wisdom and knowledge." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The cruciform pattern is the master key to Paul&rsquo;s entire understanding of ministry and discipleship. It is the same logic that runs through 2 Corinthians: power perfected in weakness, treasure in jars of clay, life through death, the dying of Jesus carried in the body so that the life of Jesus may also be manifested. To follow the crucified and risen Lord is to expect that the visible story (suffering, weakness, apparent failure) is not the whole story, and that beneath it runs a deeper current of resurrection life, joy, and inexhaustible riches." }} />
            </div>

            {/* Theme 4 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: GREEN, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Open Heart of the Apostle</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "In verses 11-13 Paul lets the Corinthians see directly into his heart. &ldquo;We have spoken freely to you, Corinthians; our heart is wide open.&rdquo; The Greek images are vivid: his mouth has been opened to them in candor, and his heart has been enlarged toward them in affection. There is no calculation, no holding back, no defensive guarding. The apostle who endures beatings and imprisonments is utterly unguarded toward the very people who have wounded and suspected him." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "The diagnosis Paul offers is gentle but pointed: &ldquo;You are not restricted by us, but you are restricted in your own affections&rdquo; (6:12). The constriction in the relationship is on the Corinthian side. They have allowed their hearts to narrow, perhaps under the influence of those who slandered Paul, perhaps through wounded pride or suspicion. The remedy he asks for is mutual: &ldquo;in return &mdash; I speak as to children &mdash; widen your hearts also&rdquo; (6:13). He addresses them as a father addresses beloved children, longing for restored intimacy." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "This passage models the vulnerability of genuine spiritual leadership and the reciprocal nature of Christian fellowship. Paul does not demand obedience from a distance; he opens himself and invites them to open themselves in return. The pastoral relationship he envisions is not one of mere authority but of mutual affection, in which open hearts answer open hearts. It is precisely because his heart is so wide that the call to holiness which follows is not cold legalism but the appeal of a father who longs for his children to be undivided in their devotion." }} />
            </div>

            {/* Theme 5 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: TEAL, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>Unequally Yoked: Holiness and Separation</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Do not be unequally yoked with unbelievers&rdquo; (6:14) draws on an image from the law of Moses, which forbade plowing with an ox and a donkey together (Deuteronomy 22:10). Two animals of unequal strength and nature cannot pull together without harm and frustration. Paul applies the picture to any binding partnership in which a believer is joined to an unbeliever in a way that compromises wholehearted devotion to Christ. The original concern in Corinth was almost certainly entanglement with pagan idolatry &mdash; the temple feasts, cultic associations, and idolatrous practices woven into the fabric of the city&rsquo;s life." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "Paul presses the incompatibility with five rhetorical questions: &ldquo;For what partnership has righteousness with lawlessness? Or what fellowship has light with darkness? What accord has Christ with Belial? Or what portion does a believer share with an unbeliever? What agreement has the temple of God with idols?&rdquo; Each question exposes an absolute opposition. Light and darkness cannot coexist; the presence of one is the absence of the other. The name &ldquo;Belial&rdquo; here functions as a name for Satan himself &mdash; the embodiment of worthlessness and lawlessness &mdash; and the question makes plain that there can be no concord between Christ and the evil one." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The application across the centuries has reached into many areas: marriage between a believer and an unbeliever, business partnerships that demand compromise, alliances that entangle the conscience, and above all any participation in idolatry. The principle is not isolation from unbelievers &mdash; Paul elsewhere insists Christians must remain in the world &mdash; but the refusal of any binding union that would yoke the believer to lawlessness and erode exclusive loyalty to Christ. The call is to a holiness that keeps the heart undivided and the temple of God undefiled." }} />
            </div>

            {/* Theme 6 */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 4, height: 28, background: ROSE, borderRadius: 2 }} />
                <h2 style={{ fontSize: "1.4rem", color: TEXT, margin: 0 }}>The Temple of the Living God and the Father-Child Promise</h2>
              </div>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "&ldquo;For we are the temple of the living God&rdquo; (6:16) is the theological foundation for the entire call to separation. In the Old Testament the temple was the dwelling place of God among his people; now Paul declares that the church, indwelt by the Spirit, has become that dwelling place. He supports this with a fusion of texts: &ldquo;I will make my dwelling among them and walk among them, and I will be their God, and they shall be my people&rdquo; (drawing on Leviticus 26 and Ezekiel 37). The living God does not dwell in lifeless idols; he dwells in a living, Spirit-filled people." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: "On this basis Paul issues the summons of verse 17, a catena of Old Testament quotations: &ldquo;Therefore go out from their midst, and be separate from them, says the Lord, and touch no unclean thing&rdquo; (drawing on Isaiah 52:11 and Ezekiel 20:34). The call to come out and be separate echoes the exodus and the return from exile &mdash; God&rsquo;s people leaving behind the contamination of idolatrous nations to belong wholly to him. Holiness, in this sense, is not first a list of prohibitions but the positive consequence of belonging to the God who dwells among his people." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The climax is a stunning promise that adapts the words God spoke to David about Solomon: &ldquo;and I will welcome you, and I will be a father to you, and you shall be sons and daughters to me, says the Lord Almighty&rdquo; (6:17-18; cf. 2 Samuel 7:14). What was once a royal covenant promise to the house of David is now extended to the whole people of God, and remarkably it includes &ldquo;sons and daughters&rdquo; alike. The reward of holiness is not merely moral purity but intimate belonging: to be received as the very children of the Lord Almighty, welcomed into the family of God." }} />
            </div>

          </div>
        )}

        {/* TAB 2: VERSE BY VERSE */}
        {activeTab === 2 && (
          <div>

            {/* vv.1-2 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 1-2: The Appeal and the Day of Salvation</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Do Not Receive Grace in Vain</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.1</strong> &mdash; &ldquo;Working together with him, then, we appeal to you not to receive the grace of God in vain.&rdquo; Paul describes himself as a co-worker with God, an astonishing dignity for a suffering apostle. The appeal is not to be saved for the first time but not to let the grace already received come to nothing through neglect, drift, or unrepented sin. The phrase &ldquo;in vain&rdquo; carries the sense of emptiness and fruitlessness &mdash; a grace received but never allowed to bear its proper fruit." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.2</strong> &mdash; Paul cites Isaiah 49:8: &ldquo;In a favorable time I listened to you, and in a day of salvation I have helped you.&rdquo; Then he adds his own urgent commentary: &ldquo;Behold, now is the favorable time; behold, now is the day of salvation.&rdquo; The prophetic promise spoken to the Servant and to exiled Israel is fulfilled in the present gospel age. The doubled &ldquo;behold&rdquo; and &ldquo;now&rdquo; transform a future hope into a present and pressing reality &mdash; the appointed, decisive moment must be seized while it stands open." }} />
            </div>

            {/* vv.3-5 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: ROSE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 3-5: The Catalog of Sufferings</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Commended by Endurance</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.3</strong> &mdash; &ldquo;We put no obstacle in anyone&rsquo;s way, so that no fault may be found with our ministry.&rdquo; Paul is determined that his own conduct will not become a stumbling block. The credibility of the gospel is tied to the blamelessness of the one who proclaims it. Nothing in his behavior is to give the world a pretext to dismiss the message." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.4-5</strong> &mdash; &ldquo;But as servants of God we commend ourselves in every way: by great endurance, in afflictions, hardships, calamities, beatings, imprisonments, riots, labors, sleepless nights, hunger.&rdquo; The list moves from general categories of distress (afflictions, hardships, calamities) to specific hostile sufferings inflicted by others (beatings, imprisonments, riots) to the self-imposed rigors of the work (labors, sleepless nights, hunger). This is Paul&rsquo;s resume of apostleship &mdash; not a record of achievements but a catalog of costly endurance for the sake of the gospel and its hearers." }} />
            </div>

            {/* vv.6-7 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: PURPLE, fontSize: "0.85rem", fontWeight: 700 }}>Verses 6-7: The Graces of the Spirit</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Weapons of Righteousness</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.6</strong> &mdash; Paul turns from external hardships to the inner character of his ministry: &ldquo;by purity, knowledge, patience, kindness, the Holy Spirit, genuine love.&rdquo; These are the moral and spiritual qualities that authenticate his apostleship. The reference to the Holy Spirit at the center reminds the reader that these virtues are not merely Paul&rsquo;s own achievement but the fruit of the Spirit&rsquo;s work in him. Genuine love &mdash; love without hypocrisy &mdash; crowns the list." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.7</strong> &mdash; &ldquo;by truthful speech, and the power of God; with the weapons of righteousness for the right hand and for the left.&rdquo; The image of weapons in both hands suggests a soldier fully armed, ready for both assault and defense, equipped for every contingency of spiritual warfare. Truthful speech and the power of God are the means by which the gospel advances; righteousness itself becomes the armor and the weaponry of the servant of God." }} />
            </div>

            {/* vv.8-10 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GREEN, fontSize: "0.85rem", fontWeight: 700 }}>Verses 8-10: The Great Paradoxes</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>As Dying, and Behold We Live</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.8</strong> &mdash; &ldquo;through honor and dishonor, through slander and praise. We are treated as impostors, and yet are true.&rdquo; Paul ministers regardless of how he is received; whether the world honors or despises him, he presses on. He is slandered as a deceiver and yet is utterly truthful. The opposing verdicts of the world do not alter the reality of who he is in Christ." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.9</strong> &mdash; &ldquo;as unknown, and yet well known; as dying, and behold, we live; as punished, and yet not killed.&rdquo; He is a nobody in the eyes of the world yet known to God and to the churches. He is constantly brought to the edge of death and yet, &ldquo;behold,&rdquo; he lives &mdash; the same emphatic &ldquo;behold&rdquo; that announced the day of salvation now announces resurrection life breaking through apparent death." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.10</strong> &mdash; &ldquo;as sorrowful, yet always rejoicing; as poor, yet making many rich; as having nothing, yet possessing everything.&rdquo; The climactic triad gathers the whole logic of the cruciform life. Real sorrow and constant joy coexist; material poverty accompanies the bestowing of spiritual riches on others; the man who owns nothing the world values possesses all things in Christ. This is the paradox of the gospel lived out in the body of an apostle." }} />
            </div>

            {/* vv.11-13 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: TEAL, fontSize: "0.85rem", fontWeight: 700 }}>Verses 11-13: The Wide-Open Heart</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Widen Your Hearts Also</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.11-12</strong> &mdash; &ldquo;We have spoken freely to you, Corinthians; our heart is wide open. You are not restricted by us, but you are restricted in your own affections.&rdquo; Paul addresses them by name, a mark of intimate appeal. His candor and his enlarged affection are unmistakable; the constriction lies entirely with the Corinthians, whose hearts have narrowed under suspicion and the influence of rival teachers." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.13</strong> &mdash; &ldquo;In return &mdash; I speak as to children &mdash; widen your hearts also.&rdquo; Paul asks for reciprocity, addressing them tenderly as his own children. The whole appeal of the chapter, including the call to holiness that follows, flows from this longing for restored, open-hearted fellowship between a spiritual father and the church he loves." }} />
            </div>

            {/* vv.14-18 */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 16px", display: "inline-block", marginBottom: 16 }}>
                <span style={{ color: GOLD, fontSize: "0.85rem", fontWeight: 700 }}>Verses 14-18: The Temple and the Call to Separation</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", color: TEXT, marginBottom: 12 }}>Come Out and Be Separate</h3>
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.14-15</strong> &mdash; &ldquo;Do not be unequally yoked with unbelievers.&rdquo; Paul presses five rhetorical questions exposing absolute opposites: righteousness and lawlessness, light and darkness, Christ and Belial, believer and unbeliever, the temple of God and idols. &ldquo;Belial&rdquo; is a name for Satan, the worthless and lawless one; there can be no concord between Christ and the evil one. The believer must not enter any binding partnership that compromises exclusive devotion to the Lord." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.16</strong> &mdash; &ldquo;For we are the temple of the living God; as God said, I will make my dwelling among them and walk among them, and I will be their God, and they shall be my people.&rdquo; The church indwelt by the Spirit is the living temple, fused from Leviticus 26 and Ezekiel 37. The living God cannot be housed alongside dead idols; his dwelling place must be holy." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.17</strong> &mdash; &ldquo;Therefore go out from their midst, and be separate from them, says the Lord, and touch no unclean thing; then I will welcome you.&rdquo; The call echoes Isaiah 52:11 and Ezekiel 20:34, the summons to leave the contamination of idolatry as Israel left Babylon. Separation here is not isolation from people but the refusal of defiling alliances, so that the holy temple of God may remain undefiled." }} />
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "<strong style='color:#F2F2F8'>v.18</strong> &mdash; &ldquo;and I will be a father to you, and you shall be sons and daughters to me, says the Lord Almighty.&rdquo; The promise once given to David concerning his royal son (2 Samuel 7:14) is now extended to all God&rsquo;s people, and notably widened to include &ldquo;sons and daughters&rdquo; alike. The reward of holiness is intimate belonging: to be welcomed as the very children of the Lord Almighty." }} />
            </div>

          </div>
        )}

        {/* TAB 3: APPLICATION */}
        {activeTab === 3 && (
          <div>

            {/* Application 1 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GOLD, fontSize: "1.1rem", marginBottom: 12 }}>Seize the Day of Salvation</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "&ldquo;Now is the day of salvation&rdquo; presses against every tendency to defer the most important response of our lives. There is a quiet danger in assuming that we can always repent later, always draw near later, always take grace seriously later. Paul&rsquo;s doubled &ldquo;now&rdquo; refuses that postponement and confronts us with the openness of the present moment." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "The application is not anxiety but readiness. Whatever response God is calling for &mdash; whether first repentance and faith, or a fresh surrender, or the abandonment of a known compromise &mdash; the favorable time is now. To receive the grace of God in vain is to leave it admired but unapplied, professed but unfruitful. The believer who hears this chapter rightly will ask what response to grace has been deferred too long, and will offer it today while the door stands open." }} />
            </div>

            {/* Application 2 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: ROSE, fontSize: "1.1rem", marginBottom: 12 }}>Let Integrity Protect the Gospel</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s refusal to put an obstacle in anyone&rsquo;s way challenges every Christian, not only ministers. Our conduct either commends or contradicts the message we carry. A life inconsistent with the gospel places a stumbling block before those who might otherwise believe, while a life of purity, patience, kindness, and genuine love removes hindrances and adorns the truth." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This is a sobering call to self-examination. Are there inconsistencies in our behavior that give the watching world a reason to dismiss Christ? Paul commends himself not by achievements but by the graces of the Spirit and by costly endurance. The application is to pursue the kind of integrity that makes the gospel believable &mdash; not flawless perfection, but a manifest sincerity that lets the truth of Christ shine without obstruction." }} />
            </div>

            {/* Application 3 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: PURPLE, fontSize: "1.1rem", marginBottom: 12 }}>Embrace the Cruciform Pattern</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "The paradoxes of verses 8-10 reframe how we read our own circumstances. The world&rsquo;s verdict &mdash; that suffering means defeat, poverty means lack, and dying means the end &mdash; is not the final word. In Christ the believer can be sorrowful yet always rejoicing, poor yet making many rich, having nothing yet possessing everything. The visible story is not the whole story." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "This pattern frees us from despair when our discipleship looks like loss. It also guards us from a triumphalism that expects only comfort and success. To follow the crucified and risen Lord is to expect that the way down is often the way up, that weakness is the venue of God&rsquo;s power, and that resurrection life runs beneath every apparent defeat. The application is to hold our circumstances with cruciform hope, trusting the deeper current of life that flows beneath the surface of suffering." }} />
            </div>

            {/* Application 4 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Open Wide Your Heart and Pursue Holiness</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s wide-open heart and his plea for the Corinthians to widen theirs speak to the constrictions that creep into Christian relationships. Suspicion, past hurt, and pride narrow our affections and close us off from one another. The gospel calls us to the costly vulnerability of an open heart, both toward fellow believers and toward those who lead us in the faith." }} />
              <p style={{ color: MUTED, lineHeight: 1.8, marginTop: 12 }} dangerouslySetInnerHTML={{ __html: "From that open heart flows the call to holiness. To be unequally yoked is to bind oneself to lawlessness in a way that divides the heart between Christ and idols. The application is to examine our entanglements &mdash; relationships, partnerships, loyalties, habits &mdash; and ask whether any of them yoke us to what is incompatible with Christ. The promise that answers the call is the most tender in the chapter: come out, be separate, and be welcomed as sons and daughters of the Lord Almighty." }} />
            </div>

            {/* Application 5 */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 28 }}>
              <h3 style={{ color: TEAL, fontSize: "1.1rem", marginBottom: 12 }}>Reflection Questions</h3>
              <ol style={{ color: MUTED, lineHeight: 2, paddingLeft: 20, margin: 0 }}>
                <li dangerouslySetInnerHTML={{ __html: "Paul says &ldquo;now is the day of salvation.&rdquo; Is there a response to God&rsquo;s grace &mdash; repentance, surrender, obedience &mdash; that you have been deferring? What would it mean to offer it today?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Paul refused to put any obstacle in the way of the gospel. Are there inconsistencies in your life that might become a stumbling block to someone considering Christ? How might integrity adorn the message you carry?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Which of the paradoxes in verses 8-10 most resonates with your own experience? How does the cruciform pattern reshape the way you interpret suffering, poverty, or apparent failure?" }} />
                <li dangerouslySetInnerHTML={{ __html: "Paul&rsquo;s heart was wide open even toward those who had wounded him. Whose heart have you closed, or who has closed their heart to you? What would it look like to widen your heart in return?" }} />
                <li dangerouslySetInnerHTML={{ __html: "The call not to be unequally yoked touches relationships, partnerships, and loyalties. Is there any binding alliance in your life that divides your devotion to Christ or compromises your conscience? What does coming out and being separate require of you?" }} />
                <li dangerouslySetInnerHTML={{ __html: "You are the temple of the living God, promised welcome as a son or daughter of the Lord Almighty. How does this identity as God&rsquo;s indwelt and adopted child change the way you think about holiness?" }} />
              </ol>
            </div>

            {/* Application 6 */}
            <div style={{ background: `linear-gradient(135deg, ${GREEN}22 0%, ${TEAL}11 100%)`, border: `1px solid ${GREEN}44`, borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: GREEN, fontSize: "1.1rem", marginBottom: 12 }}>Prayer Focus</h3>
              <p style={{ color: MUTED, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lord, I hear your word that now is the favorable time, now is the day of salvation, and I do not want to receive your grace in vain. Keep me from postponing the response you are calling for today. Make my life consistent with the gospel, so that I place no obstacle before those who are searching for you. Teach me the cruciform way of Paul &mdash; sorrowful yet always rejoicing, having nothing yet possessing everything in Christ &mdash; and let me trust the resurrection life that runs beneath every apparent defeat. Widen my narrow heart toward your people, and give me the courage to come out from every yoke that divides my devotion. You have promised to be a Father to me and to receive me as your child; let that welcome be the joy that makes me holy. Through Jesus Christ my Lord, amen." }} />
            </div>

          </div>
        )}

        {/* VIDEO SECTION - always visible */}
        <div style={{ marginTop: 56, borderTop: `1px solid ${BORDER}`, paddingTop: 40 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 8, color: TEXT }}>Video Teaching</h2>
          <p style={{ color: MUTED, marginBottom: 32, fontSize: "0.95rem" }}>Watch these selected teachings to deepen your understanding of 2 Corinthians 6.</p>
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
