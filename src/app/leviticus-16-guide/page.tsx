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
  "The Two Goats",
  "Entering the Holy of Holies",
  "Fulfilled in Christ",
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
    heading: "Leviticus 16: Overview",
    reference: "Leviticus 16:1&ndash;34",
    paragraphs: [
      "Leviticus 16 stands at the theological heart of the entire Torah. It describes the Day of Atonement &mdash; Yom Kippur &mdash; the most solemn day in the entire Israelite calendar, the one occasion in the year when the high priest could enter the Most Holy Place, the innermost chamber of the tabernacle where God&rsquo;s presence resided above the ark of the covenant. Everything in Israel&rsquo;s sacrificial system pointed toward this day; everything in this day pointed forward to its ultimate fulfillment in the work of Christ. The chapter is simultaneously a ritual description, a theological treatise on the problem of sin in the presence of a holy God, and a shadow whose substance is the cross.",
      "The chapter is framed by a reference to the death of Aaron&rsquo;s two sons, Nadab and Abihu, who had died when they offered unauthorized fire before the Lord (Lev 10). This is not incidental. Their deaths establish the stakes: the holy God cannot be approached casually or carelessly. The presence that dwells between the cherubim is real, and the gap between divine holiness and human sinfulness is not bridged by good intentions or religious enthusiasm. It requires the exact provision God has prescribed. Aaron is therefore warned: he may not enter the inner sanctuary whenever he wishes, but only in the manner God specifies, or he will die (v.2).",
      "The ritual of the Day of Atonement is the most elaborate prescribed in all of Scripture. It involves the high priest alone, special linen garments, a bull for his own sin, two goats for the people&rsquo;s sin (one sacrificed and one sent away as the scapegoat), incense to fill the Holy of Holies with a cloud covering the mercy seat, the sprinkling of blood on and before the mercy seat seven times for the high priest&rsquo;s own sin and then for the sins of all Israel, the laying of hands on the live goat and the confession of all Israel&rsquo;s iniquities, the sending of the scapegoat into the wilderness, and a series of ceremonial washings to conclude. The whole prescribed ritual is described as a &ldquo;statute forever&rdquo; (v.29, v.31, v.34).",
      "The theological architecture of the chapter presents a dual solution to Israel&rsquo;s sin problem. The first goat addresses the problem of guilt: blood is shed, atonement is made, the record of sin before God is dealt with at the sanctuary. The second goat addresses the problem of the sin itself: it is symbolically loaded onto the scapegoat and removed from the camp, sent to a remote and uninhabited place. Together the two goats depict what atonement accomplishes &mdash; not merely accounting for sin but removing it. The author of the Letter to the Hebrews spends more time on Leviticus 16 than on almost any other Old Testament text, using it as the primary framework for explaining the significance of Christ&rsquo;s once-for-all sacrifice (Heb 9&ndash;10).",
      "The Day of Atonement was to be observed on the tenth day of the seventh month, a day of fasting (&ldquo;afflicting yourselves,&rdquo; v.29) and complete rest &mdash; a Sabbath of solemn rest even for the alien dwelling among Israel. No work was to be done. It was a day of national mourning for sin, corporate dependence on God&rsquo;s provision, and trust that the elaborate ritual prescribed by God would indeed accomplish what he promised. It is, in this sense, a picture of what the Christian posture before God must always be: not work but rest, not human achievement but trust in the sacrifice God has provided.",
    ],
  },
  {
    id: "The Two Goats",
    heading: "The Two Goats: Sacrifice and Scapegoat",
    reference: "Leviticus 16:5&ndash;10, 15&ndash;22",
    paragraphs: [
      "The central ritual objects of the Day of Atonement are two goats, selected from the congregation of Israel and brought to the entrance of the tent of meeting. The two goats are identical in appearance but will serve radically different functions. Aaron casts lots over them: one lot falls for the LORD and one for Azazel (v.8). The word &ldquo;Azazel&rdquo; has generated enormous scholarly debate. The most likely reading is that it designates a remote, desolate place &mdash; the word appearing to mean something like &ldquo;the goat that departs&rdquo; or, in some ancient traditions, a name for the wilderness itself. The translation &ldquo;scapegoat&rdquo; &mdash; from Tyndale&rsquo;s rendering &mdash; has entered the English language as a word for someone who bears the blame for others. Whatever the precise etymology, the function in the text is unmistakable: one goat for sacrifice, one goat for removal.",
      "The goat whose lot fell for the LORD is killed as a sin offering for the people. Its blood is brought by Aaron behind the veil into the Most Holy Place &mdash; the innermost sanctum that housed the ark of the covenant and the mercy seat, the golden cover between the two cherubim. This is the holiest act in the entire annual liturgy. Aaron sprinkles the blood with his finger on the front of the mercy seat, then seven times before the mercy seat (v.14). The blood makes atonement for the Holy Place itself, for the tent of meeting, for the altar, and for all the people of Israel &mdash; the entire sacred complex is cleansed of the impurities and transgressions of the people that have accumulated over the year (vv.15&ndash;19).",
      "The choice of seven sprinklings is not accidental. Seven in Hebrew thought signifies completeness and wholeness. The seven-fold sprinkling declares that the atonement is complete, thorough, covering all sin and all impurity without remainder. It also signifies God&rsquo;s own ordained number &mdash; the act is divinely sufficient because divinely prescribed. Nothing is left over; no sin remains unaddressed by the blood. This is the logic that Hebrews will deploy to argue for the completeness of Christ&rsquo;s one-time sacrifice: not because his blood was sprinkled seven times, but because the one who made the offering was himself without sin and infinitely worthy.",
      "When the atonement for the sanctuary and the people is completed, Aaron turns to the live goat. He lays both his hands upon its head &mdash; the gesture of identification and transference used throughout the Levitical ritual system to represent the transfer of sin to the animal &mdash; and confesses over it &ldquo;all the iniquities of the people of Israel, and all their transgressions, all their sins&rdquo; (v.21). The comprehensive language is striking: all iniquities, all transgressions, all sins. Nothing is excluded. The goat receives the full weight of the nation&rsquo;s accumulated guilt.",
      "A designated man then leads the goat out into the wilderness &mdash; to &ldquo;a remote area&rdquo; (v.22), a place cut off from the community of Israel. The goat shall bear all the iniquities on itself to a land that is cut off, and the man shall release the goat in the wilderness. The picture is graphic and powerful: the sins of the people are not merely covered or paid for &mdash; they are removed. They leave. They go somewhere else. The spatial language of the text performs the spiritual reality: the burden of guilt that had accumulated over a year in the camp of Israel is now physically absent from the camp, carried away by an animal to a place from which it will not return.",
      "Together, the two goats present a complete picture of what atonement requires. The first goat demonstrates that sin demands a life &mdash; blood must be shed, the cost of transgression against a holy God is death. The second goat demonstrates that sin must be removed from the community, not merely balanced in some divine ledger. The Apostle Paul will speak in Colossians 2:14 of God &ldquo;canceling the record of debt that stood against us with its legal demands&rdquo; and &ldquo;setting it aside, nailing it to the cross.&rdquo; The imagery draws on exactly this dual action: both the penalty paid and the record removed.",
    ],
  },
  {
    id: "Entering the Holy of Holies",
    heading: "Entering the Holy of Holies: Preparation and Access",
    reference: "Leviticus 16:2&ndash;4, 11&ndash;14, 23&ndash;34",
    paragraphs: [
      "The most theologically charged element of the Day of Atonement ritual is the entry of the high priest into the Most Holy Place. In the architecture of the tabernacle and later the temple, the Most Holy Place was the innermost room, separated from the outer Holy Place by a heavy curtain or veil. Within it stood the ark of the covenant, surmounted by the mercy seat with its two golden cherubim. This was the location of the divine presence &mdash; what later tradition would call the Shekinah &mdash; the place where heaven and earth met in the most concentrated form available within Israel&rsquo;s covenant life. No ordinary Israelite could enter; no ordinary priest could enter; only the high priest could enter, and only once per year, on this one day.",
      "The preparation required of Aaron before entry is elaborate and deliberate. He must bathe his body in water and put on the special linen garments prescribed for this day: a linen tunic, linen undergarments, a linen sash, and a linen turban (v.4). This is not his usual high-priestly attire &mdash; on ordinary occasions he wore the ornate garments described in Exodus 28, including the breastpiece with the twelve gems representing the twelve tribes, the ephod, and the golden crown inscribed &ldquo;Holy to the Lord.&rdquo; On the Day of Atonement he sets those garments aside and dresses in plain white linen. The contrast is significant. The glory of the high priestly office is laid aside; he enters not as a man distinguished by his office but stripped down to simple white &mdash; a posture of humility, purity, and human frailty before the holy God.",
      "Before he can bring the blood of the people&rsquo;s sin offering into the Most Holy Place, Aaron must first offer the bull for his own sin (v.11). He slaughters the bull and presents its blood, but before entering the Most Holy Place he must take a censer full of burning coals from the altar and two handfuls of finely ground sweet incense and bring them behind the veil. He is to put the incense on the fire before the LORD so that the cloud of incense covers the mercy seat, &ldquo;or he will die&rdquo; (v.13). The cloud of incense serves as a protective screen between the high priest and the direct vision of God&rsquo;s glory. The mercy seat could not be seen directly by any mortal; even the high priest required an intervening cloud.",
      "This layer of protection &mdash; incense before blood, blood before access &mdash; underscores a fundamental biblical truth: sinful human beings cannot approach the holy God on their own terms. Access requires a mediator, and the mediator himself requires cleansing. Aaron must first deal with his own sin before he can deal with the people&rsquo;s sin. The high priest who enters the Most Holy Place on behalf of Israel is not himself sinless; he must bring a bull for his own atonement. This is precisely the contrast the author of Hebrews will draw with Jesus: &ldquo;He has no need, like those high priests, to offer sacrifices daily, first for his own sins and then for those of the people, since he did this once for all when he offered up himself&rdquo; (Heb 7:27).",
      "After the completion of the rites inside the Most Holy Place and the sending of the scapegoat, Aaron reenters the tent of meeting, removes the linen garments, bathes again, and puts on his regular priestly garments to offer the burnt offerings (vv.23&ndash;24). The man who led the scapegoat into the wilderness must also wash his clothes and bathe before returning to the camp (v.26). These washings signal the completion of the liminal moment &mdash; the crossing of the boundary between the ordinary and the holy, between the sinful and the sacred. The rituals of washing mark the return to ordinary life, but that life is now purified, atonement having been made for all Israel.",
      "The chapter concludes with the prescription that this is to be &ldquo;a statute forever&rdquo; &mdash; repeated three times (vv.29, 31, 34) for emphasis. The Day of Atonement is not a one-time emergency measure but a permanent institution in Israel&rsquo;s covenant life. Once a year, every year, atonement must be made for the nation&rsquo;s sin. The repetition itself is a built-in limitation: the sacrifices of the Day of Atonement work, but they must be repeated, which means they do not deal with sin once and for all. They are effective as a type, as a shadow, as a divinely ordained instrument of grace within the old covenant &mdash; but their very repetition is a sign that the final solution has not yet arrived.",
    ],
  },
  {
    id: "Fulfilled in Christ",
    heading: "Fulfilled in Christ: The Once-for-All Sacrifice",
    reference: "Hebrews 9&ndash;10; Isaiah 53; John 19",
    paragraphs: [
      "The Letter to the Hebrews is the primary New Testament guide to Leviticus 16, and it reads the Day of Atonement ritual with breathtaking theological precision. The argument unfolds across chapters 9 and 10, using the structures and logic of the Yom Kippur ritual as the framework for explaining what Jesus accomplished on the cross. The central contrast is between repetition and finality: the old covenant high priest entered the Most Holy Place year after year with blood not his own; Christ &ldquo;entered once for all into the holy places, not by means of the blood of goats and calves but by means of his own blood, thus securing an eternal redemption&rdquo; (Heb 9:12).",
      "The argument moves on several tracks simultaneously. First, the inadequacy of the old sacrifices. The very fact that they had to be repeated year after year is itself evidence that they could not make the worshiper perfect with regard to conscience (Heb 10:1&ndash;4). If the blood of bulls and goats had finally dealt with sin, the offerings would have ceased. Their continuation is a confession of their incompleteness. They were shadows of the good things to come, not the true form of those realities (Heb 10:1). They accomplished real forgiveness and real atonement within the terms of the old covenant, but they did so by pointing forward to the one in whom atonement would finally and fully be accomplished.",
      "Second, the identity of the high priest. Aaron was a sinful man who needed to atone for his own sins before he could atone for the people&rsquo;s. Jesus is &ldquo;holy, innocent, unstained, separated from sinners, and exalted above the heavens&rdquo; (Heb 7:26). He did not need to offer sacrifice for his own sin; he had none. His sacrifice was therefore entirely for others. This qualitative difference between the Levitical priest and the eternal high priest transforms the meaning of the atonement: where Aaron brought the blood of an animal as a substitute for his own life, Jesus brought his own blood &mdash; the life of the Son of God &mdash; as the one sacrifice that is genuinely and fully substitutionary.",
      "Third, the location of the sacrifice. Aaron entered a tabernacle &ldquo;made with hands,&rdquo; a earthly copy of the heavenly sanctuary (Heb 9:24). Jesus entered not the earthly Holy of Holies but heaven itself, &ldquo;now to appear in the presence of God on our behalf&rdquo; (Heb 9:24). The cross was not just the culmination of an earthly ritual but an event whose significance pierces through to the heavenly dimension &mdash; to the actual throne room of God where the eternal realities reside. The veil of the temple was torn from top to bottom at the moment of Jesus&rsquo; death (Matt 27:51), a visible sign that the barrier between God and humanity had been removed at its root.",
      "Isaiah 53 illuminates the scapegoat dimension of Leviticus 16 with particular clarity. The Servant of the Lord &ldquo;has borne our griefs and carried our sorrows&rdquo; (v.4); &ldquo;the Lord has laid on him the iniquity of us all&rdquo; (v.6); &ldquo;he was wounded for our transgressions; he was crushed for our iniquities&rdquo; (v.5). This is the scapegoat imagery applied to a person &mdash; one who takes upon himself the accumulated burden of the community&rsquo;s sin and removes it. But unlike the goat that was driven into the wilderness to wander and die, Jesus went to the cross bearing the sin of the world and then rose from the dead, his resurrection vindicating the sufficiency of his sacrifice and declaring that sin and death have been definitively defeated.",
      "The practical application of Hebrews&rsquo; argument about Leviticus 16 is stated explicitly in Hebrews 10:19&ndash;22: &ldquo;Therefore, brothers, since we have confidence to enter the holy places by the blood of Jesus, by the new and living way that he opened for us through the curtain, that is, through his flesh, and since we have a great high priest over the house of God, let us draw near with a true heart in full assurance of faith.&rdquo; The Day of Atonement prescribed annual access by one man through elaborate ritual. The death of Christ opens permanent, confident access by every believer through faith. The &ldquo;statute forever&rdquo; of Yom Kippur has given way to a once-for-all atonement that makes believers themselves a royal priesthood (1 Pet 2:9), able to draw near to God with full assurance &mdash; not because of what they bring, but because of the blood the eternal High Priest has already shed.",
    ],
  },
];

const videoItems = [
  { videoId: "AKGrWQHOC7c", title: "BibleProject - Leviticus Overview" },
  { videoId: "WOJBOzTi4bY", title: "The Day of Atonement - Yom Kippur Explained" },
  { videoId: "9sXVLT1-MXI", title: "The Scapegoat and the Sacrifice - Leviticus 16" },
  { videoId: "PQGe5lsB1xs", title: "How Leviticus Points to Jesus - Hebrews 9-10" },
];

export default function Leviticus16GuidePage() {
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
            Leviticus 16: The Day of Atonement
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The most solemn day in Israel&rsquo;s calendar &mdash; the high priest entering the Most Holy Place alone, the two goats bearing the nation&rsquo;s sin, and the once-for-all sacrifice of Christ that renders every prior Yom Kippur both real and radically incomplete.
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
              Explore the Day of Atonement in Leviticus 16 &mdash; the two goats, the entry into the Most Holy Place, and the complete fulfillment of Yom Kippur in the sacrifice of Jesus Christ &mdash; through these teaching videos.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Once for All</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The Day of Atonement was Israel&rsquo;s holiest day, a &ldquo;statute forever&rdquo; in which the nation came before God not on the basis of its own merit but on the basis of the blood of the sacrifice God had prescribed. Its very annual repetition confessed both its necessity and its incompleteness. Jesus entered not an earthly Most Holy Place but heaven itself, not with the blood of goats but with his own blood, securing not a year&rsquo;s reprieve but an eternal redemption. The veil is torn. The way is open. Those who trust in Christ draw near to God with full assurance &mdash; not because they bring something worthy, but because the once-for-all High Priest has gone before them and his blood speaks mercy without end.
          </p>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Key New Testament Connections</h3>
          <ul style={{ color: MUTED, lineHeight: 2, margin: 0, paddingLeft: "1.5rem" }}>
            <li><strong style={{ color: TEXT }}>Hebrews 9:1&ndash;15</strong> &mdash; Christ entered the greater and more perfect tabernacle not made with hands, securing eternal redemption by his own blood rather than that of goats and calves.</li>
            <li><strong style={{ color: TEXT }}>Hebrews 9:24&ndash;28</strong> &mdash; Christ appeared once for all at the end of the ages to put away sin by the sacrifice of himself; he will appear a second time not to deal with sin but to save those eagerly waiting for him.</li>
            <li><strong style={{ color: TEXT }}>Hebrews 10:1&ndash;14</strong> &mdash; The law has only a shadow of the good things to come; the repeated annual sacrifices could not make the worshiper perfect, but by a single offering Christ has perfected for all time those who are being sanctified.</li>
            <li><strong style={{ color: TEXT }}>Isaiah 53:4&ndash;6</strong> &mdash; The Servant of the Lord bears our griefs, carries our sorrows, is wounded for our transgressions &mdash; the scapegoat typology applied to the Messiah.</li>
            <li><strong style={{ color: TEXT }}>Matthew 27:51</strong> &mdash; At the moment of Jesus&rsquo; death the curtain of the temple was torn in two from top to bottom &mdash; the veil of the Most Holy Place removed, the way to God opened for all.</li>
            <li><strong style={{ color: TEXT }}>Hebrews 10:19&ndash;22</strong> &mdash; We have confidence to enter the holy places by the blood of Jesus, through the new and living way he opened; therefore draw near with full assurance of faith.</li>
          </ul>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>The Structure of the Day of Atonement Ritual</h3>
          <ol style={{ color: MUTED, lineHeight: 2.1, margin: 0, paddingLeft: "1.5rem" }}>
            <li>Aaron bathes and puts on plain white linen garments (v.4) &mdash; not the ornate priestly robe but humble white.</li>
            <li>A bull is brought as a sin offering for Aaron himself and his household (v.6, 11).</li>
            <li>Two goats are brought for the congregation; lots are cast over them to determine which is for the LORD and which for the scapegoat (vv.7&ndash;10).</li>
            <li>Aaron slaughters the bull and takes a censer of burning coals and sweet incense behind the veil; the incense cloud covers the mercy seat (vv.12&ndash;13).</li>
            <li>Aaron sprinkles the bull&rsquo;s blood on the mercy seat once and before it seven times (v.14).</li>
            <li>The goat for the LORD is killed; its blood is brought behind the veil and sprinkled similarly (v.15).</li>
            <li>Blood is applied to the altar to make atonement for the sanctuary (vv.18&ndash;19).</li>
            <li>Aaron lays both hands on the live goat, confesses all Israel&rsquo;s sins over it, and sends it into the wilderness (vv.20&ndash;22).</li>
            <li>Aaron reenters, removes the linen garments, bathes, puts on regular priestly garments, and offers burnt offerings (vv.23&ndash;24).</li>
            <li>The appointed man who led the scapegoat out washes and returns to camp (v.26); the remains of the bull and goat are burned outside the camp (v.27&ndash;28).</li>
          </ol>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Study Questions for Reflection</h3>
          <ol style={{ color: MUTED, lineHeight: 2, margin: 0, paddingLeft: "1.5rem" }}>
            <li>The high priest had to offer a sacrifice for his own sins before he could represent the people. What does this reveal about the qualifications required to mediate between God and humanity, and how does Christ meet those qualifications in a way Aaron never could?</li>
            <li>The two goats together portray two aspects of what atonement accomplishes: the penalty paid (first goat) and the sin removed (scapegoat). How does this dual picture help you understand what Jesus accomplished on the cross? Which aspect do you think about more often?</li>
            <li>The Day of Atonement was a day of fasting and complete rest &mdash; no work permitted. What does it mean for us, as Christians, to &ldquo;rest&rdquo; in the atonement Christ has made rather than trying to earn our standing before God?</li>
            <li>Hebrews says the annual repetition of the Day of Atonement was itself evidence that the sacrifices could not make the worshiper perfect. What are the &ldquo;sacrifices&rdquo; you find yourself returning to repeatedly in your own life &mdash; performances, religious rituals, moral efforts &mdash; that may be shadows rather than the substance?</li>
            <li>The veil was torn at the moment of Jesus&rsquo; death. What does it mean practically that you now have direct, confident access to God through Christ? How should this change the way you pray, worship, and understand your standing before God?</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
