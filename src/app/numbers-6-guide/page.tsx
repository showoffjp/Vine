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
  "Overview",
  "The Priestly Blessing",
  "The Lord Bless You",
  "His Face Shine on You",
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
    heading: "Overview of Numbers 6",
    reference: "Numbers 6:1&ndash;27",
    paragraphs: [
      "Numbers 6 contains two of the most significant passages in the Pentateuch. The chapter opens with the law of the Nazirite vow &mdash; the voluntary consecration by which an Israelite man or woman could set themselves apart to the Lord for a defined period. But it closes with what may be the most beautiful and most ancient liturgical text in the entire Bible: the Aaronic Blessing of verses 24&ndash;26, the priestly benediction that God himself composed and commanded Aaron and his sons to pronounce over the people of Israel.",
      "The Aaronic Blessing &mdash; &ldquo;The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace&rdquo; &mdash; is one of three precisely parallel couplets, each naming the Lord and each announcing a dimension of divine favor. Its language is so lapidary and so complete that it has been used in Jewish and Christian worship without interruption for more than three thousand years. A silver amulet discovered in Jerusalem in 1979, dating to around 600 BC and bearing this very text, stands as the oldest known artifact containing biblical scripture.",
      "The chapter&rsquo;s two main sections are not as unrelated as they might appear. Both concern the theme of consecration and blessing: the Nazirite section deals with how an individual sets themselves apart for God; the blessing section deals with how God sets himself toward his people. The Nazirite vow moves from the human side upward to God; the Aaronic Blessing moves from God downward to the human. Together they frame the bilateral nature of covenant life: human consecration and divine benediction belong together.",
      "The historical and liturgical context of the Aaronic Blessing matters for its interpretation. Numbers 6 falls within the larger section of Numbers (chapters 1&ndash;10) that covers the preparation of Israel in the wilderness of Sinai before the march to the Promised Land. The census has been taken, the tribes arranged around the tabernacle, the Levites appointed for their service. Now, as the final preparation is made, God gives Israel the blessing that will accompany them on the journey. It is the word of divine favor spoken before the march begins.",
      "The structure of the three-line blessing is one of the most studied poetic forms in biblical Hebrew. Each line expands upon the previous: the first contains three Hebrew words, the second five, and the third seven &mdash; a building crescendo of divine grace. Each line consists of a divine action and its result, and each explicitly names &ldquo;the Lord&rdquo; as the subject. The name of the Lord appears three times, which in subsequent Christian interpretation has naturally been read as a hint of the Trinitarian nature of the one God whose name rests on his people.",
      "The chapter concludes with a verse that is easy to overlook but is theologically decisive: &ldquo;So they shall put my name on the people of Israel, and I will bless them&rdquo; (v. 27). The priests are not the source of the blessing; they are the bearers of it. The blessing is God&rsquo;s own words placed in Aaron&rsquo;s mouth, and when Aaron speaks them, God himself acts. The human declaration of the blessing and the divine act of blessing are not two separate things but one: God blesses through the spoken word of his appointed servant. The priestly blessing is nothing less than an act of God.",
    ],
  },
  {
    id: "The Priestly Blessing",
    heading: "The Priestly Blessing",
    reference: "Numbers 6:22&ndash;27",
    paragraphs: [
      "The Aaronic Blessing is introduced with a precision that underscores its divine origin. &ldquo;The Lord spoke to Moses, saying, &lsquo;Speak to Aaron and his sons, saying, Thus you shall bless the people of Israel: you shall say to them&rsquo;&rdquo; (vv. 22&ndash;23). This is not a formula that Israel devised or that Moses composed; it is a text that God dictated word for word. The priests are commanded not to improvise or personalize the blessing but to say these words &mdash; precisely these words &mdash; to the congregation. The blessing belongs to God; the priests are only its channel.",
      "The Levitical priesthood had a unique mediatorial role in ancient Israel. As the tribe set apart for the service of the tabernacle, the Levites stood between the holy God and the people he had called to himself &mdash; managing the rituals of approach and atonement that made ongoing covenant relationship possible despite Israel&rsquo;s sin and uncleanness. The Aaronic Blessing is the culminating act of that mediation: having performed the sacrifices and rites that maintain the covenant, the priests turn toward the congregation and speak God&rsquo;s own words of favor over them.",
      "In the practice of Second Temple Judaism, the priestly blessing was pronounced in the Jerusalem Temple every morning after the daily burnt offering. The priests would mount the steps, lift their hands in the gesture of blessing, and recite the three verses of Numbers 6:24&ndash;26. In synagogues outside Jerusalem, where the Levitical rite could not be performed, the blessing was recited by the prayer leader instead, with the congregation responding &ldquo;Amen&rdquo; to each of the three lines. In many synagogues to this day, kohanim (those who trace their descent to the priestly families) perform the Duchaning &mdash; the priestly blessing &mdash; on festival days, covering the congregation with their prayer shawls and holding their hands in the distinctive spread-finger gesture.",
      "The blessing was pronounced upon the whole congregation of Israel, not upon selected individuals. This is significant: the grace of God announced in the Aaronic Blessing is communal as well as personal. The Lord blesses &ldquo;you&rdquo; in the second-person singular &mdash; each individual member of the gathered assembly &mdash; but the &ldquo;you&rdquo; who hears the blessing is always the &ldquo;you&rdquo; who stands within the covenant community. The blessing is received personally but not privately. It comes to the individual through membership in the people of God.",
      "Christian liturgical tradition has used the Aaronic Blessing almost as universally as Jewish tradition has. It appears in the Dead Sea Scrolls, in early Christian worship manuals like the Didache, and in the liturgies of every major branch of the church. Many Protestant services conclude with the minister speaking these words &mdash; either as a recitation of Numbers 6:24&ndash;26 or in a Trinitarian adaptation &mdash; as the final word of God to the congregation before they depart. The practice carries its full weight when it is understood not as a pleasant closing formula but as the priestly act it is: God himself, speaking through his servant, naming his own blessing upon his people.",
      "In the New Testament, Jesus himself acts as the great High Priest who blesses his people. Luke 24:50&ndash;51 records that &ldquo;he led them out as far as Bethany, and lifting up his hands he blessed them. While he blessed them, he parted from them and was carried up into heaven.&rdquo; The gesture of the raised hands is precisely the priestly blessing gesture. Jesus, the mediator of the new covenant, performs the Aaronic act even at the moment of his ascension. The book of Hebrews develops this further: Christ the High Priest always lives to intercede for his people, the ongoing benediction that never ceases.",
    ],
  },
  {
    id: "The Lord Bless You",
    heading: "The Lord Bless You and Keep You",
    reference: "Numbers 6:24",
    paragraphs: [
      "The first line of the Aaronic Blessing is the most familiar: &ldquo;The Lord bless you and keep you.&rdquo; In three Hebrew words (&lsquo;yevarekh&rsquo;kha Adonai veyishmerekha&rsquo;) it encompasses two of the most fundamental divine gifts: prosperity and protection. The word translated &ldquo;bless&rdquo; (&lsquo;barak&rsquo;) carries a field of meaning that includes fruitfulness, increase, material and spiritual flourishing, and the enhancement of life in every dimension. To bless is to multiply, to cause to thrive, to release the full potential of a person or a community under the favor of God.",
      "The biblical understanding of blessing is thick and material as well as spiritual. In the ancient world, blessing meant children, flocks, harvests, rain, health, and long life. It was not an otherworldly concept. God&rsquo;s blessing was experienced in the very texture of physical life: in the child born after years of barrenness, in the harvest that exceeded expectation, in the body healed from illness, in the family that remained intact and at peace. The New Testament does not evacuate blessing of its material dimension but widens it: Paul&rsquo;s &ldquo;every spiritual blessing in the heavenly places&rdquo; (Ephesians 1:3) points to the eschatological fullness toward which all earthly blessing is a pointer.",
      "The second element &mdash; &ldquo;keep you&rdquo; (&lsquo;shamar&rsquo;) &mdash; is the word used throughout the Old Testament for guarding, watching over, protecting from harm. It is the word used when God says he will &ldquo;keep&rdquo; his covenant (Deuteronomy 7:9), when the psalmist declares that the Lord is &ldquo;your keeper&rdquo; who will not let your foot be moved and who &ldquo;will keep your going out and your coming in from this time forth and forevermore&rdquo; (Psalm 121:3, 8). The Lord&rsquo;s keeping is not passive or negligent; it is the active, watchful, tireless preservation of those he loves from the dangers that threaten them.",
      "The pairing of blessing and keeping in the first line suggests that divine blessing is not unguarded abundance but providentially protected flourishing. God does not simply pour out good gifts and walk away; he watches over what he has given. The same God who opens his hand to satisfy the desire of every living thing (Psalm 145:16) also guards the way of the righteous and shields his people from the enemy. This combination of generosity and vigilance is what makes God&rsquo;s blessing different from mere good fortune: it comes with the Blesser himself, present and attentive, committed to the good of those he blesses.",
      "The promise of keeping has particular comfort in seasons of threat and danger. Israel, about to march through the wilderness toward a land occupied by hostile nations, needed precisely this assurance: the Lord who blessed them would not abandon them once the march began. The Aaronic Blessing was not spoken at the journey&rsquo;s end but at its beginning. It is a word for the road, a benediction for people who do not yet know what the future holds. In every difficult journey that God&rsquo;s people undertake, the first line of the Aaronic Blessing goes with them: the Lord will bless the road and guard the traveler.",
      "In the New Testament, the keeping of God is connected explicitly to the work of Christ and the Spirit. Jesus prays in John 17:11, &ldquo;Holy Father, keep them in your name,&rdquo; asking the Father to exercise precisely the shmar-keeping of the Aaronic Blessing over his disciples. Jude closes his letter with the doxology, &ldquo;Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy&rdquo; (v. 24). God&rsquo;s keeping is not merely the preservation of physical life but the safeguarding of faith, the protection of the soul, the guarantee that those who belong to him will arrive safely at the fullness of blessing he has promised.",
    ],
  },
  {
    id: "His Face Shine on You",
    heading: "His Face Shine on You and Give You Peace",
    reference: "Numbers 6:25&ndash;26",
    paragraphs: [
      "The second line of the Aaronic Blessing moves from the language of blessing and keeping to the language of the divine face: &ldquo;The Lord make his face shine on you and be gracious to you.&rdquo; The image of God&rsquo;s face shining is drawn from the ancient Near Eastern world where the radiant face of a king &mdash; the light that emanated from royal favor &mdash; was a metaphor for the benevolent attention of the great one toward the suppliant. In biblical usage it refers to the manifest presence of God turned in favor toward his people, as opposed to the face of God hidden or turned away in judgment.",
      "The &ldquo;shining face&rdquo; metaphor connects to the Exodus narrative in a profound way. At Sinai, Moses ascended the mountain to meet with God and came down with his own face shining &mdash; a reflection of the divine glory he had encountered (Exodus 34:29&ndash;35). The glory that rested on Moses&rsquo;s face was derivative; it was the radiance of proximity to God. The Aaronic Blessing asks for something even greater: not that the people might reflect God&rsquo;s light but that God himself might turn the light of his presence directly upon them. In Christ, Paul says, this is precisely what has happened: &ldquo;God has shone in our hearts to give the light of the knowledge of the glory of God in the face of Jesus Christ&rdquo; (2 Corinthians 4:6).",
      "The word translated &ldquo;gracious&rdquo; (&lsquo;hanun&rsquo;) belongs to the same family as the Hebrew word &lsquo;hesed&rsquo; &mdash; that untranslatable covenant-love, steadfast-love, loyal-kindness that is one of the defining attributes of Israel&rsquo;s God. When God is described as &ldquo;gracious and merciful&rdquo; throughout the Old Testament (Exodus 34:6, Nehemiah 9:31, Psalm 145:8, Joel 2:13), the same word appears. God&rsquo;s graciousness is not a mood or a passing sentiment; it is the consistent outflow of his own loyal character. When the blessing asks that God be gracious, it is asking that God act according to his most essential nature toward the people who bear his name.",
      "The third line of the blessing climbs to its culmination: &ldquo;The Lord turn his face toward you and give you peace.&rdquo; The phrase &ldquo;turn his face toward you&rdquo; (&lsquo;yissa Adonai panav elekha&rsquo;) literally means &ldquo;lift up his face to you&rdquo; &mdash; the posture of one who gives full, undivided attention, looking the other directly in the face. It is the opposite of the turned-away face that in Hebrew means anger, rejection, or absence. For God to lift up his face to a person is for that person to experience the full weight of divine presence and approval without barrier, without mediation, without the veil that sin ordinarily draws between the holy God and the creature.",
      "The gift that accompanies this full divine attention is shalom &mdash; peace. Shalom is the Hebrew word most inadequately rendered as &ldquo;peace&rdquo; in English, because the English word suggests primarily the absence of conflict while shalom refers to positive wholeness, completeness, flourishing, and right-ordered harmony in every dimension of life. Shalom is the state in which a person, a family, a community, and a creation are what they were made to be, functioning as God intended, lacking nothing that belongs to abundant life. It is the gift of the God who is himself the source of all that is good.",
      "The Aaronic Blessing thus traces an arc from provision (bless and keep) through presence (face shining, grace) to comprehensive wholeness (shalom). It does not offer a partial benefit or a single dimension of divine favor; it offers God himself &mdash; his active goodness, his turned face, his own inner life of peace &mdash; poured out upon his people. In the New Testament, Jesus declares, &ldquo;Peace I leave with you; my peace I give to you. Not as the world gives do I give to you&rdquo; (John 14:27). The shalom of the Aaronic Blessing is nothing less than the peace of Christ himself, the Mediator who brings God&rsquo;s face out from behind the veil and lets it shine upon all who come to him.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Living Under the Blessing",
    reference: "Numbers 6 for Today",
    paragraphs: [
      "The Aaronic Blessing is not a relic of a religious system that has been superseded. It is the living word of the living God, still addressed in the second-person singular to every person who belongs to the covenant people. When the blessing is pronounced in Christian worship &mdash; whether in its biblical form or in the Trinitarian paraphrase &mdash; God is speaking. The congregation is not merely being wished well by the minister; they are receiving a divine declaration. Understanding this transforms the experience of a familiar benediction: it is worth arriving at the end of a church service prepared to receive the blessing as the word of God directly addressed to you.",
      "The threefold structure of the blessing suggests a threefold pattern for Christian prayer. We may ask God to bless and keep &mdash; to provide and protect, to cause our lives and the lives of those we love to flourish under his care. We may ask God to make his face shine &mdash; to make himself known, to let the awareness of his presence grow in our hearts, to be gracious in forgiving what alienates us from him. And we may ask for shalom &mdash; for the deep, wholeness-bringing peace that no circumstance can give and no circumstance can take away. The Aaronic Blessing is not only a benediction; it is a model for intercession.",
      "The image of the shining face of God has profound implications for how Christians understand suffering. The biblical drama includes many seasons in which God&rsquo;s face seems hidden &mdash; the &ldquo;dark night of the soul&rdquo; that mystics describe, the silence of God that Psalm 22 laments, the overwhelming circumstances that make it impossible to sense his presence. The Aaronic Blessing does not pretend these seasons do not exist; it prays against them. It is precisely because God&rsquo;s face can seem turned away that the prayer that it might shine is so urgent. The benediction is most needed in the darkness, and the darkness makes its request most earnest.",
      "The priestly mediation embedded in the Aaronic Blessing points toward the shape of Christian vocation in the world. Israel was called to be &ldquo;a kingdom of priests and a holy nation&rdquo; (Exodus 19:6), and the New Testament applies this same identity to the church (1 Peter 2:9, Revelation 1:6). As a royal priesthood, the church stands between God and the world &mdash; not in the sense of controlling access to God, but in the sense of bearing his name, carrying his blessing, and declaring his favor to those who have not yet heard it. Every Christian is a bearer of the Aaronic Blessing to a world that desperately needs the shalom that only God can give.",
      "The Nazirite section at the beginning of Numbers 6 reminds us that receiving the blessing of God is connected to the consecration of the self to God. The Nazirite vow was a voluntary act of setting apart &mdash; of dedicating a defined period to undistracted devotion. While the specific form of the Nazirite vow is not binding on Christians, its principle remains: the blessing of God is received in a context of pursuit of God. Those who draw near to him find that he draws near to them (James 4:8). The consecrated life &mdash; the life deliberately oriented toward God rather than distracted by the competing claims of the world &mdash; is the life that most fully experiences what the Aaronic Blessing announces.",
      "Finally, the Aaronic Blessing points to an eschatological horizon. The shalom it announces is not yet fully realized; the face of God is not yet seen without a veil. But the New Testament promises that the day is coming when the people of God will see his face (Revelation 22:4) &mdash; when the blessing that was spoken at the door of the tabernacle will be finally and fully realized in the new Jerusalem. The Aaronic Blessing is not only a prayer for today; it is a preview of eternity &mdash; the face of God turned toward his people, his name upon them, and his shalom filling everything that was broken, divided, or lost. Every time the blessing is pronounced, the church stands in the shadow of that future, and receives today a foretaste of what is coming.",
    ],
  },
];

const videoItems = [
  { videoId: "KM7J5X5TXBU", title: "The Aaronic Blessing - Numbers 6:24-26 Explained" },
  { videoId: "rQVs8mSSd4Y", title: "The Lord Bless You and Keep You - Priestly Blessing Study" },
  { videoId: "Mra1N0OHXPU", title: "Numbers 6 - The Aaronic Benediction and Its Meaning" },
  { videoId: "Yt0WR4EIACE", title: "God's Face Shining on You - Numbers 6 Devotional" },
];

export default function Numbers6GuidePage() {
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
            Numbers 6 &mdash; The Aaronic Blessing
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The ancient priestly benediction God himself composed for Aaron to speak over Israel &mdash; &ldquo;The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace&rdquo; &mdash; a word of divine favor that has accompanied God&rsquo;s people through every generation.
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

        <section style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
            Deepen your study of Numbers 6 and the Aaronic Blessing through video teaching on the priestly benediction, the meaning of God&rsquo;s face shining on his people, and the gift of shalom that the Lord alone can give.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Lord Turn His Face Toward You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The Aaronic Blessing is the oldest benediction in the world still in active use, and it remains as potent as the day God first dictated it to Moses. It is God&rsquo;s own promise of provision, protection, presence, grace, and peace spoken over his people. In Christ, the face of God has shone definitively upon humanity, and in him every promise of the blessing finds its &ldquo;Yes&rdquo; and &ldquo;Amen&rdquo; (2 Corinthians 1:20).
          </p>
        </div>
      </main>
    </div>
  );
}
