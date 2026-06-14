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
  "The Shema",
  "Love the Lord Your God",
  "Teach Your Children",
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
    heading: "Overview of Deuteronomy 6",
    reference: "Deuteronomy 6:1&ndash;25",
    paragraphs: [
      "Deuteronomy 6 stands at the very heart of Israel&rsquo;s covenant faith. It is the chapter that opens with the Shema &mdash; the declaration &ldquo;Hear, O Israel: The Lord our God, the Lord is one&rdquo; &mdash; and immediately unfolds that monotheistic confession into a command to love God with all the heart, soul, and might. No single passage in the Old Testament has shaped Jewish devotion more profoundly, and no passage is quoted more frequently by Jesus himself in the New Testament.",
      "The chapter belongs to the second of Moses&rsquo;s three great farewell speeches in the book of Deuteronomy. Israel stands on the plains of Moab, just east of the Jordan River, on the very threshold of the Promised Land. Moses is about to die, and he knows it. These words are not idle theology &mdash; they are a dying father&rsquo;s final charge to his children, the distilled wisdom of forty years in the wilderness, the essence of everything the covenant requires.",
      "The literary structure of the chapter falls into three movements. First, verses 1&ndash;3 set the context: these are commandments to be obeyed in the land, so that Israel may fear the Lord and that it may go well with them. Second, verses 4&ndash;9 deliver the Shema and its immediate implications &mdash; total love of God, diligent instruction of children, and the physical practices that keep the word ever before the community. Third, verses 10&ndash;25 warn against the prosperity-induced amnesia that the land will tempt Israel toward, calling the nation to remember, fear, obey, and testify.",
      "The opening word of the chapter&rsquo;s central command &mdash; &ldquo;Hear&rdquo; (&lsquo;Shema&rsquo; in Hebrew) &mdash; is not merely an invitation to listen but a summons to obedience. In biblical Hebrew, to &lsquo;hear&rsquo; God&rsquo;s word is to act upon it. The Shema therefore does not begin with a doctrine to be believed in the abstract but with a call to responsive covenant loyalty. Israel is the community that hears God&rsquo;s voice and answers with the whole self.",
      "Deuteronomy 6 belongs to an urgent pastoral moment: the transition from wilderness to settlement. In the wilderness, God&rsquo;s provision was unmistakable &mdash; manna from heaven, water from a rock, a pillar of fire by night. In the land, however, the people would eat bread they did not bake in houses they did not build and drink from cisterns they did not dig (v. 11). The very abundance that is a sign of God&rsquo;s faithfulness becomes the soil in which forgetfulness grows. Moses understands this danger and devotes the majority of the chapter to addressing it.",
      "The final verses of the chapter answer the question a child will one day ask: &ldquo;What is the meaning of the testimonies and the statutes and the rules that the Lord our God has commanded you?&rdquo; (v. 20). The answer Moses gives is not a list of moral principles but a story &mdash; the story of Egypt, of slavery, of the Lord who brought his people out with a mighty hand, and who brought them to this land to give it to them. The commandments are not arbitrary rules; they are a way of life rooted in redemption, the fitting response of a freed people to a saving God.",
    ],
  },
  {
    id: "The Shema",
    heading: "The Shema: Hear, O Israel",
    reference: "Deuteronomy 6:4&ndash;5",
    paragraphs: [
      "The Shema proper consists of a single sentence of four Hebrew words in the original: &ldquo;Shema Yisrael Adonai Eloheinu Adonai Echad&rdquo; &mdash; &ldquo;Hear, O Israel: The Lord our God, the Lord is one&rdquo; (v. 4). In those four words lies the most concentrated theological claim in all of Scripture. Against the backdrop of ancient Near Eastern polytheism, where every nation had its pantheon and every god had its territory, this declaration asserted something radical: the God who made covenant with Israel at Sinai is not one deity among many. He is the only God there is.",
      "The word &lsquo;echad&rsquo; &mdash; &ldquo;one&rdquo; &mdash; carries more weight than a simple numerical assertion. In Hebrew, &lsquo;echad&rsquo; can denote a complex unity as well as numerical singularity (the same word is used when &ldquo;a man and his wife&rdquo; become &ldquo;one flesh&rdquo; in Genesis 2:24). The Shema declares not only that there are no other gods but that the Lord himself is undivided in his nature, undivided in his loyalty to his people, and undivided in his claim upon their loyalty in return. He cannot be compartmentalized, bargained with in portions, or served on Tuesdays while Baal gets the weekends.",
      "The relational weight of the declaration is carried by the phrase &ldquo;our God.&rdquo; This is not abstract monotheism &mdash; a philosopher&rsquo;s theorem about ultimate reality. It is covenant confession. The Lord who is uniquely one is also the Lord who belongs to Israel and to whom Israel belongs. &ldquo;Our God&rdquo; is the language of relationship, of mutual belonging, of the particular bond that Sinai created. The Shema is simultaneously the most universal theological claim (there is only one God) and the most intimate personal one (he is ours).",
      "Throughout Jewish history, the Shema has been recited twice daily &mdash; in the morning and in the evening &mdash; in fulfillment of the command to speak these words when lying down and when rising up (v. 7). It is the first prayer taught to Jewish children and the last words on the lips of the dying. Martyrs throughout the centuries, including Rabbi Akiva under Roman torture, have died with the Shema on their lips. No single sentence has more thoroughly shaped the practice of Jewish worship and the identity of the Jewish people across millennia.",
      "In the New Testament, Jesus quotes the Shema directly when asked which commandment is the greatest. &ldquo;The most important is, &lsquo;Hear, O Israel: The Lord our God, the Lord is one. And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength&rsquo;&rdquo; (Mark 12:29&ndash;30). Jesus does not merely endorse the Shema as one commandment among many &mdash; he identifies it as the foundation of the entire law. The Shema is not replaced by the new covenant; it is fulfilled, deepened, and given its ultimate grounding in the Triune God who is himself love.",
      "For the early church, the Shema created a theological tension and a theological opportunity. Jewish monotheism was the bedrock of Christian faith. But Jesus, who recited the Shema, was also confessed as Lord &mdash; the same title the Shema uses for God. Paul navigates this in 1 Corinthians 8:6, expanding the Shema into a Trinitarian shape: &ldquo;for us there is one God, the Father, from whom are all things and for whom we exist, and one Lord, Jesus Christ, through whom are all things and through whom we exist.&rdquo; The oneness of God is not abandoned; it is fulfilled in a richer way through the revelation of the Son and the Spirit.",
    ],
  },
  {
    id: "Love the Lord Your God",
    heading: "Love the Lord Your God",
    reference: "Deuteronomy 6:5&ndash;9",
    paragraphs: [
      "The verse immediately following the Shema&rsquo;s declaration of God&rsquo;s oneness is the great love commandment: &ldquo;You shall love the Lord your God with all your heart and with all your soul and with all your might&rdquo; (v. 5). It is remarkable that this should take the form of a command at all. Love, we tend to assume, is a spontaneous emotion that either arises or does not &mdash; it cannot be commanded any more than one can command the rain. But the Bible&rsquo;s understanding of love is larger and more demanding than that.",
      "In the covenant context of Deuteronomy, love (Hebrew &lsquo;ahav&rsquo;) is not primarily a feeling but a disposition of loyalty, allegiance, and committed devotion. Ancient Near Eastern treaty texts used the same language of &lsquo;love&rsquo; to describe the vassal&rsquo;s faithful service to his great king &mdash; a total orientation of the will toward the king&rsquo;s interests. To love the Lord is to be wholly given over to him: to pursue his purposes, obey his commands, trust his promises, and cleave to him even when the emotions are cold and the circumstances are hard. It is a love that can be commanded precisely because it is a decision about where one&rsquo;s ultimate loyalty lies.",
      "The three Hebrew terms &mdash; heart (&lsquo;levav&rsquo;), soul (&lsquo;nephesh&rsquo;), and might (&lsquo;me&rsquo;od&rsquo;) &mdash; are not three separate compartments of the person but an all-encompassing expression of totality. In Hebrew thinking the heart is the seat of thought, will, and decision; the soul is the animating self, the life-breath, the whole person in all its vitality; and the word translated &ldquo;might&rdquo; means something closer to &ldquo;abundance&rdquo; or &ldquo;very-ness&rdquo; &mdash; your resources, your capacities, everything you have and are pushed to the uttermost. Together these three terms say: leave nothing back. Give God the whole of yourself.",
      "Jesus adds a fourth term when he quotes this verse in the Synoptic Gospels &mdash; &ldquo;with all your mind&rdquo; &mdash; reflecting the Greek version and expanding the command to include the intellectual life explicitly. This is a significant addition. Love of God is not anti-intellectual; it calls for the full engagement of the mind in the pursuit of God &mdash; in theology, in study of Scripture, in the careful thinking that seeks to understand the one who is loved. The life of the mind is not separate from the devotional life; it is one of its highest expressions.",
      "Verses 6&ndash;9 describe the practices that flow from this love and that sustain it across generations. The words are to be on the heart (internalized), taught diligently to children, spoken of at all times and in all places &mdash; sitting, walking, lying down, rising up &mdash; and bound physically on the hand, on the forehead, and written on the doorposts of the house and the gates. This is not magical use of the text; it is the practice of continual, pervasive, all-encompassing formation. The Word of God is to so saturate the rhythms of daily life that there is no moment and no space from which God is absent.",
      "The command to love God with all one&rsquo;s might &mdash; with all one&rsquo;s resources &mdash; has profound implications for the use of wealth and possessions. The temptation the chapter identifies is precisely the temptation of prosperity: that when Israel eats and is full, it will forget the Lord who provided everything (vv. 10&ndash;12). Love with all one&rsquo;s might means holding wealth with an open hand, giving generously, and refusing to let material abundance become a rival god. The heart&rsquo;s treasure and the heart&rsquo;s love belong together; where the treasure goes, the love follows (cf. Matthew 6:21).",
    ],
  },
  {
    id: "Teach Your Children",
    heading: "Teach Your Children",
    reference: "Deuteronomy 6:6&ndash;9, 20&ndash;25",
    paragraphs: [
      "One of the most striking features of Deuteronomy 6 is its intensely intergenerational vision. The command is not merely to love God personally but to transmit that love and knowledge faithfully to the next generation. &ldquo;You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise&rdquo; (v. 7). The faith is never merely a private transaction between the individual and God; it is a living tradition entrusted to families and communities across time.",
      "The Hebrew word translated &ldquo;teach diligently&rdquo; (&lsquo;shanan&rsquo;) carries the sense of sharpening or incising &mdash; cutting the words into the children so that they take hold and last. This is not casual conversation about God but intentional, repeated, urgent instruction. The picture is of parents who are so saturated with the words of God that they cannot help but speak them &mdash; when they sit, when they walk, when they prepare for sleep, when they begin the day. God-talk flows naturally from a heart that is genuinely given to God.",
      "The physical practices commanded in verses 8&ndash;9 serve this intergenerational purpose. Mezuzot on the doorposts mark the household as a place where the covenant is lived out. Phylacteries worn on the hand and the forehead keep the law visible and present through the working day. These are not ornamental religious tokens; they are daily catechisms in physical form &mdash; objects that prompt conversation, that invite the child to ask, and that answer before the question is even raised: &ldquo;This is a house where God is known and loved.&rdquo;",
      "The chapter&rsquo;s second section on teaching children (vv. 20&ndash;25) is explicitly dialogical. It envisions a future child who will ask: &ldquo;What is the meaning of the testimonies and the statutes and the rules that the Lord our God has commanded you?&rdquo; (v. 20). The answer Moses prescribes is remarkable in what it is not. It is not a lecture on moral philosophy. It is not a list of abstract principles. It is a story &mdash; the story of slavery in Egypt, of a God who saw and acted, of signs and wonders, of a promised land. &ldquo;We were Pharaoh&rsquo;s slaves in Egypt, and the Lord brought us out of Egypt with a mighty hand&rdquo; (v. 21).",
      "This narrative pedagogy is at the heart of biblical faith formation. The commandments make sense not as free-floating obligations but as the lived response of a redeemed community to its Redeemer. The child who learns the story first &mdash; the exodus, the covenant, the gift of the land &mdash; is the child who can understand why the commands matter. They are not the price of God&rsquo;s favor; they are the grateful and fitting way of life for those who already have God&rsquo;s favor. &ldquo;The Lord commanded us to do all these statutes, to fear the Lord our God, for our good always, that he might preserve us alive&rdquo; (v. 24).",
      "For Christian families and communities today, the model of Deuteronomy 6 remains irreplaceable. Digital culture and institutional religion can never substitute for the faith formation that happens in the rhythms of household life &mdash; in meals shared and prayers spoken and questions answered and stories told. The command to &ldquo;talk of them when you sit in your house&rdquo; calls parents to a kind of deliberate and pervasive discipleship at home. The church can supplement what happens in the home, but it was never intended to replace it. God&rsquo;s design for the transmission of faith is fundamentally domestic.",
    ],
  },
  {
    id: "Application",
    heading: "Application: Loving God in Every Age",
    reference: "Deuteronomy 6 for Today",
    paragraphs: [
      "The challenge Moses identifies in Deuteronomy 6 &mdash; the danger of prosperity-induced forgetfulness &mdash; is, if anything, more acute for twenty-first-century Western Christians than it was for ancient Israel. The people entering Canaan would find cities they did not build and vineyards they did not plant; we inhabit a world of such overwhelming abundance and technological distraction that the voice of God must compete with a thousand other voices all vying for our attention and allegiance. The Shema&rsquo;s call to undivided love of God is countercultural precisely because our culture is so effective at dividing the heart.",
      "The Shema&rsquo;s declaration that &ldquo;the Lord is one&rdquo; has a practical application that is easy to miss: it means there are no secular zones. If God is one and his claim upon the human heart is total, then no part of life &mdash; vocation, finances, recreation, relationships, politics, art &mdash; falls outside the scope of covenant loyalty. The ancient Israelite temptation to worship Baal in the agricultural sphere while keeping Yahweh for the religious sphere is not so different from the modern temptation to keep God &lsquo;in the spiritual lane&rsquo; while the rest of life runs on other principles entirely. The Shema refuses that division.",
      "The command to love God with all the heart addresses the problem of half-heartedness that is perhaps the besetting spiritual failure of comfortable Christianity. It is entirely possible to maintain the forms of religious observance &mdash; church attendance, Bible reading, charitable giving &mdash; while the actual center of one&rsquo;s life and passion lies elsewhere. Deuteronomy 6 will not permit that arrangement. What is commanded is not religious performance but a reorientation of the self, a reorganization of loves so that everything flows from and returns to the supreme love of God. Augustine&rsquo;s famous prayer captures it: &ldquo;our heart is restless, until it repose in Thee.&rdquo;",
      "The practice of speaking about God in the rhythms of daily life &mdash; sitting, walking, lying down, rising up &mdash; calls for a kind of spiritual attentiveness that is habitual rather than merely occasional. Prayer is not only what happens in the morning devotional time; it is the orientation of a mind that moves through the day alert to God&rsquo;s presence and action. Scripture memory serves this practice: when the words of God are stored in the heart, they arise naturally in conversation, in decision-making, in comfort and challenge. The discipline of Deuteronomy 6 is essentially the discipline of a mind renewed (Romans 12:2) &mdash; trained to perceive every moment as a moment lived before God.",
      "For parents and grandparents, the intergenerational vision of the chapter is both a commission and an encouragement. The commission is clear: teach the faith at home, in the ordinary conversations of life, and not only by explicit instruction but by the contagion of genuine love for God that children catch from those who actually have it. The encouragement is equally clear: God designed faith to travel through families. The stories told at the dinner table, the prayers overheard at bedtime, the way adults speak about God in moments of difficulty and gratitude &mdash; these are among the most powerful forces in the formation of faith in the next generation. No pedagogy outweighs example.",
      "Ultimately, Deuteronomy 6 points beyond itself to Christ, in whom the Shema finds its deepest fulfillment. Jesus, the Son of God, loved the Father with all his heart and soul and strength &mdash; perfectly and without reservation. He is the true Israel who did not forget God in the wilderness (Matthew 4:1&ndash;11) and who, when tempted, answered every temptation with the words of Deuteronomy. What the Shema commands, Christ accomplished. And through union with Christ by the Spirit, that love of God which we cannot manufacture in ourselves is poured into our hearts (Romans 5:5). The command becomes a promise: we will love God, because he first loved us (1 John 4:19), and because his own Spirit is at work within us to will and to do what pleases him.",
    ],
  },
];

const videoItems = [
  { videoId: "fMda9YC7pKA", title: "The Shema - Deuteronomy 6 Bible Study" },
  { videoId: "XHjSNPLuqkI", title: "Hear O Israel - Deuteronomy 6 Explained" },
  { videoId: "6GLK9ksSbiY", title: "Love the Lord Your God - Deuteronomy 6:5 Devotional" },
  { videoId: "9E7bx9lpBmk", title: "BibleProject - The Shema and the Great Commandment" },
];

export default function Deuteronomy6GuidePage() {
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
            Deuteronomy 6 &mdash; The Shema
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The foundational confession of Israel&rsquo;s covenant faith &mdash; &ldquo;Hear, O Israel: The Lord our God, the Lord is one&rdquo; &mdash; and the command to love God with all your heart, soul, and strength, to teach that love to your children, and to let it permeate every corner of your life.
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
            Deepen your study of Deuteronomy 6 and the Shema through video teaching on the great love commandment, the covenant call to wholehearted devotion, and the practice of passing faith to the next generation.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>Hear, O Israel</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Deuteronomy 6 calls every generation to the same wholehearted devotion &mdash; to love the Lord with an undivided heart, to speak of him at all times and in all places, and to pass that love on to those who come after. In Christ, who perfectly fulfilled the Shema, that love is not only commanded but made possible: the Spirit of God pours the love of God into our hearts so that we can truly love him with all that we are.
          </p>
        </div>
      </main>
    </div>
  );
}
