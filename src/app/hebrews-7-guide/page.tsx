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
const TEAL = "#0D9488";

export default function Hebrews7GuidePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  useEffect(() => { setLoaded(true); }, []);
  if (!loaded) return null;

  const videoItems = [
    { videoId: "mC-zw0zCCtg", title: "Hebrews Overview -- The Bible Project" },
    { videoId: "3Dv4-n6OYGI", title: "Christ Our High Priest in the Order of Melchizedek" },
    { videoId: "kfcVPh2VDhQ", title: "The New Covenant and the Better Priesthood" },
    { videoId: "jH_aojNJM3E", title: "Hebrews 7 Verse by Verse -- Deep Study" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "themes", label: "Key Themes" },
    { id: "versebyverse", label: "Verse by Verse" },
    { id: "application", label: "Application" },
  ];

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, #0d0d1f 0%, #0a1020 60%, ${BG} 100%)`, borderBottom: `1px solid ${BORDER}`, padding: "48px 20px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: `${GOLD}18`, border: `1px solid ${GOLD}40`, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Hebrews 7 &mdash; Deep Study Guide
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, color: TEXT }}>
            The Priesthood of Melchizedek
          </h1>
          <p style={{ color: MUTED, fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: 680, margin: "0 auto 24px", lineHeight: 1.75 }}>
            Hebrews 7 presents the most sustained argument in the New Testament for the supremacy of Jesus as High Priest &mdash; rooted in a single obscure figure from Genesis 14 whose priesthood predates and surpasses the entire Levitical system.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              { label: "Hebrews 7:1-28", color: GOLD },
              { label: "Order of Melchizedek", color: GREEN },
              { label: "Eternal High Priest", color: PURPLE },
              { label: "Better Covenant", color: TEAL },
            ].map((badge) => (
              <span key={badge.label} style={{ background: `${badge.color}14`, border: `1px solid ${badge.color}30`, color: badge.color, borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 600 }}>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD, position: "sticky", top: "var(--header-height, 80px)", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", overflowX: "auto", gap: 0 }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "14px 22px",
                border: "none",
                background: "transparent",
                color: activeTab === tab.id ? GREEN : MUTED,
                fontWeight: activeTab === tab.id ? 700 : 400,
                fontSize: 14,
                cursor: "pointer",
                borderBottom: activeTab === tab.id ? `2px solid ${GREEN}` : "2px solid transparent",
                whiteSpace: "nowrap",
                transition: "color 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 20px 60px" }}>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Intro card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 28px", marginBottom: 24 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: 14 }}>What Is Hebrews 7 About?</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "Hebrews 7 is the theological heart of the entire letter. The author has introduced Melchizedek twice already (5:6, 10 and 6:20) but has held back the full argument for this chapter. Now he unleashes it: the Levitical priesthood &mdash; the very system that stood at the center of Israel's worship life for over a thousand years &mdash; was always provisional. It pointed forward to something better. That something better is Jesus, appointed by God's own oath as an eternal priest in the order of Melchizedek." }}
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: 14, fontSize: 15 }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: "The argument is astonishing: because Jesus is in the order of Melchizedek rather than the order of Aaron, he belongs to a priesthood that is not defined by lineage, not limited by mortality, not dependent on daily or annual sacrifice, and not established by the law of a commandment but by the power of an indestructible life. His priesthood is permanent. His sacrifice is final. His intercession is continuous. And the covenant he mediates is, in every respect, better." }}
                style={{ color: MUTED, lineHeight: 1.85, fontSize: 15 }}
              />
            </div>

            {/* Fast facts grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 24 }}>
              {[
                { label: "Book", value: "Hebrews" },
                { label: "Chapter", value: "7 (all 28 verses)" },
                { label: "OT Background", value: "Genesis 14; Psalm 110" },
                { label: "Key Verse", value: "Hebrews 7:25" },
                { label: "Central Figure", value: "Melchizedek / Jesus" },
                { label: "Core Argument", value: "Permanent priesthood" },
              ].map((fact) => (
                <div key={fact.label} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 4 }}>{fact.label}</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: 14 }}>{fact.value}</div>
                </div>
              ))}
            </div>

            {/* Context card */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
              <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.2rem", marginBottom: 14 }}>Why Melchizedek?</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "Melchizedek appears only twice in the entire Old Testament &mdash; two brief passages &mdash; yet the author of Hebrews builds the entire christological architecture of chapter 7 on these texts. Genesis 14:18-20 introduces him as king of Salem and priest of God Most High, who brings bread and wine to Abraham returning from battle, blesses Abraham, and receives a tithe from him. Then Psalm 110:4 &mdash; a royal psalm applied to the Messiah throughout the New Testament &mdash; declares: &ldquo;The Lord has sworn and will not change his mind: you are a priest forever, in the order of Melchizedek.&rdquo;" }}
                style={{ color: MUTED, lineHeight: 1.85, marginBottom: 14, fontSize: 15 }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: "The theological significance is explosive. Aaron and his descendants were priests by birth, by genealogy, by the law of Moses. But Psalm 110:4 predicts a priest of a completely different order &mdash; one installed not by ancestry but by divine oath, not for a lifetime but forever. The author of Hebrews sees this prophecy as pointing to Jesus, the ultimate priest-king who combines what Israel had always kept separate: royalty (from Judah) and priesthood (from Levi). Melchizedek is the ancient precedent that makes this combination possible." }}
                style={{ color: MUTED, lineHeight: 1.85, fontSize: 15 }}
              />
            </div>

            {/* Structure outline */}
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px" }}>
              <h2 style={{ color: PURPLE, fontWeight: 800, fontSize: "1.2rem", marginBottom: 16 }}>Chapter Structure at a Glance</h2>
              {[
                { ref: "vv. 1-3", title: "Melchizedek Introduced", summary: "King of righteousness, king of peace; without genealogy, without beginning or end of days -- type of the eternal priest." },
                { ref: "vv. 4-10", title: "Melchizedek Greater Than Abraham and Levi", summary: "Abraham (and Levi in his loins) paid tithes to Melchizedek. The lesser is blessed by the greater. Levi himself was tithed through Abraham." },
                { ref: "vv. 11-19", title: "The Levitical Priesthood Was Insufficient", summary: "If perfection had come through the Levitical priesthood, why did Psalm 110 predict a priest of a different order? The old priesthood and old law gave way to a better hope." },
                { ref: "vv. 20-22", title: "Sworn in by God's Oath", summary: "The Aaronic priests were appointed without an oath; Jesus was appointed with God's sworn oath -- making him the guarantor of a better covenant." },
                { ref: "vv. 23-25", title: "Permanent Priesthood, Perpetual Intercession", summary: "The Levitical priests were many because death prevented continuity. Jesus holds his priesthood permanently and always lives to intercede for those who come to God through him." },
                { ref: "vv. 26-28", title: "The Perfect Son", summary: "Such a high priest perfectly fits our need: holy, innocent, unstained, separated from sinners, exalted above the heavens -- who offered himself once for all." },
              ].map((sec, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 18, alignItems: "flex-start" }}>
                  <div style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}40`, color: GOLD, borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap", marginTop: 2, flexShrink: 0 }}>
                    {sec.ref}
                  </div>
                  <div>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{sec.title}</div>
                    <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.7 }}>{sec.summary}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Themes Tab */}
        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: 8 }}>The Major Themes of Hebrews 7</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "Seven distinct theological rivers flow through Hebrews 7 and empty into a single ocean: the absolute sufficiency of Jesus Christ as our great High Priest. These themes are not abstract doctrines; they are pastoral assurances aimed at believers under pressure to abandon their confidence in Christ." }}
                style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }}
              />
            </div>

            {[
              {
                color: GOLD,
                number: "01",
                title: "Melchizedek: King of Righteousness and King of Peace",
                icon: "crown",
                content: "The very name &ldquo;Melchizedek&rdquo; (Hebrew: melek-tzedeq) means &ldquo;king of righteousness.&rdquo; He is also king of Salem, which the author interprets as &ldquo;king of peace&rdquo; (shalom). The author is not engaging in a fanciful word-game; he is drawing out the typological significance of a figure who combines in his person and title what the entire Old Testament held out as the hope of the coming Messiah: righteous rule and genuine peace. Isaiah 9:6-7 predicts a Prince of Peace who will reign on David&rsquo;s throne with justice and righteousness. Jeremiah 23:5-6 predicts a righteous Branch who will be called &ldquo;The Lord Our Righteous Savior.&rdquo; Melchizedek, with his combined name and title, is a living emblem of these promises &mdash; a shadow that finds its substance in Jesus, the one who is simultaneously our righteousness (1 Corinthians 1:30) and our peace (Ephesians 2:14).",
              },
              {
                color: GREEN,
                number: "02",
                title: "The Greatness of Melchizedek Over Abraham and Levi",
                icon: "scale",
                content: "The argument of verses 4-10 depends on a principle that the author&rsquo;s Jewish audience would have recognized: the one who receives tithes is greater than the one who pays them, and the one who blesses is greater than the one who is blessed. Abraham &mdash; the father of the covenant, the friend of God, the one to whom the promises were made &mdash; paid tithes to Melchizedek and received his blessing. This is staggering: Abraham is not the top of the hierarchy. There is a priest who stands above even Abraham. And the argument goes deeper: Levi was not yet born when Abraham paid that tithe &mdash; he was, as the author puts it, &ldquo;in the loins of his ancestor&rdquo; (v. 10). Therefore, in a representative sense, the entire Levitical priesthood itself paid tithes to Melchizedek through Abraham. The Levitical system, impressive as it is, knelt before the Melchizedekian order before it ever existed. The Aaronic priests were already subordinate to the greater priest whom they prefigured.",
              },
              {
                color: PURPLE,
                number: "03",
                title: "The Insufficiency of the Levitical Priesthood",
                icon: "law",
                content: "Verses 11-19 ask a sharp question: if the Levitical priesthood had achieved perfection &mdash; if it had actually accomplished the end toward which it pointed, the full restoration of access between God and humanity &mdash; why would God need to predict a priest of a completely different order? The very existence of Psalm 110:4 proves that the Levitical system was provisional. It was a placeholder, a temporary scaffolding, a shadow. And the author presses the logic further: when the priesthood changes, the law changes with it (vv. 12-14). The new priest is from Judah, a tribe that Moses said nothing about in connection with the altar. The old commandment &mdash; the law governing the Levitical system &mdash; is set aside because of its weakness and uselessness, &ldquo;for the law made nothing perfect.&rdquo; In its place comes a better hope through which we draw near to God. The old system was not evil; it was insufficient. It could regulate behavior, prescribe ritual, and point forward, but it could not accomplish the inner transformation and permanent access that only the superior priest could provide.",
              },
              {
                color: TEAL,
                number: "04",
                title: "Appointed by God's Inviolable Oath",
                icon: "oath",
                content: "One of the most legally significant arguments in chapter 7 concerns the manner of appointment. The Levitical priests were appointed without an oath &mdash; they entered their office by virtue of their lineage in the tribe of Levi and family of Aaron, by the operation of the Mosaic law. But when God appointed Jesus to the Melchizedekian priesthood, he swore an oath: &ldquo;The Lord has sworn and will not change his mind: you are a priest forever&rdquo; (Psalm 110:4, quoted in v. 21). For the author of Hebrews, this distinction is enormous. In human legal practice, an oath is the final form of confirmation &mdash; the strongest possible guarantee of reliability. If the Levitical priesthood was established by law, Jesus&rsquo;s priesthood is established by God&rsquo;s own sworn commitment. The oath makes him &ldquo;the guarantor of a better covenant&rdquo; (v. 22). A guarantor is one who personally underwrites a promise &mdash; who makes themselves liable for its fulfillment. Jesus does not merely announce the better covenant; he personally guarantees it with himself.",
              },
              {
                color: GOLD,
                number: "05",
                title: "The Permanent Priesthood and Perpetual Intercession",
                icon: "intercession",
                content: "Verses 23-25 deliver one of the most profound consolations in the New Testament. The Levitical priests were many &mdash; not because they all served simultaneously but because each one died. Death imposed a limit on their ministry. Every high priest was, in a sense, an interim appointment. But Jesus &ldquo;holds his priesthood permanently, because he continues forever&rdquo; (v. 24). His resurrection has placed him beyond the reach of death; therefore his priesthood has no end and requires no successor. The pastoral consequence is staggering: &ldquo;he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them&rdquo; (v. 25). &ldquo;To the uttermost&rdquo; (panteles) means completely, totally, to the end &mdash; both in degree and in duration. His saving work is total; his intercession is perpetual. Right now, the risen Jesus is before the Father as our advocate, our representative, the one whose sacrifice speaks on our behalf (cf. 1 John 2:1). No petition goes without a priest. No believer approaches God unrepresented.",
              },
              {
                color: GREEN,
                number: "06",
                title: "The Perfectly Fitting High Priest",
                icon: "perfect",
                content: "The chapter closes (vv. 26-28) with a portrait of exactly the kind of high priest we need &mdash; and the extraordinary claim that Jesus fits the description perfectly. &ldquo;For it was indeed fitting that we should have such a high priest, holy, innocent, unstained, separated from sinners, and exalted above the heavens.&rdquo; The Levitical high priest had to offer sacrifices first for his own sins and then for the people&rsquo;s (a procedure that underscored his own imperfection). Jesus needed no such self-sacrifice. He offered himself &mdash; once, not repeatedly &mdash; and that single offering was permanently sufficient. The law appointed priests in their weakness; the oath appointed a Son who has been made perfect forever. Every quality our situation demands, Jesus possesses: moral purity to represent us before a holy God, sinlessness to offer a sacrifice that actually atones, exaltation to a position from which he can actually intercede, and permanence to guarantee that his ministry will never be interrupted.",
              },
              {
                color: PURPLE,
                number: "07",
                title: "The Better Covenant and Better Hope",
                icon: "covenant",
                content: "Threaded through Hebrews 7 is the language of comparison: better priesthood (implied in vv. 7, 11), better hope (v. 19), better covenant (v. 22). The word &ldquo;better&rdquo; (kreitton) appears 13 times across the entire letter of Hebrews and functions as its central argument. In chapter 7 specifically, the comparison is between a priesthood that could not achieve perfection and one that can; between a law that has been set aside and a hope through which we actually draw near to God; between an appointment by statute and an appointment by oath. The &ldquo;better covenant&rdquo; of verse 22 will be developed at length in chapter 8, where Jeremiah 31:31-34 is quoted in full. But here it is already introduced: the covenant that Jesus guarantees is better because the priest who establishes it is incomparably better. The quality of the covenant depends on the quality of the mediator, and the mediator of this covenant is the eternal Son of God who &ldquo;always lives to make intercession.&rdquo;",
              },
            ].map((theme) => (
              <div key={theme.number} style={{ background: CARD, border: `1px solid ${theme.color}28`, borderRadius: 14, padding: "24px 28px", marginBottom: 16, borderLeft: `4px solid ${theme.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ color: theme.color, fontWeight: 900, fontSize: 11, letterSpacing: 1, opacity: 0.7 }}>{theme.number}</span>
                  <h3 style={{ color: theme.color, fontWeight: 800, fontSize: "1.05rem", margin: 0 }}>{theme.title}</h3>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: theme.content }}
                  style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, margin: 0 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Verse by Verse Tab */}
        {activeTab === "versebyverse" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: 8 }}>Verse by Verse Through Hebrews 7</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "A close reading of all 28 verses, divided into six sections following the natural flow of the author&rsquo;s argument. Each section builds the cumulative case that Jesus is the supreme and sufficient High Priest whose priesthood renders all other priesthoods obsolete." }}
                style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }}
              />
            </div>

            {[
              {
                ref: "Hebrews 7:1-3",
                title: "Melchizedek Introduced",
                accentColor: GOLD,
                verse: "&ldquo;For this Melchizedek, king of Salem, priest of the Most High God, met Abraham returning from the slaughter of the kings and blessed him, and to him Abraham apportioned a tenth part of everything. He is first, by translation of his name, king of righteousness, and then he is also king of Salem, that is, king of peace. He is without father or mother or genealogy, having neither beginning of days nor end of life, but resembling the Son of God he continues a priest forever.&rdquo;",
                commentary: "The author opens by identifying Melchizedek as simultaneously a king and a priest &mdash; a combination impossible in the Levitical system, where the functions were strictly separated. His name is interpreted (the author uses the Greek word methermeneumenos, &ldquo;translated&rdquo;) as a two-part prophetic description: king of righteousness (melek-tzedeq), then king of peace (melek-salem). These are not biographical accidents; they are theological titles that point forward to the Messiah. The most striking feature is the argument from silence in verse 3: Genesis gives no record of Melchizedek&rsquo;s parents, his birth, or his death. For the author of Hebrews, this is not a gap in the historical record &mdash; it is a typological design. In the Scriptures, what is not said is as significant as what is said. The silence of the text creates a figure who, in narrative terms, has no beginning and no end. He therefore &ldquo;resembles&rdquo; (aphomoiomenos &mdash; made to look like, a typological correspondence, not identity) the Son of God, who genuinely has no beginning and no end. Melchizedek is the type; Jesus is the antitype.",
              },
              {
                ref: "Hebrews 7:4-10",
                title: "Melchizedek Greater Than Abraham and Levi",
                accentColor: GREEN,
                verse: "&ldquo;See how great this man was to whom Abraham the patriarch gave a tenth of the spoils! And those descendants of Levi who receive the priestly office have a commandment in the law to take tithes from the people, that is, from their brothers, though these also are descended from Abraham. But this man who does not have his descent from them received tithes from Abraham and blessed him who had the promises.&rdquo;",
                commentary: "The rhetorical force of verse 4 is immediate: &ldquo;See how great this man was&rdquo; &mdash; the author is pointing the reader to something that should take their breath away. Abraham is not a minor figure. He is &ldquo;the patriarch&rdquo; (ho patriarches), the fountainhead of the Jewish people and the recipient of God&rsquo;s foundational covenant promises. For him to pay tithes and receive a blessing from someone who is not even in his lineage establishes a hierarchy that cuts across every natural assumption. The Levitical priests collected tithes by virtue of the Mosaic law &mdash; they had a commandment (entole) requiring it. Their right to tithes was legal. Melchizedek received tithes from Abraham not by any law but by Abraham&rsquo;s own free act of recognition of his greatness. The principle of verse 7 is carefully stated: &ldquo;it is beyond dispute that the inferior is blessed by the superior.&rdquo; Melchizedek blessed Abraham; therefore Melchizedek is the greater. And since Levi was, in a biological and covenantal sense, already contained within Abraham at this moment (&ldquo;still in the loins of his ancestor,&rdquo; v. 10), the Levitical priesthood itself was present, representatively, when Abraham bowed before Melchizedek. The entire Aaronic order, the author argues, already acknowledged its own subordination to the Melchizedekian order in this one ancient moment.",
              },
              {
                ref: "Hebrews 7:11-19",
                title: "The Levitical Priesthood Was Insufficient",
                accentColor: TEAL,
                verse: "&ldquo;Now if perfection had been attainable through the Levitical priesthood (for under it the people received the law), what further need would there have been for another priest to arise after the order of Melchizedek, rather than one named after the order of Aaron? For when there is a change in the priesthood, there is necessarily a change in the law as well.&rdquo;",
                commentary: "The argument of verses 11-19 pivots on a single logical insight: the existence of Psalm 110:4 is proof that the Levitical priesthood did not deliver what it promised. If perfection &mdash; the telos, the goal, the full and final accomplishment of what the whole sacrificial system aimed at &mdash; had been achievable through Aaron&rsquo;s priesthood, there would have been no need for God to predict another priest of a different order. The fact that he did predict one means the first system was, by design, incomplete. But the author pushes further: changing the priesthood also changes the law (v. 12). This is a crucial connection. The Levitical priesthood was not separable from the Mosaic law; they were an integrated system. The laws about sacrifices, clean and unclean, atonement procedures, and access to the sanctuary were all organized around the Aaronic priesthood. If the priesthood is superseded, the entire legal framework that governed access to God through that priesthood is also superseded. The new priest (Jesus, from Judah, v. 14) represents a category change, not merely a personnel change. The old commandment is &ldquo;set aside&rdquo; (athetesis, annulled) because of its weakness and uselessness &mdash; not because it was morally deficient but because it was functionally unable to achieve the inner transformation and permanent access that constitute the &ldquo;perfection&rdquo; the system promised. In its place: a better hope (kreitton elpis) through which &ldquo;we draw near to God&rdquo; &mdash; the direct access that the entire old covenant was designed to eventually make possible.",
              },
              {
                ref: "Hebrews 7:20-22",
                title: "Jesus Sworn in by God&rsquo;s Oath &mdash; Guarantor of a Better Covenant",
                accentColor: PURPLE,
                verse: "&ldquo;And it was not without an oath. For those priests were made without an oath, but this one was made a priest with an oath by the one who said to him: &lsquo;The Lord has sworn and will not change his mind, You are a priest forever.&rsquo; This makes Jesus the guarantor of a better covenant.&rdquo;",
                commentary: "Verses 20-22 introduce one of the most legally specific arguments in Hebrews. The Levitical priests were appointed by the operation of the Torah &mdash; by the provisions of the Mosaic law governing the tribe of Levi and the family of Aaron. There was no divine oath accompanying their installation. They served by legal statute. But Jesus was appointed by a divine sworn oath &mdash; Psalm 110:4: &ldquo;The Lord has sworn and will not change his mind.&rdquo; The phrase &ldquo;will not change his mind&rdquo; (ou metamelethEsetai) is emphatic: God has made an irrevocable commitment. This oath is the foundation for the title &ldquo;guarantor&rdquo; (engyos) in verse 22 &mdash; a word that appears only here in the entire New Testament. An engyos in Greek legal usage is a personal surety, someone who pledges their own person as the guarantee that an obligation will be fulfilled. Jesus is not merely the mediator of the new covenant in the sense of standing between two parties and negotiating terms. He is the guarantor &mdash; the one who personally underwrites the covenant, who stakes himself on its fulfillment. The new covenant&rsquo;s reliability is as certain as the word of God and the life of his eternal Son.",
              },
              {
                ref: "Hebrews 7:23-25",
                title: "Permanent Priesthood, Perpetual Intercession",
                accentColor: GREEN,
                verse: "&ldquo;The former priests were many in number, because they were prevented by death from continuing in office, but he holds his priesthood permanently, because he continues forever. Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.&rdquo;",
                commentary: "The contrast in verses 23-24 is stark. The Levitical high priesthood required a succession of incumbents because each one died. Jewish tradition records approximately eighty-three high priests from Aaron to the destruction of the temple in AD 70 &mdash; a long succession of mortal men, each of whom could only hold the office temporarily. Every new high priest was, in a sense, a fresh start, an acknowledgment that the previous incumbent&rsquo;s ministry was finished. Jesus, by contrast, holds his priesthood aparabaton &mdash; a legal technical term meaning &ldquo;inviolable,&rdquo; &ldquo;that which does not pass to another.&rdquo; His priesthood does not transfer. It does not end. Death, the great interrupter of every human ministry, has no power over him because he has passed through death and come out the other side as the Firstborn from the dead (Colossians 1:18). The consequence of this permanence is the stunning promise of verse 25: he is able to save &ldquo;to the uttermost&rdquo; (eis to panteles &mdash; completely, fully, forever) those who approach God through him. The ground of this complete salvation is the present tense activity of Christ: &ldquo;he always lives to make intercession for them.&rdquo; This is not historical &mdash; it is present and perpetual. The ascended, glorified Jesus is, at this moment and every moment, before the Father as our High Priest, our Advocate, our living representative. Romans 8:34 and 1 John 2:1 echo the same reality. The Christian approaching God approaches not alone but through a permanently living, permanently interceding priest whose ministry on their behalf will never cease.",
              },
              {
                ref: "Hebrews 7:26-28",
                title: "The Perfect Son: Holy, Innocent, Unstained",
                accentColor: GOLD,
                verse: "&ldquo;For it was indeed fitting that we should have such a high priest, holy, innocent, unstained, separated from sinners, and exalted above the heavens. He has no need, like those high priests, to offer sacrifices daily, first for his own sins and then for those of the people, since he did this once for all when he offered up himself. For the law appoints men in their weakness as high priests, but the word of the oath, which came later than the law, appoints a Son who has been made perfect forever.&rdquo;",
                commentary: "The chapter closes with a five-fold description of Jesus that functions as a portrait of the ideally fitted High Priest: holy (hosios &mdash; devoutly consecrated), innocent (akakos &mdash; without moral defect), unstained (amiantos &mdash; undefiled, unpolluted), separated from sinners (not in terms of distance from people but in terms of moral standing), and exalted above the heavens (occupying the position of supreme authority at God&rsquo;s right hand). This description is theologically significant precisely because it establishes the qualitative difference between Jesus and every Levitical predecessor. The Levitical high priest, however carefully chosen and ritually prepared, was himself a sinner. The Day of Atonement liturgy in Leviticus 16 begins with the high priest making atonement for himself and his household (Leviticus 16:6) before he could make atonement for the people. The very structure of the ritual inscribed the priest&rsquo;s own sinfulness into the procedure. Jesus requires no such self-offering. He is without sin (4:15; 2 Corinthians 5:21; 1 Peter 2:22) and therefore his offering is entirely on behalf of others. His one self-offering accomplishes what the endless repetition of animal sacrifice could never achieve. The word &ldquo;once for all&rdquo; (ephapax) &mdash; a word Hebrews returns to repeatedly (9:12; 9:26; 9:28; 10:10) &mdash; is the cry of a finished work. The law appointed priests &ldquo;in their weakness&rdquo; (ex astheneias &mdash; out of weakness, with weakness as their defining condition). The oath appointed a Son who has been made perfect forever &mdash; not improved to perfection but constituted in perfection through his incarnation, suffering, and resurrection (cf. 2:10; 5:8-9). The contrast could not be more complete.",
              },
            ].map((section, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${section.accentColor}28`, borderRadius: 14, padding: "24px 28px", marginBottom: 20, borderLeft: `4px solid ${section.accentColor}` }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "baseline", marginBottom: 12 }}>
                  <span style={{ background: `${section.accentColor}18`, color: section.accentColor, border: `1px solid ${section.accentColor}40`, borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                    {section.ref}
                  </span>
                  <h3 style={{ color: section.accentColor, fontWeight: 800, fontSize: "1.05rem", margin: 0 }}>{section.title}</h3>
                </div>
                <blockquote style={{ margin: "0 0 16px", padding: "12px 16px", background: `${section.accentColor}08`, borderRadius: 8, borderLeft: `2px solid ${section.accentColor}40` }}>
                  <p
                    dangerouslySetInnerHTML={{ __html: section.verse }}
                    style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, fontStyle: "italic", margin: 0 }}
                  />
                </blockquote>
                <p
                  dangerouslySetInnerHTML={{ __html: section.commentary }}
                  style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, margin: 0 }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Application Tab */}
        {activeTab === "application" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "24px 28px", marginBottom: 20 }}>
              <h2 style={{ color: GOLD, fontWeight: 800, fontSize: "1.3rem", marginBottom: 8 }}>Living Hebrews 7 Today</h2>
              <p
                dangerouslySetInnerHTML={{ __html: "Hebrews 7 is not a theological curiosity about ancient Jewish priesthood. It is a pastoral document aimed at real people in real pressure, written to transform the way they relate to God every day. The theological argument about Melchizedek has direct practical implications for how Christians pray, how they face guilt, how they relate to religious intermediaries, and how they sustain their faith under pressure." }}
                style={{ color: MUTED, lineHeight: 1.8, fontSize: 14 }}
              />
            </div>

            {[
              {
                color: GREEN,
                title: "Approach God with Confidence &mdash; Not Nervousness",
                icon: "boldness",
                text: "One of the primary pastoral purposes of Hebrews 7 is to give Jewish Christians confidence to approach God directly through Jesus. Many of them had grown up in a system that carefully regulated access to God through priests, sacrifices, and ritual purity. Their deep instinct was that approaching God required elaborate preparation and mediation. Hebrews 7 demolishes the anxiety behind that instinct: you have a High Priest who &ldquo;always lives to make intercession for you&rdquo; (v. 25) and who is &ldquo;able to save to the uttermost&rdquo; those who come through him. The invitation is to come &mdash; not hesitantly, not after sufficient preparation, not through any human intermediary, but directly, through the veil that Christ&rsquo;s own body has opened (10:20). If you are in Christ, you are never approaching God unrepresented. Jesus is your standing advocate before the Father, and his mediation is perpetual.",
                question: "When you pray, do you approach God with genuine confidence, or do you feel like you need to make yourself sufficiently worthy first? What would it look like to pray as someone whose High Priest &ldquo;always lives to intercede&rdquo; for you?",
              },
              {
                color: PURPLE,
                title: "The Sufficiency of Christ&rsquo;s One Sacrifice",
                icon: "once-for-all",
                text: "Hebrews 7:27 introduces the word ephapax &mdash; &ldquo;once for all&rdquo; &mdash; that will reverberate through chapters 9 and 10. Jesus offered himself once. Not once to begin a process that continues in some other form. Not once as the first of an ongoing series of sacrifices. Once, completely, permanently, decisively. This has an enormous practical implication: there is nothing left to add to your atonement. No penance, no ongoing sacrifice, no human priestly intervention can supplement what Christ has accomplished. His sacrifice is not the beginning of the atonement process &mdash; it is the entirety of it. This should produce in the Christian a settled sense of debt paid in full. Guilt that has been confessed is guilt that has been covered by the one sacrifice that actually achieves what it promises. The Levitical sacrifices could cleanse externally and temporarily; Christ&rsquo;s sacrifice cleanses the conscience itself (9:14) and does so once for all time.",
                question: "Are there areas of sin or failure in your life for which you still feel that Christ&rsquo;s sacrifice might not be enough? What would it mean to rest in the &ldquo;once for all&rdquo; of his offering?",
              },
              {
                color: TEAL,
                title: "No Need for Human Priestly Mediators",
                icon: "access",
                text: "Hebrews 7 establishes that Jesus&rsquo;s permanent, perfect priesthood has made all other priestly mediation between God and humanity unnecessary and, implicitly, presumptuous. This is not an argument against church leaders or Christian community &mdash; the letter of Hebrews itself warmly commends respect for leaders (13:7, 17). It is an argument against any system that positions a human being as a necessary mediator standing between the believer and God. The veil has been torn. The path is open. The high priest who stands between you and the Father is Jesus, not any human being. The Reformation recovered this insight under the slogan of the &ldquo;priesthood of all believers&rdquo; (1 Peter 2:5, 9): every Christian has direct access to God through the one priest who has permanently opened the way. To insert a human mediator at the point of ultimate access is to deny the sufficiency of Christ&rsquo;s permanent priesthood.",
                question: "In your spiritual life, are there any human authorities, religious rituals, or spiritual practices that you treat as necessary prerequisites to approaching God? How does Hebrews 7 reorient your understanding of direct access?",
              },
              {
                color: GOLD,
                title: "Rest in Your Permanently Interceding Priest",
                icon: "rest",
                text: "Verse 25 is possibly the most immediately comforting verse in Hebrews: &ldquo;he always lives to make intercession for them.&rdquo; &ldquo;Always&rdquo; &mdash; pantote. Not when you deserve it. Not when your prayer life is strong. Not when you have been faithful that week. Always. At this moment, as you read this, if you have come to God through Jesus, you have a living, permanently active High Priest before the Father whose intercession on your behalf is unceasing. The Christian who struggles to pray has a priest who does not stop praying. The Christian who fails and falls has an advocate (1 John 2:1 &mdash; parakletos) who continues to stand. The Christian who is overwhelmed is not unrepresented. This is not a license for spiritual laziness; it is the foundation for enduring spiritual confidence. You are held by one whose grip on you is guaranteed by his own indestructible life.",
                question: "What would change in your daily experience of prayer and spiritual life if you lived with a constant awareness that Jesus is actively interceding for you right now? How might this anchor you in seasons of spiritual dryness or failure?",
              },
              {
                color: GREEN,
                title: "The Stability of God&rsquo;s Sworn Commitment",
                icon: "oath-stability",
                text: "Verses 20-22 emphasize that Jesus&rsquo;s priesthood rests not on human convention or legal statute but on God&rsquo;s own sworn oath. The Lord said, and will not change his mind, that Jesus is priest forever. This divine oath is the bedrock beneath the believer&rsquo;s confidence. The old system could change because it was built on human institutions and Mosaic law that was always designed to give way to something greater. The new covenant, guaranteed by God&rsquo;s own irreversible oath, does not change. It cannot be repealed. It cannot be superseded. This means that the salvation accomplished by Jesus is as stable and permanent as God&rsquo;s own character. &ldquo;He who promised is faithful&rdquo; (10:23). The pressure to abandon the faith &mdash; whether from intellectual doubt, social cost, or spiritual dryness &mdash; encounters in Hebrews 7 a theological bulwark: the covenant you are in rests on an oath that God himself has sworn and that he will never revoke.",
                question: "When you feel the pressure to doubt or drift, what anchor does the irrevocable oath of God concerning Jesus&rsquo;s priesthood provide for you? How does the permanence of Christ&rsquo;s covenant role stabilize your faith?",
              },
              {
                color: PURPLE,
                title: "Melchizedek as a Pattern of Righteous Rule",
                icon: "righteousness-peace",
                text: "The author&rsquo;s interpretation of Melchizedek&rsquo;s name &mdash; king of righteousness, then king of peace &mdash; is not merely a typological curiosity. It embeds a theological sequence: righteousness comes before peace. Shalom is not the suppression of conflict; it is the fruit of justice. This sequence appears throughout Scripture: Isaiah 32:17 declares that &ldquo;the fruit of righteousness will be peace.&rdquo; The cross is the ultimate expression of this order: Jesus is our righteousness (1 Corinthians 1:30) before he is our peace (Ephesians 2:14). He does not bring peace by pretending sin did not happen &mdash; he brings peace by absorbing its full cost in his own body and thereby establishing the righteousness on which lasting peace can rest. In your own relationships and communities, the Melchizedekian pattern warns against cheap peace &mdash; the peace that suppresses conflict without addressing its underlying injustice. True reconciliation follows the path of truth and justice first, then peace.",
                question: "Where in your life or community are you tempted to pursue a superficial peace that avoids the hard work of righteousness? What would it look like to pursue the Melchizedekian order: righteousness first, then genuine peace?",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${item.color}28`, borderRadius: 14, padding: "24px 28px", marginBottom: 18, borderLeft: `4px solid ${item.color}` }}>
                <h3 style={{ color: item.color, fontWeight: 800, fontSize: "1.05rem", marginBottom: 12 }}>{item.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  style={{ color: MUTED, lineHeight: 1.85, fontSize: 14, marginBottom: 16 }}
                />
                <div style={{ background: `${item.color}0c`, border: `1px solid ${item.color}28`, borderRadius: 8, padding: "12px 16px" }}>
                  <div style={{ color: item.color, fontSize: 11, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6 }}>Reflection Question</div>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.question }}
                    style={{ color: TEXT, fontSize: 13, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}
                  />
                </div>
              </div>
            ))}

            {/* Key verse spotlight */}
            <div style={{ background: `${GOLD}0c`, border: `1px solid ${GOLD}30`, borderRadius: 14, padding: "28px", marginBottom: 20, textAlign: "center" }}>
              <div style={{ color: GOLD, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Key Verse to Memorize</div>
              <blockquote style={{ margin: 0 }}>
                <p
                  dangerouslySetInnerHTML={{ __html: "&ldquo;Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them.&rdquo;" }}
                  style={{ color: TEXT, fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.8, fontStyle: "italic", fontWeight: 500, marginBottom: 10 }}
                />
                <cite style={{ color: GOLD, fontSize: 13, fontWeight: 700 }}>Hebrews 7:25</cite>
              </blockquote>
            </div>
          </div>
        )}

        {/* Video Section -- always visible at bottom of all tabs */}
        <div style={{ marginTop: 40, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px" }}>
          <h2 style={{ color: GREEN, fontWeight: 800, fontSize: "1.3rem", marginBottom: 6 }}>Video Teaching &mdash; Hebrews 7</h2>
          <p
            dangerouslySetInnerHTML={{ __html: "Deepen your study with these video teachings on the Melchizedekian priesthood, the High Priest Christology of Hebrews, and the permanent sufficiency of Christ&rsquo;s sacrifice." }}
            style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 22 }}
          />
          <section style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {videoItems.map((item) => (
              <VideoEmbed key={item.videoId} videoId={item.videoId} title={item.title} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
