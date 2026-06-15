"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ACCENT = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "Garden of Eden",
  "Creation of Man",
  "Marriage and Covenant",
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
    heading: "Genesis 2: Overview",
    reference: "Genesis 2:1&ndash;25",
    paragraphs: [
      "Genesis 2 is one of the most theologically dense chapters in all of Scripture. Where Genesis 1 paints creation in broad, majestic strokes &mdash; the great sweep of God&rsquo;s creative week, light and darkness, sea and sky, creatures and humankind viewed from a cosmic height &mdash; Genesis 2 zooms in with intimate particularity on the crown of that creation: the making of the human person and the establishment of the first human community. The two chapters are not contradictory accounts, as critics have sometimes charged, but complementary lenses, the wide-angle and the close-up, both necessary to see the full picture.",
      "The chapter begins in rest. God completes his creative work on the seventh day and rests, and he blesses and hallows that day of rest as something set apart from ordinary time (vv. 1&ndash;3). This Sabbath rest at the beginning of Genesis 2 is not the rest of exhaustion but the rest of completion &mdash; God surveys a creation that is &lsquo;very good&rsquo; and enters into enjoyment of it. The author of Hebrews will pick up this image and develop it into a theology of the rest that still awaits God&rsquo;s people in Christ (Hebrews 4:1&ndash;11), a rest that creation&rsquo;s Sabbath only previewed.",
      "The focus then narrows to the making of man (the Hebrew &lsquo;adam&rsquo;) from the dust of the ground and the breath of God, his placement in a garden of astonishing beauty and fruitfulness, and the giving to him of work, responsibility, and prohibition. The garden is described with its rivers and precious stones, its trees of life and of the knowledge of good and evil. This is not a tale of primitive humans stumbling toward civilization; it is a portrait of humanity as God intended: dignified, purposeful, cared for, and called into relationship with their Maker.",
      "The second half of the chapter addresses a problem that God himself names: &ldquo;It is not good that the man should be alone; I will make him a helper fit for him&rdquo; (v. 18). This is the only thing in the creation narrative that God declares &ldquo;not good.&rdquo; The making of the woman &mdash; not from dust as Adam was made, but from Adam&rsquo;s own side &mdash; expresses a profound theology of human solidarity, complementarity, and the origins of marriage. The chapter closes with the first human words in Scripture (Adam&rsquo;s song of recognition in vv. 23&ndash;24) and the first definition of marriage: leaving, cleaving, and becoming one flesh.",
      "Genesis 2 is foundational not only for anthropology but for Christology and ecclesiology. Jesus himself quotes from it when he teaches on marriage, declaring that what God has joined in the one-flesh union no human authority should separate (Matthew 19:4&ndash;6). The Apostle Paul reaches even deeper when he reads the marriage of Adam and Eve as a &lsquo;mystery&rsquo; that ultimately refers to Christ and his church (Ephesians 5:31&ndash;32). Just as Eve was formed from Adam&rsquo;s side while he slept, the church &mdash; the New Eve &mdash; was formed from the side of the second Adam as he hung on the cross, when blood and water flowed from his pierced side (John 19:34). Genesis 2 is thus not a historical curiosity but a living theological document that shapes our understanding of who we are, how we are to live together, and what the death and life of Jesus accomplished.",
      "Any reading of Genesis 2 must reckon with the weight of what it is claiming. This is a text about origins: not merely physical origins, though those are included, but moral, relational, and spiritual origins. It tells us that we are made from earth and animated by divine breath, that we are creatures of purpose and dignity, that we need each other and cannot thrive in isolation, that marriage is God&rsquo;s design and not a human social construction, and that there is a tree of life whose fruit we were meant to eat but from which, by the events of chapter 3, we have been exiled. Every one of these claims matters enormously for how we understand ourselves and our world, and every one of them finds its deepest fulfillment in the person and work of Jesus Christ.",
    ],
  },
  {
    id: "Garden of Eden",
    heading: "The Garden of Eden: Paradise and Purpose",
    reference: "Genesis 2:8&ndash;17",
    paragraphs: [
      "The Garden of Eden is one of the most enduring images in all of human literature, and it is introduced in Genesis 2 with a care for detail that reflects its theological importance. &ldquo;And the Lord God planted a garden in Eden, in the east, and there he put the man whom he had formed&rdquo; (v. 8). The word &lsquo;Eden&rsquo; in Hebrew means &lsquo;delight&rsquo; or &lsquo;pleasure.&rsquo; This is not a harsh or indifferent environment; it is a place prepared by God for the flourishing of the human creature he has made.",
      "The garden is described with lavish particularity. &ldquo;The Lord God made to spring up every tree that is pleasant to the sight and good for food&rdquo; (v. 9). Two trees are singled out by name: the tree of life &ldquo;in the midst of the garden,&rdquo; and the tree of the knowledge of good and evil. A river flows out of Eden and divides into four rivers: the Pishon, the Gihon, the Tigris, and the Euphrates. The mention of gold, bdellium, and onyx in association with the land of Havilah suggests a world of remarkable richness, a creation not merely functional but beautiful.",
      "The theological significance of the garden has been unpacked across the whole sweep of biblical scholarship. The garden was understood by the ancient Israelites not merely as a pleasant park but as the first sanctuary &mdash; the dwelling place of God on earth. The same Hebrew verbs used in Genesis 2:15 for Adam&rsquo;s task of &lsquo;working&rsquo; and &lsquo;keeping&rsquo; the garden (&lsquo;abad&rsquo; and &lsquo;shamar&rsquo;) are used in Numbers 3:7&ndash;8 for the Levites&rsquo; service in the tabernacle. Adam was, in a real sense, the first priest, serving and guarding the presence of God in his earthly holy place.",
      "The tree of life stands at the center of the garden, a symbol of the perpetual life that God intended for his creature. Access to this tree was not a reward to be earned but a gift to be received in ongoing relationship with the Creator. The New Testament bookends the whole redemptive story with this same tree: in Revelation 2:7 Jesus promises to &ldquo;give to eat of the tree of life, which is in the paradise of God&rdquo;; and in Revelation 22:2 the tree of life stands in the new Jerusalem, bearing twelve kinds of fruit, its leaves for the healing of the nations. The exile from the tree of life in Genesis 3 and the return to it in Revelation 22 form the great bracket of the biblical narrative, and the cross of Christ is the bridge between them.",
      "The tree of the knowledge of good and evil is the tree of the prohibition. &ldquo;Of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die&rdquo; (v. 17). Much ink has been spilled on what this tree represents. The knowledge of good and evil in Hebrew idiom can refer to the full range of moral experience, or to the capacity for independent moral judgment, or to wisdom and experience in the broadest sense. What is clear is that the prohibition marks a boundary: there are things that belong to God alone, ways of knowing that require a divine rather than human standpoint. The temptation of Genesis 3 will be precisely to cross this boundary and &lsquo;be like God, knowing good and evil&rsquo; on human terms.",
      "God places Adam in the garden with a dual mandate: &ldquo;to work it and keep it&rdquo; (v. 15). This is the first description of human vocation, and it predates the fall. Work is not a consequence of sin; it is part of the dignified calling of image-bearers in God&rsquo;s world. The garden needed tending, not because it was disordered, but because God designed human creativity and labor to be part of the flourishing of creation. The cultural mandate embedded in these verses &mdash; to cultivate, develop, and protect the created order &mdash; is foundational for a Christian theology of work, ecology, and human responsibility.",
      "The geography of Eden has fascinated interpreters across the centuries. The mention of the Tigris and Euphrates as two of the four rivers suggests a location somewhere in the ancient Near East, but the precise identification of Eden has remained elusive. This may be deliberate. Eden is presented less as a locatable spot on a map than as the paradigmatic place of God&rsquo;s presence with his people &mdash; a pattern that the tabernacle, the Temple, and finally the incarnation of Jesus would all echo and develop. The longing for Eden is finally not a longing for a geographical location but a longing for the presence of God, which is why it is ultimately satisfied only in Christ, Emmanuel, God with us.",
    ],
  },
  {
    id: "Creation of Man",
    heading: "Creation of Man: Dust, Breath, and Dignity",
    reference: "Genesis 2:4&ndash;7, 18&ndash;20",
    paragraphs: [
      "The creation of the human person is described in Genesis 2 with an intimacy that stands in sharp contrast to the majestic cadences of Genesis 1. There God speaks and it is so; here God &lsquo;forms&rsquo; (&lsquo;yatsar&rsquo;, the word used of a potter shaping clay) the man from the dust of the ground, then bends down and breathes into his nostrils the breath of life. The image is astonishing in its tenderness: the Creator of the cosmos stooping to blow life directly into a creature made of earth.",
      "The two-part description of human origins carries enormous theological weight. &ldquo;Dust of the ground&rdquo; &mdash; the Hebrew &lsquo;adamah&rsquo; &mdash; is a reminder of creaturely limitation. We are not self-existent beings; we came from the earth and we return to it (3:19; Psalm 103:14). There is no ground for human pride in our material origin. Yet the breath of God &mdash; &lsquo;nishmat hayyim,&rsquo; the breath of life &mdash; confers an incommensurable dignity. We are uniquely animated by divine breath in a way that other creatures are not described as being. Humanity occupies a threshold position in creation: made from earth like the animals, animated by God&rsquo;s own breath, called to bear God&rsquo;s image and exercise stewardship over what he has made.",
      "The phrase &ldquo;man became a living creature&rdquo; (&lsquo;nefesh hayyah&rsquo;) is used in the creation account for animals as well (1:20, 24), but Adam&rsquo;s &lsquo;nefesh hayyah&rsquo; status came by direct divine inbreathing, suggesting a qualitative difference even while using the same language. The New Testament develops this contrast when it distinguishes between the first Adam who &lsquo;became a living being&rsquo; and the last Adam &mdash; Jesus &mdash; who &lsquo;became a life-giving spirit&rsquo; (1 Corinthians 15:45). The first Adam received the breath of life; the second Adam gives it.",
      "The naming of the animals (vv. 19&ndash;20) is a remarkable episode that serves multiple purposes in the narrative. God brings every beast of the field and every bird to Adam, and &ldquo;whatever the man called every living creature, that was its name.&rdquo; In the ancient Near East, naming was an act of authority and knowledge: to name something was to understand its nature and to have dominion over it. Adam&rsquo;s naming of the animals is thus both an exercise of the dominion mandate of Genesis 1:28 and a demonstration of the kind of intellectual capacity and discernment that God&rsquo;s image-bearer was designed for.",
      "The naming exercise has a second purpose that becomes apparent only in retrospect: &ldquo;But for Adam there was not found a helper fit for him&rdquo; (v. 20). As Adam surveys the animal kingdom and names each creature, he discovers that none of them corresponds to him. There is no creature that shares his nature, his dignity, his calling, his capacity for the kind of covenantal relationship that he was designed for. The exercise deepens his awareness of his own uniqueness and his own incompleteness. He is a creature who needs a companion of his own kind.",
      "The deep structure of the creation of man in Genesis 2 has profound implications for Christian ethics and anthropology. The material-spiritual duality of human nature &mdash; made from earth, animated by God&rsquo;s breath &mdash; rules out both a gnostic contempt for the physical body and a purely materialist account of human existence. We are not souls trapped in bodies, nor merely sophisticated animals. We are embodied creatures whose bodies matter to God: God took dust seriously enough to fashion it with his hands, and he took the resurrection of those bodies seriously enough to raise his Son in a physical body as the firstfruits of the new creation.",
      "The Apostle Paul&rsquo;s teaching about the resurrection body in 1 Corinthians 15 is built directly on the contrast between Adam and Christ in Genesis 2. The first man is &lsquo;of the earth, earthy&rsquo;; the second man is &lsquo;the Lord from heaven.&rsquo; As we have borne the image of the man of dust, so we shall bear the image of the man of heaven. The resurrection does not escape our creaturely embodied nature &mdash; it redeems and glorifies it. Genesis 2&rsquo;s portrait of human nature as dust-plus-divine-breath is not a temporary condition pending escape into pure spirit; it is the template for the glorified humanity that God is recreating in Christ.",
    ],
  },
  {
    id: "Marriage and Covenant",
    heading: "Marriage and Covenant: One Flesh and the Mystery of Christ",
    reference: "Genesis 2:18&ndash;25",
    paragraphs: [
      "The final movement of Genesis 2 is the making of woman and the institution of marriage, and it is one of the most theologically loaded passages in the entire Bible. It is the text Jesus cites when asked about divorce (Matthew 19; Mark 10). It is the text Paul quotes when he unfolds the &lsquo;profound mystery&rsquo; of marriage as a picture of Christ and the church (Ephesians 5:31&ndash;32). And it is the passage whose logic shapes the whole biblical sexual ethic from Genesis to Revelation.",
      "God&rsquo;s diagnosis comes first: &ldquo;It is not good that the man should be alone; I will make him a helper fit for him&rdquo; (v. 18). The word &lsquo;helper&rsquo; (&lsquo;ezer&rsquo;) is not a word of subordination but of strength. The same word is used of God himself in Psalms 121 and 124 as the &lsquo;help&rsquo; of Israel &mdash; the strong one who comes to the aid of those in need. The &lsquo;ezer&rsquo; is not a lesser being but a necessary counterpart, one whose complementary strength addresses a genuine lack in the one being helped. God saw that Adam, for all his dignity as image-bearer, needed a companion whose corresponding nature would complete what was missing.",
      "The method of the woman&rsquo;s creation is deliberate and symbolically rich. God causes a deep sleep (&lsquo;tardemah&rsquo;) to fall on Adam &mdash; the same word used of the deep sleep in which God made his covenant with Abraham in Genesis 15 &mdash; and takes from his side (the Hebrew &lsquo;tsela&rsquo; most naturally means &lsquo;rib&rsquo; or &lsquo;side&rsquo;) the material from which he fashions the woman. She is not made from Adam&rsquo;s head, to rule over him; not from his feet, to be trampled by him; but from his side, to stand beside him, under his arm to be protected, and near his heart to be loved. This interpretation, from the rabbinic tradition, captures the profound equality-in-difference that the text encodes.",
      "When God brings the woman to Adam, the man&rsquo;s response is the first human speech in the Bible, and it is poetry: &ldquo;This at last is bone of my bones and flesh of my flesh; she shall be called Woman, because she was taken out of Man&rdquo; (v. 23). The &lsquo;at last&rsquo; resonates with all the longing that the naming of the animals had awakened. Here, finally, is the one who corresponds to him. Adam recognizes in the woman not a possession but a person of his own nature, his own substance, his own calling. The poetic form of his response &mdash; Hebrew parallelism, the first song of Scripture &mdash; marks this moment as one of wonder and joy.",
      "The narrator then steps outside the story to offer what amounts to the first theological commentary on an event: &ldquo;Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh&rdquo; (v. 24). This verse is doing enormously important work. It establishes the pattern of marriage as normative for all subsequent human history, not merely for Adam and Eve. It identifies the relational dynamic: leaving the family of origin and cleaving to a spouse. And it declares the result: one flesh. This is not merely a description of sexual union but of a comprehensive life-union in which two persons &mdash; differentiated and complementary &mdash; become a new and unified entity.",
      "When Jesus is asked whether divorce is permissible, he does not begin with Mosaic law but with Genesis 2. &ldquo;Have you not read that he who created them from the beginning made them male and female, and said, &lsquo;Therefore a man shall leave his father and his mother and hold fast to his wife, and the two shall become one flesh&rsquo;? So they are no longer two but one flesh. What therefore God has joined together, let not man separate&rdquo; (Matthew 19:4&ndash;6). For Jesus, Genesis 2 is not an ancient cultural artifact but the living word of the Creator establishing an inviolable pattern. The &lsquo;therefore&rsquo; in verse 24 &mdash; therefore a man shall leave &mdash; indicates that the pattern of marriage flows necessarily from the nature of the man and woman as God made them.",
      "The Apostle Paul presses into the deepest layer of meaning in Ephesians 5. After instructing husbands to love their wives as Christ loved the church and gave himself for her, and wives to submit to their husbands as the church submits to Christ, Paul quotes Genesis 2:24 and then adds a stunning interpretive gloss: &ldquo;This mystery is profound, and I am saying that it refers to Christ and the church&rdquo; (Ephesians 5:32). Marriage is not merely a social institution that we can compare, by way of analogy, to Christ&rsquo;s relationship to the church. Rather, Paul seems to be saying that the marriage of Adam and Eve was designed from the beginning to be a living picture of this deeper reality &mdash; that Christ is the husband who gives himself for his bride, and the church is the wife who receives and responds to that love. Genesis 2 was always, at its deepest level, about the gospel.",
      "The final verse of Genesis 2 &mdash; &ldquo;And the man and his wife were both naked and were not ashamed&rdquo; (v. 25) &mdash; describes the unfallen condition of total transparency, vulnerability without fear, intimacy without shame. This is the world as God made it to be. The nakedness and the absence of shame together define a condition of radical trust and openness between creatures who have nothing to hide from each other or from God. Genesis 3 will shatter this condition, and shame &mdash; the covering of the self, the hiding from God, the blaming of the other &mdash; will become the mark of human existence east of Eden. But the gospel is the promise of a new humanity in Christ where shame is finally dealt with at the cross, where the One who had nothing of which to be ashamed was made to bear all our shame, so that we might stand before God and each other once again without it.",
    ],
  },
];

const videoItems = [
  { videoId: "GwT9_zuK5zs", title: "BibleProject: Genesis 1-11 Overview" },
  { videoId: "BoHFTTDWLaY", title: "The Garden of Eden and God's Presence" },
  { videoId: "nHiLGRSKc_A", title: "Adam, Eve, and the Image of God Explained" },
  { videoId: "ZQiVfkdBRHI", title: "Marriage in Genesis 2 and Ephesians 5" },
];

export default function Genesis2GuidePage() {
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
            Genesis 2
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The seventh-day rest, the Garden of Eden, the forming of Adam from dust and Eve from Adam&rsquo;s side, the institution of marriage, and the mystery Paul calls a picture of Christ and the church &mdash; &ldquo;Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh&rdquo; (Genesis 2:24).
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

        {activeTab === "Videos" && (
          <section>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 700, margin: "0 0 8px" }}>Video Teaching</h2>
            <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.8, margin: "0 0 2rem" }}>
              Deepen your study of Genesis 2 through visual teaching on the Garden of Eden, the creation of Adam and Eve, and the profound mystery of marriage pointing to Christ and the church.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Bone of My Bones, Flesh of My Flesh</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Genesis 2 gives us the world as God meant it to be: humanity formed with tender care from earth and divine breath, placed in a garden sanctuary of delight, given meaningful work and a companion of corresponding nature, joined in the covenant of one flesh. Every thread in this chapter runs forward to Christ &mdash; the last Adam who breathes the Spirit into his new creation, who forms his bride the church from his own side, and who calls his people into the rest that creation&rsquo;s Sabbath only began to describe.
          </p>
        </div>
      </main>
    </div>
  );
}
