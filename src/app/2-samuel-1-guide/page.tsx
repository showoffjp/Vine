"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const ROSE = "#E11D48";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const TABS = [
  "Overview",
  "The Amalekite Messenger",
  "David Mourns",
  "Lament of the Bow",
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
    heading: "Overview of 2 Samuel 1",
    reference: "2 Samuel 1:1&ndash;27",
    paragraphs: [
      "Second Samuel opens on the third day after Ziklag, in the raw aftermath of one of the most devastating moments in David&rsquo;s life. First Samuel had ended with the death of Saul and his sons at the battle of Jezreel, and with David&rsquo;s own city of Ziklag burned to the ground by the Amalekites. Now a solitary messenger arrives from the battlefield, his clothes torn and dirt on his head &mdash; the ancient signs of mourning and distress. What he carries is news that will change the entire shape of Israelite history.",
      "The chapter divides into three movements. The first (vv.1&ndash;10) is the messenger&rsquo;s arrival and report: Saul is dead, Jonathan is dead, and Israel has fled before the Philistines. The second (vv.11&ndash;16) is David&rsquo;s response &mdash; first grief, then a legal proceeding that ends in the Amalekite&rsquo;s execution. The third (vv.17&ndash;27) is the &ldquo;Lament of the Bow,&rdquo; one of the most beautiful elegies in all of ancient literature, which David himself composed and commanded to be taught to the sons of Judah.",
      "The chapter stands at the hinge between two great sections of the Hebrew Bible. First Samuel traced the rise of Saul and the parallel rise of David; it ended with Saul&rsquo;s catastrophic defeat. Second Samuel will trace the rise of David to the throne, the zenith of his kingdom, and the terrible decline that follows his sin with Bathsheba. Chapter 1 is the doorway into that narrative, and its opening note is grief, not triumph. David does not celebrate the death of the man who had hunted him for years. He mourns him.",
      "The theological center of the chapter is the phrase David uses when he executes the Amalekite messenger: &ldquo;the LORD&rsquo;s anointed&rdquo; (vv.14,16). This phrase &mdash; in Hebrew, &ldquo;mashiach YHWH&rdquo; &mdash; is the key to understanding David&rsquo;s entire posture toward Saul throughout 1 Samuel. Whatever Saul had done, whatever sins he had committed, whatever persecution he had launched against David, the act of anointing had conferred on him a sacred dignity that no human being had the right to violate. David had refused, twice, to lift his hand against Saul (1 Sam 24 and 26). The Amalekite who claimed to have finished off the dying king discovers that this commitment is no mere posture.",
      "Second Samuel 1 is also a chapter about character. David had every human reason to be glad at Saul&rsquo;s death. The man who had wasted years of his life as a fugitive, driven him from his homeland, slaughtered the priests of Nob on his behalf, and tried repeatedly to kill him &mdash; that man was dead. The throne David had been promised was now within reach. Yet there is no celebration in this chapter, no political maneuvering, no rush to press his advantage. There is only weeping, fasting, grief, and a poem of magnificent beauty. The depth of David&rsquo;s character is never more visible than in this first chapter of his story as king.",
    ],
  },
  {
    id: "The Amalekite Messenger",
    heading: "The Amalekite&rsquo;s Report",
    reference: "2 Samuel 1:1&ndash;16",
    paragraphs: [
      "On the third day after David had returned to Ziklag from the defeat of the Amalekites, a man came from the battlefield at Jezreel. His outer signs told the story before he spoke: torn clothes, dirt on his head. When he reached David he fell to the ground and prostrated himself in the ancient gesture of approaching a superior with terrible news.",
      "The man identified himself as an Amalekite who had been in Saul&rsquo;s camp during the battle. His account was vivid: Saul&rsquo;s army had fled, many had fallen, Saul himself and Jonathan his son were dead. David pressed for detail &mdash; &ldquo;How do you know that Saul and his son Jonathan are dead?&rdquo; (v.5) &mdash; and the Amalekite gave a story that has puzzled commentators ever since. He said that by chance he had been on Mount Gilboa, that Saul was leaning on his spear with the chariots and horsemen pressing in on him, that Saul saw him and called to him, and that Saul had asked to be killed: &ldquo;Who are you?&hellip; Stand beside me and kill me, for anguish has seized me, and yet my life still lingers&rdquo; (vv.7&ndash;9). The Amalekite claimed to have complied: &ldquo;So I stood beside him and killed him, because I knew that he could not live after he had fallen. And I took the crown that was on his head and the armlet that was on his arm, and I have brought them here to my lord&rdquo; (v.10).",
      "The careful reader will notice immediately the discrepancy between this account and the account given at the end of 1 Samuel. There (31:4&ndash;5) the narrator states that Saul took his own sword and fell upon it, and that when his armor-bearer saw that Saul was dead he also fell on his sword. The Amalekite&rsquo;s story contradicts the narrator&rsquo;s account. The most natural explanation is that the Amalekite came upon the already-dead body of Saul on the battlefield, recognized an opportunity, and fabricated a story designed to win David&rsquo;s favor &mdash; presenting himself as the one who had &ldquo;mercifully&rdquo; ended the dying king&rsquo;s suffering, and bringing the crown and armlet as proof of his service to the new order. He expected David to be pleased.",
      "He had miscalculated catastrophically. David&rsquo;s immediate response was not gratitude but grief. He and all the men with him tore their clothes and mourned and wept and fasted until evening &mdash; for Saul, for Jonathan, for the people of Israel who had fallen by the sword. The passage makes no exception for the years of persecution, for the wasted decade in the wilderness, for Doeg and the priests of Nob, for any of it. David&rsquo;s grief was whole and apparently genuine.",
      "Then came the reckoning. David turned to the Amalekite messenger and asked: &ldquo;Where do you come from?&rdquo; When the man identified himself as an Amalekite, David asked a question that was really a sentence: &ldquo;How is it you were not afraid to put out your hand to destroy the LORD&rsquo;s anointed?&rdquo; (v.14). The man&rsquo;s own testimony was his condemnation. He had, on his own account, killed the one whom God had set apart by the rite of anointing. Whether his account was true or fabricated made no difference at the level of legal culpability &mdash; he had claimed the act, and claiming it was enough.",
      "David&rsquo;s verdict was swift and theologically precise: &ldquo;Your blood be on your own head, for your own mouth has testified against you, saying, &lsquo;I have killed the LORD&rsquo;s anointed&rsquo;&rdquo; (v.16). The formula &ldquo;your blood be on your own head&rdquo; is a legal phrase indicating that the person&rsquo;s death is the consequence of their own action. David did not act out of personal vengeance or political calculation. He acted out of reverence for the sacred institution of anointing &mdash; the same reverence that had kept his own sword sheathed through all the years of Saul&rsquo;s pursuit. Benaiah executed the Amalekite on David&rsquo;s order.",
      "The episode illuminates a central conviction of Davidic theology: the king of Israel is not the property of political forces or the plaything of military fortunes. He is set apart by God, and that setting-apart creates obligations and protections that do not dissolve even when the king himself has failed. The irony is sharp: the Amalekite had hoped that Saul&rsquo;s death would open a door for him. It opened his grave instead. And David&rsquo;s unwillingness to celebrate the death of his enemy, even when that death handed him the throne, marks him as a man of a radically different moral order than the calculating opportunist from the battlefield.",
    ],
  },
  {
    id: "David Mourns",
    heading: "David&rsquo;s Grief and Covenant Faithfulness",
    reference: "2 Samuel 1:11&ndash;16",
    paragraphs: [
      "Before the execution, before the poem, before any of the political consequences of Saul&rsquo;s death were addressed, David mourned. The text is spare and direct: &ldquo;Then David took hold of his clothes and tore them, and so did all the men who were with him. And they mourned and wept and fasted until evening for Saul and for Jonathan his son and for the people of the LORD and for the house of Israel, because they had fallen by the sword&rdquo; (vv.11&ndash;12). The mourning was corporate. Not only David but all his men &mdash; the six hundred warriors, the refugees from the years of exile &mdash; joined in the grief.",
      "It is worth pausing to feel the strangeness of this. These were men who had spent years being hunted by Saul. They had been driven from their homes, they had eaten bread in the wilderness, they had come within hours of being forced to fight against their own people at Aphek (1 Sam 29). The man who had caused all of this was now dead, and they were weeping for him. This is not a natural human response. It is something formed by a vision of God&rsquo;s purposes and a commitment to them that overrides personal grievance.",
      "The grief for Jonathan is in a different key altogether. Jonathan and David had entered into one of the deepest covenant friendships the Bible records. Jonathan had stripped himself of his robe, his armor, his sword, his bow, and his belt and given them to David (1 Sam 18:4) &mdash; an act that in the ancient world represented the transfer of one&rsquo;s identity and status. They had made a formal covenant together, repeated and deepened on multiple occasions. Jonathan had protected David from his own father, warned him of assassination plots, and pledged his family to David&rsquo;s protection even if the tables turned. The love between them was real and deep, and Jonathan&rsquo;s death was a personal loss of immense magnitude.",
      "The concept of &ldquo;hesed&rdquo; &mdash; covenant love, loyal love, steadfast faithfulness &mdash; is woven through this entire chapter. It is hesed that makes David honor Saul as the LORD&rsquo;s anointed even in death. It is hesed that shapes the grief for Jonathan. It is hesed that will eventually move David to seek out Jonathan&rsquo;s surviving son Mephibosheth and show him kindness &ldquo;for Jonathan&rsquo;s sake&rdquo; (2 Sam 9:7). This covenant loyalty was not merely a human sentiment; it was a reflection of the character of the God who keeps his covenant to a thousand generations, who does not abandon the commitments he has made even when his people fail.",
      "David&rsquo;s mourning also reveals something about the nature of true leadership. He did not suppress or hide his grief for political reasons. He did not calculate whether public mourning for Saul would help or hurt his claim to the throne. He wept, and he commanded others to weep with him. The great warrior who had slain Goliath and led armies was also a man of deep emotional life, capable of grief as total and as unselfconscious as his joy. The Psalms that bear his name are full of both &mdash; laments as raw as anything in the Bible, and praises as exultant as the sky. Second Samuel 1 shows us the man behind the Psalms: someone for whom the inner life was as real as the battlefield.",
      "The fasting until evening was a customary sign of mourning and penitence in ancient Israel. By abstaining from food, David and his men embodied their grief, making it physical. The news from Jezreel was not an abstraction to be processed with political coolness. It was a catastrophe &mdash; for the nation, for the covenant, for everything David had known of his life under God&rsquo;s hand. The body participated in the soul&rsquo;s grief, as it always does in authentic sorrow.",
    ],
  },
  {
    id: "Lament of the Bow",
    heading: "The Lament of the Bow",
    reference: "2 Samuel 1:17&ndash;27",
    paragraphs: [
      "David&rsquo;s lament over Saul and Jonathan &mdash; called &ldquo;the Lament of the Bow&rdquo; &mdash; is one of the supreme achievements of ancient Hebrew poetry. It was not composed casually; David is described as having &ldquo;lamented with this lamentation over Saul and Jonathan his son&rdquo; (v.17), and he commanded that it be taught to the sons of Judah, that it be preserved. It was recorded in the Book of Jashar, a now-lost collection of ancient Israelite poetry. The care given to its composition and preservation tells us something about how David understood the deaths he was mourning.",
      "The poem opens and closes with the same refrain, giving it a frame that holds everything inside it together: &ldquo;How the mighty have fallen!&rdquo; (vv.19, 25, 27). This line is not sarcasm or triumph. In Hebrew, the word for &ldquo;mighty&rdquo; here is &ldquo;gibborim&rdquo; &mdash; the great warriors, the champions. Saul and Jonathan were indeed mighty: Saul head and shoulders above all the people, Jonathan who had stormed a Philistine garrison with his armor-bearer alone (1 Sam 14). Their deaths are a loss to Israel, not a relief, and the repeated refrain marks that loss with cumulative force.",
      "The poem begins with a command that is both political and poetical: &ldquo;Tell it not in Gath, proclaim it not in the streets of Ashkelon, lest the daughters of the Philistines rejoice, lest the daughters of the uncircumcised exult&rdquo; (v.20). Gath and Ashkelon were two of the five great Philistine cities. The thought of Israel&rsquo;s enemies celebrating over the fall of Saul and Jonathan is itself painful to David, and the apostrophe &mdash; addressed to the abstract &ldquo;you&rdquo; of publication and proclamation &mdash; is a way of expressing the wish that the catastrophe could be contained, that the enemies of God&rsquo;s people might not find occasion for joy in it.",
      "David then curses the mountains of Gilboa, where the battle had taken place: &ldquo;You mountains of Gilboa, let there be no dew or rain upon you, nor fields of offerings! For there the shield of the mighty was defiled, the shield of Saul, not anointed with oil&rdquo; (v.21). A shield that went without its protective oiling was a shield abandoned, a symbol of defeat. The barrenness David curses on Gilboa is a poetic counterpart to the barrenness of a battlefield where the anointed of God had fallen. The curse is not literally expected to come true; it is the emotional logic of a mourner giving the landscape itself a share in his grief.",
      "The praise of Saul that follows is remarkable for its generosity. David says of him: &ldquo;Saul and Jonathan, beloved and lovely! In life and in death they were not divided; they were swifter than eagles, stronger than lions&rdquo; (v.23). And then this: &ldquo;You daughters of Israel, weep over Saul, who clothed you in scarlet with luxury, who put ornaments of gold on your apparel&rdquo; (v.24). David commemorates the material prosperity and beauty that Saul&rsquo;s reign had brought to the women of Israel &mdash; the spoils of victory, the goods of a kingdom at its height. Whatever Saul&rsquo;s spiritual failures, he had been a warrior king who had fought for his people, and the women who had benefited from his victories were right to mourn him.",
      "The poem reaches its emotional summit in verses 25 and 26, which turn from Saul to Jonathan: &ldquo;How the mighty have fallen in the midst of the battle! Jonathan lies slain on your high places. I am distressed for you, my brother Jonathan; very pleasant have you been to me; your love to me was extraordinary, surpassing the love of women.&rdquo; These are among the most celebrated lines in all the Hebrew Bible. The phrase &ldquo;surpassing the love of women&rdquo; is not a dismissal of romantic love but an elevation of the covenant bond between David and Jonathan &mdash; a bond forged in shared danger, sustained across separation, and proved in Jonathan&rsquo;s repeated willingness to sacrifice his own dynastic future for his friend. The rabbis saw in it a paradigm of pure, selfless friendship; Christians have seen in it a foreshadowing of the love that does not count the cost.",
      "The lament closes as it began: &ldquo;How the mighty have fallen, and the weapons of war perished!&rdquo; (v.27). The weapons of war &mdash; the bow and the sword &mdash; that had made Saul and Jonathan the terror of Israel&rsquo;s enemies now lay silent. The poem ends not with triumph or comfort but with the weight of absence. David does not rush this grief toward resolution or consolation. He stays inside the loss, holds the shape of what has been taken, and gives it words. That willingness to stay inside grief without forcing a premature resolution is itself a kind of wisdom &mdash; the wisdom of Psalms 22 and 88, which cry out without answer and are honest in their crying. David understood that some losses are large enough to require a poem, and the poem is large enough to hold the loss.",
      "The theological themes of 2 Samuel 1 radiate outward from this lament. The sacred nature of God&rsquo;s anointed &mdash; established in the execution of the Amalekite and celebrated in the poem&rsquo;s praise of Saul &mdash; will shape the entire theology of kingship in the Old Testament and find its ultimate fulfillment in Jesus, who is described in the New Testament as &ldquo;the Holy and Righteous One&rdquo; (Acts 3:14), the Anointed of God whose death could not be held by the grave. The depth of David&rsquo;s character, displayed in grief rather than triumph, in poetry rather than politics, marks him as the kind of king after God&rsquo;s own heart whose line would one day bear the Son of David. And the covenant love between David and Jonathan &mdash; hesed made flesh in friendship &mdash; illuminates the kind of love that God himself shows to his people: loyal, sacrificial, enduring across every separation.",
    ],
  },
];

const videoItems = [
  { videoId: "HdZO0f-PjFY", title: "2 Samuel 1 Explained - David Mourns Saul and Jonathan" },
  { videoId: "Z43ZT5hUJog", title: "The Lament of the Bow - David's Elegy in 2 Samuel 1" },
  { videoId: "1tqM1LJQG3k", title: "David and Jonathan - Covenant Friendship in Scripture" },
  { videoId: "xjMLiRxsOos", title: "The LORD's Anointed - Sacred Kingship in 2 Samuel" },
];

export default function Samuel1GuidePage() {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);
  if (!loaded) return null;

  const currentSection = sections.find((s) => s.id === activeTab);

  return (
    <div style={{ paddingTop: "var(--header-height, 80px)", minHeight: "100vh", background: BG, color: TEXT, fontFamily: "var(--font-jost, system-ui, sans-serif)" }}>
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        <header style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", background: `${ROSE}22`, color: ROSE, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Old Testament &mdash; 2 Samuel
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, margin: "0 0 1rem", lineHeight: 1.15 }}>
            2 Samuel 1: David Mourns Saul and Jonathan
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            Three days after Ziklag, an Amalekite arrives with news of Saul&rsquo;s death &mdash; and faces execution for claiming to have killed the LORD&rsquo;s anointed. David&rsquo;s grief overflows into one of Scripture&rsquo;s most magnificent poems: &ldquo;How the mighty have fallen!&rdquo;
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
                border: `1px solid ${activeTab === t ? ROSE : BORDER}`,
                background: activeTab === t ? ROSE : CARD,
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
            <div style={{ color: ROSE, fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: "1.75rem" }} dangerouslySetInnerHTML={{ __html: currentSection.reference }} />
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
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.5, margin: 0, padding: "12px 16px" }}>{v.title}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3.5rem", background: CARD, border: `1px solid ${ROSE}44`, borderRadius: 12, padding: "1.75rem 2rem" }}>
          <h3 style={{ color: ROSE, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>
            How the Mighty Have Fallen
          </h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: "0 0 1rem" }}>
            David&rsquo;s response to Saul&rsquo;s death reveals the full depth of his character: he grieves his enemy, executes the man who claimed to kill the LORD&rsquo;s anointed, and composes a poem of such beauty that he commands it to be taught to all Judah. This is not politics but covenant faithfulness &mdash; the same hesed that shaped his friendship with Jonathan and that God himself shows to his people.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The phrase &ldquo;the LORD&rsquo;s anointed&rdquo; that runs through this chapter finds its ultimate referent in Jesus, the Messiah &mdash; God&rsquo;s own Anointed One. The depth of David&rsquo;s reverence for even a flawed and fallen anointed king points forward to the reverence owed to the one who is both the Son of David and the Son of God.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ROSE, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Key Verse</div>
            <p style={{ color: TEXT, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              &ldquo;Your blood be on your own head, for your own mouth has testified against you, saying, &lsquo;I have killed the LORD&rsquo;s anointed.&rsquo;&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>2 Samuel 1:16</p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ROSE, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Covenant Love</div>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              &ldquo;I am distressed for you, my brother Jonathan; very pleasant have you been to me; your love to me was extraordinary, surpassing the love of women.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>2 Samuel 1:26</p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
            <div style={{ color: ROSE, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>The Lament</div>
            <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>
              &ldquo;Tell it not in Gath, proclaim it not in the streets of Ashkelon, lest the daughters of the Philistines rejoice, lest the daughters of the uncircumcised exult.&rdquo;
            </p>
            <p style={{ color: MUTED, fontSize: 12, margin: "8px 0 0", fontWeight: 600 }}>2 Samuel 1:20</p>
          </div>
        </div>

        <div style={{ marginTop: "2rem", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem 2rem" }}>
          <h3 style={{ color: TEXT, fontWeight: 700, margin: "0 0 1rem", fontSize: "1.1rem" }}>Cross-References and Background</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>1 Samuel 31</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>The narrator&rsquo;s own account of Saul&rsquo;s death: he fell on his own sword after his armor-bearer refused to strike him, contradicting the Amalekite&rsquo;s story in 2 Samuel 1.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>1 Samuel 24, 26</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>David&rsquo;s two occasions of refusing to kill Saul when the opportunity arose &mdash; the theological foundation for his treatment of the Amalekite messenger.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>1 Samuel 18:1&ndash;4</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>Jonathan strips off his robe and armor and gives them to David &mdash; the founding covenant act of their friendship, background to David&rsquo;s grief in the lament.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>2 Samuel 9</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>David seeks out Mephibosheth, Jonathan&rsquo;s crippled son, to show him &ldquo;the kindness of God for Jonathan&rsquo;s sake&rdquo; &mdash; hesed extended beyond death.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: ROSE, fontWeight: 700, fontSize: 13, minWidth: 130, flexShrink: 0 }}>Psalm 22, 88</span>
              <span style={{ color: MUTED, fontSize: "0.95rem", lineHeight: 1.6 }}>The lament psalms &mdash; the same willingness to hold grief without rushing to resolution that characterizes the Lament of the Bow.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
