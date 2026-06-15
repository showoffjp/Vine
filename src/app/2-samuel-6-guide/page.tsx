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
  "Transporting the Ark",
  "The Death of Uzzah",
  "The Ark at Obed-Edom",
  "David's Dancing",
  "Michal's Contempt",
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
    heading: "Overview of 2 Samuel 6",
    reference: "2 Samuel 6:1&ndash;23",
    paragraphs: [
      "Second Samuel 6 is one of the most dramatic and theologically rich chapters in the entire Hebrew Bible. It narrates King David&rsquo;s determined effort to bring the ark of the covenant &mdash; the most sacred object in Israel, the very footstool of the Lord&rsquo;s throne &mdash; from Kiriath-jearim into Jerusalem, the city he had just captured and made his capital. The project unifies David&rsquo;s political ambitions with his deep devotion to the God of Israel, but the road to Jerusalem is neither smooth nor without cost.",
      "The chapter opens with a burst of energy and communal celebration, thirty thousand men chosen from all Israel gathered for the occasion, a brand-new cart prepared, and music filling the air. Yet almost immediately the joy is shattered by the death of Uzzah, a man who reached out to steady the ark when the oxen stumbled and was struck dead on the spot by the anger of the Lord. The episode stops the procession cold, filling David with both anger and fear, and the ark is left at the house of Obed-Edom the Gittite for three months.",
      "When David learns that the Lord has blessed Obed-Edom&rsquo;s household on account of the ark, he returns with renewed purpose &mdash; but this time with proper Levitical protocol rather than a new cart. The ark is carried on the shoulders of consecrated priests as the law required, sacrifices are offered at every six steps, and David himself dances before the Lord with abandoned joy, wearing only a linen ephod. The ark enters Jerusalem in a great procession of rejoicing.",
      "The chapter closes with a sharp and unexpected conflict. David&rsquo;s wife Michal, the daughter of Saul, watches from a window and despises him in her heart for what she perceives as undignified behavior. When David returns home she meets him with contempt, and he responds with a declaration that his worship is for the Lord, not for human approval. The chapter ends on a somber note: Michal has no child to the day of her death. Together, these scenes explore what it means to approach God rightly, to worship without inhibition, and to honor the holy presence of the Most High.",
    ],
  },
  {
    id: "Transporting the Ark",
    heading: "Gathering Israel to Bring Up the Ark",
    reference: "2 Samuel 6:1&ndash;5",
    paragraphs: [
      "The ark of the covenant had been away from the center of Israel&rsquo;s worship for decades. After its disastrous capture by the Philistines and its return under a cloud of holy terror, it had rested at Kiriath-jearim in the house of Abinadab, largely forgotten during the turbulent years of Saul&rsquo;s reign. Now David, newly established as king of all Israel with Jerusalem as his capital, sets his heart on bringing it home. The ark was not merely a religious artifact; it was the visible sign of God&rsquo;s covenant presence with his people.",
      "David assembles thirty thousand chosen men from all Israel &mdash; a number that signals the national importance of the occasion. This is not a priestly procession of specialists but a massive popular gathering, the whole nation represented in the retrieval of their most sacred treasure. The scale of the undertaking reflects David&rsquo;s conviction that the presence of God belongs at the heart of the nation&rsquo;s life, not stored away in a private house on a hillside.",
      "The ark is loaded onto a &ldquo;new cart&rdquo; (6:3), an apparently honorable gesture modeled after the Philistines&rsquo; own method of returning it (1 Samuel 6:7). Uzzah and Ahio, the sons of Abinadab in whose house the ark had been kept, drive the cart while Ahio walks before it. The procession begins with great fanfare: &ldquo;David and all the house of Israel were celebrating before the Lord, with songs and lyres and harps and tambourines and castanets and cymbals&rdquo; (6:5). The scene radiates energy, devotion, and communal joy.",
      "Yet the use of a new cart, however well-intentioned, was a fatal oversight. The law of Moses was explicit: the ark was to be carried on the shoulders of the Levites by means of the poles that passed through its rings (Numbers 4:15; 7:9). The Philistines could be excused for transporting it on a cart &mdash; they did not have the Torah. Israel had no such excuse. The violation of this divine instruction was not merely a technicality; it reflected a failure to take seriously the absolute holiness of the ark and the specific ways God had prescribed for approaching him. Enthusiasm for God, even sincere enthusiasm, does not substitute for obedience to his revealed will.",
      "This tension between fervent devotion and proper protocol is one of the central lessons of the chapter. Israel&rsquo;s worship was genuine; the music and the celebration were real expressions of love for the Lord. But the manner of approach to the holy God cannot be improvised or borrowed from pagan practice. The holiness of God is not merely a theological concept; it is a reality that makes specific demands on those who draw near to him.",
    ],
  },
  {
    id: "The Death of Uzzah",
    heading: "The Death of Uzzah",
    reference: "2 Samuel 6:6&ndash;11",
    paragraphs: [
      "When the procession reached the threshing floor of Nacon, the oxen stumbled and the ark lurched. Uzzah, walking beside the cart, reached out his hand to steady it and prevent it from falling. It was in all likelihood an instinctive act &mdash; the kind of reflexive gesture anyone might make to protect something precious. But &ldquo;the anger of the Lord was kindled against Uzzah, and God struck him down there because of his error, and he died there beside the ark of God&rdquo; (6:7). The procession came to an instant and terrible halt.",
      "The death of Uzzah is one of the most disturbing episodes in Scripture for modern readers. He appears to have had good motives &mdash; he was trying to keep the ark from toppling to the ground. Yet he died. The episode resists any reading that reduces God to a being whose responses conform to human moral intuitions. The holiness of God is not a metaphor; it is a consuming reality that cannot be handled carelessly, even by those who mean well.",
      "The deeper problem was not only Uzzah&rsquo;s individual act but the entire manner in which the ark was being transported. No one was supposed to touch the ark, least of all an unauthorized layman. The Kohathites, who were appointed to carry the sacred objects of the tabernacle, were forbidden even to look at them lest they die (Numbers 4:20). The ark was not being carried on poles by Levites as the law required; it was riding on a cart, accessible to human hands. Uzzah died, but the failure belonged to the whole enterprise &mdash; and ultimately to David&rsquo;s insufficient attention to the divine instructions.",
      "David&rsquo;s reaction is described with unflinching honesty: &ldquo;David was angry because the Lord had broken out against Uzzah&rdquo; (6:8). He named the place Perez-Uzzah, meaning &ldquo;the breaking out against Uzzah,&rdquo; a name that preserved the memory of this confrontation with divine holiness. His anger gives way to fear: &ldquo;David was afraid of the Lord that day, and said, &lsquo;How can the ark of the Lord come to me?&rsquo;&rdquo; (6:9). Both responses &mdash; anger and fear &mdash; are honest, and neither is condemned by the text.",
      "The ark is then diverted to the house of Obed-Edom the Gittite, and the great procession dissolves. What began as a triumphant national celebration ends in death, anger, and bewilderment. Yet the episode is not a story of divine cruelty; it is a story of divine seriousness. The God who dwells among his people is not a manageable deity who can be approached on human terms. He is the Holy One of Israel, who loves his people enough to insist that they honor his holiness &mdash; because only in that holiness can they truly meet him.",
    ],
  },
  {
    id: "The Ark at Obed-Edom",
    heading: "The Ark at the House of Obed-Edom",
    reference: "2 Samuel 6:10&ndash;12",
    paragraphs: [
      "When David redirected the ark to the house of Obed-Edom the Gittite, it may have seemed like a decision born of fear and uncertainty rather than faith. The king who had so boldly declared his intention to bring the ark to Jerusalem now seemed unwilling to proceed. Yet in this pause &mdash; which lasted three full months &mdash; something remarkable happened: &ldquo;the Lord blessed Obed-Edom and all his household&rdquo; (6:11). The presence of the ark was not only a source of holy danger; it was a source of divine favor.",
      "Obed-Edom&rsquo;s identity is noteworthy. He is described as a Gittite &mdash; a designation that may indicate he was from Gath, a Philistine city &mdash; and yet the ark of the God of Israel brought unmistakable blessing to his home. This detail echoes the earlier story of the ark among the Philistines (1 Samuel 5), where its presence brought judgment, but here it brings blessing. The difference lies not in the object but in the posture of those in whose custody it rests. Obed-Edom apparently received the ark with reverence rather than presumption.",
      "The three months of blessing at Obed-Edom&rsquo;s house serve a crucial narrative and theological function. They demonstrate that the ark itself was not cursed or tainted after the death of Uzzah; the problem had been the manner of its transport, not the ark itself. More importantly, they demonstrate that the presence of God among his people is life-giving when approached with proper reverence. The fear that drove David away from the ark was legitimate, but it was not meant to keep him from the presence of God forever.",
      "When David was told that &ldquo;the Lord has blessed the household of Obed-Edom and all that belongs to him, because of the ark of God,&rdquo; his response is immediate: he goes to bring up the ark to the city of David with joy (6:12). The three-month interval was not merely a pause but a school of instruction. David now understands something he had not fully grasped before: the ark is both holy and beneficent, terrifying in its judgment of irreverence and abundant in its blessing to those who honor it rightly. This time he will do it properly.",
      "The story of the ark at Obed-Edom&rsquo;s house also speaks to the pastoral rhythm of the Christian life. There are moments when the believer draws back from the holy presence of God, overwhelmed by a sense of God&rsquo;s magnitude and one&rsquo;s own inadequacy. Those pauses, when spent in honest reflection and renewed attentiveness to God&rsquo;s revealed will, are not defeats. They are often the preparation for a deeper and more fruitful drawing near. David came back to the ark a better worshiper than the man who had first set out with thirty thousand men and a new cart.",
    ],
  },
  {
    id: "David's Dancing",
    heading: "David Dancing Before the Lord",
    reference: "2 Samuel 6:12&ndash;19",
    paragraphs: [
      "The second attempt to bring the ark to Jerusalem is conducted with careful attention to the law. David learns from the disaster at Nacon: this time the ark is carried on the shoulders of the Levites as Moses had commanded (1 Chronicles 15:15 makes this explicit). The text of 2 Samuel 6 notes the crucial difference in another way: &ldquo;And when those who bore the ark of the Lord had gone six steps, he sacrificed an ox and a fattened animal&rdquo; (6:13). Sacrifices at the outset, repeated at intervals, mark this procession as an act of deliberate and costly worship rather than a festive parade.",
      "At the center of this second procession stands one of the most memorable images in the entire Old Testament: David dancing before the Lord with all his might, wearing only a linen ephod. The linen ephod was a priestly garment &mdash; by wearing it and setting aside his royal robes, David was positioning himself not as a king condescending to religious ceremony but as a worshiper stripped of rank before the Most High. His dancing was not a performance for the crowd; it was directed explicitly &ldquo;before the Lord.&rdquo;",
      "The phrase &ldquo;with all his might&rdquo; (6:14) is the same phrase that will appear later in Jesus&rsquo;s summary of the great commandment: love the Lord your God with all your heart, soul, and might (Deuteronomy 6:5). David&rsquo;s dancing was not mere exuberance; it was a physical expression of wholehearted devotion. The man after God&rsquo;s own heart worshiped with his whole body, his whole person, abandoning all dignity and self-consciousness in the presence of the One before whom all human distinctions dissolve.",
      "The whole house of Israel joined in the celebration. Shouting and the sound of the horn accompanied the ark as it entered the city. David blessed the people in the name of the Lord of hosts and distributed food to the entire multitude &mdash; bread, a portion of meat, and a cake of raisins &mdash; a royal feast for every person in the assembly. The day was one of unrestrained communal joy, a nation celebrating the return of God&rsquo;s presence to its rightful place at the center of their life.",
      "Theologically, the scene of David dancing points forward to the eschatological vision of a people who worship the living God without shame or reserve. The king of Israel, the greatest political figure of his age, finds his truest self not on the throne but before the ark &mdash; leaping and dancing before the Lord. Human dignity is not diminished by such abandon; it is fulfilled. We are most fully human when we are most fully worshipers of the God in whose image we are made.",
      "The ark is set in its tent, the appointed offerings are made, and David goes home to bless his own household. The chapter reaches its peak of joy at this moment, before the confrontation with Michal immediately deflates it. Yet even that confrontation does not undo what has been accomplished: the ark is in Jerusalem, God&rsquo;s presence is at the heart of David&rsquo;s kingdom, and a king has danced before his God with all his might.",
    ],
  },
  {
    id: "Michal's Contempt",
    heading: "Michal's Contempt and David's Defense",
    reference: "2 Samuel 6:16, 20&ndash;23",
    paragraphs: [
      "As the ark entered the city, Michal the daughter of Saul looked out of a window and saw David leaping and dancing before the Lord. The text records her inward response with stark economy: &ldquo;she despised him in her heart&rdquo; (6:16). Her contempt is not merely aesthetic discomfort at her husband&rsquo;s undignified appearance; it is something deeper &mdash; a judgment on the entire posture of the man, a refusal of what he represents in his worship. The contrast between the dancing king and the watching woman at the window is one of the great images of divided spiritual allegiance in the Bible.",
      "Michal&rsquo;s lineage is significant. She is consistently identified in this passage not as David&rsquo;s wife but as &ldquo;the daughter of Saul&rdquo; (6:16, 20, 23). This is not accidental. Saul had been a king who was more concerned with the opinion of the people than with the will of God &mdash; a man who had forfeited the kingdom precisely because his heart was oriented toward human approval rather than divine obedience. Michal, looking down from a window at her dancing husband, is in some sense her father&rsquo;s daughter: she sees the scene through Saul&rsquo;s eyes.",
      "When David returns home to bless his household, Michal meets him with a withering greeting saturated in irony: &ldquo;How the king of Israel honored himself today, uncovering himself today before the eyes of his servants&rsquo; female servants, as one of the vulgar fellows shamelessly uncovers himself!&rdquo; (6:20). She invokes his royal dignity as the standard he has failed to maintain. To her, a king should look like a king, and what she saw was an embarrassment.",
      "David&rsquo;s response is one of the great declarations of theocentric worship in Scripture: &ldquo;It was before the Lord, who chose me above your father and above all his house, to appoint me as prince over Israel, the people of the Lord &mdash; and I will celebrate before the Lord. I will make myself yet more contemptible than this, and I will be abased in your eyes. But by the female servants of whom you have spoken, by them I shall be held in honor&rdquo; (6:21&ndash;22). David refuses to calibrate his worship by human standards of dignity.",
      "The reference to God&rsquo;s choice of David over Saul is pointed. David&rsquo;s authority did not come from inherited rank or self-presentation; it came from divine election. Before the God who chose him, the trappings of royal dignity are of no account. The women of the people, whom Michal invokes as witnesses of David&rsquo;s humiliation, will honor him precisely because they understand what Michal does not: that true greatness before God looks different from greatness before men.",
      "The chapter closes with a sentence of devastating finality: &ldquo;And Michal the daughter of Saul had no child to the day of her death&rdquo; (6:23). The narrative does not offer a detailed theological explanation, but the placement of this statement immediately after her confrontation with David is unmistakable. The line of Saul ends in barrenness. In contrast, David&rsquo;s line &mdash; the line of the man who danced before the Lord with all his might &mdash; would eventually give rise to the eternal King whose kingdom would have no end. The contrast between worshipful abandonment and self-protective dignity plays out across generations.",
    ],
  },
];

const videoItems = [
  { videoId: "mXLPDFKp2sA", title: "2 Samuel 6 - David and the Ark of the Covenant" },
  { videoId: "vR3cNqJbT7w", title: "The Death of Uzzah and the Holiness of God - 2 Samuel 6" },
  { videoId: "pKs8FzDnH4q", title: "David Dancing Before the Lord - Worship in 2 Samuel 6" },
  { videoId: "tLw7GmBcV5x", title: "Michal and David - 2 Samuel 6 Bible Study" },
];

export default function Samuel6GuidePage() {
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
            2 Samuel 6 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            David brings the ark of the covenant to Jerusalem &mdash; a journey marked by death, reverence, and abandoned joy. 2 Samuel 6 explores the holiness of God, the costliness of true worship, and the contrast between those who honor the Lord before whom all rank dissolves and those who despise such wholehearted devotion.
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
              Deepen your study of 2 Samuel 6 through these video teachings on David&rsquo;s transport of the ark, the death of Uzzah, the blessing of Obed-Edom, David&rsquo;s dancing before the Lord, and the confrontation with Michal.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>I Will Celebrate Before the Lord</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            Second Samuel 6 calls every reader to examine both the manner and the heart of their worship. The death of Uzzah warns that sincerity is no substitute for obedience &mdash; God&rsquo;s holiness makes genuine demands. Yet David&rsquo;s dancing declares that the same holy God invites wholehearted, even undignified abandon from those who approach him rightly. True worship is not calibrated by human standards of respectability; it is a response to the God who is worth everything, offered with everything.
          </p>
        </div>
      </main>
    </div>
  );
}
