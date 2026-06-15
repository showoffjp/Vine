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
  "Saul Pursues David",
  "The Cave at En Gedi",
  "David Spares the King",
  "The Lord's Anointed",
  "Saul's Response",
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
    heading: "Overview of 1 Samuel 24",
    reference: "1 Samuel 24:1&ndash;22",
    paragraphs: [
      "First Samuel 24 stands as one of the most revealing chapters in the entire narrative of David&rsquo;s life &mdash; a moment of supreme temptation met with extraordinary restraint. Pursued across the Judean wilderness by the very king he had faithfully served, David finds himself alone in a cave with Saul at his mercy. Everything his men had told him pointed to this moment as the hand of God delivering his enemy &mdash; and yet David refuses to strike.",
      "The chapter is a concentrated study in the nature of genuine godliness under pressure. It is easy to wait on the Lord when waiting costs nothing. It is far more difficult when you are hiding in caves, when your life is forfeit, when the man hunting you has walked into the very place where you are concealed. The question 1 Samuel 24 poses is not abstract: what does it mean to trust God&rsquo;s timing when God&rsquo;s timing seems to require you to remain a fugitive?",
      "David&rsquo;s answer is not merely tactical or strategic &mdash; it is theological. The prohibition against harming Saul rests not on pragmatic considerations but on the identity of Saul as &ldquo;the Lord&rsquo;s anointed.&rdquo; Whatever Saul has become, whatever injustice he has perpetrated, the anointing of God cannot be violated by human hands. This conviction will be tested again in 1 Samuel 26, but here it finds its first and fullest expression, along with Saul&rsquo;s own broken acknowledgment that David is in the right.",
      "The chapter also traces David&rsquo;s remarkable emotional transparency. He is not a cold, calculating soldier. His conscience troubles him even for the small act of cutting Saul&rsquo;s robe. After calling out to Saul and making his defense, he weeps as he speaks. This is not the portrait of a man indifferent to his own suffering or to the weight of his choices; it is the portrait of a man genuinely formed by the fear of God, whose conscience is both tender and theologically grounded.",
      "What emerges from the cave of En Gedi is a picture of what the New Testament will later call the one who does not repay evil for evil, who trusts to him who judges justly. Long before the Sermon on the Mount, David enacts its spirit in the wilderness of Judah, and the chapter stands as one of Scripture&rsquo;s enduring testimonies to the power of godly restraint.",
    ],
  },
  {
    id: "Saul Pursues David",
    heading: "Saul Pursues David with Three Thousand Men",
    reference: "1 Samuel 24:1&ndash;3",
    paragraphs: [
      "The chapter opens in the immediate aftermath of the Ziphite betrayal and the providential interruption that had saved David at the cliff of Mahlah-lehabdivision. Saul has returned from pursuing the Philistines, and when he is told that David is in the wilderness of En Gedi, he takes three thousand chosen men from all Israel and goes to seek David on the Rocks of the Wild Goats.",
      "The sheer scale of the pursuit is striking. Three thousand &ldquo;chosen men&rdquo; &mdash; the cream of Israel&rsquo;s military &mdash; deployed against a single fugitive and his small band of followers. It underscores both the extent of Saul&rsquo;s fear and obsession, and the disproportion of David&rsquo;s situation. No one reading this would expect the fugitive to come out well; from every human calculation, David&rsquo;s position is desperate.",
      "En Gedi sits on the western shore of the Dead Sea, a dramatic landscape of steep cliffs and hidden caves. The wilderness of En Gedi is not gentle terrain; it is harsh, rocky, and full of the kind of natural shelters where men and animals alike could hide from the heat and from enemies. The &ldquo;Rocks of the Wild Goats&rdquo; describes the area perfectly &mdash; a place navigable only by those who knew it as well as the ibex that gave the rocks their name.",
      "The narrator gives us a detail that seems almost too good to be true, and yet it is the hinge on which the entire chapter turns. Saul comes to the sheepfolds beside the road, and there is a cave. He goes in to relieve himself &mdash; and David and his men are sitting in the innermost parts of the very same cave. In the entire wilderness of En Gedi, with three thousand men fanning out across the rocks, the king walks unarmed and alone into the hiding place of the man he is hunting.",
      "David&rsquo;s men immediately interpret this as divine provision. &ldquo;Here is the day of which the Lord said to you, &lsquo;Behold, I will give your enemy into your hand, and you shall do to him as it shall seem good to you.&rsquo;&rdquo; (24:4). Whether or not the Lord had actually promised this in those exact words, the men&rsquo;s reading of events is understandable. What could be more obviously providential than the enemy delivered, alone and defenseless, into your hands? Every circumstance seemed to confirm that this was the moment.",
    ],
  },
  {
    id: "The Cave at En Gedi",
    heading: "The Cave at En Gedi",
    reference: "1 Samuel 24:3&ndash;8",
    paragraphs: [
      "The cave becomes the setting for one of the most psychologically and theologically tense scenes in all of the Old Testament. David and his men are hidden in the depths of the cave; Saul enters and makes himself vulnerable in the most basic human way. The opportunity is total. There are no guards to intervene, no witnesses to complicate the moment, and David&rsquo;s men are urging him to act.",
      "What David does instead is extraordinary in its restraint &mdash; and in its immediate emotional aftermath. &ldquo;Then David arose and stealthily cut off a corner of Saul&rsquo;s robe&rdquo; (24:4). He does not kill. He does not even wound. He cuts off the hem of the robe &mdash; an act that in the ancient Near East carried its own significance, as the garment&rsquo;s edge symbolized the person&rsquo;s identity and authority. David takes a token of his power over Saul without using that power against him.",
      "And then: &ldquo;Afterward David&rsquo;s heart struck him, because he had cut off a corner of Saul&rsquo;s robe&rdquo; (24:5). His conscience troubles him even for this small act of symbolic dominance. This is not calculated restraint; it is genuine moral sensitivity. David feels the wrongness of even this diminishment of the king&rsquo;s dignity, and the feeling is immediate and sharp. The text does not say he reasoned his way to discomfort &mdash; his heart &ldquo;struck him,&rdquo; like a physical blow.",
      "His words to his men reveal the theological conviction that underlies his restraint: &ldquo;The Lord forbid that I should do this thing to my lord, the Lord&rsquo;s anointed, to put out my hand against him, seeing he is the Lord&rsquo;s anointed&rdquo; (24:6). David does not argue from personal danger, from strategic calculation, or even from the wrongness of killing a man who is currently defenseless. He argues from the anointing. Whatever Saul has done, whatever he deserves, the act of anointing him as king was God&rsquo;s act &mdash; and that act creates a category of person whom David refuses to violate.",
      "David restrains his men with these words and does not permit them to attack Saul. The king departs from the cave still alive, still unaware of how close to death he had come, still wearing a robe that is now shorter than when he entered. The men who had whispered that this was the day of the Lord&rsquo;s deliverance watch their leader let the moment pass &mdash; and something about how David does it seems to silence them. No argument is recorded. The theological weight of David&rsquo;s conviction settles the matter.",
    ],
  },
  {
    id: "David Spares the King",
    heading: "David Calls Out to Saul",
    reference: "1 Samuel 24:8&ndash;15",
    paragraphs: [
      "After Saul leaves the cave, David goes out and calls after him: &ldquo;My lord the king!&rdquo; When Saul looks back, David bows down with his face to the earth in homage (24:8). This gesture is itself a statement. David is not emerging to gloat or to confront; he approaches as a subject to his king, maintaining the posture of loyal service even toward a man who has been hunting him like an animal.",
      "David&rsquo;s speech is a masterpiece of honest, humble, and emotionally charged appeal. He begins by naming the slander that has been brought against him: why does Saul listen to the words of men who say, &ldquo;Behold, David seeks your harm&rdquo;? (24:9). The accusation is false; the evidence is in Saul&rsquo;s hand &mdash; or rather, in the corner of his robe. David names what his men urged him to do, what the Lord apparently &ldquo;said&rdquo; was to happen, and what he refused to do. He refused to kill, but took the piece of robe instead, so that Saul might know the truth.",
      "&ldquo;See, my father, see the corner of your robe in my hand. For by the fact that I cut off the corner of your robe and did not kill you, you may know and see that there is no wrong or treason in my hands. I have not sinned against you, though you hunt my life to take it&rdquo; (24:11). The word &ldquo;father&rdquo; is striking &mdash; David is Saul&rsquo;s son-in-law, but the term carries a warmth that goes beyond legal relationship. It is the speech of a man who is genuinely bewildered by why the one he has loved and served would want him dead.",
      "David then hands the judgment entirely to God. &ldquo;May the Lord judge between me and you, may the Lord avenge me against you, but my hand shall not be against you&rdquo; (24:12). This is not passive resignation; it is an active entrusting of the case to the only Judge who can rightly assess it. David quotes the ancient proverb &mdash; &ldquo;Out of the wicked comes wickedness&rdquo; &mdash; to insist that if he were wicked, his hand would have acted (24:13). The restraint of his hand is the evidence of his innocence.",
      "He closes with a self-deprecating image that is almost heartbreaking: &ldquo;After whom has the king of Israel come out? After whom do you pursue? After a dead dog! After a flea!&rdquo; (24:14). The king of Israel with three thousand chosen men is hunting someone who describes himself as a dead dog, a flea &mdash; something so insignificant that the entire pursuit makes no sense. It is a wrenching appeal not to pride but to the sheer absurdity of the situation, spoken by a man who is genuinely hurt and genuinely trusting God for vindication.",
    ],
  },
  {
    id: "The Lord's Anointed",
    heading: "The Theology of the Lord's Anointed",
    reference: "1 Samuel 24:6, 10",
    paragraphs: [
      "The phrase &ldquo;the Lord&rsquo;s anointed&rdquo; appears twice in David&rsquo;s speech within the cave (24:6, 10) and becomes the theological cornerstone of the entire chapter. To understand what David means by it is to understand the depth of his conviction and the source of his extraordinary restraint. The anointing in view is the same anointing that Samuel performed over Saul in 1 Samuel 10, the act by which God publicly set Saul apart as king over Israel.",
      "In the ancient Near Eastern and Israelite context, anointing with oil was a solemn consecration &mdash; an act that marked a person as belonging to God in a particular way, set apart for a particular role. To harm the Lord&rsquo;s anointed was not merely to harm a person; it was to transgress a sacred boundary established by God himself. David&rsquo;s conscience operates within this theological framework. His restraint is not about Saul the man &mdash; who has, by any ordinary human calculation, forfeited every claim to David&rsquo;s deference &mdash; but about Saul the anointed, whose status before God is not revoked by his behavior.",
      "This is a difficult and demanding theology. It does not require David to pretend that Saul is a good king, or that the injustice he is suffering is acceptable, or that he should never be king himself. David says plainly that Saul is hunting an innocent man. He does not minimize the wrong. But the question of what to do about the wrong is not settled by the weight of the wrong itself; it is settled by who has the authority to act on it. And that authority, David insists, belongs to God alone.",
      "The practical implication of this theology is the renunciation of personal vengeance, even when vengeance is physically possible, morally comprehensible, and apparently divinely sanctioned. David&rsquo;s men believe God has arranged for Saul to be killed. David does not dispute the providential character of the moment; he disputes what that providence means. The fact that God has placed Saul in his hands does not necessarily mean God wants him to use those hands against the king. The test of the moment is not whether David can act, but whether he will wait for God to act.",
      "This theology finds its fullest expression in the New Testament in the figure of Jesus, who refuses to call down twelve legions of angels to defend himself and who on the cross prays for those who are crucifying him. The pattern of David&rsquo;s restraint in the cave at En Gedi is part of the same moral and theological tradition that will ultimately find its culmination in the cross &mdash; the willingness to entrust judgment to the Father and to refrain from self-vindication even when self-vindication is within reach.",
      "It also points forward to a recurring theme in the wisdom literature: the fear of the Lord that produces genuine humility before divine authority, even when human authority has abused its calling. David&rsquo;s reverence is not for Saul the man but for the God who anointed him &mdash; and that reverence shapes every decision David makes in this chapter. This is what genuine godliness looks like: not the absence of the capacity to harm, but the theologically grounded refusal to use that capacity outside of God&rsquo;s own timing and permission.",
    ],
  },
  {
    id: "Saul's Response",
    heading: "Saul Weeps and Prophesies",
    reference: "1 Samuel 24:16&ndash;22",
    paragraphs: [
      "When David finishes speaking, Saul&rsquo;s response is immediate and overwhelming: &ldquo;Is this your voice, my son David?&rdquo; And Saul lifted up his voice and wept (24:16). The weeping is genuine. Saul has been pursuing this man with an army of three thousand, and the man he was hunting just showed him a piece of his robe and told him the truth. In that moment, the cruelty and absurdity of everything Saul has done is laid bare before him, and he breaks.",
      "The confession that follows is one of the most remarkable acknowledgments of wrongdoing by any king in all of Scripture: &ldquo;You are more righteous than I, for you have repaid me good, whereas I have repaid you evil&rdquo; (24:17). Saul does not hedge, equivocate, or offer excuses. He states plainly that David is in the right and he is in the wrong. He names what David did &mdash; spared his life when the Lord delivered him into his hand &mdash; and asks, &ldquo;Who has ever found his enemy and sent his enemy away safe?&rdquo; (24:19). The answer is obvious: almost no one. What David did was extraordinary, and Saul knows it.",
      "&ldquo;May the Lord reward you with good for what you have done to me this day&rdquo; (24:19b). Even Saul&rsquo;s blessing is a kind of prophecy. He cannot curse what God is blessing, and he seems to know it. The man he has been trying to destroy has been so clearly in the right, and his own behavior has been so clearly indefensible, that he can only call down God&rsquo;s blessing on the one he has been trying to kill.",
      "Then comes the clearest prophetic moment in the chapter: &ldquo;And now, behold, I know that you shall surely be king, and that the kingdom of Israel shall be established in your hand&rdquo; (24:20). Saul confesses, in the hearing of David and all three thousand of his men, that he knows David will be king. This is not reluctant, ambiguous, or qualified. It is a plain acknowledgment of what God is doing, spoken by the man who has spent years trying to prevent it.",
      "The request that follows is poignant: &ldquo;Swear to me therefore by the Lord that you will not cut off my offspring after me, and that you will not destroy my name out of my father&rsquo;s house&rdquo; (24:21). Saul&rsquo;s deepest fear is not for himself but for his family. He knows that when kingdoms change hands, the new king typically eliminates the old royal line to prevent future challenges. He asks David to swear that he will not do this. David swears, and they part &mdash; Saul to his home, David and his men back to the stronghold.",
      "The scene ends with an unanswered question hanging in the air. Saul has wept, confessed David&rsquo;s righteousness, acknowledged that David will be king, and received a sworn promise that his family will be spared. He knows the truth. And yet the next chapters will show that knowledge of the truth is not the same as transformation by it. The tears are real; the confession is genuine in the moment. But the pattern of Saul&rsquo;s life will not change. He will pursue David again. The cave at En Gedi reveals both the goodness of David and the tragic incompleteness of Saul&rsquo;s repentance.",
    ],
  },
];

const videoItems = [
  { videoId: "aE7zPT9Xm1Q", title: "David Spares Saul - 1 Samuel 24 Sermon" },
  { videoId: "kR2mNbLqW8s", title: "The Lord's Anointed - What David Teaches Us About Authority" },
  { videoId: "vP5cGjHdXnY", title: "1 Samuel 24 - En Gedi Cave and the Test of Character" },
  { videoId: "nQ8wJpFzKb3", title: "David and Saul - Patience, Restraint, and Trusting God" },
];

export default function Samuel24GuidePage() {
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
            1 Samuel 24 Chapter Guide
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: MUTED, lineHeight: 1.7, margin: 0 }}>
            David spares Saul&rsquo;s life in the cave at En Gedi &mdash; pursued by three thousand men, David hides in a cave into which Saul himself wanders, his men urge him to strike, but David restrains himself, refusing to harm &ldquo;the Lord&rsquo;s anointed,&rdquo; and calls out to Saul to show his innocence, moving the king to weep and confess that David will indeed be king.
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
              Deepen your study of 1 Samuel 24 through these video teachings on David&rsquo;s restraint in the cave at En Gedi, the theology of the Lord&rsquo;s anointed, and the nature of godly patience under pressure.
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
          <h3 style={{ color: ACCENT, fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.2rem" }}>My Hand Shall Not Be Against You</h3>
          <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>
            The cave at En Gedi is one of Scripture&rsquo;s greatest portraits of godly restraint. David had the power, the opportunity, and even the apparent divine sanction to act &mdash; and yet he refused, because his conscience was anchored in the fear of God rather than in the calculations of self-interest. He entrusted his case to the Lord who judges justly and waited for God&rsquo;s timing, showing that true strength is not the absence of power but the disciplined refusal to use it outside of God&rsquo;s own appointment.
          </p>
        </div>
      </main>
    </div>
  );
}
