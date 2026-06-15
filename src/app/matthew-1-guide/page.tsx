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
  "The Genealogy",
  "The Virgin Birth",
  "Immanuel God With Us",
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
    heading: "Matthew 1 &mdash; Overview",
    reference: "Matthew 1:1&ndash;25",
    paragraphs: [
      "Matthew&rsquo;s Gospel opens not with a story but with a list &mdash; and that choice is itself a theological statement. The very first verse announces the subject with stunning compression: &ldquo;The book of the genealogy of Jesus Christ, the son of David, the son of Abraham&rdquo; (1:1). Before a single event is narrated, the reader is oriented inside the vast sweep of Israel&rsquo;s history. Jesus is not a novelty; he is the destination of a journey that began with the father of the faith and passed through the greatest king Israel ever knew. Matthew&rsquo;s Gospel is a book that will not allow Jesus to be understood apart from the story of God&rsquo;s people.",
      "The chapter divides cleanly into two halves. The first (1:1&ndash;17) is the genealogy itself, tracing the line of descent from Abraham through David, through the catastrophe of the Babylonian exile, and down at last to Joseph, the husband of Mary, from whom Jesus was born. The second half (1:18&ndash;25) narrates the circumstances of that birth &mdash; the betrothal of Mary and Joseph, the unexpected pregnancy, Joseph&rsquo;s troubled response, the angelic dream, and the explanation of both the name Jesus and the title Immanuel. These two halves are inseparable: the genealogy establishes who Jesus is in relation to Israel&rsquo;s past, and the birth account explains how the divine promise embedded in that genealogy came to fulfillment.",
      "The chapter&rsquo;s organizing principle is promise and fulfillment. Matthew writes to a community steeped in the Hebrew Scriptures, and from the very first page he is insisting that in Jesus every thread of the old covenant story has reached its appointed end. The genealogy itself is structured around the number fourteen &mdash; fourteen generations from Abraham to David, fourteen from David to the exile, fourteen from the exile to the Messiah (1:17). Whether this reflects a mnemonic device, a numerological encoding of David&rsquo;s name (whose letters in Hebrew add up to fourteen), or a theological structuring of history into three epochs, the message is clear: history has a shape, and Jesus stands at its culmination.",
      "Five women appear in the genealogy, each one an interruption of the expected patrilineal flow, and each one associated with a story of irregularity, risk, or scandal through which God nonetheless worked his saving purposes: Tamar, who tricked her father-in-law Judah; Rahab, the Canaanite prostitute who sheltered Israel&rsquo;s spies; Ruth, the Moabite widow who clung to her mother-in-law; Bathsheba (called &ldquo;the wife of Uriah&rdquo;), whose union with David was shadowed by adultery and murder; and Mary, the young woman whose pregnancy would be deeply misunderstood. These women do not interrupt the story of grace &mdash; they embody it. They are advance signals that God&rsquo;s ways are not our ways, and that the scarlet thread of redemption runs through the most unlikely human situations.",
      "The theological stakes of the chapter are enormous. By the time Matthew finishes his twenty-five verses, he has identified Jesus as the heir of the Abrahamic covenant (the one through whom all nations will be blessed), the heir of the Davidic covenant (the king whose throne will endure), the fulfillment of Isaiah&rsquo;s Immanuel prophecy, and the one who will save his people from their sins. The first chapter of Matthew is a compressed theology of the whole Gospel &mdash; and indeed of the whole Bible.",
    ],
  },
  {
    id: "The Genealogy",
    heading: "The Genealogy &mdash; Abraham to Jesus",
    reference: "Matthew 1:1&ndash;17",
    paragraphs: [
      "Ancient readers would not have skipped the genealogy. In a culture that understood identity to be profoundly shaped by ancestry and covenant heritage, a list of names was not a preface to be endured before the real story began &mdash; it was itself a declaration of identity. Matthew&rsquo;s opening list is saying: know who Jesus is by knowing where he comes from. The genealogy is the thesis that the rest of the Gospel will argue.",
      "The structure Matthew imposes on the genealogy is deliberate and artful. He divides the whole sweep of Israel&rsquo;s history into three epochs of fourteen generations each: from Abraham to David, from David to the Babylonian deportation, and from the deportation to the Messiah (1:17). This threefold shape is not historical accident but theological architecture. The first epoch moves toward glory &mdash; from the call of Abraham to the kingdom of David. The second epoch moves toward catastrophe &mdash; from the height of Israel&rsquo;s monarchy to the humiliation of exile. The third epoch, beginning in darkness, moves toward unexpected renewal &mdash; from the exile to the one who would rebuild what the exile shattered. Jesus is the answer to the exile. He is the one in whom the captivity finally ends.",
      "The repetition of David&rsquo;s name is emphatic. The genealogy begins with Abraham and David in the same breath (1:1), sets David at the midpoint of the list (1:6), and counts from David to the exile and from the exile to Christ (1:17). Matthew is not merely tracing bloodlines &mdash; he is tracing the royal promise. God had sworn to David that his house, his kingdom, and his throne would be established forever (2 Samuel 7:16). When Babylon destroyed Jerusalem and the line of David seemed to end in humiliation, the promise appeared to have failed. The genealogy from the exile to Jesus is Matthew&rsquo;s answer: the Davidic line, though thinned to a thread, survived, and in Jesus the promised king has come at last.",
      "The five women in the genealogy deserve careful attention: Tamar (1:3), Rahab (1:5), Ruth (1:5), the wife of Uriah [Bathsheba] (1:6), and Mary (1:16). Each is in some way outside the expected social categories. Tamar was Canaanite; Rahab was a Canaanite prostitute in Jericho; Ruth was a Moabite; Bathsheba was drawn into David&rsquo;s story through his grievous sin. Their inclusion does several things at once. First, it announces from the very first page that the Messiah&rsquo;s family tree includes Gentiles &mdash; a foretaste of the commission to &ldquo;make disciples of all nations&rdquo; at the Gospel&rsquo;s end. Second, it signals that God&rsquo;s saving work operates through human irregularity, not despite it. Third, it quietly prepares the reader for the most unexpected story of all: the pregnancy of Mary, which will require even more than Rahab&rsquo;s story did to understand as an act of divine grace rather than human scandal.",
      "The genealogy contains several details that invite careful reading. Matthew says Jesus was born &ldquo;of Mary&rdquo; rather than the expected &ldquo;Joseph begot Jesus.&rdquo; This grammatical break at the genealogy&rsquo;s end is the first signal of what the second half of the chapter will explain: Joseph is Jesus&rsquo; legal father but not his biological father. The genealogy establishes Jesus&rsquo; legal claim to the Davidic line through Joseph&rsquo;s adoption, while the birth narrative ensures the reader understands the manner of his conception was entirely apart from Joseph. Both truths are necessary: legal heir to David&rsquo;s throne through Joseph; conceived by the Holy Spirit in Mary.",
      "The three sets of fourteen generations also conceal a puzzle: Matthew appears to count only thirteen generations in the third group, from the exile to Jesus. Various explanations have been offered &mdash; the most compelling is that David is counted twice (once at the end of the first set and once at the beginning of the second), reflecting how central the Davidic promise is to the whole story. Whatever the precise reckoning, the theological point stands: God has been ordering time and lineage toward this moment for two thousand years, and the arrival of Jesus is not a detour from Israel&rsquo;s story but its long-awaited destination.",
    ],
  },
  {
    id: "The Virgin Birth",
    heading: "The Virgin Birth &mdash; Joseph&rsquo;s Dream",
    reference: "Matthew 1:18&ndash;21",
    paragraphs: [
      "The birth narrative begins with a sentence that tells us everything we need to know about the theological engine of the passage: &ldquo;Now the birth of Jesus Christ took place in this way. When his mother Mary had been betrothed to Joseph, before they came together she was found to be with child from the Holy Spirit&rdquo; (1:18). Matthew does not dramatize the discovery or draw out the emotional difficulty for suspense. He states the fact plainly and immediately names the agent: the Holy Spirit. The mystery is not managed or softened &mdash; it is announced.",
      "Betrothal in first-century Jewish culture was far more binding than a modern engagement. A betrothed woman was legally the man&rsquo;s wife, and the dissolution of the relationship required a formal certificate of divorce. A betrothed couple did not yet live together, but unfaithfulness during the betrothal period was treated with the same gravity as adultery within marriage. Joseph&rsquo;s discovery that Mary was pregnant &mdash; before they had come together &mdash; would have been experienced as betrayal of the most serious kind, a violation of the covenant between them that carried social shame and potentially severe legal consequences.",
      "The narrator&rsquo;s description of Joseph is one of the most quietly moving character portraits in the Gospels: &ldquo;her husband Joseph, being a just man and unwilling to put her to shame, resolved to divorce her quietly&rdquo; (1:19). The phrase &ldquo;being a just man&rdquo; or &ldquo;righteous man&rdquo; is the key &mdash; and interpreters have long noted the tension it contains. Precisely because Joseph was righteous, he felt he could not take a woman who appeared to have been unfaithful. But precisely because he was merciful, he would not expose her to public disgrace. The quiet divorce was an act of restraint in the face of what he understood to be genuine wrongdoing. He does not know yet that there has been no wrongdoing at all. He is a man trying to be righteous with incomplete information &mdash; and that is a condition every believer knows.",
      "Into Joseph&rsquo;s troubled deliberation comes the angel of the Lord in a dream: &ldquo;Joseph, son of David, do not fear to take Mary as your wife, for that which is conceived in her is from the Holy Spirit. She will bear a son, and you shall call his name Jesus, for he will save his people from their sins&rdquo; (1:20&ndash;21). The angel&rsquo;s address &mdash; &ldquo;Joseph, son of David&rdquo; &mdash; is not incidental. It reminds Joseph of the covenant heritage he carries, and it signals that the child to be named and claimed by Joseph will thereby inherit the Davidic line. Joseph&rsquo;s act of naming Jesus is the act by which Jesus becomes, in the eyes of Jewish law and custom, the son of David.",
      "The name Jesus is the Greek form of the Hebrew Yeshua, which itself is a shortened form of Yehoshua (Joshua) &mdash; a name that means &ldquo;the Lord saves&rdquo; or &ldquo;the Lord is salvation.&rdquo; The angel provides the interpretation immediately: &ldquo;he will save his people from their sins.&rdquo; This is the first explicit statement in Matthew&rsquo;s Gospel of what Jesus has come to do, and it is remarkable. The people of Jesus&rsquo; day were hoping for a king who would save them from Roman occupation, from political oppression, from military humiliation. The angel speaks of saving from something deeper and more intractable: sins. The liberation Jesus brings is not first a social or political emancipation but a moral and spiritual one. The Messiah has come to address the root problem of humanity.",
      "The mention of the Holy Spirit as the agent of Mary&rsquo;s conception connects the birth of Jesus to the creation itself, where the Spirit of God hovered over the waters (Genesis 1:2), and to the great acts of divine renewal throughout Israel&rsquo;s story. The Holy Spirit had anointed prophets and kings; here the Spirit acts in an altogether new and unprecedented way &mdash; not merely inspiring or empowering a human being, but bringing about the conception of one who is both fully human (born of a woman, entering the Davidic lineage) and something more than merely human (conceived without a human father, bearing a name that belongs to God: &ldquo;the Lord saves&rdquo;). Matthew does not yet deploy the full vocabulary of later Trinitarian theology, but the raw material is all here.",
    ],
  },
  {
    id: "Immanuel God With Us",
    heading: "Immanuel &mdash; God With Us",
    reference: "Matthew 1:22&ndash;25",
    paragraphs: [
      "Matthew&rsquo;s handling of Isaiah 7:14 is the first of his famous fulfillment formulas &mdash; a pattern that will recur throughout the Gospel: &ldquo;All this took place to fulfill what the Lord had spoken by the prophet: &lsquo;Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel&rsquo; (which means, God with us)&rdquo; (1:22&ndash;23). The quotation comes from Isaiah 7, where the prophet offered the sign of Immanuel to the faithless king Ahaz during a military crisis in the eighth century BC. The sign in its original context was about God&rsquo;s presence and protection for Israel in the immediate situation. But Matthew, reading as one who has seen how the whole story ended, understands the sign to have carried a weight of meaning that far exceeded its original occasion &mdash; a weight that could only be borne by one in whom God himself was truly present.",
      "The name Immanuel &mdash; &ldquo;God with us&rdquo; (Hebrew: Immanu El) &mdash; is one of the most theologically dense names in all of Scripture. It does not merely mean that God is present in the way he had been present throughout Israel&rsquo;s story, attending his people through signs and prophets and the Temple. The claim Matthew is making, in the light of everything the angel has said, is that God is present in the person of this child. The child conceived by the Holy Spirit, born of Mary, named Jesus because he will save his people from their sins &mdash; this child is himself, in some sense that defies easy summary, the presence of God in human flesh. The Gospel of John will say it with philosophical precision: &ldquo;the Word became flesh.&rdquo; Matthew, characteristically, says it through narrative and prophecy: the one who is coming is none other than God-with-us.",
      "Matthew&rsquo;s use of the Septuagint (the Greek translation of the Hebrew Scriptures) at this point is significant. The Hebrew of Isaiah 7:14 uses the word &ldquo;almah,&rdquo; which can mean a young woman of marriageable age. The Septuagint translated this with the Greek &ldquo;parthenos,&rdquo; which more specifically means &ldquo;virgin.&rdquo; Matthew quotes from the Greek translation, and the birth narrative he has just told makes the choice entirely fitting: Mary was not merely young, she was a virgin &mdash; she had &ldquo;known no man&rdquo; (Luke 1:34). The conception that took place was wholly by the agency of the Holy Spirit. The sign of Isaiah, in its fullest realization, was not just about a young woman giving birth in a time of political trouble, but about the birth of one who would embody the divine presence in a way that had never happened before.",
      "Joseph&rsquo;s response to the angelic message is immediate and complete obedience. He &ldquo;did as the angel of the Lord commanded him: he took his wife, but knew her not until she had given birth to a son. And he called his name Jesus&rdquo; (1:24&ndash;25). There is no record of argument, hesitation, or demand for additional signs. Joseph, the silent character of Matthew&rsquo;s infancy narrative (he never speaks a single word in the text), acts. He takes Mary as his wife, honors the sanctity of her pregnancy, and performs the decisive act of naming the child &mdash; thereby acknowledging Jesus as his son and incorporating him formally into the lineage of David. Joseph&rsquo;s obedience is an act of faith of the highest order. He has been given a message that overturns his initial interpretation of events, asks him to take a socially costly path, and requires him to trust a word delivered in a dream. He trusts it completely.",
      "The phrase &ldquo;until she had given birth&rdquo; (1:25) has been discussed extensively in church history in connection with the question of Mary&rsquo;s subsequent relationship with Joseph. Matthew&rsquo;s language &mdash; &ldquo;knew her not until&rdquo; &mdash; is a standard idiom that focuses attention on the period before the birth rather than making a definitive statement about what happened afterward. The point Matthew wants to make is clear: the birth of Jesus was not the result of any sexual union between Mary and Joseph. That the Holy Spirit was the sole agent of the conception is the theological claim Matthew is underwriting. The question of what came after falls outside the scope of what Matthew is here trying to establish.",
      "Taken together, the two parts of Matthew 1 announce the central mystery of the Christian faith with a directness that is almost shocking. Here, in twenty-five verses, is the claim that the whole universe has been bending toward: the God who called Abraham, who made David a king, who sent his people into exile and promised to bring them home, has now come himself. Not through a great leader or a powerful prophet, not through military conquest or political revolution, but through a young woman in an obscure village, through a carpenter&rsquo;s obedient act of naming, through the overshadowing of the Holy Spirit &mdash; God has arrived. Immanuel. God with us. The name that was once a sign in a political crisis has become, in the fullness of time, a description of a person. And that person, Matthew tells us, has come to save his people from their sins.",
    ],
  },
];

const videoItems = [
  { videoId: "DPNKK2Xv89A", title: "Matthew 1 &mdash; The Genealogy of Jesus Explained" },
  { videoId: "QL8gOXJ1D40", title: "The Virgin Birth &mdash; What Does Matthew 1 Teach?" },
  { videoId: "3FRxvKFKNd8", title: "Immanuel: God With Us &mdash; Isaiah 7 and Matthew 1" },
  { videoId: "pPGPU7r8Yik", title: "Joseph&rsquo;s Dream and the Fulfillment of Prophecy" },
];

export default function Matthew1GuidePage() {
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
            Matthew 1 &mdash; Genealogy, Virgin Birth &amp; Immanuel
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            The opening chapter of Matthew&rsquo;s Gospel announces Jesus as the Son of David and the Son of Abraham, traces the scarlet thread of grace through five unlikely women, narrates Joseph&rsquo;s dream and the virgin birth, and fulfills Isaiah&rsquo;s great prophecy: &ldquo;Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel&rdquo; &mdash; God with us.
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

        <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {videoItems.map((v) => (
            <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId={v.videoId} title={v.title} />
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }} dangerouslySetInnerHTML={{ __html: v.title }} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ACCENT}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>God With Us &mdash; The Promise of Immanuel</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Matthew 1 compresses the entire sweep of Israel&rsquo;s story &mdash; from Abraham&rsquo;s call to David&rsquo;s throne to the exile and beyond &mdash; into a single genealogy that ends at the manger. The God who spoke to the patriarchs, who sustained the line of David through centuries of uncertainty, who promised through Isaiah that he himself would come and be with his people, has kept every word. In Jesus, Immanuel, the covenant God of Israel has arrived &mdash; not merely near his people but among them, as one of them, to save them from their sins.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Theme</div>
            <div style={{ color: TEXT, fontWeight: 600, marginBottom: 6 }}>The Scarlet Thread</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              From Tamar&rsquo;s risk to Rahab&rsquo;s faith, from Ruth&rsquo;s loyalty to Bathsheba&rsquo;s grief, from Mary&rsquo;s obedience to Joseph&rsquo;s trust &mdash; God weaves the scarlet thread of redemption through the most unexpected human stories.
            </p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Theme</div>
            <div style={{ color: TEXT, fontWeight: 600, marginBottom: 6 }}>Son of David</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              God promised David an eternal throne. Matthew traces every link in the chain from David to Jesus, showing that the Davidic promise, though it passed through exile, survived &mdash; and has arrived at its appointed King.
            </p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ACCENT, fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Key Theme</div>
            <div style={{ color: TEXT, fontWeight: 600, marginBottom: 6 }}>Salvation from Sin</div>
            <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              The angel&rsquo;s word to Joseph names Jesus&rsquo; mission: &ldquo;he will save his people from their sins.&rdquo; Before a single parable is told or miracle performed, Matthew announces the deepest purpose of Christ&rsquo;s coming.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.15rem" }}>The Five Women of the Genealogy</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem" }}>
              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 4 }}>Tamar (Matthew 1:3)</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Disguised herself as a prostitute to obtain from Judah the offspring he had unjustly withheld from her. Through this act of desperate courage, she became the mother of Perez &mdash; the branch through which the Messianic line would eventually run. Judah himself declared: &ldquo;She is more righteous than I&rdquo; (Genesis 38:26).</p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem" }}>
              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 4 }}>Rahab (Matthew 1:5)</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>A Canaanite prostitute in Jericho who hid Israel&rsquo;s spies and confessed faith in the God of Israel: &ldquo;The Lord your God, he is God in the heavens above and on the earth beneath&rdquo; (Joshua 2:11). Her scarlet cord became a sign of salvation. She married into Israel and became the mother of Boaz.</p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem" }}>
              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 4 }}>Ruth (Matthew 1:5)</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>A Moabite widow who pledged loyalty to her Israelite mother-in-law with words that have echoed through centuries: &ldquo;Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God&rdquo; (Ruth 1:16). Her faithfulness was rewarded with a kinsman-redeemer, Boaz &mdash; and a place in the Messianic line.</p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem" }}>
              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 4 }}>Bathsheba &mdash; &ldquo;the wife of Uriah&rdquo; (Matthew 1:6)</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>Matthew deliberately refuses to name her, reminding the reader instead of her first husband Uriah, whom David had killed. The union between David and Bathsheba began in sin; their first child died under divine judgment. Yet from them came Solomon, and through Solomon the line continued. Grace operates through human failure without excusing it.</p>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem" }}>
              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 4 }}>Mary (Matthew 1:16)</div>
              <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0 }}>The culminating figure, whose story the second half of the chapter tells. Like the women before her, she stands at a socially and morally precarious moment &mdash; pregnant before marriage, in a culture where this was deeply shameful. Unlike those before her, her situation is not the product of human failure but of divine initiative. She is the vessel through which God himself enters history.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.15rem" }}>Three Epochs &mdash; The Shape of Redemption History</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <div style={{ color: ACCENT, fontSize: 28, fontWeight: 800, marginBottom: 4 }}>14</div>
              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 6 }}>Abraham to David</div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>From the patriarch of faith to the warrior-poet king. The era of promise maturing into covenant monarchy. God calling a people to himself and establishing them in the land.</p>
            </div>
            <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <div style={{ color: ACCENT, fontSize: 28, fontWeight: 800, marginBottom: 4 }}>14</div>
              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 6 }}>David to the Exile</div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>From the heights of Solomon&rsquo;s glory to the destruction of Jerusalem and the Babylonian deportation. The era of the kingdom&rsquo;s tragic unraveling through unfaithfulness.</p>
            </div>
            <div style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <div style={{ color: ACCENT, fontSize: 28, fontWeight: 800, marginBottom: 4 }}>14</div>
              <div style={{ color: TEXT, fontWeight: 600, marginBottom: 6 }}>Exile to the Messiah</div>
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0 }}>From the darkness of captivity to the dawning of the One who ends all exile. The era of patient waiting, and at its close the arrival of Immanuel &mdash; God with us.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
