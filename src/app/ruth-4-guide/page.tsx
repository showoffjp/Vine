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
  "At the City Gate",
  "The Redemption",
  "Boaz and Ruth",
  "Birth of Obed",
  "Theological Themes",
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
    heading: "Overview of Ruth 4",
    reference: "Ruth 4:1&ndash;22",
    paragraphs: [
      "Ruth 4 is the triumphant resolution of one of the most beautifully crafted stories in the entire Bible. What began with famine, widowhood, and exile in Moab ends in fullness, marriage, and the birth of a son who will be the grandfather of Israel&rsquo;s greatest king. The chapter moves with careful legal precision through a public transaction at the city gate, and then broadens into poetry and genealogy as the narrator reveals that the faithfulness of Boaz and Ruth has been woven into the very fabric of Israel&rsquo;s royal history.",
      "The chapter opens at the city gate &mdash; the ancient Near Eastern equivalent of a courthouse &mdash; where Boaz immediately takes the legal steps necessary to fulfill his role as kinsman-redeemer. There is a closer relative with a prior claim, and Boaz summons him publicly, gathering ten elders as witnesses. The negotiation is conducted with scrupulous attention to legal custom: the right of redemption, the obligation to marry the widow, and the symbolic transfer of the sandal are all observed with care. Boaz does everything according to the proper form, because the goal is an undeniable, publicly witnessed, legally binding transaction.",
      "What drives the narrative forward is not merely legal obligation but love. Boaz has already revealed his character through his extraordinary generosity to Ruth and his care for Naomi. Now he exercises his role as go&rsquo;el &mdash; kinsman-redeemer &mdash; with the same wholehearted commitment. He does not merely fulfill a duty; he redeems eagerly, joyfully, fully. His speech at the gate (4:9&ndash;10) is a public declaration of covenant faithfulness toward both the dead and the living, toward Elimelech&rsquo;s family and toward Ruth herself.",
      "The women of Bethlehem, who had witnessed Naomi&rsquo;s empty return in chapter 1, now celebrate her fullness. Their words over the newborn Obed &mdash; &ldquo;A son has been born to Naomi&rdquo; (4:17) &mdash; echo back to Naomi&rsquo;s bitter cry in chapter 1 that she had gone out full and returned empty. She is no longer empty; she is filled. Ruth, who chose to cling to Naomi and to Naomi&rsquo;s God, has become a greater blessing to her mother-in-law than seven sons. The loyal love of a Moabite widow has been the instrument of God&rsquo;s restoring kindness to a grieving Israelite woman.",
      "The genealogy that closes the chapter (4:18&ndash;22) extends the story&rsquo;s significance far beyond the village of Bethlehem. From Perez to Boaz to Obed to Jesse to David &mdash; the line of descent from Judah&rsquo;s son by Tamar to Israel&rsquo;s greatest king passes directly through this act of redemption. Ruth 4 is not merely the happy ending of a personal story; it is a hinge in the history of redemption. And in the New Testament, Matthew opens his Gospel with a genealogy of Jesus Christ that names both Boaz and Ruth by name, placing this chapter at the very gateway of the story of salvation.",
    ],
  },
  {
    id: "At the City Gate",
    heading: "Boaz at the City Gate",
    reference: "Ruth 4:1&ndash;6",
    paragraphs: [
      "Boaz does not delay. &ldquo;And Boaz went up to the gate and sat down there&rdquo; (4:1) &mdash; the very next morning after his midnight conversation with Ruth on the threshing floor, he is at the city gate executing the legal plan he had already formed. The city gate in the ancient world was not merely an architectural feature; it was the seat of civic life, the place where elders gathered, contracts were witnessed, judgments rendered, and public business transacted. For Boaz to sit there is to say: I am doing this openly, publicly, and legally.",
      "By what the narrator calls a remarkable coincidence &mdash; though the reader who has followed the story knows better &mdash; &ldquo;the redeemer, of whom Boaz had spoken, came by&rdquo; (4:1). Boaz calls to him simply: &ldquo;Turn aside, friend; sit down here&rdquo; (4:1). The Hebrew text preserves a little irony: the man&rsquo;s name is never given; he is referred to throughout as ploni almoni &mdash; &ldquo;so-and-so,&rdquo; an idiomatic Hebrew expression for a person whose name one does not know or does not wish to use. The man who could have been Boaz, who could have had his name remembered in Israel, remains nameless in the text.",
      "Ten elders are summoned to sit as witnesses &mdash; the legally required number for a valid public transaction. The whole scene is carefully constructed to leave no room for future dispute. Boaz then presents the matter in two stages, and the order in which he presents them is both legally careful and narratively brilliant. First he mentions only the land: Naomi is selling the parcel of land that belonged to Elimelech, and the closer kinsman has the right of first redemption. The nearer redeemer immediately agrees: &ldquo;I will redeem it&rdquo; (4:4).",
      "Then Boaz reveals the second part of the package. &ldquo;The day you buy the field from the hand of Naomi, you also acquire Ruth the Moabite, the widow of the dead, in order to perpetuate the name of the dead in his inheritance&rdquo; (4:5). This changes everything for the nearer redeemer. To redeem the land alone would be to acquire an asset; to redeem Ruth along with it is to take on an obligation that would divide the inheritance he intends to pass to his own children. His refusal is immediate and decisive: &ldquo;I cannot redeem it for myself, lest I impair my own inheritance. Take my right of redemption yourself, for I cannot redeem it&rdquo; (4:6).",
      "The nearer redeemer&rsquo;s refusal, while self-interested, is not condemned in the text. He is acting rationally within the existing legal framework; he simply has other priorities. His withdrawal, however, opens the way for the one who has been the central character of the story all along. Boaz has waited, watched, and arranged things so that the moment of refusal becomes the moment of his own opportunity. His love for Ruth has not led him to act dishonestly or to circumvent the law; it has led him to work patiently within it until the legal path was clear.",
    ],
  },
  {
    id: "The Redemption",
    heading: "The Legal Transaction and Sandal Custom",
    reference: "Ruth 4:7&ndash;12",
    paragraphs: [
      "The narrator pauses the story to explain a legal custom that may have been unfamiliar even to some of his original readers: &ldquo;Now this was the custom in former times in Israel concerning redeeming and exchanging: to confirm a transaction, the one drew off his sandal and gave it to the other, and this was the manner of attesting in Israel&rdquo; (4:7). The sandal ceremony was a form of symbolic transfer &mdash; perhaps related to the act of treading the ground one was claiming as one&rsquo;s own. By removing his sandal and giving it to Boaz, the nearer redeemer is publicly, visibly, and irrevocably relinquishing his claim.",
      "This is related to but distinct from the custom in Deuteronomy 25:5&ndash;10, where a woman whose brother-in-law refuses levirate marriage removes his sandal in public shame. Here there is no shame &mdash; the man&rsquo;s refusal is presented without censure &mdash; and it is he himself who removes and transfers the sandal rather than having it removed from him. The custom in Ruth 4 appears to be a general transactional custom, while the Deuteronomy custom is a shaming ritual for a specific refusal. Boaz and the community understand the distinction; the ceremony here is one of willing, public, dignified transfer.",
      "With the sandal transferred, Boaz speaks to the assembled elders and all the people watching at the gate. His declaration is formal and comprehensive: &ldquo;You are witnesses this day that I have bought from the hand of Naomi all that belonged to Elimelech and all that belonged to Chilion and to Mahlon. Also Ruth the Moabite, the widow of Mahlon, I have bought to be my wife, to perpetuate the name of the dead in his inheritance, that the name of the dead may not be cut off from among his brothers and from the gate of his native place. You are witnesses this day&rdquo; (4:9&ndash;10).",
      "The response of the elders and all the people is immediate and warm. They speak a threefold blessing: first, that the Lord would make Ruth like Rachel and Leah, who together built up the house of Israel; second, that Boaz would act worthily in Ephrathah and be renowned in Bethlehem; and third, that his house would be like the house of Perez, whom Tamar bore to Judah (4:11&ndash;12). All three blessings are charged with resonance. Rachel and Leah are the matriarchs through whom the twelve tribes descended. Ephrathah and Bethlehem are the ancestral home of the house that will produce David. And Perez &mdash; the son born through Tamar&rsquo;s bold intervention to preserve the line of Judah &mdash; is the direct ancestor of Boaz himself, named explicitly in the genealogy that will close the chapter.",
      "The invocation of Perez is particularly rich. Tamar, like Ruth, was a woman who stood outside the natural line of Israel&rsquo;s covenant community but was drawn into it through an act of bold covenant faithfulness. Both women were widows; both took risks to preserve the name of the dead; both were acknowledged as more righteous than the men who should have acted first. The community&rsquo;s blessing of Ruth in the words of Tamar&rsquo;s story is a recognition that God has a pattern of working through unlikely women to preserve and advance his purposes for his people. Ruth stands in a noble and surprising lineage.",
    ],
  },
  {
    id: "Boaz and Ruth",
    heading: "Boaz Marries Ruth",
    reference: "Ruth 4:13",
    paragraphs: [
      "The actual marriage of Boaz and Ruth is recorded in a single verse of remarkable economy: &ldquo;So Boaz took Ruth, and she became his wife. And he went in to her, and the Lord gave her conception, and she bore a son&rdquo; (4:13). After three chapters of careful narrative development &mdash; the meeting in the field, the threshing-floor encounter, the suspense of the gate scene &mdash; the marriage itself is narrated in three clauses. This compression is not carelessness; it reflects the narrator&rsquo;s confidence that the reader already knows the significance of what is happening. What needed to be shown in full has been shown; now the story moves forward.",
      "The attribution of Ruth&rsquo;s conception to the Lord is theologically significant. Ruth has been a widow for some years; there is no indication of any pregnancy during her marriage to Mahlon. The conception of a child is presented not as the natural result of the marriage but as a gift of divine grace. The same language appears elsewhere in the biblical narrative when God opens a barren womb: Sarah, Rebekah, Rachel, Hannah. The Lord is not merely the backdrop of this story; he is its agent, working through the faithful choices of Boaz and Ruth to accomplish his purposes. The child who will be born is, in a sense, a gift of God to Naomi, as the women of Bethlehem will recognize.",
      "The marriage of Boaz and Ruth is also the fulfillment of what Naomi had prayed for Ruth and Orpah at the beginning of the story: &ldquo;The Lord grant that you may find rest, each of you in the house of her husband!&rdquo; (1:9). Orpah had returned to Moab and presumably found that rest in the ordinary way. Ruth had followed Naomi into uncertainty and had found rest in the most extraordinary way &mdash; in the house of a man who embodies the loyal love she had shown to Naomi. Her rest is not merely domestic security; it is the rest of a life gathered into the purposes of God, the rest of being fully known and fully chosen by a man who has demonstrated his character throughout the story.",
      "There is also a quiet but significant theological statement in the narrator&rsquo;s description of Boaz as taking Ruth rather than merely accepting her. The initiative in the final legal step was Boaz&rsquo;s from the beginning. He went to the gate; he arranged the meeting; he presented the case; he made the declaration before witnesses. Ruth&rsquo;s bold initiative at the threshing floor did not result in her taking Boaz; it resulted in Boaz taking her &mdash; publicly, legally, joyfully. The complementarity of their actions through the story &mdash; each bold in their own way, each deferential to the other &mdash; reflects a vision of covenant relationship in which both parties act with wholehearted love.",
      "The union of Boaz and Ruth brings together two people from opposite ends of the social spectrum: a prominent, prosperous landowner of Bethlehem and a destitute foreign widow who arrived in the land with nothing but her loyalty to her mother-in-law. Their union is not merely a romantic ending; it is a testimony to the kind of love that sees past social convention and economic calculus to the person, and that acts on what it sees regardless of cost. Boaz had every social reason to limit his generosity to professional kindness; instead he gave himself. Ruth had every prudential reason to return to Moab and find a husband among her own people; instead she gave herself to Naomi and to Naomi&rsquo;s God.",
    ],
  },
  {
    id: "Birth of Obed",
    heading: "The Birth of Obed and the Genealogy",
    reference: "Ruth 4:14&ndash;22",
    paragraphs: [
      "When the son is born, it is the women of Bethlehem who respond first, and their words address Naomi directly: &ldquo;Blessed be the Lord, who has not left you this day without a redeemer, and may his name be renowned in Israel!&rdquo; (4:14). The word &ldquo;redeemer&rdquo; (go&rsquo;el) here refers to the newborn child, not to Boaz, though Boaz has fulfilled the go&rsquo;el function. The child himself will be a redeemer &mdash; one who restores, rescues, and reclaims what was lost. The naming of the child as redeemer before he can do anything links him to a larger theology of divine redemption that the narrator is carefully tracing.",
      "The women then say of Ruth something remarkable: &ldquo;For your daughter-in-law who loves you, who is more to you than seven sons, has given birth to him&rdquo; (4:15). In the ancient world, seven sons represented the fullness of blessing, the complete family, the maximum a woman could hope for. To say that Ruth is more to Naomi than seven sons is to say that her loyal love has exceeded every natural measure of blessing. The foreign widow who chose to leave her homeland has outperformed the idealized version of native Israelite filial devotion. The community recognizes what the narrator has been showing all along: Ruth&rsquo;s hesed &mdash; her loyal, steadfast, covenant love &mdash; is extraordinary.",
      "Naomi takes the child and holds him in her lap, and the women declare, &ldquo;A son has been born to Naomi&rdquo; (4:17). The child is not literally Naomi&rsquo;s son; he is Ruth&rsquo;s son and Boaz&rsquo;s son. But in the economy of the story &mdash; in which Boaz has redeemed Elimelech&rsquo;s line, Ruth has given herself to Naomi&rsquo;s family, and the child will carry forward the name of the dead &mdash; the child belongs to Naomi in the deepest sense. She who went out full and returned empty (1:21) is now full again. She who said &ldquo;call me Mara, for the Almighty has dealt very bitterly with me&rdquo; (1:20) is now surrounded by blessing. The arc of the story from bitterness to fullness is complete.",
      "The child is named Obed, meaning &ldquo;servant&rdquo; or &ldquo;worshiper.&rdquo; His name is given by the women of the neighborhood, who function throughout the story as a kind of Greek chorus &mdash; witnesses, celebrants, interpreters of events. Obed will become the father of Jesse, and Jesse the father of David. This information is given without fanfare in verse 17, and then elaborated in the ten-generation genealogy of verses 18&ndash;22, which runs from Perez (the son of Judah and Tamar) through Boaz and Obed and Jesse to David.",
      "The genealogy is not a dry appendix; it is the theological punchline of the entire book. Every story, every act of hesed, every choice made in faithfulness by Ruth and Boaz has been building toward this: the line of the king. The book of Ruth does not tell us that David&rsquo;s great-grandmother was a Moabite widow as a curiosity; it tells us as a statement of the kind of God who is at work in history. This is a God who works through unlikely people &mdash; foreign women, impoverished widows, midnight conversations on threshing floors &mdash; to accomplish his royal purposes. The genealogy is a declaration that God&rsquo;s ways are not our ways, and his choices are not bounded by our conventions.",
      "Matthew opens his Gospel with a genealogy of Jesus Christ that names four women: Tamar, Rahab, Ruth, and the wife of Uriah (Bathsheba). Each is surprising; each stands outside the conventional expectation of how the Messiah&rsquo;s lineage would read. Ruth&rsquo;s inclusion is not merely historical accuracy; it is a theological statement that the one who came to redeem the world came through a line shaped by loyal love across ethnic and social boundaries. The hesed that Ruth showed to Naomi, and that Boaz showed to Ruth and the dead, is woven into the very ancestry of Jesus. The kinsman-redeemer of Bethlehem foreshadows the ultimate Redeemer who would come from Bethlehem to accomplish the full and final redemption.",
    ],
  },
  {
    id: "Theological Themes",
    heading: "Theological Themes in Ruth 4",
    reference: "Ruth 4:1&ndash;22 &mdash; Key Themes",
    paragraphs: [
      "The theology of redemption is the central theme of Ruth 4, and it operates on multiple levels simultaneously. At the legal level, Boaz redeems the land belonging to Elimelech&rsquo;s family, preventing it from passing out of the family permanently. At the personal level, he redeems Ruth from widowhood and poverty, giving her a home, a husband, and a future. At the narrative level, he redeems Naomi from emptiness and bitterness, giving her a grandson who becomes her comfort in old age. And at the theological level, the whole transaction is a sign of the redemptive work of God, who throughout the story has been working through the hesed of his human agents to accomplish his purposes for his people.",
      "The kinsman-redeemer (go&rsquo;el) institution is one of the richest theological structures in the Old Testament. The go&rsquo;el was the family member responsible for protecting the interests of vulnerable relatives: redeeming land, redeeming persons sold into slavery, avenging blood, and (in the context of Ruth) marrying the widow of a dead kinsman to perpetuate his name and inheritance. The institution embodies a social vision in which the family is the basic unit of protection, and in which the stronger members of the family are obligated to act for the weaker. When Boaz functions as go&rsquo;el for Ruth and Naomi, he is embodying exactly this social vision at its finest.",
      "Hesed &mdash; the Hebrew word for loyal, steadfast, covenant love &mdash; is the defining quality of both Ruth and Boaz, and its culmination in chapter 4 draws together all three of the book&rsquo;s earlier hesed moments. Boaz had said of Ruth in chapter 2 that she had shown hesed to Naomi by following her to Bethlehem (2:11&ndash;12). In chapter 3, when Ruth approached Boaz at the threshing floor, he said she was showing hesed by choosing him over younger men (3:10). Now in chapter 4, Boaz&rsquo;s public, legal, wholehearted redemption of Ruth and Naomi is the full expression of his own hesed. And standing behind all of it is the Lord&rsquo;s hesed (1:8; 2:20) &mdash; the loyal love of God working through the loyal love of his people.",
      "The inclusion of Ruth the Moabite in the genealogy of David raises one of the book&rsquo;s most theologically significant questions: who belongs to the people of God? The Mosaic law excluded Moabites from the assembly of the Lord to the tenth generation (Deuteronomy 23:3&ndash;5). Yet here a Moabite woman stands in the direct line of David, and ultimately of the Messiah. The book of Ruth does not resolve this tension by dismissing the law; it narrates a story in which a Moabite woman so thoroughly embodies the covenant values of Israel &mdash; loyalty, steadfast love, willingness to sacrifice for others &mdash; that she becomes more Israelite than many Israelites. Belonging to the people of God is shown to be a matter of the heart&rsquo;s allegiance, not merely of ethnic identity.",
      "Providence is woven through every verse of Ruth, and chapter 4 is no exception. The &ldquo;chance&rdquo; arrival of the nearer kinsman at the gate precisely when Boaz is sitting there (4:1) is narrated with the same narrative understatement that characterized Ruth&rsquo;s &ldquo;happening&rdquo; to glean in Boaz&rsquo;s field in chapter 2. The Lord is never mentioned as the direct cause of these coincidences, but the reader has been trained by the story to recognize his hand behind them. The final verse of the chapter gives the genealogy that makes the divine purpose explicit: all of this has been leading to David, and through David, to the fulfillment of God&rsquo;s covenant promises to Israel. Providence does not operate by override; it operates by shaping the choices of faithful people toward ends that exceed their comprehension.",
      "Ruth 4 ends not with a couple but with a community. The women of Bethlehem celebrate; the elders at the gate bless; the neighbors name the child. The restoration of Naomi and Ruth is not a private event; it is a communal celebration in which the entire village participates. The book of Ruth is, among other things, a vision of what a community shaped by covenant love looks like: elders who take their responsibilities seriously, neighbors who rejoice with those who rejoice, a prominent man who uses his resources and social standing to protect the vulnerable, and a foreign woman who is received and honored as fully belonging. This vision of community shaped by hesed is the context in which the Redeemer King will be formed, and it anticipates the community of the New Testament, gathered around the one who came not to be served but to serve, and to give his life as a ransom for many.",
    ],
  },
];

const videoItems = [
  { videoId: "Kp3mNqL8vWx", title: "Ruth 4 - The Kinsman Redeemer and the City Gate" },
  { videoId: "BibleProjectRuth", title: "BibleProject - Overview of Ruth" },
  { videoId: "Tz7wQnRm2Ys", title: "Ruth Chapter 4 - Verse by Verse Bible Study" },
  { videoId: "Jn5xLpQk9Vb", title: "Boaz and Ruth - A Picture of Redemption" },
];

export default function Ruth4GuidePage() {
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
            Ruth 4 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Boaz goes to the city gate, outmaneuvers the nearer kinsman-redeemer, and publicly redeems both the land and Ruth &mdash; sealing the transaction with a sandal, marrying Ruth, and bringing the book of Ruth to its joyful close with the birth of Obed, grandfather of David.
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
              Deepen your study of Ruth 4 through these video teachings on Boaz at the city gate, the kinsman-redeemer transaction, the marriage of Boaz and Ruth, the birth of Obed, and the genealogy leading to David.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>The Redeemer of Bethlehem</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Ruth 4 completes the story of hesed &mdash; loyal, steadfast, covenant love &mdash; that began with a Moabite widow&rsquo;s decision to follow her mother-in-law to Bethlehem. Boaz&rsquo;s redemption of Ruth and the land is both the climax of the narrative and a foreshadowing of the ultimate Redeemer who would come from Bethlehem to accomplish what no human kinsman-redeemer could: the full and final redemption of God&rsquo;s people.
          </p>
        </div>
      </main>
    </div>
  );
}
